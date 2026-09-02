function ProjectCard({
  project,
  index,
}) {
  return (
    <article className="portfolio-project-card">

      <div className="portfolio-project-image">

        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} website preview`}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="portfolio-project-placeholder">
            <span>
              PROJECT PREVIEW
            </span>
          </div>
        )}

      </div>

      <div className="portfolio-project-body">

        <div className="portfolio-project-top">

          <span className="portfolio-project-number">
            {String(index + 1).padStart(
              2,
              "0"
            )}
          </span>

          <span className="portfolio-project-category">
            {project.category}
          </span>

        </div>

        <h3>
          {project.title}
        </h3>

        <p>
          {project.description}
        </p>

        <div className="portfolio-project-features">

          {project.features.map(
            (feature) => (
              <span
                key={feature}
              >
                {feature}
              </span>
            )
          )}

        </div>

        <div className="portfolio-project-tech">

          {project.technologies.map(
            (technology) => (
              <span
                key={technology}
              >
                {technology}
              </span>
            )
          )}

        </div>

        <div className="portfolio-project-links">

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Live Website
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              GitHub
            </a>
          )}

        </div>

      </div>

    </article>
  );
}

export default ProjectCard;