import React, { useState } from 'react';
import '../styles/pages/InstantFoodGifting.scss';

const InstantFoodGifting = () => {
  const [recipientName, setRecipientName] = useState('');
  const [occasion, setOccasion] = useState('');
  const [message, setMessage] = useState('');
  const [selectedFoodItem, setSelectedFoodItem] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [customizations, setCustomizations] = useState('');

  // Sample food items (You can fetch these from an API or a backend)
  const foodMenu = [
    { name: 'Pizza', customOptions: ['Extra Cheese', 'Mushrooms', 'Pepperoni'] },
    { name: 'Burger', customOptions: ['Extra Patty', 'Bacon', 'Lettuce'] },
    { name: 'Pasta', customOptions: ['Garlic Bread', 'Extra Sauce', 'Mushrooms'] }
  ];

  const handleFoodSelection = (e) => {
    const selectedFood = e.target.value;
    setSelectedFoodItem(selectedFood);
    setCustomizations(''); // Clear customizations when food changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`
      Order Summary:
      - Food Item: ${selectedFoodItem}
      - Customizations: ${customizations || 'None'}
      - Quantity: ${quantity}
      - Recipient: ${recipientName}
      - Occasion: ${occasion}
      - Message: "${message}"
      
      Your gift has been sent successfully!
    `);
    // Add logic to handle order and food gifting here
  };

  return (
    <div className="instant-gift-section">
      <h2>Instant Food Gifting</h2>
      <p>Order food and send a gift letter to your loved ones!</p>

      <form className="gift-form" onSubmit={handleSubmit}>
        
        {/* Food Order Section */}
        <div className="form-group">
          <label>Food Item:</label>
          <select value={selectedFoodItem} onChange={handleFoodSelection} required>
            <option value="">Select Food Item</option>
            {foodMenu.map((item, index) => (
              <option key={index} value={item.name}>{item.name}</option>
            ))}
          </select>
        </div>

        {selectedFoodItem && (
          <div className="form-group">
            <label>Customize Your {selectedFoodItem}:</label>
            <select
              value={customizations}
              onChange={(e) => setCustomizations(e.target.value)}
              required
            >
              <option value="">Select Customization</option>
              {foodMenu
                .find(item => item.name === selectedFoodItem)
                .customOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>
        )}

        <div className="form-group">
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
            required
          />
        </div>

        {/* Gift Letter Section */}
        <div className="form-group">
          <label>Recipient's Name:</label>
          <input
            type="text"
            value={recipientName}
            onChange={(e) => setRecipientName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Occasion:</label>
          <input
            type="text"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            placeholder="e.g., Birthday, Anniversary"
            required
          />
        </div>
        <div className="form-group">
          <label>Personal Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            placeholder="Write your message here..."
            required
          />
        </div>

        <button type="submit" className="send-gift-btn">Send Gift & Order</button>
      </form>
    </div>
  );
};

export default InstantFoodGifting;
