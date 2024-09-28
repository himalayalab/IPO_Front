import React, { useState } from 'react';
import '../styles/styles.css';
import Navbar from '../components/navbar';

const ApplicationTracking = () => {
  const [applicationId, setApplicationId] = useState('');
  const [panNumber, setPanNumber] = useState('');

  const [bidDetails, setBidDetails] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate fetching bid details
    const dummyBidDetails = [
      { bidId: 'BID001', noOfShares: 100, price: 120 },
      { bidId: 'BID002', noOfShares: 200, price: 130 },
    ];
    setBidDetails(dummyBidDetails);
  };

  return (
    <div className="container">
       <Navbar />
      <h1 className="page-title">Application Tracking Page</h1>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="applicationId">Application ID:</label>
          <input
            type="text"
            id="applicationId"
            value={applicationId}
            onChange={(e) => setApplicationId(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="panNumber">PAN Number:</label>
          <input
            type="text"
            id="panNumber"
            value={panNumber}
            onChange={(e) => setPanNumber(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>

      {bidDetails.length > 0 && (
        <div>
          <h2>Bid Details</h2>
          <table>
            <thead>
              <tr>
                <th>Bid ID</th>
                <th>No of Shares</th>
                <th>Price (Rs)</th>
              </tr>
            </thead>
            <tbody>
              {bidDetails.map((bid, index) => (
                <tr key={index}>
                  <td>{bid.bidId}</td>
                  <td>{bid.noOfShares}</td>
                  <td>{bid.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ApplicationTracking;
