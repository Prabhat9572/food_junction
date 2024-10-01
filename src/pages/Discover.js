import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/_discover.scss'; // Import SCSS file

// Sample images for food gallery
import biriyani from '../assets/images/biriyani.jpg';
import chikent from '../assets/images/chikent.jpg';
import Eggmasala from '../assets/images/Eggmasala.jpg';
import Gobhimasala from '../assets/images/Gobhimasala.jpg';
import tandoriroti from '../assets/images/tandoriroti.jpg';
import pizzamargherita from '../assets/images/pizzamargherita.jpg';
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

  // Automatic scrolling functionality
  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        carousel.scrollBy({
          top: 0,
          left: 200,
          behavior: 'smooth',
        });

        if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
          carousel.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }, 3000);
    };

    startScrolling();

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="discover">
      <h2><i>Discover Our Food</i></h2>
      <h3>
        <i>
          At Food Junction, we take pride in offering a diverse array of culinary delights that cater to every palate.
        </i>
      </h3>
      <div className="discover__content-wrapper" ref={carouselRef}>
        <div className="discover__content">
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
      </div>
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
