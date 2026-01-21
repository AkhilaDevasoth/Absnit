import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">Absnit</h3>
            <p className="footer-description">
              Building innovative solutions for the modern web. 
              We create exceptional digital experiences that drive results.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/industries">Industries</Link></li>
              <li><Link to="/technology">Technology</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section"> 
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-contact">
              <li>
                Email:{" "}
                <a href="mailto:info@absnit.com">info@absnit.com</a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+919948550646">+91 9948550646</a>
              </li>
              <li>Address: 1-111 Madhannapet, Narsampet,Warangal,Telangana 506132</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Follow Us</h4>
            <div className="social-links">
              <a href="#" aria-label="Facebook">Facebook</a>
              <a href="#" aria-label="Twitter">Twitter</a>
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
              <a href="#" aria-label="Instagram">Instagram</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Absnit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;