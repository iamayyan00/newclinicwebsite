import React from 'react';
import { Link } from 'react-router-dom';
import './TermsConditions.css';

const TermsConditions = () => {
  return (
    <div className="terms-page">
      {/* Banner */}
      <section className="page-hero-banner">
        <div className="site-container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="crumb-sep">/</span>
            <span className="crumb-active">Terms & Conditions</span>
          </nav>
          <h1 className="page-hero-title">Terms & Conditions</h1>
          <p className="page-hero-subtitle">
            Rules, Rights, and Medical Guidelines for Consulting at Solace Clinic of Alternative Medicine
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="terms-content-section">
        <div className="site-container">
          <div className="terms-document-card">
            <div className="terms-meta-header">
              <span><strong>Last Updated:</strong> 2026</span>
              <span><strong>Clinic:</strong> Solace Clinic of Alternative Medicine, Nanded</span>
            </div>

            <div className="terms-body-text">
              <h3>1. Acceptance of Clinical Terms</h3>
              <p>
                By scheduling an appointment, submitting your information, or seeking treatment at Solace Clinic of Alternative Medicine, you agree to abide by these Terms and Conditions and clinic policies.
              </p>

              <h3>2. Medical Consultations & Professional Standards</h3>
              <p>
                All medical consultations, physical evaluations, diagnostic assessments, and homoeopathic prescriptions are provided by qualified healthcare professionals registered with the Maharashtra Medical Council and Medical Council of India (MCI).
              </p>
              <p>
                Homeopathic treatment involves holistic case-taking and constitutional matching. While our clinical methods strive for the highest therapeutic efficacy, patient responses vary depending upon disease chronicity, vitality, and treatment adherence.
              </p>

              <h3>3. Patient Responsibilities</h3>
              <h4>3.1 Accurate History</h4>
              <p>
                Patients must provide full, genuine, and accurate disclosures regarding existing health conditions, surgical history, pregnancy status, and all current medications (including allopathic, ayurvedic, or over-the-counter drugs).
              </p>

              <h4>3.2 Treatment Adherence</h4>
              <p>
                Patients are expected to follow prescribed dosage schedules, adhere to suggested dietary restrictions (e.g. avoiding substances that antidote specific homeopathic remedies), and attend follow-up evaluations as advised.
              </p>

              <h3>4. Appointment Scheduling & Clinic Punctuality</h3>
              <ul>
                <li><strong>Arrival Time:</strong> Please arrive 10 minutes prior to your allocated OPD time slot to allow for vitals checking and record retrieval.</li>
                <li><strong>Cancellations:</strong> If you need to cancel or postpone your visit, please inform the clinic at least 2 hours in advance via telephone or WhatsApp so the slot may be reassigned to patients in need.</li>
                <li><strong>Emergency Disclaimer:</strong> In life-threatening emergencies requiring acute critical ICU interventions, patients are advised to report immediately to the nearest tertiary multispeciality trauma center or government district hospital.</li>
              </ul>

              <h3>5. Contact Information</h3>
              <div className="terms-contact-block">
                <p><strong>Solace Clinic of Alternative Medicine</strong></p>
                <p>Ayaan Tower Shop No 8, Ground Floor, Degloor Naka, Nanded, Maharashtra – 431604</p>
                <p>Phone: +91 8378977703 | WhatsApp: +91 8378977703 | Email: info@clinic.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
