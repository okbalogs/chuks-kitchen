import React from 'react';
import FoodCard from './FoodCard';
import '../styles/ChefSpecials.css';

import jollofFriedChicken from '../assets/images/jollof_fried_chicken.png';
import jollofFriedChicken2 from '../assets/images/jollof_fried_chicken2.png';
import poundedYamEgusi from '../assets/images/pounded_yam_egusi.png';
import pepperedSnail from '../assets/images/peppered_snail.png';
import amalaGbegiri from '../assets/images/amala_gbegiri.png';
import egusiPounded from '../assets/images/egusi_pounded.png';

const specials = [
    {
        id: 1,
        title: 'Spicy Tilapia Pepper Soup',
        description: 'A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy.',
        price: 3500,
        image: pepperedSnail,
    },
    {
        id: 2,
        title: 'Jollof Rice & Fried Chicken',
        description: 'Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.',
        price: 2800,
        image: jollofFriedChicken,
    },
    {
        id: 3,
        title: 'Party Jollof Rice & Plantain',
        description: 'Smoky party-style Jollof rice served with sweet fried plantain — a Nigerian classic combo.',
        price: 3200,
        image: jollofFriedChicken2,
    },
    {
        id: 4,
        title: 'Amala & Gbegiri Soup',
        description: 'Soft dark amala paired with rich, velvety Gbegiri bean soup and assorted meat.',
        price: 3000,
        image: amalaGbegiri,
    },
    {
        id: 5,
        title: 'Pounded Yam & Egusi Soup',
        description: 'Freshly pounded yam served with rich Egusi soup loaded with vegetables and assorted proteins.',
        price: 3500,
        image: poundedYamEgusi,
    },
    {
        id: 6,
        title: 'Egusi Soup & Pounded Yam',
        description: 'Rich and savory Egusi soup with assorted meats, paired with freshly pounded yam.',
        price: 3500,
        image: egusiPounded,
    },
];

const ChefSpecials = () => {
    return (
        <section className="chef-specials-section">
            <div className="container">
                <h2 className="section-title">Chef's Specials</h2>
                <div className="specials-grid">
                    {specials.map((item, index) => (
                        <FoodCard
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ChefSpecials;
