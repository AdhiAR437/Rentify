import React, { useState } from 'react';
import authService from '../services/authService';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await authService.login({ email, password });
      alert("Login Succcessful");
      props.history.push('/');
      window.location.reload();
    } catch (error) {
      console.error('Login Error:', error);
    }
  };

  return (
    <form onSubmit={handleLogin} className="mt-4">
  <div className="form-group row">
    <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-5">
      <input
        type="email"
        className="form-control"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-5">
      <input
        type="password"
        className="form-control"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
    </div>
  </div>
  <div className="form-group row">
    <div className="col-sm-10 offset-sm-2">
      <button type="submit" className="btn btn-primary">Login</button>
    </div>
  </div>
</form>


  );
};

export default Login;
