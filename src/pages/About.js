import React from 'react';
import '../styles/pages/About.scss';

// Use online image URLs for Play Store and Apple Store icons
const playStoreIconUrl = 'https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg';
const appleStoreIconUrl = 'https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg'; // Updated URL

function About() {
  return (
    <div className="about">
      <div className="about__header">
        <h1>About Food Junction</h1>
      </div>

      <div className="about__content">
        {/* Removed Founder Section */}
        
        {/* Right Side - About Text */}
        <div className="about__description">
          <h2>Our Mission</h2>
          <p>
            At Food Junction, our mission is to connect people with the joy of food. 
            We strive to provide a seamless and delightful dining experience, ensuring quality, 
            variety, and convenience.
          </p>
          <h2>Our Vision</h2>
          <p>
            We envision a world where everyone can enjoy delicious meals from their favorite restaurants 
            at the touch of a button. Our commitment is to bring communities together through great food.
          </p>
        </div>
      </div>

      {/* Download Section */}
      <div className="about__download">
        <h2>Download Our App</h2>
        <div className="download-icons">
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
            <img src={playStoreIconUrl} alt="Download on Play Store" />
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <img src={appleStoreIconUrl} alt="Download on Apple Store" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
