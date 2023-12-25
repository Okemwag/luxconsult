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
    <section className="container mx-auto grid xs:grid-cols-1 sm:grid-cols-2 gap-5">
      <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
        {propertyData.map((property, index) => (
          <div
            key={property.id}
            className={`img-container rounded-md shadow-sm overflow-hidden hover:shadow-lg ${
              index === 0 ? "row-span-2" : ""
            }}`}
          >
            <Link to={`property/${property.id}`}>
              <img
                src={property.main_photo}
                alt={property.title}
                className="property-image w-full h-64 object-cover mb-2"
              />
              <h2 className="property-title text-sm font-semibold ml-1 mb-2">
                {property.title}
              </h2>
            </Link>
          </div>
        ))}
      </div>
      <div>
        <h1 className="headerWrapper mb-4">LATEST RENTAL PROPERTIES</h1>
        <Link to="/rental" className="btn btn-primary">
          View All
        </Link>
      </div>
    </section>
  );
}

export default Rentals;
