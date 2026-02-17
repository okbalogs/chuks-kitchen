export const categories = [
    { id: 'popular', name: 'Popular' },
    { id: 'jollof', name: 'Jollof Rice & Entrees' },
    { id: 'swallow', name: 'Swallow & Soups' },
    { id: 'grills', name: 'Grills & sides' },
    { id: 'beverages', name: 'Beverages' },
    { id: 'desserts', name: 'Desserts' }
];

export const foodItems = [
    // Popular
    {
        id: 1,
        name: 'Jollof Rice & Fried Chicken',
        description: 'Our signature Jollof rice, served with crispy fried chicken and plantain.',
        price: 3500,
        image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f1a?q=80&w=1000&auto=format&fit=crop',
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
        image: 'https://img.freepik.com/premium-photo/nigerian-egusi-soup-with-semovita-ball-earthenware_835191-115.jpg',
        category: 'popular'
    },
    {
        id: 3,
        name: 'Pounded Yam & Edikaikong',
        description: 'Traditional pounded yam with rich, leafy Edikaikong soup.',
        price: 3800,
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Edikang_Ikong_Soup.jpg',
        category: 'popular'
    },
    // Jollof Rice & Entrees
    {
        id: 4,
        name: 'Jollof Rice & Smoked Fish',
        description: 'Flavorful jollof rice served with perfectly smoked fish.',
        price: 3500,
        image: 'https://images.unsplash.com/photo-1628155982855-89f417f35b6b?q=80&w=1000&auto=format&fit=crop',
        category: 'jollof'
    },
    {
        id: 5,
        name: 'Party Jollof Rice (Veg)',
        description: 'Vegetarian party jollof, full of rich flavors.',
        price: 2800,
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop',
        category: 'jollof'
    },
    {
        id: 6,
        name: 'Fried Rice & Turkey',
        description: 'Flavorful fried rice mixed with veggies and liver, served with fried turkey wings.',
        price: 3800,
        image: 'https://www.chefspencil.com/wp-content/uploads/Nigerian-Fried-Rice.jpg',
        category: 'jollof'
    },
    // Swallow & Soups
    {
        id: 7,
        name: 'Amala with Gbegiri & Ewedu',
        description: 'Classic Amala served with Gbegiri (beans) and Ewedu (jute leaf) soup.',
        price: 3100,
        image: 'https://i.ytimg.com/vi/W_aVvH2hYDw/maxresdefault.jpg',
        category: 'swallow'
    },
    {
        id: 8,
        name: 'Fufu & Okra Soup (Fish)',
        description: 'Light Fufu served with fresh okra soup and tilapia fish.',
        price: 3300,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Fufu_and_Okra_soup.jpg/800px-Fufu_and_Okra_soup.jpg',
        category: 'swallow'
    },
    {
        id: 9,
        name: 'Pounded Yam & Egusi',
        description: 'Smooth Pounded Yam served with rich Egusi soup.',
        price: 3500,
        image: 'https://img.freepik.com/premium-photo/nigerian-egusi-soup-with-semovita-ball-earthenware_835191-115.jpg',
        category: 'swallow'
    },
    // Grills & sides
    {
        id: 10,
        name: 'Peppered Snail',
        description: 'Spicy and savory peppered snail, perfect as a starter.',
        price: 2500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4e5H2Qz6L4_Dq7x8Z9y0_W1n2k3m4o5p6q7r8s9t0u1v2w3x4y5z&usqp=CAU', // Placeholder URL
        category: 'grills'
    },
    {
        id: 11,
        name: 'Grilled Tilapia Fish',
        description: 'Whole grilled tilapia seasoned with our special spices.',
        price: 4500,
        image: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg',
        category: 'grills'
    },
    {
        id: 12,
        name: 'Suya Spiced Beef',
        description: 'Tender beef skewers marinated in authentic Suya spice.',
        price: 2000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Suya.jpg',
        category: 'grills'
    },
    // Beverages
    {
        id: 13,
        name: 'Fresh Palm Wine',
        description: 'Authentic, fresh palm wine.',
        price: 1500,
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Palm_wine.jpg',
        category: 'beverages'
    },
    {
        id: 14,
        name: 'Zobo Drink',
        description: 'Refreshing hibiscus drink with ginger and pineapple.',
        price: 1000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Zobo_drink.jpg/640px-Zobo_drink.jpg',
        category: 'beverages'
    },
    // Desserts
    {
        id: 15,
        name: 'Puff Puff (Pack of 5)',
        description: 'Sweet, fluffy fried dough balls.',
        price: 1000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Puff_Puff.jpg/1200px-Puff_Puff.jpg',
        category: 'desserts'
    }
];
