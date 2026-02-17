import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import '../styles/Cart.css';

const Cart = () => {
    const { cartItems, updateQuantity, removeFromCart } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="page-cart container section empty-cart">
                <div className="empty-cart-content">
                    <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🛒</div>
                    <h2>Your Cart is Empty</h2>
                    <p>Looks like you haven't added any meals yet.</p>
                    <Link to="/menu" className="btn btn-primary" style={{ marginTop: '24px' }}>
                        Browse Menu
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="page-cart container section">
            <h2 className="cart-header-title">Your Cart</h2>

            <div className="cart-list">
                {cartItems.map(item => (
                    <div key={item.id} className="cart-item-card">
                        <div className="cart-item-img-container">
                            <img src={item.image} alt={item.name} className="cart-item-img" />
                        </div>

                        <div className="cart-item-info">
                            <h3 className="cart-item-title">{item.name}</h3>
                            {/* Static description for now as option details aren't fully piped yet */}
                            <p className="cart-item-desc">
                                {item.selectedOptionsDescription || "Signature meal with authentic flavors"}
                            </p>
                        </div>

                        <div className="cart-item-actions">
                            <div className="qty-controls">
                                <button className="qty-btn" onClick={() => updateQuantity(item.id, 1)}>
                                    <Plus size={16} />
                                </button>
                                <span className="qty-val">{item.quantity}</span>
                                <button className="qty-btn" onClick={() => updateQuantity(item.id, -1)}>
                                    <Minus size={16} />
                                </button>
                            </div>

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
                ))}
            </div>

            <div className="cart-footer-actions">
                <Link to="/menu" className="add-more-btn">
                    <Plus size={18} /> Add more items from Chuks Kitchen
                </Link>
            </div>

            {/* Total and Checkout - kept simple or hidden as per screenshot only showed list? 
                Screenshot shows list but checkout flow implies a total is needed. 
                I'll keep a simple total section below or leave it implicit if user only wants the list view match.
                The screenshot is just the list. But a real cart needs checkout. 
                I will add a checkout button below the "Add more" link to be functional.
            */}
            <div className="cart-summary" style={{ marginTop: '40px', textAlign: 'right' }}>
                <Link to="/checkout" className="btn btn-primary btn-lg">
                    Checkout
                </Link>
            </div>
        </div>
    );
};

export default Cart;
