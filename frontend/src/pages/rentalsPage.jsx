import React, { useEffect, useState } from "react";
import PropertyCard from "../components/PropertyCard";
import { useGetForRentQuery } from "../redux/services/properties";

function RentalsPage() {
  const { data } = useGetForRentQuery();
  const [rentalsData, setRentalsData] = useState([]);

  useEffect(() => {
    if (data) {
      setRentalsData(data.results);
    }
  }, [data]);

  return (
    <>
      <h1 className="text-center italic font-bold text-xl mt-3">
        LATEST RENTAL PROPERTIES
      </h1>
      <div className="flex xs:flex-col sm:flex-row flex-wrap gap-5 my-4 justify-center">
        {rentalsData.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </>
  );
}

export default RentalsPage;
