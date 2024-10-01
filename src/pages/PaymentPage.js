// src/pages/PaymentPage.js
import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; 
import './PaymentPage.scss';
import Scanner from '../assets/images/Scanner.jpeg';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { clearCart } = useContext(CartContext); 
  const initialCart = location.state?.cart || []; // Get cart from location state
  const totalPrice = location.state?.totalPrice || 0; // Get total price from location state

  // Delivery charge is always 0 for this order
  const deliveryCharge = 0; 

  // State to manage quantities
  const [cart, setCart] = useState(initialCart.map(item => ({ ...item, quantity: 1 })));

  // Calculate total price with delivery charge
  const totalWithDelivery = cart.reduce((total, item) => total + item.price * item.quantity, 0) + deliveryCharge; 

  const handleConfirmOrder = () => {
    // Open the Google Form URL
    const googleFormUrl = "https://forms.gle/fhnaY3VqdwYbwcQf7"; // Replace with your actual Google Form URL
    window.open(googleFormUrl, "_blank"); // Opens the form in a new tab

    clearCart(); // Clear the cart
    navigate('/'); // Redirect to home page
  };

  const increaseQuantity = (index) => {
    setCart(prevCart => {
      const newCart = [...prevCart];
      newCart[index].quantity += 1;
      return newCart;
    });
  };

  const decreaseQuantity = (index) => {
    setCart(prevCart => {
      const newCart = [...prevCart];
      if (newCart[index].quantity > 1) {
        newCart[index].quantity -= 1;
      }
      return newCart;
    });
  };

  return (
    <div className="payment-container">
      <div className="order-summary">
        <h1>Order Summary</h1>
        <h3>Please Take a Screenshot of Order Summary Before Order Confirmation.</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              <div>
                {item.name} - ₹{item.price} x {item.quantity} {/* Displaying item name, price, and quantity */}
              </div>
              <div className="quantity-controls">
                <button onClick={() => decreaseQuantity(index)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(index)}>+</button>
              </div>
            </li>
          ))}
        </ul>
        <p className="delivery-charge">
          <strong>Delivery Charge: ₹{deliveryCharge === 0 ? 'Free Delivery' : deliveryCharge}</strong>
        </p>
        <p className="total-price"><strong>Total to Pay: ₹{totalWithDelivery}</strong></p>

        <div className="scanner-container">
          <img src={Scanner} alt="Payment Scanner" className="scanner-image" />
        </div>
      </div>

      <button onClick={handleConfirmOrder} className="confirm-order-button">
        Confirm Order
      </button>
    </div>
  );
};

export default PaymentPage;
