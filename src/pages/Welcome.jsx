import React from 'react';
import WelcomeHero from '../components/WelcomeHero';
import Footer from '../components/Footer';

const Welcome = () => {
    return (
        <div className="page-welcome">
            <WelcomeHero />
            <Footer />
        </div>
    );
};

export default Welcome;
