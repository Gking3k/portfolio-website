import {
  useState,
} from "react";


function Header() {
  const [
    menuOpen,
    setMenuOpen,
  ] = useState(false);


  function closeMenu() {
    setMenuOpen(false);
  }


  return (
    <header className="site-header">

      <div className="container header-inner">

        <a
          href="#top"
          className="logo"
          onClick={closeMenu}
        >
          G3

          <span>
            WEB STUDIO
          </span>
        </a>


        <nav
          className="main-nav desktop-nav"
          aria-label="Main navigation"
        >

          <a href="#services">
            Services
          </a>

          <a href="#pricing">
            Pricing
          </a>

          <a href="#projects">
            Work
          </a>

          <a href="#about">
            About
          </a>

          <a href="#contact">
            Contact
          </a>

        </nav>


        <a
          href="#contact"
          className="header-cta desktop-cta"
        >
          Start a Project →
        </a>


        <button
          type="button"
          className={
            menuOpen
              ? "menu-toggle open"
              : "menu-toggle"
          }
          aria-label={
            menuOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={
            menuOpen
          }
          aria-controls="mobile-navigation"
          onClick={() =>
            setMenuOpen(
              (current) =>
                !current
            )
          }
        >
          <span></span>
          <span></span>
        </button>

      </div>


      <nav
        id="mobile-navigation"
        className={
          menuOpen
            ? "mobile-nav open"
            : "mobile-nav"
        }
        aria-label="Mobile navigation"
      >

        <a
          href="#services"
          onClick={closeMenu}
        >
          Services
        </a>

        <a
          href="#pricing"
          onClick={closeMenu}
        >
          Pricing
        </a>

        <a
          href="#projects"
          onClick={closeMenu}
        >
          Work
        </a>

        <a
          href="#about"
          onClick={closeMenu}
        >
          About
        </a>

        <a
          href="#contact"
          onClick={closeMenu}
        >
          Contact
        </a>

        <a
          href="#contact"
          className="mobile-nav-cta"
          onClick={closeMenu}
        >
          Start a Project →
        </a>

      </nav>

    </header>
  );
}


export default Header;