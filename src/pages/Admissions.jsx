import { ChevronDown, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
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
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    // Prepare payload formatted for email reading
    const payload = {
      "Student First Name": formData.firstName,
      "Student Last Name": formData.lastName,
      "Parent Email": formData.email,
      "Phone Number": formData.phone,
      "Applying for Grade": formData.grade === 'k' ? 'Kindergarten' : 
                           formData.grade === 'primary' ? 'Primary (Grades 1-5)' :
                           formData.grade === 'middle' ? 'Middle (Grades 6-8)' : 'High School (Grades 9-12)',
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
    { q: "What is the age cutoff for Kindergarten admission?", a: "Children must be 5 years old by June 1st of the academic enrollment year." },
    { q: "Do you offer transportation services?", a: "Yes, we operate a safe and comprehensive GPS-enabled school transport bus service covering Singarwa, Bhuvaladi, Odhav, Vastral, Nikol, and other surrounding parts of Ahmedabad." },
    { q: "What is the medium of instruction?", a: "Every grade from JrKG to Grade 12 is offered in both English and Gujarati medium under the GSEB curriculum." },
    { q: "Can we schedule a campus tour?", a: "Absolutely! Campus tours can be scheduled during school office hours. Please contact the admissions office at +91 97144 81717 to book your visit." }
  ];

  return (
    <div className="admissions-page animate-fade-in">
      {/* Header Section */}
      <section className="page-header">
        <div className="page-header-bg">
          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d2935f?auto=format&fit=crop&q=80&w=1920"
            srcSet="https://images.unsplash.com/photo-1584515933487-779824d2935f?auto=format&fit=crop&q=80&w=800 800w, https://images.unsplash.com/photo-1584515933487-779824d2935f?auto=format&fit=crop&q=80&w=1920 1920w"
            sizes="100vw"
            alt="Admissions"
            fetchPriority="high"
          />
        </div>
        <div className="page-header-content container text-center">
          <h1 className="page-title page-title-emphasis">Admissions</h1>
          <p className="page-subtitle page-subtitle-italic mx-auto">
            Begin your journey of excellence at SATTVA International School.
          </p>
        </div>
      </section>

      {/* The Admissions Journey (Timeline) */}
      <section className="section steps-section" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 className="section-title">The Admissions Journey</h2>
            <p className="section-subtitle text-muted mx-auto" style={{ maxWidth: '600px' }}>A thoughtful, transparent process designed to help us get to know your child.</p>
          </div>
          
          <div className="timeline-container mx-auto" style={{ maxWidth: '800px', marginTop: '4rem' }}>
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
          </div>
        </div>
      </section>

      {/* Curriculum & Why Choose Us (Premium Split UI) */}
      <section className="section finance-section">
        <div className="container">
          <div className="finance-wrapper">
            {/* Curriculum Side */}
            <div className="tuition-side">
              <h2 className="finance-heading">Our Curriculum</h2>
              <p className="finance-subheading">GSEB Board &middot; JrKG to Grade 12</p>

              <div className="tuition-table-premium">
                <div className="tuition-row">
                  <span className="grade-level">JrKG - Grade 5 <span className="grade-detail">(Primary)</span></span>
                  <span className="fee-amount">Foundational Learning</span>
                </div>
                <div className="tuition-row">
                  <span className="grade-level">Grade 6 - Grade 8 <span className="grade-detail">(Middle School)</span></span>
                  <span className="fee-amount">Core GSEB Curriculum</span>
                </div>
                <div className="tuition-row">
                  <span className="grade-level">Grade 9 - Grade 10 <span className="grade-detail">(Secondary)</span></span>
                  <span className="fee-amount">Board Exam Preparation</span>
                </div>
                <div className="tuition-row">
                  <span className="grade-level">Grade 11 - Grade 12 <span className="grade-detail">(Higher Secondary)</span></span>
                  <span className="fee-amount">Science & Commerce</span>
                </div>
              </div>
              <p className="fee-disclaimer">* Every grade is offered in both English and Gujarati medium under the GSEB curriculum.</p>
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
          </div>
        </div>
      </section>

      {/* FAQs (Side-by-Side Layout) */}
      <section className="section faq-section" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          <div className="faq-split-layout">
            <div className="faq-header-side">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="text-muted mt-4">Find answers to the most common questions about joining our community.</p>
              <button className="btn btn-outline mt-5" style={{ marginTop: '2rem' }}>Contact Admissions</button>
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
          </div>
        </div>
      </section>

      {/* Elegant Editorial Application Form */}
      <section id="apply-form" ref={formRef} className="section form-section" style={{ padding: 0 }}>
        <div className="editorial-form-split">
          <div className="form-image-side">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000" alt="Students studying" />
            <div className="form-image-overlay">
              <h3 className="overlay-quote">"Education is not the filling of a pail, but the lighting of a fire."</h3>
              <p className="overlay-author">— W.B. Yeats</p>
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
                    className="btn btn-primary"
                    style={{ marginTop: '2rem' }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="premium-form">
                  <div className="form-row">
                    <div className="input-group">
                      <input 
                        type="text" 
                        id="firstName" 
                        value={formData.firstName}
                        onChange={handleChange}
                        required 
                      />
                      <label htmlFor="firstName">Student's First Name</label>
                    </div>
                    <div className="input-group">
                      <input 
                        type="text" 
                        id="lastName" 
                        value={formData.lastName}
                        onChange={handleChange}
                        required 
                      />
                      <label htmlFor="lastName">Student's Last Name</label>
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="input-group">
                      <input 
                        type="email" 
                        id="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                      />
                      <label htmlFor="email">Parent/Guardian Email</label>
                    </div>
                    <div className="input-group">
                      <input 
                        type="tel" 
                        id="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        required 
                      />
                      <label htmlFor="phone">Phone Number</label>
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
                      <option value="k">Kindergarten</option>
                      <option value="primary">Primary (Grades 1-5)</option>
                      <option value="middle">Middle (Grades 6-8)</option>
                      <option value="high">High School (Grades 9-12)</option>
                    </select>
                    <label htmlFor="grade">Applying for Grade Level</label>
                  </div>
                  
                  <div className="input-group full-width" style={{ marginTop: '2rem' }}>
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
                    <div className="form-error-message" style={{ color: 'var(--color-accent)', margin: '0 0 1.5rem 0', fontWeight: '500', fontSize: '0.95rem' }}>
                      {errorMessage}
                    </div>
                  )}

                  <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'submitting'} style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {status === 'submitting' ? (
                      <span className="spinner-container">
                        Sending Inquiry... <span className="spinner"></span>
                      </span>
                    ) : (
                      <>Submit Inquiry <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} /></>
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
