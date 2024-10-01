// Pizzahub.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/Pizzahub.scss'; // Ensure you create this CSS file

function Pizzahub() {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate('/pizza'); // Redirect to the Pizza page
  };

  return (
    <section className="about-pizza-hub">
      <div className="pizza-hub-content">
        <div className="text-content">
          <h2>Welcome to Pizza Hub</h2>
          <p>
            At Pizza Hub, we are passionate about creating the perfect pizza. 
            Using only the freshest ingredients and authentic recipes, we strive 
            to deliver a pizza experience that tantalizes your taste buds. Whether 
            you prefer classic cheese, spicy pepperoni, or gourmet toppings, we 
            have something for everyone. 
          </p>
          <p>
            Our commitment to quality and customer satisfaction sets us apart. 
            Join us for a slice of happiness and experience the best pizza in town! 
          </p>
          <button className="order-button" onClick={handleOrderClick}>
            Order Now
          </button>
        </div>
        <div className="image-content">
          <img src="https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg" alt="Delicious Pizza" />
        </div>
      </div>
    </section>
  );
}

export default Pizzahub;
