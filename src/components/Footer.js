import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import '../styles/components/footer.scss';

function Footer() {
  useEffect(() => {
    const starContainer = document.querySelector('.star-container');
    if (starContainer) {
      for (let i = 1; i <= 1000; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        // Add random class to each star
        const classes = ['star-explosion', 'star-creation', 'star-blinking'];
        const randomClass = classes[Math.floor(Math.random() * classes.length)];
        star.classList.add(randomClass);
        starContainer.appendChild(star);
      }
    }
  }, []);

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__info">
          <h2>Food Junction</h2>
          <p>Your favorite place for delicious meals and fast food. <br /> Welcome to Food Junction, your ultimate destination for a mouthwatering selection of meals that blend convenience with gourmet quality. From hearty, flavorful dishes to quick and satisfying fast food, we offer a diverse range of options to cater to every taste and occasion.</p>
        </div>

        <div className="footer__info">
          <h2>For Restaurants</h2>
          <p>Partner With Us</p>
          <p>Apps For You</p>
        </div>
        
        <div className="footer__links">
          <h2>Quick Links</h2>
          <ul>
            <li><Link to="/">Home</Link></li> {/* Updated to Link */}
            <li><Link to="/menu">Menu</Link></li> {/* Updated to Link */}
            <li><Link to="/hotel">Top Restaurant</Link></li> {/* Updated to Link */}
            <li><Link to="/Pizzahub">Pizzahub</Link></li> {/* Updated to Link */}
            <li><Link to="/about">About Us</Link></li> {/* Updated to Link */}



            
          </ul>
        </div>
        
        <div className="footer__contact">
          <h2>Contact Us</h2>
          <p>Email: <a href="foodjunctionpkd@gmail.com.com">foodjunctionpkd@gmail.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+91-9572757774</a></p>
        </div>
        <div className="footer__newsletter">
          <h2>Subscribe to Our Newsletter</h2>
          <form action="#" method="post">
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; 2024 Food Junction. All rights reserved.</p>
        <div className="footer__social">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer__social-link">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer__social-link">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer__social-link">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="footer__social-link">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>

      <div className="star-container">
        {/* Stars will be dynamically added here */}
      </div>
    </footer>
  );
}

export default Footer;
