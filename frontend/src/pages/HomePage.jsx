import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Sales from '../components/Sales';
import Rentals from '../components/Rentals';
import Invest from '../components/Invest';
import Landing from '../components/Landing';


function Home() {
  return (
    <div>
        
        <Hero />
        <Landing />
        <Sales />
        <Rentals />
        <Invest />
        <About />
        
    </div>
  );
}

export default Home;
