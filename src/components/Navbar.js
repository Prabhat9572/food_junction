// src/components/Navbar.js
import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingCart, FaUser } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';
import logo from '../assets/images/fj.png';
import '../styles/components/navbar.scss';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.navbar')) {
        closeMenu();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <Link to="/">
          <img src={logo} alt="Food Junction Logo" className="navbar-logo" />
        </Link>
      </div>

      {/* Scrolling Food Junction Title */}
      <div className="navbar__title">
        <div className="scrolling-text">F O O D   J U N C T I O N</div>
      </div>

      {/* Toggle Icon (only show on small screens) */}
      <div className="navbar__toggle" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Links section */}
      <div className={`navbar__links ${isMenuOpen ? 'open' : ''}`}>
        <ul className="navbar__list" onClick={closeMenu}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/pizzahub">Pizzahub</Link></li>
          <li><Link to="/book-cook">Book Cook</Link></li>
          <li><Link to="/hotel">Top Restaurant</Link></li>
          <li><Link to="/about">About</Link></li>
          <li>
            <Link to="/cart">
              <FaShoppingCart /> Cart 
              {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <FaUser /> Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
