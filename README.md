# Chuks Kitchen — Project Documentation

## 1. Project Overview

**Chuks Kitchen** is a frontend web application for a Nigerian food ordering service. It simulates the full customer-facing experience of browsing a restaurant menu, customising a meal, adding items to a cart, and going through a checkout flow — all the way to order confirmation.

The application was built as a design-to-code implementation based on a Figma design. It covers the following user-facing screens:

| Screen | Route | What it does |
|---|---|---|
| Welcome | `/` | Landing page with a hero section introducing the brand |
| Home | `/home` | Main dashboard with hero, popular categories, chef's specials, and a menu CTA banner |
| Login | `/login` | Email/password login form with social auth options |
| Register | `/register` | Account creation form with validation |
| Menu | `/menu` | Full menu organised by food categories with a sticky sidebar |
| Food Details | `/menu/:id` | Individual meal page with protein/side options and an "Add to Cart" action |
| Cart | `/cart` | List of selected items with quantity controls |
| Checkout | `/checkout` | Multi-step flow: order summary → delivery details → payment |

No backend or database is connected. All food data comes from a local mock data file, and cart state lives in React context (in-memory only). The project is purely a frontend prototype that demonstrates UI implementation, component architecture, and client-side routing.

---

## 2. Tech Stack

| Technology | Version | Why it was used |
|---|---|---|
| **React** | 19.2 | Component-based UI library — the core of the project |
| **Vite** | 7.3 | Lightning-fast dev server and build tool; chosen over CRA for speed |
| **React Router** | 7.13 | Client-side routing between pages |
| **Framer Motion** | 12.34 | Smooth animations and transitions (used in hero/welcome sections) |
| **Lucide React** | 0.563 | Lightweight, consistent SVG icon set (Menu, X, Plus, Minus, Mail, Lock, etc.) |
| **Vanilla CSS** | — | All styling is hand-written CSS with CSS custom properties — no Tailwind, no CSS-in-JS |
| **ESLint** | 9.39 | Linting for code quality |
| **ngrok** | 5.0.0-beta | Included as a dev dependency to expose the local server for mobile testing |

### Why these choices?

- **Vite** was chosen over Create React App because it's significantly faster during development (instant HMR) and produces smaller production bundles.
- **Vanilla CSS** was used intentionally — each component has a dedicated `.css` file that sits alongside it in the `styles/` folder. This keeps the styling explicit and easy to trace without adding a build-time CSS framework.
- **Lucide** was preferred over FontAwesome or Heroicons because it ships tree-shakeable ES modules, so only the icons actually used end up in the bundle.
- **Framer Motion** handles the more complex entrance animations on the Welcome and Hero sections without writing raw CSS keyframes.

---

## 3. Project Structure

```
chuks-kitchen/
├── index.html              # Single HTML entry point
├── package.json            # Dependencies, scripts
├── vite.config.js          # Vite configuration (network access, ngrok host)
├── public/                 # Static public assets (favicon, etc.)
│
└── src/
    ├── main.jsx            # React entry point — renders <App /> into #root
    ├── App.jsx             # Top-level routing and context provider setup
    ├── App.css             # Minimal app-level styles
    │
    ├── assets/
    │   ├── images/         # Food photos, hero backgrounds (PNG/JPG)
    │   └── icons/          # Custom icon assets
    │
    ├── components/         # Reusable UI components
    │   ├── Navbar.jsx      # Top navigation bar (used on Home page)
    │   ├── Layout.jsx      # Shared layout wrapper with navbar + footer (used for Menu, Cart, Checkout)
    │   ├── Hero.jsx        # Hero banner for the Home page
    │   ├── WelcomeHero.jsx # Animated hero for the Welcome/landing page
    │   ├── MenuHero.jsx    # Smaller hero banner for the Menu page
    │   ├── MenuBanner.jsx  # CTA banner linking to the full menu
    │   ├── PopularCategories.jsx  # Category cards grid on Home
    │   ├── ChefSpecials.jsx       # Featured dishes section on Home
    │   ├── FoodCard.jsx    # Individual food item card (image, title, price, link)
    │   ├── CategoryCard.jsx # Single category display card
    │   ├── Search.jsx      # Search bar component (UI only)
    │   ├── Footer.jsx      # Site-wide footer with links and contact info
    │   └── SocialIcons.jsx # Google and Apple SVG icons for social login buttons
    │
    ├── pages/              # Route-level page components
    │   ├── Welcome.jsx     # Landing page (route: /)
    │   ├── Home.jsx        # Main home page (route: /home)
    │   ├── Menu.jsx        # Full menu with category sidebar (route: /menu)
    │   ├── FoodDetails.jsx # Single food item detail page (route: /menu/:id)
    │   ├── Cart.jsx        # Shopping cart page (route: /cart)
    │   ├── Checkout.jsx    # Multi-step checkout flow (route: /checkout)
    │   ├── Login.jsx       # Login page (route: /login)
    │   └── Register.jsx    # Registration page (route: /register)
    │
    ├── context/
    │   └── CartContext.jsx  # React Context for cart state management
    │
    ├── data/
    │   └── mockData.js     # All food items and categories (hard-coded mock data)
    │
    └── styles/             # One CSS file per component/page
        ├── index.css       # Global styles, CSS custom properties, resets
        ├── Navbar.css
        ├── Hero.css
        ├── WelcomeHero.css
        ├── Menu.css
        ├── MenuHero.css
        ├── MenuBanner.css
        ├── FoodCard.css
        ├── FoodDetails.css
        ├── Cart.css
        ├── Checkout.css
        ├── Login.css
        ├── Register.css
        ├── PopularCategories.css
        ├── ChefSpecials.css
        ├── Footer.css
        ├── Layout.css
        └── Search.css
```

