import React from 'react';

const Education = () => {
  return (
    <div className="page">
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <h1
            className="page-title"
            style={{ textAlign: "center", color: "#1e40af" }}
          >
            Education
          </h1>
          <p
            className="page-subtitle"
            style={{
              fontSize: "22px",
              lineHeight: "1.4",
              textAlign: "center",
            }}
          >
            Smart digital solutions that transform learning and administration
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="services-content">
        <div className="container">
          <div className="inner-services-content">
            <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#374151" }}>
              We empower educational institutions with smart digital solutions that transform learning and administration. Our education-focused services include learning management systems, student information platforms, online examination tools, and custom software for schools, colleges, and EdTech companies. AbsNIT Solutions enables seamless collaboration, improved engagement, and data-driven decision-making in today's digital education ecosystem.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;