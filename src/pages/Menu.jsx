import React, { useState, useEffect } from 'react';
import FoodCard from '../components/FoodCard';
import MenuHero from '../components/MenuHero';
import { foodItems, categories } from '../data/mockData';
import '../styles/Menu.css';

const Menu = () => {
    const [activeSection, setActiveSection] = useState('popular');

    // Handle scroll to update active section in sidebar
    useEffect(() => {
        const handleScroll = () => {
            const sections = categories.map(cat => document.getElementById(cat.id));
            const scrollPosition = window.scrollY + 350; // Updated offset for taller hero

            for (const section of sections) {
                if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
                    setActiveSection(section.id);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 120, // Adjust for sticky header/sidebar
                behavior: 'smooth'
            });
            setActiveSection(id);
        }
    };

    return (
        <div className="menu-page-wrapper">
            <MenuHero />

            <div className="page-menu container section">
                {/* Header if needed, though sidebar covers navigation now */}

                <div className="menu-layout">
                    {/* Sidebar Navigation */}
                    <aside className="menu-sidebar">
                        <h3>Menu Categories</h3>
                        <div className="category-list">
                            {categories.map(category => (
                                <button
                                    key={category.id}
                                    className={`category-btn ${activeSection === category.id ? 'active' : ''}`}
                                    onClick={() => scrollToSection(category.id)}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="menu-content">
                        {categories.map(category => {
                            const categoryItems = foodItems.filter(item => item.category === category.id);

                            // Don't render empty sections
                            if (categoryItems.length === 0) return null;

                            return (
                                <section key={category.id} id={category.id} className="menu-section">
                                    <div className="section-header">
                                        <h3>{category.name}</h3>
                                    </div>
                                    <div className="food-grid">
                                        {categoryItems.map(item => (
                                            <FoodCard
                                                key={item.id}
                                                id={item.id}
                                                title={item.name}
                                                description={item.description}
                                                price={item.price}
                                                image={item.image}
                                            />
                                        ))}
                                    </div>
                                </section>
                            );
                        })}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Menu;
