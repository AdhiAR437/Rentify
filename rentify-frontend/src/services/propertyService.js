import axios from 'axios';

const API_URL = 'http://localhost:5000/api/properties/';

const getAllProperties = () => {
  return axios.get(API_URL);
};

const createProperty = (property) => {
  return axios.post(API_URL, property, { headers: authHeader() });
};

const getPropertiesBySeller = () => {
  return axios.get(API_URL + 'seller', { headers: authHeader() });
};

const updateProperty = (id, property) => {
  return axios.put(API_URL + id, property, { headers: authHeader() });
};

const deleteProperty = (id) => {
  return axios.delete(API_URL + id, { headers: authHeader() });
};

const authHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);
  if (user && user.token) {
    return { 'auth-token': user.token };
  } else {
    return {};
  }
};

export default {
  getAllProperties,
  createProperty,
  getPropertiesBySeller,
  updateProperty,
  deleteProperty
};
