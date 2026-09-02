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
          Websites that make
          businesses look
          established.
        </h1>

        <p className="hero-description">
          I design and build modern
          websites and web applications
          that help businesses attract
          customers, build trust and grow
          online.
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

        <div className="hero-note">

          <span>
            Nigeria · Remote
          </span>

          <span>
            Websites · E-commerce · Web Apps
          </span>

        </div>

        <div className="availability-status">
          <span></span>

          Currently accepting
          freelance projects
        </div>

      </div>
    </section>
  );
}

export default Hero;