import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import '../styles/pages/FoodWastePrevention.scss';

const FoodWastePrevention = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleOfferClick = () => {
    navigate('/menu'); // Redirect to menu when an offer is clicked
  };

  const offers = [
    { day: 'Monday Madness', discount: 30, time: '6 PM to 9 PM' },
    { day: 'Tuesday Treats', discount: 20, time: '5 PM to 8 PM' },
    { day: 'Waste Not Wednesday', discount: 25, time: '3 PM to 5 PM' },
    { day: 'Thrifty Thursday', discount: 15, time: '4 PM to 7 PM' },
    { day: 'Friday Feast', discount: 50, time: '5 PM to 8 PM' },
    { day: 'Savvy Saturday', discount: 40, time: '6 PM to 9 PM' },
    { day: 'Sunday Specials', discount: 35, time: '12 PM to 3 PM' },
  ];

  return (
    <div className="food-waste-prevention">
      <h2 className="section-title">Food Waste Prevention</h2>
      <p className="section-description">
        Join us in our mission to reduce food waste! We collaborate with local restaurants to offer unsold food at discounted rates during specific times. Enjoy delicious meals while making a positive impact on the environment.
      </p>
      <div className="discount-offers">
        {offers.map((offer, index) => (
          <div className="offer-card" key={index}>
            <h3 className="offer-title">{offer.day}</h3>
            <p className="offer-description">
              Get <strong>{offer.discount}%</strong> off on unsold items every {offer.day.split(' ')[0]} from {offer.time}.
            </p>
            <button className="offer-button" onClick={handleOfferClick}>
              Grab the Deal!
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodWastePrevention;
