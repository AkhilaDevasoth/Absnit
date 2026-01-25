import React, { useState, useEffect } from "react";

const MobileAppDevelopment = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeTab, setActiveTab] = useState("native");

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
          <h1
            className="page-title"
            style={{ textAlign: "center", color: "#1e40af" }}
          >
            Mobile App Development
          </h1>
          <p
            className="page-subtitle"
            style={{ fontSize: "22px", textAlign: "center" }}
          >
            High-performance mobile applications for Android and iOS platforms
          </p>
        </div>
      </section>

     {/* MAIN CONTENT */}
<section className="services-content">
  <div className="container">
    <div className="industry-detail-layout">

      <div className="industry-image-card reveal">
        <img
          src="https://bluetreeagency.com/wp-content/uploads/2024/11/660e8ac66813866c71248853_Choosing-a-Mobile-App-Framework.jpeg"
          alt="Mobile App Development"
        />
      </div>

      <div className="industry-text-content reveal">
        <h2 className="industry-title">
          Mobile Application Development Solutions
        </h2>

        <p className="industry-description">
          ABSN IT Solutions builds secure, scalable, and user-friendly mobile
          applications that help businesses engage customers and streamline
          operations. Our mobile solutions are designed for performance,
          reliability, and long-term growth across Android and iOS platforms.
        </p>

        <p className="industry-description">
          We follow a user-first approach combined with modern engineering
          practices to create mobile applications that deliver seamless
          experiences, fast performance, and strong security. From concept and
          design to deployment and ongoing support, our team ensures consistent
          quality at every stage of development.
        </p>

        <p className="industry-subtitle">
          Our mobile app development services include:
        </p>

        <ul className="industry-list">
          <li>Native Android and iOS application development</li>
          <li>Cross-platform app development using modern frameworks</li>
          <li>UI/UX design focused on usability and engagement</li>
          <li>Backend, API, and cloud service integration</li>
          <li>Performance optimization and secure app architecture</li>
          <li>App testing, deployment, and ongoing maintenance</li>
        </ul>

        <p className="industry-footer-text">
          From native applications to cross-platform solutions, we deliver
          mobile experiences that align with business goals, enhance customer
          engagement, and support long-term digital growth in a mobile-first
          world.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* ===============================
          MOBILE APP – TAB SECTION
      ================================ */}
      <section className="services-content">
        <div className="container">

          {/* TABS */}
          <div className="devops-tabs reveal">
            <button
              className={`industry-box ${activeTab === "native" ? "active" : ""}`}
              onClick={() => setActiveTab("native")}
            >
              Native Apps
            </button>

            <button
              className={`industry-box ${activeTab === "cross" ? "active" : ""}`}
              onClick={() => setActiveTab("cross")}
            >
              Cross-Platform Apps
            </button>

            <button
              className={`industry-box ${activeTab === "enterprise" ? "active" : ""}`}
              onClick={() => setActiveTab("enterprise")}
            >
              Enterprise Mobility
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
{activeTab === "native" && (
  <>
    <h2>Native Mobile App Development</h2>

    <p>
      Native mobile app development allows businesses to deliver the highest
      level of performance, security, and user experience. At ABSN IT Solutions,
      we build native Android and iOS applications that fully leverage device
      capabilities and platform-specific features.
    </p>

    <p>
      Our native apps are optimized for speed, reliability, and scalability,
      ensuring seamless performance even under heavy user loads.
    </p>

    <ul>
      <li>Android application development using Kotlin and Java</li>
      <li>iOS application development using Swift and Objective-C</li>
      <li>Full access to native device features and hardware</li>
      <li>Optimized performance and smooth UI interactions</li>
      <li>Secure data storage and encryption mechanisms</li>
      <li>Compliance with platform guidelines and standards</li>
    </ul>

    <p>
      Native apps are ideal for businesses that require maximum performance,
      advanced functionality, and a premium user experience.
    </p>
  </>
)}

{activeTab === "cross" && (
  <>
    <h2>Cross-Platform Mobile Applications</h2>

    <p>
      Cross-platform development enables faster time-to-market by using a
      single codebase for both Android and iOS platforms. ABSN IT Solutions
      delivers high-quality cross-platform apps without compromising user
      experience or performance.
    </p>

    <p>
      Our cross-platform solutions are ideal for startups and enterprises
      looking to reduce development costs while maintaining consistent
      functionality across devices.
    </p>

    <ul>
      <li>Development using React Native and Flutter</li>
      <li>Single codebase for Android and iOS platforms</li>
      <li>Consistent UI and user experience across devices</li>
      <li>Faster development cycles and reduced maintenance effort</li>
      <li>Easy integration with backend APIs and cloud services</li>
      <li>Scalable architecture for growing user bases</li>
    </ul>

    <p>
      Cross-platform apps help businesses launch faster and scale efficiently
      across multiple platforms.
    </p>
  </>
)}
{activeTab === "enterprise" && (
  <>
    <h2>Enterprise Mobility Solutions</h2>

    <p>
      Enterprise mobility solutions empower organizations to streamline
      operations, improve workforce productivity, and enable secure access to
      business systems anytime, anywhere.
    </p>

    <p>
      ABSN IT Solutions designs enterprise-grade mobile applications that
      integrate seamlessly with existing business infrastructure and systems.
    </p>

    <ul>
      <li>Internal business and workforce productivity apps</li>
      <li>Secure authentication and role-based access control</li>
      <li>Integration with ERP, CRM, and enterprise platforms</li>
      <li>Offline access with real-time data synchronization</li>
      <li>Enterprise-level security and compliance standards</li>
      <li>Scalable architecture for growing organizations</li>
    </ul>

    <p>
      Our enterprise mobility solutions help organizations operate more
      efficiently, reduce operational delays, and improve collaboration.
    </p>
  </>
)}
{activeTab === "support" && (
  <>
    <h2>Mobile App Maintenance & Support</h2>

    <p>
      Ongoing maintenance and support are essential for ensuring long-term
      performance, security, and reliability of mobile applications. ABSN IT
      Solutions provides end-to-end support services tailored to evolving
      business needs.
    </p>

    <p>
      We proactively monitor applications, resolve issues, and implement
      enhancements to keep apps running smoothly across all devices.
    </p>

    <ul>
      <li>Continuous performance monitoring and optimization</li>
      <li>OS version updates and compatibility management</li>
      <li>Security patches and vulnerability fixes</li>
      <li>Feature enhancements and user experience improvements</li>
      <li>Bug fixes and incident resolution</li>
      <li>24/7 technical support and maintenance services</li>
    </ul>

    <p>
      Our maintenance services ensure your mobile applications remain secure,
      up-to-date, and ready for future growth.
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

export default MobileAppDevelopment;
