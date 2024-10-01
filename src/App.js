// src/App.js
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss'; // Ensure this is the correct path
import { CartProvider } from './context/CartContext';

// Lazy load components and pages
const Navbar = lazy(() => import('./components/Navbar'));
const Footer = lazy(() => import('./components/Footer'));
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Menu = lazy(() => import('./pages/Menu'));
const HotelPage = lazy(() => import('./pages/hotel'));
const Mo = lazy(() => import('./pages/mo'));
const Mk = lazy(() => import('./pages/mk'));
const MenuPage = lazy(() => import('./pages/MenuPage'));
const Sreekunj = lazy(() => import('./pages/Sreekunj'));
const Cake = lazy(() => import('./pages/cake'));
const Meat = lazy(() => import('./pages/Meat'));
const Nkemeat = lazy(() => import('./pages/Nkemeat'));
const TopRestaurants = lazy(() => import('./pages/TopRestaurants'));
const TrendingCafes = lazy(() => import('./pages/TrendingCafes'));
const PubsAndBars = lazy(() => import('./pages/PubsAndBars'));
const Cart = lazy(() => import('./pages/Cart'));
const PaymentPage = lazy(() => import('./pages/PaymentPage')); // Import PaymentPage lazily
const Pizzahub = lazy(() => import('./pages/Pizzahub'));
const Pizza = lazy(() => import('./pages/Pizza'));

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar and Footer also lazy-loaded */}
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
        </Suspense>

        {/* Lazy load the rest of the routes */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/hotel" element={<HotelPage />} />
            <Route path="/cake" element={<Cake />} />
            <Route path="/meat" element={<Meat />} />
            <Route path="/nkemeat" element={<Nkemeat />} />
            <Route path="/mo" element={<Mo />} />
            <Route path="/menupage" element={<MenuPage />} />
            <Route path="/mk" element={<Mk />} />
            <Route path="/sreekunj" element={<Sreekunj />} />
            <Route path="/top-restaurants" element={<TopRestaurants />} />
            <Route path="/trending-cafes" element={<TrendingCafes />} />
            <Route path="/pubs-and-bars" element={<PubsAndBars />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/pizza" element={<Pizza />} />
            <Route path="/pizzahub" element={<Pizzahub />} />
          </Routes>
        </Suspense>

        {/* Footer lazy-loaded */}
        <Suspense fallback={<div>Loading...</div>}>
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
}

// Wrap App in CartProvider
export default function AppWithProvider() {
  return (
    <CartProvider>
      <App />
    </CartProvider>
  );
}
