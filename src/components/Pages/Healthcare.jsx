import React from 'react';

const Healthcare = () => {
  return (
    <div className="page">
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <h1
            className="page-title"
            style={{ textAlign: "center", color: "#1e40af" }}
          >
            Healthcare
          </h1>
          <p
            className="page-subtitle"
            style={{
              fontSize: "22px",
              lineHeight: "1.4",
              textAlign: "center",
            }}
          >
            Secure and scalable digital solutions for the healthcare industry
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="services-content">
        <div className="container">
          <div className="inner-services-content">
            <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#374151" }}>
              We deliver secure and scalable digital solutions for the healthcare industry. Our platforms help hospitals, clinics, and healthcare startups streamline patient management, electronic health records, telemedicine, and data analytics. By leveraging modern technologies, we enhance operational efficiency, ensure data security, and improve patient care outcomes while meeting regulatory and compliance standards.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Healthcare;