import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, MapPin, Truck } from 'lucide-react';
import heroImage from '../assets/images/hero-family.jpg';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-grid">
                <img
                    src={heroImage}
                    alt="Family enjoying a meal"
                    className="hero-img"
                />

                <div className="hero-content-container">
                    {/* Custom Header for Landing Page */}
                    <header className="landing-header">
                        <div className="logo">
                            Chuks Kitchen
                        </div>
                        <Link to="/login" className="btn btn-outline btn-sm">
                            Sign In
                        </Link>
                    </header>

                    <div className="hero-text-content">
                        <h1>Your Authentic Taste of Nigeria</h1>
                        <p>
                            Experience homemade flavors delivered fresh to your desk or home.
                            We bring the rich culinary heritage of Nigeria right to your doorstep.
                        </p>

                        <div className="hero-features">
                            <div className="feature-item">
                                <div className="feature-icon bg-orange">
                                    <Utensils size={20} color="#FF7A18" />
                                </div>
                                <span>Freshly Prepared</span>
                            </div>

                            <div className="feature-item">
                                <div className="feature-icon bg-orange">
                                    <MapPin size={20} color="#FF7A18" />
                                </div>
                                <span>Support Local Business</span>
                            </div>

                            <div className="feature-item">
                                <div className="feature-icon bg-orange">
                                    <Truck size={20} color="#FF7F50" />
                                </div>
                                <span>Fast & Reliable Delivery</span>
                            </div>
                        </div>

                        <div className="hero-actions">
                            <Link to="/menu" className="btn btn-primary btn-lg">Start Your Order</Link>
                            <Link to="/about" className="btn btn-outline btn-lg">Learn More About Us</Link>
                        </div>

                        <div className="hero-footer-text">
                            &copy; {new Date().getFullYear()} Chuks Kitchen. <Link to="/privacy">Privacy Policy</Link> <Link to="/terms">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
