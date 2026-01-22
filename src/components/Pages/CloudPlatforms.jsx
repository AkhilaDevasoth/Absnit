import React, { useState, useEffect } from "react";

const CloudPlatforms = () => {
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
            Cloud Platforms
          </h1>

          <p
            className="page-subtitle reveal"
            style={{
              fontSize: "22px",
              lineHeight: "1.4",
              textAlign: "center",
            }}
          >
            Scalable cloud infrastructure for modern applications
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
                src="https://www.shutterstock.com/image-vector/abstract-cloud-technology-circuit-board-600nw-2669250763.jpg"
                alt="Cloud Platforms"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="industry-text-content reveal">
              <h2 className="industry-title">
                Cloud Infrastructure & Platforms
              </h2>

              <p className="industry-description">
                ABSN IT Solutions delivers scalable, secure, and cost-effective
                cloud solutions using leading cloud platforms. We help
                organizations modernize infrastructure, improve agility, and
                scale applications with confidence.
              </p>

              <p className="industry-subtitle">
                Cloud platforms we work with:
              </p>

              <ul className="industry-list">
                <li>AWS for scalable and reliable cloud infrastructure</li>
                <li>Microsoft Azure for enterprise cloud solutions</li>
                <li>Google Cloud Platform for data and AI-driven workloads</li>
                <li>Cloud migration and modernization services</li>
                <li>Cloud security and cost optimization</li>
                <li>High availability and disaster recovery solutions</li>
              </ul>

              <p className="industry-footer-text">
                Our cloud platform expertise enables businesses to build
                resilient, high-performance applications while reducing
                operational complexity and infrastructure costs.
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

export default CloudPlatforms;
