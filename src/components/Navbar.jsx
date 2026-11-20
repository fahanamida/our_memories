import { Heart } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <a href="#home" className="nav-logo">
        fanooiii <span>♡</span> azhalooii
      </a>

      <div className="nav-menu">
        <a href="#home">Home</a>
        <a href="#story">Our Story</a>
        <a href="#memories">Memories</a>
        <a href="#letter">Letter</a>
      </div>

      <Heart className="nav-icon" />

    </nav>
  );
}

export default Navbar;