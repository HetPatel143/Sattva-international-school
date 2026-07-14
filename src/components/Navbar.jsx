import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="brand" aria-label="SATTVA International School Home" onClick={closeMenu}>
          <img src="/logo-full.png" alt="SATTVA International School" className="brand-logo-full" />
        </Link>

        {/* Desktop Nav */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/admissions#apply-form" className="btn btn-primary btn-sm" onClick={closeMenu}>
            Apply Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X aria-hidden="true" size={26} /> : <Menu aria-hidden="true" size={26} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div 
        id="mobile-menu"
        className={`mobile-nav ${isOpen ? 'open' : ''}`}
      >
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            to={link.path}
            className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <span>{link.name}</span>
            <ArrowRight size={16} className="mobile-arrow-icon" style={{ opacity: 0.5 }} />
          </Link>
        ))}
        <Link 
          to="/admissions#apply-form" 
          className="btn btn-primary" 
          onClick={closeMenu}
          style={{ 
            marginTop: '1rem', 
            width: '100%', 
            justifyContent: 'center',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            fontWeight: '600'
          }}
        >
          Apply Now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