### Key files explained

| File | Purpose |
|---|---|
| `src/App.jsx` | Sets up the `CartProvider` context wrapper, `BrowserRouter`, and all route definitions. Routes are split into two groups: standalone pages (Welcome, Home, Login, Register) and pages that share the `Layout` wrapper (Menu, FoodDetails, Cart, Checkout). |
| `src/context/CartContext.jsx` | Provides global cart state using React's Context API. Exposes `addToCart`, `removeFromCart`, `updateQuantity`, `clearCart`, plus computed values `cartTotal` and `cartCount`. |
| `src/data/mockData.js` | Contains the `categories` array (6 categories) and `foodItems` array (17 dishes). Each food item includes an `id`, `name`, `description`, `price` (in Naira), `image` import, `category` tag, and optional customisation options (proteins, sides, tags). |
| `src/styles/index.css` | Defines the global design tokens as CSS custom properties: primary colour (`#FF7F50` — coral/orange), secondary colour (`#5D4037` — brown), font family (Inter), spacing scale, border radius, and box shadows. Also includes the global CSS reset. |
| `src/components/Layout.jsx` | A shared wrapper used by the inner app pages (Menu, Cart, Checkout). It renders a persistent navbar at the top (with active link highlighting based on the current route), an `<Outlet />` for the child route, and the Footer — so these pages all share the same chrome. |

---

## 4. Design Interpretation

### How the Figma design was translated into code

The Figma design was used as the primary visual reference for every screen. Here's how the translation was approached:

1. **Component decomposition** — Each distinct UI block in the Figma file (navbar, hero, food card, checkout card, etc.) was turned into its own React component with a matching CSS file. This one-to-one mapping makes it easy to find the code that corresponds to any part of the design.

2. **Colour and typography** — The Figma colour palette was extracted into CSS custom properties in `index.css`. The primary brand colour (coral orange `#FF7F50`) and the secondary brown (`#5D4037`) are used consistently across buttons, links, and accents. The Inter font family was used as the primary typeface throughout, with a cursive/script fallback for decorative text.

3. **Layout approach** — Flexbox is used almost everywhere. The Menu page uses a sidebar + main content layout with `display: flex`. The food grid cards use CSS Grid. All pages are designed mobile-first and scale up.

4. **Responsive behaviour** — The navbar collapses into a hamburger menu on mobile. The food grid adjusts column count based on viewport width. The Login/Register pages use a split-panel layout on desktop (image left, form right) that stacks vertically on mobile. The footer is hidden entirely on mobile (`display: none` below 900px).

5. **Interactive states** — Active navigation links are highlighted. The menu sidebar highlights the current category section based on scroll position (using a scroll event listener). Quantity controls in the cart provide immediate visual feedback.

6. **Price formatting** — All prices are shown in Nigerian Naira (₦) using `toLocaleString()` for comma formatting, matching the Figma design's currency display.

### Assumptions made due to missing design details

- **Search functionality** — The search bar component exists visually on the Home page but is UI-only. The Figma design showed the search input but did not specify search behaviour, filtering logic, or a results view. It was implemented as a static visual element.
- **"My Orders" and "Account" pages** — The navbar includes links to `/orders` and `/account`, matching the Figma navigation design, but these routes are not implemented since no designs were provided for them.
- **Social login** — Google and Apple login buttons are present on the Login and Register pages as shown in the design, but they are non-functional (no OAuth integration). They exist purely as visual elements.
- **Payment processing** — The checkout flow simulates a successful payment with a 2-second loading delay. No real payment gateway is integrated. The card form collects data visually but does not validate or submit to any API.
- **Delivery address** — The delivery details step shows a hard-coded placeholder address. The "Change Address" button is visible but does not open an address picker, as no design was provided for that interaction.
- **Food item options** — Only the first food item (Jollof Rice & Fried Chicken) has the full protein/sides/tags customisation options in the mock data. The remaining items show the basic detail view without customisation. This was a data-level decision since the Figma design only fully spec'd the customisation flow for one item.
- **Promo code** — The checkout page includes a promo code input matching the design, but the "Login" button next to it and the discount logic are not wired up.

---

## 5. How Routing Works

The app uses **React Router v7** with a `BrowserRouter`. Routes are organised into two groups:

