import React, { useState, useEffect } from "react";

const Manufacturing = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  /* 🔹 Reveal animation (UP & DOWN) */
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

  /* 🔹 Back to top */
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
      {/* Force reveal animation */}
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
            Manufacturing Solutions
          </h1>

          <p
            className="page-subtitle reveal"
            style={{
              fontSize: "22px",
              lineHeight: "1.4",
              textAlign: "center",
            }}
          >
            Supporting manufacturing businesses in their digital transformation journey
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="services-content">
        <div className="container">
          <div className="industry-detail-layout">

            {/* LEFT IMAGE */}
            <div className="industry-image-card reveal">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy5dai6ZMrMhqP-gf3kqvbqLiath4YeKRpXA&s"
                alt="Manufacturing Digital Solutions"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="industry-text-content reveal">
              <h2 className="industry-title">
                Digital Manufacturing Technology Solutions
              </h2>

              <p className="industry-description">
                ABSN IT Solutions helps manufacturing organizations modernize
                their operations through smart digital systems, automation, and
                real-time data insights. Our solutions are designed to improve
                efficiency, reduce costs, and ensure consistent product quality.
              </p>

              <p className="industry-subtitle">
                Key challenges we address:
              </p>

              <ul className="industry-list">
                <li>Production planning and process automation</li>
                <li>Inventory and warehouse management systems</li>
                <li>Supply chain visibility and optimization</li>
                <li>Quality control and compliance monitoring</li>
                <li>Predictive maintenance and downtime reduction</li>
                <li>Manufacturing analytics and reporting dashboards</li>
              </ul>

              <p className="industry-footer-text">
                Our manufacturing solutions empower businesses to adopt Industry
                4.0 practices, improve operational agility, and stay competitive
                in an increasingly digital and data-driven manufacturing
                landscape.
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
            color: "#fff",
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

export default Manufacturing;
