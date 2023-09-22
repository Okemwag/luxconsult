import React, { useState } from 'react';
import Modal from 'react-modal';
import CustomModal from './CustomModal'; 
import '../styles/invest.css'; 


// Define the app element (the root of your application)
Modal.setAppElement('#root'); 

const Invest = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="invest-section">
      <div className="invest-content">
        <h2>Invest in Your Future with Real Estate</h2>
        <p>
          Are you ready to make your money work for you? Discover the world of real estate investment with us. Our carefully selected properties are designed not just for today but for your financial future. Whether you're a seasoned investor or just starting, we have opportunities that promise both security and growth.
        </p>
        <button className="invest-button" onClick={openModal}>
          Get Started
        </button>
      </div>

      <CustomModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </section>
  );
};

export default Invest;
