function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">

        <a
          href="#top"
          className="logo"
        >
          G3
          <span>WEB STUDIO</span>
        </a>

        <nav className="main-nav">
          <a href="#about">
            About
          </a>

          <a href="#services">
            Services
          </a>

          <a href="#pricing">
            Pricing
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#contact">
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="header-cta"
        >
          Start a Project
        </a>

      </div>
    </header>
  );
}

export default Header;