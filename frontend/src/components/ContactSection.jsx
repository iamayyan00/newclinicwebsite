import React, { useState } from 'react';
import appointmentService from '../services/appointmentService';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
    urgent: false,
    agreeTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Valid email address is required';
    }
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length !== 10) {
      errs.phone = '10-digit phone number is required';
    }
    if (!formData.message.trim() || formData.message.trim().length < 5) {
      errs.message = 'Please enter a message (at least 5 characters)';
    }
    if (!formData.agreeTerms) {
      errs.agreeTerms = 'Please agree to the privacy policy';
    }
    setValidationErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage(null);
    setErrorMessage(null);

    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await appointmentService.sendContactMessage({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.replace(/[^0-9]/g, ''),
        subject: formData.subject,
        message: formData.message.trim(),
        urgent: formData.urgent,
      });

      if (response.success) {
        setSuccessMessage(
          response.message || 'Your message has been received! Our clinic team will respond shortly.'
        );
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'general',
          message: '',
          urgent: false,
          agreeTerms: false,
        });
      }
    } catch (err) {
      setErrorMessage(
        err.response?.data?.message || 'Failed to send message. Please reach us directly via phone or WhatsApp.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-component-container">
      <div className="contact-grid">
        {/* Contact Form Column */}
        <div className="contact-form-column">
          <div className="contact-form-card">
            <h3 className="contact-form-title">
              <i className="fas fa-paper-plane text-primary me-2"></i> Send Us a Message
            </h3>
            <p className="contact-form-sub">
              Have a question about treatments or OPD timings? Leave us a note and we will get back to you.
            </p>

            {successMessage && (
              <div className="contact-success-banner">
                <i className="fas fa-check-circle"></i>
                <p>{successMessage}</p>
              </div>
            )}

            {errorMessage && <ErrorMessage message={errorMessage} onRetry={() => setErrorMessage(null)} />}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-two-col">
                <div className={`contact-field-group ${validationErrors.name ? 'has-error' : ''}`}>
                  <label htmlFor="contactName">Full Name *</label>
                  <input
                    type="text"
                    id="contactName"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Anand Kulkarni"
                    required
                  />
                  {validationErrors.name && <span className="field-error">{validationErrors.name}</span>}
                </div>

                <div className={`contact-field-group ${validationErrors.email ? 'has-error' : ''}`}>
                  <label htmlFor="contactEmail">Email Address *</label>
                  <input
                    type="email"
                    id="contactEmail"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. anand@example.com"
                    required
                  />
                  {validationErrors.email && <span className="field-error">{validationErrors.email}</span>}
                </div>
              </div>

              <div className="form-two-col">
                <div className={`contact-field-group ${validationErrors.phone ? 'has-error' : ''}`}>
                  <label htmlFor="contactPhone">Phone Number *</label>
                  <input
                    type="tel"
                    id="contactPhone"
                    name="phone"
                    maxLength="10"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    required
                  />
                  {validationErrors.phone && <span className="field-error">{validationErrors.phone}</span>}
                </div>

                <div className="contact-field-group">
                  <label htmlFor="contactSubject">Subject *</label>
                  <select
                    id="contactSubject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="general">General Medical Inquiry</option>
                    <option value="appointment">Appointment Questions</option>
                    <option value="feedback">Feedback & Suggestions</option>
                    <option value="complaint">Patient Care Support</option>
                    <option value="other">Other Information</option>
                  </select>
                </div>
              </div>

              <div className={`contact-field-group ${validationErrors.message ? 'has-error' : ''}`}>
                <label htmlFor="contactMessage">Message *</label>
                <textarea
                  id="contactMessage"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can Dr. Sana and Solace Clinic assist you?"
                  required
                ></textarea>
                {validationErrors.message && <span className="field-error">{validationErrors.message}</span>}
              </div>

              <div className="checkbox-row">
                <label className="checkbox-inline">
                  <input
                    type="checkbox"
                    name="urgent"
                    checked={formData.urgent}
                    onChange={handleChange}
                  />
                  <span>Mark as urgent priority inquiry</span>
                </label>
              </div>

              <div className="checkbox-row">
                <label className={`checkbox-inline ${validationErrors.agreeTerms ? 'has-error' : ''}`}>
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    required
                  />
                  <span>
                    I agree to the <a href="/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a> and consent to clinic staff contacting me. *
                  </span>
                </label>
                {validationErrors.agreeTerms && (
                  <span className="field-error">{validationErrors.agreeTerms}</span>
                )}
              </div>

              <button type="submit" className="contact-submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <LoadingSpinner size="small" message="Sending..." />
                ) : (
                  <>
                    <i className="fas fa-paper-plane me-2"></i> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Clinic Info & Location Column */}
        <div className="contact-info-column">
          {/* Quick Contact Card */}
          <div className="info-box-card">
            <h4 className="info-box-title">
              <i className="fas fa-phone-volume text-primary me-2"></i> Quick Communication
            </h4>
            <div className="info-actions-list">
              <div className="info-action-item">
                <div className="info-icon-badge phone">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="info-text">
                  <span className="info-item-label">Telephone</span>
                  <a href="tel:+918378977703" className="info-item-link">
                    +91 8378977703
                  </a>
                </div>
              </div>

              <div className="info-action-item">
                <div className="info-icon-badge whatsapp">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div className="info-text">
                  <span className="info-item-label">WhatsApp Consultation</span>
                  <a
                    href="https://wa.me/918378977703"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="info-item-link text-whatsapp"
                  >
                    +91 8378977703 (Chat Now)
                  </a>
                </div>
              </div>

              <div className="info-action-item">
                <div className="info-icon-badge email">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="info-text">
                  <span className="info-item-label">Clinic Email</span>
                  <a href="mailto:info@clinic.com" className="info-item-link">
                    info@clinic.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Clinic Address Card */}
          <div className="info-box-card">
            <h4 className="info-box-title">
              <i className="fas fa-map-marked-alt text-primary me-2"></i> Clinic Location
            </h4>
            <div className="clinic-address-block">
              <h5 className="clinic-name-heading">Solace Clinic of Alternative Medicine</h5>
              <p className="address-text">
                <i className="fas fa-building text-primary me-2"></i>
                Ayaan Tower Shop No 8, Ground Floor, Degloor Naka, Nanded, Maharashtra – 431604
              </p>
              <a
                href="https://www.google.com/maps/place/SOLACE+CLINIC/@19.147485,77.3249762,17z/data=!3m1!4b1!4m6!3m5!1s0x3bd1d635cd2deb21:0x5a4ef664371adaba!8m2!3d19.147485!4d77.3275565!16s%2Fg%2F11vl9g5p2m"
                target="_blank"
                rel="noopener noreferrer"
                className="directions-link-btn"
              >
                <i className="fas fa-directions me-2"></i> Open in Google Maps (Get Directions)
              </a>
            </div>
          </div>

          {/* Landmarks & Public Transport */}
          <div className="info-box-card">
            <h4 className="info-box-title">
              <i className="fas fa-bus-alt text-primary me-2"></i> Nearby Landmarks & Access
            </h4>
            <ul className="landmarks-list">
              <li>
                <i className="fas fa-hospital text-danger me-2"></i>
                <span><strong>District Hospital:</strong> 500 meters</span>
              </li>
              <li>
                <i className="fas fa-train text-amber me-2"></i>
                <span><strong>Nanded Railway Station:</strong> ~2.0 km (Auto available, ₹50-70)</span>
              </li>
              <li>
                <i className="fas fa-bus text-success me-2"></i>
                <span><strong>Central Bus Stand:</strong> ~2.5 km</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
