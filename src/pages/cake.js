import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext'; // Import CartContext
import { useNavigate } from 'react-router-dom'; // Ensure useNavigate is imported
import '../styles/pages/cake.scss'; // Adjust the path as needed

const cakeItems = [
  { id: 1, name: 'Chocolate Cake 1/2 kg', price: 470, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTaVzBSzvsd0SNaxono3RtV-xKqGttdUwIaoEgJxsQ6y6Gq1qvjwxfMyiAq5ipTLFvO5CGYzIaH7BOM3OLEOvOEq6taqZlI4rpnuHbplOE' },
  { id: 2, name: 'Butter Scotch Cake  1/2 kg', price: 370, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUYvu9l2zimasImR9D6l9Rp7-1IGaH7j3K5Q&s' },
  { id: 3, name: 'Vanilla Cake 1/2 kg', price: 370, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOkNzNsv1gabKodE0Vee_2UIC9g-c9fHa4nQ&s' },
  { id: 4, name: 'Black Forest cake 1/2 kg', price: 420, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMtn_U67haIovhsz1P-SYjtNdDNBjWxSOKZw&s' },
  { id: 5, name: 'Choco Chips cake   1/2 kg', price: 470, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz0gD3kINq67G6AwFGOwXurAt-eSjupiT5Rg&s' },
  { id: 6, name: 'White Forest Cake', price: 760, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ZyHnk7x_kCNIVfHFv7H44M2Hx0x57jLavg&s' },
  { id: 7, name: 'Fire Candle ', price: 40, image: 'https://5.imimg.com/data5/XQ/DR/FS/SELLER-27345468/sparkling-fire-candle-for-birthday-12-cm-pack-of-6-candle-multicolor-pack-of-6--500x500.jpeg' },
  { id: 8, name: 'Party Snow Spray', price: 60, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8TytZeWjiD_cRo65R22IhXSPAx8IGW8-4WA&s' },
];

const Cake = () => {
  const { addToCart } = useContext(CartContext); // Use the context to access addToCart function
  const [notification, setNotification] = useState(''); // Notification state
  const navigate = useNavigate(); // Declare the navigate variable

  const handleAddToCart = (item) => {
    addToCart({ ...item, quantity: 1 }); // Add item to cart when button is clicked
    setNotification(`${item.name} has been added to your cart!`); // Set notification message
    setTimeout(() => {
      setNotification(''); // Clear the notification after 3 seconds
    }, 3000);
  };

  const handleOrderNow = (item) => {
    addToCart({ ...item, quantity: 1 }); // Add item to cart
    navigate('/payment', { state: { cart: [{ ...item, quantity: 1 }], totalPrice: item.price, source: 'cake' } }); // Redirect to payment page
    setNotification(`${item.name} has been ordered!`); // Set notification message for order
    setTimeout(() => {
      setNotification(''); // Clear the notification after 3 seconds
    }, 3000);
  };

  return (
    <div className="cake-container">
      <h1>Cakes</h1>
      <h4>Our cakes are baked to perfection, promising a moist and fluffy experience in every bite</h4>

      {/* Display notification if an item is added or ordered */}
      {notification && <div className="notification">{notification}</div>}

      <div className="cake-card-container">
        {cakeItems.map(item => (
          <div className="cake-card" key={item.id}>
            <img src={item.image} alt={item.name} className="cake-image" />
            <h2 className="cake-name">{item.name}</h2>
            <p className="cake-price">₹{item.price}</p>
            <button className="add-to-cart-button" onClick={() => handleAddToCart(item)}>
              Add to Cart
            </button>
            <button className="order-now-button" onClick={() => handleOrderNow(item)}>
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cake;
