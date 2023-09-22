import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Sales from '../components/Sales';
import Rentals from '../components/Rentals';
import Invest from '../components/Invest';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Navbar />
        <Hero />
        <About />
        <Sales />
        <Rentals />
        <Invest />
        <Footer />
    </div>
  );
}

export default Home;
