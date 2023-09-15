// src/components/PropertyList.jsx
import React, { useEffect, useState } from 'react';
import { fetchProperties } from '../services/apiService';

function PropertyList() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    async function fetchPropertiesData() {
      try {
        const data = await fetchProperties();
        setProperties(data);
      } catch (error) {
        // Handle error, e.g., show an error message to the user
      }
    }

    fetchPropertiesData();
  }, []);

  return (
    <div>
      <h2>Property List</h2>
      <ul>
        {properties.map((property) => (
          <li key={property.id}>{property.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PropertyList;
