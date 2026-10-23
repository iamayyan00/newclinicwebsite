import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-component-section">
      <div className="site-container hero-container">
        <div className="hero-content-col">
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            <span>Trusted Homeopathic & Alternative Healthcare in Nanded</span>
          </div>

          <h1 className="hero-main-heading">
            Solace Clinic of <span className="text-highlight">Alternative Medicine</span>
          </h1>

          <p className="hero-tagline">
            Care You Can Trust — Personalized, compassionate, and holistic healing led by expert homeopathic physician Dr. Sana Naeemuddin Qureshi.
          </p>

          {/* Doctor Mini Profile Card */}
          <div className="hero-doctor-card">
            <img
              src="/images/doctor-photo.jpeg"
              alt="Dr. Sana Naeemuddin Qureshi"
              className="hero-doc-avatar"
            />
            <div className="hero-doc-details">
              <h3 className="hero-doc-name">Dr. Sana Naeemuddin Qureshi</h3>
              <p className="hero-doc-qual">MD (Medicine) – Homeopathy</p>
              <div className="hero-doc-meta">
                <span className="doc-experience-badge">
                  <i className="fas fa-award"></i> 7+ Years Experience
                </span>
                <span className="doc-reg-badge">
                  <i className="fas fa-shield-alt"></i> MCI Registered
                </span>
              </div>
            </div>
          </div>

          {/* Rating Summary */}
          <div className="hero-rating-box">
            <div className="stars-row">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <span className="rating-score">4.9 / 5.0</span>
            <span className="rating-divider">•</span>
            <span className="rating-patient-count">500+ Happy Patients</span>
          </div>

          {/* Action Buttons */}
          <div className="hero-action-group">
            <Link to="/appointment" className="hero-primary-cta">
              <i className="fas fa-calendar-check me-2"></i> Book Appointment
            </Link>
            <a href="tel:+918378977703" className="hero-secondary-btn call-btn">
              <i className="fas fa-phone-alt me-2"></i> Call Now
            </a>
            <a
              href="https://wa.me/918378977703"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-secondary-btn whatsapp-btn"
            >
              <i className="fab fa-whatsapp me-2"></i> WhatsApp
            </a>
          </div>
        </div>

        {/* Hero Visual Col */}
        <div className="hero-visual-col">
          <div className="hero-image-card">
            <img
              src="/images/clinic.jpeg"
              alt="Solace Clinic Interior"
              className="hero-clinic-img"
            />
            <div className="hero-image-overlay-card">
              <div className="overlay-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div>
                <p className="overlay-title">OPD Hours</p>
                <p className="overlay-desc">12:00 PM – 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
