import React from 'react';
import Gold from '../assets/gold.jpg';

function Invest() {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
        <img src={Gold} alt="Cover" className="w-[80%] h-[95%] object-cover" />

        <div className="text-container p-4">
          <h1 className="text-3xl font-bold mb-4">INVEST IN YOUR FUTURE WITH REAL ESTATE</h1>

          <small className="text-gray-600 mb-4">
            Embark on a financial journey where aspirations meet returns. With strategic investments, we transform your dreams into tangible dividends, crafting a future of prosperity. Unleash the power of your money and watch it grow, as we navigate the markets together, making each investment a step towards lasting success and fulfillment.
          </small>
        </div>
        <button className="btn btn-primary mt-4">Learn More</button>
      </div>
    </section>
  );
}

export default Invest;
