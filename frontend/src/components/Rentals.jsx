import React from 'react';

function PropertyDetail({ property }) {
  return (
    <div className="property-detail">
      <h3>{property.title}</h3>
      <p>{property.description}</p>
      {/* Display other property details */}
    </div>
  );
}

export default PropertyDetail;
