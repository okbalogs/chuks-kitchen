import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CheckCircle } from 'lucide-react';
import '../styles/Checkout.css';

const DELIVERY_FEE = 500;
const SERVICE_FEE = 200;
const TAX = 0;

const Checkout = () => {
    const { cartItems, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [step, setStep] = useState('summary');
    const [loading, setLoading] = useState(false);
    const [promoCode, setPromoCode] = useState('');
    const [fulfillment, setFulfillment] = useState('delivery');
    const [specialInstructions, setSpecialInstructions] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('card');

    const [deliveryData, setDeliveryData] = useState({
        address: 'Home: 123 Main Street, Victoria Island, Lagos\nApt 4B, Opposite Mega Plaza',
        deliveryTime: 'ASAP(30-25)',
        deliveryInstructions: '',
        contactPhone: ''
    });

    const [cardData, setCardData] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        saveCard: false
    });

    const total = cartTotal + (fulfillment === 'delivery' ? DELIVERY_FEE : 0) + SERVICE_FEE + TAX;

    const handleDeliveryChange = (e) => {
        const { name, value } = e.target;
        setDeliveryData(prev => ({ ...prev, [name]: value }));
    };

    const handleCardChange = (e) => {
        const { name, value, type, checked } = e.target;
        setCardData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setStep('success');
            clearCart();
        }, 2000);
    };

    if (cartItems.length === 0 && step !== 'success') {
        return (
            <div className="checkout-empty container section">
                <p>Your cart is empty. <Link to="/menu">Go to Menu</Link></p>
            </div>
        );
    }

    if (step === 'success') {
        return (
            <div className="checkout-success-view">
                <CheckCircle size={80} color="var(--color-primary)" />
                <h2>Order Placed Successfully!</h2>
                <p>Thank you for ordering from Chuks Kitchen. Your meal is being prepared.</p>
                <Link to="/home" className="btn btn-primary btn-lg" style={{ marginTop: '24px', display: 'inline-block' }}>
                    Back to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="page-checkout">

            {step === 'summary' && (
                <div className="checkout-card">
                    <h2 className="checkout-card-title">Order Summary</h2>
                    <div className="checkout-divider"></div>

                    <div className="promo-row">
                        <h4>Add a Promo Code</h4>
                        <div className="promo-input-group">
                            <input
                                type="text"
                                placeholder="Enter Code here"
                                value={promoCode}
                                onChange={(e) => setPromoCode(e.target.value)}
                                className="promo-input"
                            />
                            <button className="btn btn-primary promo-btn">Login</button>
                        </div>
                    </div>

                    <div className="summary-rows">
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>₦{cartTotal.toLocaleString()}</span>
                        </div>
                        <div className="summary-row">
                            <span>Delivery Fee</span>
                            <span>₦{(fulfillment === 'delivery' ? DELIVERY_FEE : 0).toLocaleString()}</span>
                        </div>
                        <div className="summary-row">
                            <span>Service Fee</span>
                            <span>₦{SERVICE_FEE.toLocaleString()}</span>
                        </div>
                        <div className="summary-row">
                            <span>Tax</span>
                            <span>₦{TAX}</span>
                        </div>
                    </div>

                    <div className="summary-total-row">
                        <span>Total</span>
                        <span className="summary-total-amount">₦{total.toLocaleString()}</span>
                    </div>

                    <div className="fulfillment-toggle">
                        <button
                            className={`fulfillment-btn ${fulfillment === 'delivery' ? 'active' : ''}`}
                            onClick={() => setFulfillment('delivery')}
                        >
                            Delivery
                        </button>
                        <button
                            className={`fulfillment-btn ${fulfillment === 'pickup' ? 'active' : ''}`}
                            onClick={() => setFulfillment('pickup')}
                        >
                            Pick up
                        </button>
                    </div>

                    <div className="special-instructions-section">
                        <h4>Special Instructions for Restaurant</h4>
                        <textarea
                            placeholder="E.g no onion, food is too spicy, food is too hot"
                            value={specialInstructions}
                            onChange={(e) => setSpecialInstructions(e.target.value)}
                            className="special-instructions-textarea"
                            rows={4}
                        />
                    </div>

                    <button
                        className="btn btn-primary proceed-btn"
                        onClick={() => setStep(fulfillment === 'delivery' ? 'delivery' : 'payment')}
                    >
                        Proceed to Checkout
                    </button>
                </div>
            )}

            {step === 'delivery' && (
                <div className="checkout-card">
                    <h2 className="checkout-card-title">Delivery Details</h2>

                    <div className="delivery-address-box">
                        <div className="delivery-address-text">
                            <span className="address-label">Home:</span> 123 Main Street, Victoria Island, Lagos<br />
                            Apt 4B, Opposite Mega Plaza
                        </div>
                        <button className="change-address-btn">Change Address</button>
                    </div>

                    <div className="delivery-field">
                        <h4>Delivery Time</h4>
                        <input
                            type="text"
                            name="deliveryTime"
                            value={deliveryData.deliveryTime}
                            onChange={handleDeliveryChange}
                            className="delivery-input"
                        />
                    </div>

                    <div className="delivery-field">
                        <h4>Delivery Instructions (Optional)</h4>
                        <textarea
                            name="deliveryInstructions"
                            value={deliveryData.deliveryInstructions}
                            onChange={handleDeliveryChange}
                            placeholder="E.g leave at the front of the door, knock twice..............."
                            className="delivery-textarea"
                            rows={4}
                        />
                    </div>

                    <div className="delivery-field">
                        <h4>Contact Address</h4>
                        <input
                            type="tel"
                            name="contactPhone"
                            value={deliveryData.contactPhone}
                            onChange={handleDeliveryChange}
                            placeholder="+234 801 234 5678"
                            className="delivery-input"
                        />
                    </div>

                    <div className="checkout-nav-btns">
                        <button className="btn-outline-back" onClick={() => setStep('summary')}>← Back</button>
                        <button className="btn btn-primary proceed-btn" onClick={() => setStep('payment')}>
                            Continue to Payment
                        </button>
                    </div>
                </div>
            )}

            {step === 'payment' && (
                <div className="checkout-card">
                    <h2 className="checkout-card-title">Payment</h2>
                    <div className="checkout-divider"></div>

                    <div className="payment-method-row">
                        <span className="pay-with-label">Pay With:</span>
                        <div className="payment-options-group">
                            {['card', 'bank', 'transfer'].map((method) => (
                                <label key={method} className="payment-radio-label">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value={method}
                                        checked={paymentMethod === method}
                                        onChange={() => setPaymentMethod(method)}
                                    />
                                    <span>{method.charAt(0).toUpperCase() + method.slice(1)}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {paymentMethod === 'card' && (
                        <form onSubmit={handlePlaceOrder} className="card-form">
                            <div className="card-field">
                                <label>Card Number</label>
                                <input
                                    type="text"
                                    name="cardNumber"
                                    placeholder="1234  5678  9101  1121"
                                    value={cardData.cardNumber}
                                    onChange={handleCardChange}
                                    className="card-input"
                                    maxLength={19}
                                />
                            </div>
                            <div className="card-field-row">
                                <div className="card-field">
                                    <label>Expiration Date</label>
                                    <input
                                        type="text"
                                        name="expiryDate"
                                        placeholder="MM/YY"
                                        value={cardData.expiryDate}
                                        onChange={handleCardChange}
                                        className="card-input"
                                        maxLength={5}
                                    />
                                </div>
                                <div className="card-field">
                                    <label>CVV</label>
                                    <input
                                        type="text"
                                        name="cvv"
                                        placeholder="123"
                                        value={cardData.cvv}
                                        onChange={handleCardChange}
                                        className="card-input"
                                        maxLength={4}
                                    />
                                </div>
                            </div>
                            <label className="save-card-label">
                                <input
                                    type="checkbox"
                                    name="saveCard"
                                    checked={cardData.saveCard}
                                    onChange={handleCardChange}
                                />
                                <span>Save card details</span>
                            </label>

                            <button type="submit" className="btn btn-primary proceed-btn" disabled={loading}>
                                {loading ? 'Processing...' : `Pay ₦${total.toLocaleString()}`}
                            </button>
                        </form>
                    )}

                    {paymentMethod !== 'card' && (
                        <div className="non-card-payment">
                            <p>You selected <strong>{paymentMethod === 'bank' ? 'Bank' : 'Transfer'}</strong> payment. Complete payment at checkout.</p>
                            <button className="btn btn-primary proceed-btn" onClick={handlePlaceOrder} disabled={loading}>
                                {loading ? 'Processing...' : `Pay ₦${total.toLocaleString()}`}
                            </button>
                        </div>
                    )}

                    <p className="payment-disclaimer">
                        Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
                    </p>

                    <button className="btn-outline-back" onClick={() => setStep(fulfillment === 'delivery' ? 'delivery' : 'summary')}>← Back</button>
                </div>
            )}
        </div>
    );
};

export default Checkout;
