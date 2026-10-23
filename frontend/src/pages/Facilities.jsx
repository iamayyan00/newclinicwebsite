import React from 'react';
import { Link } from 'react-router-dom';
import FacilityCard from '../components/FacilityCard';
import './Facilities.css';

const FACILITIES_DATA = [
  {
    title: 'Clean Waiting Area',
    icon: 'fas fa-couch',
    colorScheme: 'teal',
    description: 'Spacious and comfortable air-conditioned reception lounge with hygienic seating for patients and attending relatives.',
    features: ['Ergonomic cushioned seating', 'Fully air-conditioned atmosphere', 'Regular sanitization schedules', 'Informative health magazines & TV'],
  },
  {
    title: 'Pure Drinking Water',
    icon: 'fas fa-tint',
    colorScheme: 'blue',
    description: 'High-grade multi-stage RO purified drinking water facility available free of cost for all visitors and patients.',
    features: ['Multi-stage RO purification', 'Chilled & normal water dispenser', 'Eco-friendly disposable glasses', 'Certified regular water quality testing'],
  },
  {
    title: 'Hygienic Washrooms',
    icon: 'fas fa-restroom',
    colorScheme: 'green',
    description: 'Immaculately maintained and disinfected restroom facilities adhering to healthcare sanitation benchmarks.',
    features: ['Separate male and female facilities', 'Sanitized continuously throughout the day', 'Automated hand wash & sanitizers', 'Touch-free sanitary bins'],
  },
  {
    title: 'Digital BP & Vitals Check',
    icon: 'fas fa-heartbeat',
    colorScheme: 'red',
    description: 'Clinical grade digital diagnostic blood pressure and pulse monitoring equipment for accurate, instant evaluation.',
    features: ['Calibrated digital monitors', 'Instant systolic/diastolic printouts', 'Historical trend comparison', 'Arrhythmia detection indicators'],
  },
  {
    title: 'ECG & Nebulizer Support',
    icon: 'fas fa-lungs',
    colorScheme: 'teal',
    description: 'Modern 12-lead ECG recording system and medical-grade compressor nebulizer for immediate respiratory and cardiac comfort.',
    features: ['High-resolution 12-lead ECG', 'Instant digital diagnostic reporting', 'Compressor ultrasonic nebulization', 'Dedicated pediatric & adult inhalation masks'],
  },
  {
    title: 'Comprehensive First Aid',
    icon: 'fas fa-first-aid',
    colorScheme: 'green',
    description: 'Fully stocked first-aid station equipped for immediate emergency management, minor wound dressing, and stabilization.',
    features: ['Sterile emergency medicines', 'Antiseptic solutions & dressing pads', 'Burn care and sprain support kits', 'Emergency oxygen & stabilization tools'],
  },
  {
    title: 'Dedicated Parking Space',
    icon: 'fas fa-parking',
    colorScheme: 'amber',
    description: 'Convenient ground-level parking for two-wheelers and four-wheelers directly in front of Ayaan Tower.',
    features: ['Free patient parking', 'Separate slots for two-wheelers & cars', 'Easy wheelchair accessible entrance', 'Safe drop-off area'],
  },
  {
    title: '24/7 CCTV Security',
    icon: 'fas fa-video',
    colorScheme: 'blue',
    description: 'High-definition 24/7 CCTV surveillance cameras covering entryways, common corridors, and clinic surroundings for patient security.',
    features: ['High-definition night-vision cameras', 'Continuous digital recording', 'Monitored premises', 'Enhanced safety for women and children'],
  },
  {
    title: 'Fire Safety & Disaster Preparedness',
    icon: 'fas fa-fire-extinguisher',
    colorScheme: 'red',
    description: 'Full compliance with national commercial fire safety standards to safeguard all patients and clinical staff.',
    features: ['Certified ABC dry chemical extinguishers', 'Early-detection smoke and heat sensors', 'Clearly marked luminous emergency exits', 'Trained clinic staff in disaster evacuation'],
  },
];

const Facilities = () => {
  return (
    <div className="facilities-page">
      {/* Header Banner */}
      <section className="page-hero-banner">
        <div className="site-container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="crumb-sep">/</span>
            <span className="crumb-active">Facilities</span>
          </nav>
          <h1 className="page-hero-title">Clinic Facilities & Amenities</h1>
          <p className="page-hero-subtitle">
            Modern Medical Infrastructure, Patient Comfort, and Stringent Hygiene Standards at Solace Clinic
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="facilities-main-section">
        <div className="site-container">
          <div className="section-header-centered">
            <span className="section-pill-tag">Infrastructure</span>
            <h2 className="section-main-title">Designed for Your Comfort & Safety</h2>
            <p className="section-sub-title">
              We maintain high standards of clinical hygiene, modern medical diagnostics, and a welcoming atmosphere.
            </p>
          </div>

          <div className="facilities-cards-grid">
            {FACILITIES_DATA.map((facility, index) => (
              <FacilityCard key={index} {...facility} />
            ))}
          </div>
        </div>
      </section>

      {/* Facility Highlights CTA */}
      <section className="facility-cta-section">
        <div className="site-container">
          <div className="facility-cta-card">
            <h3>Visit Solace Clinic in Nanded</h3>
            <p>
              Experience a clean, friendly, and unhurried medical environment where your health is our foremost priority.
            </p>
            <div className="facility-cta-btns">
              <Link to="/appointment" className="btn-facility-cta primary">
                <i className="fas fa-calendar-check me-2"></i> Book Appointment
              </Link>
              <Link to="/gallery" className="btn-facility-cta secondary">
                <i className="fas fa-images me-2"></i> View Photos of Clinic
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
