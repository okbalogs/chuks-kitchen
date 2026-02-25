export const categories = [
    { id: 'popular', name: 'Popular' },
    { id: 'jollof', name: 'Jollof Rice & Entrees' },
    { id: 'swallow', name: 'Swallow & Soups' },
    { id: 'grills', name: 'Grills & Sides' },
    { id: 'beverages', name: 'Beverages' },
    { id: 'desserts', name: 'Desserts' }
];

import jollofFriedChicken from '../assets/images/jollof_fried_chicken.png';
import jollofFriedChicken2 from '../assets/images/jollof_fried_chicken2.png';
import poundedYamEdikaikong from '../assets/images/pounded_yam_edikaikong.png';
import poundedYamEgusi from '../assets/images/pounded_yam_egusi.png';
import pepperedSnail from '../assets/images/peppered_snail.png';
import grilledTilapia from '../assets/images/grilled_tilapia.png';
import jollofSmokedFish from '../assets/images/jollof_smoked_fish.png';
import jollofPlantain from '../assets/images/jollof_plantain.png';
import amalaGbegiri from '../assets/images/amala_gbegiri.png';
import fufu_okra from '../assets/images/fufu_okra.png';
import egusiPounded from '../assets/images/egusi_pounded.png';
import bbq from '../assets/images/bbq.png';
import sweet from '../assets/images/sweet.png';

export const foodItems = [
    {
        id: 1,
        name: 'Jollof Rice & Fried Chicken',
        description: 'Our signature Jollof rice, cooked to perfection with aromatic spices, served with juicy, golden-fried chicken. A classic Nigerian comfort food.',
        price: 2800,
        image: jollofFriedChicken,
        category: 'popular',
        options: {
            proteins: [
                { id: 'chicken', name: 'Fried Chicken', price: 0, default: true },
                { id: 'fish', name: 'Grilled Fish', price: 500 },
                { id: 'beef', name: 'Beef', price: 700 }
            ],
            sides: [
                { id: 'plantain', name: 'Fried Plantain', price: 700 },
                { id: 'coleslaw', name: 'Coleslaw', price: 500 },
                { id: 'pepper_sauce', name: 'Extra Pepper Sauce', price: 300 }
            ],
            tags: ['Mildly spicy', 'View Allergies', 'Vegetarian option available']
        }
    },
    {
        id: 2,
        name: 'Pounded Yam & Egusi Soup',
        description: 'Smooth pounded yam served with rich, hearty Egusi soup cooked with assorted meats and crayfish.',
        price: 3500,
        image: poundedYamEgusi,
        category: 'popular'
    },
    {
        id: 3,
        name: 'Pounded Yam & Edikaikong',
        description: 'Traditional pounded yam with rich, leafy Edikaikong soup packed with assorted meats and seafood.',
        price: 3800,
        image: poundedYamEdikaikong,
        category: 'popular'
    },
    {
        id: 16,
        name: 'Peppered Snail',
        description: 'Spicy and savory peppered snail, a delicate Nigerian delicacy. Perfect as a starter or main.',
        price: 2500,
        image: pepperedSnail,
        category: 'popular'
    },
    {
        id: 17,
        name: 'Grilled Tilapia Fish',
        description: 'Whole grilled tilapia seasoned with our special blend of herbs and spices, served with fresh salad.',
        price: 4500,
        image: grilledTilapia,
        category: 'popular'
    },
    {
        id: 18,
        name: 'Jollof Rice & Fried Chicken (Special)',
        description: 'Our signature Jollof rice served with crispy fried chicken, coleslaw and fried plantain on the side.',
        price: 3500,
        image: jollofFriedChicken2,
        category: 'popular'
    },
    {
        id: 4,
        name: 'Jollof Rice & Smoked Fish',
        description: 'Flavorful jollof rice served with perfectly smoked fish, garnished with lime and fried plantain.',
        price: 3500,
        image: jollofSmokedFish,
        category: 'jollof'
    },
    {
        id: 5,
        name: 'Party Jollof Rice with Plantain',
        description: 'Smoky party-style jollof rice served with fried plantain — the ultimate Nigerian celebration meal.',
        price: 2800,
        image: jollofPlantain,
        category: 'jollof'
    },
    {
        id: 6,
        name: 'Jollof Rice & Fried Chicken',
        description: 'Classic jollof rice served alongside crispy fried chicken with a side of fresh salad.',
        price: 3800,
        image: jollofFriedChicken,
        category: 'jollof'
    },
    {
        id: 7,
        name: 'Amala with Gbegiri & Ewedu',
        description: 'Classic Amala served with Gbegiri (beans soup) and Ewedu (jute leaf) — a true Yoruba delicacy.',
        price: 3100,
        image: amalaGbegiri,
        category: 'swallow'
    },
    {
        id: 8,
        name: 'Fufu & Okra Soup (Fish)',
        description: 'Light, stretchy fufu served with fresh okra soup loaded with tilapia fish and crayfish.',
        price: 3300,
        image: fufu_okra,
        category: 'swallow'
    },
    {
        id: 9,
        name: 'Pounded Yam & Egusi',
        description: 'Smooth pounded yam served with rich Egusi soup with assorted meats.',
        price: 3500,
        image: egusiPounded,
        category: 'swallow'
    },
    {
        id: 10,
        name: 'Peppered Snail',
        description: 'Spicy and savory peppered snail, a Nigerian delicacy. Perfect as a starter.',
        price: 2500,
        image: pepperedSnail,
        category: 'grills'
    },
    {
        id: 11,
        name: 'Grilled Tilapia Fish',
        description: 'Whole grilled tilapia seasoned with our special spices, served with fresh salad.',
        price: 4500,
        image: grilledTilapia,
        category: 'grills'
    },
    {
        id: 12,
        name: 'Suya Spiced Beef',
        description: 'Tender beef skewers marinated in authentic Suya spice, grilled to perfection.',
        price: 2000,
        image: bbq,
        category: 'grills'
    },
    {
        id: 13,
        name: 'Fresh Palm Wine',
        description: 'Authentic, freshly tapped palm wine served chilled.',
        price: 1500,
        image: sweet,
        category: 'beverages'
    },
    {
        id: 14,
        name: 'Zobo Drink',
        description: 'Refreshing hibiscus drink brewed with ginger and pineapple.',
        price: 1000,
        image: sweet,
        category: 'beverages'
    },
    {
        id: 15,
        name: 'Puff Puff (Pack of 5)',
        description: 'Sweet, fluffy fried dough balls — a beloved Nigerian street snack.',
        price: 1000,
        image: sweet,
        category: 'desserts'
    }
];
