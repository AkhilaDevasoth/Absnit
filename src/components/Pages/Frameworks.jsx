import React, { useState, useEffect } from "react";

const Frameworks = () => {
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
            Frameworks
          </h1>

          <p
            className="page-subtitle reveal"
            style={{
              fontSize: "22px",
              lineHeight: "1.4",
              textAlign: "center",
            }}
          >
            Modern frameworks for rapid and scalable development
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
                src="https://www.cerebruminfotech.com/blog/wp-content/uploads/2022/09/What-is-a-Framework-in-Programming-.png"
                alt="Modern Software Frameworks"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="industry-text-content reveal">
              <h2 className="industry-title">
                Modern Development Frameworks
              </h2>

              <p className="industry-description">
                ABSN IT Solutions leverages modern, robust, and proven software
                frameworks to build scalable, maintainable, and high-performance
                applications. Our expertise ensures faster development cycles
                and long-term application stability.
              </p>

              <p className="industry-subtitle">
                Frameworks we specialize in:
              </p>

              <ul className="industry-list">
                <li>React.js for dynamic and responsive front-end applications</li>
                <li>Angular for enterprise-grade web solutions</li>
                <li>.NET framework for secure and scalable backend systems</li>
                <li>Django for rapid backend development</li>
                <li>Node.js frameworks for real-time applications</li>
                <li>Microservices and API-driven architectures</li>
              </ul>

              <p className="industry-footer-text">
                By using the right frameworks for each project, we ensure
                flexibility, scalability, and maintainability while delivering
                modern applications that meet business goals and performance
                expectations.
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

export default Frameworks;
