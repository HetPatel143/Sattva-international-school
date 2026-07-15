import { Mail, Phone, MapPin, Send, Clock, Globe, ExternalLink } from 'lucide-react';
import { useState } from 'react';
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      {/* Header */}
      <section className="page-header">
        <div className="page-header-bg">
          <img
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1920"
            srcSet="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800 800w, https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1920 1920w"
            sizes="100vw"
            alt="Contact Us"
            fetchPriority="high"
          />
        </div>
        <div className="page-header-content container text-center">
          <h1 className="page-title page-title-emphasis">Contact Us</h1>
          <p className="page-subtitle page-subtitle-italic mx-auto">
            We look forward to welcoming you to our community.
          </p>
        </div>
      </section>

      {/* Main Contact Section (Premium Split Layout) */}
      <section className="section contact-section">
        <div className="container">
          <div className="contact-wrapper">

            {/* Contact Info Side */}
            <div className="contact-info-side">
              <div className="info-header">
                <h2 className="finance-heading" style={{ color: 'white' }}>Get In Touch</h2>
                <p className="finance-subheading" style={{ color: 'rgba(255,255,255,0.8)' }}>
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
              <h2 className="form-title" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Send Us a Message</h2>
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
                    className="btn btn-primary"
                    style={{ marginTop: '2rem' }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="premium-form contact-form-grid">
                  <div className="form-row">
                    <div className="input-group">
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        autoComplete="name"
                        required
                      />
                      <label htmlFor="name">Full Name</label>
                    </div>
                    <div className="input-group">
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        inputMode="email"
                        required
                      />
                      <label htmlFor="email">Email Address</label>
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

                  <div className="input-group full-width" style={{ marginTop: '2rem' }}>
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
                    <div className="form-error-message" style={{ color: 'var(--color-accent)', margin: '0 0 1.5rem 0', fontWeight: '500', fontSize: '0.95rem' }}>
                      {errorMessage}
                    </div>
                  )}

                  <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'submitting'}>
                    {status === 'submitting' ? (
                      <span className="spinner-container">
                        Sending... <span className="spinner"></span>
                      </span>
                    ) : (
                      <>Send Message <Send size={18} style={{ marginLeft: '0.5rem' }} /></>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Elegant Map Section */}
      <section className="section map-section" style={{ padding: 0 }}>
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
                Open in Google Maps <ExternalLink size={18} style={{ marginLeft: '0.5rem' }} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
