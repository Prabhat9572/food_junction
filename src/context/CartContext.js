// src/context/CartContext.js
import React, { createContext, useState } from 'react';

// Create the context
export const CartContext = createContext();

// CartProvider component to provide the cart context
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to add an item to the cart, with default quantity 1
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.name === item.name);
      
      if (existingItem) {
        alert(`${item.name} quantity has been updated in the cart!`); // Alert for quantity update
        return prevCart.map((cartItem) =>
          cartItem.name === item.name ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        alert(`${item.name} has been added to the cart!`); // Alert for item addition
        return [...prevCart, { ...item, quantity: 1 }]; // Add new item with default quantity 1
      }
    });
  };

  // Function to update item quantity
  const updateItemQuantity = (name, quantity) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((cartItem) =>
        cartItem.name === name ? { ...cartItem, quantity } : cartItem
      );
      alert(`Quantity of ${name} updated to ${quantity}!`); // Alert for quantity update
      return updatedCart;
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (name) => {
    setCart((prevCart) => {
      alert(`${name} has been removed from the cart!`); // Alert for removal
      return prevCart.filter((cartItem) => cartItem.name !== name);
    });
  };

  // Function to clear the entire cart
  const clearCart = () => {
    setCart([]);
  };

  // Context value to be provided to consuming components
  const contextValue = {
    cart,
    addToCart,
    clearCart,
    updateItemQuantity,
    removeFromCart,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};
