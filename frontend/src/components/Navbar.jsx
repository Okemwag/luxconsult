import React, { useState } from 'react';
import '../styles/navbar.css'; // Import your CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/logo.png';

function Navbar() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* Logo */}
        <div className="logo">
          <img src={Logo} alt="Logo" />
          
        </div>
      </div>
      <div className={`navbar-right ${isDropdownVisible ? 'show-menu' : ''}`}>
        {/* Navigation Links */}
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/sales">Sales</a></li>
          <li><a href="/rental">Rental</a></li>
          <li><a href="/invest">Invest</a></li>
          <li><a href="/consult">Consult</a></li>
          {/* Rounded Button */}
          <li><a href="/contact">Contact</a></li>
          <li><button className="rounded-button">Button</button></li>
        </ul>
      </div>
      {/* Dropdown Toggle */}
      <div className="dropdown-toggle" onClick={toggleDropdown}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  );
}

export default Navbar;
