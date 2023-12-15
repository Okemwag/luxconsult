// Navbar.js

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          LUXCONSULT
        </a>

        <div className="menu-icon" onClick={toggleNavbar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Sales
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Rentals
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Invest
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              About us
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
