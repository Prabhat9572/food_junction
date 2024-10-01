// src/pages/Pizza.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/pages/Pizza.scss';

const menuItems = [
  {
    id: 1,
    name: "Veg Pizza(M)",
    price: 180,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Detorv_tLjj-lcdOfcO-_rsZByMWuSWBQg&s",
  },
  {
    id: 2,
    name: "Corn Pizza(M)",
    price: 200,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3_WbV6Ft21_n7fbluZrNLYTj_UBHlgzlRKQ&s",
  },
  {
    id: 3,
    name: "Corn Pizza(Big)",
    price: 300,
    imageUrl: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/corn.f8baa08ad7f607f1de30f96bb9245b50.1.jpg",
  },
  {
    id: 4,
    name: "Cheese Pizza(M)",
    price: 190,
    imageUrl: "https://t3.ftcdn.net/jpg/06/36/30/26/360_F_636302609_Tb1JtDTQ4zawO0ub6L2fHzlrW586f9tr.jpg",
  },
  {
    id: 5,
    name: "Tomato Pizza(M)",
    price: 180,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYxs1d2RKxMVLOJSFwjSQsK8YnY4I-Qawa_Q&s",
  },
  {
    id: 6,
    name: "Tomato Pizza(Big)",
    price: 310,
    imageUrl: "https://hips.hearstapps.com/womansday/assets/cm/15/09/54ef8b64366c1_-_fresh-tomato-pizza-kqgv52-xl.jpg",
  },
  {
    id: 7,
    name: "Veg mix Pizza(M)",
    price: 180,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnZdZrLh3yAq73d9vIdxf7AL15AYAojwb2qg&s",
  },
  {
    id: 8,
    name: "Chiken Pizza(Big)",
    price: 360,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRvAikqGmSQsJ7s-L-rq9ExiVFah_EJ3TQGQ&s",
  },
  {
    id: 9,
    name: "Chiken Pizza(M)",
    price: 210,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRvAikqGmSQsJ7s-L-rq9ExiVFah_EJ3TQGQ&s",
  },
  {
    id: 10,
    name: "Egg Pizza(M)",
    price: 180,
    imageUrl: "https://www.acouplecooks.com/wp-content/uploads/2014/08/Onion-Egg-Pizza-008.jpg",
  },
  {
    id: 11,
    name: "Paneer Pizza(M)",
    price: 190,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtwc5ofUxzM2eLBt0WNos6kAJnkqo3RTJvlQ&s",
  },
  {
    id: 12,
    name: "Mushroom Pizza(M)",
    price: 199,
    imageUrl: "https://sinfullyspicy.com/wp-content/uploads/2022/02/Tandoori-Mushroom-Pizza-Featured-Image.jpg",
  },
  {
    id: 13,
    name: "Veg burger",
    price: 79,
    imageUrl: "https://5.imimg.com/data5/IG/FC/GLADMIN-51382316/veg-berger-500x500.png",
  },
  {
    id: 14,
    name: "Chiken burger",
    price: 99,
    imageUrl: "https://www.crumbtopbaking.com/wp-content/uploads/2022/06/Air-Fryer-Chicken-Patties-10.jpg",
  },
  {
    id: 15,
    name: "Veg Cheese burger",
    price: 99,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7fPCCpvgdieojkOm4tIr2KquUksTj3EajGw&s",
  },
  {
    id: 16,
    name: "Chiken Cheese burger",
    price: 99,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnglHPUbBLriMFE95GN8_pV2VGvM7qgbBqzQ&s",
  },
  {
    id: 17,
    name: "Paneer burger",
    price: 99,
    imageUrl: "https://mcdonaldsblog.in/wp-content/uploads/2016/06/mcspicy-paneer-1-1.jpg",
  },
  {
    id: 18,
    name: "Mashroom burger",
    price: 99,
    imageUrl: "https://avocadoskillet.com/wp-content/uploads/2022/11/IMG_6561.JPG.jpeg",
  },
  {
    id: 19,
    name: "Chiken Roll",
    price: 59,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQyf3E7cgHcK-c-FI8mP9E4lXrZZ0l3cH3MA&s",
  },
  {
    id: 20,
    name: "Egg Roll",
    price: 49,
    imageUrl: "https://img-global.cpcdn.com/recipes/1fc26dcfec280df4/680x482cq70/chicken-egg-roll-recipe-main-photo.jpg",
  },
  {
    id: 21,
    name: "Veg Roll",
    price: 49,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXFvQ2k0eBwmHIaeUMWVdRA8Q84pBo5xzIIA&s",
  },
  {
    id: 22,
    name: "Chiken chowmin",
    price: 79,
    imageUrl: "https://recipe30.com/wp-content/uploads/2021/09/Chicken-Chow-Mein-1.jpg",
  },
  {
    id: 23,
    name: "Veg chowmin",
    price: 59,
    imageUrl: "https://www.foodandwine.com/thmb/F0BP0mKKbWKEajA2jjV7Lh7nZXI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/201403-xl-vegetable-chow-mein-f76c0597d2ed4bc294d0b5e15b2433b7.jpg",
  },
];


function Pizza() {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate(); // Initialize navigate

  // Function to handle order now click
  const handleOrderNow = (item) => {
    // Redirect to the payment page with state
    navigate('/payment', { state: { cart: [item], totalPrice: item.price } });
  };

  return (
    <section className="menu">
      <h2 className="menu-header">Our Pizza</h2>
      <div className="menu-cards">
        {menuItems.map(item => (
          <div key={item.id} className="menu-card">
            <img src={item.imageUrl} alt={item.name} />
            <div className="menu-card-content">
              <h3>{item.name}</h3>
              <p>Rs {item.price.toFixed(2)}</p>
              <div className="button-group">
                <button 
                  className="add-to-cart-button" 
                  onClick={() => addToCart(item)} // Add item to cart on click
                >
                  Add to Cart
                </button>
                <button 
                  className="order-now-button" 
                  onClick={() => handleOrderNow(item)} // Use the new handler
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pizza;