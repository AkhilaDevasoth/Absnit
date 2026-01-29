import React, { useState, useEffect } from "react";

const CustomSoftwareDevelopment = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeTab, setActiveTab] = useState("enterprise");

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
          <h1 className="page-title" style={{ textAlign: "center", color: "#1e40af" }}>
            Custom Software Development
          </h1>
          <p className="page-subtitle" style={{ fontSize: "22px", textAlign: "center" }}>
            Tailored software solutions to streamline your operations
          </p>
        </div>
      </section>
      {/* ===============================
    FIRST FEATURE BOX (TEXT ON IMAGE)
================================ */}
<section className="services-content">
  <div className="container">
    <div className="feature-image-overlay reveal">

      {/* BACKGROUND IMAGE */}
      <img
        src="https://www.shutterstock.com/image-photo/data-science-engineering-digital-technology-260nw-2698136865.jpg"
        alt="Custom Software Development"
      />

      {/* OVERLAY */}
      <div className="overlay"></div>

      {/* TEXT */}
      <div className="overlay-content">
        <h2>Custom Software Development</h2>
        <p>
          Enterprise-grade, secure, and scalable software solutions tailored to
          your business needs.
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
                src="https://www.portotheme.com/wp-content/uploads/2023/12/software-development.webp"
                alt="Custom Software Development"
              />
            </div>

            <div className="industry-text-content reveal">
              <h2 className="industry-title">
                Custom Software Development Services
              </h2>

              <p className="industry-description">
                Custom software development enables businesses to build scalable,
                secure, and high-performance applications tailored to their
                specific operational needs. We design and develop software
                solutions that improve efficiency, automate workflows, and
                support long-term digital growth.
              </p>

              <p className="industry-subtitle">Key challenges we address:</p>

              <ul className="industry-list">
                <li>Designing scalable and future-ready software architectures</li>
                <li>Integrating software with existing business systems</li>
                <li>Ensuring application security and data protection</li>
                <li>Improving operational efficiency through automation</li>
                <li>Supporting cloud-based and enterprise-grade applications</li>
                <li>Maintaining performance, reliability, and scalability</li>
              </ul>

              <p className="industry-footer-text">
                Our expertise spans enterprise software, cloud-native
                applications, SaaS platforms, system integrations, and
                long-term application support to help organizations achieve
                measurable business outcomes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ===============================
          CUSTOM SOFTWARE – TAB SECTION
      ================================ */}
      <section className="services-content">
        <div className="container">

          {/* TABS */}
          <div className="devops-tabs reveal">
            <button
              className={`industry-box ${activeTab === "enterprise" ? "active" : ""}`}
              onClick={() => setActiveTab("enterprise")}
            >
              Enterprise Software
            </button>

            <button
              className={`industry-box ${activeTab === "saas" ? "active" : ""}`}
              onClick={() => setActiveTab("saas")}
            >
              SaaS Applications
            </button>

            <button
              className={`industry-box ${activeTab === "integration" ? "active" : ""}`}
              onClick={() => setActiveTab("integration")}
            >
              System Integration
            </button>

            <button
              className={`industry-box ${activeTab === "support" ? "active" : ""}`}
              onClick={() => setActiveTab("support")}
            >
              Maintenance & Support
            </button>
          </div>

          {/* CONTENT CARD */}
          <div className="service-card reveal devops-card">

            {activeTab === "enterprise" && (
              <>
                <h2>Enterprise Software Development</h2>
                <p>
                  We build enterprise-grade software solutions designed to
                  support complex business operations and large-scale users.
                  Our enterprise applications focus on performance, security,
                  and long-term scalability.
                </p>
                <ul>
                  <li>Custom ERP, CRM, and business management systems</li>
                  <li>Role-based access control and security</li>
                  <li>Scalable architecture for enterprise growth</li>
                  <li>High availability and performance optimization</li>
                  <li>Integration with existing enterprise systems</li>
                </ul>
                <p>
                  Our enterprise software solutions enable organizations to
                  streamline operations and improve decision-making.
                </p>
              </>
            )}

            {activeTab === "saas" && (
              <>
                <h2>SaaS Application Development</h2>
                <p>
                  ABSN IT Solutions designs and develops secure, scalable SaaS
                  platforms that support subscription-based business models and
                  cloud-native deployments.
                </p>
                <ul>
                  <li>Cloud-native SaaS architecture</li>
                  <li>Multi-tenant application design</li>
                  <li>Subscription and billing integration</li>
                  <li>Secure authentication and user management</li>
                  <li>Scalability for high user demand</li>
                </ul>
                <p>
                  Our SaaS solutions help businesses launch faster, scale
                  efficiently, and deliver consistent user experiences.
                </p>
              </>
            )}

            {activeTab === "integration" && (
              <>
                <h2>System Integration & APIs</h2>
                <p>
                  Seamless integration is critical for modern digital
                  ecosystems. We build reliable APIs and integration solutions
                  that connect software systems, platforms, and third-party
                  services.
                </p>
                <ul>
                  <li>API development and management</li>
                  <li>Integration with legacy systems</li>
                  <li>Third-party platform integrations</li>
                  <li>Secure data exchange and synchronization</li>
                  <li>Microservices-based integrations</li>
                </ul>
                <p>
                  Our integration services ensure smooth data flow and
                  interoperability across business systems.
                </p>
              </>
            )}

            {activeTab === "support" && (
              <>
                <h2>Application Maintenance & Support</h2>
                <p>
                  Long-term software success requires continuous monitoring,
                  updates, and optimization. We provide ongoing support services
                  to ensure application stability and performance.
                </p>
                <ul>
                  <li>Proactive monitoring and issue resolution</li>
                  <li>Performance optimization and upgrades</li>
                  <li>Security patches and compliance updates</li>
                  <li>Feature enhancements and scalability support</li>
                  <li>24/7 technical support and maintenance</li>
                </ul>
                <p>
                  Our maintenance services help organizations keep their
                  applications reliable, secure, and future-ready.
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

export default CustomSoftwareDevelopment;
