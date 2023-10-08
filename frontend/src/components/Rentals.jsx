import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css'; 

function Rentals() {
  const [propertyData, setPropertyData] = useState([]);

  useEffect(() => {
    // Fetch data from your Django API using Axios
    axios.get('http://127.0.0.1:8000/api/v1/core/for-rent/')
      .then((response) => {
        // Limit the photos to a maximum of four
        const limitedData = response.data.results.slice(0,4);
        setPropertyData(limitedData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

    return (
        <div>
      <h1 className="headerWrapper">LATEST RENTAL PROPERTIES</h1>
    <div className="container grid-3">
        {propertyData.map((property) => (
        <div key={property.id} className="property-card">
          <Link to={`property/${property.id}`}>
            <img src={property.main_photo} alt={property.title} className="img-container" />
            <h2 className="property-title">{property.title}</h2>
          </Link>
          <p className="property-description">{property.description}</p>
          <p className="property-details">
            {property.bedrooms} Bedrooms | Ksh:{property.price}
          </p>
        </div>
        ))}
            </div> 
            <Link to="/rental" className="btn btn-primary">View All</Link>            
    </div>
  );
}

export default Rentals;