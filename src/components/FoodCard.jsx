import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/FoodCard.css';

const FoodCard = ({ id, title, description, price, image }) => {
    const navigate = useNavigate();

    return (
        <div className="food-card" onClick={() => navigate(`/menu/${id}`)} style={{ cursor: 'pointer' }}>
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
        </div>
    );
};

export default FoodCard;
