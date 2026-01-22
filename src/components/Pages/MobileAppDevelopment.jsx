import React, { useState, useEffect } from "react";

const MobileAppDevelopment = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // 🔹 Reveal animation (up & down)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".reveal").forEach((el) =>
      observer.observe(el)
    );

    return () => observer.disconnect();
  }, []);

  // 🔹 Back-to-top button logic
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="page">
      {/* Reveal fix */}
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
            className="page-title reveal"
            style={{ textAlign: "center", color: "#1e40af" }}
          >
            Mobile App Development
          </h1>

          <p
            className="page-subtitle reveal"
            style={{
              fontSize: "22px",
              lineHeight: "1.4",
              textAlign: "center",
            }}
          >
            High-performance mobile apps for Android and iOS
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="services-content">
        <div className="container">
          <div className="industry-detail-layout">

            {/* LEFT IMAGE */}
            <div className="industry-image-card reveal opacity-0 translate-y-4 transition-all duration-700 ease-out">
              <img
                src="https://bluetreeagency.com/wp-content/uploads/2024/11/660e8ac66813866c71248853_Choosing-a-Mobile-App-Framework.jpeg"
                alt="Mobile App Development"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="industry-text-content reveal opacity-0 translate-y-4 transition-all duration-700 ease-out">
              <h2 className="industry-title">
                Mobile App Development Services
              </h2>

              <p className="industry-description">
                We build high-performance, scalable, and secure mobile
                applications that deliver exceptional user experiences across
                Android and iOS platforms. Our solutions are designed to support
                business growth, user engagement, and long-term success.
              </p>

              <p className="industry-subtitle">
                Key challenges we address:
              </p>

              <ul className="industry-list">
                <li>Designing intuitive and engaging mobile user experiences</li>
                <li>Developing native and cross-platform mobile applications</li>
                <li>Ensuring performance, security, and scalability</li>
                <li>Integrating apps with backend systems and APIs</li>
                <li>Supporting real-time features and cloud connectivity</li>
                <li>Maintaining compatibility across devices and OS versions</li>
              </ul>

              <p className="industry-footer-text">
                Our expertise includes native Android & iOS apps, cross-platform
                development, enterprise mobility solutions, and ongoing app
                maintenance to help businesses stay competitive in the mobile-first
                world.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* BACK TO TOP BUTTON */}
      {showBackToTop && (
        <button
          className="back-to-top-btn"
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#1e40af",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            fontSize: "20px",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default MobileAppDevelopment;
