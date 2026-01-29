import React, { useState, useEffect } from "react";

const Healthcare = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeTab, setActiveTab] = useState("ehr");

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
            Healthcare Solutions
          </h1>
          <p className="page-subtitle reveal" style={{ fontSize: "22px", textAlign: "center" }}>
            Secure and scalable digital solutions for the healthcare industry
          </p>
        </div>
      </section>
      {/* ===============================
    HEALTHCARE SOLUTIONS – FEATURE SECTION
================================ */}
<section className="services-content">
  <div className="container">
    <div className="feature-image-overlay reveal">

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwH2UE5_rw0-fJ8K6Y3-ClQOhHz-3--3kLgg&s"
        alt="Healthcare Solutions"
      />

      <div className="overlay"></div>

      <div className="overlay-content">
        <h2>Healthcare Solutions</h2>
        <p>
          We provide tailored, secure healthcare solutions that drive better
          patient outcomes, streamline workflows, and support seamless digital
          transformation across the healthcare ecosystem.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* MAIN CONTENT — KEPT SAME */}
      <section className="services-content">
        <div className="container">
          <div className="industry-detail-layout">

            <div className="industry-image-card reveal">
              <img
                src="https://contentwriters.com/blog/wp-content/uploads/shutterstock_133503068-750x500.jpg"
                alt="Healthcare Solutions"
              />
            </div>

            <div className="industry-text-content reveal">
              <h2 className="industry-title">
                Digital Healthcare Technology Solutions
              </h2>

              <p className="industry-description">
                ABSN IT Solutions delivers secure, scalable, and compliant digital
                healthcare platforms designed to improve patient outcomes and
                operational efficiency. We help healthcare organizations embrace
                digital transformation with confidence.
              </p>

              <p className="industry-subtitle">Key challenges we address:</p>

              <ul className="industry-list">
                <li>Secure management of patient data and medical records</li>
                <li>Electronic Health Record (EHR) system implementation</li>
                <li>Telemedicine and remote patient monitoring platforms</li>
                <li>Healthcare data analytics and reporting</li>
                <li>Compliance with healthcare regulations and standards</li>
                <li>Improving clinical workflows and efficiency</li>
              </ul>

              <p className="industry-footer-text">
                Our healthcare solutions support hospitals, clinics, and health-tech
                startups with modern, secure, and scalable systems that enhance
                care delivery while ensuring privacy, compliance, and reliability.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ===============================
          HEALTHCARE PRACTICES – TAB SECTION
      ================================ */}
      <section className="services-content">
        <div className="container">

          {/* TABS */}
          <div className="devops-tabs reveal">
            <button
              className={`industry-box ${activeTab === "ehr" ? "active" : ""}`}
              onClick={() => setActiveTab("ehr")}
            >
              EHR Systems
            </button>

            <button
              className={`industry-box ${activeTab === "telemedicine" ? "active" : ""}`}
              onClick={() => setActiveTab("telemedicine")}
            >
              Telemedicine
            </button>

            <button
              className={`industry-box ${activeTab === "analytics" ? "active" : ""}`}
              onClick={() => setActiveTab("analytics")}
            >
              Healthcare Analytics
            </button>

            <button
              className={`industry-box ${activeTab === "compliance" ? "active" : ""}`}
              onClick={() => setActiveTab("compliance")}
            >
              Compliance & Security
            </button>
          </div>

          {/* CONTENT CARD */}
          <div className="service-card reveal devops-card">

           {activeTab === "ehr" && (
  <>
    <h2>Electronic Health Record (EHR) Systems</h2>

    <p>
      Electronic Health Record (EHR) systems form the digital backbone of
      modern healthcare organizations. ABSN IT Solutions develops secure,
      interoperable, and scalable EHR platforms that centralize patient
      information and support efficient clinical workflows.
    </p>

    <p>
      Our EHR solutions are designed to improve care coordination, reduce
      medical errors, and enhance data accessibility across departments,
      ensuring clinicians have real-time access to accurate patient records.
    </p>

    <ul>
      <li>Centralized storage of patient medical histories and records</li>
      <li>Interoperability with labs, pharmacies, and hospital systems</li>
      <li>Role-based access control for data privacy</li>
      <li>Clinical decision support and alerts</li>
      <li>Improved care coordination across departments</li>
      <li>Scalable architecture for growing healthcare institutions</li>
    </ul>

    <p>
      By implementing robust EHR systems, healthcare providers can deliver
      better patient outcomes, reduce administrative overhead, and ensure
      compliance with healthcare regulations.
    </p>
  </>
)}


         {activeTab === "telemedicine" && (
  <>
    <h2>Telemedicine & Remote Patient Care</h2>

    <p>
      Telemedicine enables healthcare providers to deliver quality care
      beyond physical boundaries. ABSN IT Solutions builds secure and
      user-friendly telemedicine platforms that allow patients to consult
      healthcare professionals remotely.
    </p>

    <p>
      Our solutions improve healthcare accessibility, reduce wait times,
      and enhance patient engagement, especially for rural and remote areas.
    </p>

    <ul>
      <li>Secure video consultation and messaging platforms</li>
      <li>Remote patient monitoring and wearable integration</li>
      <li>Appointment scheduling and virtual follow-ups</li>
      <li>Real-time data sharing between patients and providers</li>
      <li>Integration with EHR and hospital systems</li>
      <li>HIPAA-compliant communication channels</li>
    </ul>

    <p>
      Telemedicine solutions empower healthcare organizations to expand
      service reach, improve patient satisfaction, and deliver timely care
      while maintaining security and compliance.
    </p>
  </>
)}
{activeTab === "analytics" && (
  <>
    <h2>Healthcare Data Analytics</h2>

    <p>
      Data-driven insights play a critical role in improving healthcare
      quality and operational efficiency. ABSN IT Solutions provides advanced
      healthcare analytics solutions that transform raw medical data into
      actionable intelligence.
    </p>

    <p>
      Our analytics platforms help healthcare providers track performance,
      optimize resources, and make informed clinical and operational decisions.
    </p>

    <ul>
      <li>Clinical performance and patient outcome dashboards</li>
      <li>Predictive analytics for early disease detection</li>
      <li>Operational efficiency and cost optimization insights</li>
      <li>Population health management analytics</li>
      <li>Real-time reporting and visualization tools</li>
      <li>AI-driven insights for better decision-making</li>
    </ul>

    <p>
      With healthcare analytics, organizations can improve care delivery,
      reduce costs, and proactively respond to emerging health trends.
    </p>
  </>
)}
{activeTab === "compliance" && (
  <>
    <h2>Compliance, Security & Privacy</h2>

    <p>
      Protecting sensitive healthcare data is a top priority. ABSN IT
      Solutions implements robust security and compliance frameworks that
      safeguard patient information and ensure adherence to regulatory
      standards.
    </p>

    <p>
      Our healthcare security solutions minimize risks, prevent data breaches,
      and ensure trust between healthcare providers and patients.
    </p>

    <ul>
      <li>HIPAA, HL7, and healthcare compliance support</li>
      <li>End-to-end data encryption and secure access controls</li>
      <li>Identity and role-based authentication mechanisms</li>
      <li>Risk assessment and vulnerability monitoring</li>
      <li>Secure cloud infrastructure for healthcare platforms</li>
      <li>Audit trails and compliance reporting</li>
    </ul>

    <p>
      By prioritizing security and compliance, healthcare organizations can
      protect patient privacy, maintain regulatory confidence, and ensure
      long-term system reliability.
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

export default Healthcare;
