import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "../src/components/Footer";
import Invest from "../src/components/Invest";
import Navbar from "../src/components/Navbar";
import PropertyDetails from "../src/components/PropertyDetails";
import HomePage from "../src/pages/HomePage";
import RentalsPage from "../src/pages/RentalsPage";
import SalesPage from "../src/pages/SalesPage";
import Virtualtours from "../src/pages/Virtualtours";
import "./App.css";
import store from "./redux/store";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/rental" element={<RentalsPage />} />
          <Route path="/tours" element={<Virtualtours />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
