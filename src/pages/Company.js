import React, { useState } from 'react';
import Navbar from '../components/navbar';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ScatterChart,
  Scatter,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  AreaChart,
  Area,
  BarChart,
  Bar,
  Cell,
} from 'recharts';

const Companies = () => {
  // Updated Dummy Data
  const optimalPricingData = [
    { price: '10', condition: 'Stable', color: '#e91e63' }, // Updated to pink
    { price: '15', condition: 'High Demand', color: '#ffeb3b' },
    { price: '20', condition: 'Volatile', color: '#ff9800' },
    { price: '25', condition: 'Very High Demand', color: '#f44336' },
    { price: '30', condition: 'Caution', color: '#2196f3' },
  ];

  const marketTimingData = [
    { date: '2024-09', condition: 30 },
    { date: '2024-10', condition: 50 },
    { date: '2024-11', condition: 70 },
    { date: '2024-12', condition: 60 },
    { date: '2025-01', condition: 80 },
  ];

  const competitorData = [
    { company: 'AAPL', revenue: 400, profit: 240 },
    { company: 'Microsoft', revenue: 300, profit: 120 },
    { company: 'NVIDIA', revenue: 200, profit: 100 },
    { company: 'VISA', revenue: 500, profit: 300 },
    { company: 'MasterCard', revenue: 350, profit: 200 },
  ];

  const valuationData = [
    { metric: 'P/E Ratio', value: 10 },
    { metric: 'EV/EBITDA', value: 12 },
    { metric: 'Price/Book', value: 8 },
    { metric: 'Debt/Equity', value: 5 },
    { metric: 'Return on Equity', value: 15 },
  ];

  const investorInterestData = [
    { region: 'North America', interest: 90 },
    { region: 'Europe', interest: 60 },
    { region: 'Asia', interest: 75 },
    { region: 'South America', interest: 50 },
    { region: 'Africa', interest: 40 },
  ];

  const postIPOPredictionData = [
    { month: '2024-09', prediction: 10 },
    { month: '2024-10', prediction: 15 },
    { month: '2024-11', prediction: 20 },
    { month: '2024-12', prediction: 25 },
    { month: '2025-01', prediction: 30 },
  ];

  // State to track the hover index
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div>
      <Navbar />
      <h1 className="page-title">Companies Dashboard</h1>

      <h2>Optimal Pricing Range</h2>
      <div className="chart-container">
        <div className="chart-box">
          <h3>Optimal Pricing Visualization</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={optimalPricingData}>
              <XAxis dataKey="price" />
              <YAxis />
              <Tooltip />
              <CartesianGrid stroke="#f5f5f5" />
              <Bar
                dataKey="condition"
                onMouseEnter={(data, index) => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {optimalPricingData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={hoveredIndex === index ? '#ff69b4' : entry.color} // Change color to a lighter pink on hover
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <h2>Market Timing</h2>
      <div className="chart-container">
        <div className="chart-box">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={marketTimingData}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <CartesianGrid stroke="#f5f5f5" />
              <Line type="monotone" dataKey="condition" stroke="#ff7300" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <h2>Competitor Analysis</h2>
      <div className="chart-container">
        <div className="chart-box">
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart>
              <XAxis dataKey="revenue" name="Revenue" />
              <YAxis dataKey="profit" name="Profit" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter name="Companies" data={competitorData} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      <h2>Valuation Metrics</h2>
      <div className="chart-container">
        <div className="chart-box">
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart outerRadius={90} data={valuationData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="metric" />
              <PolarRadiusAxis angle={30} domain={[0, 15]} />
              <Radar name="Valuation" dataKey="value" stroke="#ff7300" fill="#ff7300" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <h2>Investor Interest</h2>
      <div className="chart-container">
        <div className="chart-box">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={investorInterestData}>
              <XAxis dataKey="region" />
              <YAxis />
              <Tooltip />
              <CartesianGrid stroke="#f5f5f5" />
              <Bar dataKey="interest" fill="#413ea0" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <h2>Post-IPO Performance Prediction</h2>
      <div className="chart-container">
        <div className="chart-box">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={postIPOPredictionData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="prediction" stroke="#ff7300" fill="#ff7300" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Companies;
