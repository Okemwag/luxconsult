import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sales from './components/Sales';
import Rentals from './components/Rentals';
import Invest from './components/Invest';
import './App.css';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Sales/>
            <Rentals/>
            <Invest />
            <Footer />
            
        </div>
      
  );
}

export default App;

