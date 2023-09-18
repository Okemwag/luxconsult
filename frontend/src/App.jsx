import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sales from './components/Sales';
//import Rental from './components/Rentals';
import Invest from './components/Invest';
import './App.css';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Sales/>
            <Invest />
            <Footer />
            
            
        </div>
      
  );
}

export default App;

/*

<Router>
      <Routes>
              
        <Route path="/" element={<Home />} />
        
      </Routes>
    </Router>
*/