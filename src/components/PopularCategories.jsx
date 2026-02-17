import React from 'react';
import CategoryCard from './CategoryCard';
import '../styles/PopularCategories.css';

// Import images (using placeholders for now)
import heroFood from '../assets/images/hero-food.png';
import heroFamily from '../assets/images/hero-family.jpg';

const categories = [
    { id: 1, title: 'Jollof Delights', image: heroFood },
    { id: 2, title: 'Swallow & Soups', image: heroFamily }, // Placeholder
    { id: 3, title: 'Grills & BBQ', image: heroFood },      // Placeholder
    { id: 4, title: 'Sweet Treats', image: heroFamily },    // Placeholder
    { id: 5, title: 'Jollof Delights', image: heroFood },   // Repeated as per design
    { id: 6, title: 'Jollof Delights', image: heroFood },   // Repeated as per design
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
