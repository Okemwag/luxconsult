// ImageGallery.js

import React from 'react';
import House2 from '../assets/House2.jpg';
import LivingRoom from '../assets/livingroom.jpg';
import Couch from '../assets/couch.jpg';
import '../styles/landing.css';

const ImageGallery = () => {
  return (
    <div className="image-gallery-container">
      <div className="image-item">
        <img src={Couch} alt="Virtual Tour" />
              <p>DISCOVER OUR VIRTUAL TOURS</p>
              <p>Tour our developments with 3D interactive walkthroughs</p>
              <button className="button">TAKE THE TOUR</button>
      </div>

      <div className="image-item">
        <img src={House2} alt="Breathtaking Developments" />
              <p>BREATHTAKING DEVELOPMENTS</p>
              <button className="button">TAKE THE TOUR</button>
      </div>

      <div className="image-item">
        <img src={LivingRoom} alt="Experience Our Insights" />
              <p>EXPERIENCE OUR INSIGHTS</p>
              <button className="button">TAKE THE TOUR</button>
      </div>
    </div>
  );
};

export default ImageGallery;
