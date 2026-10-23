import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = ({ phoneNumber = '918378977703', defaultMessage = 'Hello Dr. Sana, I would like to inquire about consultation at Solace Clinic.' }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-btn"
      aria-label="Chat with Solace Clinic on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
      <span className="whatsapp-tooltip">Chat with Doctor</span>
    </a>
  );
};

export default WhatsAppButton;
