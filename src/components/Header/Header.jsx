import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [openMega, setOpenMega] = useState(null);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="header-container">
        {/* LOGO */}
        <Link to="/" className="logo">
          <img
            src="https://absnit.com/wp-content/uploads/2025/05/Logo-Img.png"
            alt="Absnit logo"
            className="logo-img"
          />
        </Link>

        {/* NAV */}
        <nav className="nav">
          <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
            Home
          </Link>

          <Link to="/about" className={`nav-link ${isActive("/about") ? "active" : ""}`}>
            About
          </Link>

          {/* SERVICES */}
          <div
            className="nav-mega-wrap"
            onMouseEnter={() => setOpenMega("services")}
            onMouseLeave={() => setOpenMega(null)}
          >
            <Link
              to="/services"
              className={`nav-link ${isActive("/services") ? "active" : ""}`}
            >
              Services ▾
            </Link>

            {openMega === "services" && (
              <div className="nav-mega">
            
                <Link to="/services" className="nav-mega-item">Custom Software Development</Link>
                <Link to="/services" className="nav-mega-item">Mobile App Development</Link>
                <Link to="/services" className="nav-mega-item">Cloud Solutions</Link>
                <Link to="/services" className="nav-mega-item">IT Consulting</Link>
                <Link to="/services" className="nav-mega-item">Cybersecurity Services</Link>
              </div>
            )}
          </div>

          {/* INDUSTRIES */}
          <div
            className="nav-mega-wrap"
            onMouseEnter={() => setOpenMega("industries")}
            onMouseLeave={() => setOpenMega(null)}
          >
            <Link
              to="/industries"
              className={`nav-link ${isActive("/industries") ? "active" : ""}`}
            >
              Industries ▾
            </Link>

            {openMega === "industries" && (
              <div className="nav-mega">
        
                <Link to="/industries" className="nav-mega-item">Banking & Finance</Link>
                <Link to="/industries" className="nav-mega-item">Healthcare</Link>
                <Link to="/industries" className="nav-mega-item">Education</Link>
                <Link to="/industries" className="nav-mega-item">Retail & E-Commerce</Link>
                <Link to="/industries" className="nav-mega-item">Manufacturing</Link>
              </div>
            )}
          </div>

          {/* TECHNOLOGY */}
          <div
            className="nav-mega-wrap"
            onMouseEnter={() => setOpenMega("technology")}
            onMouseLeave={() => setOpenMega(null)}
          >
            <Link
              to="/technology"
              className={`nav-link ${isActive("/technology") ? "active" : ""}`}
            >
              Technology ▾
            </Link>

            {openMega === "technology" && (
              <div className="nav-mega">
                
                <Link to="/technology" className="nav-mega-item">Frontend</Link>
                <Link to="/technology" className="nav-mega-item">Backend</Link>
                <Link to="/technology" className="nav-mega-item">Cloud Platforms</Link>
                <Link to="/technology" className="nav-mega-item">DevOps Tools</Link>
                <Link to="/technology" className="nav-mega-item">Databases</Link>
              </div>
            )}
          </div>

          <Link to="/contact" className={`nav-link ${isActive("/contact") ? "active" : ""}`}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
