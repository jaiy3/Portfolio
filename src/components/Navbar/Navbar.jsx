import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">JAIYE.</div>

      <ul className="nav-links">
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;