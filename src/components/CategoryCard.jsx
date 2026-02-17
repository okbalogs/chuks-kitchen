import React from 'react';
import '../styles/PopularCategories.css';

const CategoryCard = ({ title, image }) => {
    return (
        <div className="category-card">
            <div className="category-img-container">
                <img src={image} alt={title} className="category-img" />
            </div>
            <div className="category-info">
                <h3>{title}</h3>
            </div>
        </div>
    );
};

export default CategoryCard;
