// SalesPage.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import axios from 'axios';

// Navbar component
function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sales">Sales</Link></li>
        <li><Link to="/rental">Rental</Link></li>
        <li><Link to="/invest">Invest</Link></li>
        <li><Link to="/consult">Consult</Link></li>
      </ul>
    </nav>
  );
}

// Footer component
function Footer() {
  return (
    <footer>
      <p>&copy; Your Company {new Date().getFullYear()}</p>
    </footer>
  );
}

// SalesPage component
function SalesPage() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch data from the API to get properties for sale
    axios.get('http://127.0.0.1:8000/api/v1/core/sales/') // Adjust the API endpoint accordingly
      .then((response) => setProperties(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Sales Page</h1>
      <div className="property-list">
        {properties.map((property) => (
          <div className="property" key={property.id}>
            <img src={property.photo} alt={property.title} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default SalesPage;
