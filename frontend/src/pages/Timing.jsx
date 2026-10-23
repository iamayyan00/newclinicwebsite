import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Timing.css';

const Timing = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [isOpenNow, setIsOpenNow] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Determine if clinic is currently open (Monday=1 through Saturday=6, 12:00 to 15:00 and 17:00 to 20:00)
  useEffect(() => {
    const day = currentDateTime.getDay(); // 0 is Sunday
    const hours = currentDateTime.getHours();
    const minutes = currentDateTime.getMinutes();
    const currentTimeInMinutes = hours * 60 + minutes;

    // Morning OPD: 12:00 PM (720 min) to 3:00 PM (900 min)
    // Evening OPD: 5:00 PM (1020 min) to 8:00 PM (1200 min)
    if (day !== 0) {
      if (
        (currentTimeInMinutes >= 720 && currentTimeInMinutes <= 900) ||
        (currentTimeInMinutes >= 1020 && currentTimeInMinutes <= 1200)
      ) {
        setIsOpenNow(true);
      } else {
        setIsOpenNow(false);
      }
    } else {
      setIsOpenNow(false);
    }
  }, [currentDateTime]);

  const formattedTimeStr = currentDateTime.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  const formattedDateStr = currentDateTime.toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="timing-page">
      {/* Banner */}
      <section className="page-hero-banner">
        <div className="site-container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="crumb-sep">/</span>
            <span className="crumb-active">OPD Timing</span>
          </nav>
          <h1 className="page-hero-title">Clinic OPD Hours & Schedule</h1>
          <p className="page-hero-subtitle">
            Reliable Medical Availability for Daily Outpatient Consultations in Nanded
          </p>
        </div>
      </section>

      {/* Live Status Hero Section */}
      <section className="timing-status-section">
        <div className="site-container">
          <div className="live-status-hero-card">
            <div className={`status-hero-pill ${isOpenNow ? 'status-open' : 'status-closed'}`}>
              <span className="live-pulsing-dot"></span>
              <span className="status-hero-label">{isOpenNow ? 'CLINIC OPEN NOW' : 'CLINIC CURRENTLY CLOSED'}</span>
            </div>

            <h2 className="live-clock-time">{formattedTimeStr}</h2>
            <p className="live-clock-date">{formattedDateStr}</p>
            <p className="live-status-note">
              {isOpenNow
                ? 'Dr. Sana is currently on duty at Solace Clinic. Walk-ins and pre-booked appointments are being received.'
                : 'Clinic OPD hours are 12:00 PM – 3:00 PM & 5:00 PM – 8:00 PM (Mon – Sat). You can still book your upcoming slot online.'}
            </p>
          </div>
        </div>
      </section>

      {/* OPD Slots Breakdown Grid */}
      <section className="timing-breakdown-section">
        <div className="site-container">
          <div className="section-header-centered">
            <span className="section-pill-tag">Daily Sessions</span>
            <h2 className="section-main-title">Outpatient Department (OPD) Hours</h2>
            <p className="section-sub-title">
              Our clinical hours are split into two daily shifts for patient flexibility.
            </p>
          </div>

          <div className="timing-slots-grid">
            {/* Morning Shift */}
            <div className="timing-shift-card morning">
              <div className="shift-header">
                <div className="shift-icon-wrap">
                  <i className="fas fa-sun"></i>
                </div>
                <div>
                  <h3 className="shift-title">Morning OPD Session</h3>
                  <span className="shift-days">Monday to Saturday</span>
                </div>
              </div>
              <div className="shift-time-display">12:00 PM – 3:00 PM</div>
              <ul className="shift-bullet-points">
                <li><i className="fas fa-check-circle text-success"></i> Full clinical case evaluations & constitutional intake</li>
                <li><i className="fas fa-check-circle text-success"></i> New patient registrations accepted</li>
                <li><i className="fas fa-check-circle text-success"></i> Homoeopathic pharmacy and dispensing active</li>
              </ul>
              <Link to="/appointment" className="btn-shift-book">
                <i className="fas fa-calendar-check me-2"></i> Book Morning Slot
              </Link>
            </div>

            {/* Evening Shift */}
            <div className="timing-shift-card evening">
              <div className="shift-header">
                <div className="shift-icon-wrap">
                  <i className="fas fa-moon"></i>
                </div>
                <div>
                  <h3 className="shift-title">Evening OPD Session</h3>
                  <span className="shift-days">Monday to Saturday</span>
                </div>
              </div>
              <div className="shift-time-display">5:00 PM – 8:00 PM</div>
              <ul className="shift-bullet-points">
                <li><i className="fas fa-check-circle text-success"></i> Follow-up visits & progress monitoring</li>
                <li><i className="fas fa-check-circle text-success"></i> Working professional & after-school pediatric slots</li>
                <li><i className="fas fa-check-circle text-success"></i> Emergency medication refills</li>
              </ul>
              <Link to="/appointment" className="btn-shift-book">
                <i className="fas fa-calendar-check me-2"></i> Book Evening Slot
              </Link>
            </div>
          </div>

          {/* Special Days & Sunday Info */}
          <div className="special-days-grid mt-4">
            <div className="special-day-box">
              <div className="special-icon-box text-danger">
                <i className="fas fa-calendar-times"></i>
              </div>
              <div>
                <h4 className="special-day-title">Sunday Routine</h4>
                <p className="special-day-status text-danger">Routine OPD Closed</p>
                <p className="special-day-desc">
                  Weekly staff rest day. Emergency consultations can be arranged on prior telephonic contact.
                </p>
              </div>
            </div>

            <div className="special-day-box">
              <div className="special-icon-box text-info">
                <i className="fas fa-bullhorn"></i>
              </div>
              <div>
                <h4 className="special-day-title">National & Festival Holidays</h4>
                <p className="special-day-status text-info">As Announced Prior</p>
                <p className="special-day-desc">
                  Advance notices are displayed on clinic notice boards and broadcasted to patients via WhatsApp.
                </p>
              </div>
            </div>

            <div className="special-day-box">
              <div className="special-icon-box text-success">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div>
                <h4 className="special-day-title">Urgent Contact</h4>
                <p className="special-day-status text-success">On-Call Available</p>
                <p className="special-day-desc">
                  Reach our clinic line at <strong>+91 8378977703</strong> for pressing symptoms outside routine hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines Card */}
      <section className="timing-guidelines-section">
        <div className="site-container">
          <div className="guidelines-card">
            <h3><i className="fas fa-clipboard-check text-primary me-2"></i> Patient Visit Guidelines</h3>
            <div className="guidelines-list">
              <div className="guideline-row">
                <span className="guide-icon"><i className="fas fa-clock"></i></span>
                <div>
                  <strong>Arrive 10 Minutes Early</strong>
                  <p>Kindly report at least 10 minutes before your scheduled appointment time to complete registration formalities.</p>
                </div>
              </div>
              <div className="guideline-row">
                <span className="guide-icon"><i className="fas fa-file-medical"></i></span>
                <div>
                  <strong>Bring Past Medical Reports</strong>
                  <p>Carry your earlier laboratory investigations, prescriptions, and discharge summaries if available for comprehensive evaluation.</p>
                </div>
              </div>
              <div className="guideline-row">
                <span className="guide-icon"><i className="fas fa-shield-alt"></i></span>
                <div>
                  <strong>Sanitization Protocols</strong>
                  <p>Please utilize the sanitization stations located at the reception upon entering.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Timing;
