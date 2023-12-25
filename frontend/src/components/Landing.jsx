import React from "react";
import "../App.css";
import House2 from "../assets/bay.jpg";
import Couch from "../assets/couch.jpg";
import LivingRoom from "../assets/livingroom.jpg";

const ImageGallery = () => {
  return (
    <section>
      <div className="container grid-3">
        <div className="img-container shadow-md pb-5 rounded-sm overflow-hidden">
          <img
            src={House2}
            alt=""
            className="hover:scale-110 hover:transition-all"
          />

          <p>DISCOVER OUR VIRTUAL TOURS</p>
          <button class="btn btn-primary">START HERE</button>
        </div>

        <div className="img-container shadow-md pb-5 rounded-sm overflow-hidden">
          <img
            src={LivingRoom}
            alt=""
            className="hover:scale-110 hover:transition-all"
          />
          <p>BREATHTAKING DEVELOPMENTS</p>
          <button className="btn btn-primary">Learn More</button>
        </div>

        <div className="img-container shadow-md pb-5 rounded-sm overflow-hidden">
          <img
            src={Couch}
            alt=""
            className="hover:scale-110 hover:transition-all"
          />
          <p>EXPERIENCE OUR INSIGHTS</p>
          <button className="btn btn-primary">INQUIRE NOW</button>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
