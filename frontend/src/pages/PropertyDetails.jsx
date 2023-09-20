import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/propertydetails.css';
//import Navbar from '../components/Navbar';
//import Footer from '../components/Footer';
import './PropertyDetails.css'; // Create a CSS file for styling

function PropertyDetails() {
  const { propertyId } = useParams();
  const [propertyData, setPropertyData] = useState(null);

  useEffect(() => {
    // Fetch property details for the given propertyId using Axios
    axios.get(`YOUR_API_URL_HERE/${propertyId}`)
      .then((response) => {
        setPropertyData(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching property details:', error);
      });
  }, [propertyId]);

  if (!propertyData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="property-details-container">
      <h2>{propertyData.title}</h2>
      <img src={propertyData.main_photo} alt={propertyData.title} className="main-photo" />
      <div className="additional-photos">
        {propertyData.photo1 && <img src={propertyData.photo1} alt="Additional 1" className="additional-photo" />}
        {propertyData.photo2 && <img src={propertyData.photo2} alt="Additional 2" className="additional-photo" />}
        {propertyData.photo3 && <img src={propertyData.photo3} alt="Additional 3" className="additional-photo" />}
        {propertyData.photo4 && <img src={propertyData.photo4} alt="Additional 4" className="additional-photo" />}
      </div>
      <p>{propertyData.description}</p>
      <p>{propertyData.bedrooms} Bedrooms | ${propertyData.price}</p>
    </div>
  );
}

export default PropertyDetails;
