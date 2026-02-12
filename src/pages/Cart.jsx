import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import '../styles/Cart.css';

const Cart = () => {
    const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

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
            <Link to="/menu" className="back-link">
                <ArrowLeft size={16} /> Back to Menu
            </Link>

            <h2>Your Cart ({cartItems.length} items)</h2>

            <div className="cart-container">
                <div className="cart-items">
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <div className="cart-item-image">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="cart-item-details">
                                <h3>{item.name}</h3>
                                <p className="item-price">₦{item.price.toLocaleString()}</p>
                            </div>
                            <div className="cart-item-actions">
                                <div className="quantity-controls">
                                    <button onClick={() => updateQuantity(item.id, -1)}>
                                        <Minus size={16} />
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, 1)}>
                                        <Plus size={16} />
                                    </button>
                                </div>
                                <button
                                    className="remove-btn"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                            <div className="cart-item-total">
                                ₦{(item.price * item.quantity).toLocaleString()}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cart-summary">
                    <h3>Order Summary</h3>
                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span>₦{cartTotal.toLocaleString()}</span>
                    </div>
                    <div className="summary-row">
                        <span>Delivery Fee</span>
                        <span>₦1,000</span>
                    </div>
                    <div className="summary-divider"></div>
                    <div className="summary-row total">
                        <span>Total</span>
                        <span>₦{(cartTotal + 1000).toLocaleString()}</span>
                    </div>

                    <Link to="/checkout" className="btn btn-primary btn-block">
                        Proceed to Checkout
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;
