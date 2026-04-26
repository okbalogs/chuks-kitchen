import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu as MenuIcon, X, User } from 'lucide-react';
import Footer from './Footer';
import { useAuth } from '../context/AuthContext';
import '../styles/Layout.css';
import '../styles/Navbar.css';

const Layout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const handleLogout = () => {
        closeMenu();
        logout();
        navigate('/');
    };

    return (
        <div className="app-container">
            <nav className="navbar-home">
                <div className="container navbar-content">
                    <Link to="/home" className="logo" onClick={closeMenu}>
                        Chuks Kitchen
                    </Link>

                    <div className={`nav-links-center ${isMenuOpen ? 'mobile-open' : ''}`}>
                        <Link to="/home" className={`nav-link ${location.pathname === '/home' ? 'active' : ''}`} onClick={closeMenu}>Home</Link>
                        <Link to="/menu" className={`nav-link ${location.pathname === '/menu' ? 'active' : ''}`} onClick={closeMenu}>Explore</Link>
                        <Link to="/orders" className={`nav-link ${location.pathname === '/orders' ? 'active' : ''}`} onClick={closeMenu}>My Orders</Link>
                        <Link to="/account" className={`nav-link ${location.pathname === '/account' ? 'active' : ''}`} onClick={closeMenu}>Account</Link>
                    </div>

                    <div className="nav-actions">
                        <div className="nav-auth desktop-only">
                            {user ? (
                                <div className="nav-user-group">
                                    <Link to="/account" className="nav-user-chip" onClick={closeMenu}>
                                        <User size={16} />
                                        <span>{user.name || user.email.split('@')[0]}</span>
                                    </Link>
                                    <button className="btn btn-outline-sm logout-nav-btn" onClick={handleLogout}>
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <Link to="/login" className="btn btn-primary login-btn">Login</Link>
                            )}
                        </div>
                        <button className="icon-btn mobile-menu-btn" onClick={toggleMenu}>
                            {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            <main className="main-content">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
