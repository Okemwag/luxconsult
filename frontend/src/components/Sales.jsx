import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios';

function ProductList() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/v1/core/details/<int:pk>/')
      .then((response) => setProperties(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Slice the properties array to show a maximum of four properties
  const displayedProperties = properties.slice(0, 4);

  return (
    <div className="property-list">
      <h1 className="property-header">Latest Properties</h1>
      <ul>
        {displayedProperties.map((property) => (
          <li className="property" key={property.id}>
            <h2>{property.title}</h2>
            <p>{property.description}</p>
            <p>Price: ${property.price}</p>
            <p>Unique ID: {property.unique_id}</p>
            <img src={property.main_photo} alt={property.title} />
          </li>
        ))}
      </ul>
      <Link to="/sales">View All Properties</Link>
    </div>
  );
}

export default ProductList;
