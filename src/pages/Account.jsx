import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, Mail, Phone, LogOut, ShoppingBag, CheckCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { api } from '../utils/api';
import '../styles/Account.css';

const Account = () => {
    const { user, logout, updateUser, loading: authLoading } = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: user?.name || '',
        email: user?.email || '',
        phone: user?.phone || '',
    });
    const [saving, setSaving] = useState(false);
    const [saved, setSaved] = useState(false);
    const [error, setError] = useState('');

    if (authLoading) {
        return <div className="account-loading"><p>Loading…</p></div>;
    }

    if (!user) {
        navigate('/login');
        return null;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setSaved(false);
        setError('');
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setSaving(true);
        setError('');
        try {
            const data = await api.put('/api/user/profile', {
                name: formData.name || undefined,
                email: formData.email || undefined,
                phone: formData.phone || undefined,
            });
            updateUser(data.user);
            setSaved(true);
        } catch (err) {
            setError(err.message);
        } finally {
            setSaving(false);
        }
    };

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const initials = (user.name || user.email || '?')
        .split(' ')
        .map(w => w[0])
        .slice(0, 2)
        .join('')
        .toUpperCase();

    return (
        <div className="page-account container section">
            <div className="account-grid">
                <aside className="account-sidebar">
                    <div className="account-avatar">{initials}</div>
                    <div className="account-identity">
                        <h3>{user.name || 'Guest'}</h3>
                        <p>{user.email}</p>
                    </div>

                    <nav className="account-nav">
                        <Link to="/orders" className="account-nav-link">
                            <ShoppingBag size={18} /> My Orders
                        </Link>
                        <button className="account-nav-link logout-link" onClick={handleLogout}>
                            <LogOut size={18} /> Logout
                        </button>
                    </nav>
                </aside>

                <div className="account-main">
                    <h2>Edit Profile</h2>
                    <p className="account-main-subtitle">Update your personal information below.</p>

                    {error && <p className="account-error">{error}</p>}
                    {saved && (
                        <div className="account-saved-banner">
                            <CheckCircle size={18} /> Profile saved successfully.
                        </div>
                    )}

                    <form className="account-form" onSubmit={handleSave}>
                        <div className="account-field">
                            <label htmlFor="name">Full Name</label>
                            <div className="account-input-wrapper">
                                <User size={18} className="account-input-icon" />
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your full name"
                                    className="account-input"
                                />
                            </div>
                        </div>

                        <div className="account-field">
                            <label htmlFor="email">Email Address</label>
                            <div className="account-input-wrapper">
                                <Mail size={18} className="account-input-icon" />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="name@gmail.com"
                                    className="account-input"
                                />
                            </div>
                        </div>

                        <div className="account-field">
                            <label htmlFor="phone">Phone Number</label>
                            <div className="account-input-wrapper">
                                <Phone size={18} className="account-input-icon" />
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+234 801 234 5678"
                                    className="account-input"
                                />
                            </div>
                        </div>

                        <div className="account-field">
                            <label>Member Since</label>
                            <div className="account-input-wrapper">
                                <input
                                    type="text"
                                    readOnly
                                    value={new Date(user.created_at).toLocaleDateString('en-NG', {
                                        day: 'numeric', month: 'long', year: 'numeric'
                                    })}
                                    className="account-input account-input-readonly"
                                />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary account-save-btn" disabled={saving}>
                            {saving ? 'Saving…' : 'Save Changes'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Account;
