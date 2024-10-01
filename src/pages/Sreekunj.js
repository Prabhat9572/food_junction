import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext'; 
import '../styles/pages/sreekunj.scss';

const menuItems = [
  {
    id: 1,
    name: 'Mutton Biriyani (Shree)',
    price: 240,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF6uJ9ND9zGCyntKVXPFHZQso7E54DbRO5hQ&s',
  },
  {
    id: 2,
    name: 'Chicken Biriyani (Shree)',
    price: 200,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UqbbQgfNMWWdx4d1CEnDwAUsVDxDLS52KA&s',
  },
  {
    id: 3,
    name: 'Egg Biriyani (Shree)',
    price: 165,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_hH2wU-yYLLekhs9m0q5u6Ie5PTN6m3_I4Q&s',
  },
  {
    id: 4,
    name: 'Veg Biriyani (Shree)',
    price: 170,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC52b9Onr-ZXTzDWML7oLJjp1E_y5kuRPkfg&s',
  },
  {
    id: 5,
    name: 'Fish 65 Bone (Shree)',
    price: 150,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH7qGvkqik_hYVLRjTJf1zmnEM4IdOPShG7g&s',
  },
  {
    id: 6,
    name: 'Chicken Lollypop (Shree)',
    price: 200,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwMBKPKBsY8pzyJqxna_3FIR_8TlmDy7DdAw&s',
  },
  {
    id: 7,
    name: 'Chicken Pakoda (Shree)',
    price: 200,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDasvahhtxSBdk5ULfR2mWNe47AsSOLEca6A&s',
  },
  {
    id: 8,
    name: 'American Corn Fry (Shree)',
    price: 180,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsqvB1MugFlbbkux_O-TmtrcIvSb8vURCmww&s',
  },
  {
    id: 9,
    name: 'Paneer Pakoda (Shree)',
    price: 170,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjmsgD-8YOgL45bWRS7V2p1EpcdPBEpvfYkg&s',
  },
  {
    id: 10,
    name: 'Mushroom Pakoda (Shree)',
    price: 180,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6nN2KfPFbX-6187KubZ5ADzhgkygtL-VVvQ&s',
  },
  {
    id: 11,
    name: 'Paneer Tikka (Shree)',
    price: 190,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvP83RFb0fgHaPM55TtMIueQ1zQimFeuxb4Q&s',
  },
  {
    id: 12,
    name: 'Egg Noodles (Shree)',
    price: 120,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRERBHW-ur48nNusghCfV4_NNWzRv45CzNHlQ&s',
  },
  {
    id: 13,
    name: 'Chicken Noodles (Shree)',
    price: 150,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYC4hGh9YER_akioA3eVJIlJN_vPEygPuI1g&s',
  },
  {
    id: 14,
    name: 'Veg Manchurian (Shree)',
    price: 140,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0v-kQCReI4Qb_9jqCsMQocNE7d6Z03NM_Ww&s',
  },
];

const Sreekunj = () => {
  const { addToCart } = useContext(CartContext); // Get addToCart function from CartContext
  const [notification, setNotification] = useState(''); // Notification state

  const handleAddToCart = (item) => {
    // Add the delivery charge to the item price when adding to the cart
    const itemWithDeliveryCharge = {
      ...item,
      price: item.price + 50, // Adding the delivery charge of ₹50
    };
    addToCart(itemWithDeliveryCharge);
    setNotification(`${item.name} has been added to your cart!`); // Set notification message
    setTimeout(() => {
      setNotification(''); // Clear the notification after 3 seconds
    }, 3000);
  };

  return (
    <div className="menu-container">
      <h1>Sreekunj Menu</h1>

      {/* Display notification if an item is added */}
      {notification && <div className="notification">{notification}</div>}

      <div className="menu-grid">
        {menuItems.map((item) => (
          <div className="menu-card" key={item.id}>
            <img src={item.imageUrl} alt={item.name} />
            <div className="card-details">
              <h2>{item.name}</h2>
              <p>Rs {item.price.toFixed(2)}</p>
              <button className="add-to-cart" onClick={() => handleAddToCart(item)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sreekunj;
