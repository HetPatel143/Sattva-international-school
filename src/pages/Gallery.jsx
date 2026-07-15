import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Gallery.css';

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const lightboxRef = useRef(null);
  const touchStartXRef = useRef(null);

  const categories = ['All', 'Campus', 'Academics', 'Sports', 'Events'];

  const images = [
    { src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800', alt: 'Students walking on campus', category: 'Campus' },
    { src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800', alt: 'Debate competition', category: 'Events' },
    { src: 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?auto=format&fit=crop&q=80&w=800', alt: 'Science exhibition', category: 'Academics' },
    { src: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&q=80&w=800', alt: 'Graduation ceremony', category: 'Events' },
    { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800', alt: 'Study group in library', category: 'Campus' },
    { src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800', alt: 'Chemistry lab', category: 'Academics' },
    { src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800', alt: 'Diverse student group', category: 'Campus' },
    { src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800', alt: 'Campus building', category: 'Campus' },
    { src: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800', alt: 'Sports match outdoors', category: 'Sports' },
    { src: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&q=80&w=800', alt: 'Art class', category: 'Academics' },
    { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800', alt: 'Teacher helping student', category: 'Academics' },
    { src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800', alt: 'Books on desk', category: 'Campus' }
  ];

  const filteredImages = activeCategory === 'All'
    ? images
    : images.filter(img => img.category === activeCategory);

  const selectedImage = selectedIndex !== null ? filteredImages[selectedIndex] : null;
  const showBento = filteredImages.length >= 6;

  const showPrev = () => setSelectedIndex((i) => (i - 1 + filteredImages.length) % filteredImages.length);
  const showNext = () => setSelectedIndex((i) => (i + 1) % filteredImages.length);

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    const SWIPE_THRESHOLD = 50;
    if (deltaX > SWIPE_THRESHOLD) showPrev();
    else if (deltaX < -SWIPE_THRESHOLD) showNext();
    touchStartXRef.current = null;
  };

  // Keyboard navigation & scroll lock while lightbox is open
  useEffect(() => {
    const count = filteredImages.length;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowLeft') setSelectedIndex((i) => (i - 1 + count) % count);
      if (e.key === 'ArrowRight') setSelectedIndex((i) => (i + 1) % count);

      // Trap focus inside the lightbox while it's open
      if (e.key === 'Tab' && lightboxRef.current) {
        const focusable = lightboxRef.current.querySelectorAll('button');
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    if (selectedIndex !== null) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [selectedIndex, filteredImages.length]);

  return (
    <div className="gallery-page animate-fade-in">
      <section className="page-header">
        <div className="page-header-bg">
          <img
            src="https://images.unsplash.com/photo-1522199670076-2852f80289c9?auto=format&fit=crop&q=80&w=1920"
            srcSet="https://images.unsplash.com/photo-1522199670076-2852f80289c9?auto=format&fit=crop&q=80&w=800 800w, https://images.unsplash.com/photo-1522199670076-2852f80289c9?auto=format&fit=crop&q=80&w=1920 1920w"
            sizes="100vw"
            alt="Gallery header"
            fetchPriority="high"
          />
        </div>
        <div className="page-header-content container">
          <h1 className="page-title">Life at SATTVA</h1>
          <p className="page-subtitle">A visual journey through our vibrant campus, events, and student life.</p>
        </div>
      </section>

      <section className="section gallery-section">
        <div className="container">
          {/* Category Filter Bar */}
          <div className="category-filter-bar">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Bento-style Grid */}
          <div className="gallery-grid">
            {filteredImages.map((img, idx) => {
              const isLarge = showBento && idx % 5 === 2;
              return (
                <div
                  key={img.src}
                  className={`gallery-item ${isLarge ? 'gallery-item-large' : ''}`}
                  onClick={() => setSelectedIndex(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter') setSelectedIndex(idx); }}
                  aria-label={`View larger image of ${img.alt}`}
                >
                  <img
                    src={img.src}
                    srcSet={`${img.src.replace('w=800', 'w=400')} 400w, ${img.src} 800w`}
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    alt={img.alt}
                    loading="lazy"
                  />
                  <div className="gallery-item-overlay">
                    <span className="gallery-item-caption">{img.alt}</span>
                    <span className="gallery-item-category">{img.category}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox — portaled to body so it isn't confined by any transformed ancestor */}
      {selectedImage && createPortal(
        <div
          ref={lightboxRef}
          className="lightbox open"
          onClick={() => setSelectedIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
        >
          <button
            className="lightbox-close"
            onClick={() => setSelectedIndex(null)}
            aria-label="Close lightbox"
            autoFocus
          >
            <X size={28} />
          </button>

          {filteredImages.length > 1 && (
            <>
              <button
                className="lightbox-nav lightbox-prev"
                onClick={(e) => { e.stopPropagation(); showPrev(); }}
                aria-label="Previous image"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                className="lightbox-nav lightbox-next"
                onClick={(e) => { e.stopPropagation(); showNext(); }}
                aria-label="Next image"
              >
                <ChevronRight size={28} />
              </button>
            </>
          )}

          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img src={selectedImage.src} alt={selectedImage.alt} className="lightbox-image" />
            <p className="lightbox-caption">{selectedImage.alt}</p>
            {filteredImages.length > 1 && (
              <p className="lightbox-counter">{selectedIndex + 1} / {filteredImages.length}</p>
            )}
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default Gallery;
