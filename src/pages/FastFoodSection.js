import React from 'react';
import '../styles/pages/_fastFoodSection.scss';

// Import images for fast food
import fastFoodImage from '../assets/images/burger.jpg'; // Replace with your image path

const fastFoodItems = [
  { name: 'Burger', price: 50, image: '../assets/images/burger.jpg' },
  { name: 'Pizza', price: 120, image: '../assets/images/pizza.jpg' },
  { name: 'rolls', price: 90, image: '../assets/images/frenchfries.jpg' },
  // Add more items as needed
];

function FastFoodSection() {
  return (
    <div className="fast-food-section">
      <div className="fast-food-content">
        <h2>Fast Food Delights</h2>
        <p>Enjoy our delicious range of fast food, made fresh just for you!</p>
      </div>
      <div className="fast-food-image">
        <img src={fastFoodImage} alt="Fast Food" />
      </div>
      <div className="fast-food-items">
        {fastFoodItems.map((item, index) => (
          <div className="fast-food-card" key={index}>
            <img src={item.image} alt={item.name} className="fast-food-card-image" />
            <div className="fast-food-card-content">
              <h3>{item.name}</h3>
              <p>Rs {item.price}</p>
              <button className="fast-food-btn add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FastFoodSection;
