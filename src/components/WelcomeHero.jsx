import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, MapPin, Truck } from 'lucide-react';
import heroFamily from '../assets/images/hero-family-new.png';
import heroFood from '../assets/images/jollof_fried_chicken.png';
import '../styles/WelcomeHero.css';

const WelcomeHero = () => {
    return (
        <section className="welcome-hero-section">
            <div className="welcome-hero-grid">
                <picture className="welcome-hero-image-container">

                    <source media="(min-width: 969px)" srcSet={heroFamily} />

                    <img
                        src={heroFood}
                        alt="Delicious Nigerian Dish"
                        className="welcome-hero-img"
                    />
                </picture>

                <div className="welcome-hero-content-container">

                    <header className="welcome-landing-header">
                        <div className="logo desktop-logo">
                            Chuks Kitchen
                        </div>
                        <Link to="/login" className="btn btn-outline btn-sm">
                            Sign In
                        </Link>
                    </header>

                    <div className="welcome-hero-text-content">
                        <div className="logo mobile-logo">
                            Chuks Kitchen
                        </div>
                        <h1>Your Authentic Taste of Nigeria</h1>
                        <p>
                            Experience homemade flavors delivered fresh to your desk or home.
                            We bring the rich culinary heritage of Nigeria right to your doorstep.
                        </p>

                        <div className="welcome-hero-features">
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

                        <div className="welcome-hero-actions">
                            <Link to="/login" className="btn btn-primary btn-lg">Start Your Order</Link>
                            <Link to="/about" className="btn btn-outline btn-lg">Learn More About Us</Link>
                        </div>

                        <div className="welcome-hero-footer-text">
                            &copy; {new Date().getFullYear()} Chuks Kitchen. <Link to="/privacy">Privacy Policy</Link> <Link to="/terms">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WelcomeHero;
