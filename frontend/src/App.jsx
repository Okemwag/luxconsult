import { Routes, Route } from "react-router-dom"
import HomePage from "../src/pages/HomePage"
import SalesPage from "../src/pages/SalesPage"
import RentalsPage from "../src/pages/RentalsPage"
import PropertyDetails from "../src/components/PropertyDetails"
import Invest from "../src/components/Invest"
import Footer from "../src/components/Footer"
import "./App.css"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="sales" element={<SalesPage />} />
        <Route path="rental" element={<RentalsPage />} />
        <Route path="invest" element={<Invest />} />
        <Route path="footer" element={<Footer />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
    </Routes>
    </div>
  )
}

export default App
