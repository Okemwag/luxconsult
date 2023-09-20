// SalesPage.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get the property ID
import axios from 'axios';

function SalesPage() {
  const [property, setProperty] = useState(null);
  const { id } = useParams(); // Get the property ID from the URL parameter

  useEffect(() => {
    if (id) {
      // Make an API request to fetch data for a specific property by ID
      axios.get(`http://127.0.0.1:8000/api/v1/core/for-sale/${id}/`)
        .then((response) => {
          setProperty(response.data);
        })
        .catch((error) => {
          console.error('Error fetching property data:', error);
        });
    }
  }, [id]);

  return (
    <div>
      {property ? (
        <div className="property-details">
          <img src={property.main_photo} alt={property.title} />
          <h2>{property.title}</h2>
          <p>{property.address}</p>
          <p>Bedrooms: {property.bedrooms}</p>
          <p>Price: ${property.price}</p>
            <p>{property.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SalesPage;
