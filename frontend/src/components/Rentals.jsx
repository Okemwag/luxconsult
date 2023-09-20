import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import axios from 'axios';
import '../styles/rental.css'; // Import the CSS file

function Rental() {
  const [rentalData, setRentalData] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    // Make an API request to fetch data from the backend
    axios.get('http://127.0.0.1:8000/api/v1/core/for-rent/')
      .then((response) => {
        setRentalData(response.data.results);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error('Error fetching rental data:', error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);
  
  // Check if rentalData is an array or empty before using slice
  const displayedProperties = Array.isArray(rentalData) ? rentalData.slice(0, 4) : [];

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2 className="Header">Rental Properties</h2>
      <div className="property-list">
        {displayedProperties.map((property) => (
          <div className="property-item" key={property.id}>
            <img src={property.main_photo} alt={property.title} />
            <h3>{property.title}</h3>
            <p>{property.address}</p>
            <p>Bedrooms: {property.bedrooms}</p>
            <p>Price: ${property.price}</p>
          </div>
        ))}
      </div>
      <Link to="/rental-page">
        <button className="view-all-button">View All</button>
      </Link>
    </div>
  );
}

export default Rental;
