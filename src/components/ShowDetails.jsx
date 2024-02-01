/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BookingForm from './BookingForm'; // Import the BookingForm component
import './ShowDetails.css';

const ShowDetails = () => {
  const { id } = useParams(); // Get showId from the URL
  const [showDetails, setShowDetails] = useState(null);

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setShowDetails(response.data);
      } catch (error) {
        console.error('Error fetching show details:', error);
      }
    };

    fetchShowDetails();
  }, [id]);

  if (!showDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="show-details-card">
      <img src={showDetails.image?.original} alt={showDetails.name} />
      <div className="show-details-content">
        <h1>{showDetails.name}</h1>
        <h2>Summary</h2>
        <p dangerouslySetInnerHTML={{ __html: showDetails.summary }} />
        {/* Add more details as needed */}
        {/* Use BookingForm component with the showName prop */}
        <BookingForm showName={showDetails.name} />
      </div>
    </div>
  );
};

export default ShowDetails;
