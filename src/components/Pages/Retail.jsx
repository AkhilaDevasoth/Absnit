import React, { useState, useEffect } from "react";

const Retail = () => {
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
            Retail Solutions
          </h1>

          <p
            className="page-subtitle reveal"
            style={{
              fontSize: "22px",
              lineHeight: "1.4",
              textAlign: "center",
            }}
          >
            Enhancing customer experience and driving growth in retail
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
                src="https://media.istockphoto.com/id/1277730987/photo/retail-and-technology-retail-as-a-service.jpg?s=612x612&w=0&k=20&c=H_W2BxECWMn2lz5vWJOUZiOlq6qBxvHhMS0I3kvhH4w="
                alt="Retail Technology Solutions"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="industry-text-content reveal">
              <h2 className="industry-title">
                Digital Retail & E-Commerce Solutions
              </h2>

              <p className="industry-description">
                ABSN IT Solutions helps retailers create seamless, engaging, and
                data-driven customer experiences across digital and physical
                channels. Our retail technology solutions enable agility,
                scalability, and smarter decision-making.
              </p>

              <p className="industry-subtitle">
                Key challenges we address:
              </p>

              <ul className="industry-list">
                <li>Omnichannel retail and e-commerce platforms</li>
                <li>Inventory, order, and warehouse management systems</li>
                <li>Customer analytics and personalized experiences</li>
                <li>Point of Sale (POS) and payment integrations</li>
                <li>Demand forecasting and supply chain optimization</li>
                <li>Retail data analytics and performance dashboards</li>
              </ul>

              <p className="industry-footer-text">
                Our retail solutions empower brands to respond quickly to market
                changes, improve customer loyalty, and drive sustainable growth
                in an increasingly competitive retail landscape.
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

export default Retail;
