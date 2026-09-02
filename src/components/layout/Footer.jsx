function Footer() {
  const year =
    new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">

        <div>
          <strong>
            G3 Web Studio
          </strong>

          <p>
            Websites and web applications
            built for growing businesses.
          </p>
        </div>

        <p>
          © {year} G3 Web Studio.
        </p>

      </div>
    </footer>
  );
}

export default Footer;