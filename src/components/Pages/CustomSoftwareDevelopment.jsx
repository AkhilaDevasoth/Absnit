import React, { useState, useEffect } from "react";

const CustomSoftwareDevelopment = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            // 👇 REMOVE when out of view (important)
            entry.target.classList.remove("active");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    document.querySelectorAll(".reveal").forEach((el) =>
      observer.observe(el)
    );

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
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
            Custom Software Development
          </h1>
          <p
            className="page-subtitle"
            style={{
              fontSize: "22px",
              lineHeight: "1.4",
              textAlign: "center",
            }}
          >
            Tailored software solutions to streamline your operations
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
                src="https://www.portotheme.com/wp-content/uploads/2023/12/software-development.webp"
                alt="Custom Software Development"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="industry-text-content reveal opacity-0 translate-y-4 transition-all duration-700 ease-out">
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

              <p className="industry-subtitle">
                Key challenges we address:
              </p>

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

      {/* BACK TO TOP BUTTON */}
      {showBackToTop && (
        <button
          className="back-to-top-btn"
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#1e40af',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            fontSize: '20px',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default CustomSoftwareDevelopment;
