import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/';

const register = (user) => {
  return axios.post(API_URL + 'register', user);
};

const login = async (user) => {
  const response = await axios.post(API_URL + 'login', user);
  if (response.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem('user');
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export default {
  register,
  login,
  logout,
  getCurrentUser
};
