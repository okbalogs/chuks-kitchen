import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, X } from 'lucide-react';
import Footer from './Footer';
import '../styles/Layout.css';
import '../styles/Navbar.css';

const Layout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

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
                            <Link to="/login" className="btn btn-primary login-btn">Login</Link>
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
