import React from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="policy-page">
      {/* Banner */}
      <section className="page-hero-banner">
        <div className="site-container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="crumb-sep">/</span>
            <span className="crumb-active">Privacy Policy</span>
          </nav>
          <h1 className="page-hero-title">Patient Privacy Policy</h1>
          <p className="page-hero-subtitle">
            How Solace Clinic of Alternative Medicine Safeguards Your Personal & Health Information
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="policy-content-section">
        <div className="site-container">
          <div className="policy-document-card">
            <div className="policy-meta-header">
              <span><strong>Effective Date:</strong> Updated for 2026</span>
              <span><strong>Medical Center:</strong> Solace Clinic of Alternative Medicine, Nanded</span>
            </div>

            <div className="policy-body-text">
              <h3>1. Introduction</h3>
              <p>
                Solace Clinic of Alternative Medicine ("we," "our," or "the Clinic"), under the clinical leadership of Dr. Sana Naeemuddin Qureshi, is committed to upholding the highest standards of confidentiality, patient privacy, and data security. This document details how we collect, handle, protect, and process your personal and medical information.
              </p>

              <h3>2. Information We Collect</h3>
              <h4>2.1 Personal & Medical Data</h4>
              <p>When booking appointments or consulting with our doctor, we collect:</p>
              <ul>
                <li><strong>Identity Details:</strong> Full name, age, gender, contact number, and residential city.</li>
                <li><strong>Medical Information:</strong> Chief health complaints, duration of symptoms, past medical history, current allopathic/ayurvedic/homeopathic medications, and known allergies.</li>
                <li><strong>Appointment Data:</strong> Preferred consultation dates, selected OPD time slots, and consultation format (in-clinic vs. online).</li>
              </ul>

              <h4>2.2 Technical Information</h4>
              <p>
                When utilizing our website or booking online, standard technical logs including device IP, browser type, and form submission timestamps are recorded strictly to prevent duplicate bookings and automated abuse.
              </p>

              <h3>3. How We Use Your Information</h3>
              <p>All collected information is used solely for healthcare delivery purposes:</p>
              <ul>
                <li>To register, organize, and confirm doctor appointments with Dr. Sana Naeemuddin Qureshi.</li>
                <li>To maintain clinical case histories and formulate individualized homeopathic treatment plans.</li>
                <li>To dispatch automated WhatsApp or SMS booking confirmations and follow-up consultation reminders.</li>
                <li>To comply with regulatory standards prescribed by the Maharashtra Medical Council and Medical Council of India.</li>
              </ul>

              <h3>4. Data Confidentiality & Security Measures</h3>
              <p>
                We implement strict administrative, technical, and physical safeguards:
              </p>
              <ul>
                <li>Secure TLS/SSL data transmission between browser and backend database.</li>
                <li>Restricted, role-based access limited exclusively to authorized clinic staff.</li>
                <li>We do not sell, rent, lease, or publicly share patient personal or medical information with third-party advertisers or commercial entities under any circumstances.</li>
              </ul>

              <h3>5. Patient Rights</h3>
              <p>Under applicable healthcare data ethics and Indian IT regulations, you have the right to:</p>
              <ul>
                <li>Inspect and request a copy of your clinical appointment records.</li>
                <li>Request rectification of inaccurate contact numbers, names, or addresses.</li>
                <li>Opt out of optional WhatsApp or email reminder notifications at any time.</li>
              </ul>

              <h3>6. Contact & Inquiries</h3>
              <p>
                If you have questions regarding this Privacy Policy or wish to update your contact preferences, please reach us at:
              </p>
              <div className="policy-contact-box">
                <p><strong>Solace Clinic of Alternative Medicine</strong></p>
                <p>Ayaan Tower Shop No 8, Ground Floor, Degloor Naka, Nanded, Maharashtra – 431604</p>
                <p>Phone / WhatsApp: +91 8378977703 | Email: info@clinic.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
