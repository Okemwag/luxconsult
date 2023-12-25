import { Bed } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const PropertyCard = ({
  id,
  main_photo,
  title,
  description,
  bedrooms,
  price,
}) => {
  return (
    <Link
      to={`/property/${id}`}
      key={id}
      className="rounded-md shadow-lg overflow-hidden h-full w-1/5"
    >
      <img
        src={main_photo}
        alt={title}
        className="w-full h-60 hover:scale-105 hover:transition-all"
      />
      <div className="my-4 px-3">
        <h2 className="font-bold italic">{title}</h2>
        <div className="text-slate-500 text-sm mt-1">
          <p>{description}</p>
          <div className="flex flex-row items-center justify-between mt-1">
            <p className="flex flex-row items-center justify-center">
              <Bed size={22} className="mr-2" />
              {bedrooms} Bedrooms
            </p>
            <p className="">
              <b className="text-black">Ksh </b>
              {price}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
