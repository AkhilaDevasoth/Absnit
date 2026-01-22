import React from 'react';

const Manufacturing = () => {
  return (
    <div className="page">
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <h1
            className="page-title"
            style={{ textAlign: "center", color: "#1e40af" }}
          >
            Manufacturing
          </h1>
          <p
            className="page-subtitle"
            style={{
              fontSize: "22px",
              lineHeight: "1.4",
              textAlign: "center",
            }}
          >
            Supporting manufacturing businesses in their digital transformation journey
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="services-content">
        <div className="container">
          <div className="inner-services-content">
            <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#374151" }}>
              AbsNIT Solutions supports manufacturing businesses in their journey toward digital transformation. Our solutions optimize production processes, inventory management, supply chain operations, and quality control through automation and real-time insights. By integrating intelligent systems and analytics, we help manufacturers increase productivity, reduce downtime, and maintain operational excellence.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manufacturing;