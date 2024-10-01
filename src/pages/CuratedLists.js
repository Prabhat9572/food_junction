import React from 'react';
import { useNavigate } from 'react-router-dom';
import topRestaurant from '../assets/images/topResturants.jpg';
import trendingCafe from '../assets/images/TrendingCafes.jpg';
import pubBar from '../assets/images/PubBar.jpg';
import '../styles/components/_curatedLists.scss'; // Import the new SCSS file

function CuratedLists() {
  const navigate = useNavigate();

  const handleTopRestaurantsClick = () => {
    navigate('/top-restaurants'); // Redirect to TopRestaurants component
  };

  const handleTrendingCafesClick = () => {
    navigate('/trending-cafes'); // Redirect to Trending Cafes component
  };

  const handlePubsAndBarsClick = () => {
    navigate('/pubs-and-bars'); // Redirect to Pubs and Bars component
  };

  return (
    <section className="curated-lists">
      <h2><b>Book Hotels, Cafes & Restaurant</b></h2>
      <p>
        <i>
          At Food Junction, we believe that dining should be an experience worth savoring. That's why we offer carefully curated lists featuring the finest pubs, bars, and top restaurants and hotels in the area. Whether you’re seeking a lively night out or a cozy dinner, our selections highlight the best culinary hotspots, ensuring you find the perfect venue for any occasion. Dive into a world of flavors and enjoy exclusive recommendations that cater to all tastes and preferences.
        </i>
      </p>
      <div className="curated-lists__content">
        <div className="curated-item" onClick={handleTopRestaurantsClick}>
          <img src={topRestaurant} alt="Top Restaurants" />
          <h3>Top Hotels</h3>
          <p><i>Discover our handpicked selection of top hotels, each offering luxurious accommodations, world-class amenities, and unparalleled hospitality. Whether you're seeking a relaxing getaway or an unforgettable experience, these hotels promise a perfect stay tailored to your comfort and style. experience.</i></p>
          <button className="curated-item__view-btn" onClick={handleTopRestaurantsClick}>View</button>
        </div>
        <div className="curated-item" onClick={handleTrendingCafesClick}>
          <img src={trendingCafe} alt="Trending Cafes" />
          <h3>Trending Cafes</h3>
          <p><i>Discover the latest hotspots in the café scene! Our curated list of trending cafes offers a cozy atmosphere perfect for casual meet-ups.</i></p>
          <button className="curated-item__view-btn" onClick={handleTrendingCafesClick}>View</button>
        </div>
        <div className="curated-item" onClick={handlePubsAndBarsClick}>
          <img src={pubBar} alt="Pubs and Bars" />
          <h3>Top Restaurant</h3>
          <p><i>Indulge in a culinary adventure with our selection of the finest restaurants in town, where exceptional flavors and unique dining experiences await!</i></p>
          <button className="curated-item__view-btn" onClick={handlePubsAndBarsClick}>View</button>
        </div>
      </div>
    </section>
  );
}

export default CuratedLists;
