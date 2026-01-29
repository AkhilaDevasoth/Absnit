import React, { useState, useEffect } from "react";

const Education = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeTab, setActiveTab] = useState("dl");
  const [animateKey, setAnimateKey] = useState(0);

  /* 🔹 Reveal animation (scroll) */
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
            Education Solutions
          </h1>
          <p className="page-subtitle reveal" style={{ fontSize: "22px", textAlign: "center" }}>
            Smart digital solutions transforming modern education
          </p>
        </div>
      </section>
{/* ===============================
    EDUCATION SOLUTIONS – FEATURE SECTION
================================ */}
<section className="services-content">
  <div className="container">
    <div className="feature-image-overlay reveal">

      <img
        src="https://img.freepik.com/premium-vector/linkedin-banner-with-graduation-cap-light-bulb_193066-555.jpg"
        alt="Education Solutions"
      />

      <div className="overlay"></div>

      <div className="overlay-content">
        <h2>Education Solutions</h2>
        <p>
          We build innovative, scalable digital platforms tailored for
          educational institutions, e-learning applications, and knowledge
          communities to improve learning outcomes and engagement.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* MAIN CONTENT */}
      <section className="services-content">
        <div className="container">
          <div className="industry-detail-layout">

            <div className="industry-image-card reveal">
              <img
                src="https://thumbs.dreamstime.com/b/man-hands-showing-light-bulb-e-learning-graduate-certificate-program-concept-internet-education-course-degree-study-knowledge-man-335676422.jpg"
                alt="Education Technology"
              />
            </div>

            <div className="industry-text-content reveal">
              <h2 className="industry-title">Digital Education Technology</h2>

              <p className="industry-description">
                ABSN IT Solutions delivers innovative education technology
                solutions that enhance learning experiences, improve academic
                management, and enable institutions to scale digitally.
              </p>

              <ul className="industry-list">
                <li>Learning Management Systems (LMS)</li>
                <li>Student enrollment & administration platforms</li>
                <li>Virtual classrooms and e-learning solutions</li>
                <li>Online examinations and assessments</li>
                <li>Education data analytics & reporting</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ===============================
          EDUCATION TABS SECTION
      ================================ */}
      <section className="services-content">
        <div className="container">

          {/* TABS */}
          <div className="devops-tabs reveal">

            <button
              className={`industry-box ${activeTab === "dl" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("dl");
                setAnimateKey(k => k + 1);
              }}
            >
              Digital Learning
            </button>

            <button
              className={`industry-box ${activeTab === "sms" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("sms");
                setAnimateKey(k => k + 1);
              }}
            >
              Student Management
            </button>

            <button
              className={`industry-box ${activeTab === "oa" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("oa");
                setAnimateKey(k => k + 1);
              }}
            >
              Online Assessments
            </button>

            <button
              className={`industry-box ${activeTab === "da" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("da");
                setAnimateKey(k => k + 1);
              }}
            >
              Education Analytics
            </button>

          </div>

          {/* CONTENT CARD */}
          <div key={animateKey} className="service-card reveal devops-card">

            {activeTab === "dl" && (
  <>
    <h2>Digital Learning Platforms</h2>

    <p>
      Digital learning platforms form the foundation of modern education.
      ABSN IT Solutions designs and develops powerful, scalable digital
      learning ecosystems that support interactive, personalized, and
      accessible education for students and educators alike.
    </p>

    <p>
      Our platforms enable institutions to deliver high-quality learning
      experiences beyond traditional classrooms, ensuring continuity,
      flexibility, and engagement across devices and locations.
    </p>

    <ul>
      <li>Custom Learning Management Systems (LMS) tailored to institutional needs</li>
      <li>Virtual classrooms with live sessions, recordings, and collaboration tools</li>
      <li>Mobile-first and responsive learning platforms</li>
      <li>Course content management for videos, documents, and interactive modules</li>
      <li>Student engagement tools such as discussions, assignments, and feedback</li>
      <li>Secure authentication and role-based access control</li>
    </ul>

    <p>
      Our digital learning solutions help institutions increase student
      participation, improve knowledge retention, and create inclusive
      learning environments that adapt to evolving educational demands.
    </p>
  </>
)}
{activeTab === "sms" && (
  <>
    <h2>Student Management Systems</h2>

    <p>
      Efficient academic administration is critical for educational success.
      ABSN IT Solutions develops intelligent student management systems that
      centralize student data, automate workflows, and enhance communication
      across institutions.
    </p>

    <p>
      Our systems simplify complex administrative processes while providing
      real-time visibility into student progress, faculty activities, and
      institutional performance.
    </p>

    <ul>
      <li>Student admissions, enrollment, and onboarding management</li>
      <li>Attendance tracking and academic record management</li>
      <li>Course scheduling and faculty assignment systems</li>
      <li>Parent, student, and faculty communication portals</li>
      <li>Secure data storage with role-based access permissions</li>
      <li>Integration with LMS and examination platforms</li>
    </ul>

    <p>
      By implementing our student management solutions, institutions reduce
      administrative overhead, improve data accuracy, and create a seamless
      academic experience for students, parents, and educators.
    </p>
  </>
)}
{activeTab === "oa" && (
  <>
    <h2>Online Assessment Platforms</h2>

    <p>
      Online assessments are essential for evaluating student performance in
      digital learning environments. ABSN IT Solutions builds secure,
      scalable, and reliable online examination platforms that support
      continuous and objective evaluation.
    </p>

    <p>
      Our assessment solutions are designed to handle high user volumes while
      maintaining exam integrity, accuracy, and fairness.
    </p>

    <ul>
      <li>Online exams, quizzes, and assignments</li>
      <li>Automated grading and result generation</li>
      <li>Secure exam environments with proctoring capabilities</li>
      <li>Randomized question banks and time-bound assessments</li>
      <li>Performance tracking and analytics for students and faculty</li>
      <li>Certification and digital report generation</li>
    </ul>

    <p>
      These platforms enable institutions to conduct assessments efficiently,
      reduce manual effort, and gain actionable insights into student learning
      outcomes.
    </p>
  </>
)}
{activeTab === "da" && (
  <>
    <h2>Education Data & Analytics</h2>

    <p>
      Data-driven decision-making is transforming the education sector.
      ABSN IT Solutions delivers advanced education analytics solutions that
      help institutions measure performance, identify trends, and improve
      academic outcomes.
    </p>

    <p>
      Our analytics platforms convert raw educational data into meaningful
      insights that support strategic planning and continuous improvement.
    </p>

    <ul>
      <li>Student performance and progress analytics</li>
      <li>Learning behavior and engagement insights</li>
      <li>Custom dashboards for administrators and faculty</li>
      <li>Predictive analytics for academic success and retention</li>
      <li>Institutional performance and operational reporting</li>
      <li>Compliance and accreditation-ready data reporting</li>
    </ul>

    <p>
      With our education analytics solutions, institutions gain deeper
      visibility into learning effectiveness, optimize resources, and enhance
      overall educational quality.
    </p>
  </>
)}

          </div>
        </div>
      </section>

      {/* BACK TO TOP */}
      {showBackToTop && (
        <button
          className="back-to-top-btn"
          onClick={scrollToTop}
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default Education;
