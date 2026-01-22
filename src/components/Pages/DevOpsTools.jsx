import React, { useState, useEffect } from "react";

const DevOpsTools = () => {
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
            DevOps Tools
          </h1>

          <p
            className="page-subtitle reveal"
            style={{
              fontSize: "22px",
              lineHeight: "1.4",
              textAlign: "center",
            }}
          >
            Streamlining development and operations
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
                src="https://media.istockphoto.com/id/1352203098/photo/devops-software-development-and-it-operations-engineer-working-in-agile-methodology.jpg?s=612x612&w=0&k=20&c=hcyR7V30yi70_GS9BAwDR9WWzHhG9VWwvdxwghmhOJw="
                alt="DevOps Tools and Automation"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="industry-text-content reveal">
              <h2 className="industry-title">
                DevOps Automation & Tooling
              </h2>

              <p className="industry-description">
                ABSN IT Solutions leverages modern DevOps tools and practices to
                automate workflows, improve collaboration, and ensure fast,
                reliable software delivery. Our DevOps expertise helps teams
                build, test, and deploy applications efficiently.
              </p>

              <p className="industry-subtitle">
                DevOps tools and practices we use:
              </p>

              <ul className="industry-list">
                <li>Docker for containerized application deployment</li>
                <li>Kubernetes for container orchestration and scaling</li>
                <li>CI/CD pipelines using Jenkins and GitHub Actions</li>
                <li>Infrastructure as Code (IaC)</li>
                <li>Monitoring and logging solutions</li>
                <li>Cloud-native DevOps practices</li>
              </ul>

              <p className="industry-footer-text">
                Our DevOps solutions enable faster releases, higher system
                reliability, and continuous improvement through automation and
                best-in-class tooling.
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

export default DevOpsTools;
