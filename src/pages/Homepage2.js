import React from 'react';
import '../styles/styles.css'; // Import global styles
import Navbar from '../components/navbar';

const Home2 = () => {
  return (
    <div className="home2-container">
      <Navbar />
      <h1 className="page-title">Home Page</h1>
      <div className="button-container">
        <a href="/ipo-listings">
          <button className="homepage-button">IPO Listings</button>
        </a>
        <a href="/ipo-details">
          <button className="homepage-button">IPO Details</button>
        </a>
        <a href="/dashboards">
          <button className="homepage-button">Dashboards</button>
        </a>
        <a href="/application-tracking">
          <button className="homepage-button">Application Tracking</button>
        </a>
        <a href="/user-profile">
          <button className="homepage-button">User Profile</button>
        </a>
      </div>
    </div>
  );
};

export default Home2;
