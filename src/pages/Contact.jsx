import { Mail, Phone, MapPin, Send, Clock, Globe, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState({ name: '', email: '' });

  const validateField = (id, value) => {
    if (id === 'name') {
      if (!value.trim()) return 'Please enter your full name.';
      if (value.trim().length < 2) return 'Name looks too short.';
      return '';
    }
    if (id === 'email') {
      if (!value.trim()) return 'Please enter your email address.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Enter a valid email address.';
      return '';
    }
    return '';
  };

  const subjectOptions = [
    { value: 'admissions', label: 'Admission & Enrollment Inquiry' },
    { value: 'tours', label: 'Campus Tour Request' },
    { value: 'alumni', label: 'Alumni Network & Giving' },
    { value: 'careers', label: 'Faculty & Staff Careers' },
    { value: 'media', label: 'Media & Press Relations' },
    { value: 'general', label: 'General Administration' },
  ];

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    // Once a field has shown an error, clear it live as soon as the fix lands
    if (fieldErrors[id]) {
      setFieldErrors(prev => ({ ...prev, [id]: validateField(id, value) }));
    }
  };

  const handleBlur = (e) => {
    const { id, value } = e.target;
    if (id === 'name' || id === 'email') {
      setFieldErrors(prev => ({ ...prev, [id]: validateField(id, value) }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nameError = validateField('name', formData.name);
    const emailError = validateField('email', formData.email);
    if (nameError || emailError) {
      setFieldErrors({ name: nameError, email: emailError });
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    const payload = {
      "Full Name": formData.name,
      "Email Address": formData.email,
      "Subject of Inquiry": subjectOptions.find(opt => opt.value === formData.subject)?.label || formData.subject,
      "Message": formData.message,
      "_subject": "New Contact Message from SATTVA Website",
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
        setErrorMessage(data.message || "Failed to send message. Please try again.");
      }
    } catch {
      setStatus('error');
      setErrorMessage("A network error occurred. Please check your connection and try again.");
    }
  };

  return (
    <div className="contact-page animate-fade-in">
      <PageHeader
        title="Contact Us"
        subtitle="We look forward to welcoming you to our community."
        image="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1920"
        alt="Contact Us"
        emphasis
        italicSubtitle
      />

      {/* Main Contact Section (Premium Split Layout) */}
      <section className="section contact-section">
        <div className="container">
          <div className="contact-wrapper">

            {/* Contact Info Side */}
            <div className="contact-info-side">
              <div className="info-header">
                <h2 className="finance-heading">Get In Touch</h2>
                <p className="finance-subheading">
                  Whether you are a prospective parent, an alumnus, or interested in learning more, our dedicated staff is here to assist you.
                </p>
              </div>

              <div className="info-blocks">
                <div className="info-block">
                  <div className="info-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="info-content">
                    <h3>Our Campus</h3>
                    <p>Opposite Swapnil Homes, Near A.M. Patel Farm,<br/>Satyam Bunglow Char Rasta, Singarwa,<br/>Ahmedabad, Gujarat - 382430</p>
                  </div>
                </div>

                <div className="info-block">
                  <div className="info-icon">
                    <Phone size={24} />
                  </div>
                  <div className="info-content">
                    <h3>Phone Directory</h3>
                    <p>Mobile: +91 97144 81717<br/>Landline: 079 4714 7985</p>
                  </div>
                </div>

                <div className="info-block">
                  <div className="info-icon">
                    <Mail size={24} />
                  </div>
                  <div className="info-content">
                    <h3>Email Directory</h3>
                    <p>General Support: info@sattvainternationalschool.com<br/>Admissions Office: admissions@sattvainternationalschool.com</p>
                  </div>
                </div>

                <div className="info-block">
                  <div className="info-icon">
                    <Clock size={24} />
                  </div>
                  <div className="info-content">
                    <h3>Office Hours</h3>
                    <p>Mon - Fri: 8:00 AM - 6:00 PM<br/>Saturday: 8:00 AM - 5:00 PM<br/>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Side */}
            <div className="contact-form-side">
              <h2 className="form-title form-title-compact">Send Us a Message</h2>
              <p className="form-subtitle">Fill out the form below and we will respond promptly.</p>

              {status === 'success' ? (
                <div className="success-message-container animate-fade-in">
                  <div className="success-icon-circle">
                    <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                      <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
                      <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                    </svg>
                  </div>
                  <h3 className="success-title">Message Sent!</h3>
                  <p className="success-text">Thank you for reaching out. Our team will get back to you within 24-48 business hours.</p>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="btn btn-primary mt-8"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="premium-form contact-form-grid">
                  <div className="form-row">
                    <div className={`input-group${fieldErrors.name ? ' has-error' : ''}`}>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete="name"
                        aria-invalid={Boolean(fieldErrors.name)}
                        aria-describedby={fieldErrors.name ? 'name-error' : undefined}
                        required
                      />
                      <label htmlFor="name">Full Name</label>
                      {fieldErrors.name && (
                        <span id="name-error" className="field-error">{fieldErrors.name}</span>
                      )}
                    </div>
                    <div className={`input-group${fieldErrors.email ? ' has-error' : ''}`}>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete="email"
                        inputMode="email"
                        aria-invalid={Boolean(fieldErrors.email)}
                        aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                        required
                      />
                      <label htmlFor="email">Email Address</label>
                      {fieldErrors.email && (
                        <span id="email-error" className="field-error">{fieldErrors.email}</span>
                      )}
                    </div>
                  </div>

                  <div className="input-group full-width">
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled hidden></option>
                      {subjectOptions.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                    <label htmlFor="subject">Subject of Inquiry</label>
                  </div>

                  <div className="input-group full-width mt-8">
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    <label htmlFor="message">Your Message</label>
                  </div>

                  {status === 'error' && (
                    <div className="form-error-message">
                      {errorMessage}
                    </div>
                  )}

                  <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'submitting'}>
                    {status === 'submitting' ? (
                      <span className="spinner-container">
                        Sending... <span className="spinner"></span>
                      </span>
                    ) : (
                      <>Send Message <Send size={18} className="ml-2" /></>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Elegant Map Section */}
      <section className="section map-section section-flush">
        <div className="premium-map-container">
          <div className="map-bg"></div>
          <div className="map-overlay">
            <div className="map-card">
              <Globe size={48} className="map-card-icon" />
              <h2 className="map-card-title">Visit Our Campus</h2>
              <p className="map-card-desc">Experience our modern classrooms, premium sports fields, and state-of-the-art computational labs in person.</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Sattva+International+School+Singarwa+Ahmedabad"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary map-btn"
              >
                Open in Google Maps <ExternalLink size={18} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
