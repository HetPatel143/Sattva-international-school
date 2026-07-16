// Shared hero for every interior page — replaces the page-header JSX
// that used to be hand-duplicated in About/Academics/Admissions/Contact/Gallery.
const PageHeader = ({ title, subtitle, image, alt, emphasis = false, italicSubtitle = false }) => {
  const smallImage = image.replace('w=1920', 'w=800');

  return (
    <section className="page-header">
      <div className="page-header-bg">
        <img
          src={image}
          srcSet={`${smallImage} 800w, ${image} 1920w`}
          sizes="100vw"
          alt={alt}
          fetchPriority="high"
        />
      </div>
      <div className="page-header-content container">
        <h1 className={emphasis ? 'page-title page-title-emphasis' : 'page-title'}>{title}</h1>
        <p className={italicSubtitle ? 'page-subtitle page-subtitle-italic mx-auto' : 'page-subtitle'}>
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default PageHeader;
