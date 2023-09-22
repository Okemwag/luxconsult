import React, { useState } from 'react';
import Modal from 'react-modal';
import '../styles/custommodal.css';

const CustomModal = ({ isOpen, onRequestClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interests: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     
      // TO-DO:
    // Send formData to the Django backend 
    // Include logic to send an email notification in the backend
    
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Fill in your details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Interests:</label>
          <input
            type="text"
            name="interests"
            value={formData.interests}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Modal>
  );
};

export default CustomModal;
