import React, { useEffect, useState } from 'react';
import '../App.css';
import House1 from '../assets/House1.jpg';
import House2 from '../assets/House2.jpg';
import LivingRoom from '../assets/bay.jpg';
import Couch from '../assets/couch.jpg';
import Interior from '../assets/interior.jpg';

function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [House1, House2, LivingRoom, Couch, Interior];

  useEffect(() => {
    // Automatically change the image every 8 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, 8000);

    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="sm:flex grid-flow-col">
      <img
        src={images[currentImageIndex]}
        alt="Property"
        className="hero-image"
      />
    </div>
  );
}

export default HeroSection;
