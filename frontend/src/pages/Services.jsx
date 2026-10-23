import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import './Services.css';

const SERVICES_DATA = [
  {
    id: 'general-medicine',
    title: 'General Medicine',
    icon: 'fas fa-stethoscope',
    colorScheme: 'teal',
    description: 'Comprehensive primary care for all ages including clinical diagnosis, non-invasive therapies, and evidence-informed treatment of acute and chronic illnesses.',
    symptoms: [
      'Persistent fever and seasonal infections',
      'Common cold, recurrent cough, and sinusitis',
      'Headaches, migraines, and bodily pains',
      'Acidity, indigestion, and gastrointestinal distress',
    ],
    treatmentSteps: [
      'Initial consultation & constitutional case-taking',
      'Physical examination and vitals measurement',
      'Tailored homeopathic prescription and lifestyle advice',
      'Scheduled follow-up and health tracking',
    ],
    duration: '15 – 30 minutes initial consultation',
    faqs: [
      {
        question: 'Are general homeopathic treatments painful or invasive?',
        answer: 'General medicine consultations are entirely non-invasive and painless. Physical examination is gentle and diagnostic tests cause minimal discomfort.',
      },
      {
        question: 'How many days does recovery usually take?',
        answer: 'Recovery time varies between 2 to 7 days for acute seasonal illnesses, while chronic conditions show steady, lasting improvement over several weeks.',
      },
    ],
  },
  {
    id: 'diabetes-care',
    title: 'Diabetes Management',
    icon: 'fas fa-tint',
    colorScheme: 'red',
    description: 'Specialized holistic diabetes care focusing on blood sugar stabilization, metabolic revitalization, prevention of diabetic complications, and dietary harmony.',
    symptoms: [
      'Uncontrolled high blood sugar readings',
      'Excessive thirst, frequent urination, and fatigue',
      'Slow-healing cuts, recurrent skin infections',
      'Tingling sensations in hands and feet',
    ],
    treatmentSteps: [
      'Blood glucose and HbA1c review',
      'Holistic constitutional therapy',
      'Customized diabetic diet and exercise counseling',
      'Monthly monitoring and symptom reviews',
    ],
    duration: 'Ongoing clinical care with monthly follow-ups',
    faqs: [
      {
        question: 'Is blood glucose monitoring painful?',
        answer: 'Modern finger-prick testing causes only minor sensation, comparable to a tiny pinch.',
      },
      {
        question: 'Can homeopathic medicine be taken alongside existing allopathic drugs?',
        answer: 'Yes. Homeopathic medicines can safely complement your current treatment without adverse drug-drug interactions under Dr. Sana’s supervision.',
      },
    ],
  },
  {
    id: 'skin-treatment',
    title: 'Skin Care & Dermatology',
    icon: 'fas fa-hand-holding-medical',
    colorScheme: 'green',
    description: 'Natural, steroid-free dermatology therapies for diverse acute and chronic skin disorders, addressing internal constitutional imbalances for clean, healthy skin.',
    symptoms: [
      'Severe acne, cystic pimples, and post-acne marks',
      'Eczema, dry skin flares, and allergic rashes',
      'Fungal infections and ringworm',
      'Psoriasis, hyperpigmentation, and skin itching',
    ],
    treatmentSteps: [
      'Dermatological evaluation of lesions and triggers',
      'Root-cause constitutional analysis',
      'Gentle oral homeopathic remedies',
      'Follow-up skin rejuvenation assessment',
    ],
    duration: '2 – 8 weeks personalized therapeutic plan',
    faqs: [
      {
        question: 'Are there any harsh creams or steroids involved?',
        answer: 'No. Our treatments focus entirely on internal healing through gentle, non-steroidal homeopathic formulations without side effects.',
      },
      {
        question: 'When will I start observing visible improvement in my skin?',
        answer: 'Most patients notice reduced redness and itching within 1 to 2 weeks, with significant clearing over 4 to 8 weeks.',
      },
    ],
  },
  {
    id: 'bp-heart-care',
    title: 'BP & Heart Wellness',
    icon: 'fas fa-heartbeat',
    colorScheme: 'red',
    description: 'Cardiovascular wellness management including digital blood pressure monitoring, cholesterol regulation, stress management, and cardiac disease prevention.',
    symptoms: [
      'Elevated blood pressure readings (Hypertension)',
      'Sudden palpitations, heart flutter, or anxiety',
      'Shortness of breath on moderate exertion',
      'Dizziness and morning head heaviness',
    ],
    treatmentSteps: [
      'Comprehensive digital vital signs logging',
      'Cardiovascular risk screening',
      'Natural arterial regulation therapies',
      'Dietary salt moderation & stress reduction guidance',
    ],
    duration: 'Long-term management with monthly checks',
    faqs: [
      {
        question: 'How frequently should I get my blood pressure evaluated?',
        answer: 'Hypertensive patients should have regular bi-weekly or monthly assessments until readings stabilize consistently.',
      },
      {
        question: 'Does stress significantly impact BP readings?',
        answer: 'Yes. Chronic stress triggers adrenaline release which constricts arteries. Our holistic remedies specifically help calm nervous tension.',
      },
    ],
  },
  {
    id: 'child-care',
    title: 'Pediatric Child Care',
    icon: 'fas fa-baby',
    colorScheme: 'blue',
    description: 'Gentle, sweet-tasting pediatric healthcare designed for infants, toddlers, and young children. Free of bitter tastes, invasive injections, or grogginess.',
    symptoms: [
      'Recurrent childhood cold, flu, and tonsillitis',
      'Digestive colic, constipation, and poor appetite',
      'Childhood allergies, eczema, and asthma',
      'Immunity deficiencies and frequent seasonal infections',
    ],
    treatmentSteps: [
      'Child-friendly physical assessment',
      'Growth and developmental screening',
      'Sweet globule medication easily accepted by kids',
      'Pediatric nutritional guidance for parents',
    ],
    duration: 'Rapid relief for acute issues, gentle long-term immunity boost',
    faqs: [
      {
        question: 'Do children readily take homeopathic pills?',
        answer: 'Yes, homeopathic globules are sweet and dissolve easily in the mouth, eliminating any resistance or trauma often associated with medicines.',
      },
      {
        question: 'Is it safe for newborns and infants?',
        answer: 'Homeopathic remedies are exceptionally gentle, non-toxic, and safe for infants when prescribed by an experienced MD physician.',
      },
    ],
  },
  {
    id: 'women-health',
    title: "Women's Health & Wellness",
    icon: 'fas fa-female',
    colorScheme: 'pink',
    description: 'Dedicated healthcare for women across all stages of life, addressing hormonal imbalances, reproductive wellness, menstrual disorders, and emotional equilibrium.',
    symptoms: [
      'Irregular, painful, or heavy menstrual cycles',
      'Polycystic Ovarian Syndrome (PCOS / PCOD)',
      'Menopausal hot flashes, mood swings, and insomnia',
      'Hormonal acne, thyroid imbalance, and weight changes',
    ],
    treatmentSteps: [
      'Empathetic, confidential gynecological history review',
      'Hormonal balance assessment',
      'Constitutional homeopathic remedies',
      'Personalized nutrition and stress coping counseling',
    ],
    duration: 'Individualized 3 – 6 month holistic balancing cycle',
    faqs: [
      {
        question: 'Can PCOS/PCOD be managed naturally through homeopathy?',
        answer: 'Yes. Homeopathy stimulates the body’s endocrine system to restore regular ovulation and reduce cysts without synthetic hormone pills.',
      },
      {
        question: 'Are consultations completely confidential?',
        answer: 'Strict confidentiality and patient privacy are maintained for all medical records and consultations at Solace Clinic.',
      },
    ],
  },
];

