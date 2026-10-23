import React, { useState } from 'react';
import './GalleryGrid.css';

const GALLERY_DATA = [
  {
    id: 1,
    title: 'Main Reception Area',
    category: 'reception',
    description: 'Clean, welcoming reception area with dedicated patient assistance desk',
    image: '/gallery/reciption.jpeg',
    badge: 'Reception Desk',
  },
  {
    id: 2,
    title: 'Patient Waiting Lounge',
    category: 'reception',
    description: 'Comfortable air-conditioned waiting space for patients and family members',
    image: '/gallery/waiting-area.jpeg',
    badge: 'Waiting Lounge',
  },
  {
    id: 3,
    title: 'Doctor OPD Room',
    category: 'opd',
    description: 'Private, sanitized doctor consulting suite equipped with diagnostics',
    image: '/gallery/opd.jpeg',
    badge: 'Consultation Suite',
  },
  {
    id: 4,
    title: 'Homoeopathic Dispensary',
    category: 'pharma',
    description: 'Safe, genuine alternative medicine and German homeopathic pharmacy',
    image: '/gallery/medicine1.jpeg',
    badge: 'Dispensary',
  },
  {
    id: 5,
    title: 'Specialized Formulations',
    category: 'pharma',
    description: 'Individualized constitutional homeopathic remedies for chronic ailments',
    image: '/gallery/medicine2.jpeg',
    badge: 'Medicines',
  },
  {
    id: 6,
    title: 'Hygienic Corridor & Interior',
    category: 'cleanliness',
    description: 'Well-ventilated, thoroughly sanitized clinic hallway and patient care zone',
    image: '/gallery/full-clinic.jpeg',
    badge: 'Corridor',
  },
  {
    id: 7,
    title: 'Disinfected Medical Facility',
    category: 'cleanliness',
    description: 'Stringent sanitation and infection prevention protocols strictly observed',
    image: '/gallery/full-clinic-2.jpeg',
    badge: 'Sanitized Facility',
  },
  {
    id: 8,
    title: 'Professional Certifications',
    category: 'consultation',
    description: 'Accreditations, registration credentials and academic honors',
    image: '/gallery/certificates.jpeg',
    badge: 'Credentials',
  },
  {
    id: 9,
    title: 'Patient Consultation Session',
    category: 'consultation',
    description: 'Empathetic, in-depth consultation by Dr. Sana Naeemuddin Qureshi',
    image: '/gallery/consulting.jpeg',
    badge: 'Clinical Care',
  },
];

const CATEGORIES = [
  { key: 'all', label: 'All Photos' },
  { key: 'reception', label: 'Reception' },
  { key: 'opd', label: 'OPD Room' },
  { key: 'pharma', label: 'Pharmacy' },
  { key: 'cleanliness', label: 'Cleanliness' },
  { key: 'consultation', label: 'Consultation' },
];

const GalleryGrid = ({ limit }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalImage, setActiveModalImage] = useState(null);

  const filteredItems = GALLERY_DATA.filter((item) =>
    selectedCategory === 'all' ? true : item.category === selectedCategory
  );

  const displayItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  const openLightbox = (item) => {
    setActiveModalImage(item);
  };

  const closeLightbox = () => {
    setActiveModalImage(null);
  };

  const navigateLightbox = (direction) => {
    if (!activeModalImage) return;
    const currentIndex = displayItems.findIndex((i) => i.id === activeModalImage.id);
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = displayItems.length - 1;
    if (newIndex >= displayItems.length) newIndex = 0;
    setActiveModalImage(displayItems[newIndex]);
  };

  return (
    <div className="gallery-component">
      {/* Category Filter Tabs */}
      <div className="gallery-filter-bar">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            type="button"
            className={`gallery-filter-btn ${selectedCategory === cat.key ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="gallery-grid-layout">
        {displayItems.map((item) => (
          <div key={item.id} className="gallery-grid-card" onClick={() => openLightbox(item)}>
            <div className="gallery-img-container">
              <img
                src={item.image}
                alt={item.title}
                className="gallery-actual-img"
                loading="lazy"
              />
              <span className="gallery-badge-overlay">{item.badge}</span>
              <div className="gallery-hover-overlay">
                <i className="fas fa-search-plus overlay-zoom-icon"></i>
                <span className="overlay-view-text">Click to Zoom</span>
              </div>
            </div>
            <div className="gallery-card-caption">
              <h4 className="gallery-item-title">{item.title}</h4>
              <p className="gallery-item-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeModalImage && (
        <div className="lightbox-backdrop" onClick={closeLightbox}>
          <div className="lightbox-dialog" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={closeLightbox}
              aria-label="Close Preview"
            >
              <i className="fas fa-times"></i>
            </button>

            <button
              type="button"
              className="lightbox-nav-btn prev"
              onClick={() => navigateLightbox(-1)}
              aria-label="Previous Image"
            >
              <i className="fas fa-chevron-left"></i>
            </button>

            <button
              type="button"
              className="lightbox-nav-btn next"
              onClick={() => navigateLightbox(1)}
              aria-label="Next Image"
            >
              <i className="fas fa-chevron-right"></i>
            </button>

            <div className="lightbox-image-wrapper">
              <img
                src={activeModalImage.image}
                alt={activeModalImage.title}
                className="lightbox-full-image"
              />
            </div>

            <div className="lightbox-info-pane">
              <span className="lightbox-badge">{activeModalImage.badge}</span>
              <h3 className="lightbox-title">{activeModalImage.title}</h3>
              <p className="lightbox-desc">{activeModalImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;
