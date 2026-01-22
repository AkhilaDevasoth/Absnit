import React, { useState, useEffect } from "react";

const CloudSolutions = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  /* 🔹 Reveal animation (scroll up & down) */
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
            Cloud Solutions
          </h1>

          <p
            className="page-subtitle reveal"
            style={{
              fontSize: "22px",
              lineHeight: "1.4",
              textAlign: "center",
            }}
          >
            Scalable cloud architecture and DevOps services
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
                src="https://media.istockphoto.com/id/2219130406/photo/cloud-computing-symbol-connects-to-server-datacenter-network.jpg?s=612x612&w=0&k=20&c=XBbhS7J1B8hQxujIuL9vHREn_h3VzFLEXhEyzRX2T_U="
                alt="Cloud Solutions"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="industry-text-content reveal opacity-0 translate-y-4 transition-all duration-700 ease-out">
              <h2 className="industry-title">
                Cloud Architecture & DevOps Services
              </h2>

              <p className="industry-description">
                ABSN IT Solutions helps organizations design, migrate, and manage
                secure cloud environments that scale with business growth. Our
                cloud solutions enable agility, cost efficiency, and high
                availability across modern IT infrastructures.
              </p>

              <p className="industry-subtitle">
                Key challenges we address:
              </p>

              <ul className="industry-list">
                <li>Cloud migration and modernization strategies</li>
                <li>Designing scalable and secure cloud architectures</li>
                <li>DevOps automation and CI/CD pipelines</li>
                <li>Infrastructure monitoring and cost optimization</li>
                <li>High availability and disaster recovery planning</li>
                <li>Multi-cloud and hybrid cloud environments</li>
              </ul>

              <p className="industry-footer-text">
                From cloud-native application development to enterprise cloud
                transformation, our team ensures reliability, performance, and
                security while enabling faster innovation and delivery.
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

export default CloudSolutions;
