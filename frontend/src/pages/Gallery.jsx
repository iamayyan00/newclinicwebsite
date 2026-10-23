import React from 'react';
import { Link } from 'react-router-dom';
import GalleryGrid from '../components/GalleryGrid';
import './Gallery.css';

const Gallery = () => {
  return (
    <div className="gallery-page">
      {/* Banner */}
      <section className="page-hero-banner">
        <div className="site-container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="crumb-sep">/</span>
            <span className="crumb-active">Gallery</span>
          </nav>
          <h1 className="page-hero-title">Clinic Photo Gallery</h1>
          <p className="page-hero-subtitle">
            Take a Visual Tour of Solace Clinic — Consultation Suites, Reception Lounge, and Pharmacy
          </p>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="gallery-main-section">
        <div className="site-container">
          <div className="section-header-centered">
            <span className="section-pill-tag">Visual Walkthrough</span>
            <h2 className="section-main-title">Modern Facilities & Compassionate Spaces</h2>
            <p className="section-sub-title">
              Click any photograph to open high-definition view with descriptive facility information.
            </p>
          </div>

          <GalleryGrid />
        </div>
      </section>

      {/* Visit Us CTA */}
      <section className="gallery-visit-cta">
        <div className="site-container">
          <div className="gallery-cta-card">
            <h3>Experience Our Healing Environment in Person</h3>
            <p>
              Located centrally at Ayaan Tower, Degloor Naka, Nanded. Easily accessible via public transit with dedicated parking.
            </p>
            <div className="gallery-cta-actions">
              <Link to="/appointment" className="btn-gallery-cta primary">
                <i className="fas fa-calendar-check me-2"></i> Book Appointment
              </Link>
              <Link to="/contact" className="btn-gallery-cta secondary">
                <i className="fas fa-map-marker-alt me-2"></i> Get Clinic Directions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
