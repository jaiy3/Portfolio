import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <span className="hero-tag">
          👋 Open to Opportunities
        </span>

        <h1>
          Hi, I'm <span>Jaiye Adeboye</span>
        </h1>

        <h2>Full-Stack Software Engineer</h2>

        <p>
          I build scalable full-stack applications with React, TypeScript, Node.js, Express, PostgreSQL and Prisma. I'm passionate about creating clean user experiences and production-ready software from database to deployment.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View Projects
          </a>

          <a
            href="/Jaiye-Adeboye-CV.pdf"
            download="Jaiye-Adeboye-CV.pdf"
            className="secondary-btn"
          >
          Download CV
        </a>
        </div>

      </div>

      <div className="hero-image">

        <div className="laptop">

          <div className="laptop-screen">

            <img
              src="/images/teamflow-dashboard.png"
              alt="TeamFlow Dashboard"
              loading="lazy"
            />

          </div>

          <div className="laptop-base"></div>

        </div>

      </div>

    </section>
  );
}

export default Hero;