import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Search from './Search';
import heroFamily from '../assets/images/hero-family.jpg';
import heroFood from '../assets/images/hero-food.png';
import heroHome from '../assets/images/hero-home.png';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-bg-wrapper">
                <img src={heroHome} alt="Table full of Nigerian food" className="hero-bg-img" />
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-content">
                <header className="hero-header">

                </header>

                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                >
                    <h1>The Heart of Nigerian Home Cooking</h1>
                    <p>Handcrafted with passion, delivered with care.</p>
                    <Link to="/menu" className="btn btn-primary btn-lg">Discover what's new</Link>
                </motion.div>
            </div>

            <Search />
        </section>
    );
};

export default Hero;

