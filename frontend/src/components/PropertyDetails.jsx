import React from "react";
import { useParams } from "react-router-dom";
import { useGetDetailsQuery } from "../redux/services/properties";

const PropertiesDetails = () => {
  const { id } = useParams();
  const { data: property, isLoading, isError } = useGetDetailsQuery(id);

  const handleDownloadHousePlan = () => {
    const link = document.createElement("a");

    link.href = property.house_plan;

    link.download = "house_plan.jpg";
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

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
          <img
            src={property.main_photo}
            alt={property.title}
            className="w-full h-80"
          />
        </div>
        <div>
          <p className="text-xl font-semibold mb-2">Property Details</p>
          <p>
            Price: {property.price_currency}, {property.price}
          </p>
          <p>Bedrooms: {property.bedrooms}</p>
          <p>Status: {property.property_status}</p>
          {/* Add more details as needed */}
        </div>
      </div>

      {/* Display additional Propertys */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        
        <img
          src={property.photo1}
          alt="Property by John Doe"
          className="w-full h-60"
        />
        <img
          src={property.photo2}
          alt="Property by John Doe"
          className="w-full h-60"
        />
        <img
          src={property.photo3}
          alt="Property by John Doe"
          className="w-full h-60"
        />
        <img
          src={property.photo4}
          alt="Property by John Doe"
          className="w-full h-60"
        />
        <img
          src={property.photo5}
          alt="Property by John Doe"
          className="w-full h-60"
        />
        {/* Add more Propertys as needed */}
      </div>

      {property.house_plan && (
        <div className="mb-4">
          <img
            src={property.house_plan}
            alt="House Plan"
            className="w-full h-auto"
          />
          <button
            className="mt-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg"
            onClick={handleDownloadHousePlan}
          >
            Download House Plan
          </button>
        </div>
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
