import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const handleNavLinkClick = (title) => {
    setActive(title);
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <FaBars className="w-[28px] h-[28px] sm:hidden cursor-pointer" onClick={() => setToggle(!toggle)} />

      <h1>LUXCONSULT</h1>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] ${
            active === "Home" ? "text-white" : "text-dimWhite"
          } mr-10`}
          onClick={() => handleNavLinkClick("Home")}
        >
          <a href="#home">Home</a>
        </li>
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] ${
            active === "Features" ? "text-white" : "text-dimWhite"
          } mr-10`}
          onClick={() => handleNavLinkClick("Features")}
        >
          <a href="#features">Features</a>
        </li>
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] ${
            active === "Product" ? "text-white" : "text-dimWhite"
          } mr-10`}
          onClick={() => handleNavLinkClick("Product")}
        >
          <a href="#product">Product</a>
        </li>
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] ${
            active === "Clients" ? "text-white" : "text-dimWhite"
          }`}
          onClick={() => handleNavLinkClick("Clients")}
        >
          <a href="#clients">Clients</a>
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <FaTimes className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={() => setToggle(false)} />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] ${
                active === "Home" ? "text-white" : "text-dimWhite"
              } mb-4`}
              onClick={() => handleNavLinkClick("Home")}
            >
              <a href="#home">Home</a>
            </li>
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] ${
                active === "Features" ? "text-white" : "text-dimWhite"
              } mb-4`}
              onClick={() => handleNavLinkClick("Features")}
            >
              <a href="#features">Features</a>
            </li>
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] ${
                active === "Product" ? "text-white" : "text-dimWhite"
              } mb-4`}
              onClick={() => handleNavLinkClick("Product")}
            >
              <a href="#product">Product</a>
            </li>
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] ${
                active === "Clients" ? "text-white" : "text-dimWhite"
              }`}
              onClick={() => handleNavLinkClick("Clients")}
            >
              <a href="#clients">Clients</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
