import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; // Import CartContext
import '../styles/pages/menupage.scss';

// MenuItemCard Component
const MenuItemCard = ({ item }) => {
  const { addToCart } = useContext(CartContext); // Access the addToCart function from CartContext

  const handleAddToCart = () => {
    addToCart(item); // Add the selected item to the cart
  };

  return (
    <div className="menu-item-card">
      <img src={item.imageUrl} alt={item.name} className="menu-item-card__image" />
      <div className="menu-item-card__info">
        <h2 className="menu-item-card__name">{item.name}</h2>
        <p className="menu-item-card__price">Rs {item.price.toFixed(2)}</p>
        <button className="menu-item-card__button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

// MenuPage Component
const MenuPage = () => {
  const location = useLocation();
  const { restaurantName, menuItems } = location.state || { restaurantName: "", menuItems: [] };

  return (
    <div className="menu-page">
      <h1>{restaurantName} menupage</h1>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <MenuItemCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
