import React, { useState } from "react";
import { FiAlignRight, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="flex justify-between items-center h-20 max-w-[1440px] mx-auto px-4 text-white bg-black">
      <h1 className="w-full text-3xl font-bold text-white hover:cursor-pointer">
        <Link to="/">LUXCONSULT.</Link>
      </h1>
      <ul className="hidden md:flex hover:cursor-pointer">
        <li className="p-4">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4">
          <Link to="/sales">Sales</Link>
        </li>
        <li className="p-4">
          <Link to="/rental">Rentals</Link>
        </li>
        <li className="p-4">
          <Link to="/tours">Virtual Tour</Link>
        </li>
        <li className="p-4">
          <Link to="/invest">Invest</Link>
        </li>
      </ul>
      <div onClick={handleShow} className="block md:hidden">
        {!show ? <FiAlignRight size={20} /> : <FiX size={20} />}
      </div>
      <div
        className={`md:hidden ${
          show
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-50"
            : "fixed left-[-100%]"
        }`}
      >
        <h1 className="w-full text-3xl font-bold text-[#0a0a0a] m-4 hover:cursor-pointer">
          <Link to="/">LUXCONSULT.</Link>
        </h1>
        <ul className="uppercase p-4 hover:cursor-pointer">
          <li className="p-4 border-b border-gray-600">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/sales">Sales</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/rental">Rentals</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/tours">Virtual Tour</Link>
          </li>
          <li className="p-4">
            <Link to="/invest">Invest</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
