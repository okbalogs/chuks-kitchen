const express = require('express');
const { body, validationResult } = require('express-validator');
const db = require('../db');
const requireAuth = require('../middleware/auth');

const router = express.Router();

// POST /api/orders  – place a new order
router.post(
    '/',
    requireAuth,
    [
        body('items').isArray({ min: 1 }).withMessage('Order must have at least one item'),
        body('items.*.id').isInt().withMessage('Each item must have a numeric id'),
        body('items.*.name').notEmpty(),
        body('items.*.price').isInt({ min: 0 }),
        body('items.*.quantity').isInt({ min: 1 }),
        body('fulfillment_type').isIn(['delivery', 'pickup']),
        body('payment_method').isIn(['card', 'bank', 'transfer']),
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const {
            items,
            fulfillment_type,
            payment_method,
            special_instructions,
            delivery_address,
            contact_phone,
        } = req.body;

        const DELIVERY_FEE = fulfillment_type === 'delivery' ? 500 : 0;
        const SERVICE_FEE = 200;
        const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
        const total = subtotal + DELIVERY_FEE + SERVICE_FEE;

        // --- Payment gateway hook (Paystack example) ---
        // To charge a card with Paystack, replace the block below with:
        //
        // const Paystack = require('paystack-node');
        // const paystack = new Paystack(process.env.PAYSTACK_SECRET_KEY);
        // const charge = await paystack.transaction.initialize({
        //   email: req.user.email,
        //   amount: total,        // in kobo (multiply by 100 for naira → kobo)
        //   callback_url: 'https://yourdomain.com/checkout/verify'
        // });
        // return res.json({ authorization_url: charge.data.authorization_url });
        // ---------------------------------------------------

        const insertOrder = db.prepare(`
            INSERT INTO orders
              (user_id, subtotal, delivery_fee, service_fee, total,
               fulfillment_type, payment_method, special_instructions,
               delivery_address, contact_phone)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `);

        const insertItem = db.prepare(`
            INSERT INTO order_items
              (order_id, food_item_id, food_name, price, quantity, options)
            VALUES (?, ?, ?, ?, ?, ?)
        `);

        const createOrder = db.transaction(() => {
            const { lastInsertRowid: orderId } = insertOrder.run(
                req.user.id,
                subtotal,
                DELIVERY_FEE,
                SERVICE_FEE,
                total,
                fulfillment_type,
                payment_method,
                special_instructions || null,
                delivery_address || null,
                contact_phone || null
            );

            for (const item of items) {
                insertItem.run(
                    orderId,
                    item.id,
                    item.name,
                    item.price,
                    item.quantity,
                    item.options ? JSON.stringify(item.options) : null
                );
            }

            return orderId;
        });

        const orderId = createOrder();

        // --- Email confirmation hook ---
        // Uncomment and configure nodemailer to send confirmation emails:
        //
        // const nodemailer = require('nodemailer');
        // const transporter = nodemailer.createTransport({
        //   host: process.env.EMAIL_HOST, port: process.env.EMAIL_PORT,
        //   auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
        // });
        // transporter.sendMail({
        //   from: process.env.EMAIL_USER,
        //   to: req.user.email,
        //   subject: 'Order confirmed – Chuks Kitchen',
        //   text: `Your order #${orderId} has been received. Total: ₦${total.toLocaleString()}`
        // });
        // -----------------------------

        const order = db.prepare('SELECT * FROM orders WHERE id = ?').get(orderId);
        const orderItems = db.prepare('SELECT * FROM order_items WHERE order_id = ?').all(orderId);

        res.status(201).json({ order: { ...order, items: orderItems } });
    }
);

// GET /api/orders  – list current user's orders
router.get('/', requireAuth, (req, res) => {
    const orders = db.prepare(
        'SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC'
    ).all(req.user.id);

    const withItems = orders.map(order => ({
        ...order,
        items: db.prepare('SELECT * FROM order_items WHERE order_id = ?').all(order.id),
    }));

    res.json({ orders: withItems });
});

// GET /api/orders/:id  – single order detail
router.get('/:id', requireAuth, (req, res) => {
    const order = db.prepare(
        'SELECT * FROM orders WHERE id = ? AND user_id = ?'
    ).get(req.params.id, req.user.id);

    if (!order) return res.status(404).json({ error: 'Order not found' });

    const items = db.prepare('SELECT * FROM order_items WHERE order_id = ?').all(order.id);
    res.json({ order: { ...order, items } });
});

module.exports = router;
