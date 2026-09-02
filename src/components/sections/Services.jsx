function Services() {
  return (
    <section
      className="section"
      id="services"
    >
      <div className="container">

        <p className="eyebrow">
          SERVICES
        </p>

        <h2>
          From simple websites
          to complete web
          applications.
        </h2>

        <div className="basic-grid">

          {/* STARTER */}
          <article>
            <span className="eyebrow">
              01
            </span>

            <div>
              <h3>
                Starter Websites
              </h3>

              <p>
                Simple, professional
                websites for individuals
                and very small businesses
                that need to establish an
                online presence.
              </p>
            </div>

            <a
              href="#pricing"
              className="card-link"
            >
              EXPLORE →
            </a>
          </article>


          {/* BASIC */}
          <article>
            <span className="eyebrow">
              02
            </span>

            <div>
              <h3>
                Basic Websites
              </h3>

              <p>
                Professional websites
                for businesses,
                professionals and
                personal brands.
              </p>
            </div>

            <a
              href="#basic-websites"
              className="card-link"
            >
              EXPLORE →
            </a>
          </article>


          {/* ADVANCED */}
          <article>
            <span className="eyebrow">
              03
            </span>

            <div>
              <h3>
                Advanced Websites
              </h3>

              <p>
                E-commerce platforms
                and full-stack websites
                with databases,
                authentication,
                dashboards and custom
                functionality.
              </p>
            </div>

            <a
              href="#advanced-websites"
              className="card-link"
            >
              EXPLORE →
            </a>
          </article>


          {/* CUSTOM */}
          <article>
            <span className="eyebrow">
              04
            </span>

            <div>
              <h3>
                Custom Web Apps
              </h3>

              <p>
                Database-driven
                applications with
                specialized workflows,
                integrations and
                functionality built
                around the business.
              </p>
            </div>

            <a
              href="#pricing"
              className="card-link"
            >
              EXPLORE →
            </a>
          </article>

        </div>

      </div>
    </section>
  );
}

export default Services;