// services/api.js

import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
});

// Request interceptor for adding the auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => Promise.reject(error));

// Response interceptor for handling token expiration
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      window.location = '/login';
    }
    return Promise.reject(error);
  }
);

// Authentication
export const login = async (email, password) => {
  const response = await api.post('/auth/login', { email, password });
  return response.data;
};

export const register = async (email, password, role) => {
  const response = await api.post('/auth/register', { email, password, role });
  return response.data;
};

export const getUserInfo = async () => {
  const response = await api.get('/users/user');
  return response.data;
};

// Properties
export const getProperties = async () => {
  const response = await api.get('/properties');
  return response.data;
};

export const getProperty = async (id) => {
  const response = await api.get(`/properties/${id}`);
  return response.data;
};

export const createProperty = async (propertyData) => {
  const response = await api.post('/properties', propertyData);
  return response.data;
};

export const updateProperty = async (id, propertyData) => {
  const response = await api.put(`/properties/${id}`, propertyData);
  return response.data;
};

export const deleteProperty = async (id) => {
  const response = await api.delete(`/properties/${id}`);
  return response.data;
};

// Assignments (Admin only)
export const assignProperties = async (leadId, propertyIds) => {
  const response = await api.post('/assignments/assign', { leadId, propertyIds });
  return response.data;
};

// Users (Admin only)
export const getUsers = async (role) => {
  const response = await api.get(`/users/${role}`);
  return response.data;
};

export const updateUser = async (id, userData) => {
  const response = await api.put(`/users/${id}`, userData);
  return response.data;
};
export const deleteUser = async (id) => {
    const response = await api.delete(`/users/${id}`);
    return response.data;
  };
// Lead (Customer) specific
export const getAssignedProperties = async () => {
  const response = await api.get('/users/me/properties');
  return response.data;
};

// Error handling wrapper
const handleApiError = (error) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.error("API Error:", error.response.data);
    throw new Error(error.response.data.message || "An error occurred");
  } else if (error.request) {
    // The request was made but no response was received
    console.error("Network Error:", error.request);
    throw new Error("Network error. Please try again.");
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error("Request Error:", error.message);
    throw new Error("An error occurred. Please try again.");
  }
};

// Wrap all exported functions with error handling
// Object.keys(exports).forEach((key) => {
//   const originalFunc = exports[key];
//   exports[key] = async (...args) => {
//     try {
//       return await originalFunc(...args);
//     } catch (error) {
//       return handleApiError(error);
//     }
//   };
// });