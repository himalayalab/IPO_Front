// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import '../styles/styles.css'; // Import global styles

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <h1 className="navbar-title"></h1> */}
      <div className="navbar-links">
        <Link to="/home2">
          <button className="navbar-button">Home</button>
        </Link>
        <Link to="/">
          <button className="navbar-button">Logout</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
