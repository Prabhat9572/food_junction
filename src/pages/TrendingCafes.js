import React from 'react';
import '../styles/pages/TrendingCafes.scss'; // Import SCSS file

const cafes = [
  {
    id: 1,
    name: 'Coffee Town Cafe',
    description: 'A cozy place for coffee lovers.',
    image: require('../assets/images/cafe1.jpg'), // Adjust path as needed
    formLink: 'https://forms.gle/EXBvWb8QYh3LLp2x5', // Add Google Form link here
  },
  {
    id: 2,
    name: 'Cool Drunkers cafe',
    description: 'Enjoy a cup of freshly brewed coffee.',
    image: require('../assets/images/cafe2.jpg'), // Adjust path as needed
    formLink: 'https://forms.gle/EXBvWb8QYh3LLp2x5', // Add Google Form link here
  },
  {
    id: 3,
    name: 'URBAN FOODIE',
    description: 'A vibrant cafe with a lively atmosphere.',
    image: require('../assets/images/cafe3.jpg'), // Adjust path as needed
    formLink: 'https://forms.gle/EXBvWb8QYh3LLp2x5', // Add Google Form link here
  },
  {
    id: 4,
    name: 'ICE & SPICE',
    description: 'Sweets and treats to pair with your drink.',
    image: require('../assets/images/cafe4.jpg'), // Adjust path as needed
    formLink: 'https://forms.gle/EXBvWb8QYh3LLp2x5', // Add Google Form link here
  },
  // Add more cafes as needed
];

const TrendingCafes = () => {
  return (
    <div className="trending-cafes">
      <h2 className="trending-cafes__title">Trending Cafes</h2>
      <div className="trending-cafes__cards">
        {cafes.map(cafe => (
          <div key={cafe.id} className="trending-cafes__card">
            <img src={cafe.image} alt={cafe.name} className="trending-cafes__card-image" />
            <h3 className="trending-cafes__card-title">{cafe.name}</h3>
            <p className="trending-cafes__card-description">{cafe.description}</p>
            <button 
              className="trending-cafes__book-button" 
              onClick={() => window.open(cafe.formLink, '_blank')} // Open Google Form in new tab
            >
              Book Table
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCafes;
