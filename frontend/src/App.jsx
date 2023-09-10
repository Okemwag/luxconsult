import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Property from './pages/Property';

function App() {
  return (
    <Router>
      <Routes>
              
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" component={Property} />
        {/* <Route path="/properties" exact component={PropertyList} /> */}
        {/* Add more routes for property details, search, etc. */}
      </Routes>
    </Router>
  );
}

export default App;
