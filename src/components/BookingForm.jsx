/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './BookingForm.css'; // Import the CSS file

const BookingForm = ({ showName }) => {
  const { id } = useParams(); // Get showId from the URL
  const [name, setName] = useState('');
  const [tickets, setTickets] = useState(1);
  

  const handleBooking = () => {
    console.log(`Booking for ${showName} (${id}) - ${tickets} ticket(s)`);
  };

  return (
    <div className="booking-form-container">
      <h1>Booking Form for {showName}</h1>
      <form>
        <label className="form-label">
          Number of Tickets:
          <input
            className="form-input"
            type="number"
            value={tickets}
            onChange={(e) => setTickets(Math.max(1, parseInt(e.target.value)))}
          />
        </label>
        <br />
        <button className="form-button" type="button" onClick={handleBooking}>
          Book Tickets
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
