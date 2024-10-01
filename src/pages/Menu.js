import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Ensure this is imported
import { CartContext } from '../context/CartContext';
import '../styles/pages/_menu.scss';

// Import images
import pizzaImage from '../assets/images/pizza.jpg';
import burgerImage from '../assets/images/burger.jpg';
import biriyani from '../assets/images/biriyani.jpg';
import Eggmasala from '../assets/images/Eggmasala.jpg';
import Gobhimasala from '../assets/images/Gobhimasala.jpg';
import cholebhature from '../assets/images/cholebhature.jpg';
import fishcurry from '../assets/images/fishcurry.jpg';
import tandoriroti from '../assets/images/tandoriroti.jpg';
import rolls from '../assets/images/rolls.jpg';
import butterchicken from '../assets/images/butterchicken.jpg';
import vegfriedrice from '../assets/images/vegfriedrice.jpg';

function Menu() {
  const { addToCart } = useContext(CartContext);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [priceFilter, setPriceFilter] = useState(0);
  const [notification, setNotification] = useState(''); // Notification state
  const navigate = useNavigate(); // Declare the navigate variable here

  // Sample menu items
  const items = [
    { name: 'Tomato Pizza(M)', price: 180, category: 'fast food', image: pizzaImage },
    { name: 'Classic Burger', price: 120, category: 'fast food', image: burgerImage },
    { name: 'Chicken Biriyani', price: 110, category: 'non-veg', image: biriyani },
    { name: 'Egg Masala', price: 60, category: 'veg', image: Eggmasala },
    { name: 'Gobi Masala', price: 130, category: 'veg', image: Gobhimasala },
    { name: 'Chole Bhature', price: 50, category: 'veg', image: cholebhature },
    { name: 'Fish Curry', price: 60, category: 'non-veg', image: fishcurry },
    { name: 'Special Roti', price: 20, category: 'veg', image: tandoriroti },
    { name: 'Chicken Rolls', price: 55, category: 'fast food', image: rolls },
    { name: 'Butter Chicken', price: 110, category: 'non-veg', image: butterchicken },
    { name: 'Veg Fried Rice', price: 120, category: 'veg', image: vegfriedrice },
  ];

  // Apply filters to the items
  const filteredItems = items.filter(item => {
    const categoryMatches = categoryFilter === 'all' || item.category === categoryFilter;
    const priceMatches = priceFilter === 0 || item.price <= priceFilter;
    return categoryMatches && priceMatches;
  });

  // Handle "Add to Cart" button click
  const handleAddToCart = (item) => {
    addToCart({ ...item, quantity: 1, source: 'menu' });
    setNotification(`${item.name} has been added to your cart!`); // Set notification message
    setTimeout(() => {
      setNotification(''); // Clear the notification after 3 seconds
    }, 3000);
  };

  // Handle "Order Now" button click
  const handleOrderNow = (item) => {
    addToCart({ ...item, quantity: 1, source: 'menu' });
    navigate('/payment', { state: { cart: [{ ...item, quantity: 1 }], totalPrice: item.price, source: 'menu' } }); // Redirect to payment page
    setNotification(`${item.name} has been ordered!`); // Set notification message for order
    setTimeout(() => {
      setNotification(''); // Clear the notification after 3 seconds
    }, 3000);
  };

  return (
    <div className="menu">
      <h1>Our Menu</h1>

      {/* Display notification if an item is added or ordered */}
      {notification && <div className="notification">{notification}</div>}

      {/* Filter section */}
      <div className="menu__filters">
        <select onChange={(e) => setCategoryFilter(e.target.value)} value={categoryFilter}>
          <option value="all">All Categories</option>
          <option value="veg">Veg</option>
          <option value="non-veg">Non-Veg</option>
          <option value="sweets">Sweets</option>
          <option value="fast food">Fast Food</option>
        </select>

        <select onChange={(e) => setPriceFilter(Number(e.target.value))} value={priceFilter}>
          <option value="0">All Prices</option>
          <option value="50">Below ₹50</option>
          <option value="100">Below ₹100</option>
          <option value="150">Below ₹150</option>
        </select>
      </div>

      {/* Render filtered items */}
      <div className="menu__grid">
        {filteredItems.map((item, index) => (
          <div className="menu__card" key={index}>
            <img src={item.image} alt={item.name} className="menu__card-image" />
            <div className="menu__card-content">
              <h2>{item.name}</h2>
              <p className="menu__card-price">Rs {item.price}</p>
            </div>
            <div className="menu__actions">
              <button className="menu__btn add-to-cart" onClick={() => handleAddToCart(item)}>
                Add to Cart
              </button>
              <button className="menu__btn order-now" onClick={() => handleOrderNow(item)}>
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
