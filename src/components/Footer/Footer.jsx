import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".footer-reveal");
      const windowHeight = window.innerHeight;
      const elementVisible = 50; // Lower threshold to trigger earlier

      reveals.forEach((reveal) => {
        const rect = reveal.getBoundingClientRect();
        // Check if element is within view (even partially)
        if (rect.top <= windowHeight - elementVisible) {
          reveal.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll); // Handle resize too

    // Trigger immediately and after short delay to ensure layout is done
    handleScroll();
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [location]); // Re-run on location change

  return (
    <footer className="footer">
      <div className="footer-container footer-reveal">

        {/* 🔹 MAIN ROW */}
        <div className="footer-main">

          {/* LEFT: LOGO + DESCRIPTION */}
          <div className="footer-brand footer-reveal">
            <Link to="/" className="footer-logo-link">
              <img
                src="https://absnit.com/wp-content/uploads/2025/05/Logo-Img.png"
                alt="Absnit logo"
                className="footer-logo-img"
              />
            </Link>

            <p className="footer-description">
              Building innovative solutions for the modern web.
              We create exceptional digital experiences that drive results.
            </p>
          </div>

          {/* RIGHT: LINKS SECTIONS */}
          <div className="footer-links-area">

            <div className="footer-section footer-reveal">
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

            <div className="footer-section footer-reveal">
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
                <li>
                  Address: 1-111 Madhannapet, Narsampet,
                  Warangal, Telangana 506132
                </li>
              </ul>
            </div>

            <div className="footer-section footer-reveal">
              <h4 className="footer-title">Follow Us</h4>
              <div className="social-links">
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">LinkedIn</a>
                <a href="#">Instagram</a>
              </div>
            </div>

          </div>
        </div>

        {/* 🔹 BOTTOM */}
        <div className="footer-bottom footer-reveal">
          <p>© {new Date().getFullYear()} Absnit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
