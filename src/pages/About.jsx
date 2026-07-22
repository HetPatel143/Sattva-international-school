import { Award, Target, Heart, Shield, CheckCircle, Mic2, PartyPopper, Flag } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import './About.css';

const About = () => {
  const values = [
    { icon: <Target className="value-icon" />, title: "Excellence", desc: "Striving for the highest standards in all endeavors.", tile: "red" },
    { icon: <Heart className="value-icon" />, title: "Compassion", desc: "Fostering a caring and inclusive community.", tile: "green" },
    { icon: <Shield className="value-icon" />, title: "Integrity", desc: "Upholding honesty and strong moral principles.", tile: "purple" },
    { icon: <Award className="value-icon" />, title: "Innovation", desc: "Embracing new ideas and creative problem-solving.", tile: "blue" }
  ];

  const lifeAtSattva = [
    { icon: <Mic2 className="value-icon" />, title: "Annual Function", desc: "Every year, students take center stage to showcase their talents — dance, karate demonstrations, anchoring, and commentary — celebrating a year of growth and confidence.", tile: "red" },
    { icon: <PartyPopper className="value-icon" />, title: "Festival Celebrations", desc: "From Uttarayan to Diwali, Navratri to Janmashtami, every Indian and Gujarati festival is celebrated at school, keeping students rooted in tradition and culture.", tile: "green" },
    { icon: <Flag className="value-icon" />, title: "House System", desc: "Every student, across every standard, belongs to one of four houses — Glory, Prestige, and two more — building teamwork, healthy competition, and leadership from an early age.", tile: "purple" }
  ];

  const history = [
    { year: "2022", title: "Foundation", desc: "SATTVA International School was founded in Singarwa, Ahmedabad with a vision of blending value-based traditional learning with modern smart education." },
    { year: "2023", title: "GSEB Affiliation Secured", desc: "Successfully secured GSEB curriculum approval, offering both English and Gujarati medium instruction." },
    { year: "2024", title: "Infrastructure & Lab Expansion", desc: "Inaugurated dedicated physics, chemistry, and biology laboratories, two auditoriums, and fully air-conditioned classrooms." },
    { year: "2026", title: "Holistic Development Leader", desc: "Emerged as a premium center of primary and secondary education, known for character building and safety." }
  ];

  return (
    <div className="about-page animate-fade-in">
      <PageHeader
        title="About SATTVA School"
        subtitle="A legacy of excellence, character building, and holistic education."
        image="https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=1920"
        alt="About SATTVA"
      />

      {/* Mission & Vision */}
      <section className="section mission-vision">
        <div className="container">
          <Reveal className="grid grid-2">
            <div className="mission-card glass hover-lift">
              <h2 className="mv-title text-gradient">Our Mission</h2>
              <p>To provide a nurturing and intellectually stimulating environment that empowers students to reach their highest potential, develop strong moral character, and become responsible global citizens.</p>
            </div>
            <div className="vision-card glass hover-lift">
              <h2 className="mv-title text-gradient">Our Vision</h2>
              <p>To be recognized globally as a center of educational excellence that fosters innovation, critical thinking, and a lifelong love for learning in every student.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* History Timeline */}
      <section className="section history-section bg-light">
        <div className="container">
          <Reveal className="section-header text-center">
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle">A young institution, growing with purpose since 2022.</p>
          </Reveal>
          <Reveal className="timeline" delay={100}>
            {history.map((event, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-year text-gradient">{event.year}</div>
                <div className="timeline-content glass">
                  <h3>{event.title}</h3>
                  <p>{event.desc}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Core Values */}
      <section className="section core-values">
        <div className="container">
          <Reveal className="section-header text-center">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">The guiding principles that shape our school culture.</p>
          </Reveal>

          <Reveal className="grid grid-2 grid-4-lg values-grid" delay={100}>
            {values.map((val, idx) => (
              <div key={idx} className="value-card glass hover-lift">
                <div className={`value-icon-wrapper tile-${val.tile}`}>
                  {val.icon}
                </div>
                <div className="value-text">
                  <h3 className="value-title">{val.title}</h3>
                  <p className="value-desc">{val.desc}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Life at SATTVA */}
      <section className="section life-section bg-light">
        <div className="container">
          <Reveal className="section-header text-center">
            <h2 className="section-title">Life at SATTVA</h2>
            <p className="section-subtitle">Beyond the classroom — the moments that shape our students.</p>
          </Reveal>
          <Reveal className="grid grid-2 grid-3-lg" delay={100}>
            {lifeAtSattva.map((item, idx) => (
              <div key={idx} className="value-card glass hover-lift">
                <div className={`value-icon-wrapper tile-${item.tile}`}>
                  {item.icon}
                </div>
                <div className="value-text">
                  <h3 className="value-title">{item.title}</h3>
                  <p className="value-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Quote */}
      <section className="section quote-section text-center">
        <div className="container">
          <blockquote className="legend-quote">
            "Education is the manifestation of the perfection already in man."
          </blockquote>
          <p className="legend-quote-author">— Swami Vivekananda</p>
        </div>
      </section>

      {/* Accreditations */}
      <section className="section accreditations-section text-center">
        <div className="container">
          <h2 className="section-title mb-4">Affiliations & Offerings</h2>
          <div className="affiliation-chips">
            <div className="glass px-4 py-2 affiliation-chip">
              <CheckCircle className="text-primary" /> <span className="font-semibold">GSEB State Affiliated</span>
            </div>
            <div className="glass px-4 py-2 affiliation-chip">
              <CheckCircle className="text-primary" /> <span className="font-semibold">JrKG to Std 12</span>
            </div>
            <div className="glass px-4 py-2 affiliation-chip">
              <CheckCircle className="text-primary" /> <span className="font-semibold">English & Gujarati Mediums</span>
            </div>
            <div className="glass px-4 py-2 affiliation-chip">
              <CheckCircle className="text-primary" /> <span className="font-semibold">Science & Commerce Streams</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
