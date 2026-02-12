import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import '../styles/Checkout.css';

const Checkout = () => {
    const { cartItems, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [step, setStep] = useState('summary'); // summary, form, success
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setStep('success');
            clearCart();
        }, 2000);
    };

    if (cartItems.length === 0 && step !== 'success') {
        return (
            <div className="container section">
                <p>Your cart is empty. <Link to="/menu">Go to Menu</Link></p>
            </div>
        );
    }

    if (step === 'success') {
        return (
            <div className="page-checkout container section success-view">
                <CheckCircle size={80} color="var(--color-primary)" />
                <h2>Order Placed Successfully!</h2>
                <p>Thank you for ordering from Chuks Kitchen.</p>
                <p>Your order will be delivered to <strong>{formData.address}</strong> shortly.</p>
                <Link to="/" className="btn btn-primary" style={{ marginTop: '24px' }}>
                    Back to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="page-checkout container section">
            <Link to="/cart" className="back-link">
                <ArrowLeft size={16} /> Back to Cart
            </Link>

            <h2>Checkout</h2>

            <div className="checkout-grid">
                <div className="checkout-form-container">
                    <h3>Delivery Details</h3>
                    <form id="checkout-form" onSubmit={handlePlaceOrder}>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="John Doe"
                            />
                        </div>

                        <div className="form-group">
                            <label>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="john@example.com"
                            />
                        </div>

                        <div className="form-group">
                            <label>Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="+234..."
                            />
                        </div>

                        <div className="form-group">
                            <label>Delivery Address</label>
                            <textarea
                                name="address"
                                required
                                value={formData.address}
                                onChange={handleInputChange}
                                placeholder="Enter full delivery address"
                                rows="3"
                            />
                        </div>

                        <div className="payment-method">
                            <h4>Payment Method</h4>
                            <div className="payment-option selected">
                                <div className="radio-circle"></div>
                                <span>Pay on Delivery (Cash/Transfer)</span>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="checkout-summary">
                    <h3>Order Summary</h3>
                    <div className="summary-items-list">
                        {cartItems.map(item => (
                            <div key={item.id} className="summary-item">
                                <span>{item.quantity}x {item.name}</span>
                                <span>₦{(item.price * item.quantity).toLocaleString()}</span>
                            </div>
                        ))}
                    </div>
                    <div className="summary-divider"></div>
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

                    <button
                        type="submit"
                        form="checkout-form"
                        className="btn btn-primary btn-block"
                        disabled={loading}
                    >
                        {loading ? 'Processing...' : `Place Order (₦${(cartTotal + 1000).toLocaleString()})`}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
