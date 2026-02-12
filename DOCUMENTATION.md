# Chuks Kitchen - Frontend Documentation

## 1. Project Overview
**Chuks Kitchen** is a responsive food ordering web application designed to allow customers to browse an authentic Nigerian menu, manage their cart, and place orders. This project converts a provided Figma design into a functional frontend implementation using React.

### Key Features
- **Responsive Design**: Works on desktop and mobile.
- **Menu Browsing**: Filterable menu with categories.
- **Cart Management**: Add, remove, and adjust quantities of items.
- **Checkout Process**: Form validation and simulated order placement.
- **Visuals**: Matches the "Authentic Taste of Nigeria" branding with an orange/brown color palette.

## 2. Tech Stack Setup
- **Framework**: [React](https://reactjs.org/) (via Vite) - chosen for component reusability and fast development cycle.
- **Routing**: `react-router-dom` - for seamless client-side navigation between pages.
- **Styling**: **Vanilla CSS** with CSS Variables - selected to demonstrate core CSS mastery without relying on heavy utility frameworks like Tailwind (as requested for "clean, readable code").
- **Icons**: `lucide-react` - for lightweight, consistent SVG icons.
- **State Management**: **React Context API** (`CartContext`) - to manage global cart state across components without prop drilling.

## 3. Project Structure
The project follows a standard scalable React folder structure:

```
src/
├── components/         # Reusable UI components
│   ├── Layout.jsx      # Main wrapper with Navbar and Footer
│   ├── Hero.jsx        # Landing page hero section
│   ├── FoodCard.jsx    # Individual food item display
│   └── ...
├── context/            # Global state providers
│   └── CartContext.jsx # Shopping cart logic (add/remove/total)
├── data/               # Mock data sources
│   └── mockData.js     # Static list of food items and categories
├── pages/              # Page-level components
│   ├── Home.jsx        # Landing page
│   ├── Menu.jsx        # Full menu with filters
│   ├── Cart.jsx        # Cart view
│   ├── Checkout.jsx    # Order form
│   └── Login.jsx       # Authentication tabs
├── App.jsx             # Main router configuration
└── index.css           # Global styles and CSS variables
```

## 4. Design Interpretation & Assumptions
### Design Translation
- **Color Palette**: Extracted `primary` (#FF7F50) and `secondary` (#5D4037) colors from the design to create a consistent CSS variable theme.
- **Typography**: Used 'Inter' as a clean sans-serif font to match the mockups.
- **Layouts**: functionality
    - **Grid System**: Used CSS Grid for the menu and featured items to ensure responsiveness.
    - **Flexbox**: Used for navbars, card contents, and alignment.

### Assumptions
- **No Backend**: All data is mocked in `mockData.js`.
- **Checkout**: Since there is no payment gateway, the checkout process simulates an API call with a timeout and displays a success message.
- **Authentication**: The Login/Signup forms are visual only and do not persist user sessions.

## 5. Limitations & Future Improvements
If given more time, I would:
1.  **Persistent Storage**: Implement `localStorage` to save the cart between refreshes.
2.  **Animations**: Add more micro-interactions (e.g., toast notification when adding to cart) using `framer-motion`.
3.  **Backend Integration**: Connect to a real API (Express/Node.js) to fetch live menu data and process real orders.
4.  **Testing**: Add unit tests for the `CartContext` logic and critical components.
