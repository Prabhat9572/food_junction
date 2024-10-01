import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/pages/mk.scss';

// Import images
import biriyani from '../assets/images/biriyani.jpg';
import moton from '../assets/images/moton.jpg';
import Eggmasala from '../assets/images/Eggmasala.jpg';
import Gobhimasala from '../assets/images/Gobhimasala.jpg';
import rolls from '../assets/images/rolls.jpg';
import butterchicken from '../assets/images/butterchicken.jpg';
import vegfriedrice from '../assets/images/vegfriedrice.jpg';
import chickenSaltAndPepper from '../assets/images/chickenSaltAndPepper.jpeg';
import dragonChicken from '../assets/images/dragonChicken.jpeg';
import gingerChicken from '../assets/images/gingerChicken.jpeg';
import chicken65 from '../assets/images/chicken65.jpeg';
import chickenManchurian from '../assets/images/chickenManchurian.jpeg';
import chickenLollipop from '../assets/images/chickenLollipop.jpeg';
import vegBiriyani from '../assets/images/vegBiriyani.jpeg';
import eggBiriyani from '../assets/images/eggBiriyani.jpeg';
import lollipopBiriyani from '../assets/images/lollipopBiriyani.jpeg';
import muttonKossa from '../assets/images/muttonKossa.jpeg';
import chickenFriedRice from '../assets/images/chickenFriedRice.jpeg';
import mixVegFriedRice from '../assets/images/mixVegFriedRice.jpeg';

function Mk() {
  const { addToCart } = useContext(CartContext);

  // State to manage the notification message
  const [notification, setNotification] = useState('');

  // Sample menu items with new items
  const items = [
    { name: 'RTS Special Biriyani(RTS)', price: 160, image: biriyani },
    { name: 'Mutton Biriyani(RTS)', price: 320, image: moton },
    { name: 'Egg Masala(RTS)', price: 210, image: Eggmasala },
    { name: 'Gobi Masala (RTS)', price: 150, image: Gobhimasala },
    { name: 'Chicken Rolls(RTS)', price: 55, image: rolls },
    { name: 'Butter Chicken(RTS)', price: 220, image: butterchicken },
    { name: 'Veg Fried Rice(RTS)', price: 120, image: vegfriedrice },
    { name: 'Chicken Salt and Pepper(RTS)', price: 240, image: chickenSaltAndPepper },
    { name: 'Dragon Chicken(RTS)', price: 240, image: dragonChicken },
    { name: 'Ginger Chicken(RTS)', price: 240, image: gingerChicken },
    { name: 'Chicken 65(RTS)', price: 250, image: chicken65 },
    { name: 'Chicken Manchurian(RTS)', price: 230, image: chickenManchurian },
    { name: 'Chicken Lollipop(RTS)', price: 250, image: chickenLollipop },
    { name: 'Veg Biriyani(RTS)', price: 210, image: vegBiriyani },
    { name: 'Egg Biriyani(RTS)', price: 200, image: eggBiriyani },
    { name: 'Lollipop Biriyani(RTS)', price: 260, image: lollipopBiriyani },
    { name: 'Mutton Kossa(RTS)', price: 250, image: muttonKossa },
    { name: 'Chicken Fried Rice(RTS)', price: 200, image: chickenFriedRice },
    { name: 'Paneer Biriyani(RTS)', price: 220, image: mixVegFriedRice },
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
    <div className="mk">
      <h1><i>RTS Cafe Menu</i></h1>

      {/* Display notification if an item is added */}
      {notification && <div className="notification">{notification}</div>}

      <div className="mk__grid">
        {items.map((item, index) => (
          <div className="mk__card" key={index}>
            <img src={item.image} alt={item.name} className="mk__card-image" />
            <div className="mk__card-content">
              <h2>{item.name}</h2>
              <p className="mk__card-price">Rs {item.price}</p>
            </div>
            <div className="mk__actions">
              <button className="mk__btn add-to-cart" onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mk;
