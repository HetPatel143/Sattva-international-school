import { BookOpen, Backpack, FlaskConical, GraduationCap, Palette, Music2, Swords, Dumbbell, Activity, Flower2, Monitor, Globe2, Calendar as CalendarIcon, HeartHandshake } from 'lucide-react';
import './Academics.css';

const Academics = () => {
  const programs = [
    { icon: <BookOpen className="program-icon" />, title: "Pre-Primary", desc: "JrKG & SrKG — playful, activity-based learning that builds curiosity, motor skills, and a lifelong love of school." },
    { icon: <Backpack className="program-icon" />, title: "Primary", desc: "Balvatika to Std 8. Builds foundational reading, writing, mathematical literacy, and cognitive thinking." },
    { icon: <FlaskConical className="program-icon" />, title: "Secondary", desc: "Std 9 & 10 with a rich curriculum aligned with GSEB standards, preparing students for board examinations." },
    { icon: <GraduationCap className="program-icon" />, title: "Higher Secondary", desc: "Std 11 & 12 with Science and Commerce streams, each with focused subjects and dedicated faculty." },
  ];

  const cocurriculars = [
    { icon: <Palette />, title: "Drawing & Arts" },
    { icon: <Music2 />, title: "Dance" },
    { icon: <Swords />, title: "Karate" },
    { icon: <Dumbbell />, title: "Physical Training" },
    { icon: <Activity />, title: "Skating" },
    { icon: <Flower2 />, title: "Yoga & Meditation" },
    { icon: <Monitor />, title: "Computer" }
  ];

  const supportServices = [
    {
      title: "Academic Tutoring",
      desc: "One-on-one and group tutoring sessions available after school for all subjects.",
      icon: <BookOpen size={32} />
    },
    {
      title: "Stream & Career Guidance",
      desc: "Dedicated advisors help students choose between Science and Commerce at Std 11, and plan their path ahead.",
      icon: <Globe2 size={32} />
    },
    {
      title: "Mental Health Support",
      desc: "On-campus counselors available for emotional and psychological well-being.",
      icon: <HeartHandshake size={32} />
    }
  ];

  return (
    <div className="academics-page animate-fade-in">
      {/* Header Section */}
      <section className="page-header">
        <div className="page-header-bg">
          <img
            src="https://images.unsplash.com/photo-1519337265831-2811a7fcaeb6?auto=format&fit=crop&q=80&w=1920"
            srcSet="https://images.unsplash.com/photo-1519337265831-2811a7fcaeb6?auto=format&fit=crop&q=80&w=800 800w, https://images.unsplash.com/photo-1519337265831-2811a7fcaeb6?auto=format&fit=crop&q=80&w=1920 1920w"
            sizes="100vw"
            alt="Academics"
            fetchPriority="high"
          />
        </div>
        <div className="page-header-content container">
          <h1 className="page-title">Academics at SATTVA</h1>
          <p className="page-subtitle">A GSEB-affiliated curriculum from JrKG to Std 12, offered in both English and Gujarati medium.</p>
        </div>
      </section>

      {/* Quote */}
      <section className="section quote-section text-center">
        <div className="container">
          <blockquote className="legend-quote">
            "Teachers should be the best minds in the country."
          </blockquote>
          <p className="legend-quote-author">— Dr. Sarvepalli Radhakrishnan</p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section programs-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Academic Programs</h2>
            <p className="section-subtitle">A balanced blend of theory, practice, and creativity.</p>
          </div>
          <div className="grid grid-2 grid-4-lg programs-grid">
            {programs.map((p, i) => (
              <div key={i} className="program-card glass hover-lift">
                <div className="program-icon-wrapper">
                  {p.icon}
                </div>
                <h3 className="program-title">{p.title}</h3>
                <p className="program-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Co-curriculars Section */}
      <section className="section cocurricular-section bg-light">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div>
              <h2 className="section-title">Beyond the Classroom</h2>
              <p className="section-subtitle" style={{ marginBottom: '2rem' }}>Education at SATTVA extends beyond textbooks. Our co-curricular programs are designed to discover hidden talents and build leadership skills.</p>
              <div className="grid grid-2">
                {cocurriculars.map((item, idx) => (
                  <div key={idx} className="cocurricular-item glass flex-center" style={{ gap: '1rem', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                    <div className="text-primary">{item.icon}</div>
                    <span className="font-semibold">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="cocurricular-image-wrapper">
               <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" alt="Students in library" className="rounded-image shadow-xl" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Student Support */}
      <section className="section support-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Student Support Services</h2>
            <p className="section-subtitle">We ensure every student has the resources they need to succeed.</p>
          </div>
          <div className="grid grid-3">
            {supportServices.map((service, idx) => (
              <div key={idx} className="support-card glass text-center hover-lift">
                <div className="support-icon mx-auto text-primary mb-4">{service.icon}</div>
                <h3 className="support-title">{service.title}</h3>
                <p className="support-desc">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section facilities-section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">World‑Class Facilities</h2>
            <p className="section-subtitle">Spaces designed to inspire learning and discovery.</p>
          </div>
          <div className="grid grid-2">
            <div className="facility-card glass hover-lift">
              <h3 className="facility-title">Science Laboratories</h3>
              <p>Dedicated Physics, Chemistry, and Biology labs equipped for hands-on experiments in the Science stream.</p>
            </div>
            <div className="facility-card glass hover-lift">
              <h3 className="facility-title">Computer Lab</h3>
              <p>A well-equipped lab where students learn computer basics, Word, Excel, painting, and HTML/CSS as per the GSEB curriculum.</p>
            </div>
            <div className="facility-card glass hover-lift">
              <h3 className="facility-title">Two Auditoriums</h3>
              <p>Spacious venues that host our annual function, cultural events, and school assemblies.</p>
            </div>
            <div className="facility-card glass hover-lift">
              <h3 className="facility-title">Fully AC Classrooms</h3>
              <p>Every classroom is air-conditioned, keeping students comfortable and focused through the school day.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Calendar Highlights Banner */}
      <section className="section calendar-section text-center">
        <div className="container">
          <CalendarIcon size={48} className="mx-auto mb-4 opacity-75" />
          <h2 className="section-title text-white">Academic Calendar 2026-27</h2>
          <p className="section-subtitle text-white mb-4" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>Stay up to date with semester start dates, examination periods, and holidays.</p>
          <button className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>
            Download Full Calendar
          </button>
        </div>
      </section>
    </div>
  );
};

export default Academics;
