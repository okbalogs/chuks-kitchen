import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, MapPin, Truck } from 'lucide-react';
import heroFamily from '../assets/images/hero-family.jpg';
import heroFood from '../assets/images/hero-food.png';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-grid">
                <picture className="hero-image-container">
                    {/* Desktop Image for screens larger than 968px */}
                    <source media="(min-width: 969px)" srcSet={heroFamily} />
                    {/* Mobile Image (default or for smaller screens) */}
                    <img
                        src={heroFood}
                        alt="Delicious Nigerian Dish"
                        className="hero-img"
                    />
                </picture>

                <div className="hero-content-container">
                    {/* Custom Header: On mobile, Logo hides here and Sign In moves to top right */}
                    <header className="landing-header">
                        <div className="logo desktop-logo">
                            Chuks Kitchen
                        </div>
                        <Link to="/login" className="btn btn-outline btn-sm">
                            Sign In
                        </Link>
                    </header>

                    <div className="hero-text-content">
                        <div className="logo mobile-logo">
                            Chuks Kitchen
                        </div>
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
