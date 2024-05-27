import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import PropertyList from './components/PropertyList';
import Login from './components/Login';
import Register from './components/Register';
import SellerProperties from './components/SellerProperties';
import PropertyForm from './components/PropertyForm';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<PropertyList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/seller/properties" element={<SellerProperties />} />
          <Route path="/add-property" element={<PropertyForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
