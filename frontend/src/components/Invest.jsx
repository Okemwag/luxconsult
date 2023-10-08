import React from 'react'; 
import '../App.css'; 
import  Gold from '../assets/gold.jpg';


// Define the app element (the root of your application)


function Invest() {

return (
    
      <section>

        <div class=" invest grid-2">

                <img src={Gold} alt=""/>

                <div class="text-container y-start x-start">
                        <h1>INVEST IN YOUR FUTURE WITH REAL ESTATE</h1>

                        <small class="txt-grey">

                        Embark on a financial journey where aspirations meet returns. With strategic investments, we transform your dreams into tangible dividends, crafting a future of prosperity. Unleash the power of your money and watch it grow, as we navigate the markets together, making each investment a step towards lasting success and fulfillment. 
                        </small>

                        <button class="btn btn-primary">Learn More</button>
                </div>

        </div>
      </section>
    
  );


}


export default Invest;