const Services = () => {
  return (
    <div className="services-page">
      {/* Header Banner */}
      <section className="page-hero-banner">
        <div className="site-container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="crumb-sep">/</span>
            <span className="crumb-active">Services</span>
          </nav>
          <h1 className="page-hero-title">Our Medical Services</h1>
          <p className="page-hero-subtitle">
            Holistic, Gentle, and Comprehensive Healthcare Solutions for Every Member of Your Family
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="services-main-section">
        <div className="site-container">
          <div className="section-header-centered">
            <span className="section-pill-tag">Clinical Offerings</span>
            <h2 className="section-main-title">Specialized Treatments at Solace Clinic</h2>
            <p className="section-sub-title">
              Each treatment plan is customized by Dr. Sana Naeemuddin Qureshi after comprehensive case evaluation.
            </p>
          </div>

          <div className="all-services-grid">
            {SERVICES_DATA.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA Banner */}
      <section className="services-cta-banner">
        <div className="site-container">
          <div className="cta-banner-box">
            <div className="cta-text-content">
              <h3>Not Sure Which Treatment You Need?</h3>
              <p>
                Book a general consultation session with Dr. Sana Naeemuddin Qureshi. We will evaluate your complete medical history and guide you towards the right treatment path.
              </p>
            </div>
            <Link to="/appointment" className="cta-banner-action-btn">
              <i className="fas fa-calendar-check me-2"></i> Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
