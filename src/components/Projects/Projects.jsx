import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <p className="section-tag">Portfolio</p>

      <h2>Featured Projects</h2>

      {/* ================= ATLASAI ================= */}

      <div className="project-card">
        <div className="project-gallery">
          <a
            href="/images/atlasai-dashboard-portfolio.png"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="hero-image"
              src="/images/atlasai-dashboard-portfolio.png"
              alt="AtlasAI Portfolio Dashboard"
            />
          </a>

          <div className="gallery-row">
            <a
              href="/images/atlasai-dashboard-watchlist.png"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/atlasai-dashboard-watchlist.png"
                alt="AtlasAI Watchlist"
              />
            </a>

            <a
              href="/images/atlasai-ai-assist-transactions.PNG"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/atlasai-ai-assist-transactions.PNG"
                alt="AtlasAI AI Assistance and Transaction Activity"
              />
            </a>

            <a
              href="/images/atlasai-register.png"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/atlasai-register.png"
                alt="AtlasAI Registration"
              />
            </a>
          </div>

          <video
            className="hero-image"
            controls
            preload="metadata"
            poster="/images/atlasai-walletconnect-poster2.png"
          >
            <source
              src="/images/atlasai-walletconnect.MOV"
              type="video/quicktime"
            />
            Your browser does not support the video element.
          </video>
        </div>

        <div className="project-info">
          <h3>AtlasAI</h3>

          <p>
            A full-stack Web3 portfolio analytics platform that enables users
            to securely connect their wallets, monitor portfolio performance,
            track token prices, review transaction activity, and access
            AI-powered portfolio insights.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>TypeScript</span>
            <span>Express</span>
            <span>PostgreSQL</span>
            <span>Prisma</span>
            <span>Wagmi</span>
            <span>RainbowKit</span>
            <span>WalletConnect</span>
            <span>Alchemy</span>
            <span>OpenAI</span>
          </div>

          <h4 className="feature-title">Key Features</h4>

          <ul className="feature-list">
            <li>WalletConnect wallet integration</li>
            <li>Real-time portfolio and token analytics</li>
            <li>Token price watchlists</li>
            <li>Transaction activity and history</li>
            <li>AI-powered portfolio assistance</li>
            <li>JWT authentication and responsive UI</li>
          </ul>

          <div className="project-buttons">
            <a
              href="https://atlas-ai-ashy-six.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="primary-btn"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/jaiy3/AtlasAI"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* ================= TEAMFLOW ================= */}

      <div className="project-card">
        <div className="project-gallery">
          <a
            href="/images/teamflow-dashboard.png"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="hero-image"
              src="/images/teamflow-dashboard.png"
              alt="TeamFlow Dashboard"
            />
          </a>

          <div className="gallery-row">
            <a
              href="/images/teamflow-workspaces.png"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/teamflow-workspaces.png"
                alt="Workspaces"
              />
            </a>

            <a
              href="/images/teamflow-project-details.png"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/teamflow-project-details.png"
                alt="TeamFlow Project Details"
              />
            </a>

            <a
              href="/images/teamflow-tasks.png"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/teamflow-tasks.png"
                alt="TeamFlow Tasks"
              />
            </a>
          </div>
        </div>

        <div className="project-info">
          <h3>TeamFlow</h3>

          <p>
            A full-stack project management platform that enables teams to
            organize workspaces, manage projects, assign tasks, collaborate
            through comments, and monitor activity in one intuitive platform.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>TypeScript</span>
            <span>Express</span>
            <span>PostgreSQL</span>
            <span>Prisma</span>
            <span>JWT</span>
          </div>

          <h4 className="feature-title">Key Features</h4>

          <ul className="feature-list">
            <li>JWT Authentication</li>
            <li>Workspace Management</li>
            <li>Project Management</li>
            <li>Task Management</li>
            <li>Activity Timeline</li>
            <li>Responsive Design</li>
          </ul>

          <div className="project-buttons">
            <a
              href="https://team-flow-ivory.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="primary-btn"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/jaiy3/TeamFlow"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* ================= APPLYFLOW ================= */}

      <div className="project-card">
        <div className="project-image">
          <a
            href="/images/applyflow-dashboard.png"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/applyflow-dashboard.png"
              alt="ApplyFlow Dashboard"
            />
          </a>
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