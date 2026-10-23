import React from 'react';
import { Link } from 'react-router-dom';
import './DoctorProfileCard.css';

const DoctorProfileCard = ({ detailed = false }) => {
  return (
    <div className={`doctor-profile-card ${detailed ? 'detailed-mode' : ''}`}>
      <div className="doc-card-photo-wrapper">
        <img
          src="/images/doctor-photo.jpeg"
          alt="Dr. Sana Naeemuddin Qureshi"
          className="doc-card-photo"
        />
        <div className="doc-photo-badge">
          <i className="fas fa-check-circle"></i> Verified Physician
        </div>
      </div>

      <div className="doc-card-body">
        <div className="doc-header-block">
          <h2 className="doc-name">Dr. Sana Naeemuddin Qureshi</h2>
          <p className="doc-degree">MD (Medicine) – Homeopathy</p>
          <p className="doc-specialty">Physician & Alternative Medicine Specialist</p>
        </div>

        <div className="doc-badges-list">
          <span className="doc-pill exp">
            <i className="fas fa-briefcase"></i> 10+ Years Experience
          </span>
          <span className="doc-pill mci">
            <i className="fas fa-certificate"></i> MMC / MCI Registered
          </span>
          <span className="doc-pill rating">
            <i className="fas fa-star text-gold"></i> 4.9/5 (1000+ Patients)
          </span>
        </div>

        <div className="doc-meta-table">
          <div className="doc-meta-item">
            <span className="meta-label"><i className="fas fa-stethoscope"></i> Specialization:</span>
            <span className="meta-val">General Medicine, Chronic Disorders & Homeopathy</span>
          </div>
          <div className="doc-meta-item">
            <span className="meta-label"><i className="fas fa-hospital"></i> Clinic:</span>
            <span className="meta-val">Solace Clinic of Alternative Medicine, Nanded</span>
          </div>
          <div className="doc-meta-item">
            <span className="meta-label"><i className="fas fa-language"></i> Languages:</span>
            <span className="meta-val">English, Hindi, Urdu</span>
          </div>
        </div>

        {detailed && (
          <div className="doc-extended-bio">
            <h4 className="bio-title">About the Doctor</h4>
            <p>
              Dr. Sana Naeemuddin Qureshi is a highly experienced and compassionate physician dedicated to providing personalized healthcare. With extensive expertise in General Medicine and Homeopathic therapeutics, Dr. Sana has successfully guided thousands of patients through chronic diseases, diabetes lifestyle management, cardiovascular health, pediatric issues, and skin disorders.
            </p>
            <div className="doc-accolades">
              <div className="accolade-item">
                <i className="fas fa-award accolade-icon"></i>
                <div>
                  <strong>Excellence in Patient Care</strong>
                  <p>Recognized for clinical dedication and compassionate bedside care</p>
                </div>
              </div>
              <div className="accolade-item">
                <i className="fas fa-graduation-cap accolade-icon"></i>
                <div>
                  <strong>Post-Graduate MD in Medicine</strong>
                  <p>Comprehensive training in evidence-based and holistic therapies</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="doc-card-actions">
          <Link to="/appointment" className="btn-doc-book">
            <i className="fas fa-calendar-check me-2"></i> Book Appointment
          </Link>
          <a href="tel:+918378977703" className="btn-doc-call">
            <i className="fas fa-phone-alt me-2"></i> Call
          </a>
          <a
            href="https://wa.me/918378977703"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-doc-whatsapp"
          >
            <i className="fab fa-whatsapp me-2"></i> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfileCard;
