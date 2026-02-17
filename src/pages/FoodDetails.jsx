import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { foodItems } from '../data/mockData';
import { useCart } from '../context/CartContext';
import '../styles/FoodDetails.css';
import { Clock, Leaf, Info } from 'lucide-react'; // Example icons

const FoodDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [food, setFood] = useState(null);
    const [selectedProtein, setSelectedProtein] = useState('');
    const [selectedSides, setSelectedSides] = useState([]);
    const [specialInstructions, setSpecialInstructions] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const item = foodItems.find(f => f.id === parseInt(id));
        if (item) {
            setFood(item);
            setTotalPrice(item.price);

            // Set default protein if options exist
            if (item.options && item.options.proteins) {
                const defaultProtein = item.options.proteins.find(p => p.default);
                if (defaultProtein) setSelectedProtein(defaultProtein.id);
            }
        }
    }, [id]);

    useEffect(() => {
        if (!food) return;

        let price = food.price;

        // Add protein price
        if (food.options?.proteins) {
            const protein = food.options.proteins.find(p => p.id === selectedProtein);
            if (protein) price += protein.price;
        }

        // Add sides price
        if (food.options?.sides) {
            selectedSides.forEach(sideId => {
                const side = food.options.sides.find(s => s.id === sideId);
                if (side) price += side.price;
            });
        }

        setTotalPrice(price);
    }, [selectedProtein, selectedSides, food]);

    if (!food) return <div className="loading">Loading...</div>;

    const handleSideToggle = (sideId) => {
        setSelectedSides(prev => {
            if (prev.includes(sideId)) {
                return prev.filter(id => id !== sideId);
            } else {
                return [...prev, sideId];
            }
        });
    };

    return (
        <div className="food-details-page">
            <div className="food-details-container">
                <button className="close-btn" onClick={() => navigate('/menu')}>×</button>

                <div className="details-layout">
                    <div className="details-image-container">
                        <img src={food.image} alt={food.name} className="details-img" />
                    </div>

                    <div className="details-content">
                        <div className="details-header">
                            <h1>{food.name}</h1>
                            <div className="details-price">₦{totalPrice.toLocaleString()}</div>
                            <p className="details-desc">{food.description}</p>

                            {food.options?.tags && (
                                <div className="tags-container">
                                    {food.options.tags.map((tag, index) => (
                                        <div key={index} className="tag-item">
                                            <Clock size={16} className="tag-icon" /> {/* Placeholder icon */}
                                            <span>{tag}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Protein Selection */}
                        {food.options?.proteins && (
                            <div className="options-section">
                                <h3>Choose Your Protein</h3>
                                <div className="option-group">
                                    {food.options.proteins.map(protein => (
                                        <label key={protein.id} className="option-item">
                                            <div className="option-label">
                                                <input
                                                    type="radio"
                                                    name="protein"
                                                    checked={selectedProtein === protein.id}
                                                    onChange={() => setSelectedProtein(protein.id)}
                                                />
                                                {protein.name}
                                            </div>
                                            {protein.price > 0 && <span className="option-price">+₦{protein.price}</span>}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Sides Selection */}
                        {food.options?.sides && (
                            <div className="options-section">
                                <h3>Extra Sides (Optional)</h3>
                                <div className="option-group">
                                    {food.options.sides.map(side => (
                                        <label key={side.id} className="option-item">
                                            <div className="option-label">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedSides.includes(side.id)}
                                                    onChange={() => handleSideToggle(side.id)}
                                                />
                                                {side.name}
                                            </div>
                                            <span className="option-price">+₦{side.price}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Special Instructions */}
                        <div className="options-section special-instructions">
                            <h3>Special Instructions</h3>
                            <textarea
                                placeholder="E.g no onion, food is too spicy..."
                                value={specialInstructions}
                                onChange={(e) => setSpecialInstructions(e.target.value)}
                            ></textarea>
                        </div>

                        <div className="add-to-cart-section" style={{ marginTop: '20px' }}>
                            <button
                                className="btn btn-primary btn-lg btn-block"
                                onClick={() => {
                                    // Mock adding with simple props for now, to ensure Cart works
                                    // In a real app we'd pass all options
                                    const proteinName = food.options?.proteins?.find(p => p.id === selectedProtein)?.name || '';
                                    const sidesNames = selectedSides.map(sId => food.options?.sides?.find(s => s.id === sId)?.name).filter(Boolean).join(', ');
                                    const description = [proteinName, sidesNames].filter(Boolean).join(', ');

                                    addToCart({
                                        ...food,
                                        price: totalPrice,
                                        selectedOptionsDescription: description || "Signature meal"
                                    });
                                    navigate('/cart');
                                }}
                            >
                                Add to Cart - ₦{totalPrice.toLocaleString()}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;
