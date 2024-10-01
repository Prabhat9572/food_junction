import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/Nkemeat.scss'; // Import SCSS file
import muttonImage from '../assets/images/champaranMutton.jpg'; // Replace with the actual path to your image

const Nkemeat = () => {
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate('/meat'); // Change '/meat' to the correct path for your Meat component
  };

  return (
    <div className="nkemeat">
      <div className="nkemeat__image-container">
        <img src={muttonImage} alt="Champaran Mutton" className="nkemeat__image" />
      </div>
      <div className="nkemeat__text-container">
        <h2 className="nkemeat__title">Champaran Meat</h2>
        <h3>A Culinary Delight from the Heart of Bihar</h3>
        <p className="nkemeat__description">
          Champaran Meat is renowned for its rich flavors and tender texture, making it a must-try for meat lovers. Originating from the Champaran district of Bihar, this dish is celebrated for its unique blend of spices that create a mouthwatering experience.
        </p>
        <h4>Join Us on a Flavorful Journey!</h4>
        <p className="nkemeat__description">
          Indulge in the rich culinary heritage of Bihar with our Champaran Meat. It's more than just a meal; it's a taste of tradition, culture, and love for food. Come and savor the experience!
        </p>
        <button className="nkemeat__view-button" onClick={handleViewClick}>View</button>
      </div>
    </div>
  );
};

export default Nkemeat;
