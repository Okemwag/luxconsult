import React from 'react';
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









