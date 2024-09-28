import React from 'react';
import Navbar from '../components/navbar';
import IPOCalendar from '../components/IPOCalendar'; // Import the custom IPO Calendar
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from 'recharts';

const Investors = () => {
  // Dummy Data
  const performanceComparisonData = [
    { ipo: 'Company A', predicted: 100, actual: 80 },
    { ipo: 'Company B', predicted: 150, actual: 120 },
    { ipo: 'Company C', predicted: 170, actual: 100 },
    { ipo: 'Company D', predicted: 100, actual: 90 },
    { ipo: 'Company E ', predicted: 120, actual: 100 }



  ];

  const sectorDistributionData = [
    { sector: 'Tech', value: 400 },
    { sector: 'Healthcare', value: 300 },
    { sector: 'Finance', value: 300 },
  ];

  const riskAssessmentData = [
    { ipo: 'Company A', risk: 'Low' },
    { ipo: 'Company B', risk: 'Medium' },
    { ipo: 'Company C', risk: 'High' },
  ];

  const historicalTrendsData = [
    { date: '2023-01', volume: 30, performance: 10 },
    { date: '2023-02', volume: 20, performance: 15 },
    { date: '2023-03', volume: 40, performance: 30 },
  ];

  const sentimentData = [
    { sentiment: 'Positive', value: 70 },
    { sentiment: 'Neutral', value: 20 },
    { sentiment: 'Negative', value: 10 },
  ];

  return (
    <div>
      <Navbar />
      <h1 className="page-title">Investors Dashboard</h1>

      {/* Updated IPO Calendar */}
      {/* <h2>IPO Calendar</h2> */}
      <div className="calendar-section">
        <IPOCalendar /> {/* Incorporating the custom IPO calendar */}
      </div>

      <h2>IPO Performance Comparison</h2>
      <div className="chart-container">
        <div className="chart-box">
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={performanceComparisonData}>
              <XAxis dataKey="ipo" />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid stroke="#f5f5f5" />
              <Bar dataKey="predicted" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="actual" stroke="#ff7300" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-box">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={sectorDistributionData}
                dataKey="value"
                nameKey="sector"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {sectorDistributionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={['#0088FE', '#00C49F', '#FFBB28'][index % 3]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <h2>Risk Assessment</h2>
      <div>
        <ul>
          {riskAssessmentData.map((item) => (
            <li key={item.ipo}>
              {item.ipo}: {item.risk}
            </li>
          ))}
        </ul>
      </div>

      <h2>Historical IPO Trends</h2>
      <div className="chart-container">
        <div className="chart-box">
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={historicalTrendsData}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <CartesianGrid stroke="#f5f5f5" />
              <Bar dataKey="volume" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="performance" stroke="#ff7300" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <div className="chart-box">
        <h2>Sentimental Analysis</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={sentimentData}>
              
              <XAxis dataKey="sentiment" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#413ea0" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Investors;
