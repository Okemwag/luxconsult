import React, { useEffect, useState } from "react";
import About from "../components/About";
import Contact from "../components/ContactForm";
import Hero from "../components/Hero";
import Invest from "../components/Invest";
import Landing from "../components/Landing";
import LoadingScreen from "../components/LoadingScreen";
import Rentals from "../components/Rentals";
import Sales from "../components/Sales";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <div className="mx-auto">
      {loading && <LoadingScreen />}
      <Hero />
      <Landing />
      <Sales />
      <Rentals />
      <Invest />
      <About />
      <Contact />
    </div>
  );
}

export default Home;
