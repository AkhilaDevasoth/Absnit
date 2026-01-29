import React, { useState, useEffect } from "react";

const Finance = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeTab, setActiveTab] = useState("payments");

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

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* 🔹 Back to top */
  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="page">

      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title reveal" style={{ textAlign: "center", color: "#1e40af" }}>
            Finance Solutions
          </h1>
          <p className="page-subtitle reveal" style={{ fontSize: "22px", textAlign: "center" }}>
            Secure, compliant, and scalable technology for modern finance
          </p>
        </div>
      </section>
{/* ===============================
    FINANCE SOLUTIONS – FEATURE SECTION
================================ */}
<section className="services-content">
  <div className="container">
    <div className="feature-image-overlay reveal">

      <img
        src="https://www.clari5.com/wp-content/uploads/2017/07/Customer-Liability-in-The-Age-of-Digital-Banking-Banner-1024x308-1.jpg"
        alt="Finance Solutions"
      />

      <div className="overlay"></div>

      <div className="overlay-content">
        <h2>Finance Solutions</h2>
        <p>
          We deliver powerful, scalable financial technology solutions
          tailored for banks, fintechs, and financial institutions to
          streamline operations, enhance customer experiences, and support
          digital transformation.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* MAIN CONTENT — KEPT SAME */}
      <section className="services-content">
        <div className="container">
          <div className="industry-detail-layout">

            <div className="industry-image-card reveal">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPKWKqFBe60qGHLSDtMDjNB-xImkfpDV9Kdg&s"
                alt="Finance Technology Solutions"
              />
            </div>

            <div className="industry-text-content reveal">
              <h2 className="industry-title">
                Digital Finance & FinTech Solutions
              </h2>

              <p className="industry-description">
                ABSN IT Solutions delivers secure, compliant, and scalable
                technology solutions for banks, financial institutions, and
                fintech startups. We help organizations modernize financial
                services while ensuring data security, performance, and trust.
              </p>

              <p className="industry-subtitle">Key challenges we address:</p>

              <ul className="industry-list">
                <li>Secure digital payment and transaction systems</li>
                <li>Banking and fintech application development</li>
                <li>Risk management and fraud detection tools</li>
                <li>Financial analytics and reporting platforms</li>
                <li>Data security, encryption, and compliance</li>
                <li>Scalable cloud-based financial systems</li>
              </ul>

              <p className="industry-footer-text">
                Our finance solutions help organizations deliver reliable,
                transparent, and high-performance financial services while
                meeting regulatory requirements and customer expectations.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ===============================
          FINANCE SOLUTIONS – TABS
      ================================ */}
      <section className="services-content">
        <div className="container">

          {/* TABS */}
          <div className="devops-tabs reveal">

            <button
              className={`industry-box ${activeTab === "payments" ? "active" : ""}`}
              onClick={() => setActiveTab("payments")}
            >
              Digital Payments
            </button>

            <button
              className={`industry-box ${activeTab === "banking" ? "active" : ""}`}
              onClick={() => setActiveTab("banking")}
            >
              Banking Platforms
            </button>

            <button
              className={`industry-box ${activeTab === "risk" ? "active" : ""}`}
              onClick={() => setActiveTab("risk")}
            >
              Risk & Fraud Management
            </button>

            <button
              className={`industry-box ${activeTab === "analytics" ? "active" : ""}`}
              onClick={() => setActiveTab("analytics")}
            >
              Financial Analytics
            </button>

          </div>

          {/* CONTENT CARD */}
          <div className="service-card reveal devops-card">

            {activeTab === "payments" && (
              <>
                <h2>Digital Payments</h2>
                <p>
                  We design and implement secure digital payment systems that
                  support real-time transactions, multiple payment gateways,
                  and seamless user experiences.
                </p>
                <ul>
                  <li>UPI, card, and wallet-based payment integrations</li>
                  <li>High-volume transaction processing</li>
                  <li>Secure APIs and encrypted payment flows</li>
                  <li>Compliance with PCI-DSS and financial regulations</li>
                  <li>Fraud prevention and transaction monitoring</li>
                </ul>
                <p>
                  Our payment solutions ensure fast, reliable, and secure
                  transactions across digital channels.
                </p>
              </>
            )}

            {activeTab === "banking" && (
              <>
                <h2>Banking Platforms</h2>
                <p>
                  ABSN IT Solutions builds modern banking platforms that enable
                  digital onboarding, core banking operations, and customer
                  self-service.
                </p>
                <ul>
                  <li>Core banking and digital account management</li>
                  <li>Loan management and credit processing systems</li>
                  <li>Customer portals and mobile banking apps</li>
                  <li>Secure authentication and access control</li>
                  <li>Scalable cloud-based banking architecture</li>
                </ul>
                <p>
                  Our banking platforms improve customer experience while
                  maintaining operational efficiency and security.
                </p>
              </>
            )}

            {activeTab === "risk" && (
              <>
                <h2>Risk & Fraud Management</h2>
                <p>
                  Managing risk is critical in financial systems. We develop
                  intelligent risk and fraud detection solutions that protect
                  organizations from financial threats.
                </p>
                <ul>
                  <li>Real-time fraud detection and alerts</li>
                  <li>Risk scoring and behavioral analysis</li>
                  <li>Transaction monitoring systems</li>
                  <li>Regulatory compliance and audit support</li>
                  <li>AI-driven anomaly detection</li>
                </ul>
                <p>
                  Our solutions help organizations minimize losses and maintain
                  customer trust.
                </p>
              </>
            )}

            {activeTab === "analytics" && (
              <>
                <h2>Financial Analytics</h2>
                <p>
                  Data-driven insights are essential for financial decision-
                  making. We deliver advanced analytics platforms that turn
                  financial data into actionable intelligence.
                </p>
                <ul>
                  <li>Real-time financial dashboards</li>
                  <li>Transaction and revenue analytics</li>
                  <li>Predictive financial modeling</li>
                  <li>Regulatory and compliance reporting</li>
                  <li>Custom reports for business insights</li>
                </ul>
                <p>
                  Our analytics solutions empower financial leaders to make
                  informed, strategic decisions with confidence.
                </p>
              </>
            )}

          </div>
        </div>
      </section>

      {/* BACK TO TOP */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="back-to-top-btn"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            background: "#1e40af",
            color: "#fff",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            border: "none",
            cursor: "pointer",
            fontSize: "20px",
          }}
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default Finance;
