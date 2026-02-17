import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu as MenuIcon, X } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="navbar-home">
            <div className="container navbar-content">
                <Link to="/home" className="logo">
                    Chuks Kitchen
                </Link>

                <div className={`nav-links-center ${isMenuOpen ? 'mobile-open' : ''}`}>
                    <Link to="/home" className="nav-link" onClick={toggleMenu}>Home</Link>
                    <Link to="/menu" className="nav-link" onClick={toggleMenu}>Explore</Link>
                    <Link to="/orders" className="nav-link" onClick={toggleMenu}>My Orders</Link>
                    <Link to="/account" className="nav-link" onClick={toggleMenu}>Account</Link>
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
    );
};

export default Navbar;
