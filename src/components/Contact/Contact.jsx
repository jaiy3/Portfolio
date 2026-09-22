import "./Contact.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">

      <p className="section-tag">Contact</p>

      <h2>Let's Work Together</h2>

      <p className="contact-text">
        I’m currently open to software engineering opportunities, freelance work and remote roles. If you’d like to work together, feel free to reach out.
      </p>

      <div className="contact-links">

        <a href="mailto:monjaiye@gmail.com">
          <FaEnvelope />
          Email
        </a>

        <a
          href="https://github.com/jaiy3"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
          GitHub
        </a>

        

      </div>

    </section>
  );
}

export default Contact;