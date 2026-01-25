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
            <li><Link to="/technology">AI</Link></li>
            <li><Link to="/technology/cloud-platforms">Cloud Computing</Link></li>
            <li><Link to="/technology/devops-tools">DevOps</Link></li>
            <li><Link to="/technology/frameworks">Web Development</Link></li>
            <li><Link to="/technology">IoT</Link></li>
          </ul>
        </div>

        {/* COLUMN 4: Industries */}
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
          <p><a href="https://maps.google.com/?q=H No 1-111, Madannapet, Narsampet Mandal, Warangal, Telangana, 506132" target="_blank" rel="noopener noreferrer">H No 1-111, Madannapet, Narsampet Mandal,<br></br> Warangal, Telangana, 506132.</a></p>
          <p>📞 <a href="tel:+919948550646">+91 9948550646</a></p>
          <p>✉️ <a href="mailto:info@absnit.com">info@absnit.com</a></p>
        </div>

        <div className="address">
          <h5>Development Center</h5>
          <p><a href="https://maps.google.com/?q=Warangal, Telangana, India" target="_blank" rel="noopener noreferrer">Warangal, Telangana, India</a></p>
          <p>📞 <a href="tel:+919948550646">+91 9948550646</a></p>
          <p>✉️ <a href="mailto:info@absnit.com">info@absnit.com</a></p>
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
