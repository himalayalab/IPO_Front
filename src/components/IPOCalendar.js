import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'; // Import calendar styles
import '../styles/styles.css'; // Import your global styles

// Setup the moment localizer
const localizer = momentLocalizer(moment);

const IPOCalendar = () => {
  // Sample data for IPO events
  const [events, setEvents] = useState([
    {
      title: 'Company A IPO',
      start: new Date(2024, 9, 5), // Date format: year, month, day (month is 0-indexed)
      end: new Date(2024, 9, 5),
      description: 'IPO date for Company A'
    },
    {
      title: 'Company B Roadshow',
      start: new Date(2024, 9, 12),
      end: new Date(2024, 9, 12),
      description: 'Roadshow event for Company B'
    },
    {
      title: 'Company C Filing',
      start: new Date(2024, 9, 20),
      end: new Date(2024, 9, 20),
      description: 'Filing date for Company C IPO'
    },
  ]);

  // Custom event styling
  const eventStyleGetter = (event) => {
    let backgroundColor = '#00ffcc'; // Set a color for event background
    let style = {
      backgroundColor,
      color: 'black', // Set text color
      borderRadius: '5px',
      border: '0px',
      display: 'block',
      padding: '5px',
    };
    return {
      style: style
    };
  };

  return (
    <div className="calendar-container">
      <h1 className="page-title">IPO Calendar</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600, margin: '50px' }}
        eventPropGetter={eventStyleGetter}
        popup
      />
    </div>
  );
};

export default IPOCalendar;
