import React, { useState, useEffect } from "react";

const Database = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeTab, setActiveTab] = useState("relational");

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
            Database Technologies
          </h1>
          <p className="page-subtitle reveal" style={{ fontSize: "22px", textAlign: "center" }}>
            Robust database solutions for data management
          </p>
        </div>
      </section>

      {/* MAIN CONTENT (UNCHANGED) */}
      <section className="services-content">
        <div className="container">
          <div className="industry-detail-layout">

            <div className="industry-image-card reveal">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVYYo_oEhFbIFzkeCXypRMDTwaUCJIOoY4NQ&s"
                alt="Database Technologies"
              />
            </div>

            <div className="industry-text-content reveal">
              <h2 className="industry-title">Modern Database Solutions</h2>

              <p className="industry-description">
                ABSN IT Solutions delivers reliable and scalable database
                solutions to support modern applications. We design, optimize,
                and manage databases that ensure high performance, data
                integrity, and secure access across systems.
              </p>

              <p className="industry-subtitle">
                Database technologies we work with:
              </p>

              <ul className="industry-list">
                <li>MySQL for reliable relational database solutions</li>
                <li>PostgreSQL for advanced, enterprise-grade databases</li>
                <li>MongoDB for flexible NoSQL data storage</li>
                <li>Cloud databases and managed database services</li>
                <li>Database performance tuning and optimization</li>
                <li>Secure data storage and backup strategies</li>
              </ul>

              <p className="industry-footer-text">
                Our database expertise ensures efficient data storage,
                high availability, and seamless integration with your
                applications.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ===============================
          DATABASE TECHNOLOGIES – TAB SECTION
      ================================ */}
      <section className="services-content">
        <div className="container">

          {/* TABS */}
          <div className="devops-tabs reveal">
            <button
              className={`industry-box ${activeTab === "relational" ? "active" : ""}`}
              onClick={() => setActiveTab("relational")}
            >
              Relational Databases
            </button>

            <button
              className={`industry-box ${activeTab === "nosql" ? "active" : ""}`}
              onClick={() => setActiveTab("nosql")}
            >
              NoSQL Databases
            </button>

            <button
              className={`industry-box ${activeTab === "cloud" ? "active" : ""}`}
              onClick={() => setActiveTab("cloud")}
            >
              Cloud Databases
            </button>

            <button
              className={`industry-box ${activeTab === "optimization" ? "active" : ""}`}
              onClick={() => setActiveTab("optimization")}
            >
              Performance & Security
            </button>
          </div>

          {/* CONTENT CARD */}
          <div className="service-card reveal devops-card">

            {activeTab === "relational" && (
              <>
                <h2>Relational Databases</h2>
                <p>
                  Relational databases form the backbone of structured data
                  management. ABSN IT Solutions designs and manages highly
                  reliable relational databases for enterprise applications.
                </p>
                <ul>
                  <li>Schema design and normalization</li>
                  <li>ACID-compliant transaction handling</li>
                  <li>MySQL and PostgreSQL implementations</li>
                  <li>Data integrity and consistency enforcement</li>
                  <li>High availability and replication strategies</li>
                </ul>
                <p>
                  Our relational database solutions ensure accuracy,
                  reliability, and scalability for mission-critical systems.
                </p>
              </>
            )}

            {activeTab === "nosql" && (
              <>
                <h2>NoSQL Databases</h2>
                <p>
                  NoSQL databases provide flexibility for unstructured and
                  high-volume data. We help organizations adopt NoSQL solutions
                  for modern, data-intensive applications.
                </p>
                <ul>
                  <li>Document-based and key-value databases</li>
                  <li>Schema-less data modeling</li>
                  <li>Horizontal scalability</li>
                  <li>High-performance read/write operations</li>
                  <li>MongoDB and NoSQL cloud services</li>
                </ul>
                <p>
                  Our NoSQL solutions support real-time analytics, microservices,
                  and scalable application architectures.
                </p>
              </>
            )}

            {activeTab === "cloud" && (
              <>
                <h2>Cloud Databases</h2>
                <p>
                  Cloud databases enable scalability, availability, and
                  simplified management. ABSN IT Solutions deploys and manages
                  cloud-native database solutions across platforms.
                </p>
                <ul>
                  <li>Managed database services (RDS, Cloud SQL)</li>
                  <li>Automated backups and scaling</li>
                  <li>Multi-region availability</li>
                  <li>Disaster recovery planning</li>
                  <li>Cost-efficient database operations</li>
                </ul>
                <p>
                  Our cloud database expertise ensures high availability and
                  operational efficiency for growing businesses.
                </p>
              </>
            )}

            {activeTab === "optimization" && (
              <>
                <h2>Performance & Security</h2>
                <p>
                  Database performance and security are critical for business
                  continuity. We optimize databases to deliver speed, reliability,
                  and compliance.
                </p>
                <ul>
                  <li>Query optimization and indexing strategies</li>
                  <li>Database monitoring and health checks</li>
                  <li>Data encryption and access control</li>
                  <li>Backup, recovery, and failover planning</li>
                  <li>Compliance with security standards</li>
                </ul>
                <p>
                  Our optimization and security practices protect data while
                  ensuring high performance and availability.
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

export default Database;
