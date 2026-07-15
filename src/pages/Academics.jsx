import { BookOpen, Laptop, FlaskConical, Music, Palette, Users, Globe2, Lightbulb, Calendar as CalendarIcon, HeartHandshake } from 'lucide-react';
import './Academics.css';

const Academics = () => {
  const programs = [
    { icon: <BookOpen className="program-icon" />, title: "Primary Schooling", desc: "From JrKG & SrKG up to Grade 5. Builds foundational reading, writing, mathematical literacy, and cognitive thinking." },
    { icon: <Laptop className="program-icon" />, title: "Secondary Education", desc: "Grades 6 to 10 with a rich curriculum aligned with GSEB standards, introducing computer studies and advanced science." },
    { icon: <FlaskConical className="program-icon" />, title: "Higher Secondary (Science)", desc: "Grades 11 & 12 streams with deep focus on Physics, Chemistry, Biology, Mathematics, and advanced laboratory investigations." },
    { icon: <Music className="program-icon" />, title: "Higher Secondary (Commerce)", desc: "Grades 11 & 12 streams focusing on business management, Economics, Accountancy, statistics, and organizational leadership." },
  ];

  const cocurriculars = [
    { icon: <Palette />, title: "Fine Arts Club" },
    { icon: <Globe2 />, title: "Model United Nations" },
    { icon: <Lightbulb />, title: "Robotics & Coding" },
    { icon: <Users />, title: "Debate Society" }
  ];

  const supportServices = [
    {
      title: "Academic Tutoring",
      desc: "One-on-one and group tutoring sessions available after school for all subjects.",
      icon: <BookOpen size={32} />
    },
    {
      title: "College Counseling",
      desc: "Dedicated advisors helping students navigate university applications and scholarships.",
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
          <p className="page-subtitle">A GSEB-affiliated curriculum from JrKG to Grade 12, offered in both English and Gujarati medium.</p>
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
              <p>Equipped with modern instrumentation for chemistry, physics, and biology experiments.</p>
            </div>
            <div className="facility-card glass hover-lift">
              <h3 className="facility-title">Computer & Innovation Lab</h3>
              <p>High‑performance workstations, 3D printers, and robotics kits.</p>
            </div>
            <div className="facility-card glass hover-lift">
              <h3 className="facility-title">Arts Studio & Music Hall</h3>
              <p>Spacious studios, sound‑proof practice rooms, and a performance auditorium.</p>
            </div>
            <div className="facility-card glass hover-lift">
              <h3 className="facility-title">Sports Complex</h3>
              <p>Indoor courts, fitness centre, and outdoor fields for diverse athletics.</p>
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
