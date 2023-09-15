import React from 'react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import SwiperCore from 'swiper'; // Import Swiper core and modules
import { Swiper, SwiperSlide } from 'swiper/react';// Import Swiper React components

import '../styles/main.css'; // Import your component-specific styles
import House from '../assets/House.jpg'
import LivingRoom from '../assets/livingroom.jpg'

// Install Swiper modules
//SwiperCore.use([Autoplay]);

function Main() {
  return (
    <div className="main">
      <h1>Welcome to Real Estate</h1>
      <div className="swiper-container">
        <Swiper
          loop={true}
          
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <img src={House} alt="House 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={LivingRoom} alt="House 2" />
          </SwiperSlide>
         
        </Swiper>
      </div>
    </div>
  );
}

export default Main;

