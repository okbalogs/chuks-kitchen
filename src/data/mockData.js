export const categories = [
    { id: 'popular', name: 'Popular' },
    { id: 'jollof', name: 'Jollof Rice & Entrees' },
    { id: 'swallow', name: 'Swallow & Soups' },
    { id: 'grills', name: 'Grills & sides' },
    { id: 'beverages', name: 'Beverages' },
    { id: 'desserts', name: 'Desserts' }
];

import food1 from '../assets/images/food_item_1.png';
import food2 from '../assets/images/food_item_2.png';
import food3 from '../assets/images/food_item_3.png';
import food4 from '../assets/images/food_item_4.png';
import food5 from '../assets/images/food_item_5.png';
import food6 from '../assets/images/food_item_6.png';
import jollof from '../assets/images/jollof.png';
import swallow from '../assets/images/swallow.png';
import bbq from '../assets/images/bbq.png';
import sweet from '../assets/images/sweet.png';

export const foodItems = [

    {
        id: 1,
        name: 'Jollof Rice & Fried Chicken',
        description: 'Our signature Jollof rice, served with crispy fried chicken and plantain.',
        price: 3500,
        image: food1,
        category: 'popular',
        options: {
            proteins: [
                { id: 'chicken', name: 'Fried Chicken', price: 0, default: true },
                { id: 'beef', name: 'Beef', price: 500 },
                { id: 'fish', name: 'Grilled Fish', price: 700 },
                { id: 'goat', name: 'Goat Meat', price: 1000 }
            ],
            sides: [
                { id: 'plantain', name: 'Fried Plantain', price: 500 },
                { id: 'coleslaw', name: 'Coleslaw', price: 300 },
                { id: 'moi_moi', name: 'Moi Moi', price: 700 }
            ],
            tags: ['Mildly spicy', 'Vegetarian option available', 'View Allergies']
        }
    },
    {
        id: 2,
        name: 'Eba & Egusi Soup (Goat Meat)',
        description: 'Hearty Egusi soup with tender goat meat, served with soft Eba.',
        price: 3500,
        image: food2,
        category: 'popular'
    },
    {
        id: 3,
        name: 'Pounded Yam & Edikaikong',
        description: 'Traditional pounded yam with rich, leafy Edikaikong soup.',
        price: 3800,
        image: food3,
        category: 'popular'
    },
    {
        id: 16,
        name: 'Peppered Snail',
        description: 'Spicy and savory peppered snail, perfect as a starter.',
        price: 2500,
        image: bbq,
        category: 'popular'
    },
    {
        id: 17,
        name: 'Grilled Tilapia Fish',
        description: 'Whole grilled tilapia seasoned with our special spices.',
        price: 4500,
        image: bbq,
        category: 'popular'
    },
    {
        id: 18,
        name: 'Jollof Rice & Fried Chicken',
        description: 'Our signature Jollof rice, served with crispy fried chicken and plantain.',
        price: 3500,
        image: food1,
        category: 'popular'
    },

    {
        id: 4,
        name: 'Jollof Rice & Smoked Fish',
        description: 'Flavorful jollof rice served with perfectly smoked fish.',
        price: 3500,
        image: food4,
        category: 'jollof'
    },
    {
        id: 5,
        name: 'Party Jollof Rice (Veg)',
        description: 'Vegetarian party jollof, full of rich flavors.',
        price: 2800,
        image: food5,
        category: 'jollof'
    },
    {
        id: 6,
        name: 'Fried Rice & Turkey',
        description: 'Flavorful fried rice mixed with veggies and liver, served with fried turkey wings.',
        price: 3800,
        image: food6,
        category: 'jollof'
    },

    {
        id: 7,
        name: 'Amala with Gbegiri & Ewedu',
        description: 'Classic Amala served with Gbegiri (beans) and Ewedu (jute leaf) soup.',
        price: 3100,
        image: swallow,
        category: 'swallow'
    },
    {
        id: 8,
        name: 'Fufu & Okra Soup (Fish)',
        description: 'Light Fufu served with fresh okra soup and tilapia fish.',
        price: 3300,
        image: swallow,
        category: 'swallow'
    },
    {
        id: 9,
        name: 'Pounded Yam & Egusi',
        description: 'Smooth Pounded Yam served with rich Egusi soup.',
        price: 3500,
        image: swallow,
        category: 'swallow'
    },
    {
        id: 10,
        name: 'Peppered Snail',
        description: 'Spicy and savory peppered snail, perfect as a starter.',
        price: 2500,
        image: bbq,
        category: 'grills'
    },
    {
        id: 11,
        name: 'Grilled Tilapia Fish',
        description: 'Whole grilled tilapia seasoned with our special spices.',
        price: 4500,
        image: bbq,
        category: 'grills'
    },
    {
        id: 12,
        name: 'Suya Spiced Beef',
        description: 'Tender beef skewers marinated in authentic Suya spice.',
        price: 2000,
        image: bbq,
        category: 'grills'
    },
    {
        id: 13,
        name: 'Fresh Palm Wine',
        description: 'Authentic, fresh palm wine.',
        price: 1500,
        image: sweet,
        category: 'beverages'
    },
    {
        id: 14,
        name: 'Zobo Drink',
        description: 'Refreshing hibiscus drink with ginger and pineapple.',
        price: 1000,
        image: sweet,
        category: 'beverages'
    },
    {
        id: 15,
        name: 'Puff Puff (Pack of 5)',
        description: 'Sweet, fluffy fried dough balls.',
        price: 1000,
        image: sweet,
        category: 'desserts'
    }
];


