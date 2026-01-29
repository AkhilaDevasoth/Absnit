import React, { useState, useEffect } from "react";

const ProgrammingLanguages = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeTab, setActiveTab] = useState("backend");

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
            Programming Languages
          </h1>
          <p className="page-subtitle reveal" style={{ fontSize: "22px", textAlign: "center" }}>
            Mastering multiple programming languages for diverse solutions
          </p>
        </div>
      </section>
{/* ===============================
    PROGRAMMING LANGUAGES – FEATURE SECTION
================================ */}
<section className="services-content">
  <div className="container">
    <div className="feature-image-overlay reveal">

      <img
        src="https://newrelic.com/sites/default/files/2021-04/good-programmer-banner-final.jpg"
        alt="Programming Languages"
      />

      <div className="overlay"></div>

      <div className="overlay-content">
        <h2>Programming Languages</h2>
        <p>
          We specialize in developing software using modern programming
          languages and frameworks to create scalable, maintainable, and
          high-performance applications across platforms.
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
                src="https://media.istockphoto.com/id/1730268726/photo/programming-languages-titles-with-c-plus-plus-phrase-in-blue-color.jpg?s=612x612&w=0&k=20&c=wzClHvvt3eMBXESAUxT1QOfQTLU7nl3A_C3ipzi9JZQ="
                alt="Programming Languages"
              />
            </div>

            <div className="industry-text-content reveal">
              <h2 className="industry-title">
                Multi-Language Development Expertise
              </h2>

              <p className="industry-description">
                ABSN IT Solutions leverages a wide range of programming languages
                to build secure, scalable, and high-performance software
                solutions. We select the most suitable language based on
                performance, scalability, and long-term maintainability.
              </p>

              <p className="industry-footer-text">
                Our multi-language expertise enables us to deliver flexible,
                future-ready applications across industries and platforms.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ===============================
          PROGRAMMING LANGUAGES – TAB SECTION
      ================================ */}
      <section className="services-content">
        <div className="container">

          {/* TABS */}
          <div className="devops-tabs reveal">
            <button
              className={`industry-box ${activeTab === "backend" ? "active" : ""}`}
              onClick={() => setActiveTab("backend")}
            >
              Backend Languages
            </button>

            <button
              className={`industry-box ${activeTab === "frontend" ? "active" : ""}`}
              onClick={() => setActiveTab("frontend")}
            >
              Frontend Languages
            </button>

            <button
              className={`industry-box ${activeTab === "enterprise" ? "active" : ""}`}
              onClick={() => setActiveTab("enterprise")}
            >
              Enterprise & Cloud
            </button>

            <button
              className={`industry-box ${activeTab === "specialized" ? "active" : ""}`}
              onClick={() => setActiveTab("specialized")}
            >
              Specialized Use Cases
            </button>
          </div>

          {/* CONTENT CARD */}
          <div className="service-card reveal devops-card">

            {activeTab === "backend" && (
              <>
                <h2>Backend Programming Languages</h2>
                <p>
                  Backend languages form the foundation of secure, scalable, and
                  high-performance applications. We use proven backend
                  technologies to handle business logic, data processing, and
                  system integrations.
                </p>
                <ul>
                  <li>Java for enterprise-grade backend systems</li>
                  <li>Python for automation, data processing, and APIs</li>
                  <li>C# for secure and scalable .NET applications</li>
                  <li>Node.js for real-time and event-driven systems</li>
                  <li>REST and GraphQL API development</li>
                </ul>
                <p>
                  Our backend solutions ensure reliability, scalability, and
                  security for modern applications.
                </p>
              </>
            )}

            {activeTab === "frontend" && (
              <>
                <h2>Frontend Programming Languages</h2>
                <p>
                  Frontend languages enable intuitive, responsive, and engaging
                  user experiences. We build modern frontend architectures that
                  work seamlessly across browsers and devices.
                </p>
                <ul>
                  <li>JavaScript for dynamic web applications</li>
                  <li>TypeScript for scalable frontend codebases</li>
                  <li>HTML5 and CSS3 for responsive layouts</li>
                  <li>Integration with modern frontend frameworks</li>
                  <li>Performance optimization and accessibility</li>
                </ul>
                <p>
                  Our frontend expertise ensures visually appealing and
                  high-performing user interfaces.
                </p>
              </>
            )}

            {activeTab === "enterprise" && (
              <>
                <h2>Enterprise & Cloud Programming</h2>
                <p>
                  Enterprise and cloud applications require robust languages
                  that support scalability, security, and long-term
                  maintainability.
                </p>
                <ul>
                  <li>Java and C# for enterprise-grade systems</li>
                  <li>Python for cloud automation and AI workloads</li>
                  <li>Integration with cloud-native architectures</li>
                  <li>Support for microservices and distributed systems</li>
                  <li>High availability and fault tolerance</li>
                </ul>
                <p>
                  Our enterprise programming expertise helps organizations build
                  resilient and future-ready platforms.
                </p>
              </>
            )}

            {activeTab === "specialized" && (
              <>
                <h2>Specialized Programming Use Cases</h2>
                <p>
                  Certain projects require specialized programming languages
                  and approaches to meet unique technical requirements.
                </p>
                <ul>
                  <li>Python for AI, ML, and data analytics</li>
                  <li>Scripting languages for automation and DevOps</li>
                  <li>Performance-focused languages for system-level tasks</li>
                  <li>Custom language selection based on project goals</li>
                  <li>Rapid prototyping and proof-of-concept development</li>
                </ul>
                <p>
                  Our flexible language expertise allows us to solve complex
                  problems efficiently across diverse domains.
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

export default ProgrammingLanguages;
