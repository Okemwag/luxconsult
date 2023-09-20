import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Sales from '../components/Sales';
import Rental from '../components/Rentals';
import Invest from '../components/Invest';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Navbar />
          <Hero />
          <Sales />
          <Rental />
          <Invest />
            <Footer />
    </div>
  );
}

export default Home;
