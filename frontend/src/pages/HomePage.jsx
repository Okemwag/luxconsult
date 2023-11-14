import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Sales from '../components/Sales';
import Rentals from '../components/Rentals';
import Invest from '../components/Invest';
import Landing from '../components/Landing';
import LoadingScreen from '../components/LoadingScreen';


function Home() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
    }, [])
    
    
  return (
    <div>
        {loading && <LoadingScreen />}
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
