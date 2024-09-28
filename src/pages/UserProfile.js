import React from 'react';
import '../styles/styles.css'; // Import global styles
import Navbar from '../components/navbar';

const UserProfile = () => {
  // Dummy user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    bio: 'Enthusiastic investor with a keen interest in IPOs and stock market trends.',
    PAN:'MMB345345P',
    gender:'M',
    Marital:'Married',
  
    investments: [
      { id: 1, name: 'ONGC', shares: 100, price: '$10.00' },
      { id: 2, name: 'Zomato', shares: 50, price: '$20.00' },
      { id: 3, name: 'HCL Technologies', shares: 200, price: '$15.00' },
      {id:4, name:'Birlasoft',shares:150,price:'$20.00'},
      { id:5, name:'SAIL',shares:130,price:'$10.00'}
    ],
  };

  return (
    <div>
      <Navbar />
      <h1 className="page-title">User Profile</h1>
      <div className="user-info">
        <h2>{user.name}</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Bio:</strong> {user.bio}</p>
        <p><strong>PAN No:</strong> {user.PAN}</p>
        <p><strong>Gender:</strong> {user.gender}</p>
        <p><strong>Marital Status:</strong> {user.Marital}</p>
      </div>

      <div className="user-investments">
        <h2>Your Investments</h2>
        <table>
          <thead>
            <tr>
              <th>Investment ID</th>
              <th>Company Name</th>
              <th>Shares Owned</th>
              <th>Current Price</th>
            </tr>
          </thead>
          <tbody>
            {user.investments.map((investment) => (
              <tr key={investment.id}>
                <td>{investment.id}</td>
                <td>{investment.name}</td>
                <td>{investment.shares}</td>
                <td>{investment.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserProfile;
