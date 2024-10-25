import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/_discover.scss'; // Import SCSS file

// Sample images for food gallery
import biriyani from '../assets/images/biriyani.jpg';
import chikent from '../assets/images/chikent.jpg';
import Eggmasala from '../assets/images/Eggmasala.jpg';
import Gobhimasala from '../assets/images/Gobhimasala.jpg';
import tandoriroti from '../assets/images/tandoriroti.jpg';
import rolls from '../assets/images/rolls.jpg';
import butterchicken from '../assets/images/butterchicken.jpg';
import vegfriedrice from '../assets/images/vegfriedrice.jpg';

function Discover() {
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1); // State for quantity
  const [selectedItem, setSelectedItem] = useState(null); // State for the currently selected item

  const foodImages = [
    biriyani, chikent, Eggmasala, Gobhimasala, tandoriroti, rolls,
    butterchicken, vegfriedrice
  ];

  const foodNames = [
    "Biriyani", "Chicken Tangidi Masala", "Egg Masala", "Gobi Masala", 
    "Roti", "Chiken Rolls", "Butter Chicken", "Veg Fried Rice",
  ];

  const foodPrices = [
    100, 450, 50, 130, 15, 50, 180, 120
  ];

  const carouselRef = useRef(null);

  // Function to handle order now button click
  const handleOrderNowClick = (item) => {
    setSelectedItem(item); // Set the selected item
  };

  // Function to proceed to payment
  const proceedToPayment = () => {
    navigate('/payment', {
      state: {
        cart: [{ name: selectedItem.name, price: selectedItem.price, quantity }],
        totalPrice: selectedItem.price * quantity,
        source: 'discover' // Add source to determine delivery charge
      }
    });
  };

  // Function to scroll left
  const scrollLeft = () => {
    const carousel = carouselRef.current;
    carousel.scrollBy({ left: -300, behavior: 'smooth' });
  };

  // Function to scroll right
  const scrollRight = () => {
    const carousel = carouselRef.current;
    carousel.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section className="discover">
      <h2><i>Discover Our Food</i></h2>
      <h3>
        <i>
          At Food Junction, we take pride in offering a diverse array of culinary delights that cater to every palate.
        </i>
      </h3>
      <div className="discover__content-wrapper">
        <button className="scroll-button left" onClick={scrollLeft}>
          &lt;
        </button>
        <div className="discover__content" ref={carouselRef}>
          {foodImages.map((image, index) => (
            <div className="discover__item" key={index}>
              <img src={image} alt={`Food ${index}`} />
              <h3>{foodNames[index]}</h3>
              <p>Price: ₹{foodPrices[index]}</p>
              <button 
                className="order-now-btn" 
                onClick={() => handleOrderNowClick({ name: foodNames[index], price: foodPrices[index] })}
              >
                Order Now
              </button>
            </div>
          ))}
        </div>
        <button className="scroll-button right" onClick={scrollRight}>
          &gt;
        </button>
      </div>
      {/* Add the See More button here */}
      <button className="see-more-btn" onClick={() => navigate('/menu')}>
        See More
      </button>
      {selectedItem && (
        <div className="quantity-modal">
          <h4>Choose Quantity for {selectedItem.name}</h4>
          <input
            type="number"
            value={quantity}
            min="1"
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          <button onClick={proceedToPayment} className="confirm-order-btn">Confirm Order</button>
          <button onClick={() => setSelectedItem(null)} className="cancel-btn">Cancel</button>
        </div>
      )}
    </section>
  );
}

export default Discover;
