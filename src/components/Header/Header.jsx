import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo">
          Absnit
        </Link>

        {/* Navigation */}
        <nav className="nav">
          <Link to="/" className="nav-link">
            Home
          </Link>

          <Link to="/about" className="nav-link">
            About
          </Link>

          {/* SERVICES DROPDOWN */}
          <div
            className="nav-dropdown-wrap"
            onMouseEnter={() => setOpenMenu("services")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <span className="nav-link">Services ▾</span>

            {openMenu === "services" && (
              <div className="nav-dropdown">
               <Link to="/services">Custom Software</Link>
               <Link to="/services">Mobile App Development</Link>
                <Link to="/services">Cloud Solutions</Link>
                <Link to="/services/consulting">IT Consulting</Link>
                <Link to="/services/cyber">Cybersecurity Services</Link>
              </div>
            )}
          </div>

          {/* INDUSTRIES DROPDOWN */}
          <div
            className="nav-dropdown-wrap"
            onMouseEnter={() => setOpenMenu("industries")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <span className="nav-link">Industries ▾</span>

            {openMenu === "industries" && (
              <div className="nav-dropdown">
                <Link to="/industries/finance" className="nav-dropdown-item">
                  Banking & Finance
                </Link>
                <Link to="/industries/healthcare" className="nav-dropdown-item">
                  Healthcare
                </Link>
                <Link to="/industries/education" className="nav-dropdown-item">
                  Education
                </Link>
                <Link to="/industries/retail" className="nav-dropdown-item">
                  Retail & E-Commerce
                </Link>
                <Link to="/industries/manufacturing" className="nav-dropdown-item">
                  Manufacturing
                </Link>
              </div>
            )}
          </div>

          {/* TECHNOLOGY DROPDOWN */}
          <div
            className="nav-dropdown-wrap"
            onMouseEnter={() => setOpenMenu("technology")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className="nav-link nav-trigger">
  Services ▾
</button>


            {openMenu === "technology" && (
              <div className="nav-dropdown">
                <Link to="/technology/frontend" className="nav-dropdown-item">
                  Frontend Technologies
                </Link>
                <Link to="/technology/backend" className="nav-dropdown-item">
                  Backend Technologies
                </Link>
                <Link to="/technology/cloud" className="nav-dropdown-item">
                  Cloud Platforms
                </Link>
                <Link to="/technology/devops" className="nav-dropdown-item">
                  DevOps Tools
                </Link>
                <Link to="/technology/database" className="nav-dropdown-item">
                  Databases
                </Link>
              </div>
            )}
          </div>

          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
