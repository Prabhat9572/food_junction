import React from 'react';
import '../styles/pages/ThankYou.scss'; // Ensure this path is correct for your project structure

const ThankYou = () => {
  return (
    <div className="thank-you-container">
      <div className="thank-you-message">
        <h1>Thank You for Your Booking!</h1>
        <p>Your request has been received successfully. We will contact you shortly to confirm the details.</p>
        <p>Meanwhile, sit back and relax while we handle everything for your special occasion!</p>
        <a href="/" className="back-home-btn">Back to Home</a>
      </div>
    </div>
  );
};

export default ThankYou;
