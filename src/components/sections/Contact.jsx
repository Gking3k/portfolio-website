function Contact() {
  return (
    <section
      className="section contact-section"
      id="contact"
    >
      <div className="container">
        <p className="eyebrow">
          LET'S WORK TOGETHER
        </p>

        <h2>
          Have a project in mind?
        </h2>

        <p>
          Tell me what you need and
          let's discuss how I can help.
        </p>

        <div className="contact-actions">
          <a
            href="https://wa.me/"
            className="btn btn-primary"
          >
            WhatsApp
          </a>

          <a
            href="mailto:"
            className="btn btn-secondary"
          >
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;