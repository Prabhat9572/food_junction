import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/pages/mo.scss';

// Import images
import biriyani from '../assets/images/biriyani.jpg';
import moton from '../assets/images/moton.jpg';
import Eggmasala from '../assets/images/Eggmasala.jpg';
import Gobhimasala from '../assets/images/Gobhimasala.jpg';
import rolls from '../assets/images/rolls.jpg';
import butterchicken from '../assets/images/butterchicken.jpg';
import vegfriedrice from '../assets/images/vegfriedrice.jpg';
import chickenPakoda from '../assets/images/Chhenapoda.jpg'; // Import chicken pakoda image
import chickenSaltAndPepper from '../assets/images/chickenSaltAndPepper.jpeg'; // Import chicken salt and pepper image
import dragonChicken from '../assets/images/dragonChicken.jpeg'; // Import dragon chicken image
import gingerChicken from '../assets/images/gingerChicken.jpeg'; // Import ginger chicken image
import chicken65 from '../assets/images/chicken65.jpeg'; // Import chicken 65 image
import chickenManchurian from '../assets/images/chickenManchurian.jpeg'; // Import chicken manchurian image
import chickenLollipop from '../assets/images/chickenLollipop.jpeg'; // Import chicken lollipop image
import vegBiriyani from '../assets/images/vegBiriyani.jpeg'; // Import veg biriyani image
import eggBiriyani from '../assets/images/eggBiriyani.jpeg'; // Import egg biriyani image
import lollipopBiriyani from '../assets/images/lollipopBiriyani.jpeg'; // Import lollipop biriyani image
import muttonKossa from '../assets/images/muttonKossa.jpeg'; // Import mutton kossa image
import chickenFriedRice from '../assets/images/chickenFriedRice.jpeg'; // Import chicken fried rice image
import mixVegFriedRice from '../assets/images/mixVegFriedRice.jpeg'; // Import mix veg fried rice image

function Mo() {
  const { addToCart } = useContext(CartContext);

  // State to manage the notification message
  const [notification, setNotification] = useState('');

  // Updated sample menu items with new items
  const items = [
    { name: 'Chicken Biriyani (mo)', price: 160, image: biriyani },
    { name: 'Mutton (mo)', price: 270, image: moton },
    { name: 'Egg Masala (mo)', price: 50, image: Eggmasala },
    { name: 'Gobi Masala (mo)', price: 130, image: Gobhimasala },
    { name: 'Chicken Rolls (mo)', price: 55, image: rolls },
    { name: 'Butter Chicken (mo)', price: 110, image: butterchicken },
    { name: 'Veg Fried Rice (mo)', price: 120, image: vegfriedrice },
    { name: 'Chicken Pakoda (mo)', price: 80, image: chickenPakoda },
    { name: 'Chicken Salt and Pepper (mo)', price: 240, image: chickenSaltAndPepper },
    { name: 'Dragon Chicken (mo)', price: 240, image: dragonChicken },
    { name: 'Ginger Chicken (mo)', price: 240, image: gingerChicken },
    { name: 'Chicken 65 (mo)', price: 240, image: chicken65 },
    { name: 'Chicken Manchurian (mo)', price: 230, image: chickenManchurian },
    { name: 'Chicken Lollipop (mo)', price: 250, image: chickenLollipop },
    { name: 'Veg Biriyani (mo)', price: 120, image: vegBiriyani },
    { name: 'Egg Biriyani (mo)', price: 160, image: eggBiriyani },
    { name: 'Lollipop Biriyani (mo)', price: 280, image: lollipopBiriyani },
    { name: 'Mutton Kossa (mo)', price: 250, image: muttonKossa },
    { name: 'Chicken Fried Rice (mo)', price: 80, image: chickenFriedRice },
    { name: 'Mix Veg Fried Rice (mo)', price: 80, image: mixVegFriedRice },
  ];

  // Handle "Add to Cart" button click
  const handleAddToCart = (item) => {
    addToCart(item);
    setNotification(`${item.name} has been added to your cart!`);
    setTimeout(() => {
      setNotification(''); // Clear notification after 3 seconds
    }, 3000);
  };

  return (
    <div className="mo">
      <h1><i>Mo Biriyani Menu</i></h1>

      {/* Display notification if an item is added */}
      {notification && <div className="notification">{notification}</div>}

      {/* Render menu items */}
      <div className="mo__grid">
        {items.map((item, index) => (
          <div className="mo__card" key={index}>
            <img src={item.image} alt={item.name} className="mo__card-image" />
            <div className="mo__card-content">
              <h2>{item.name}</h2>
              <p className="mo__card-price">Rs {item.price}</p>
            </div>
            <div className="mo__actions">
              <button className="mo__btn add-to-cart" onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mo;
