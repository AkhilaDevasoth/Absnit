import React, { useState, useEffect } from "react";

const ProgrammingLanguages = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  /* 🔹 Reveal animation (UP & DOWN) */
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

  /* 🔹 Back to top */
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
      {/* Force reveal animation */}
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
            Programming Languages
          </h1>

          <p
            className="page-subtitle reveal"
            style={{
              fontSize: "22px",
              lineHeight: "1.4",
              textAlign: "center",
            }}
          >
            Mastering multiple programming languages for diverse solutions
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="services-content">
        <div className="container">
          <div className="industry-detail-layout">

            {/* LEFT IMAGE */}
            <div className="industry-image-card reveal">
              <img
                src="https://media.istockphoto.com/id/1730268726/photo/programming-languages-titles-with-c-plus-plus-phrase-in-blue-color.jpg?s=612x612&w=0&k=20&c=wzClHvvt3eMBXESAUxT1QOfQTLU7nl3A_C3ipzi9JZQ="
                alt="Programming Languages"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="industry-text-content reveal">
              <h2 className="industry-title">
                Multi-Language Development Expertise
              </h2>

              <p className="industry-description">
                ABSN IT Solutions leverages a broad range of programming languages
                to build reliable, secure, and high-performance applications.
                We choose the right language for each project to ensure
                scalability, efficiency, and long-term maintainability.
              </p>

              <p className="industry-subtitle">
                Programming languages we work with:
              </p>

              <ul className="industry-list">
                <li>Java for enterprise and backend systems</li>
                <li>Python for data processing, automation, and AI</li>
                <li>JavaScript for modern web and full-stack development</li>
                <li>C# for .NET-based applications</li>
                <li>TypeScript for scalable frontend architectures</li>
                <li>Other specialized languages as project requirements demand</li>
              </ul>

              <p className="industry-footer-text">
                Our expertise across multiple programming languages allows us to
                deliver flexible, future-ready solutions that align perfectly
                with your business and technical goals.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* BACK TO TOP */}
      {showBackToTop && (
        <button
          className="back-to-top-btn"
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#1e40af",
            color: "#fff",
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

export default ProgrammingLanguages;
