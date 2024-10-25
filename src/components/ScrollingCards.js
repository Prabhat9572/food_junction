import React, { useEffect, useRef } from 'react';
import '../styles/components/ScrollingCards.scss'; // Import the SCSS file
import ChamparanImage from '../assets/images/Champaran.jpg'; // Import images
import DiscoverImage from '../assets/images/discover.png';
import FoodJunctionImage from '../assets/images/food junction.png'; // Ensure this path is correct
import PizzahubImage from '../assets/images/pizzahub.jpg'; // Import the Pizzahub image
import partner from '../assets/images/partner.png'; // Ensure this path is correct
import chocolatecake from '../assets/images/chocolatecake.jpg';
import cakesbakes from '../assets/images/cakesbakes.jpg';

const ScrollingCards = () => {
  const scrollRef = useRef(null);
  const scrollDirection = useRef(1); // 1 for right, -1 for left
  const scrollSpeed = 3; // Speed of scrolling
  const scrollIntervalTime = 20; // Time interval for scrolling

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const scrollCards = () => {
      if (!scrollContainer) return; // Prevent errors if ref is not set
      scrollContainer.scrollLeft += scrollSpeed * scrollDirection.current;

      // Check if we reached the end of the scroll area
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollDirection.current = -1; // Change direction to left
      }

      // Check if we reached the start of the scroll area
      if (scrollContainer.scrollLeft <= 0) {
        scrollDirection.current = 1; // Change direction to right
      }
    };

    const scrollInterval = setInterval(scrollCards, scrollIntervalTime);

    return () => clearInterval(scrollInterval); // Cleanup on unmount
  }, []);

  const cardData = [
    { id: 1, image: FoodJunctionImage },
    { id: 2, image: DiscoverImage },
    { id: 3, image: PizzahubImage },
    { id: 4, image: ChamparanImage },
    { id: 5, image: partner },
    { id: 6, image: cakesbakes },
    { id: 7, image: chocolatecake },
  ];

  return (
    <div className="scrolling-cards-container" ref={scrollRef}>
      {cardData.map((card) => (
        <div key={card.id} className="card">
          <img src={card.image} alt={`Card ${card.id}`} className="card-image" />
        </div>
      ))}
    </div>
  );
};

export default ScrollingCards;
