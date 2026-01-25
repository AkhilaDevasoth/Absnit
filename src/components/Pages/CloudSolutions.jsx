import React, { useState, useEffect } from "react";

const CloudSolutions = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeTab, setActiveTab] = useState("migration");

  /* 🔹 Reveal animation */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) =>
          entry.target.classList.toggle("active", entry.isIntersecting)
        );
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
    const handleScroll = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="page">
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
          <h1 className="page-title reveal" style={{ textAlign: "center", color: "#1e40af" }}>
            Cloud Solutions
          </h1>
          <p className="page-subtitle reveal" style={{ fontSize: "22px", textAlign: "center" }}>
            Scalable cloud architecture and DevOps services
          </p>
        </div>
      </section>

      {/* MAIN CONTENT (UNCHANGED) */}
      <section className="services-content">
        <div className="container">
          <div className="industry-detail-layout">

            <div className="industry-image-card reveal">
              <img
                src="https://media.istockphoto.com/id/2219130406/photo/cloud-computing-symbol-connects-to-server-datacenter-network.jpg?s=612x612&w=0&k=20&c=XBbhS7J1B8hQxujIuL9vHREn_h3VzFLEXhEyzRX2T_U="
                alt="Cloud Solutions"
              />
            </div>

            <div className="industry-text-content reveal">
              <h2 className="industry-title">
                Cloud Architecture & DevOps Services
              </h2>

              <p className="industry-description">
                ABSN IT Solutions helps organizations design, migrate, and manage
                secure cloud environments that scale with business growth. Our
                cloud solutions enable agility, cost efficiency, and high
                availability across modern IT infrastructures.
              </p>

              <p className="industry-subtitle">Key challenges we address:</p>

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

      {/* ===============================
          CLOUD SERVICES – TAB SECTION
      ================================ */}
      <section className="services-content">
        <div className="container">

          {/* TABS */}
          <div className="devops-tabs reveal">
            <button
              className={`industry-box ${activeTab === "migration" ? "active" : ""}`}
              onClick={() => setActiveTab("migration")}
            >
              Cloud Migration
            </button>

            <button
              className={`industry-box ${activeTab === "architecture" ? "active" : ""}`}
              onClick={() => setActiveTab("architecture")}
            >
              Cloud Architecture
            </button>

            <button
              className={`industry-box ${activeTab === "devops" ? "active" : ""}`}
              onClick={() => setActiveTab("devops")}
            >
              DevOps & CI/CD
            </button>

            <button
              className={`industry-box ${activeTab === "security" ? "active" : ""}`}
              onClick={() => setActiveTab("security")}
            >
              Cloud Security
            </button>
          </div>

          {/* CONTENT CARD */}
          <div className="service-card reveal devops-card">

            {activeTab === "migration" && (
              <>
                <h2>Cloud Migration & Modernization</h2>
                <p>
                  We help organizations migrate applications, data, and workloads
                  to the cloud with minimal disruption. Our migration strategies
                  ensure business continuity while modernizing legacy systems.
                </p>
                <ul>
                  <li>Assessment and cloud readiness planning</li>
                  <li>Lift-and-shift and re-architecture strategies</li>
                  <li>Data migration and validation</li>
                  <li>Minimal downtime and risk mitigation</li>
                  <li>Post-migration optimization</li>
                </ul>
                <p>
                  Our migration services enable organizations to unlock cloud
                  scalability, performance, and cost efficiency.
                </p>
              </>
            )}

            {activeTab === "architecture" && (
              <>
                <h2>Scalable Cloud Architecture</h2>
                <p>
                  A strong cloud foundation is essential for long-term success.
                  We design secure, scalable, and resilient cloud architectures
                  tailored to business requirements.
                </p>
                <ul>
                  <li>High-availability and fault-tolerant designs</li>
                  <li>Microservices and cloud-native architecture</li>
                  <li>Multi-cloud and hybrid cloud strategies</li>
                  <li>Cost-optimized infrastructure planning</li>
                  <li>Performance and scalability optimization</li>
                </ul>
                <p>
                  Our cloud architectures support growth, innovation, and
                  enterprise-grade reliability.
                </p>
              </>
            )}

            {activeTab === "devops" && (
              <>
                <h2>DevOps Automation & CI/CD</h2>
                <p>
                  We implement DevOps practices that accelerate development and
                  improve collaboration between teams. Our CI/CD pipelines
                  enable faster, safer, and more reliable software delivery.
                </p>
                <ul>
                  <li>Automated build, test, and deployment pipelines</li>
                  <li>Infrastructure as Code (IaC)</li>
                  <li>Monitoring and logging automation</li>
                  <li>Continuous integration and delivery</li>
                  <li>Reduced deployment risks and failures</li>
                </ul>
                <p>
                  Our DevOps solutions help organizations deliver high-quality
                  applications at speed and scale.
                </p>
              </>
            )}

            {activeTab === "security" && (
              <>
                <h2>Cloud Security & Compliance</h2>
                <p>
                  Security is a critical aspect of cloud adoption. ABSN IT
                  Solutions implements comprehensive cloud security frameworks
                  to protect data, applications, and infrastructure.
                </p>
                <ul>
                  <li>Identity and access management (IAM)</li>
                  <li>Data encryption and secure networking</li>
                  <li>Compliance with industry standards</li>
                  <li>Threat detection and vulnerability monitoring</li>
                  <li>Disaster recovery and backup strategies</li>
                </ul>
                <p>
                  Our cloud security solutions ensure trust, compliance, and
                  resilience in modern cloud environments.
                </p>
              </>
            )}

          </div>
        </div>
      </section>

      {/* BACK TO TOP */}
      {showBackToTop && (
        <button className="back-to-top-btn" onClick={scrollToTop}>↑</button>
      )}
    </div>
  );
};

export default CloudSolutions;
