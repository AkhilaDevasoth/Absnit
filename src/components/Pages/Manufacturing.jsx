import React, { useState, useEffect } from "react";

const Manufacturing = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeTab, setActiveTab] = useState("automation");

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

      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title reveal" style={{ textAlign: "center", color: "#1e40af" }}>
            Manufacturing Solutions
          </h1>
          <p className="page-subtitle reveal" style={{ fontSize: "22px", textAlign: "center" }}>
            Supporting manufacturing businesses in their digital transformation journey
          </p>
        </div>
      </section>

      {/* MAIN CONTENT — KEPT SAME */}
      <section className="services-content">
        <div className="container">
          <div className="industry-detail-layout">

            <div className="industry-image-card reveal">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy5dai6ZMrMhqP-gf3kqvbqLiath4YeKRpXA&s"
                alt="Manufacturing Digital Solutions"
              />
            </div>

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

              <p className="industry-subtitle">Key challenges we address:</p>

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
                in a data-driven manufacturing landscape.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ===============================
          MANUFACTURING PRACTICES – TAB SECTION
      ================================ */}
      <section className="services-content">
        <div className="container">

          {/* TABS */}
          <div className="devops-tabs reveal">
            <button
              className={`industry-box ${activeTab === "automation" ? "active" : ""}`}
              onClick={() => setActiveTab("automation")}
            >
              Process Automation
            </button>

            <button
              className={`industry-box ${activeTab === "supply" ? "active" : ""}`}
              onClick={() => setActiveTab("supply")}
            >
              Supply Chain
            </button>

            <button
              className={`industry-box ${activeTab === "quality" ? "active" : ""}`}
              onClick={() => setActiveTab("quality")}
            >
              Quality Management
            </button>

            <button
              className={`industry-box ${activeTab === "analytics" ? "active" : ""}`}
              onClick={() => setActiveTab("analytics")}
            >
              Manufacturing Analytics
            </button>
          </div>

          {/* CONTENT CARD */}
          <div className="service-card reveal devops-card">

            {activeTab === "automation" && (
              <>
                <h2>Manufacturing Process Automation</h2>
                <p>
                  Automation is a key driver of efficiency in modern manufacturing.
                  ABSN IT Solutions implements intelligent automation systems that
                  streamline production workflows and reduce manual intervention.
                </p>
                <ul>
                  <li>Automated production planning and scheduling</li>
                  <li>Integration with machines and shop-floor systems</li>
                  <li>Reduction of manual errors and rework</li>
                  <li>Improved productivity and throughput</li>
                  <li>Real-time monitoring of production processes</li>
                </ul>
                <p>
                  Our automation solutions help manufacturers achieve higher
                  efficiency, consistency, and operational excellence.
                </p>
              </>
            )}

            {activeTab === "supply" && (
              <>
                <h2>Supply Chain Optimization</h2>
                <p>
                  A transparent and optimized supply chain is critical for
                  manufacturing success. We build digital supply chain solutions
                  that improve visibility and coordination across vendors and
                  logistics partners.
                </p>
                <ul>
                  <li>End-to-end supply chain visibility</li>
                  <li>Inventory forecasting and demand planning</li>
                  <li>Vendor and procurement management systems</li>
                  <li>Logistics tracking and optimization</li>
                  <li>Reduced lead times and operational costs</li>
                </ul>
                <p>
                  Our solutions ensure reliable supply chains that adapt quickly
                  to market demands.
                </p>
              </>
            )}

            {activeTab === "quality" && (
              <>
                <h2>Quality Management Systems</h2>
                <p>
                  Maintaining consistent product quality is essential in
                  manufacturing. ABSN IT Solutions delivers quality management
                  systems that ensure compliance and continuous improvement.
                </p>
                <ul>
                  <li>Automated quality inspections and checks</li>
                  <li>Compliance monitoring and reporting</li>
                  <li>Defect tracking and root cause analysis</li>
                  <li>Standardized quality processes</li>
                  <li>Continuous improvement workflows</li>
                </ul>
                <p>
                  Our quality management solutions reduce defects and enhance
                  customer satisfaction.
                </p>
              </>
            )}

            {activeTab === "analytics" && (
              <>
                <h2>Manufacturing Analytics & Insights</h2>
                <p>
                  Data-driven decision-making is essential for modern factories.
                  We provide advanced manufacturing analytics solutions that
                  transform production data into actionable insights.
                </p>
                <ul>
                  <li>Real-time production dashboards</li>
                  <li>Predictive maintenance analytics</li>
                  <li>Performance and efficiency tracking</li>
                  <li>Cost optimization insights</li>
                  <li>AI-driven manufacturing intelligence</li>
                </ul>
                <p>
                  With manufacturing analytics, organizations gain visibility,
                  predict issues early, and optimize production outcomes.
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

export default Manufacturing;
