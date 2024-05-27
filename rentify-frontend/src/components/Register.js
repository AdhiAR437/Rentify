import React, { useState } from 'react';
import authService from '../services/authService';

const Register = (props) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    role: 'buyer'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await authService.register(formData);
      props.history.push('/login');
    } catch (error) {
      console.error('Register Error:', error);
    }
  };

  return (
    <form onSubmit={handleRegister} className="mt-4">
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        className="form-control"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
        required
      />
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        className="form-control"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        required
      />
    </div>
  </div>
  <div className="form-group col-md-6">
    <label htmlFor="email">Email</label>
    <input
      type="email"
      className="form-control"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Email"
      required
    />
  </div>
  <div className="form-group col-md-6">
    <label htmlFor="phone">Phone</label>
    <input
      type="text"
      className="form-control"
      id="phone"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      placeholder="Phone"
      required
    />
  </div>
  <div className="form-group col-md-6">
    <label htmlFor="password">Password</label>
    <input
      type="password"
      className="form-control"
      id="password"
      name="password"
      value={formData.password}
      onChange={handleChange}
      placeholder="Password"
      required
    />
  </div>
  <div className="form-group col-md-6">
    <label htmlFor="role">Role</label>
    <select
      className="form-control"
      id="role"
      name="role"
      value={formData.role}
      onChange={handleChange}
    >
      <option value="buyer">Buyer</option>
      <option value="seller">Seller</option>
    </select>
  </div>
  <button type="submit" className="btn btn-primary">Register</button>
</form>

  );
};

export default Register;
