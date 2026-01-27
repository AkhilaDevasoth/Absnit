import { Link } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const [activeLocation, setActiveLocation] = useState(null);

  return (
    <footer className="site-footer">

      {/* AI BACKGROUND SHAPES */}
      <div className="footer-bg-shapes">
        <span className="ai-node n1"></span>
        <span className="ai-node n2"></span>
        <span className="ai-node n3"></span>

        <span className="ai-orbit o1"></span>
        <span className="ai-orbit o2"></span>

        <span className="ai-block b1"></span>
        <span className="ai-block b2"></span>
      </div>

      {/* MAIN FOOTER CONTENT */}
      <div className="footer-container">

        {/* LEFT: Logo + About */}
        <div className="footer-col footer-about">
          <Link to="/" className="footer-logo">
            <img src="/footer-logo.png" alt="ABSN IT Solutions" />
          </Link>

          <p className="footer-desc">
            ABSN IT Solutions is a technology and digital transformation partner.
            We help businesses design, develop, and scale modern digital solutions.
          </p>

          <div className="everified-badge">
            ✔ E-Verified Company
          </div>
        </div>

        {/* Explore */}
        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Technologies */}
        <div className="footer-col">
          <h4>Technologies</h4>
          <ul>
            <li><Link to="/technology">AI</Link></li>
            <li><Link to="/technology/cloud-platforms">Cloud Computing</Link></li>
            <li><Link to="/technology/devops-tools">DevOps</Link></li>
            <li><Link to="/technology/frameworks">Web Development</Link></li>
            <li><Link to="/technology">IoT</Link></li>
          </ul>
        </div>

        {/* Industries */}
        <div className="footer-col">
          <h4>Industries</h4>
          <ul>
            <li><Link to="/industries/healthcare">Healthcare</Link></li>
            <li><Link to="/industries/finance">Financial Services</Link></li>
            <li><Link to="/technology">Technology Enablement</Link></li>
            <li><Link to="/industries">Media & Entertainment</Link></li>
            <li><Link to="/industries">Transportation & Travel</Link></li>
          </ul>
        </div>
      </div>

      {/* ADDRESSES */}
      <div className="footer-addresses">
        <div className="address">
          <h5>ABSN IT Headquarters</h5>
          <p>
            <a
              href="https://maps.google.com/?q=H No 1-111, Madannapet, Narsampet Mandal, Warangal, Telangana, 506132"
              target="_blank"
              rel="noopener noreferrer"
            >
              H No 1-111, Madannapet, Narsampet Mandal,<br />
              Warangal, Telangana, 506132
            </a>
          </p>
          <p>📞 <a href="tel:+919948550646">+91 9948550646</a></p>
          <p>✉️ <a href="mailto:info@absnit.com">info@absnit.com</a></p>
        </div>

        <div className="address">
          <h5>Development Center</h5>
          <p>Langar Houz, Hyderabad, Telangana, India</p>
          <p>📞 <a href="tel:+919948550646">+91 9948550646</a></p>
          <p>✉️ <a href="mailto:info@absnit.com">info@absnit.com</a></p>
        </div>
      </div>

 {/* OUR LOCATIONS */}
<section className="footer-locations-section">
  <h3 className="locations-title">Our Locations</h3>

  <div className="locations-grid">

    {/* HQ */}
    <div className="location-box">
      <div className="location-info">
        <h4>📍 ABSN IT Headquarters</h4>
        <p>H No 1-111, Madannapet, Narsampet Mandal,<br />Warangal, Telangana, India</p>
        <p>📞 +91 9948550646</p>
        <p>✉️ info@absnit.com</p>
      </div>

      <div className="location-map">
        <iframe
          title="Warangal Location"
          src="https://www.google.com/maps?q=Warangal,Telangana,India&output=embed"
          loading="lazy"
        ></iframe>
      </div>
    </div>

    {/* Development Center */}
    <div className="location-box">
      <div className="location-info">
        <h4>📍 ABSN Development Center</h4>
        <p>Langar Houz, Hyderabad,<br />Telangana, India</p>
        <p>📞 +91 9948550646</p>
        <p>✉️ info@absnit.com</p>
      </div>

      <div className="location-map">
        <iframe
          title="Hyderabad Location"
          src="https://www.google.com/maps?q=Langar+Houz,Hyderabad,Telangana&output=embed"
          loading="lazy"
        ></iframe>
      </div>
    </div>

  </div>
</section>


      {/* COPYRIGHT */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} ABSN IT Solutions. All rights reserved.
      </div>

      {/* LOCATION POPUP */}
      {activeLocation && (
        <div className="popup-overlay" onClick={() => setActiveLocation(null)}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <button
              className="popup-close"
              onClick={() => setActiveLocation(null)}
            >
              ✕
            </button>

            {activeLocation === "warangal" && (
              <>
                <h3>ABSN IT Headquarters</h3>
                <p>Warangal, Telangana, India</p>
                <iframe
                  title="Warangal Map"
                  src="https://www.google.com/maps?q=Warangal,Telangana,India&output=embed"
                  loading="lazy"
                ></iframe>
              </>
            )}

            {activeLocation === "hyderabad" && (
              <>
                <h3>ABSN Development Center</h3>
                <p>Langar Houz, Hyderabad, Telangana, India</p>
                <iframe
                  title="Hyderabad Map"
                  src="https://www.google.com/maps?q=Langar+Houz,Hyderabad,Telangana&output=embed"
                  loading="lazy"
                ></iframe>
              </>
            )}
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
