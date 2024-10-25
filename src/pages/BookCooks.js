import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router-dom for routing
import '../styles/pages/BookCook.scss';

const BookCooks = () => {
  const [formData, setFormData] = useState({
    name: '',
    occasion: '',
    date: '',
    contact: ''
  });

  const navigate = useNavigate(); // For navigation

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to the thank you page after booking
    navigate('/thank-you'); // Assuming the thank-you route is set up
  };

  return (
    <div className="book-cooks-container">
      <div className="book-cooks-content">
        {/* Left Side - Booking Form */}
        <div className="booking-form-section">
          <h1>Book a Cook for Your Special Occasion</h1>
          <form className="booking-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="occasion">Occasion/Festival:</label>
            <input
              type="text"
              id="occasion"
              name="occasion"
              value={formData.occasion}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="contact">Contact Number:</label>
            <input
              type="tel"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              required
            />

            <button type="submit" className="submit-btn">Book Now</button>
          </form>
        </div>

        {/* Right Side - Image and Text */}
        <div className="info-section">
          <img
            src="https://png.pngtree.com/element_our/png/20180918/chef-cooking-fried-chicken-and-delicious-sign-png_103460.jpg" // Replace with the correct image URL
            alt="Chef preparing food"
            className="info-image"
          />
          <div className="info-text">
            <h3>Why Choose Our Cooks?</h3>
            <p>
              Our highly skilled cooks specialize in preparing delicious,
              homemade meals for your special occasions, ensuring you can enjoy
              your time with family and friends while we take care of the
              kitchen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCooks;
