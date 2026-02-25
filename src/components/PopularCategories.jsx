import React from 'react';
import { motion } from 'framer-motion';
import CategoryCard from './CategoryCard';
import '../styles/PopularCategories.css';

import jollofFriedChicken from '../assets/images/jollof_fried_chicken.png';
import fufu_okra from '../assets/images/fufu_okra.png';
import pepperedSnail from '../assets/images/peppered_snail.png';
import sweet from '../assets/images/sweet.png';
import amalaGbegiri from '../assets/images/amala_gbegiri.png';
import jollofPlantain from '../assets/images/jollof_plantain.png';

const categories = [
    { id: 1, title: 'Jollof Delights', image: jollofFriedChicken },
    { id: 2, title: 'Swallow & Soups', image: fufu_okra },
    { id: 3, title: 'Grills & BBQ', image: pepperedSnail },
    { id: 4, title: 'Sweet Treats', image: sweet },
    { id: 5, title: 'Soups', image: amalaGbegiri },
    { id: 6, title: 'Specials', image: jollofPlantain },
];

const PopularCategories = () => {
    return (
        <section className="popular-categories-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Popular Categories
                </motion.h2>
                <div className="categories-grid">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: '-30px' }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                        >
                            <CategoryCard title={category.title} image={category.image} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularCategories;

