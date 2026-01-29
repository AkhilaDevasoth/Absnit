import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [openMega, setOpenMega] = useState(null);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="site-header">
 {/* LEFT WRAPPER – adds space & keeps logo left */}
  <div style={{ display: "flex", alignItems: "center", paddingLeft: "100px" }}>
    <Link to="/" className="logo">
      <img src="/logo.png" alt="ABSN IT Solutions" />
    </Link>
  </div>

  {/* RIGHT WRAPPER – pushes nav to right */}
  
 {/* RIGHT WRAPPER */}
<div
  style={{
    marginLeft: "auto",
    paddingRight: "300px",
    display: "flex",
    alignItems: "center",
    gap: "30px",
  }}
>
  {/* NAV */}
  <nav className="nav">
    <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
      Home
    </Link>

   <Link
        to="/about"
        className={`nav-link ${isActive("/about") ? "active" : ""}`}
      >
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
          <Link to="/services/custom-software-development" className="nav-mega-item">Custom Software Development</Link>
          <Link to="/services/mobile-app-development" className="nav-mega-item">Mobile App Development</Link>
          <Link to="/services/cloud-solutions" className="nav-mega-item">Cloud Solutions</Link>
          <Link to="/services/it-consulting" className="nav-mega-item">IT Consulting</Link>
          <Link to="/services/cybersecurity-services" className="nav-mega-item">Cybersecurity Services</Link>
        </div>
      )}
    </div>

    {/* INDUSTRIES */}
    <div
      className="nav-mega-wrap"
      onMouseEnter={() => setOpenMega("industries")}
      onMouseLeave={() => setOpenMega(null)}
    >
      <Link to="/industries" className={`nav-link ${isActive("/industries") ? "active" : ""}`}>
        Industries ▾
      </Link>

      {openMega === "industries" && (
        <div className="nav-mega">
          <Link to="/industries/healthcare" className="nav-mega-item">Healthcare</Link>
          <Link to="/industries/education" className="nav-mega-item">Education</Link>
          <Link to="/industries/manufacturing" className="nav-mega-item">Manufacturing</Link>
          <Link to="/industries/finance" className="nav-mega-item">Finance</Link>
          <Link to="/industries/retail" className="nav-mega-item">Retail & E-Commerce</Link>
        </div>
      )}
    </div>

    {/* TECHNOLOGY */}
    <div
      className="nav-mega-wrap"
      onMouseEnter={() => setOpenMega("technology")}
      onMouseLeave={() => setOpenMega(null)}
    >
      <Link to="/technology" className={`nav-link ${isActive("/technology") ? "active" : ""}`}>
        Technology ▾
      </Link>

      {openMega === "technology" && (
        <div className="nav-mega">
          <Link to="/technology/programming-languages" className="nav-mega-item">Frontend</Link>
          <Link to="/technology/frameworks" className="nav-mega-item">Backend</Link>
          <Link to="/technology/cloud-platforms" className="nav-mega-item">Cloud Platforms</Link>
          <Link to="/technology/devops-tools" className="nav-mega-item">DevOps Tools</Link>
          <Link to="/technology/database" className="nav-mega-item">Databases</Link>
        </div>
      )}
    </div>

      <Link to="/contact" className={`nav-link ${isActive("/contact") ? "active" : ""}`}>
            Contact
          </Link>
        </nav>

        <Link to="/contact" className="btn btn-primary" style={{ marginLeft: "70px", padding: "8px 16px", fontSize: "14px" }}>
          Contact Us
        </Link>
      </div>
    </header>
  );
};

export default Header;