import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'; 
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
        
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
      </div>
      <div className={`navbar-right ${isDropdownVisible ? 'show-menu' : ''}`}>
        
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/sales">Sales</Link></li>
          <li><Link to="/rental">Rental</Link></li>
          <li><Link to="/invest">Invest</Link></li>
          <li><Link to="/footer">Consult</Link></li>
          <li><Link to="/footer">Contact</Link></li>
          
        </ul>
      </div>
      
      <div className="hamburger-icon" onClick={toggleDropdown}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  );
}

export default Navbar;
