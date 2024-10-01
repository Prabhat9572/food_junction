// HotelPage.js (integrated into your App code)
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/pages/hotel.scss';
import mo from '../assets/images/mo.jpeg';
import topResturents from '../assets/images/topResturants.jpg';
import sreekunj from '../assets/images/sreekunj.jpeg';
import mk from '../assets/images/mk.jpeg'; // Correctly import the local image

// Sample menu items for Hungry Horse
const hungryHorseMenuItems = [
  { name: "Burger", price: 150, imageUrl: "path_to_hungry_horse_burger_image" },
  { name: "Fries", price: 100, imageUrl: "path_to_hungry_horse_fries_image" },
  { name: "Pasta", price: 200, imageUrl: "path_to_hungry_horse_pasta_image" },
  // Add more items as necessary
];

// HotelCard Component
const HotelCard = ({ name, location, description, image }) => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleViewClick = () => {
    if (name === "Mo Biriyani") {
      navigate('/mo'); // Navigate to Mo page
    } else if (name === "MK Restaurant") {
      navigate('/mk'); // Navigate to MK page
    } else if (name === "Sreekunj Restaurant") {
      navigate('/sreekunj'); // Navigate to Sreekunj page
    } else if (name === "Hungry Horse") {
      navigate('/menu', { state: { restaurantName: "Hungry Horse", menuItems: hungryHorseMenuItems } }); // Navigate to Menu page with state
    } else if (name === "RTS Cafe") {
      navigate('/mk'); // Navigate to MK page for RTS Cafe
    }
  };

  return (
    <div className="hotel-card">
      <img src={image} alt={name} className="hotel-card__image" />
      <div className="hotel-card__info">
        <h2 className="hotel-card__name">{name}</h2>
        <p className="hotel-card__location">{location}</p>
        <p className="hotel-card__description">{description}</p>
        <button className="hotel-card__button" onClick={handleViewClick}>
          View
        </button>
      </div>
    </div>
  );
};

// HotelList Component
const HotelList = () => {
  const hotels = [
    {
      name: "Mo Biriyani",
      location: "Paralakhemundi, Odisha",
      description: "Serves a variety of delicious dishes, offering something for every taste. With fresh ingredients and rich flavors, it's the perfect place to satisfy your cravings.",
      image: mo // Use the imported local image
    },
    {
      name: "RTS Cafe",
      location: "Paralakhemundi, Gajapati",
      description: "Known for its delicious food and warm hospitality, MK Restaurant is a must-visit for food lovers.",
      image: mk // Use the imported local image
    },
    {
      name: "Sreekunj Restaurant",
      location: "Paralakhemundi, Odisha",
      description: "A cozy restaurant known for its delightful ambiance and a menu filled with local specialties.",
      image: sreekunj // Use the imported local image
    },
    {
      name: "Hungry Horse",
      location: "Pathpatanam, AP",
      description: "Hungry Horse is a vibrant eatery that offers an extensive menu featuring a variety of delectable dishes.",
      image: topResturents // Use the imported local image
    }
  ];

  return (
    <div className="hotel-list">
      {hotels.map((hotel, index) => (
        <HotelCard
          key={index}
          name={hotel.name}
          location={hotel.location}
          description={hotel.description}
          image={hotel.image}
        />
      ))}
    </div>
  );
};

// Main HotelPage Component
const HotelPage = () => {
  return (
    <div className="hotel-page">
      <h1><i>Order food from our Top Restaurant</i></h1>
      <HotelList />
    </div>
  );
};

export default HotelPage;
