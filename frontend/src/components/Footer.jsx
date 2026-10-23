import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-container footer-main-content">
        <div className="footer-grid">
          {/* Column 1: Clinic & Doctor Overview */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <img
                src="/images/logo.jpeg"
                alt="Solace Clinic"
                className="footer-logo-img"
              />
              <div>
                <h4 className="footer-brand-title">Solace Clinic</h4>
                <p className="footer-brand-subtitle">Alternative Medicine</p>
              </div>
            </div>
            <p className="footer-about-text">
              Led by Dr. Sana Naeemuddin Qureshi, MD (Medicine) – Homeopathy. Dedicated to providing holistic, patient-centered homeopathic care and lasting wellness for you and your family.
            </p>
            <div className="footer-credentials">
              <span className="credential-badge">
                <i className="fas fa-certificate text-teal"></i> MCI Registered
              </span>
              <span className="credential-badge">
                <i className="fas fa-user-check text-teal"></i> 7+ Years Exp.
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-nav-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/doctor">Doctor Profile</Link>
              </li>
              <li>
                <Link to="/services">Medical Services</Link>
              </li>
              <li>
                <Link to="/facilities">Clinic Facilities</Link>
              </li>
              <li>
                <Link to="/gallery">Photo Gallery</Link>
              </li>
              <li>
                <Link to="/reviews">Patient Reviews</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: OPD Timings */}
          <div className="footer-col">
            <h5 className="footer-heading">OPD Schedule</h5>
            <div className="timing-schedule-box">
              <div className="schedule-row">
                <span className="day-label">Monday – Saturday:</span>
                <span className="time-val">12:00 PM – 8:00 PM</span>
              </div>
              <div className="schedule-sub">
                <small>Morning OPD: 12:00 PM – 3:00 PM</small>
                <small>Evening OPD: 5:00 PM – 8:00 PM</small>
              </div>
              <div className="schedule-row sunday">
                <span className="day-label">Sunday:</span>
                <span className="time-val closed-tag">Closed (Emergency on Call)</span>
              </div>
            </div>
            <div className="footer-cta-container">
              <Link to="/appointment" className="footer-appointment-btn">
                <i className="fas fa-calendar-check me-2"></i> Book Appointment
              </Link>
            </div>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="footer-col contact-col">
            <h5 className="footer-heading">Contact Details</h5>
            <ul className="footer-contact-list">
              <li>
                <i className="fas fa-map-marker-alt contact-icon"></i>
                <span>
                  Ayaan Tower Shop No 8, Ground Floor, Degloor Naka, Nanded, Maharashtra – 431604
                </span>
              </li>
              <li>
                <i className="fas fa-phone-alt contact-icon"></i>
                <a href="tel:+918378977703">+91 8378977703</a>
              </li>
              <li>
                <i className="fab fa-whatsapp contact-icon whatsapp-icon"></i>
                <a href="https://wa.me/918378977703" target="_blank" rel="noopener noreferrer">
                  +91 8378977703
                </a>
              </li>
              <li>
                <i className="fas fa-envelope contact-icon"></i>
                <a href="mailto:info@clinic.com">info@clinic.com</a>
              </li>
            </ul>
            <a
              href="https://www.google.com/maps/place/SOLACE+CLINIC/@19.147485,77.3249762,17z/data=!3m1!4b1!4m6!3m5!1s0x3bd1d635cd2deb21:0x5a4ef664371adaba!8m2!3d19.147485!4d77.3275565!16s%2Fg%2F11vl9g5p2m"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-directions-btn"
            >
              <i className="fas fa-directions me-2"></i> Get Directions (Google Maps)
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="site-container footer-bottom-container">
          <p className="copyright-text">
            © {new Date().getFullYear()} Solace Clinic of Alternative Medicine. All rights reserved.
          </p>
          <div className="footer-legal-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span className="dot-divider">•</span>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
