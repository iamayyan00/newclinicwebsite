import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReviewCard from '../components/ReviewCard';
import './Reviews.css';

const REVIEWS_DATA = [
  {
    name: 'Rahul Sharma',
    rating: 5,
    date: '2 days ago',
    service: 'General Consultation',
    comment: 'Excellent doctor and very caring staff. The appointment process was very smooth and convenient. Dr. Sana took time to understand my problem and provided effective treatment. Highly recommended!',
    isVerified: true,
  },
  {
    name: 'Priya Patel',
    rating: 5,
    date: '1 week ago',
    service: 'Diabetes Care',
    comment: 'Very professional and experienced doctor. The clinic is clean and well-maintained. Staff is very cooperative. I came for diabetes treatment and the guidance provided was excellent. My sugar levels are now under control.',
    isVerified: true,
  },
  {
    name: 'Amit Kumar',
    rating: 4.5,
    date: '2 weeks ago',
    service: 'BP & Heart Care',
    comment: 'Good experience overall. Doctor was thorough in diagnosis. The only suggestion is to reduce waiting time during peak hours. Otherwise, everything is perfect - treatment, staff, and facilities.',
    isVerified: true,
  },
  {
    name: 'Sunita Reddy',
    rating: 5,
    date: '1 month ago',
    service: 'Child Care',
    comment: 'I brought my child for consultation and the doctor was very gentle and patient with kids. The clinic has separate waiting areas which is very thoughtful. My child felt comfortable throughout the visit.',
    isVerified: true,
  },
];

