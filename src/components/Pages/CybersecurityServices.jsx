import React, { useState, useEffect } from "react";

const CybersecurityServices = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // 🔹 Reveal animation (scroll up & down)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".reveal").forEach((el) =>
      observer.observe(el)
    );

    return () => observer.disconnect();
  }, []);

  // 🔹 Back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="page">
      {/* Fix reveal */}
      <style>
        {`
          .reveal.active {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
        `}
      </style>

      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <h1
            className="page-title reveal"
            style={{ textAlign: "center", color: "#1e40af" }}
          >
            Cybersecurity Services
          </h1>

          <p
            className="page-subtitle reveal"
            style={{
              fontSize: "22px",
              lineHeight: "1.4",
              textAlign: "center",
            }}
          >
            Security-first engineering and best practices
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="services-content">
        <div className="container">
          <div className="industry-detail-layout">

            {/* LEFT IMAGE */}
            <div className="industry-image-card reveal opacity-0 translate-y-4 transition-all duration-700 ease-out">
              <img
                src="https://bluelightllc.com/wp-content/uploads/AdobeStock_190347521-scaled-1-1080x675.jpeg"
                alt="Cybersecurity Services"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="industry-text-content reveal opacity-0 translate-y-4 transition-all duration-700 ease-out">
              <h2 className="industry-title">
                Cybersecurity Solutions & Protection
              </h2>

              <p className="industry-description">
                ABSN IT Solutions delivers comprehensive cybersecurity services
                designed to protect digital assets, infrastructure, and sensitive
                data from evolving cyber threats. Our security-first approach
                ensures resilience, compliance, and trust.
              </p>

              <p className="industry-subtitle">
                Key challenges we address:
              </p>

              <ul className="industry-list">
                <li>Identifying and mitigating security vulnerabilities</li>
                <li>Protecting systems against cyber attacks and data breaches</li>
                <li>Ensuring compliance with industry security standards</li>
                <li>Implementing secure network and cloud architectures</li>
                <li>Monitoring threats and responding to incidents</li>
                <li>Improving overall security posture and resilience</li>
              </ul>

              <p className="industry-footer-text">
                Our cybersecurity expertise covers risk assessment, penetration
                testing, security audits, access control, and continuous
                monitoring to safeguard your business in a digital-first world.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* BACK TO TOP */}
      {showBackToTop && (
        <button
          className="back-to-top-btn"
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#1e40af",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            fontSize: "20px",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default CybersecurityServices;
