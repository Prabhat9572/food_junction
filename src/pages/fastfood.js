import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/FastFood.scss'; // Ensure correct path to SCSS
import FastFoodImage from '../assets/images/cake.jpg'; // Ensure correct path to image

const FastFood = () => {
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate('/cake'); // Redirect to cake page
  };

  return (
    <div className="fastfood-section">
      <div className="fastfood-content">
        <div className="fastfood-text">
          <h1>Delicious Cake</h1>
          <p>
            Discover our mouth-watering cakes, perfect for any occasion! Whether it's a birthday, celebration, or just a sweet craving, our cakes are baked fresh with love and care.
          </p>
          <button className="view-button" onClick={handleViewClick}>View</button>
        </div>
        <div className="fastfood-image">
          <img src={FastFoodImage} alt="Cake" />
        </div>
      </div>
    </div>
  );
};

export default FastFood;
