import { Link } from 'react-router-dom';
import { BookOpen, Users, Trophy, Star, Quote, GraduationCap, Building, Award, FlaskConical, Languages } from 'lucide-react';
import './Home.css';

const Home = () => {
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
      description: "Focus on sports, arts, and extracurriculars for all-round character building.",
      tile: "purple"
    },
    {
      icon: <Star className="feature-icon" />,
      title: "State-of-the-Art Facilities",
      description: "Modern classrooms, labs, and sports complexes to enhance the learning experience.",
      tile: "blue"
    }
  ];

  const stats = [
    { value: "GSEB", label: "State Board Affiliated", icon: <Building /> },
    { value: "100%", label: "College Success", icon: <GraduationCap /> },
    { value: "50+", label: "Extracurricular Activities", icon: <Users /> },
    { value: "15:1", label: "Student-Teacher Ratio", icon: <BookOpen /> }
  ];

  const curriculumHighlights = [
    { icon: <GraduationCap />, title: "JrKG to Grade 12", desc: "A seamless academic journey from the earliest years through senior secondary.", tile: "red" },
    { icon: <Award />, title: "GSEB Curriculum", desc: "Recognized state board curriculum delivering strong academic foundations.", tile: "green" },
    { icon: <FlaskConical />, title: "Science & Commerce", desc: "Specialized streams in Grades 11-12 to match every student's ambition.", tile: "purple" },
    { icon: <Languages />, title: "English & Gujarati Medium", desc: "Choose the medium of instruction that feels most like home.", tile: "blue" }
  ];

  const testimonials = [
    {
      quote: "SATTVA has completely transformed my child's approach to learning. The teachers genuinely care.",
      author: "Priya Sharma",
      role: "Parent of Grade 9 Student",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      quote: "The robotics program and science facilities are unparalleled. It prepared me perfectly for university.",
      author: "Rahul Desai",
      role: "Alumnus, Class of 2024",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      quote: "An environment that not only demands academic rigor but also supports mental and emotional well-being.",
      author: "Dr. Ananya Gupta",
      role: "Parent of Grade 12 Student",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150"
    }
  ];

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
          <h1 className="hero-title animate-fade-in delay-100" style={{ textTransform: 'uppercase', letterSpacing: '4px' }}>
            SATTVA INTERNATIONAL SCHOOL
          </h1>
          <p className="hero-subtitle mx-auto animate-fade-in delay-200" style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontSize: '1.75rem', opacity: 0.9 }}>
            Excellence. Heritage. Character.
          </p>
          <div className="hero-actions flex-center animate-fade-in delay-300" style={{ marginTop: '3rem' }}>
            <Link to="/admissions" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.125rem', backgroundColor: 'var(--color-secondary)', color: 'var(--color-primary)' }}>
              Inquire Today
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section stats-section glass">
        <div className="container">
          <div className="grid grid-2 grid-4-lg">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card text-center">
                <div className="stat-icon mx-auto">{stat.icon}</div>
                <div className="stat-value text-gradient">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section features-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Why Choose SATTVA?</h2>
            <p className="section-subtitle">We are committed to providing an environment where every child can thrive and excel.</p>
          </div>
          
          <div className="grid grid-2 grid-4-lg features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card glass hover-lift">
                <div className={`feature-icon-wrapper tile-${feature.tile}`}>
                  {feature.icon}
                </div>
                <h3 className="feature-card-title">{feature.title}</h3>
                <p className="feature-card-desc">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="section curriculum-section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Curriculum at a Glance</h2>
            <p className="section-subtitle">A GSEB-affiliated education built around every stage of your child's growth.</p>
          </div>
          <div className="grid grid-2 grid-4-lg curriculum-grid">
            {curriculumHighlights.map((item, idx) => (
              <div key={idx} className="curriculum-tile glass hover-lift">
                <div className={`curriculum-tile-icon tile-${item.tile}`}>
                  {item.icon}
                </div>
                <h3 className="curriculum-tile-title">{item.title}</h3>
                <p className="curriculum-tile-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials-section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Voices of SATTVA</h2>
            <p className="section-subtitle">Hear what our parents and alumni have to say about their experience.</p>
          </div>
          <div className="grid grid-3">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="testimonial-card glass">
                <Quote className="quote-icon" size={32} />
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author-flex">
                  <img src={testimonial.image} alt={testimonial.author} className="author-image" loading="lazy" width="50" height="50" />
                  <div>
                    <h4 className="author-name">{testimonial.author}</h4>
                    <p className="author-role">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-box text-center relative overflow-hidden">
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
