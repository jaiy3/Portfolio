import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Tech Stack</h2>

      <div className="skills-grid">
        <div className="skill-card">
          <h3>Frontend</h3>

          <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Tailwind CSS</li>
            <li>Vite</li>
            <li>React Router</li>
            <li>Axios</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Backend</h3>

          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>REST APIs</li>
            <li>Authentication & Authorization</li>
            <li>JWT</li>
            <li>Zod Validation</li>
            <li>WebSockets</li>
            <li>Redis</li>
            <li>BullMQ</li>
            <li>Rate Limiting</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Database & Infrastructure</h3>

          <ul>
            <li>PostgreSQL</li>
            <li>Prisma ORM</li>
            <li>Docker</li>
            <li>Docker Compose</li>
            <li>GitHub Actions</li>
            <li>Swagger / OpenAPI</li>
            <li>Render</li>
            <li>Railway</li>
            <li>Vercel</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Web3 & AI</h3>

          <ul>
            <li>Ethereum</li>
            <li>Wagmi</li>
            <li>RainbowKit</li>
            <li>Viem</li>
            <li>WalletConnect</li>
            <li>Alchemy</li>
            <li>OpenAI</li>
            <li>OpenRouter</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;