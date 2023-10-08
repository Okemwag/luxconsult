import React from 'react';
import House2 from '../assets/bay.jpg';
import LivingRoom from '../assets/livingroom.jpg';
import Couch from '../assets/couch.jpg';
import '../App.css';

const ImageGallery = () => {
  return (
    <section>
        <div class="container grid-3">

                <div class="img-container">
                        <img src={House2} alt=""/>

                        <p>DISCOVER OUR VIRTUAL TOURS</p>
                        <button class="btn btn-primary">START HERE</button>
                </div>

                <div class="img-container">
                        <img src={LivingRoom} alt=""/>
                        <p>BREATHTAKING DEVELOPMENTS</p>
                        <button class="btn btn-primary">Learn More</button>
                </div>

                <div class="img-container">
                        <img src={Couch} alt=""/>
                        <p>EXPERIENCE OUR INSIGHTS</p>
                        <button class="btn btn-primary">INQUIRE NOW</button>
                </div>

        </div>
      </section>
  );
};

export default ImageGallery;
