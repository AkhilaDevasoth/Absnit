import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer">
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
        </div>

        {/* COLUMN 2: Explore */}
        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* COLUMN 3: Technologies */}
        <div className="footer-col">
          <h4>Technologies</h4>
          <ul>
            <li>AI</li>
            <li>Cloud Computing</li>
            <li>DevOps</li>
            <li>Web Development</li>
            <li>IoT</li>
          </ul>
        </div>

        {/* COLUMN 4: Industries */}
        <div className="footer-col">
          <h4>Industries</h4>
          <ul>
            <li>Healthcare</li>
            <li>Financial Services</li>
            <li>Technology Enablement</li>
            <li>Media & Entertainment</li>
            <li>Transportation & Travel</li>
          </ul>
        </div>
      </div>

      {/* ADDRESSES */}
      <div className="footer-addresses">
        <div className="address">
          <h5>ABSN IT Headquarters</h5>
          <p>Hyderabad, Telangana, India</p>
          <p>📞 +91 9948550646</p>
          <p>✉️ info@absnit.com</p>
        </div>

        <div className="address">
          <h5>Development Center</h5>
          <p>Warangal, Telangana, India</p>
          <p>📞 +91 9948550646</p>
          <p>✉️ info@absnit.com</p>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} ABSN IT Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
