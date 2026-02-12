import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import '../styles/FoodCard.css';

const FoodCard = ({ item }) => {
    const { addToCart } = useCart();

    return (
        <div className="food-card">
            <div className="card-image">
                <img src={item.image} alt={item.name} />
                <span className="category-tag">{item.category}</span>
            </div>
            <div className="card-content">
                <div className="card-header">
                    <h3>{item.name}</h3>
                    <div className="rating">
                        <Star size={14} fill="#FFC107" stroke="#FFC107" />
                        <span>{item.rating}</span>
                    </div>
                </div>
                <p className="description">{item.description}</p>
                <div className="card-footer">
                    <span className="price">₦{item.price.toLocaleString()}</span>
                    <button
                        className="add-btn"
                        onClick={() => addToCart(item)}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
