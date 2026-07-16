import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Trophy, Star, Quote, GraduationCap, Building, Award, FlaskConical, Languages, Palette, Landmark, ChevronLeft, ChevronRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import './Home.css';

const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const features = [
    {
      icon: <BookOpen className="feature-icon" />,
      title: "Excellence in Academics",
      description: "Rigorous curriculum designed to challenge and inspire students to reach their full potential.",
      tile: "red"
    },
    {
      icon: <Users className="feature-icon" />,
      title: "Expert Faculty",
      description: "Dedicated educators committed to providing personalized attention and mentorship.",
      tile: "green"
    },
    {
      icon: <Trophy className="feature-icon" />,
      title: "Holistic Development",
      description: "Dance, karate, yoga, and the arts alongside academics for all-round character building.",
      tile: "purple"
    },
    {
      icon: <Star className="feature-icon" />,
      title: "State-of-the-Art Facilities",
      description: "Fully air-conditioned classrooms, science labs, and two auditoriums to enhance the learning experience.",
      tile: "blue"
    }
  ];

  const stats = [
    { value: "GSEB", label: "State Board Affiliated", icon: <Building /> },
    { value: "7", label: "Skill Activities", icon: <Palette /> },
    { value: "2", label: "Auditoriums", icon: <Landmark /> },
    { value: "15:1", label: "Student-Teacher Ratio", icon: <BookOpen /> }
  ];

  const curriculumHighlights = [
    { icon: <GraduationCap />, title: "JrKG to Std 12", desc: "A seamless academic journey from the earliest years through senior secondary.", tile: "red" },
    { icon: <Award />, title: "GSEB Curriculum", desc: "Recognized state board curriculum delivering strong academic foundations.", tile: "green" },
    { icon: <FlaskConical />, title: "Science & Commerce", desc: "Specialized streams in Std 11-12 to match every student's ambition.", tile: "purple" },
    { icon: <Languages />, title: "English & Gujarati Medium", desc: "Choose the medium of instruction that feels most like home.", tile: "blue" }
  ];

  const testimonials = [
    {
      quote: "SATTVA has completely transformed my child's approach to learning. The teachers genuinely care.",
      author: "Priya Sharma",
      role: "Parent of Std 9 Student",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      quote: "The science labs and hands-on learning make every subject feel real. I've grown so much more confident here.",
      author: "Rahul Desai",
      role: "Std 10 Student",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      quote: "An environment that not only demands academic rigor but also supports mental and emotional well-being.",
      author: "Dr. Ananya Gupta",
      role: "Parent of Std 12 Student",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150"
    }
  ];

  const showTestimonial = (direction) => {
    setActiveTestimonial((current) => (current + direction + testimonials.length) % testimonials.length);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <img
          src="/campus-hero.jpeg"
          alt="SATTVA International School Campus"
          className="hero-image"
          fetchPriority="high"
        />
        <div className="container hero-content text-center">
          <h1 className="hero-title animate-fade-in delay-100">
            SATTVA INTERNATIONAL SCHOOL
          </h1>
          <p className="hero-subtitle mx-auto animate-fade-in delay-200">
            Excellence. Heritage. Character.
          </p>
          <div className="hero-actions flex-center animate-fade-in delay-300">
            <Link to="/admissions" className="btn btn-primary hero-cta-btn">
              Inquire Today
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section stats-section glass">
        <div className="container">
          <Reveal className="grid grid-2 grid-4-lg stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card text-center">
                <div className="stat-icon mx-auto">{stat.icon}</div>
                <div className="stat-value text-gradient">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section features-section">
        <div className="container">
          <Reveal className="section-header text-center">
            <h2 className="section-title">Why Choose SATTVA?</h2>
            <p className="section-subtitle">We are committed to providing an environment where every child can thrive and excel.</p>
          </Reveal>

          <Reveal className="grid grid-2 grid-4-lg features-grid" delay={100}>
            {features.map((feature, index) => (
              <div key={index} className="feature-card glass hover-lift">
                <div className={`feature-icon-wrapper tile-${feature.tile}`}>
                  {feature.icon}
                </div>
                <h3 className="feature-card-title">{feature.title}</h3>
                <p className="feature-card-desc">{feature.description}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="section curriculum-section bg-light">
        <div className="container">
          <Reveal className="section-header text-center">
            <h2 className="section-title">Our Curriculum at a Glance</h2>
            <p className="section-subtitle">A GSEB-affiliated education built around every stage of your child's growth.</p>
          </Reveal>
          <Reveal className="grid grid-2 grid-4-lg curriculum-grid" delay={100}>
            {curriculumHighlights.map((item, idx) => (
              <div key={idx} className="curriculum-tile glass hover-lift">
                <div className={`curriculum-tile-icon tile-${item.tile}`}>
                  {item.icon}
                </div>
                <h3 className="curriculum-tile-title">{item.title}</h3>
                <p className="curriculum-tile-desc">{item.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Quote */}
      <section className="section quote-section text-center">
        <div className="container">
          <blockquote className="legend-quote">
            "Dream is not that which you see while sleeping, it is something that does not let you sleep."
          </blockquote>
          <p className="legend-quote-author">— Dr. A. P. J. Abdul Kalam</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials-section bg-light">
        <div className="container">
          <Reveal className="section-header text-center">
            <h2 className="section-title">Voices of SATTVA</h2>
            <p className="section-subtitle">Hear what our parents and alumni have to say about their experience.</p>
          </Reveal>

          <Reveal className="testimonial-carousel" delay={100}>
            <button
              type="button"
              className="testimonial-nav testimonial-prev"
              onClick={() => showTestimonial(-1)}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={22} />
            </button>

            <div className="testimonial-card glass">
              <Quote className="quote-icon" size={32} />
              <p className="testimonial-quote">"{testimonials[activeTestimonial].quote}"</p>
              <div className="testimonial-author-flex">
                <img
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].author}
                  className="author-image"
                  loading="lazy"
                  width="50"
                  height="50"
                />
                <div>
                  <h4 className="author-name">{testimonials[activeTestimonial].author}</h4>
                  <p className="author-role">{testimonials[activeTestimonial].role}</p>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="testimonial-nav testimonial-next"
              onClick={() => showTestimonial(1)}
              aria-label="Next testimonial"
            >
              <ChevronRight size={22} />
            </button>
          </Reveal>

          <div className="testimonial-dots" role="tablist" aria-label="Choose a testimonial">
            {testimonials.map((testimonial, idx) => (
              <button
                key={testimonial.author}
                type="button"
                role="tab"
                aria-selected={idx === activeTestimonial}
                aria-label={`Show testimonial from ${testimonial.author}`}
                className={`testimonial-dot ${idx === activeTestimonial ? 'active' : ''}`}
                onClick={() => setActiveTestimonial(idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta-section">
        <div className="container">
          <Reveal className="cta-box text-center relative overflow-hidden">
            <img
              src="/campus-1.jpeg"
              alt=""
              className="cta-bg-image"
              loading="lazy"
              aria-hidden="true"
            />
            <div className="cta-overlay"></div>
            <div className="cta-content relative z-10">
              <h2 className="cta-title text-white">Ready to Begin Your Journey?</h2>
              <p className="cta-desc text-white">Join the SATTVA family and give your child the foundation they need for a successful future.</p>
              <div className="flex-center cta-btn-wrapper">
                <Link to="/admissions" className="btn btn-primary btn-lg shadow-glow">
                  Start Application Process
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
