import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section contact-info">
            <h3>Contact Information</h3>
            <p>Phone:+254797306927</p>
            <p>Email: luxconsult@gmail.com</p>
            <p>Address: 123 kalimoni, Juja </p>
          </div>
          <div className="footer-section social-media">
            <h3>Follow Us</h3>
            <ul>
              <li><a href="#/">Facebook</a></li>
              <li><a href="#/">Instagram</a></li>
              <li><a href="#/">Twitter</a></li>
              <li><a href="#/">LinkedIn</a></li>
            </ul>
          </div>
          <div className="footer-section quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#/">Home</a></li>
              <li><a href="#/">Property Search</a></li>
              <li><a href="#/">Services</a></li>
              <li><a href="#/">Blog</a></li>
              <li><a href="#/">About Us</a></li>
              <li><a href="#/">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Luxconsult Agency</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
