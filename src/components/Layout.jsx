import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu as MenuIcon, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Footer from './Footer';
import '../styles/Layout.css';

const Layout = () => {
    const { cartCount } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <div className="app-container">
            <header className="navbar">
                <div className="container navbar-content">
                    <Link to="/" className="logo" onClick={closeMenu}>
                        Chuks Kitchen
                    </Link>


                    <nav className="nav-links">
                        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                        <Link to="/menu" className={location.pathname === '/menu' ? 'active' : ''}>Menu</Link>
                        <Link to="/about">About Us</Link>
                    </nav>

                    <div className="nav-actions">
                        <div className="search-bar">
                            <Search size={18} />
                            <input type="text" placeholder="Search" />
                        </div>

                        <Link to="/cart" className="icon-btn" onClick={closeMenu}>
                            <ShoppingCart size={24} />
                            {cartCount > 0 && <span className="badge">{cartCount}</span>}
                        </Link>

                        <Link to="/login" className="icon-btn desktop-only">
                            <User size={24} />
                        </Link>

                        <button className="icon-btn mobile-menu-btn" onClick={toggleMenu}>
                            {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
                        </button>
                    </div>
                </div>
            </header>


            <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
                <nav className="mobile-nav-links">
                    <Link to="/" onClick={closeMenu}>Home</Link>
                    <Link to="/menu" onClick={closeMenu}>Menu</Link>
                    <Link to="/about" onClick={closeMenu}>About Us</Link>
                    <Link to="/login" onClick={closeMenu}>Sign In / Register</Link>
                </nav>
            </div>

            <main className="main-content">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
