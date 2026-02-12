import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-column brand-column">
                    <div className="footer-logo">Chuks Kitchen</div>
                    <p className="brand-description">
                        Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.
                    </p>
                </div>

                <div className="footer-column links-column">
                    <h4>Quick Links</h4>
                    <Link to="/">Home</Link>
                    <Link to="/menu">Explore</Link>
                    <Link to="/cart">My Order</Link>
                    <Link to="/login">Account</Link>
                    <Link to="/about">Contact</Link>
                </div>

                <div className="footer-column contact-column">
                    <h4>Contact Us</h4>
                    <p>+234 801 234 5678</p>
                    <p>hello@chukskitchen.com</p>
                    <p>123 Taste Blvd, Lagos, Nigeria</p>
                </div>

                <div className="footer-column social-column">
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                    <a href="#">LinkedIn</a>
                    <a href="#">Instagram</a>
                </div>
            </div>

            <div className="footer-divider"></div>

            <div className="container footer-bottom">
                <p>&copy; 2024 Chuks Kitchen. All rights reserved.</p>
                <button className="scroll-top-btn" onClick={scrollToTop}>
                    <ArrowUp size={20} />
                </button>
            </div>
        </footer>
    );
};

export default Footer;
