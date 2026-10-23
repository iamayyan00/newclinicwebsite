import React from 'react';
import { Link } from 'react-router-dom';
import DoctorProfileCard from '../components/DoctorProfileCard';
import './DoctorProfile.css';

const DoctorProfile = () => {
  return (
    <div className="doctor-profile-page">
      {/* Banner */}
      <section className="page-hero-banner">
        <div className="site-container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="crumb-sep">/</span>
            <span className="crumb-active">Doctor Profile</span>
          </nav>
          <h1 className="page-hero-title">Dr. Sana Naeemuddin Qureshi</h1>
          <p className="page-hero-subtitle">
            MD (Medicine) – Homeopathy | 7+ Years of Clinical Practice in Holistic Healthcare
          </p>
        </div>
      </section>

      {/* Main Profile Card Section */}
      <section className="doc-main-profile-section">
        <div className="site-container">
          <div className="profile-wrapper">
            <DoctorProfileCard detailed={true} />
          </div>
        </div>
      </section>

      {/* Registration & Credentials Section */}
      <section className="doc-registration-section">
        <div className="site-container">
          <div className="section-header-centered">
            <span className="section-pill-tag">Verified Credentials</span>
            <h2 className="section-main-title">Medical Registration & Affiliations</h2>
            <p className="section-sub-title">
              Practicing under the regulatory standards of the Maharashtra Medical Council and Medical Council of India.
            </p>
          </div>

          <div className="registration-details-grid">
            <div className="reg-detail-card">
              <div className="reg-icon-box">
                <i className="fas fa-id-card"></i>
              </div>
              <h4 className="reg-card-title">Registration Authority</h4>
              <p className="reg-card-val">Maharashtra Medical Council / MCI</p>
              <p className="reg-card-note">Verified registered medical practitioner with active license</p>
            </div>

            <div className="reg-detail-card">
              <div className="reg-icon-box blue">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h4 className="reg-card-title">Academic Degree</h4>
              <p className="reg-card-val">MD (Medicine) – Homeopathy</p>
              <p className="reg-card-note">Postgraduate clinical medical specialization</p>
            </div>

            <div className="reg-detail-card">
              <div className="reg-icon-box gold">
                <i className="fas fa-user-clock"></i>
              </div>
              <h4 className="reg-card-title">Clinical Practice</h4>
              <p className="reg-card-val">7+ Years Active Service</p>
              <p className="reg-card-note">Serving Nanded, Degloor Naka, and Marathwada region</p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Certifications */}
      <section className="doc-awards-section">
        <div className="site-container">
          <div className="section-header-centered">
            <span className="section-pill-tag">Recognition</span>
            <h2 className="section-main-title">Awards & Professional Honors</h2>
            <p className="section-sub-title">
              Acknowledged for commitment to patient safety, clinical ethics, and holistic patient recovery.
            </p>
          </div>

          <div className="awards-grid">
            <div className="award-item-card">
              <i className="fas fa-trophy award-badge-icon"></i>
              <div>
                <h4 className="award-name">Best Doctor Award</h4>
                <p className="award-org">City Medical Association – 2022</p>
                <p className="award-desc">Recognized for outstanding primary clinical care in alternative medicine.</p>
              </div>
            </div>

            <div className="award-item-card">
              <i className="fas fa-certificate award-badge-icon emerald"></i>
              <div>
                <h4 className="award-name">Advanced Cardiac Life Support</h4>
                <p className="award-org">American Heart Association – 2021</p>
                <p className="award-desc">Certified training in acute emergency medical protocols.</p>
              </div>
            </div>

            <div className="award-item-card">
              <i className="fas fa-award award-badge-icon blue"></i>
              <div>
                <h4 className="award-name">Diabetes Management Certification</h4>
                <p className="award-org">International Diabetes Federation – 2020</p>
                <p className="award-desc">Specialized clinical coursework in glycemic control and lifestyle reversal.</p>
              </div>
            </div>

            <div className="award-item-card">
              <i className="fas fa-medal award-badge-icon purple"></i>
              <div>
                <h4 className="award-name">Excellence in Patient Care</h4>
                <p className="award-org">State Health Department – 2019</p>
                <p className="award-desc">Commended for compassionate patient communication and bedside ethics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book with Doctor CTA */}
      <section className="doc-cta-section">
        <div className="site-container">
          <div className="doc-cta-card">
            <h2>Schedule a Direct Consultation with Dr. Sana</h2>
            <p>
              Whether dealing with chronic conditions, recurrent infections, or seeking personalized wellness advice, experience gentle, reliable care at Solace Clinic.
            </p>
            <div className="cta-btn-row">
              <Link to="/appointment" className="doc-cta-btn primary">
                <i className="fas fa-calendar-check me-2"></i> Book Appointment Now
              </Link>
              <a href="https://wa.me/918378977703" target="_blank" rel="noopener noreferrer" className="doc-cta-btn whatsapp">
                <i className="fab fa-whatsapp me-2"></i> WhatsApp Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoctorProfile;
