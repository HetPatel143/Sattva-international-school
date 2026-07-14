import { Award, Target, Heart, Shield, CheckCircle } from 'lucide-react';
import './About.css';

const About = () => {
  const values = [
    { icon: <Target className="value-icon" />, title: "Excellence", desc: "Striving for the highest standards in all endeavors.", tile: "red" },
    { icon: <Heart className="value-icon" />, title: "Compassion", desc: "Fostering a caring and inclusive community.", tile: "green" },
    { icon: <Shield className="value-icon" />, title: "Integrity", desc: "Upholding honesty and strong moral principles.", tile: "purple" },
    { icon: <Award className="value-icon" />, title: "Innovation", desc: "Embracing new ideas and creative problem-solving.", tile: "blue" }
  ];

  const leadership = [
    { name: "Dr. Sarah Jenkins", role: "Principal", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300" },
    { name: "Prof. Michael Chang", role: "Vice Principal, Academics", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300&h=300" },
    { name: "Eleanor Rigby", role: "Head of Student Affairs", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300&h=300" },
    { name: "David Osei", role: "Director of Athletics", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300" }
  ];

  const history = [
    { year: "2022", title: "Foundation", desc: "SATTVA International School was founded in Singarwa, Ahmedabad with a vision of blending value-based traditional learning with modern smart education." },
    { year: "2023", title: "GSEB Affiliation Secured", desc: "Successfully secured GSEB curriculum approval, offering both English and Gujarati medium instruction." },
    { year: "2024", title: "Infrastructure & Lab Expansion", desc: "Inaugurated advanced chemistry, physics, and computational thinking labs, along with wheelchair-accessible facilities." },
    { year: "2026", title: "Holistic Development Leader", desc: "Emerged as a premium center of primary and secondary education, known for character building and safety." }
  ];

  return (
    <div className="about-page animate-fade-in">
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-bg">
           <img src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=1920" alt="About SATTVA" loading="lazy" />
        </div>
        <div className="page-header-content container">
          <h1 className="page-title">About SATTVA School</h1>
          <p className="page-subtitle">A legacy of excellence, character building, and holistic education.</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section mission-vision">
        <div className="container">
          <div className="grid grid-2">
            <div className="mission-card glass hover-lift">
              <h2 className="mv-title text-gradient">Our Mission</h2>
              <p>To provide a nurturing and intellectually stimulating environment that empowers students to reach their highest potential, develop strong moral character, and become responsible global citizens.</p>
            </div>
            <div className="vision-card glass hover-lift">
              <h2 className="mv-title text-gradient">Our Vision</h2>
              <p>To be recognized globally as a center of educational excellence that fosters innovation, critical thinking, and a lifelong love for learning in every student.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="section principal-msg glass mx-auto my-4" style={{ maxWidth: '90%', borderRadius: 'var(--radius-lg)' }}>
        <div className="container">
          <div className="msg-container">
            <div className="msg-image-wrapper">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" alt="Principal Dr. Sarah Jenkins" className="msg-image" loading="lazy" width="400" height="400" />
            </div>
            <div className="msg-content">
              <h2 className="section-title">Message from the Principal</h2>
              <h3 className="principal-name">Dr. Sarah Jenkins</h3>
              <p className="msg-text">
                "Welcome to SATTVA International School. Since our foundation in Ahmedabad, we have dedicated ourselves to the profound task of nurturing young minds through value-based education. We believe that true learning extends far beyond academic achievements; it is about building strong character, fostering physical and ethical growth, and inspiring a lifelong curiosity. Our campus provides a safe, smart, and resource-rich environment where every child can discover their potential. Join us in this beautiful journey of learning and character building."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="section history-section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle">Over two decades of shaping futures.</p>
          </div>
          <div className="timeline">
            {history.map((event, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-year text-gradient">{event.year}</div>
                <div className="timeline-content glass">
                  <h3>{event.title}</h3>
                  <p>{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section core-values">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">The guiding principles that shape our school culture.</p>
          </div>
          
          <div className="grid grid-2 grid-4-lg values-grid">
            {values.map((val, idx) => (
              <div key={idx} className="value-card text-center glass hover-lift">
                <div className={`value-icon-wrapper mx-auto tile-${val.tile}`}>
                  {val.icon}
                </div>
                <h3 className="value-title">{val.title}</h3>
                <p className="value-desc">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section leadership-section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Leadership Team</h2>
            <p className="section-subtitle">Meet the dedicated professionals leading our institution.</p>
          </div>
          <div className="grid grid-2 grid-4-lg">
            {leadership.map((leader, idx) => (
              <div key={idx} className="leader-card glass text-center hover-lift">
                <img src={leader.image} alt={leader.name} className="leader-image" loading="lazy" width="200" height="200" />
                <h3 className="leader-name">{leader.name}</h3>
                <p className="leader-role">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="section accreditations-section text-center">
        <div className="container">
          <h2 className="section-title mb-4">Affiliations & Offerings</h2>
          <div className="flex-center" style={{ gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', display: 'flex' }}>
            <div className="glass px-4 py-2 flex-center" style={{ gap: '0.5rem', borderRadius: 'var(--radius-full)', display: 'flex', alignItems: 'center' }}>
              <CheckCircle className="text-primary" /> <span className="font-semibold">GSEB State Affiliated</span>
            </div>
            <div className="glass px-4 py-2 flex-center" style={{ gap: '0.5rem', borderRadius: 'var(--radius-full)', display: 'flex', alignItems: 'center' }}>
              <CheckCircle className="text-primary" /> <span className="font-semibold">JrKG to Grade 12</span>
            </div>
            <div className="glass px-4 py-2 flex-center" style={{ gap: '0.5rem', borderRadius: 'var(--radius-full)', display: 'flex', alignItems: 'center' }}>
              <CheckCircle className="text-primary" /> <span className="font-semibold">English & Gujarati Mediums</span>
            </div>
            <div className="glass px-4 py-2 flex-center" style={{ gap: '0.5rem', borderRadius: 'var(--radius-full)', display: 'flex', alignItems: 'center' }}>
              <CheckCircle className="text-primary" /> <span className="font-semibold">Science & Commerce Streams</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
