import React, { useState, useEffect } from "react";

const Retail = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeTab, setActiveTab] = useState("omnichannel");

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

      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title reveal" style={{ textAlign: "center", color: "#1e40af" }}>
            Retail Solutions
          </h1>
          <p className="page-subtitle reveal" style={{ fontSize: "22px", textAlign: "center" }}>
            Enhancing customer experience and driving growth in retail
          </p>
        </div>
      </section>

      {/* MAIN CONTENT — KEPT SAME */}
      <section className="services-content">
        <div className="container">
          <div className="industry-detail-layout">

            <div className="industry-image-card reveal">
              <img
                src="https://media.istockphoto.com/id/1277730987/photo/retail-and-technology-retail-as-a-service.jpg?s=612x612&w=0&k=20&c=H_W2BxECWMn2lz5vWJOUZiOlq6qBxvHhMS0I3kvhH4w="
                alt="Retail Technology Solutions"
              />
            </div>

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

              <p className="industry-subtitle">Key challenges we address:</p>

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

      {/* ===============================
          RETAIL PRACTICES – TAB SECTION
      ================================ */}
      <section className="services-content">
        <div className="container">

          {/* TABS */}
          <div className="devops-tabs reveal">
            <button
              className={`industry-box ${activeTab === "omnichannel" ? "active" : ""}`}
              onClick={() => setActiveTab("omnichannel")}
            >
              Omnichannel Retail
            </button>

            <button
              className={`industry-box ${activeTab === "commerce" ? "active" : ""}`}
              onClick={() => setActiveTab("commerce")}
            >
              E-Commerce Platforms
            </button>

            <button
              className={`industry-box ${activeTab === "customer" ? "active" : ""}`}
              onClick={() => setActiveTab("customer")}
            >
              Customer Experience
            </button>

            <button
              className={`industry-box ${activeTab === "analytics" ? "active" : ""}`}
              onClick={() => setActiveTab("analytics")}
            >
              Retail Analytics
            </button>
          </div>

          {/* CONTENT CARD */}
          <div className="service-card reveal devops-card">

            {activeTab === "omnichannel" && (
              <>
                <h2>Omnichannel Retail Solutions</h2>
                <p>
                  Omnichannel retail enables businesses to deliver a consistent
                  and connected shopping experience across online and offline
                  channels. ABSN IT Solutions helps retailers unify customer
                  journeys across web, mobile, and in-store touchpoints.
                </p>
                <ul>
                  <li>Unified customer experience across all channels</li>
                  <li>Integrated online and in-store operations</li>
                  <li>Real-time inventory visibility</li>
                  <li>Consistent pricing and promotions</li>
                  <li>Improved customer engagement and loyalty</li>
                </ul>
                <p>
                  Our omnichannel solutions help retailers increase conversion
                  rates, retain customers, and deliver seamless shopping
                  experiences.
                </p>
              </>
            )}

            {activeTab === "commerce" && (
              <>
                <h2>E-Commerce & Digital Storefronts</h2>
                <p>
                  We build scalable, secure, and high-performance e-commerce
                  platforms that enable retailers to sell products effortlessly
                  across digital channels.
                </p>
                <ul>
                  <li>Custom e-commerce website and mobile app development</li>
                  <li>Secure payment gateway and POS integration</li>
                  <li>Order management and fulfillment automation</li>
                  <li>Mobile-first and responsive storefront design</li>
                  <li>Scalable platforms for high-traffic demand</li>
                </ul>
                <p>
                  Our e-commerce solutions empower retailers to grow online
                  sales and expand their digital presence.
                </p>
              </>
            )}

            {activeTab === "customer" && (
              <>
                <h2>Customer Experience & Personalization</h2>
                <p>
                  Delivering personalized shopping experiences is key to
                  customer loyalty. We help retailers leverage data and
                  technology to understand customer behavior and preferences.
                </p>
                <ul>
                  <li>Customer data and behavior analytics</li>
                  <li>Personalized product recommendations</li>
                  <li>Loyalty programs and rewards platforms</li>
                  <li>Targeted marketing and promotions</li>
                  <li>Enhanced customer engagement strategies</li>
                </ul>
                <p>
                  Our customer experience solutions drive higher engagement,
                  repeat purchases, and brand loyalty.
                </p>
              </>
            )}

            {activeTab === "analytics" && (
              <>
                <h2>Retail Analytics & Business Insights</h2>
                <p>
                  Data-driven insights enable retailers to make smarter
                  decisions. ABSN IT Solutions delivers advanced retail
                  analytics platforms that provide real-time visibility into
                  operations and performance.
                </p>
                <ul>
                  <li>Sales and revenue performance dashboards</li>
                  <li>Demand forecasting and inventory optimization</li>
                  <li>Customer behavior and trend analysis</li>
                  <li>Store performance and operational insights</li>
                  <li>AI-driven recommendations for growth</li>
                </ul>
                <p>
                  With retail analytics, businesses gain actionable insights
                  that drive profitability and operational excellence.
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

export default Retail;
