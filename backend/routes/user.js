const express = require('express');
const { body, validationResult } = require('express-validator');
const db = require('../db');
const requireAuth = require('../middleware/auth');

const router = express.Router();

function safeUser(user) {
    const { password_hash, ...rest } = user;
    return rest;
}

// GET /api/user/profile
router.get('/profile', requireAuth, (req, res) => {
    const user = db.prepare('SELECT * FROM users WHERE id = ?').get(req.user.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json({ user: safeUser(user) });
});

// PUT /api/user/profile
router.put(
    '/profile',
    requireAuth,
    [
        body('name').optional().trim().notEmpty().withMessage('Name cannot be blank'),
        body('email').optional().isEmail().normalizeEmail().withMessage('Invalid email'),
        body('phone').optional().isMobilePhone().withMessage('Invalid phone number'),
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const { name, email, phone } = req.body;
        const user = db.prepare('SELECT * FROM users WHERE id = ?').get(req.user.id);
        if (!user) return res.status(404).json({ error: 'User not found' });

        if (email && email !== user.email) {
            const conflict = db.prepare('SELECT id FROM users WHERE email = ? AND id != ?').get(email, req.user.id);
            if (conflict) return res.status(409).json({ error: 'Email already in use' });
        }

        db.prepare(`
            UPDATE users
            SET name  = COALESCE(?, name),
                email = COALESCE(?, email),
                phone = COALESCE(?, phone)
            WHERE id = ?
        `).run(name ?? null, email ?? null, phone ?? null, req.user.id);

        const updated = db.prepare('SELECT * FROM users WHERE id = ?').get(req.user.id);
        res.json({ user: safeUser(updated) });
    }
);

module.exports = router;
