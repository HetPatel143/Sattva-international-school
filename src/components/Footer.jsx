import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Share2, Rss, Globe, Link2 } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand-section">
          <Link to="/" className="brand">
            <img src="/logo-full.png" alt="SATTVA International School" className="footer-brand-logo" />
          </Link>
          <p className="footer-desc">
            Nurturing minds, building character, and shaping the future leaders of tomorrow through holistic value-based education and academic excellence.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" title="Facebook" aria-label="Visit our Facebook page"><Share2 size={20} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" title="Twitter" aria-label="Visit our Twitter page"><Rss size={20} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram" aria-label="Visit our Instagram page"><Globe size={20} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn" aria-label="Visit our LinkedIn page"><Link2 size={20} /></a>
          </div>
        </div>

        <div className="footer-links-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/academics">Academics</Link></li>
            <li><Link to="/admissions">Admissions</Link></li>
            <li><Link to="/gallery">Image Gallery</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-contact-section">
          <h3 className="footer-heading">Contact Info</h3>
          <ul className="footer-contact-list">
            <li>
              <MapPin size={18} className="contact-icon" aria-hidden="true" />
              <span>Opposite Swapnil Homes, Near A.M. Patel Farm, Satyam Bunglow Char Rasta, Singarwa, Ahmedabad - 382430</span>
            </li>
            <li>
              <Phone size={18} className="contact-icon" aria-hidden="true" />
              <span>+91 97144 81717</span>
            </li>
            <li>
              <Mail size={18} className="contact-icon" aria-hidden="true" />
              <span>info@sattvainternationalschool.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} SATTVA International School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
