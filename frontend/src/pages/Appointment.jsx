import React from 'react';
import { Link } from 'react-router-dom';
import AppointmentForm from '../components/AppointmentForm';
import './Appointment.css';

const Appointment = () => {
  return (
    <div className="appointment-page">
      {/* Banner */}
      <section className="page-hero-banner">
        <div className="site-container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="crumb-sep">/</span>
            <span className="crumb-active">Book Appointment</span>
          </nav>
          <h1 className="page-hero-title">Book Doctor Appointment Online</h1>
          <p className="page-hero-subtitle">
            Schedule Your Visit with Dr. Sana Naeemuddin Qureshi — Fast, Secure, and Direct Confirmation
          </p>
        </div>
      </section>

      {/* Main Appointment Section */}
      <section className="appointment-main-section">
        <div className="site-container">
          <div className="appointment-grid-layout">
            {/* Form Column */}
            <div className="form-main-col">
              <AppointmentForm />
            </div>

            {/* Sidebar Column */}
            <div className="appointment-sidebar-col">
              {/* Quick Info */}
              <div className="sidebar-card">
                <h4 className="sidebar-card-title">
                  <i className="fas fa-info-circle text-primary me-2"></i> Quick Clinic Info
                </h4>
                <ul className="sidebar-info-list">
                  <li>
                    <i className="fas fa-clock text-emerald"></i>
                    <div>
                      <strong>OPD Timings</strong>
                      <p>12:00 PM – 8:00 PM (Mon – Sat)</p>
                    </div>
                  </li>
                  <li>
                    <i className="fab fa-whatsapp text-emerald"></i>
                    <div>
                      <strong>WhatsApp Assistance</strong>
                      <a href="https://wa.me/918378977703" target="_blank" rel="noopener noreferrer">
                        +91 8378977703
                      </a>
                    </div>
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt text-danger"></i>
                    <div>
                      <strong>Clinic Address</strong>
                      <p>Ayaan Tower Shop No 8, Ground Floor, Degloor Naka, Nanded – 431604</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Why Choose Us */}
              <div className="sidebar-card">
                <h4 className="sidebar-card-title">
                  <i className="fas fa-star text-gold me-2"></i> Why Choose Solace Clinic
                </h4>
                <ul className="why-choose-bullets">
                  <li>
                    <i className="fas fa-check-circle text-emerald"></i>
                    <span><strong>7+ Years</strong> Clinical Medical Experience</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle text-emerald"></i>
                    <span><strong>500+ Happy Patients</strong> & Families Treated</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle text-emerald"></i>
                    <span><strong>MMC & MCI Registered</strong> Physician</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle text-emerald"></i>
                    <span><strong>Modern Diagnostics</strong> & Vitals Check</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle text-emerald"></i>
                    <span><strong>Affordable</strong> & Compassionate Care</span>
                  </li>
                </ul>
              </div>

              {/* Mini Testimonial */}
              <div className="sidebar-card testimonial-sidebar">
                <h4 className="sidebar-card-title">
                  <i className="fas fa-quote-left text-primary me-2"></i> Patient Feedback
                </h4>
                <div className="testimonial-stars">
                  <i className="fas fa-star text-gold"></i>
                  <i className="fas fa-star text-gold"></i>
                  <i className="fas fa-star text-gold"></i>
                  <i className="fas fa-star text-gold"></i>
                  <i className="fas fa-star text-gold"></i>
                </div>
                <p className="sidebar-testimonial-text">
                  "Excellent doctor and very caring staff. The appointment process was very smooth and convenient. Highly recommended!"
                </p>
                <div className="sidebar-testimonial-author">
                  <strong>— Rahul Sharma</strong>
                  <small>Verified Patient</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;
