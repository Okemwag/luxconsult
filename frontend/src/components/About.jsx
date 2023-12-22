import React from 'react';
import Office from '../assets/office.jpg';

function WelcomeSection() {
  return (
    <section>
      <div className="about-container grid-2">
        <div className="text-container flex flex-col justify-start items-start p-8">
          <h1 className="text-4xl font-bold mb-4">WHO ARE WE</h1>

          <small className="text-gray-600 mb-6">
            Luxconsult, the epitome of elegance in the realm of real estate, stands as a beacon of sophistication and excellence. As a premier firm, they seamlessly blend opulence with unparalleled expertise, creating a realm where every property is a masterpiece waiting to be discovered.
          </small>

          <button className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
            Learn More
          </button>
        </div>

        <img className="object-cover" src={Office} alt="Office" />
      </div>
    </section>
  );
}

export default WelcomeSection;
