import React, { useState, useEffect } from 'react';
import appointmentService from '../services/appointmentService';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import './AppointmentForm.css';

const DEFAULT_TIME_SLOTS = [
  { value: '12:00 PM', label: '12:00 PM (Morning OPD)' },
  { value: '12:30 PM', label: '12:30 PM (Morning OPD)' },
  { value: '01:00 PM', label: '01:00 PM (Morning OPD)' },
  { value: '01:30 PM', label: '01:30 PM (Morning OPD)' },
  { value: '02:00 PM', label: '02:00 PM (Morning OPD)' },
  { value: '02:30 PM', label: '02:30 PM (Morning OPD)' },
  { value: '05:00 PM', label: '05:00 PM (Evening OPD)' },
  { value: '05:30 PM', label: '05:30 PM (Evening OPD)' },
  { value: '06:00 PM', label: '06:00 PM (Evening OPD)' },
  { value: '06:30 PM', label: '06:30 PM (Evening OPD)' },
  { value: '07:00 PM', label: '07:00 PM (Evening OPD)' },
  { value: '07:30 PM', label: '07:30 PM (Evening OPD)' },
];

const AppointmentForm = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    mobile: '',
    email: '',
    city: 'Nanded',
    appointmentDate: '',
    appointmentTime: '',
    appointmentType: 'consultation',
    doctor: 'Dr. Sana Naeemuddin Qureshi',
    problem: '',
    previousMedicalHistory: '',
    currentMedications: '',
    referral: '',
    insurance: '',
    whatsappNotification: true,
    emailNotification: false,
    agreeTerms: false,
  });

  const [availableSlots, setAvailableSlots] = useState(DEFAULT_TIME_SLOTS);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  // Minimum date today in YYYY-MM-DD
  const todayStr = new Date().toISOString().split('T')[0];

  // Fetch configured schedule if available from backend
  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await appointmentService.getSchedule();
        if (response?.data?.timeSlots) {
          const slots = response.data.timeSlots.map((slot) => ({
            value: slot,
            label: `${slot} (OPD Slot)`,
          }));
          setAvailableSlots(slots);
        }
      } catch (err) {
        // Fallback to DEFAULT_TIME_SLOTS gracefully
      }
    };
    fetchSchedule();
  }, []);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear field-level error on change
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  // Validate Form on Frontend
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const ageNum = parseInt(formData.age, 10);
    if (!formData.age || isNaN(ageNum) || ageNum < 1 || ageNum > 120) {
      newErrors.age = 'Please enter a valid age (1 - 120)';
    }

    if (!formData.gender) {
      newErrors.gender = 'Please select a gender';
    }

    const cleanPhone = formData.mobile.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length !== 10) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }

    if (formData.email && formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    if (!formData.city.trim()) {
      newErrors.city = 'Please enter your city';
    }

    if (!formData.appointmentDate) {
      newErrors.appointmentDate = 'Please select your preferred date';
    } else if (formData.appointmentDate < todayStr) {
      newErrors.appointmentDate = 'Appointment date cannot be in the past';
    }

    if (!formData.appointmentTime) {
      newErrors.appointmentTime = 'Please choose a preferred time slot';
    }

    if (!formData.doctor) {
      newErrors.doctor = 'Please select a doctor';
    }

    if (!formData.problem.trim() || formData.problem.trim().length < 5) {
      newErrors.problem = 'Please describe symptoms/problem in detail (at least 5 characters)';
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the Terms & Conditions and Privacy Policy';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError(null);

    if (!validateForm()) {
      const firstErrorKey = Object.keys(errors)[0];
      const element = document.getElementById(firstErrorKey);
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        name: formData.name.trim(),
        age: parseInt(formData.age, 10),
        gender: formData.gender,
        mobile: formData.mobile.replace(/[^0-9]/g, ''),
        email: formData.email.trim(),
        city: formData.city.trim(),
        appointmentDate: formData.appointmentDate,
        appointmentTime: formData.appointmentTime,
        appointmentType: formData.appointmentType,
        doctor: formData.doctor,
        problem: formData.problem.trim(),
        previousMedicalHistory: formData.previousMedicalHistory.trim(),
        currentMedications: formData.currentMedications.trim(),
        referral: formData.referral.trim(),
        insurance: formData.insurance.trim(),
        whatsappNotification: formData.whatsappNotification,
        emailNotification: formData.emailNotification,
      };

      const result = await appointmentService.createAppointment(payload);

      if (result.success && result.data) {
        setConfirmedBooking(result.data);
        // Reset form
        setFormData({
          name: '',
          age: '',
          gender: '',
          mobile: '',
          email: '',
          city: 'Nanded',
          appointmentDate: '',
          appointmentTime: '',
          appointmentType: 'consultation',
          doctor: 'Dr. Sana Naeemuddin Qureshi',
          problem: '',
          previousMedicalHistory: '',
          currentMedications: '',
          referral: '',
          insurance: '',
          whatsappNotification: true,
          emailNotification: false,
          agreeTerms: false,
        });
      } else {
        setApiError(result.message || 'Failed to confirm appointment. Please try again.');
      }
    } catch (err) {
      const msg =
        err.response?.data?.message ||
        (err.response?.data?.errors
          ? Object.values(err.response.data.errors).join(', ')
          : 'Unable to connect to clinic server. Please check your network or try again.');
      setApiError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeConfirmationModal = () => {
    setConfirmedBooking(null);
  };

  return (
    <div className="appointment-form-component">
      {apiError && <ErrorMessage message={apiError} onRetry={() => setApiError(null)} />}

      <form className="booking-form" onSubmit={handleSubmit} noValidate>
        {/* Section 1: Patient Information */}
        <div className="form-section-card">
          <div className="section-title-wrap">
            <div className="section-number-icon">1</div>
            <div>
              <h3 className="section-title">Patient Information</h3>
              <p className="section-subtitle">Please enter accurate details for medical record registration</p>
            </div>
          </div>

          <div className="form-fields-grid two-col">
            {/* Full Name */}
            <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
              <label htmlFor="name" className="field-label">
                Full Name <span className="req">*</span>
              </label>
              <div className="input-with-icon">
                <i className="fas fa-user input-icon"></i>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  className="form-input"
                  required
                />
              </div>
              {errors.name && <span className="field-error-text">{errors.name}</span>}
            </div>

            {/* Age */}
            <div className={`form-group ${errors.age ? 'has-error' : ''}`}>
              <label htmlFor="age" className="field-label">
                Age (Years) <span className="req">*</span>
              </label>
              <div className="input-with-icon">
                <i className="fas fa-birthday-cake input-icon"></i>
                <input
                  type="number"
                  id="age"
                  name="age"
                  min="1"
                  max="120"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="e.g. 32"
                  className="form-input"
                  required
                />
              </div>
              {errors.age && <span className="field-error-text">{errors.age}</span>}
            </div>

            {/* Gender */}
            <div className={`form-group ${errors.gender ? 'has-error' : ''}`}>
              <label htmlFor="gender" className="field-label">
                Gender <span className="req">*</span>
              </label>
              <div className="input-with-icon">
                <i className="fas fa-venus-mars input-icon"></i>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              {errors.gender && <span className="field-error-text">{errors.gender}</span>}
            </div>

            {/* Mobile */}
            <div className={`form-group ${errors.mobile ? 'has-error' : ''}`}>
              <label htmlFor="mobile" className="field-label">
                10-Digit Mobile Number <span className="req">*</span>
              </label>
              <div className="input-with-icon">
                <i className="fas fa-phone-alt input-icon"></i>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  maxLength="10"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="e.g. 9876543210"
                  className="form-input"
                  required
                />
              </div>
              {errors.mobile && <span className="field-error-text">{errors.mobile}</span>}
            </div>

            {/* Email */}
            <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
              <label htmlFor="email" className="field-label">
                Email Address (Optional)
              </label>
              <div className="input-with-icon">
                <i className="fas fa-envelope input-icon"></i>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. patient@example.com"
                  className="form-input"
                />
              </div>
              {errors.email && <span className="field-error-text">{errors.email}</span>}
            </div>

            {/* City */}
            <div className={`form-group ${errors.city ? 'has-error' : ''}`}>
              <label htmlFor="city" className="field-label">
                City / Town <span className="req">*</span>
              </label>
              <div className="input-with-icon">
                <i className="fas fa-map-marker-alt input-icon"></i>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="e.g. Nanded"
                  className="form-input"
                  required
                />
              </div>
              {errors.city && <span className="field-error-text">{errors.city}</span>}
            </div>
          </div>
        </div>

        {/* Section 2: Appointment Details */}
        <div className="form-section-card">
          <div className="section-title-wrap">
            <div className="section-number-icon">2</div>
            <div>
              <h3 className="section-title">Appointment Schedule & Doctor</h3>
              <p className="section-subtitle">Select your preferred date, OPD timing slot, and type of visit</p>
            </div>
          </div>

          <div className="form-fields-grid two-col">
            {/* Preferred Date */}
            <div className={`form-group ${errors.appointmentDate ? 'has-error' : ''}`}>
              <label htmlFor="appointmentDate" className="field-label">
                Preferred Date <span className="req">*</span>
              </label>
              <div className="input-with-icon">
                <i className="fas fa-calendar-alt input-icon"></i>
                <input
                  type="date"
                  id="appointmentDate"
                  name="appointmentDate"
                  min={todayStr}
                  value={formData.appointmentDate}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              {errors.appointmentDate && (
                <span className="field-error-text">{errors.appointmentDate}</span>
              )}
            </div>

            {/* Preferred Time Slot */}
            <div className={`form-group ${errors.appointmentTime ? 'has-error' : ''}`}>
              <label htmlFor="appointmentTime" className="field-label">
                Preferred OPD Time Slot <span className="req">*</span>
              </label>
              <div className="input-with-icon">
                <i className="fas fa-clock input-icon"></i>
                <select
                  id="appointmentTime"
                  name="appointmentTime"
                  value={formData.appointmentTime}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  <option value="">Select an OPD Time Slot</option>
                  {availableSlots.map((slot) => (
                    <option key={slot.value} value={slot.value}>
                      {slot.label}
                    </option>
                  ))}
                </select>
              </div>
              {errors.appointmentTime && (
                <span className="field-error-text">{errors.appointmentTime}</span>
              )}
            </div>

            {/* Appointment Type */}
            <div className={`form-group ${errors.appointmentType ? 'has-error' : ''}`}>
              <label htmlFor="appointmentType" className="field-label">
                Appointment Type <span className="req">*</span>
              </label>
              <div className="input-with-icon">
                <i className="fas fa-hospital-user input-icon"></i>
                <select
                  id="appointmentType"
                  name="appointmentType"
                  value={formData.appointmentType}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  <option value="consultation">General Consultation (In-Clinic)</option>
                  <option value="followup">Follow-up Visit</option>
                  <option value="online">Online / Telephonic Consultation</option>
                </select>
              </div>
              {errors.appointmentType && (
                <span className="field-error-text">{errors.appointmentType}</span>
              )}
            </div>

            {/* Doctor Selection */}
            <div className={`form-group ${errors.doctor ? 'has-error' : ''}`}>
              <label htmlFor="doctor" className="field-label">
                Consulting Doctor <span className="req">*</span>
              </label>
              <div className="input-with-icon">
                <i className="fas fa-user-md input-icon"></i>
                <select
                  id="doctor"
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  <option value="Dr. Sana Naeemuddin Qureshi">
                    Dr. Sana Naeemuddin Qureshi, MD (Medicine) – Homeopathy
                  </option>
                </select>
              </div>
              {errors.doctor && <span className="field-error-text">{errors.doctor}</span>}
            </div>
          </div>

          {/* Health Problem Description */}
          <div className={`form-group full-width ${errors.problem ? 'has-error' : ''}`}>
            <label htmlFor="problem" className="field-label">
              Describe Your Health Symptoms / Concerns <span className="req">*</span>
            </label>
            <textarea
              id="problem"
              name="problem"
              rows="4"
              value={formData.problem}
              onChange={handleChange}
              placeholder="Please describe your symptoms, duration, pain intensity, or primary medical problem in detail..."
              className="form-textarea"
              required
            ></textarea>
            {errors.problem && <span className="field-error-text">{errors.problem}</span>}
          </div>

          {/* Previous Medical History */}
          <div className="form-group full-width">
            <label htmlFor="previousMedicalHistory" className="field-label">
              Previous Medical History (Optional)
            </label>
            <textarea
              id="previousMedicalHistory"
              name="previousMedicalHistory"
              rows="2"
              value={formData.previousMedicalHistory}
              onChange={handleChange}
              placeholder="Any past illnesses, surgeries, chronic conditions (e.g. Diabetes, BP, Thyroid), or known allergies..."
              className="form-textarea"
            ></textarea>
          </div>

          {/* Current Medications */}
          <div className="form-group full-width">
            <label htmlFor="currentMedications" className="field-label">
              Current Medications (Optional)
            </label>
            <textarea
              id="currentMedications"
              name="currentMedications"
              rows="2"
              value={formData.currentMedications}
              onChange={handleChange}
              placeholder="List any allopathic, ayurvedic, or homeopathic medications you are currently taking..."
              className="form-textarea"
            ></textarea>
          </div>
        </div>

        {/* Section 3: Additional Details & Notifications */}
        <div className="form-section-card">
          <div className="section-title-wrap">
            <div className="section-number-icon">3</div>
            <div>
              <h3 className="section-title">Additional Information & Preferences</h3>
              <p className="section-subtitle">Referral information, insurance, and notification preferences</p>
            </div>
          </div>

          <div className="form-fields-grid two-col">
            <div className="form-group">
              <label htmlFor="referral" className="field-label">
                Referred By (Optional)
              </label>
              <input
                type="text"
                id="referral"
                name="referral"
                value={formData.referral}
                onChange={handleChange}
                placeholder="Doctor name, family reference, or website"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="insurance" className="field-label">
                Insurance Details (Optional)
              </label>
              <input
                type="text"
                id="insurance"
                name="insurance"
                value={formData.insurance}
                onChange={handleChange}
                placeholder="Insurance provider name or policy reference"
                className="form-input"
              />
            </div>
          </div>

          <div className="checkbox-section">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="whatsappNotification"
                checked={formData.whatsappNotification}
                onChange={handleChange}
                className="form-checkbox"
              />
              <span className="checkbox-text">
                <i className="fab fa-whatsapp text-success me-1"></i> Send appointment confirmation & reminders via WhatsApp
              </span>
            </label>

            <label className="checkbox-label">
              <input
                type="checkbox"
                name="emailNotification"
                checked={formData.emailNotification}
                onChange={handleChange}
                className="form-checkbox"
              />
              <span className="checkbox-text">
                <i className="fas fa-envelope text-primary me-1"></i> Send copy of booking details to my email
              </span>
            </label>

            <label className={`checkbox-label terms-label ${errors.agreeTerms ? 'has-error' : ''}`}>
              <input
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="form-checkbox"
                required
              />
              <span className="checkbox-text">
                I agree to the <a href="/terms" target="_blank" rel="noreferrer">Terms & Conditions</a> and <a href="/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a> of Solace Clinic. <span className="req">*</span>
              </span>
            </label>
            {errors.agreeTerms && <span className="field-error-text terms-error">{errors.agreeTerms}</span>}
          </div>
        </div>

        {/* Submit Button */}
        <div className="form-action-bar">
          <button
            type="submit"
            className="submit-appointment-btn"
            disabled={isSubmitting}
            id="bookAppointmentSubmitBtn"
          >
            {isSubmitting ? (
              <span className="btn-loading-content">
                <LoadingSpinner size="small" message="" />
                <span>Confirming Booking with Clinic...</span>
              </span>
            ) : (
              <>
                <i className="fas fa-calendar-check me-2"></i>
                <span>Confirm & Book Appointment</span>
              </>
            )}
          </button>
          <p className="privacy-reassurance">
            <i className="fas fa-lock me-1"></i> Your medical details are encrypted, kept strictly confidential, and stored securely in accordance with medical data privacy guidelines.
          </p>
        </div>
      </form>

      {/* Confirmation Success Modal */}
      {confirmedBooking && (
        <div className="confirmation-modal-backdrop" onClick={closeConfirmationModal}>
          <div className="confirmation-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="confirmation-header">
              <div className="success-badge-icon">
                <i className="fas fa-check"></i>
              </div>
              <h3 className="modal-title">Appointment Confirmed!</h3>
              <p className="modal-subtitle">
                Your appointment has been registered in the clinic database.
              </p>
            </div>

            <div className="booking-receipt-card">
              <div className="receipt-row header-row">
                <span className="receipt-label">Appointment ID:</span>
                <span className="receipt-val id-highlight">{confirmedBooking.appointmentId}</span>
              </div>
              <div className="receipt-row">
                <span className="receipt-label">Patient Name:</span>
                <span className="receipt-val">{confirmedBooking.name}</span>
              </div>
              <div className="receipt-row">
                <span className="receipt-label">Doctor:</span>
                <span className="receipt-val">{confirmedBooking.doctor}</span>
              </div>
              <div className="receipt-row">
                <span className="receipt-label">Date:</span>
                <span className="receipt-val">
                  {new Date(confirmedBooking.appointmentDate).toLocaleDateString('en-IN', {
                    weekday: 'short',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
              </div>
              <div className="receipt-row">
                <span className="receipt-label">Time Slot:</span>
                <span className="receipt-val time-highlight">{confirmedBooking.appointmentTime}</span>
              </div>
              <div className="receipt-row">
                <span className="receipt-label">Consultation Type:</span>
                <span className="receipt-val capitalize">{confirmedBooking.appointmentType}</span>
              </div>
              <div className="receipt-row">
                <span className="receipt-label">Registered Mobile:</span>
                <span className="receipt-val">+91 {confirmedBooking.mobile}</span>
              </div>
            </div>

            <div className="modal-guidance-box">
              <p>
                <i className="fas fa-info-circle me-1"></i> Please arrive 10 minutes prior to your time slot at <strong>Solace Clinic, Ayaan Tower, Degloor Naka, Nanded</strong>.
              </p>
            </div>

            <div className="modal-action-bar">
              <button
                type="button"
                className="modal-print-btn"
                onClick={() => window.print()}
              >
                <i className="fas fa-print me-2"></i> Print Slip
              </button>
              <button
                type="button"
                className="modal-done-btn"
                onClick={closeConfirmationModal}
              >
                Close & Return
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentForm;
