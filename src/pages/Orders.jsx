import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, ChevronDown, ChevronUp } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { api } from '../utils/api';
import '../styles/Orders.css';

const STATUS_LABELS = {
    pending: 'Pending',
    confirmed: 'Confirmed',
    preparing: 'Preparing',
    ready: 'Ready',
    delivered: 'Delivered',
    completed: 'Completed',
    cancelled: 'Cancelled',
};

function formatDate(iso) {
    return new Date(iso).toLocaleDateString('en-NG', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
}

const OrderCard = ({ order }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="order-card">
            <div className="order-card-header" onClick={() => setExpanded(p => !p)}>
                <div className="order-meta">
                    <span className="order-id">Order #{order.id}</span>
                    <span className="order-date">{formatDate(order.created_at)}</span>
                </div>
                <div className="order-header-right">
                    <span className={`order-status status-${order.status}`}>
                        {STATUS_LABELS[order.status] || order.status}
                    </span>
                    <span className="order-total">₦{order.total.toLocaleString()}</span>
                    {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
            </div>

            {expanded && (
                <div className="order-card-body">
                    <div className="order-items-list">
                        {order.items.map(item => (
                            <div key={item.id} className="order-item-row">
                                <span className="order-item-name">{item.food_name}</span>
                                <span className="order-item-qty">× {item.quantity}</span>
                                <span className="order-item-price">
                                    ₦{(item.price * item.quantity).toLocaleString()}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="order-breakdown">
                        <div className="breakdown-row">
                            <span>Subtotal</span>
                            <span>₦{order.subtotal.toLocaleString()}</span>
                        </div>
                        {order.delivery_fee > 0 && (
                            <div className="breakdown-row">
                                <span>Delivery Fee</span>
                                <span>₦{order.delivery_fee.toLocaleString()}</span>
                            </div>
                        )}
                        <div className="breakdown-row">
                            <span>Service Fee</span>
                            <span>₦{order.service_fee.toLocaleString()}</span>
                        </div>
                        <div className="breakdown-row total-row">
                            <span>Total</span>
                            <span>₦{order.total.toLocaleString()}</span>
                        </div>
                    </div>

                    <div className="order-tags">
                        <span className="order-tag">{order.fulfillment_type === 'delivery' ? 'Delivery' : 'Pick-up'}</span>
                        <span className="order-tag">{order.payment_method}</span>
                    </div>

                    {order.special_instructions && (
                        <p className="order-note">
                            <strong>Note:</strong> {order.special_instructions}
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};

const Orders = () => {
    const { user, loading: authLoading } = useAuth();
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        if (authLoading) return;
        if (!user) { navigate('/login'); return; }

        api.get('/api/orders')
            .then(data => setOrders(data.orders))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, [user, authLoading, navigate]);

    if (authLoading || loading) {
        return (
            <div className="orders-loading">
                <p>Loading your orders…</p>
            </div>
        );
    }

    return (
        <div className="page-orders container section">
            <div className="orders-header">
                <h2>My Orders</h2>
                <p className="orders-subtitle">Track and review your past orders</p>
            </div>

            {error && <p className="orders-error">{error}</p>}

            {orders.length === 0 ? (
                <div className="orders-empty">
                    <ShoppingBag size={64} color="var(--color-primary)" />
                    <h3>No orders yet</h3>
                    <p>You haven't placed any orders. Start by exploring the menu!</p>
                    <Link to="/menu" className="btn btn-primary" style={{ marginTop: '24px' }}>
                        Explore Menu
                    </Link>
                </div>
            ) : (
                <div className="orders-list">
                    {orders.map(order => (
                        <OrderCard key={order.id} order={order} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Orders;