```
/              → Welcome page (standalone, no shared layout)
/home          → Home page (standalone, has its own Navbar + Footer)
/login         → Login page (standalone)
/register      → Register page (standalone)

/menu          → Menu page       ┐
/menu/:id      → Food Details    │ These four share the Layout component
/cart          → Cart page       │ (persistent navbar + footer)
/checkout      → Checkout page   ┘
```

The `Layout` component (used as a route wrapper via React Router's `<Outlet />` pattern) provides a consistent navigation bar and footer for the inner pages so they don't each have to render their own.

---

## 6. State Management

Cart state is managed through **React Context** (`CartContext.jsx`). There is a single `CartProvider` that wraps the entire app in `App.jsx`.

### Available cart operations

| Function | What it does |
|---|---|
| `addToCart(item)` | Adds an item to the cart. If the same item ID already exists, increments its quantity by 1. |
| `removeFromCart(itemId)` | Removes an item entirely from the cart by its ID. |
| `updateQuantity(itemId, change)` | Adjusts the quantity of an item by `+1` or `-1`. Quantities cannot go below 1. |
| `clearCart()` | Empties the entire cart (called after successful checkout). |
| `cartTotal` | Computed value — the sum of `price × quantity` for every item in the cart. |
| `cartCount` | Computed value — the total number of items (accounting for quantity). |

Any component can access the cart by calling the `useCart()` hook.

> **Note:** Cart state is not persisted. Refreshing the browser clears the cart. This is intentional for a prototype — a production version would use `localStorage` or a backend session.

---

## 7. Limitations & Known Issues

### What's not implemented

1. **No backend** — Everything runs client-side. There's no API, no database, no authentication server. Login and Register forms validate locally and then simply redirect the user.
2. **No persistent state** — Cart data is lost on page refresh. User sessions don't exist.
3. **Search is visual-only** — The search bar on the Home page doesn't filter or query anything.
4. **Missing pages** — "My Orders" and "Account" routes in the navbar lead to blank pages (no route defined for them).
5. **No image optimisation** — Food images are imported as static PNGs directly. There's no lazy loading, responsive `srcset`, or WebP conversion.
6. **Accessibility gaps** — While basic semantic HTML is used, the app hasn't been audited for full WCAG compliance. Some interactive elements may be missing proper ARIA labels.
7. **No unit or integration tests** — There are no test files in the project.

### What is to be done

1. **Connect a real backend** — Set up a Node.js/Express or Python/FastAPI server with a database to handle user authentication, order storage, and menu management.
2. **Persist cart state** — At minimum, save the cart to `localStorage` so it survives page refreshes. Ideally, sync it with a user's backend session.
3. **Implement real search** — Add a search mechanism that filters `mockData` as the user types, with debouncing and a results dropdown.
4. **Add the missing pages** — Build out the "My Orders" (order history with status tracking) and "Account" (profile editing, address book) pages.
5. **Image optimisation** — Convert images to WebP, implement lazy loading with `loading="lazy"`, and use responsive image sizes.
6. **Accessibility audit** — Add ARIA labels to all interactive elements, ensure proper focus management, and test with a screen reader.
7. **Testing** — Add unit tests with Vitest for the cart logic and component rendering. Add integration tests for the checkout flow.
8. **Error boundaries** — Wrap route sections in React error boundaries so a crash in one page doesn't take down the whole app.
9. **Loading states** — Add skeleton screens or loading spinners for when data would normally be fetched from an API.
10. **Animation polish** — Extend Framer Motion usage beyond the Welcome hero to add page transition animations and micro-interactions throughout the app.

---

## 8. Getting Started

### Prerequisites

- **Node.js** 18+ and **npm** installed on your machine.

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd chuks-kitchen

# Install dependencies
npm install
```

### Development

```bash
# Start the dev server
npm run dev
```

The app will be available at `http://localhost:5173` (default Vite port).

### Production Build

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview
```

The production output goes to the `dist/` folder.

---

## 9. For the Next Developer

If you're picking up this project, here's what you need to know:

- **Every component has a matching CSS file** in `src/styles/`. If you're editing `FoodCard.jsx`, its styles are in `styles/FoodCard.css`. No exceptions.
- **The design tokens are in `src/styles/index.css`**. If you need to change the brand colour, spacing, or font, change it there and it'll propagate everywhere.
- **All food data lives in `src/data/mockData.js`**. When you're ready to connect a backend, you'll replace the imports from this file with API calls. The data shape (`id`, `name`, `description`, `price`, `image`, `category`, and optionally `options`) is what the components expect.
- **The cart context is the only global state**. If you need to add another piece of global state (e.g., user authentication), follow the same pattern: create a new context in `src/context/`, wrap the app with it in `App.jsx`, and export a custom `useX()` hook.
- **The `Layout.jsx` component** is only used for the inner app pages. The Welcome, Home, Login, and Register pages manage their own navbar and footer. This is intentional — those pages have unique header/footer designs.
- **Prices are in Naira (₦)** and stored as integers (no decimals). The Naira sign is rendered directly in JSX, and `toLocaleString()` handles comma formatting.

Good luck, and happy coding.
