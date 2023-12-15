import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
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
    <div className="container grid-3">
      <div className=" sales-container x-start">
        <h1>LATEST LAUNCHES</h1>
        <p>
          Luxconsult offers investment-grade developments all over the City. The
          developments we offer have been conceptualized by our development team
          to be high quality assets using a data-driven approach in planning and
          design, that gears property for high rental returns and an escalated
          rate of capital growth.
        </p>
        <Link to="/sales" className="btn btn-primary">
          View All
        </Link>
      </div>
      <div className="container grid-3">
        {propertyData.map((property) => (
          <div key={property.id} className="img-container">
            <Link to={`property/${property.id}`}>
              <img
                src={property.main_photo}
                alt={property.title}
                className="property-image"
              />
              <h2 className="property-title">{property.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sales;
