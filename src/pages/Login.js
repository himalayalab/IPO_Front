import React from 'react';
import '../styles/styles.css'; // Import global styles

const Login = () => {
  return (
    <div>
      <h1 className="page-title">Login Page</h1>
      <div className="button-container">
        <a href="/home2">
          <button className="homepage-button">Login</button>
        </a>
      </div>
    </div>
  );
};

export default Login;
