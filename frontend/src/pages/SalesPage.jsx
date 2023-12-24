import React, { useEffect, useState } from "react";
import PropertyCard from "../components/PropertyCard";
import { useGetForSaleQuery } from "../redux/services/properties";

function Sales() {
  const { data } = useGetForSaleQuery();
  const [propertyData, setPropertyData] = useState([]);

  useEffect(() => {
    if (data) {
      setPropertyData(data.results);
    }
  }, [data]);

  return (
    <>
      <h1 className="text-center italic font-bold text-xl mt-3">
        PROPERTIES FOR SALE
      </h1>
      <div className="rentals-container flex xs:flex-col sm:flex-row flex-wrap gap-5 my-4 justify-center">
        {propertyData.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </>
  );
}

export default Sales;
