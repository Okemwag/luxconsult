// src/services/apiService.js
import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/'; // Replace with your Django API URL

export const fetchProperties = async () => {
  try {
    const response = await axios.get(`${BASE_URL}properties/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching properties:', error);
    throw error;
  }
};
