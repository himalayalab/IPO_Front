import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage1 from './pages/Homepage1';
import Login from './pages/Login';
import Register from './pages/Register';
import Home2 from './pages/Homepage2';
import IPOListings from './pages/IPOListings'; // New page
import IPODetails from './pages/IPODetails'; // New page
import Dashboards from './pages/Dashboards'; // New page
import ApplicationTracking from './pages/ApplicationTracking'; // New page
import UserProfile from './pages/UserProfile'; // New page
import Investors from './pages/Investors'; // New page
import Company from './pages/Company'; // New page
// import Navbar from './components/navbar';
import './styles/styles.css'; // Global CSS

function App() {
  return (
    // <Router basename='/IPO_Front'>
      <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Homepage1 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/ipo-listings" element={<IPOListings />} /> {/* New route */}
        <Route path="/ipo-details" element={<IPODetails />} /> {/* New route */}
        <Route path="/dashboards" element={<Dashboards />} /> {/* New route */}
        <Route path="/application-tracking" element={<ApplicationTracking />} /> {/* New route */}
        <Route path="/user-profile" element={<UserProfile />} /> {/* New route */}
        <Route path="/investors" element={<Investors />} /> {/* New route */}
        <Route path="/company" element={<Company />} /> {/* New route */}
      </Routes>
    </Router>
  );
}

export default App;
