import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [openMega, setOpenMega] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const closeMobile = () => {
    setMobileOpen(false);
    setOpenMega(null);
  };

  return (
    <header className="site-header">
      <div className="header-container">
        {/* LOGO */}
        <Link to="/" className="logo" onClick={closeMobile}>
          <img src="/logo.png" alt="ABSN IT Solutions" />
        </Link>

        {/* HAMBURGER */}
        <button
          className="menu-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* NAV */}
        <nav className={`nav ${mobileOpen ? "nav-open" : ""}`}>
          <Link
            to="/"
            className={`nav-link ${isActive("/") ? "active" : ""}`}
            onClick={closeMobile}
          >
            Home
          </Link>

          <Link to="/about" className="nav-link" onClick={closeMobile}>
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
              className="nav-link"
              onClick={() =>
                window.innerWidth <= 950
                  ? setOpenMega(openMega === "services" ? null : "services")
                  : null
              }
            >
              Services ▾
            </Link>

            {openMega === "services" && (
              <div className="nav-mega">
                <Link
                  to="/services/custom-software-development"
                  className="nav-mega-item"
                  onClick={closeMobile}
                >
                  Custom Software Development
                </Link>
                <Link
                  to="/services/mobile-app-development"
                  className="nav-mega-item"
                  onClick={closeMobile}
                >
                  Mobile App Development
                </Link>
                <Link
                  to="/services/cloud-solutions"
                  className="nav-mega-item"
                  onClick={closeMobile}
                >
                  Cloud Solutions
                </Link>
                <Link
                  to="/services/it-consulting"
                  className="nav-mega-item"
                  onClick={closeMobile}
                >
                  IT Consulting
                </Link>
                <Link
                  to="/services/cybersecurity-services"
                  className="nav-mega-item"
                  onClick={closeMobile}
                >
                  Cybersecurity Services
                </Link>
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
              className="nav-link"
              onClick={() =>
                window.innerWidth <= 950
                  ? setOpenMega(openMega === "industries" ? null : "industries")
                  : null
              }
            >
              Industries ▾
            </Link>

            {openMega === "industries" && (
              <div className="nav-mega">
                <Link
                  to="/industries/healthcare"
                  className="nav-mega-item"
                  onClick={closeMobile}
                >
                  Healthcare
                </Link>
                <Link
                  to="/industries/education"
                  className="nav-mega-item"
                  onClick={closeMobile}
                >
                  Education
                </Link>
                <Link
                  to="/industries/manufacturing"
                  className="nav-mega-item"
                  onClick={closeMobile}
                >
                  Manufacturing
                </Link>
                <Link
                  to="/industries/finance"
                  className="nav-mega-item"
                  onClick={closeMobile}
                >
                  Finance
                </Link>
                <Link
                  to="/industries/retail"
                  className="nav-mega-item"
                  onClick={closeMobile}
                >
                  Retail & E-Commerce
                </Link>
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
              className="nav-link"
              onClick={() =>
                window.innerWidth <= 950
                  ? setOpenMega(openMega === "technology" ? null : "technology")
                  : null
              }
            >
              Technology ▾
            </Link>

            {openMega === "technology" && (
              <div className="nav-mega">
                <Link
                  to="/technology/programming-languages"
                  className="nav-mega-item"
                  onClick={closeMobile}
                >
                  Frontend
                </Link>
                <Link
                  to="/technology/frameworks"
                  className="nav-mega-item"
                  onClick={closeMobile}
                >
                  Backend
                </Link>
                <Link
                  to="/technology/cloud-platforms"
                  className="nav-mega-item"
                  onClick={closeMobile}
                >
                  Cloud Platforms
                </Link>
                <Link
                  to="/technology/devops-tools"
                  className="nav-mega-item"
                  onClick={closeMobile}
                >
                  DevOps Tools
                </Link>
                <Link
                  to="/technology/database"
                  className="nav-mega-item"
                  onClick={closeMobile}
                >
                  Databases
                </Link>
              </div>
            )}
          </div>

          <Link to="/contact" className="nav-link" onClick={closeMobile}>
            Contact
          </Link>
        </nav>

        {/* CTA DESKTOP */}
        <Link to="/contact" className="header-cta">
          Contact Us
        </Link>
      </div>
    </header>
  );
};

export default Header;
