import React from 'react';
import './ReviewCard.css';

const ReviewCard = ({
  name,
  rating = 5,
  date,
  comment,
  service,
  isVerified = true,
  avatarText,
}) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star text-gold"></i>);
    }
    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt text-gold"></i>);
    }
    while (stars.length < 5) {
      stars.push(<i key={`empty-${stars.length}`} className="far fa-star text-gold"></i>);
    }
    return stars;
  };

  const initials = avatarText || name.split(' ').map((n) => n[0]).join('').slice(0, 2);

  return (
    <div className="review-component-card">
      <div className="review-card-top">
        <div className="reviewer-info">
          <div className="reviewer-avatar">
            <span>{initials}</span>
          </div>
          <div>
            <h4 className="reviewer-name">{name}</h4>
            <div className="review-stars-row">{renderStars()}</div>
          </div>
        </div>
        {date && <span className="review-date-tag">{date}</span>}
      </div>

      <p className="review-text">"{comment}"</p>

      <div className="review-meta-footer">
        {isVerified && (
          <span className="verified-badge">
            <i className="fas fa-check-circle"></i> Verified Patient
          </span>
        )}
        {service && (
          <span className="service-badge">
            <i className="fas fa-stethoscope"></i> {service}
          </span>
        )}
      </div>
    </div>
  );
};

export default ReviewCard;
