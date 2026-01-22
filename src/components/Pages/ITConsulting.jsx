import React, { useState, useEffect } from "react";

const ITConsulting = () => {
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
            IT Consulting
          </h1>

          <p
            className="page-subtitle reveal"
            style={{
              fontSize: "22px",
              lineHeight: "1.4",
              textAlign: "center",
            }}
          >
            Professional advisory services for your technology needs
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
                src="https://www.cloudavize.com/wp-content/uploads/2024/09/dallas-it-consulting.jpg"
                alt="IT Consulting"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="industry-text-content reveal opacity-0 translate-y-4 transition-all duration-700 ease-out">
              <h2 className="industry-title">
                IT Consulting Services
              </h2>

              <p className="industry-description">
                IT Consulting at ABSN IT Solutions helps organizations make
                informed technology decisions that align with business goals.
                We provide expert guidance to improve efficiency, scalability,
                and long-term digital success.
              </p>

              <p className="industry-subtitle">
                Key challenges we address:
              </p>

              <ul className="industry-list">
                <li>Analyzing existing IT infrastructure and workflows</li>
                <li>Identifying performance and efficiency improvements</li>
                <li>Selecting the right tools, platforms, and technologies</li>
                <li>Aligning IT strategies with business growth objectives</li>
                <li>Reducing operational risks and technology costs</li>
                <li>Supporting digital transformation initiatives</li>
              </ul>

              <p className="industry-footer-text">
                Our consulting services empower organizations to modernize IT
                environments, improve decision-making, and build resilient
                technology strategies that support long-term success.
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

export default ITConsulting;
