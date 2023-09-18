import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Rental() {
  const [RentalProperties, setRentalProperties] = useState([]);

  useEffect(() => {
    // Make an API request to fetch properties for renting
    axios.get('http://127.0.0.1:8000/api/v1/core/all/')
      .then((response) => {
        setRentalProperties(response.data);
      })
      .catch((error) => {
        console.error('Error fetching rental properties:', error);
      });
  }, []);

  return (
  <div>
    <h2>Properties for Sale</h2>
    <ul>
      {RentalProperties.map((property) => (
        <li key={property.id}>
          <h3>{property.title}</h3>
          <p>Price: ${property.description}</p>
            <p>{property.price}</p>
        </li>
      ))}
    </ul>
  </div>
);

}

export default Rental;
