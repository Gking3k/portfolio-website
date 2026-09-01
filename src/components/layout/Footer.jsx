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
            Websites built to help
            businesses grow online.
          </p>
        </div>

        <p>
          © {year} G3 Web Studio.
          All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;