import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import '../styles/Cart.css';

const Cart = () => {
    const { cartItems, updateQuantity, removeFromCart } = useCart();

    if (cartItems.length === 0) {
        return (
            <motion.div
                className="page-cart container section empty-cart"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
            >
                <div className="empty-cart-content">
                    <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🛒</div>
                    <h2>Your Cart is Empty</h2>
                    <p>Looks like you haven't added any meals yet.</p>
                    <Link to="/menu" className="btn btn-primary" style={{ marginTop: '24px' }}>
                        Browse Menu
                    </Link>
                </div>
            </motion.div>
        );
    }

    return (
        <div className="page-cart container section">
            <h2 className="cart-header-title">Your Cart</h2>

            <div className="cart-list">
                <AnimatePresence>
                    {cartItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="cart-item-card"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 30, transition: { duration: 0.25 } }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            layout
                        >
                            <div className="cart-item-img-container">
                                <img src={item.image} alt={item.name} className="cart-item-img" />
                            </div>

                            <div className="cart-item-right">
                                <h3 className="cart-item-title">{item.name}</h3>

                                <p className="cart-item-desc">
                                    {item.selectedOptionsDescription || "Signature meal with authentic flavors"}
                                </p>

                                <div className="cart-item-qty-row">
                                    <button className="qty-btn" onClick={() => updateQuantity(item.id, 1)}>
                                        <Plus size={16} />
                                    </button>
                                    <span className="qty-val">{item.quantity}</span>
                                    <button className="qty-btn" onClick={() => updateQuantity(item.id, -1)}>
                                        <Minus size={16} />
                                    </button>
                                </div>

                                <div className="cart-item-bottom-row">
                                    <div className="item-price-display">
                                        ₦{(item.price * item.quantity).toLocaleString()}
                                    </div>
                                    <button
                                        className="remove-item-btn"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        <X size={16} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <div className="cart-footer-actions">
                <Link to="/menu" className="add-more-btn">
                    <Plus size={18} /> Add more items from Chuks Kitchen
                </Link>
            </div>

            <div className="cart-summary" style={{ marginTop: '40px', textAlign: 'right' }}>
                <Link to="/checkout" className="btn btn-primary btn-lg">
                    Checkout
                </Link>
            </div>
        </div>
    );
};

export default Cart;

