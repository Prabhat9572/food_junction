import React from 'react';
import '../styles/pages/About.scss';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

function About() {
  return (
    <div className="about">
      <div className="about__header">
        <h1>About Food Junction</h1>
      </div>

      <div className="about__content">
        {/* Our Mission Section */}
        <section className="about__mission">
          <h2>Our Mission</h2>
          <p>
            At Food Junction, our mission is to connect people with the joy of food. 
            We strive to provide a seamless and delightful dining experience, ensuring quality, 
            variety, and convenience. Our dedication to excellence drives us to innovate 
            continually, making food ordering easier and more enjoyable for everyone.
          </p>
          <p>
            We believe that food should not only satisfy hunger but also bring people together. 
            We are committed to fostering a community of food lovers who can share their experiences 
            and discover new culinary delights through our platform.
          </p>
        </section>

        {/* Our Vision Section */}
        <section className="about__vision">
          <h2>Our Vision</h2>
          <p>
            We envision a world where everyone can enjoy delicious meals from their favorite restaurants 
            at the touch of a button. Our commitment is to bring communities together through great food, 
            transcending geographical barriers and celebrating the diversity of culinary traditions.
          </p>
          <p>
            By leveraging technology, we aim to create a platform that enhances the dining experience 
            and empowers our customers to explore, indulge, and enjoy food like never before. 
            We strive to be the leading food delivery service, recognized for our quality and customer service.
          </p>
        </section>

        {/* Values Section */}
        <section className="about__values">
          <h2>Our Values</h2>
          <ul>
            <li>We prioritize our customers in everything we do, ensuring their needs and expectations are met.</li>
            <li>We maintain transparency and honesty in our services, building trust with our customers and partners.</li>
            <li>We embrace new ideas and technologies to enhance your experience and stay ahead of the curve.</li>
            <li>We partner with the best restaurants to ensure top-notch food, always focusing on freshness and taste.</li>
            <li>We are committed to reducing our environmental impact by promoting eco-friendly practices in our operations.</li>
          </ul>
        </section>

        {/* Social Media Section */}
        <section className="about__social-media">
          <h2>Connect with Us</h2>
          <p>Follow us on our social media channels to stay updated on our latest offerings and promotions!</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
