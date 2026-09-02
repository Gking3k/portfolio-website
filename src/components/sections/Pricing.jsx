function Pricing() {
  return (
    <section
      className="section"
      id="pricing"
    >
      <div className="container">

        <p className="eyebrow">
          PRICING
        </p>

        <h2>
          Choose the level
          that fits your business.
        </h2>

        <p className="pricing-intro">
          These are starting prices.
          Every project is quoted
          according to its requirements,
          scope and functionality.
        </p>

        <div className="pricing-grid">

          {/* STARTER */}
          <article className="pricing-card">

            <span className="eyebrow">
              STARTER
            </span>

            <h3>
              Simple Website
            </h3>

            <p>
              For individuals and very
              small businesses that need
              a simple professional
              online presence.
            </p>

            <ul className="pricing-features">
              <li>
                One-page or very small website
              </li>

              <li>
                Responsive design
              </li>

              <li>
                About / services sections
              </li>

              <li>
                WhatsApp and contact links
              </li>

              <li>
                Mobile optimization
              </li>

              <li>
                Basic SEO
              </li>

              <li>
                Deployment
              </li>
            </ul>

            <strong>
              From ₦100,000
            </strong>

            <a
              href="#contact"
              className="btn btn-secondary"
            >
              Get Started
            </a>

          </article>


          {/* BASIC */}
          <article className="pricing-card">

            <span className="eyebrow">
              BASIC
            </span>

            <h3>
              Business Website
            </h3>

            <p>
              For businesses that need
              a complete professional
              website to establish
              credibility online.
            </p>

            <ul className="pricing-features">
              <li>
                Up to 5 main pages
              </li>

              <li>
                Custom responsive design
              </li>

              <li>
                Services / products
              </li>

              <li>
                Gallery / portfolio
              </li>

              <li>
                Contact & WhatsApp
              </li>

              <li>
                Mobile optimization
              </li>

              <li>
                Basic SEO
              </li>

              <li>
                Deployment
              </li>
            </ul>

            <strong>
              From ₦250,000
            </strong>

            <a
              href="#contact"
              className="btn btn-secondary"
            >
              Get Started
            </a>

          </article>


          {/* ADVANCED */}
          <article className="pricing-card featured">

            <span className="eyebrow">
              ADVANCED
            </span>

            <h3>
              Full-Stack Website
            </h3>

            <p>
              For businesses that need
              e-commerce, databases,
              dashboards or custom
              functionality.
            </p>

            <ul className="pricing-features">
              <li>
                Custom frontend
              </li>

              <li>
                Backend / API
              </li>

              <li>
                Database
              </li>

              <li>
                Authentication
              </li>

              <li>
                Admin dashboard
              </li>

              <li>
                E-commerce functionality
              </li>

              <li>
                Orders & inventory
              </li>

              <li>
                Payment integrations
              </li>

              <li>
                Email / file storage
              </li>
            </ul>

            <strong>
              From ₦900,000
            </strong>

            <a
              href="#contact"
              className="btn btn-primary"
            >
              Discuss Your Project
            </a>

          </article>


          {/* CUSTOM */}
          <article className="pricing-card">

            <span className="eyebrow">
              CUSTOM
            </span>

            <h3>
              Web Application
            </h3>

            <p>
              For businesses that need
              a system built around
              unique workflows and
              requirements.
            </p>

            <ul className="pricing-features">
              <li>
                Custom business workflows
              </li>

              <li>
                Specialized dashboards
              </li>

              <li>
                Complex integrations
              </li>

              <li>
                Client portals
              </li>

              <li>
                Booking systems
              </li>

              <li>
                Business automation
              </li>

              <li>
                Custom APIs
              </li>
            </ul>

            <strong>
              From ₦1,500,000
            </strong>

            <a
              href="#contact"
              className="btn btn-secondary"
            >
              Request a Quote
            </a>

          </article>

        </div>


        <p className="pricing-note">
          Domain registration, hosting,
          paid third-party services,
          premium software and transaction
          fees are billed separately where
          applicable.
        </p>

      </div>
    </section>
  );
}

export default Pricing;