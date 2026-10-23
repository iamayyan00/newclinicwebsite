import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="site-container">
        <div className="not-found-card">
          <div className="error-code-badge">404 Error</div>
          <h1 className="not-found-title">Page Not Found</h1>
          <p className="not-found-desc">
            The page you are looking for may have been moved, renamed, or is temporarily unavailable. Please return to the Solace Clinic home page or explore our services.
          </p>
          <div className="not-found-actions">
            <Link to="/" className="btn-not-found primary">
              <i className="fas fa-home me-2"></i> Go to Homepage
            </Link>
            <Link to="/appointment" className="btn-not-found secondary">
              <i className="fas fa-calendar-check me-2"></i> Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
