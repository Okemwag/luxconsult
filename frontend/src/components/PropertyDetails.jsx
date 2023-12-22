// PropertiesDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetDetailsQuery } from '../redux/services/properties';

const PropertiesDetails = () => {
  const { id } = useParams();
  const { data: property, isLoading, isError } = useGetDetailsQuery(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching property details</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">{property.title}</h2>
      <p className="text-gray-600 mb-2">{property.address}</p>
      <p className="text-gray-700 mb-4">{property.description}</p>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div>
          <img src={property.main_photo} alt={property.title} className="w-full h-auto" />
        </div>
        <div>
          <p className="text-xl font-semibold mb-2">Property Details</p>
          <p>Price: {property.price}</p>
          <p>Bedrooms: {property.bedrooms}</p>
          <p>Status: {property.property_status}</p>
          {/* Add more details as needed */}
        </div>
      </div>

      {/* Display additional photos */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <img src={property.photo1} alt={`Photo 1`} className="w-full h-auto" />
        <img src={property.photo2} alt={`Photo 2`} className="w-full h-auto" />
        <img src={property.photo3} alt={`Photo 3`} className="w-full h-auto" />
        {/* Add more photos as needed */}
      </div>

      {/* Display house plan and video if available */}
      {property.house_plan && (
        <img src={property.house_plan} alt={`House Plan`} className="w-full h-auto mb-4" />
      )}
      {property.video && (
        <video controls className="w-full">
          <source src={property.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default PropertiesDetails;
