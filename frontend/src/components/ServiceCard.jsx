import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({
  id,
  title,
  icon,
  colorScheme = 'teal',
  description,
  symptoms = [],
  treatmentSteps = [],
  duration,
  faqs = [],
}) => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq((prev) => (prev === index ? null : index));
  };

  return (
    <div className={`service-component-card scheme-${colorScheme}`} id={id}>
      <div className="service-card-header">
        <div className="service-icon-box">
          <i className={icon}></i>
        </div>
        <h3 className="service-title">{title}</h3>
      </div>

      <p className="service-desc">{description}</p>

      {symptoms.length > 0 && (
        <div className="service-section-block">
          <h5 className="service-block-heading">
            <i className="fas fa-notes-medical"></i> Common Symptoms:
          </h5>
          <ul className="service-bullet-list">
            {symptoms.map((symptom, idx) => (
              <li key={idx}>
                <i className="fas fa-check-circle"></i> {symptom}
              </li>
            ))}
          </ul>
        </div>
      )}

      {treatmentSteps.length > 0 && (
        <div className="service-section-block">
          <h5 className="service-block-heading">
            <i className="fas fa-clipboard-list"></i> Treatment Process:
          </h5>
          <ol className="service-step-list">
            {treatmentSteps.map((step, idx) => (
              <li key={idx}>
                <span className="step-num">{idx + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      )}

      {duration && (
        <div className="service-duration-badge">
          <i className="fas fa-hourglass-half"></i>
          <span><strong>Consultation Duration:</strong> {duration}</span>
        </div>
      )}

      {faqs.length > 0 && (
        <div className="service-faq-container">
          <h5 className="service-faq-header">Frequently Asked Questions</h5>
          <div className="service-accordion">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className={`faq-row ${isOpen ? 'open' : ''}`}>
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
                  </button>
                  {isOpen && (
                    <div className="faq-answer-pane">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="service-card-footer">
        <Link to="/appointment" className="service-book-btn">
          <span>Book Consultation</span>
          <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
