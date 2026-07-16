import { ChevronDown, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import './Admissions.css';

const Admissions = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const location = useLocation();
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    grade: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState({ firstName: '', lastName: '', email: '', phone: '' });

  const namePattern = /^[A-Za-z][A-Za-z .'-]*$/;

  const validateField = (id, value) => {
    if (id === 'firstName' || id === 'lastName') {
      const label = id === 'firstName' ? "student's first name" : "student's last name";
      if (!value.trim()) return `Please enter the ${label}.`;
      if (!namePattern.test(value.trim())) return 'Use letters only.';
      return '';
    }
    if (id === 'email') {
      if (!value.trim()) return 'Please enter a parent/guardian email.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Enter a valid email address.';
      return '';
    }
    if (id === 'phone') {
      if (!value) return 'Please enter a phone number.';
      if (value.length !== 10) return 'Enter exactly 10 digits.';
      return '';
    }
    return '';
  };

  const sanitizePhone = (value) => value.replace(/\D/g, '').slice(0, 10);

  // Scroll to form if URL hash is present
  useEffect(() => {
    if (location.hash === '#apply-form' && formRef.current) {
      const timer = setTimeout(() => {
        formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    const nextValue = id === 'phone' ? sanitizePhone(value) : value;
    setFormData(prev => ({ ...prev, [id]: nextValue }));
    if (fieldErrors[id]) {
      setFieldErrors(prev => ({ ...prev, [id]: validateField(id, nextValue) }));
    }
  };

  const handleBlur = (e) => {
    const { id, value } = e.target;
    if (id in fieldErrors) {
      setFieldErrors(prev => ({ ...prev, [id]: validateField(id, value) }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nextFieldErrors = {
      firstName: validateField('firstName', formData.firstName),
      lastName: validateField('lastName', formData.lastName),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
    };
    if (Object.values(nextFieldErrors).some(Boolean)) {
      setFieldErrors(nextFieldErrors);
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    // Prepare payload formatted for email reading
    const payload = {
      "Student First Name": formData.firstName,
      "Student Last Name": formData.lastName,
      "Parent Email": formData.email,
      "Phone Number": formData.phone,
      "Applying for Grade": formData.grade === 'pre-primary' ? 'Pre-Primary (JrKG-SrKG)' :
                           formData.grade === 'primary' ? 'Primary (Balvatika-Std 8)' :
                           formData.grade === 'secondary' ? 'Secondary (Std 9-10)' : 'Higher Secondary (Std 11-12)',
      "Message/Inquiry": formData.message,
      "_subject": "New Admission Inquiry from SATTVA Website",
      "_captcha": "false"
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/thehetpatel143@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      if (data.success === "true") {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(data.message || "Failed to submit application. Please try again.");
      }
    } catch {
      setStatus('error');
      setErrorMessage("A network error occurred. Please check your connection and try again.");
    }
  };

  const faqs = [
    { q: "What is the age cutoff for JrKG admission?", a: "Children must be 3 years old by June 1st of the academic enrollment year." },
    { q: "Do you offer transportation services?", a: "Yes, we operate a safe and comprehensive GPS-enabled school transport bus service covering Singarwa, Bhuvaladi, Odhav, Vastral, Nikol, and other surrounding parts of Ahmedabad." },
    { q: "What is the medium of instruction?", a: "Every standard from JrKG to Std 12 is offered in both English and Gujarati medium under the GSEB curriculum." },
    { q: "Can we schedule a campus tour?", a: "Absolutely! Campus tours can be scheduled during school office hours. Please contact the admissions office at +91 97144 81717 to book your visit." }
  ];

  return (
    <div className="admissions-page animate-fade-in">
      <PageHeader
        title="Admissions"
        subtitle="Begin your journey of excellence at SATTVA International School."
        image="https://images.unsplash.com/photo-1584515933487-779824d2935f?auto=format&fit=crop&q=80&w=1920"
        alt="Admissions"
        emphasis
        italicSubtitle
      />

      {/* The Admissions Journey (Timeline) */}
      <section className="section steps-section bg-light">
        <div className="container">
          <Reveal className="section-header text-center mb-5">
            <h2 className="section-title">The Admissions Journey</h2>
            <p className="section-subtitle text-muted mx-auto max-w-600">A thoughtful, transparent process designed to help us get to know your child.</p>
          </Reveal>

          <Reveal className="timeline-container mx-auto max-w-800 mt-16" delay={100}>
            <div className="timeline-step">
              <div className="timeline-number">01</div>
              <div className="timeline-content">
                <h3 className="timeline-title">Inquiry & Campus Tour</h3>
                <p className="text-muted">Begin by expressing your interest. We invite families to tour our historic campus, observe classes, and meet with our admissions team.</p>
              </div>
            </div>
            
            <div className="timeline-step">
              <div className="timeline-number">02</div>
              <div className="timeline-content">
                <h3 className="timeline-title">Application Submission</h3>
                <p className="text-muted">Submit the comprehensive online application, including academic transcripts, teacher recommendations, and a personal statement.</p>
              </div>
            </div>
            
            <div className="timeline-step">
              <div className="timeline-number">03</div>
              <div className="timeline-content">
                <h3 className="timeline-title">Assessment & Interview</h3>
                <p className="text-muted">Prospective students participate in grade-level assessments and a personal interview to ensure SATTVA is the perfect fit.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Curriculum & Why Choose Us (Premium Split UI) */}
      <section className="section finance-section">
        <div className="container">
          <Reveal className="finance-wrapper">
            {/* Curriculum Side */}
            <div className="tuition-side">
              <h2 className="finance-heading">Our Curriculum</h2>
              <p className="finance-subheading">GSEB Board &middot; JrKG to Std 12</p>

              <div className="tuition-table-premium">
                <div className="tuition-row">
                  <span className="grade-level">JrKG - SrKG <span className="grade-detail">(Pre-Primary)</span></span>
                  <span className="fee-amount">Foundational Learning</span>
                </div>
                <div className="tuition-row">
                  <span className="grade-level">Balvatika - Std 8 <span className="grade-detail">(Primary)</span></span>
                  <span className="fee-amount">Core GSEB Curriculum</span>
                </div>
                <div className="tuition-row">
                  <span className="grade-level">Std 9 - Std 10 <span className="grade-detail">(Secondary)</span></span>
                  <span className="fee-amount">Board Exam Preparation</span>
                </div>
                <div className="tuition-row">
                  <span className="grade-level">Std 11 - Std 12 <span className="grade-detail">(Higher Secondary)</span></span>
                  <span className="fee-amount">Science & Commerce</span>
                </div>
              </div>
              <p className="fee-disclaimer">* Every standard is offered in both English and Gujarati medium under the GSEB curriculum.</p>
            </div>

            {/* Why Choose Us Side */}
            <div className="aid-side">
              <h2 className="finance-heading aid-heading">Why Choose SATTVA</h2>
              <p className="aid-desc">We are committed to providing a safe, nurturing, and academically rigorous environment for every student who joins our community.</p>

              <div className="aid-item">
                <h4 className="aid-title">Safe, GPS-Enabled Transport</h4>
                <p className="aid-text">Our school bus service covers Singarwa, Bhuvaladi, Odhav, Vastral, Nikol, and surrounding parts of Ahmedabad.</p>
              </div>

              <div className="aid-item">
                <h4 className="aid-title">Value-Based Education</h4>
                <p className="aid-text">We blend traditional, character-building values with modern smart classrooms and lab facilities.</p>
              </div>

              <div className="aid-item">
                <h4 className="aid-title">Small Batch Sizes</h4>
                <p className="aid-text">A low student-teacher ratio ensures every child receives personal attention and mentorship.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQs (Side-by-Side Layout) */}
      <section className="section faq-section bg-light">
        <div className="container">
          <Reveal className="faq-split-layout">
            <div className="faq-header-side">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="text-muted mt-4">Find answers to the most common questions about joining our community.</p>
              <button className="btn btn-subtle mt-8">Contact Admissions</button>
            </div>
            
            <div className="faq-accordion-side">
              {faqs.map((faq, idx) => (
                <div key={idx} className={`premium-faq-item ${activeFaq === idx ? 'active' : ''}`}>
                  <button 
                    className="premium-faq-question"
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  >
                    <span className="faq-text">{faq.q}</span>
                    <span className="faq-icon-wrapper">
                      <ChevronDown className="faq-icon" />
                    </span>
                  </button>
                  <div className={`premium-faq-answer-wrapper ${activeFaq === idx ? 'open' : ''}`}>
                    <div className="premium-faq-answer">
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Elegant Editorial Application Form */}
      <section id="apply-form" ref={formRef} className="section form-section section-flush">
        <div className="editorial-form-split">
          <div className="form-image-side">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000" alt="Students studying" />
            <div className="form-image-overlay">
              <h3 className="overlay-quote">"Live as if you were to die tomorrow. Learn as if you were to live forever."</h3>
              <p className="overlay-author">— Mahatma Gandhi</p>
            </div>
          </div>
          
          <div className="form-content-side">
            <div className="form-content-inner">
              <h2 className="form-title">Begin Your Application</h2>
              <p className="form-subtitle">Complete this initial inquiry to connect with our admissions team.</p>
              
              {status === 'success' ? (
                <div className="success-message-container animate-fade-in">
                  <div className="success-icon-circle">
                    <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                      <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
                      <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                    </svg>
                  </div>
                  <h3 className="success-title">Inquiry Submitted!</h3>
                  <p className="success-text">Thank you for your interest in SATTVA International School. We have received your inquiry. Our admissions coordinator will contact you at your email address or phone number within 24-48 business hours.</p>
                  <button 
                    onClick={() => {
                      setStatus('idle');
                      setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        grade: '',
                        message: ''
                      });
                    }} 
                    className="btn btn-primary mt-8"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="premium-form">
                  <div className="form-row">
                    <div className={`input-group${fieldErrors.firstName ? ' has-error' : ''}`}>
                      <input
                        type="text"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={Boolean(fieldErrors.firstName)}
                        aria-describedby={fieldErrors.firstName ? 'firstName-error' : undefined}
                        required
                      />
                      <label htmlFor="firstName">Student's First Name</label>
                      {fieldErrors.firstName && (
                        <span id="firstName-error" className="field-error">{fieldErrors.firstName}</span>
                      )}
                    </div>
                    <div className={`input-group${fieldErrors.lastName ? ' has-error' : ''}`}>
                      <input
                        type="text"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={Boolean(fieldErrors.lastName)}
                        aria-describedby={fieldErrors.lastName ? 'lastName-error' : undefined}
                        required
                      />
                      <label htmlFor="lastName">Student's Last Name</label>
                      {fieldErrors.lastName && (
                        <span id="lastName-error" className="field-error">{fieldErrors.lastName}</span>
                      )}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className={`input-group${fieldErrors.email ? ' has-error' : ''}`}>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={Boolean(fieldErrors.email)}
                        aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                        required
                      />
                      <label htmlFor="email">Parent/Guardian Email</label>
                      {fieldErrors.email && (
                        <span id="email-error" className="field-error">{fieldErrors.email}</span>
                      )}
                    </div>
                    <div className={`input-group${fieldErrors.phone ? ' has-error' : ''}`}>
                      <input
                        type="tel"
                        id="phone"
                        inputMode="numeric"
                        maxLength={10}
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={Boolean(fieldErrors.phone)}
                        aria-describedby={fieldErrors.phone ? 'phone-error' : undefined}
                        required
                      />
                      <label htmlFor="phone">Phone Number</label>
                      {fieldErrors.phone && (
                        <span id="phone-error" className="field-error">{fieldErrors.phone}</span>
                      )}
                    </div>
                  </div>

                  <div className="input-group full-width">
                    <select 
                      id="grade" 
                      value={formData.grade}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled hidden></option>
                      <option value="pre-primary">Pre-Primary (JrKG-SrKG)</option>
                      <option value="primary">Primary (Balvatika-Std 8)</option>
                      <option value="secondary">Secondary (Std 9-10)</option>
                      <option value="higher-secondary">Higher Secondary (Std 11-12)</option>
                    </select>
                    <label htmlFor="grade">Applying for Grade Level</label>
                  </div>
                  
                  <div className="input-group full-width mt-8">
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    <label htmlFor="message">Briefly tell us why you are interested in SATTVA</label>
                  </div>

                  {status === 'error' && (
                    <div className="form-error-message">
                      {errorMessage}
                    </div>
                  )}

                  <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'submitting'}>
                    {status === 'submitting' ? (
                      <span className="spinner-container">
                        Sending Inquiry... <span className="spinner"></span>
                      </span>
                    ) : (
                      <>Submit Inquiry <ArrowRight size={18} className="ml-2" /></>
                    )}
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

export default Admissions;
