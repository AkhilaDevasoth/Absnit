import React, { useState, useEffect } from "react";

const CybersecurityServices = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeTab, setActiveTab] = useState("risk");

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
            Cybersecurity Services
          </h1>
          <p className="page-subtitle reveal" style={{ fontSize: "22px", textAlign: "center" }}>
            Security-first engineering and best practices
          </p>
        </div>
      </section>
      {
      /* ===============================
    CYBERSECURITY SERVICES – FEATURE SECTION
================================ */}
<section className="services-content">
  <div className="container">
    <div className="feature-image-overlay reveal">

      <img
        src="https://www.squiresgroup.com/wp-content/uploads/2025/05/cybersecurity-service.webp"
        alt="Cybersecurity Services"
      />

      <div className="overlay"></div>

      <div className="overlay-content">
        <h2>Cybersecurity Services</h2>
        <p>
          We deliver comprehensive cybersecurity solutions to protect your
          business from evolving digital threats and ensure data integrity,
          confidentiality, and compliance.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* MAIN CONTENT (UNCHANGED) */}
      <section className="services-content">
        <div className="container">
          <div className="industry-detail-layout">

            <div className="industry-image-card reveal">
              <img
                src="https://bluelightllc.com/wp-content/uploads/AdobeStock_190347521-scaled-1-1080x675.jpeg"
                alt="Cybersecurity Services"
              />
            </div>

            <div className="industry-text-content reveal">
              <h2 className="industry-title">Cybersecurity Solutions & Protection</h2>

              <p className="industry-description">
                ABSN IT Solutions delivers comprehensive cybersecurity services
                designed to protect digital assets, infrastructure, and sensitive
                data from evolving cyber threats.
              </p>

              <p className="industry-subtitle">Key challenges we address:</p>

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
                monitoring.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ===============================
          CYBERSECURITY – TAB SECTION
      ================================ */}
      <section className="services-content">
        <div className="container">

          {/* TABS */}
          <div className="devops-tabs reveal">
            <button
              className={`industry-box ${activeTab === "risk" ? "active" : ""}`}
              onClick={() => setActiveTab("risk")}
            >
              Risk Assessment
            </button>

            <button
              className={`industry-box ${activeTab === "network" ? "active" : ""}`}
              onClick={() => setActiveTab("network")}
            >
              Network Security
            </button>

            <button
              className={`industry-box ${activeTab === "cloud" ? "active" : ""}`}
              onClick={() => setActiveTab("cloud")}
            >
              Cloud Security
            </button>

            <button
              className={`industry-box ${activeTab === "incident" ? "active" : ""}`}
              onClick={() => setActiveTab("incident")}
            >
              Incident Response
            </button>
          </div>

          {/* CONTENT CARD */}
          <div className="service-card reveal devops-card">

            {activeTab === "risk" && (
              <>
                <h2>Security Risk Assessment</h2>
                <p>
                  We identify vulnerabilities across applications,
                  infrastructure, and networks to understand potential risks.
                </p>
                <ul>
                  <li>Comprehensive security audits</li>
                  <li>Vulnerability scanning and analysis</li>
                  <li>Threat modeling and risk classification</li>
                  <li>Compliance gap assessment</li>
                  <li>Actionable remediation recommendations</li>
                </ul>
                <p>
                  Our assessments help organizations prioritize security
                  investments and reduce exposure to threats.
                </p>
              </>
            )}

            {activeTab === "network" && (
              <>
                <h2>Network Security</h2>
                <p>
                  Protecting enterprise networks from unauthorized access and
                  attacks is critical for business continuity.
                </p>
                <ul>
                  <li>Firewall and intrusion detection systems</li>
                  <li>Secure network architecture design</li>
                  <li>Access control and segmentation</li>
                  <li>Monitoring and traffic analysis</li>
                  <li>Protection against DDoS attacks</li>
                </ul>
                <p>
                  Our network security solutions ensure reliable and protected
                  communication across systems.
                </p>
              </>
            )}

            {activeTab === "cloud" && (
              <>
                <h2>Cloud Security</h2>
                <p>
                  Cloud environments require specialized security strategies to
                  protect data and workloads.
                </p>
                <ul>
                  <li>Secure cloud architecture and identity management</li>
                  <li>Data encryption and key management</li>
                  <li>Compliance and governance controls</li>
                  <li>Continuous cloud security monitoring</li>
                  <li>Protection across multi-cloud environments</li>
                </ul>
                <p>
                  We help organizations secure cloud platforms while maintaining
                  agility and scalability.
                </p>
              </>
            )}

            {activeTab === "incident" && (
              <>
                <h2>Incident Response & Monitoring</h2>
                <p>
                  Rapid response to security incidents minimizes damage and
                  downtime.
                </p>
                <ul>
                  <li>Real-time threat monitoring</li>
                  <li>Incident detection and containment</li>
                  <li>Forensic analysis and root cause investigation</li>
                  <li>Recovery and remediation planning</li>
                  <li>Continuous security improvement</li>
                </ul>
                <p>
                  Our incident response services ensure faster recovery and
                  stronger future defenses.
                </p>
              </>
            )}

          </div>
        </div>
      </section>

      {/* BACK TO TOP */}
      {showBackToTop && (
        <button className="back-to-top-btn" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </div>
  );
};

export default CybersecurityServices;
