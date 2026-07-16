import { Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './MobileCTA.css';

// A persistent conversion bar for small screens — the desktop nav already
// carries an "Apply Now" CTA at all times, but on mobile that CTA only
// exists inside the (closed-by-default) hamburger drawer.
const MobileCTA = () => (
  <div className="mobile-cta-bar">
    <a href="tel:+919714481717" className="mobile-cta-call">
      <Phone size={18} aria-hidden="true" />
      <span>Call Us</span>
    </a>
    <Link to="/admissions#apply-form" className="mobile-cta-apply">
      Apply Now
      <ArrowRight size={16} aria-hidden="true" />
    </Link>
  </div>
);

export default MobileCTA;
