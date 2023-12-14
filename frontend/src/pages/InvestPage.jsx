import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useGetForRentQuery } from "../redux/services/properties";

function RentalsPage() {
  const { data } = useGetForRentQuery();
  const [rentalsData, setRentalsData] = useState([]);

  console.log(rentalsData);

  useEffect(() => {
    if (data) {
      // Limit the photos to a maximum of four
      const limitedData = data.results.slice(0, 4);
      setRentalsData(limitedData);
    }
  }, [data]);

  return (
    <section className="invest-section">
      <div class=" invest grid-2">
        {/* <img src={Gold} alt="" /> */}

        <div class="text-container y-start x-start">
          <h1>INVEST IN YOUR FUTURE WITH REAL ESTATE</h1>

          <small class="txt-grey">
            Embark on a financial journey where aspirations meet returns. With
            strategic investments, we transform your dreams into tangible
            dividends, crafting a future of prosperity. Unleash the power of
            your money and watch it grow, as we navigate the markets together,
            making each investment a step towards lasting success and
            fulfillment.
          </small>

          <Link to="/invest" className="btn btn-primary">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}

export default RentalsPage;
