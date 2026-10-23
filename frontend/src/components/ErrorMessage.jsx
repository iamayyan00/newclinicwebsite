import React from 'react';
import './ErrorMessage.css';

const ErrorMessage = ({ message, onRetry }) => {
  if (!message) return null;

  return (
    <div className="error-alert" role="alert">
      <div className="error-icon">
        <i className="fas fa-exclamation-circle"></i>
      </div>
      <div className="error-content">
        <p className="error-title">Attention Required</p>
        <p className="error-description">{message}</p>
      </div>
      {onRetry && (
        <button type="button" className="error-retry-btn" onClick={onRetry}>
          <i className="fas fa-redo-alt me-1"></i> Retry
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;
