import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function RentalsPage() {
    const [rentalsData, setRentalsData] = useState([]);
  

    useEffect(() => {
        // Make an API request to fetch data from the backend
        axios.get('http://127.0.0.1:8000/api/v1/core/for-rent/')
            .then((response) => {
                setRentalsData(response.data.results);
            })
            .catch((error) => {
                console.error('Error fetching rentals data:', error);
            });
    }, []);

    return (
        <section className="invest-section">
            <div class=" invest grid-2">

                <img src={Gold} alt="" />

                <div class="text-container y-start x-start">
                    <h1>INVEST IN YOUR FUTURE WITH REAL ESTATE</h1>

                    <small class="txt-grey">

                        Embark on a financial journey where aspirations meet returns. With strategic investments, we transform your dreams into tangible dividends, crafting a future of prosperity. Unleash the power of your money and watch it grow, as we navigate the markets together, making each investment a step towards lasting success and fulfillment.
                    </small>

                    <Link to="/invest" className="btn btn-primary">View All</Link>
                </div>

            </div>
            
        </section>
    ), 
}