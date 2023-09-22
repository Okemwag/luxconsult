import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/propertydetails.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function PropertyDetails() {
  const { id } = useParams();
  const [propertyData, setPropertyData] = useState(null);

  useEffect(() => {
    // Fetch property details for the given propertyId using Axios
    axios.get(`http://127.0.0.1:8000/api/v1/core/detail/${id}/`)
      .then((response) => {
        setPropertyData(response.data); 
      })
      .catch((error) => {
        console.error('Error fetching property details:', error);
      });
  }, [id]);

  if (!propertyData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar /> 
      <div className="property-details-container">
        <div className="property-details-left">
          <img src={propertyData.main_photo} alt={propertyData.title} className="main-photo" />
        </div>
        <div className="property-details-right">
          <h2>{propertyData.title}</h2>
          <p>{propertyData.description}</p>
          <p>Price: Ksh:{propertyData.price}</p>
          <div className="additional-photos">
            {propertyData.photo1 && <img src={propertyData.photo1} alt="Additional 1" className="additional-photo" />}
            {propertyData.photo2 && <img src={propertyData.photo2} alt="Additional 2" className="additional-photo" />}
            {propertyData.photo3 && <img src={propertyData.photo3} alt="Additional 3" className="additional-photo" />}
            {propertyData.photo4 && <img src={propertyData.photo4} alt="Additional 4" className="additional-photo" />}
            {propertyData.photo5 && <img src={propertyData.photo5} alt="Additional 5" className="additional-photo" />}
          </div>
        </div>
      </div>
      <Footer /> 
    </div>
  );
}

export default PropertyDetails;









/*
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/propertydetails.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function PropertyDetails() {
  const { id } = useParams();
  const [propertyData, setPropertyData] = useState(null);

  useEffect(() => {
    // Fetch property details for the given propertyId using Axios
    axios.get(`http://127.0.0.1:8000/api/v1/core/detail/${id}/`)
      .then((response) => {
        setPropertyData(response.data); 
      })
      .catch((error) => {
        console.error('Error fetching property details:', error);
      });
  }, [id]);

  if (!propertyData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar /> 
      <div className="property-details-container">
        <img src={propertyData.main_photo} alt={propertyData.title} className="main-photo" />
        <h2>{propertyData.title}</h2>
        <p>{propertyData.description}</p>
        <p>Price: Ksh:{propertyData.price}</p>
        <p>Bedrooms: {propertyData.bedrooms}</p>
        <div className="additional-photos">
          {propertyData.photo1 && <img src={propertyData.photo1} alt="Additional 1" className="additional-photo" />}
          {propertyData.photo2 && <img src={propertyData.photo2} alt="Additional 2" className="additional-photo" />}
          {propertyData.photo3 && <img src={propertyData.photo3} alt="Additional 3" className="additional-photo" />}
          {propertyData.photo4 && <img src={propertyData.photo4} alt="Additional 4" className="additional-photo" />}
          {propertyData.photo5 && <img src={propertyData.photo5} alt="Additional 5" className="additional-photo" />}
        </div>
      </div>
      <Footer /> 
    </div>
  );
}

export default PropertyDetails;
*/