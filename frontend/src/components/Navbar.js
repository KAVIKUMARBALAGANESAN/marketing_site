// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Importing the styles for the Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Candle Store</Link> {/* Link to Home */}
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link> {/* Link to Home */}
        </li>
        <li>
          <Link to="/products">Products</Link> {/* Link to Products */}
        </li>
        <li>
          <Link to="/contact">Contact</Link> {/* Link to Contact */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
