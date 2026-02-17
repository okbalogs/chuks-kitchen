import React from 'react';
import FoodCard from './FoodCard';
import '../styles/ChefSpecials.css';

// Placeholders
import heroFood from '../assets/images/hero-food.png';
import heroFamily from '../assets/images/hero-family.jpg';

const specials = [
    {
        id: 1,
        title: 'Spicy Tilapia Pepper Soup',
        description: 'A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy.',
        price: 3500,
        image: heroFood,
    },
    {
        id: 2,
        title: 'Jollof Rice & Fried Chicken',
        description: 'Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.',
        price: 3500,
        image: heroFamily,
    },
    {
        id: 3,
        title: 'Jollof Rice & Fried Chicken',
        description: 'Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.',
        price: 3500,
        image: heroFood,
    },
    {
        id: 4,
        title: 'Jollof Rice & Smoked Chicken',
        description: 'Our signature Jollof rice, cooked to perfection, served with succulent Smoked chicken.',
        price: 3500,
        image: heroFamily,
    },
    {
        id: 5,
        title: 'Jollof Rice & Fried Chicken',
        description: 'Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.',
        price: 3500,
        image: heroFood,
    },
    {
        id: 6,
        title: 'Egusi Soup & Pounded Yam',
        description: 'Rich and savory Egusi soup with assorted meats, paired with freshly pounded yam.',
        price: 3500,
        image: heroFamily,
    },
];

const ChefSpecials = () => {
    return (
        <section className="chef-specials-section">
            <div className="container">
                <h2 className="section-title">Chef's Specials</h2>
                <div className="specials-grid">
                    {specials.map((item) => (
                        <FoodCard
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ChefSpecials;
