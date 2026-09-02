import ProjectCard from "../common/ProjectCard";
import { projects } from "../../data/projects";

function Projects() {
  return (
    <section
      className="section portfolio-projects-section"
      id="projects"
    >
      <div className="container">

        <div className="portfolio-projects-heading">

          <div>
            <p className="eyebrow">
              SELECTED WORK
            </p>

            <h2>
              Projects I've built.
            </h2>
          </div>

          <p>
            A selection of projects
            that demonstrate how I
            approach design,
            functionality and full-stack
            development.
          </p>

        </div>

        <div className="portfolio-project-grid">

          {projects.map(
            (project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            )
          )}

        </div>

      </div>
    </section>
  );
}

export default Projects;