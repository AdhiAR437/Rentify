import React from 'react';
import { Link } from 'react-router-dom';
import authService from '../services/authService';

const Navbar = () => {
  const currentUser = authService.getCurrentUser();

  const handleLogout = () => {
    authService.logout();
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">Rentify</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav mr-auto">
      {currentUser ? (
        <React.Fragment>
          {currentUser.role === 'seller' && (
            <li className="nav-item">
              <Link className="nav-link" to="/seller/properties">My Properties</Link>
            </li>
          )}
        </React.Fragment>
      ) : null}
    </ul>
    <ul className="navbar-nav">
      {currentUser ? (
        <React.Fragment>
        <li className="nav-item">
          <button className="nav-link btn btn-outline-danger" onClick={handleLogout}>Logout</button>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/seller/properties">Selling-Properties</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add-property">Add-Properties</Link>
          </li>
          </React.Fragment>
      ) : (
        <React.Fragment>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">Register</Link>
          </li>
          
        </React.Fragment>
      )}
    </ul>
  </div>
</nav>

  );
};

export default Navbar;
