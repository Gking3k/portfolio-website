function Hero() {
  return (
    <section
      className="hero-section"
      id="top"
    >
      <div className="container">
        <p className="eyebrow">
          WEB DESIGN & DEVELOPMENT
        </p>

        <h1>
          Professional websites
          for modern businesses.
        </h1>

        <p className="hero-description">
          I design and build responsive
          websites and web applications
          for businesses that want a
          stronger presence online.
        </p>

        <div className="hero-actions">
          <a
            href="#projects"
            className="btn btn-primary"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="btn btn-secondary"
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;