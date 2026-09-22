import "./About.css";

function About() {
  return (
    <section id="about" className="about">

      <div className="about-left">
        <p className="section-tag">About Me</p>

        <h2>Building software that solves real problems.</h2>
      </div>

      <div className="about-right">

        <p>
          I'm Jaiye Adeboye, a Full-Stack Software Engineer with a First Class
          degree in Computer Science. I enjoy building responsive,
          user-focused web applications using modern JavaScript technologies.
        </p>

        <p>
          I work primarily with React, Node.js, Express, PostgreSQL and Prisma,
          and I'm passionate about creating clean, scalable applications that
          provide a great user experience.
        </p>

        <p>
          I'm currently looking for opportunities where I can contribute,
          continue learning, and grow as a software engineer while building
          impactful products.
        </p>

      </div>

    </section>
  );
}

export default About;