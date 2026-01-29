import React, { useState, useEffect } from "react";

const CloudPlatforms = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeTab, setActiveTab] = useState("aws");

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
            Cloud Platforms
          </h1>
          <p className="page-subtitle reveal" style={{ fontSize: "22px", textAlign: "center" }}>
            Scalable cloud infrastructure for modern applications
          </p>
        </div>
      </section>
{/* ===============================
    CLOUD PLATFORMS – FEATURE BOX
================================ */}
<section className="services-content">
  <div className="container">
    <div className="feature-image-overlay reveal">

      {/* BACKGROUND IMAGE */}
      <img
        src="https://www.shutterstock.com/image-photo/cloud-engineer-hands-holding-platform-260nw-2688670933.jpg"
        alt="AI Cloud Platforms"
      />

      {/* GRADIENT OVERLAY */}
      <div className="overlay"></div>

      {/* OVERLAY TEXT */}
      <div className="overlay-content">
        <h2>Cloud Platforms & AI-Powered Solutions</h2>
        <p>
          We leverage modern cloud computing and AI technologies to build scalable,
          resilient, and secure digital platforms that power business transformation.
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
                src="https://www.shutterstock.com/image-vector/abstract-cloud-technology-circuit-board-600nw-2669250763.jpg"
                alt="Cloud Platforms"
              />
            </div>

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

      {/* ===============================
          CLOUD PLATFORMS – TAB SECTION
      ================================ */}
      <section className="services-content">
        <div className="container">

          {/* TABS */}
          <div className="devops-tabs reveal">
            <button
              className={`industry-box ${activeTab === "aws" ? "active" : ""}`}
              onClick={() => setActiveTab("aws")}
            >
              AWS
            </button>

            <button
              className={`industry-box ${activeTab === "azure" ? "active" : ""}`}
              onClick={() => setActiveTab("azure")}
            >
              Microsoft Azure
            </button>

            <button
              className={`industry-box ${activeTab === "gcp" ? "active" : ""}`}
              onClick={() => setActiveTab("gcp")}
            >
              Google Cloud
            </button>

            <button
              className={`industry-box ${activeTab === "hybrid" ? "active" : ""}`}
              onClick={() => setActiveTab("hybrid")}
            >
              Hybrid & Multi-Cloud
            </button>
          </div>

          {/* CONTENT CARD */}
          <div className="service-card reveal devops-card">

            {activeTab === "aws" && (
              <>
                <h2>Amazon Web Services (AWS)</h2>
                <p>
                  AWS provides a highly scalable and reliable cloud platform for
                  modern applications. ABSN IT Solutions helps organizations
                  design, deploy, and manage secure AWS environments.
                </p>
                <ul>
                  <li>Compute, storage, and networking on AWS</li>
                  <li>Auto-scaling and high availability architecture</li>
                  <li>Serverless and container-based deployments</li>
                  <li>AWS security best practices and IAM</li>
                  <li>Cost optimization and performance tuning</li>
                </ul>
                <p>
                  Our AWS expertise enables businesses to build resilient,
                  scalable, and cost-efficient cloud solutions.
                </p>
              </>
            )}

            {activeTab === "azure" && (
              <>
                <h2>Microsoft Azure</h2>
                <p>
                  Microsoft Azure offers enterprise-grade cloud capabilities
                  with strong integration into Microsoft ecosystems. We help
                  organizations leverage Azure for digital transformation.
                </p>
                <ul>
                  <li>Enterprise cloud and hybrid deployments</li>
                  <li>Azure DevOps and CI/CD automation</li>
                  <li>Identity management with Azure Active Directory</li>
                  <li>Secure data and application hosting</li>
                  <li>Compliance-ready cloud infrastructure</li>
                </ul>
                <p>
                  Our Azure solutions support enterprise scalability, security,
                  and seamless integration with business systems.
                </p>
              </>
            )}

            {activeTab === "gcp" && (
              <>
                <h2>Google Cloud Platform (GCP)</h2>
                <p>
                  Google Cloud Platform is ideal for data-driven and AI-powered
                  workloads. ABSN IT Solutions enables organizations to leverage
                  GCP for innovation and performance.
                </p>
                <ul>
                  <li>Big data and analytics platforms</li>
                  <li>AI/ML and cloud-native workloads</li>
                  <li>Kubernetes and container orchestration</li>
                  <li>High-performance cloud networking</li>
                  <li>Scalable data storage solutions</li>
                </ul>
                <p>
                  Our GCP expertise helps businesses unlock insights and build
                  intelligent, scalable applications.
                </p>
              </>
            )}

            {activeTab === "hybrid" && (
              <>
                <h2>Hybrid & Multi-Cloud Solutions</h2>
                <p>
                  Hybrid and multi-cloud strategies offer flexibility and
                  resilience. We design architectures that combine multiple
                  cloud platforms and on-premise systems seamlessly.
                </p>
                <ul>
                  <li>Hybrid cloud architecture design</li>
                  <li>Multi-cloud workload distribution</li>
                  <li>Unified monitoring and management</li>
                  <li>Disaster recovery across cloud providers</li>
                  <li>Vendor lock-in avoidance strategies</li>
                </ul>
                <p>
                  Our hybrid and multi-cloud solutions ensure scalability,
                  reliability, and business continuity.
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

export default CloudPlatforms;
