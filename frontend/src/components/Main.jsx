import React from "react";
import "../styles/main.css";
import  House  from '../assets/House.jpg';

const Main = () => {
    return (
        <section className="hero">
            <h1>Hero</h1>
            <div className="heroImage">
                <img src={House} alt="House" />
            </div>
        </section>
    );
}

export default Main;