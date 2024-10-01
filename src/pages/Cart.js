// src/pages/Cart.js
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import Notification from '../components/Notification';
import '../styles/pages/_cart.scss';

const Cart = () => {
  const { cart, clearCart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  // State for managing notification
  const [notification, setNotification] = useState(null);

  // Calculate the total price of items in the cart
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0); // Remove multiplication by quantity

  const handleCheckout = () => {
    navigate('/payment', { state: { cart, totalPrice } });
  };

  return (
    <div className="cart">
      <h1>Your Cart</h1>

      {notification && <Notification message={notification} onClose={() => setNotification(null)} />}

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                {item.name} - ₹{item.price} {/* Removed item quantity */}
                <button onClick={() => removeFromCart(item.name)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="total-price">
            <strong>Total Price: ₹{totalPrice}</strong>
          </div>
          <button onClick={clearCart}>Clear Cart</button>
          <button onClick={handleCheckout} className="checkout-button">Proceed to Pay</button>
        </>
      )}
    </div>
  );
};

export default Cart;
