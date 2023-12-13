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

  /*
  useEffect(() => {
    // Fetch all data from your Django API using Axios
    axios.get('http://127.0.0.1:8000/api/v1/core/for-sale/')
      .then((response) => {
        setPropertyData(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  */

  return (
    <div>
      <h1 className="headerWrapper">PROPERTIES FOR SALE</h1>
      <div className="container x-start">
        {propertyData.map((property) => (
          <Link
            to={`/property/${property.id}`}
            key={property.id}
            className="img-container"
          >
            <img
              src={property.main_photo}
              alt={property.title}
              className="property-image"
            />
            <div className="property-info">
              <h2 className="property-title">{property.title}</h2>
              <p className="property-description">{property.description}</p>
              <p className="property-details">
                {property.bedrooms} Bedrooms | Ksh:{property.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sales;
