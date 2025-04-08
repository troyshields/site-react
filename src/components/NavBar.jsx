import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/NavBar.css";

export default function NavBar() {
  const location = useLocation()
  const [navActive, setNavActive] = useState(false);
  const toggleRef = useRef(null) // Ref for the toggle button

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && navActive) { // close menu on larger screens
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [navActive]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      toggleNav()
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/">Troy Shields</Link>
        </div>
        <button 
          className="navbar-toggle" 
          onClick={toggleNav}
          aria-label="Toggle navigation menu"
          aria-expanded={navActive}
          >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        <ul className={`nav-menu ${navActive ? "active" : ""}`}>
          <li
            className={location.pathname === '/projects' ? 'active' : ''}>
            <Link 
              to="/projects" 
              onClick={closeMenu}
              >Projects</Link>
          </li>
          <li 
            className={location.pathname === '/about' ? 'active' : ''}>
            <Link 
              to="/about" 
              onClick={closeMenu}
              >About</Link>
          </li>
          <li 
            className={location.pathname === '/contact' ? 'active' : ''}>
            <Link 
              to="/contact" 
              onClick={closeMenu}
              >Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}