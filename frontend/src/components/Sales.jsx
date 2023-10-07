import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/sales.css'; 
import Couch from '../assets/couch.jpg';

function Sales() {
  const [propertyData, setPropertyData] = useState([]);

  useEffect(() => {
    // Fetch data from your Django API using Axios
    axios.get('http://127.0.0.1:8000/api/v1/core/for-sale/')
      .then((response) => {
        // Limit the photos to a maximum of four
        const limitedData = response.data.results.slice(0, 4);
        setPropertyData(limitedData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

    
    return (
        <div className="container flex-column">
            <div className=" sales-container x-start">
                <h1>LATEST LAUNCHES</h1>
                     <p>HassConsult offers investment-grade developments all over the City. The developments we offer have been conceptualized by our development team to be high quality assets using a data-driven approach in planning and design, that gears property for high rental returns and an escalated rate of capital growth.
                      </p>
                <Link to="/sales" className="view-all-button">
                     View All
                    </Link>
            </div>
     
            <div className="properties">
                
                {propertyData.map((property) => (
                
            <div key={property.id} className="property-card">
             <Link to={`property/${property.id}`}>
              <div className="image-wrapper">
                <img src={Couch} alt={property.title} className="property-image" />
                
              </div>
              <h2 className="property-title">{property.title}</h2>
            </Link>
                <p className="property-details">
                {property.bedrooms} Bedrooms | Ksh{property.price}
                </p>
            </div>
          )
          )}
    </div>
    </div>
    );
}

    
export default Sales;

/*
return (
        <div>
      <h1 className="headerWrapper">PROPERTIES FOR SALE</h1>
    <div className="sales-container">
        {propertyData.map((property) => (
        <div key={property.id} className="property-card">
          <Link to={`property/${property.id}`}>
            <img src={property.main_photo} alt={property.title} className="property-image" />
            <h2 className="property-title">{property.title}</h2>
          </Link>
          <p className="property-description">{property.description}</p>
          <p className="property-details">
            {property.bedrooms} Bedrooms | Ksh{property.price}
          </p>
        </div>
        ))}
            </div>
            <Link to="/sales" className="view-all-button">View All</Link>            
    </div>
  );
}
*/