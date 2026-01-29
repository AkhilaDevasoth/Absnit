import React, { useState, useEffect } from "react";

const ITConsulting = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeTab, setActiveTab] = useState("strategy");

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
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
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
            IT Consulting
          </h1>
          <p className="page-subtitle reveal" style={{ fontSize: "22px", textAlign: "center" }}>
            Professional advisory services for your technology needs
          </p>
        </div>
      </section>
{/* ===============================
    IT CONSULTING – FEATURE SECTION
================================ */}
<section className="services-content">
  <div className="container">
    <div className="feature-image-overlay reveal">

      <img
        src="https://www.initiatefirst-is.com/wp-content/uploads/2021/09/advanced-analytics-1520by500.jpg"
        alt="IT Consulting Services"
      />

      <div className="overlay"></div>

      <div className="overlay-content">
        <h2>IT Consulting</h2>
        <p>
          We provide strategic IT consulting services to help organizations
          align technology with business goals, optimize operations, and
          drive digital transformation.
        </p>
      </div>

    </div>
  </div>
</section>

   {/* MAIN CONTENT */}
<section className="services-content">
  <div className="container">
    <div className="industry-detail-layout">

      <div className="industry-image-card reveal">
        <img
          src="https://www.cloudavize.com/wp-content/uploads/2024/09/dallas-it-consulting.jpg"
          alt="IT Consulting"
        />
      </div>

      <div className="industry-text-content reveal">
        <h2 className="industry-title">IT Consulting Services</h2>

        <p className="industry-description">
          IT Consulting at ABSN IT Solutions helps organizations make informed
          technology decisions aligned with business goals. We guide enterprises
          through modernization, optimization, and digital transformation
          initiatives to improve efficiency, agility, and competitiveness.
        </p>

        <p className="industry-description">
          Our consulting approach focuses on understanding your current IT
          landscape, identifying gaps, and recommending practical solutions
          that drive measurable business outcomes. We work closely with
          stakeholders to ensure technology investments deliver long-term value.
        </p>

        <p className="industry-subtitle">
          Our IT consulting services include:
        </p>

        <ul className="industry-list">
          <li>IT strategy and technology roadmap planning</li>
          <li>Infrastructure assessment and optimization</li>
          <li>Cloud adoption and digital transformation consulting</li>
          <li>Application modernization and system upgrades</li>
          <li>Cybersecurity and risk assessment advisory</li>
          <li>Process improvement and operational efficiency analysis</li>
        </ul>

        <p className="industry-footer-text">
          Our consultants combine deep technical expertise with strong business
          insight to deliver scalable, secure, and future-ready IT strategies
          that support sustainable growth and long-term success.
        </p>
      </div>

    </div>
  </div>
</section>


      {/* ===============================
          IT CONSULTING – TAB SECTION
      ================================ */}
      <section className="services-content">
        <div className="container">

          {/* TABS */}
          <div className="devops-tabs reveal">
            <button
              className={`industry-box ${activeTab === "strategy" ? "active" : ""}`}
              onClick={() => setActiveTab("strategy")}
            >
              IT Strategy
            </button>

            <button
              className={`industry-box ${activeTab === "assessment" ? "active" : ""}`}
              onClick={() => setActiveTab("assessment")}
            >
              IT Assessment
            </button>

            <button
              className={`industry-box ${activeTab === "transformation" ? "active" : ""}`}
              onClick={() => setActiveTab("transformation")}
            >
              Digital Transformation
            </button>

            <button
              className={`industry-box ${activeTab === "governance" ? "active" : ""}`}
              onClick={() => setActiveTab("governance")}
            >
              Governance & Risk
            </button>
          </div>

          {/* CONTENT CARD */}
          <div className="service-card reveal devops-card">

            {activeTab === "strategy" && (
              <>
                <h2>IT Strategy & Roadmapping</h2>
                <p>
                  A clear IT strategy is essential for sustainable business
                  growth. We help organizations define technology roadmaps
                  that align IT investments with long-term business goals.
                </p>
                <ul>
                  <li>IT vision and strategic planning</li>
                  <li>Technology roadmap development</li>
                  <li>Application and infrastructure strategy</li>
                  <li>Cloud and modernization planning</li>
                  <li>Cost optimization and ROI analysis</li>
                </ul>
                <p>
                  Our IT strategy services provide clarity, direction, and
                  measurable outcomes.
                </p>
              </>
            )}

            {activeTab === "assessment" && (
              <>
                <h2>IT Assessment & Optimization</h2>
                <p>
                  Understanding the current state of IT systems is critical
                  for improvement. We assess infrastructure, applications,
                  security, and processes to identify gaps and opportunities.
                </p>
                <ul>
                  <li>Infrastructure and application assessment</li>
                  <li>Performance and scalability analysis</li>
                  <li>Security and compliance evaluation</li>
                  <li>Process efficiency and cost review</li>
                  <li>Actionable improvement recommendations</li>
                </ul>
                <p>
                  Our assessments help organizations improve efficiency and
                  reduce operational risks.
                </p>
              </>
            )}

            {activeTab === "transformation" && (
              <>
                <h2>Digital Transformation Consulting</h2>
                <p>
                  Digital transformation requires more than technology—it
                  demands cultural and process change. We guide organizations
                  through end-to-end digital transformation initiatives.
                </p>
                <ul>
                  <li>Legacy system modernization</li>
                  <li>Cloud migration and adoption</li>
                  <li>Process automation and digitization</li>
                  <li>Data-driven decision enablement</li>
                  <li>Change management and adoption support</li>
                </ul>
                <p>
                  Our transformation services help businesses innovate and
                  compete in digital-first markets.
                </p>
              </>
            )}

            {activeTab === "governance" && (
              <>
                <h2>IT Governance, Risk & Compliance</h2>
                <p>
                  Strong governance ensures technology investments are secure,
                  compliant, and well-managed. We help organizations establish
                  governance frameworks that reduce risk and improve control.
                </p>
                <ul>
                  <li>IT governance framework design</li>
                  <li>Risk assessment and mitigation</li>
                  <li>Security and compliance alignment</li>
                  <li>Policy and standards development</li>
                  <li>Continuous monitoring and improvement</li>
                </ul>
                <p>
                  Our governance services enable secure, compliant, and
                  accountable IT operations.
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

export default ITConsulting;
