import React from 'react';
import '../App.css';
import  Office from '../assets/office.jpg';

function WelcomeSection() {
  return (
    <section>

        <div class="about-container grid-2">
                <div class="text-container y-start x-start">
                        <h1>WHO WE ARE</h1>

                        <small class="txt-grey">
                                Luxconsult, the epitome of elegance in the realm of real estate, stands as a beacon of sophistication and excellence. As a premier firm, they seamlessly blend opulence with unparalleled expertise, creating a realm where every property is a masterpiece waiting to be discovered.

                        </small>

                        <button class="btn btn-primary">Learn More</button>
                </div>

                <img src={Office} alt=""/>
        </div>
      </section>

  );
}

export default WelcomeSection;