const Reviews = () => {
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    service: 'General Consultation',
    comment: '',
  });
  const [submissionFeedback, setSubmissionFeedback] = useState(null);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!newReview.name.trim() || !newReview.comment.trim()) return;

    setSubmissionFeedback(
      'Thank you for submitting your feedback! In accordance with clinic verification guidelines, submitted patient testimonials are reviewed by our team before public posting.'
    );
    setNewReview({
      name: '',
      rating: 5,
      service: 'General Consultation',
      comment: '',
    });
  };

  return (
    <div className="reviews-page">
      {/* Banner */}
      <section className="page-hero-banner">
        <div className="site-container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="crumb-sep">/</span>
            <span className="crumb-active">Patient Reviews</span>
          </nav>
          <h1 className="page-hero-title">Patient Testimonials & Reviews</h1>
          <p className="page-hero-subtitle">
            Authentic Feedback from Over 500 Patients Healed at Solace Clinic of Alternative Medicine
          </p>
        </div>
      </section>

      {/* Main Reviews Layout */}
      <section className="reviews-main-section">
        <div className="site-container">
          {/* Overall Rating Summary Bar */}
          <div className="overall-rating-card">
            <div className="rating-score-col">
              <span className="score-big">4.9</span>
              <div className="score-stars">
                <i className="fas fa-star text-gold"></i>
                <i className="fas fa-star text-gold"></i>
                <i className="fas fa-star text-gold"></i>
                <i className="fas fa-star text-gold"></i>
                <i className="fas fa-star text-gold"></i>
              </div>
              <p className="score-label">Based on 500+ Verified Patient Reviews</p>
            </div>

            <div className="rating-bars-col">
              <div className="bar-row">
                <span className="star-label">5 Stars</span>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: '85%' }}></div>
                </div>
                <span className="pct-label">85%</span>
              </div>
              <div className="bar-row">
                <span className="star-label">4 Stars</span>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: '10%' }}></div>
                </div>
                <span className="pct-label">10%</span>
              </div>
              <div className="bar-row">
                <span className="star-label">3 Stars</span>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: '3%' }}></div>
                </div>
                <span className="pct-label">3%</span>
              </div>
              <div className="bar-row">
                <span className="star-label">2 Stars</span>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: '1%' }}></div>
                </div>
                <span className="pct-label">1%</span>
              </div>
              <div className="bar-row">
                <span className="star-label">1 Star</span>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: '1%' }}></div>
                </div>
                <span className="pct-label">1%</span>
              </div>
            </div>
          </div>

          <div className="reviews-layout-grid">
            {/* Reviews Column */}
            <div className="reviews-feed-column">
              <h3 className="feed-heading">Recent Verified Reviews</h3>
              <div className="reviews-stack">
                {REVIEWS_DATA.map((rev, idx) => (
                  <ReviewCard key={idx} {...rev} />
                ))}
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="reviews-sidebar-column">
              {/* Google Reviews Card */}
              <div className="google-rating-box">
                <div className="google-header">
                  <i className="fab fa-google google-icon"></i>
                  <div>
                    <h4 className="google-score">4.8 Stars on Google</h4>
                    <p className="google-count">Solace Clinic, Nanded</p>
                  </div>
                </div>
                <div className="google-review-snippet">
                  <p className="snippet-text">
                    "Best medical clinic in Nanded! Doctor is very experienced and staff is helpful."
                  </p>
                  <span className="snippet-author">— Vikram Singh</span>
                </div>
                <div className="google-review-snippet">
                  <p className="snippet-text">
                    "Very clean and professional environment. Treatment was effective."
                  </p>
                  <span className="snippet-author">— Anjali Deshmukh</span>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="trust-indicators-box">
                <h4 className="trust-title">Why Patients Trust Us</h4>
                <ul className="trust-list">
                  <li>
                    <i className="fas fa-check-circle text-success"></i>
                    <span><strong>500+</strong> Documented Satisfied Cases</span>
                  </li>
                  <li>
                    <i className="fas fa-shield-alt text-primary"></i>
                    <span><strong>MCI Registered</strong> Doctor on Premise</span>
                  </li>
                  <li>
                    <i className="fas fa-certificate text-gold"></i>
                    <span><strong>7+ Years</strong> Consistent Care</span>
                  </li>
                  <li>
                    <i className="fas fa-heart text-danger"></i>
                    <span>Gentle, Natural Therapies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Submit Patient Review Section */}
          <div className="submit-review-card-container">
            <div className="submit-review-card">
              <h3>Share Your Treatment Experience</h3>
              <p className="submit-review-sub">
                Have you consulted Dr. Sana at Solace Clinic? Your feedback helps fellow patients find holistic healthcare.
              </p>

              {submissionFeedback ? (
                <div className="review-submitted-banner">
                  <i className="fas fa-check-circle"></i>
                  <p>{submissionFeedback}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="add-review-form">
                  <div className="form-fields-grid two-col">
                    <div className="form-group">
                      <label htmlFor="revName" className="field-label">Your Name *</label>
                      <input
                        type="text"
                        id="revName"
                        value={newReview.name}
                        onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                        placeholder="e.g. Anand Kulkarni"
                        className="form-input"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="revRating" className="field-label">Rating *</label>
                      <select
                        id="revRating"
                        value={newReview.rating}
                        onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value, 10) })}
                        className="form-select"
                      >
                        <option value="5">⭐⭐⭐⭐⭐ 5 Stars (Exceptional)</option>
                        <option value="4">⭐⭐⭐⭐ 4 Stars (Very Good)</option>
                        <option value="3">⭐⭐⭐ 3 Stars (Good)</option>
                        <option value="2">⭐⭐ 2 Stars (Average)</option>
                        <option value="1">⭐ 1 Star (Needs Improvement)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="revService" className="field-label">Service Received</label>
                    <select
                      id="revService"
                      value={newReview.service}
                      onChange={(e) => setNewReview({ ...newReview, service: e.target.value })}
                      className="form-select"
                    >
                      <option value="General Consultation">General Medicine Consultation</option>
                      <option value="Diabetes Care">Diabetes Management</option>
                      <option value="Skin Treatment">Skin Treatment & Dermatology</option>
                      <option value="BP & Heart Care">BP & Heart Care</option>
                      <option value="Child Care">Pediatric Child Care</option>
                      <option value="Women Health">Women's Health</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="revComment" className="field-label">Your Feedback / Review *</label>
                    <textarea
                      id="revComment"
                      rows="3"
                      value={newReview.comment}
                      onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                      placeholder="Please share details about your recovery, doctor interaction, and clinic visit..."
                      className="form-textarea"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-rev-btn">
                    <i className="fas fa-paper-plane me-2"></i> Submit Feedback
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
