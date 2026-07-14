import { Mail, Phone, MapPin, Send, Clock, Globe, ExternalLink, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [subject, setSubject] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const subjectOptions = [
    { value: 'admissions', label: 'Admission & Enrollment Inquiry' },
    { value: 'tours', label: 'Campus Tour Request' },
    { value: 'alumni', label: 'Alumni Network & Giving' },
    { value: 'careers', label: 'Faculty & Staff Careers' },
    { value: 'media', label: 'Media & Press Relations' },
    { value: 'general', label: 'General Administration' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (value) => {
    setSubject(value);
    setIsDropdownOpen(false);
  };

  return (
    <div className="contact-page animate-fade-in">
      {/* Header */}
      <section className="page-header">
        <div className="page-header-bg">
          <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1920" alt="Contact Us" loading="lazy" />
        </div>
        <div className="page-header-content container text-center">
          <h1 className="page-title" style={{ textTransform: 'uppercase', letterSpacing: '2px' }}>Contact Us</h1>
          <p className="page-subtitle mx-auto" style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontSize: '1.5rem', opacity: 0.9 }}>
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
              
              <form className="premium-form contact-form-grid">
                <div className="form-row">
                  <div className="input-group">
                    <input type="text" id="name" required />
                    <label htmlFor="name">Full Name</label>
                  </div>
                  <div className="input-group">
                    <input type="email" id="email" required />
                    <label htmlFor="email">Email Address</label>
                  </div>
                </div>

                {/* Custom Premium Dropdown */}
                <div className="input-group full-width" ref={dropdownRef}>
                  <div 
                    className={`custom-select-trigger ${isDropdownOpen ? 'open' : ''} ${subject ? 'has-value' : ''}`}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <span className="selected-value">
                      {subject ? subjectOptions.find(opt => opt.value === subject)?.label : ''}
                    </span>
                    <ChevronDown size={20} className="custom-select-arrow" />
                  </div>
                  <label className={subject || isDropdownOpen ? 'floating' : ''}>Subject of Inquiry</label>
                  
                  {isDropdownOpen && (
                    <div className="custom-select-options animate-fade-in" style={{ animationDuration: '0.2s' }}>
                      {subjectOptions.map((option) => (
                        <div 
                          key={option.value} 
                          className={`custom-select-option ${subject === option.value ? 'selected' : ''}`}
                          onClick={() => handleSelect(option.value)}
                        >
                          {option.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="input-group full-width" style={{ marginTop: '2rem' }}>
                  <textarea id="message" rows={4} required></textarea>
                  <label htmlFor="message">Your Message</label>
                </div>
                
                <button type="button" className="btn btn-primary submit-btn">
                  Send Message <Send size={18} style={{ marginLeft: '0.5rem' }} />
                </button>
              </form>
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
