import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useGetForRentQuery } from "../redux/services/properties";

function Rentals() {
  const { data } = useGetForRentQuery();
  const [propertyData, setPropertyData] = useState([]);

  useEffect(() => {
    if (data) {
      // Limit the photos to a maximum of four
      const limitedData = data.results.slice(0, 4);
      setPropertyData(limitedData);
    }
  }, [data]);

  return (
    <div>
      <h1 className="headerWrapper">LATEST RENTAL PROPERTIES</h1>
      <div className="container grid-3">
        {propertyData.map((property) => (
          <div key={property.id} className="property-card">
            <Link to={`property/${property.id}`}>
              <img
                src={property.main_photo}
                alt={property.title}
                className="img-container"
              />
              <h2 className="property-title">{property.title}</h2>
            </Link>
          </div>
        ))}
      </div>
      <Link to="/rental" className="btn btn-primary">
        View All
      </Link>
    </div>
  );
}

export default Rentals;
