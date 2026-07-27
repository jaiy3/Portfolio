import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">

      <p className="section-tag">Portfolio</p>

      <h2>Featured Projects</h2>

      <div className="project-card">

        <div className="project-image">

          <img
            src="/images/applyflow-dashboard.png"
            alt="ApplyFlow Dashboard"
          />

        </div>

        <div className="project-info">

          <h3>ApplyFlow</h3>

          <p>
            A full-stack job application tracker that helps users organize
            applications, monitor progress, manage deadlines and streamline
            their job search.
          </p>

          <div className="tech-stack">

            <span>React</span>
            <span>Express</span>
            <span>Node.js</span>
            <span>PostgreSQL</span>
            <span>Prisma</span>
            <span>JWT</span>

          </div>

          <div className="project-buttons">

            <a
              href="https://applyflow-swart.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="primary-btn"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/jaiy3/applyflow"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              GitHub
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;