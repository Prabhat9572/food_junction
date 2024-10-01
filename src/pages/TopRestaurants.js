import React from 'react';
import '../styles/pages/TopRestaurants.scss'; // Import SCSS file

const restaurants = [
  {
    id: 1,
    name: 'HSI.Hotel Sai International.',
    place: 'Paralakhemundi',
    description: 'Normal/Diluxe/Super Diluxe ',
    image: require('../assets/images/Dhaba.jpg'), // Adjust path as needed
    formLink: 'https://forms.gle/Ug9re7Nptp6HUNmv7', // Add Google Form link here
  },
  {
    id: 2,
    name: 'Hotel Sriya Palace',
    place: 'Paralakhemundi',
    description: 'Normal/Diluxe/Super Diluxe ',
    image: require('../assets/images/top.jpg'), // Adjust path as needed
    formLink: 'https://forms.gle/eFVUjN8fhKWNSU6L7', // Add Google Form link here
  },
  {
    id: 3,
    name: 'Satya Residency',
    place: 'Cuttuk',
    description: 'Normal/Diluxe/Super Diluxe',
    image: require('../assets/images/restaurant.jpg'), // Adjust path as needed
    formLink: 'https://forms.gle/nF6wbskLCto6fQQz8', // Add Google Form link here
  },
  {
    id: 4,
    name: 'Suryaraj Inn',
    place: 'Paralakhemundi',
    description: 'Normal/Diluxe/Super Diluxe',
    image: require('../assets/images/zaika.jpg'), // Adjust path as needed
    formLink: 'https://forms.gle/rQDGvHs87vk1oQpM9', // Add Google Form link here
  },
  // Add more restaurants as needed
];

const TopRestaurants = () => {
  return (
    <div className="top-restaurants">
      <h2 className="top-restaurants__title">Top Hotels</h2>
      <div className="top-restaurants__cards">
        {restaurants.map(restaurant => (
          <div key={restaurant.id} className="top-restaurants__card">
            <img src={restaurant.image} alt={restaurant.name} className="top-restaurants__card-image" />
            <h3 className="top-restaurants__card-title">{restaurant.name}</h3>
            <p className="top-restaurants__card-place">{restaurant.place}</p> {/* Display the place */}
            <p className="top-restaurants__card-description">{restaurant.description}</p>
            <button 
              className="top-restaurants__book-button" 
              onClick={() => window.open(restaurant.formLink, '_blank')} // Open Google Form in new tab
            >
              Book Room
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRestaurants;
