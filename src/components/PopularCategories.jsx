import React from 'react';
import CategoryCard from './CategoryCard';
import '../styles/PopularCategories.css';


import heroFood from '../assets/images/hero-food.png';
import heroFamily from '../assets/images/hero-family.jpg';
import jollof from '../assets/images/jollof.png';
import swallow from '../assets/images/swallow.png';
import bbq from '../assets/images/bbq.png';
import sweet from '../assets/images/sweet.png';

const categories = [
    { id: 1, title: 'Jollof Delights', image: jollof },
    { id: 2, title: 'Swallow & Soups', image: swallow },
    { id: 3, title: 'Grills & BBQ', image: bbq },
    { id: 4, title: 'Sweet Treats', image: sweet },
    { id: 5, title: 'Soups', image: swallow },
    { id: 6, title: 'Specials', image: heroFood },
];

const PopularCategories = () => {
    return (
        <section className="popular-categories-section">
            <div className="container">
                <h2 className="section-title">Popular Categories</h2>
                <div className="categories-grid">
                    {categories.map((category, index) => (
                        <CategoryCard key={index} title={category.title} image={category.image} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularCategories;
