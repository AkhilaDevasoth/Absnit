import React from 'react';

const Finance = () => {
  return (
    <div className="page">
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <h1
            className="page-title"
            style={{ textAlign: "center", color: "#1e40af" }}
          >
            Finance
          </h1>
          <p
            className="page-subtitle"
            style={{
              fontSize: "22px",
              lineHeight: "1.4",
              textAlign: "center",
            }}
          >
            Reliable and secure technology solutions for the finance sector
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="services-content">
        <div className="container">
          <div className="inner-services-content">
            <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#374151" }}>
              We provide reliable and secure technology solutions for the finance sector, including banks, fintech startups, and financial service providers. Our expertise covers digital payment systems, financial analytics, risk management tools, and secure data platforms. AbsNIT Solutions focuses on compliance, scalability, and performance to help financial organizations deliver trusted and efficient services.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Finance;