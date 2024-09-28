import React from 'react';
import '../styles/styles.css'; // Global styles
import logo from '../img/7.png'; // Make sure to adjust the path to your logo file

const Homepage1 = () => {
  return (
    <div className="homepage-container">
      <div style={{ display: 'flex', justifyContent: 'flex-start', margin: '20px' }}>
        <img src={logo} alt="Logo" style={{ width: '100px', marginRight: '20px' }} /> {/* Adjust width as needed */}
        <a href="/faq" style={{ marginRight: '20px', textDecoration: 'none', color: '#fff' }}>FAQ</a>
        <a href="/about" style={{ marginRight: '20px', textDecoration: 'none', color: '#fff' }}>About Us</a>
        <a href="/testimonials" style={{ textDecoration: 'none', color: '#fff' }}>Testimonials</a>
      </div>

      <div className="title-container" style={{ textAlign: 'center', width: '100%',padding:'20px' }}>
        <h1 className="homepage-title">IPO Platform</h1>
        <p className="futuristic-paragraph">At the forefront of innovation in capital markets, our IPO platform is designed to democratize access to initial public offerings. We empower investors with the tools and 
            insights needed to navigate the IPO landscape effortlessly. 
            Whether you're a seasoned investor or new to the market, our user-friendly interface and 
            comprehensive resources ensure a seamless experience as you explore, apply, and track IPOs. 
            Join us in shaping the future of investment opportunities and take the first step toward your financial growth today!
</p>
        <div className="button-container" style={{ marginTop: '20px' }}>
          <a href="/login">
            <button className="homepage-button">Login</button>
          </a>
          <a href="/register">
            <button className="homepage-button">Register</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Homepage1;
