import React from 'react';
import './FacilityCard.css';

const FacilityCard = ({
  title,
  icon,
  description,
  features = [],
  colorScheme = 'teal',
}) => {
  return (
    <div className={`facility-component-card scheme-${colorScheme}`}>
      <div className="facility-icon-circle">
        <i className={icon}></i>
      </div>
      <h3 className="facility-card-title">{title}</h3>
      <p className="facility-card-desc">{description}</p>
      {features.length > 0 && (
        <ul className="facility-feature-bullets">
          {features.map((feat, idx) => (
            <li key={idx}>
              <i className="fas fa-check"></i>
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FacilityCard;
