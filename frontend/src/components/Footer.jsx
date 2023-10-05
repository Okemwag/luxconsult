import icon  from '../assets/icon.png'
import { FaInstagram, FaDribbble, FaXTwitter, FaYoutube } from "react-icons/fa6";
import '../styles/footer.css';



const Footer = () => {
    const links = [
        [
            {label : 'Company' , key: 'header-1'},
            {label : 'About us' , key: 'item-1-1'},
            {label : 'blog' , key: 'item-1-2'},
            {label : 'Contact us' , key: 'item-1-3'},
            {label : 'Pricing' , key: 'item-1-4'},
            {label : 'Testimonials' , key: 'item-1-5'},
        ],
        [
            {label : 'Support' , key: 'header-2'},
            {label : 'Help center' , key: 'item-2-1'},
            {label : 'Terms of service' , key: 'item-2-2'},
            {label : 'Legal' , key: 'item-2-3'},
            {label : 'Privacy policy' , key: 'item-2-4'},
            {label : 'Status' , key: 'item-2-5'},
        ]
    ]
    return (
        <div className='footer'>
            <div className="footer-company-info">
                <div className="footer-img">
                    <img src={icon} alt="" />
                    <span>
                        LuxConsult
                    </span>
                </div>
                
                <div className='infos'>             
                    <span>
                        Copyright © 2023 ltd.
                    </span>
                    <span>
                        All rights reserved
                    </span>
                </div>
                <div className="footer-icons">
                    <FaInstagram/>
                    <FaDribbble/>
                    <FaXTwitter/>
                    <FaYoutube/>
                </div>
            </div>
            <div className="footer-links">
                    {links.map((col,index) => (
                        <ul className={`col col-${index+1}`} key={`col-${index}`}>
                            {col.map((link,index) => (
                                <li key={`link-${col}-${index}`}>
                                    {link.label}
                                </li>
                            ))}
                        </ul>
                    ))}
            </div>
            <div className="footer-form">
                <label htmlFor="">
                    Stay up to date
                </label>
                <input type="email" name="" id="" />
            </div>
        </div>
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