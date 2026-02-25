import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/FoodCard.css';

const FoodCard = ({ id, title, description, price, image, index = 0 }) => {
    const navigate = useNavigate();

    return (
        <motion.div
            className="food-card"
            onClick={() => navigate(`/menu/${id}`)}
            style={{ cursor: 'pointer' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
            whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}
        >
            <div className="food-img-container">
                <img src={image} alt={title} className="food-img" />
            </div>
            <div className="food-info">
                <h3>{title}</h3>
                <p className="food-desc">{description}</p>
                <div className="food-action">
                    <span className="food-price">₦{(price || 0).toLocaleString()}</span>
                    <button
                        className="add-cart-btn"
                        aria-label="View details"
                        onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/menu/${id}`);
                        }}
                    >
                        +
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default FoodCard;

