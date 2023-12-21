import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetDetailsQuery } from "../redux/services/properties";

function PropertyDetails() {
  const { id } = useParams();

  // Use the getDetails query from the Redux API
  const { data: propertyData, isLoading, isError } = useGetDetailsQuery(id);

  if (isLoading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  if (isError) {
    return <div className="text-center mt-8 text-red-500">Error loading property details</div>;
  }

  return (
    <div className="property-details-container flex justify-center items-center">
      <div className="property-details-left mr-8">
        <img src={propertyData.main_photo} alt={propertyData.title} className="main-photo" />
      </div>
      <div className="sales-container">
        <h2 className="text-3xl font-semibold mb-4">{propertyData.title}</h2>
        <p className="text-gray-600 mb-4">{propertyData.description}</p>
        <p className="text-blue-700 font-bold mb-2">Price: {propertyData.price.amount} {propertyData.price.currency}</p>
        <p className="text-blue-700 font-bold mb-2">Bedrooms: {propertyData.bedrooms}</p>
        <div className="additional-photos">
          {propertyData.photo1 && <img src={propertyData.photo1} alt="Additional 1" className="additional-photo" />}
          {propertyData.photo2 && <img src={propertyData.photo2} alt="Additional 2" className="additional-photo" />}
          {propertyData.photo3 && <img src={propertyData.photo3} alt="Additional 3" className="additional-photo" />}
          {propertyData.photo4 && <img src={propertyData.photo4} alt="Additional 4" className="additional-photo" />}
          {propertyData.photo5 && <img src={propertyData.photo5} alt="Additional 5" className="additional-photo" />}
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;
