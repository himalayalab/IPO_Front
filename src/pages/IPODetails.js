import React, { useState } from 'react';
import '../styles/styles.css';
import Navbar from '../components/navbar';


const IPOListings = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const ipoData = [
    { issuer: 'Paramount Dye Tec Limited IPO', openDate: 'Sep 30, 2024', closeDate: 'Oct 03, 2024', listingDate: 'Oct 08, 2024', issuePrice: '111.00 to 117.00', issueSize: 28.43, lotSize: 1200, exchange: 'NSE SME' },
    { issuer: 'Subam Papers Limited IPO', openDate: 'Sep 30, 2024', closeDate: 'Oct 03, 2024', listingDate: 'Oct 08, 2024', issuePrice: '144.00 to 152.00', issueSize: 93.70, lotSize: 800, exchange: 'BSE SME' },
    { issuer: 'Saj Hotels Limited IPO', openDate: 'Sep 27, 2024', closeDate: 'Oct 01, 2024', listingDate: 'Oct 07, 2024', issuePrice: '65.00', issueSize: 27.63, lotSize: 2000, exchange: 'NSE SME' },
    // Add more IPO data as needed
  ];

  // Filter IPO data based on the search term
  const filteredIPOs = ipoData.filter(ipo =>
    ipo.issuer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <h1 className="page-title">IPO Listings</h1>
      <input
        type="text"
        placeholder="Search IPOs"
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-bar"
      />
      <table>
        <thead>
          <tr>
            <th>Issuer Company</th>
            <th>Open Date</th>
            <th>Close Date</th>
            <th>Listing Date</th>
            <th>Issue Price (Rs)</th>
            <th>Issue Size (Rs Cr.)</th>
            <th>Lot Size</th>
            <th>Exchange</th>
            <th>Compare</th>
          </tr>
        </thead>
        <tbody>
          {filteredIPOs.length > 0 ? (
            filteredIPOs.map((ipo, index) => (
              <tr key={index}>
                <td>{ipo.issuer}</td>
                <td>{ipo.openDate}</td>
                <td>{ipo.closeDate}</td>
                <td>{ipo.listingDate}</td>
                <td>{ipo.issuePrice}</td>
                <td>{ipo.issueSize}</td>
                <td>{ipo.lotSize}</td>
                <td>{ipo.exchange}</td>
                <td></td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">No IPOs found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default IPOListings;
