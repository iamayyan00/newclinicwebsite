import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import GalleryGrid from '../components/GalleryGrid';
import ReviewCard from '../components/ReviewCard';
import DoctorProfileCard from '../components/DoctorProfileCard';
import './Home.css';

const Home = () => {
  const featuredServices = [
    {
      id: 'general-med',
      title: 'General Medicine',
      icon: 'fas fa-stethoscope',
      colorScheme: 'teal',
      description: 'Comprehensive primary medical diagnosis and gentle homeopathic remedies for acute and chronic conditions.',
      symptoms: ['Fever & recurring infections', 'Cold, cough & sinusitis', 'Digestive and gastric disorders', 'Chronic fatigue & headache'],
      treatmentSteps: ['Consultation & full history intake', 'Constitutional assessment', 'Personalized remedies & follow-up'],
      duration: '20-30 min consultation',
    },
    {
      id: 'diabetes',
      title: 'Diabetes Management',
      icon: 'fas fa-tint',
      colorScheme: 'red',
      description: 'Holistic diabetes care focusing on metabolic balance, glycemic stabilization, and neuropathy prevention.',
      symptoms: ['Elevated blood glucose', 'Excessive thirst and fatigue', 'Slow healing cuts & numbness'],
      treatmentSteps: ['Blood glucose evaluation', 'Holistic metabolic therapy', 'Lifestyle & dietary guidance'],
      duration: 'Ongoing care with regular monitoring',
    },
    {
      id: 'skin',
      title: 'Skin Care & Dermatology',
      icon: 'fas fa-hand-holding-medical',
      colorScheme: 'green',
      description: 'Natural, steroid-free homeopathic therapeutics for chronic dermatological conditions with lasting results.',
      symptoms: ['Acne, pimples & blemishes', 'Eczema & allergic dermatitis', 'Psoriasis & fungal infections'],
      treatmentSteps: ['Detailed skin diagnosis', 'Individualized medicine prescription', 'Skin recovery monitoring'],
      duration: '2-8 weeks personalized plan',
    },
    {
      id: 'cardiac',
      title: 'BP & Heart Wellness',
      icon: 'fas fa-heartbeat',
      colorScheme: 'blue',
      description: 'Cardiovascular wellness management including digital blood pressure monitoring and heart disease prevention.',
      symptoms: ['High blood pressure (Hypertension)', 'Stress, palpitations & chest tightness', 'Cholesterol imbalances'],
      treatmentSteps: ['Vital check & BP recording', 'Cardiac risk assessment', 'Lifestyle guidance & supportive care'],
      duration: 'Monthly monitoring & check-ups',
    },
  ];

  const featuredReviews = [
    {
      name: 'Rahul Sharma',
      rating: 5,
      date: 'Recent Visit',
      service: 'General Consultation',
      comment: 'Excellent doctor and very caring staff. The appointment process was very smooth and convenient. Dr. Sana took time to understand my problem and provided effective treatment. Highly recommended!',
    },
    {
      name: 'Priya Patel',
      rating: 5,
      date: '1 week ago',
      service: 'Diabetes Care',
      comment: 'Very professional and experienced doctor. The clinic is clean and well-maintained. Staff is very cooperative. I came for diabetes treatment and the guidance provided was excellent. My sugar levels are now under control.',
    },
    {
      name: 'Sunita Reddy',
      rating: 5,
      date: '1 month ago',
      service: 'Child Care',
      comment: 'I brought my child for consultation and the doctor was very gentle and patient with kids. The clinic has separate waiting areas which is very thoughtful. My child felt comfortable throughout the visit.',
    },
  ];

  return (
    <div className="home-page-container">
      {/* Hero Section */}
      <HeroSection />

      {/* Quick Info Bar */}
      <section className="home-features-bar">
        <div className="site-container">
          <div className="features-grid">
            <div className="feature-item-box">
              <div className="feature-item-icon">
                <i className="fas fa-user-md"></i>
              </div>
              <div>
                <h4 className="feature-item-title">Expert Physician</h4>
                <p className="feature-item-desc">7+ Years of clinical healing experience in Nanded</p>
              </div>
            </div>

            <div className="feature-item-box">
              <div className="feature-item-icon emerald">
                <i className="fas fa-heart"></i>
              </div>
              <div>
                <h4 className="feature-item-title">Trusted Healthcare</h4>
                <p className="feature-item-desc">500+ Satisfied patients & families healed</p>
              </div>
            </div>

            <div className="feature-item-box">
              <div className="feature-item-icon blue">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div>
                <h4 className="feature-item-title">Safe & Hygienic</h4>
                <p className="feature-item-desc">Strict sanitation and infection-control standards</p>
              </div>
            </div>

            <div className="feature-item-box">
              <div className="feature-item-icon gold">
                <i className="fas fa-clock"></i>
              </div>
              <div>
                <h4 className="feature-item-title">OPD Timings</h4>
                <p className="feature-item-desc">12:00 PM – 8:00 PM (Monday to Saturday)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Introduction Banner */}
      <section className="home-doctor-spotlight-section">
        <div className="site-container">
          <div className="section-header-centered">
            <span className="section-pill-tag">Lead Medical Practitioner</span>
            <h2 className="section-main-title">Meet Your Doctor</h2>
            <p className="section-sub-title">
              Committed to empathetic consultation, evidence-informed alternative medicine, and long-term health.
            </p>
          </div>

          <div className="doctor-spotlight-wrap">
            <DoctorProfileCard detailed={true} />
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="home-services-section">
        <div className="site-container">
          <div className="services-section-top">
            <div>
              <span className="section-pill-tag">Specialized Treatments</span>
              <h2 className="section-main-title">Our Medical Services</h2>
              <p className="section-sub-title">
                Comprehensive alternative healthcare treatments tailored to every stage of life.
              </p>
            </div>
            <Link to="/services" className="view-all-services-btn">
              <span>View All Services</span>
              <i className="fas fa-arrow-right ms-2"></i>
            </Link>
          </div>

          <div className="services-cards-grid">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Gallery Showcase */}
      <section className="home-gallery-preview-section">
        <div className="site-container">
          <div className="section-header-centered">
            <span className="section-pill-tag">Virtual Clinic Tour</span>
            <h2 className="section-main-title">Clinic Infrastructure & Environment</h2>
            <p className="section-sub-title">
              Explore our modern OPD consultation rooms, waiting lounge, and pharmacy in Nanded.
            </p>
          </div>

          <GalleryGrid limit={6} />

          <div className="center-action-wrapper mt-4">
            <Link to="/gallery" className="outline-accent-btn">
              <i className="fas fa-images me-2"></i> Explore Full Photo Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Patient Reviews Section */}
      <section className="home-reviews-section">
        <div className="site-container">
          <div className="section-header-centered">
            <span className="section-pill-tag">Patient Testimonials</span>
            <h2 className="section-main-title">What Our Patients Say</h2>
            <p className="section-sub-title">
              Real experiences from patients who entrusted their wellness to Solace Clinic.
            </p>
          </div>

          <div className="reviews-cards-grid">
            {featuredReviews.map((rev, index) => (
              <ReviewCard key={index} {...rev} />
            ))}
          </div>

          <div className="center-action-wrapper mt-4">
            <Link to="/reviews" className="outline-accent-btn">
              <i className="fas fa-star text-gold me-2"></i> Read More Patient Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency & OPD Timing Banner */}
      <section className="home-timing-banner-section">
        <div className="site-container">
          <div className="timing-banner-card">
            <div className="timing-banner-content">
              <div className="live-status-chip">
                <span className="pulse-dot"></span>
                <span>Regular OPD Hours: 12:00 PM – 8:00 PM</span>
              </div>
              <h2 className="timing-banner-title">
                Need Medical Advice Today? We Are Here For You.
              </h2>
              <p className="timing-banner-text">
                Consultations are held Monday through Saturday at Ayaan Tower, Degloor Naka, Nanded. Avoid long waiting lines by booking your appointment in advance.
              </p>
              <div className="timing-banner-buttons">
                <Link to="/appointment" className="banner-book-btn">
                  <i className="fas fa-calendar-check me-2"></i> Book Appointment Now
                </Link>
                <a href="tel:+918378977703" className="banner-call-btn">
                  <i className="fas fa-phone-alt me-2"></i> Direct Call: +91 8378977703
                </a>
              </div>
            </div>
            <div className="timing-banner-meta">
              <div className="meta-card">
                <i className="fas fa-sun text-amber"></i>
                <div>
                  <strong>Morning OPD</strong>
                  <p>12:00 PM – 3:00 PM</p>
                </div>
              </div>
              <div className="meta-card">
                <i className="fas fa-moon text-primary"></i>
                <div>
                  <strong>Evening OPD</strong>
                  <p>5:00 PM – 8:00 PM</p>
                </div>
              </div>
              <div className="meta-card">
                <i className="fas fa-ambulance text-danger"></i>
                <div>
                  <strong>Emergency Support</strong>
                  <p>On-Call Assistance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
