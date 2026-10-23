import React from 'react';
import { Link } from 'react-router-dom';
import DoctorProfileCard from '../components/DoctorProfileCard';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Header Banner */}
      <section className="page-hero-banner">
        <div className="site-container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="crumb-sep">/</span>
            <span className="crumb-active">About Us</span>
          </nav>
          <h1 className="page-hero-title">About Solace Clinic</h1>
          <p className="page-hero-subtitle">
            A Journey of Compassion, Dedication, and Excellence in Alternative Medicine Since 2017
          </p>
        </div>
      </section>

      {/* Main Story & Statistics */}
      <section className="about-story-section">
        <div className="site-container">
          <div className="about-intro-grid">
            <div className="about-intro-text">
              <span className="sub-badge">Our Legacy & Mission</span>
              <h2 className="story-heading">
                Healing with Compassion & <span className="text-teal">Natural Medicine</span>
              </h2>
              <p className="story-paragraph lead-p">
                Solace Clinic of Alternative Medicine was founded in 2017 by Dr. Sana Naeemuddin Qureshi with a simple yet noble commitment: to provide accessible, gentle, and highly effective medical treatments to the people of Nanded and neighboring districts.
              </p>
              <p className="story-paragraph">
                What began as a focused consulting practice has evolved into a well-equipped clinical facility trusted by over 5,000 patients. We believe in addressing the root cause of illnesses rather than merely suppressing symptoms, utilizing constitutional homoeopathic medicine, modern lifestyle medicine, and empathetic clinical dialogue.
              </p>

              {/* Stats Grid */}
              <div className="about-stats-strip">
                <div className="stat-card">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Years of Service</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">5000+</span>
                  <span className="stat-label">Patients Healed</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Gentle Therapies</span>
                </div>
              </div>
            </div>

            <div className="about-intro-visual">
              <div className="visual-image-frame">
                <img
                  src="/images/full-clinic.jpeg"
                  alt="Solace Clinic Interior"
                  className="about-facility-image"
                />
                <div className="image-experience-tag">
                  <i className="fas fa-award"></i>
                  <div>
                    <strong>Established 2017</strong>
                    <small> Ayaan Tower Degloor Naka, Nanded</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="about-principles-section">
        <div className="site-container">
          <div className="section-header-centered">
            <span className="section-pill-tag">Why Patients Choose Us</span>
            <h2 className="section-main-title">Our Guiding Healthcare Values</h2>
            <p className="section-sub-title">
              Our clinical philosophy is centered around gentle, personalized medical care for every family member.
            </p>
          </div>

          <div className="principles-grid">
            <div className="principle-card">
              <div className="principle-icon-box">
                <i className="fas fa-leaf"></i>
              </div>
              <h3 className="principle-title">Holistic Healing</h3>
              <p className="principle-text">
                Treating the whole person—mind, body, and constitutional vitality—ensuring safe and long-lasting recovery.
              </p>
            </div>

            <div className="principle-card">
              <div className="principle-icon-box blue">
                <i className="fas fa-stethoscope"></i>
              </div>
              <h3 className="principle-title">Evidence-Informed Practice</h3>
              <p className="principle-text">
                Under the leadership of an MD-qualified physician, combining clinical diagnostics with homoeopathic medicine.
              </p>
            </div>

            <div className="principle-card">
              <div className="principle-icon-box gold">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3 className="principle-title">Patient-First Care</h3>
              <p className="principle-text">
                We spend dedicated time listening to your medical history, symptoms, and concerns without rushing.
              </p>
            </div>

            <div className="principle-card">
              <div className="principle-icon-box purple">
                <i className="fas fa-shield-virus"></i>
              </div>
              <h3 className="principle-title">Zero Side-Effects</h3>
              <p className="principle-text">
                Gentle alternative treatments safe for children, seniors, and long-term chronic condition management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Section Spotlight */}
      <section className="about-doctor-section">
        <div className="site-container">
          <div className="section-header-centered">
            <span className="section-pill-tag">Leadership</span>
            <h2 className="section-main-title">Chief Physician Profile</h2>
            <p className="section-sub-title">
              Dr. Sana Naeemuddin Qureshi brings 7+ years of dedication to patient health in Nanded.
            </p>
          </div>
          <div className="doctor-card-container">
            <DoctorProfileCard detailed={true} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
