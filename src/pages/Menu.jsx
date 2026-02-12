import React, { useState } from 'react';
import FoodCard from '../components/FoodCard';
import { foodItems, categories } from '../data/mockData';
import '../styles/Menu.css';

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredItems = activeCategory === 'all'
        ? foodItems
        : foodItems.filter(item => item.category === activeCategory);

    return (
        <div className="page-menu container section">
            <div className="menu-header">
                <h2>Our Menu</h2>
                <p>Explore our wide variety of delicious meals</p>
            </div>

            <div className="category-filter">
                {categories.map(category => (
                    <button
                        key={category.id}
                        className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category.id)}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            <div className="food-grid">
                {filteredItems.map(item => (
                    <FoodCard key={item.id} item={item} />
                ))}
            </div>

            {filteredItems.length === 0 && (
                <div className="empty-state">
                    <p>No items found in this category.</p>
                </div>
            )}
        </div>
    );
};

export default Menu;
