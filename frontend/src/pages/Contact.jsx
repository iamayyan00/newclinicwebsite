import React from 'react';
import { Link } from 'react-router-dom';
import ContactSection from '../components/ContactSection';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Banner */}
      <section className="page-hero-banner">
        <div className="site-container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="crumb-sep">/</span>
            <span className="crumb-active">Contact Us</span>
          </nav>
          <h1 className="page-hero-title">Contact Solace Clinic</h1>
          <p className="page-hero-subtitle">
            Get in Touch for Consultations, Emergency Inquiries, and Location Directions in Nanded
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main-wrapper">
        <div className="site-container">
          <ContactSection />
        </div>
      </section>

      {/* Google Map Embed Card */}
      <section className="contact-map-section">
        <div className="site-container">
          <div className="map-embed-wrapper">
            <div className="map-header">
              <div>
                <h3 className="map-title">Solace Clinic on Google Maps</h3>
                <p className="map-address">Ayaan Tower Shop No 8, Degloor Naka, Nanded, Maharashtra – 431604</p>
              </div>
              <a
                href="https://www.google.com/maps/place/SOLACE+CLINIC/@19.147485,77.3249762,17z/data=!3m1!4b1!4m6!3m5!1s0x3bd1d635cd2deb21:0x5a4ef664371adaba!8m2!3d19.147485!4d77.3275565!16s%2Fg%2F11vl9g5p2m"
                target="_blank"
                rel="noopener noreferrer"
                className="map-open-link-btn"
              >
                <i className="fas fa-external-link-alt me-2"></i> Open in Maps App
              </a>
            </div>

            <div className="map-iframe-container">
              <iframe
                title="Solace Clinic Location Map"
                src="https://maps.google.com/maps?q=19.147485,77.3275565&hl=en&z=16&output=embed"
                width="100%"
                height="380"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
