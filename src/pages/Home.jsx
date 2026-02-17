import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PopularCategories from '../components/PopularCategories';
import ChefSpecials from '../components/ChefSpecials';
import MenuBanner from '../components/MenuBanner';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="page-home">
            <Navbar />
            <Hero />
            <PopularCategories />
            <ChefSpecials />
            <MenuBanner />
            <Footer />
        </div>
    );
};

export default Home;
