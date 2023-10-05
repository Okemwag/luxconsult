import React, { useState } from 'react';
import '../styles/custommodal.css';

const FeedbackForm = () => {
 const [formData, setFormData] = useState({ name: '', email: '', feedback: '' });

 const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: '', email: '', feedback: '' });
 };

 return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

      <label htmlFor="feedback">Feedback:</label>
      <textarea id="feedback" name="feedback" value={formData.feedback} onChange={handleChange} required />

      <button type="submit">Submit</button>
    </form>
 );
};

export default FeedbackForm;
