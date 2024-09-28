import React from 'react';
import '../styles/styles.css'; // Import global styles

const Register = () => {
  return (
    <div>
      <h1 className="page-title">Register Page</h1>
      <div className="button-container">
        <a href="/login">
          <button className="homepage-button">Go to Login</button>
        </a>
      </div>
    </div>
  );
};

export default Register;
