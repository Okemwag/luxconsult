// src/services/apiService.js
import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/'; // 

export const fetchProperties = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/v1/core/all/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching properties:', error);
    throw error;
  }
};
