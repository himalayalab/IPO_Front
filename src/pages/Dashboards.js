import React from 'react';
import '../styles/styles.css'; // Import global styles
import Navbar from '../components/navbar';

const Dashboards = () => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <h1 className="page-title">Dashboards Page</h1>
      <div className="button-container">
        <a href="/investors">
          <button className="homepage-button">Investors</button>
        </a>
        <a href="/company">
          <button className="homepage-button">Company</button>
        </a>
      </div>
    </div>
  );
};

export default Dashboards;
