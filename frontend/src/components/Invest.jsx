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

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam reiciendis perspiciatis repellendus, nobis, voluptas nesciunt, explicabo culpa laudantium fugit eum pariatur cum necessitatibus. Cupiditate, velit ad similique deleniti animi illo. Aperiam, distinctio quos quasi optio, delectus, quod corrupti perspiciatis impedit deserunt earum odio. Cupiditate magni, rerum, modi repudiandae accusamus doloribus delectus totam saepe cum 
                        </small>

                        <button class="btn btn-primary">Learn More</button>
                </div>

        </div>
      </section>
    
  );


}


export default Invest;
