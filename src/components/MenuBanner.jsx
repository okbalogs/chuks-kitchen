import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MenuBanner.css';
import heroFood from '../assets/images/hero-food.png';

const MenuBanner = () => {
    return (
        <section className="menu-banner-section">
            <div className="banner-bg-container">
                <img src={heroFood} alt="New Menu Additions" className="banner-bg-img" />
                <div className="banner-overlay"></div>
            </div>

            <div className="banner-content container">
                <h2>Introducing Our New Menu Additions!</h2>
                <p>
                    Explore exciting new dishes, crafted with the freshest 
                    ingredients and authentic Nigerian flavors. Limited time offer!
                </p>
                <Link to="/menu" className="btn btn-primary btn-lg">Discover what's new</Link>
            </div>
        </section>
    );
};

export default MenuBanner;
