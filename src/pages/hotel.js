import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/hotel.scss';
import mo from '../assets/images/mo.jpeg';
import topResturents from '../assets/images/topResturants.jpg';
import sreekunj from '../assets/images/sreekunj.jpeg';
import mk from '../assets/images/mk.jpeg';

const hungryHorseMenuItems = [
  { name: "Burger", price: 150, imageUrl: "path_to_hungry_horse_burger_image" },
  { name: "Fries", price: 100, imageUrl: "path_to_hungry_horse_fries_image" },
  { name: "Pasta", price: 200, imageUrl: "path_to_hungry_horse_pasta_image" },
  // Add more items if necessary
];

// HotelCard Component
const HotelCard = ({ name, location, description, image }) => {
  const navigate = useNavigate();

  const handleViewClick = () => {
    if (name === "Mo Biriyani") {
      navigate('/mo');
    } else if (name === "RTS Cafe") {
      navigate('/mk');
    } else if (name === "Sreekunj Restaurant") {
      navigate('/sreekunj');
    } else if (name === "Hungry Horse") {
      navigate('/menu', { state: { restaurantName: "Hungry Horse", menuItems: hungryHorseMenuItems } });
    } else if (name === "Food Login") {
      navigate('/menu');
    } else if (name === "NR Food Hut") {
      navigate('/menu');
    } else if (name === "4 Seasons Cafe") {
      navigate('/menu');
    } else if (name === "Srikrishna Cakes") {
      navigate('/menu');
    } else if (name === "Habibi Drive") {
      navigate('/menu');
    } else if (name === "SDK Fruits") {
      navigate('/menu');
    } else {
      // For new restaurant cards, you can implement redirection to their respective menus or other pages here
      // Example for the new restaurant "Food Login":
      navigate(`/menu/${name.toLowerCase().replace(/\s+/g, '-')}`); // URL-friendly format for new restaurants
    }
  };

  return (
    <div className="hotel-card">
      <img src={image} alt={name} className="hotel-card__image" />
      <div className="hotel-card__info">
        <h2 className="hotel-card__name">{name}</h2>
        <p className="hotel-card__location">{location}</p>
        <p className="hotel-card__description">{description}</p>
        <button className="hotel-card__button" onClick={handleViewClick}>View</button>
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
      description: "Serves a variety of delicious dishes, offering something for every taste.",
      image: mo
    },
    {
      name: "RTS Cafe",
      location: "Paralakhemundi, Gajapati",
      description: "Known for its delicious food and warm hospitality.",
      image: mk
    },
    {
      name: "Sreekunj Restaurant",
      location: "Paralakhemundi, Odisha",
      description: "A cozy restaurant known for its delightful ambiance and local specialties.",
      image: sreekunj
    },
    {
      name: "Hungry Horse",
      location: "Pathpatanam, AP",
      description: "A vibrant eatery offering a variety of delectable dishes.",
      image: topResturents
    },
    // New Restaurants
    {
      name: "Food Login",
      location: "Pathpatanam, AP",
      description: "A place to find the best local food with amazing flavors.",
      image: topResturents
    },
    {
      name: "NR Food Hut",
      location: "Gajapati, Odisha",
      description: "A well-known spot for tasty and affordable food options.",
      image: mk
    },
    {
      name: "4 Seasons Cafe",
      location: "Paralakhemundi, Odisha",
      description: "Offering seasonal specials with a wide variety of cuisines.",
      image: sreekunj
    },
    {
      name: "Srikrishna Cakes",
      location: "Gajapati, Odisha",
      description: "Delicious cakes and pastries for all occasions.",
      image: mo
    },
    {
      name: "Habibi Drive",
      location: "Paralakhemundi, Odisha",
      description: "Authentic Middle Eastern cuisine with a modern twist.",
      image: topResturents
    },
    {
      name: "SDK Fruits",
      location: "Pathpatanam, AP",
      description: "Fresh fruits and smoothies made with the finest ingredients.",
      image: mk
    }
  ];

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollBy({ left: -300, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="hotel-list-wrapper">
      <button className="scroll-button left" onClick={() => scroll('left')}>&lt;</button>
      <div className="hotel-list" ref={scrollRef}>
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
      <button className="scroll-button right" onClick={() => scroll('right')}>&gt;</button>
    </div>
  );
};

// HotelPage Component
const HotelPage = () => {
  return (
    <div className="hotel-page">
      <h1><i>Order food from our Top Restaurants</i></h1>
      <HotelList />
    </div>
  );
};

export default HotelPage;
