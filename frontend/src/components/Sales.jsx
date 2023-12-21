import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import "../App.css";
import { useGetForSaleQuery } from "../redux/services/properties";

function Sales() {
  const { data } = useGetForSaleQuery();
  const [propertyData, setPropertyData] = useState([]);

  useEffect(() => {
    if (data) {
      // Limit the photos to a maximum of four
      const limitedData = data.results.slice(0, 4);
      setPropertyData(limitedData);
    }
  }, [data]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <div className="sales-container text-left p-4">
        <h1 className="text-3xl font-bold mb-4">LATEST LAUNCHES</h1>
        <p className="text-gray-600 mb-4">
          Luxconsult offers investment-grade developments all over the City. The
          developments we offer have been conceptualized by our development team
          to be high-quality assets using a data-driven approach in planning and
          design, that gears property for high rental returns and an escalated
          rate of capital growth.
        </p>
        <Link to="/sales" className="btn btn-primary">
          View All
        </Link>
      </div>
      <div className="container grid grid-cols-1 sm:grid-cols-3 gap-4">
        {propertyData.map((property) => (
          <div key={property.id} className="img-container">
            <Link to={`property/${property.id}`}>
              <img
                src={property.main_photo}
                alt={property.title}
                className="property-image w-full h-64 object-cover mb-2"
              />
              <h2 className="property-title text-sm font-semibold">
                {property.title}
              </h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sales;
