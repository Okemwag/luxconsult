//import icon  from '../assets/icon.png'
//import { FaInstagram, FaDribbble, FaXTwitter, FaYoutube } from "react-icons/fa6";
import '../App.css';



const Footer = () => {
    
    return (
        <footer className="bg-primary">
  <div className="grid-container">
    <div className="intro flex-column">
      <h2 className="txt-white txt-light">LUX CONSULT</h2>
      <small className="txt-grey">ABC PLACE WAIYAKI WAY</small>
      <small className="txt-grey">P.O BOX 14090 - 00800</small>
      <small className="txt-grey">NAIROBI</small>
    </div>
    <div className="links">
      <h3 className="txt-white txt-light">COMPANY</h3>
      <ul>
        <li>
          <a href="/" className="txt-grey">
            Services
          </a>
        </li>
        <li>
          <a href="/" className="txt-grey">
            Careers
          </a>
        </li>
        <li>
          <a href="/" className="txt-grey">
            Latest News
          </a>
        </li>
        <li>
          <a href="/" className="txt-grey">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="/" className="txt-grey">
            Get In Touch
          </a>
        </li>
      </ul>
    </div>
    <div className="links">
      <h3 className="txt-white txt-light">USEFUL LINKS</h3>
      <ul>
        <li>
          <a href="/" className="txt-grey">
            Home
          </a>
        </li>
        <li>
          <a href="/sales" className="txt-grey">
            Sales
          </a>
        </li>
        <li>
          <a href="/rental" className="txt-grey">
            Rentals
          </a>
        </li>
        <li>
          <a href="/sales" className="txt-grey">
            About
          </a>
        </li>
        <li>
          <a href="/home" className="txt-grey">
            Invest
          </a>
        </li>
      </ul>
    </div>
    <div className="contacts">
      <h4 className="txt-white txt-light">SUBSCRIBE</h4>
      <form action="#">
        <input type="text" placeholder="Enter your email" />
        <button type="submit" className="btn-primary">
          subscribe
        </button>
      </form>
      <h4 className="txt-white txt-light">SOCIAL</h4>
      <div className="grid-3">
        <i className="icon">i</i>
        <i className="icon">f</i>
        <i className="icon">g</i>
      </div>
    </div>
  </div>
</footer>

        
                
            
    )
}

export default Footer









/*

import React from 'react';
//import { BiLogoFacebook, BsInstagram, RiTwitterXLine, BsLinkedin } from 'react-icons/fa';
import {Twitter, Facebook, Instagram,  } from '@icon-park/react';

import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section contact-info">
            <h3>LUXCONSULT REAL ESTATE</h3>
            <p>P.O BOX 6050-00590</p>
            <p>Phone:+254797306927</p>
            <p>Email: luxconsult@gmail.com</p>
            <p>Address: 123 kalimoni, Juja </p>
          </div>
          <div className="footer-section social-media">
            <h3>Follow Us</h3>
            <ul>
        <li>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <Facebook theme="outline" size="33" fill="#333"/>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <Instagram theme="outline" size="33" fill="#333"/>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <Twitter theme="outline" size="24" fill="#333"/>
          </a>
        </li>
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

*/