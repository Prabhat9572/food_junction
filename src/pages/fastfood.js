import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/FastFood.scss'; // Adjust if SCSS is in components
import FastFoodImage from '../assets/images/cake.jpg'; // Adjust if image is in assets/images

const FastFood = () => {
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate('/cake'); // Redirect to cake page
  };

  return (
    <div className="fastfood-section" style={{ backgroundImage: `url(${FastFoodImage})` }}>
      <div className="overlay">
        
        <button className="view-button" onClick={handleViewClick}>View</button>
      </div>
    </div>
  );
};

export default FastFood;
