import React from 'react';
import '../styles/MenuHero.css';
import heroImage from '../assets/images/explorehero.png';

const MenuHero = () => {
    return (
        <section className="menu-hero">
            <div className="menu-hero-bg">
                <img src={heroImage} alt="Chuks Kitchen Spread" className="menu-hero-img" />
                <div className="menu-hero-overlay"></div>
            </div>

            <div className="menu-hero-content container">
                <h1>Chuks Kitchen</h1>
                <p>Chuks Kitchen Nigerian Home Cooking  4.8 (1.2k)</p>
            </div>
        </section>
    );
};

export default MenuHero;
