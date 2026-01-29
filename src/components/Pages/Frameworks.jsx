import React, { useState, useEffect } from "react";

const Frameworks = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeTab, setActiveTab] = useState("frontend");

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
            Frameworks
          </h1>
          <p className="page-subtitle reveal" style={{ fontSize: "22px", textAlign: "center" }}>
            Modern frameworks for rapid and scalable development
          </p>
        </div>
      </section>
{/* ===============================
    FRAMEWORKS – FEATURE SECTION
================================ */}
<section className="services-content">
  <div className="container">
    <div className="feature-image-overlay reveal">

      <img
        src="https://media.licdn.com/dms/image/v2/C5616AQH6SUoB3Neo6g/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1651210171876?e=2147483647&v=beta&t=bgdjeJ1O7fpStRxpzShynhABBXCwsbDxBV_5E933TnM"
        alt="Frameworks"
      />

      <div className="overlay"></div>

      <div className="overlay-content">
        <h2>Frameworks & Libraries</h2>
        <p>
          We work with a range of modern frameworks and libraries to build 
          high-performance, scalable, and maintainable applications that deliver
          great user experiences and robust backend performance.
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
                src="https://www.cerebruminfotech.com/blog/wp-content/uploads/2022/09/What-is-a-Framework-in-Programming-.png"
                alt="Modern Software Frameworks"
              />
            </div>

            <div className="industry-text-content reveal">
              <h2 className="industry-title">Modern Development Frameworks</h2>

              <p className="industry-description">
                ABSN IT Solutions leverages modern, robust, and proven software
                frameworks to build scalable, maintainable, and high-performance
                applications.
              </p>

              <p className="industry-subtitle">Frameworks we specialize in:</p>

              <ul className="industry-list">
                <li>React.js for dynamic and responsive front-end applications</li>
                <li>Angular for enterprise-grade web solutions</li>
                <li>.NET framework for secure backend systems</li>
                <li>Django for rapid backend development</li>
                <li>Node.js frameworks for real-time applications</li>
                <li>Microservices and API-driven architectures</li>
              </ul>

              <p className="industry-footer-text">
                By selecting the right framework for each project, we ensure
                flexibility, scalability, and long-term maintainability.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ===============================
          FRAMEWORKS – TAB SECTION
      ================================ */}
      <section className="services-content">
        <div className="container">

          {/* TABS */}
          <div className="devops-tabs reveal">
            <button
              className={`industry-box ${activeTab === "frontend" ? "active" : ""}`}
              onClick={() => setActiveTab("frontend")}
            >
              Frontend Frameworks
            </button>

            <button
              className={`industry-box ${activeTab === "backend" ? "active" : ""}`}
              onClick={() => setActiveTab("backend")}
            >
              Backend Frameworks
            </button>

            <button
              className={`industry-box ${activeTab === "enterprise" ? "active" : ""}`}
              onClick={() => setActiveTab("enterprise")}
            >
              Enterprise Frameworks
            </button>

            <button
              className={`industry-box ${activeTab === "microservices" ? "active" : ""}`}
              onClick={() => setActiveTab("microservices")}
            >
              Microservices & APIs
            </button>
          </div>

          {/* CONTENT CARD */}
          <div className="service-card reveal devops-card">

            {activeTab === "frontend" && (
  <>
    <h2>Frontend Frameworks</h2>

    <p>
      Frontend frameworks play a critical role in building visually engaging,
      responsive, and high-performing user interfaces. At ABSN IT Solutions,
      we design frontend architectures that deliver seamless user experiences
      across web and mobile devices.
    </p>

    <p>
      Our frontend development approach focuses on usability, accessibility,
      performance optimization, and consistent design systems that align with
      business branding and customer expectations.
    </p>

    <ul>
      <li>React.js for component-based, reusable UI development</li>
      <li>Angular for enterprise-scale frontend applications</li>
      <li>State management using Redux, Context API, and RxJS</li>
      <li>Responsive, mobile-first, and cross-browser compatibility</li>
      <li>Integration with REST and GraphQL APIs</li>
      <li>Performance optimization and lazy loading techniques</li>
    </ul>

    <p>
      Our frontend solutions ensure faster load times, intuitive navigation,
      and consistent user experiences that increase engagement and conversion
      rates.
    </p>
  </>
)}

            {activeTab === "backend" && (
  <>
    <h2>Backend Frameworks</h2>

    <p>
      Backend frameworks form the backbone of secure, scalable, and reliable
      applications. ABSN IT Solutions builds robust backend systems that handle
      business logic, data processing, authentication, and integrations.
    </p>

    <p>
      We focus on clean architecture, modular design, and scalable backend
      services that can grow with evolving business needs.
    </p>

    <ul>
      <li>Django and Flask for rapid and secure backend development</li>
      <li>Node.js frameworks for real-time and event-driven systems</li>
      <li>RESTful and GraphQL API design and implementation</li>
      <li>Authentication, authorization, and role-based access control</li>
      <li>Secure data handling and encryption</li>
      <li>High-performance server-side architecture</li>
    </ul>

    <p>
      Our backend frameworks ensure system reliability, data integrity, and
      seamless integration with frontend and third-party services.
    </p>
  </>
)}


           {activeTab === "enterprise" && (
  <>
    <h2>Enterprise Frameworks</h2>

    <p>
      Enterprise frameworks are designed to support complex, large-scale
      business applications that require high security, performance, and
      long-term maintainability.
    </p>

    <p>
      ABSN IT Solutions develops enterprise-grade systems that integrate
      seamlessly with existing business infrastructure and support
      mission-critical operations.
    </p>

    <ul>
      <li>.NET framework for secure and scalable enterprise applications</li>
      <li>Multi-layered architecture for maintainability and scalability</li>
      <li>Integration with ERP, CRM, and legacy systems</li>
      <li>Compliance-ready and security-focused design</li>
      <li>High availability and fault-tolerant systems</li>
      <li>Long-term support and system optimization</li>
    </ul>

    <p>
      Our enterprise frameworks help organizations modernize operations,
      improve efficiency, and ensure business continuity at scale.
    </p>
  </>
)}

          {activeTab === "microservices" && (
  <>
    <h2>Microservices & API Frameworks</h2>

    <p>
      Microservices architecture enables applications to be built as a
      collection of independent, loosely coupled services that can be
      developed, deployed, and scaled independently.
    </p>

    <p>
      ABSN IT Solutions helps organizations adopt microservices and API-driven
      architectures to improve agility, scalability, and system resilience.
    </p>

    <ul>
      <li>Service-oriented and API-first architecture design</li>
      <li>Independent deployment and scaling of services</li>
      <li>Container-friendly frameworks and cloud-native support</li>
      <li>Integration with CI/CD pipelines and DevOps workflows</li>
      <li>Fault tolerance, load balancing, and resilience patterns</li>
      <li>Secure and well-documented APIs</li>
    </ul>

    <p>
      Our microservices solutions enable faster innovation, reduced downtime,
      and seamless scalability for modern digital platforms.
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

export default Frameworks;
