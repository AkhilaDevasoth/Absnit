import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

/* ================= FAQ DATA ================= */
const faqData = [
  {
    question: "What industries do you serve?",
    answer:
      "We provide technology solutions across Financial Services, Healthcare, Media & Entertainment, Technology Enablement, Telecommunications, Energy, Consumer & Industrial Products, and Transportation & Travel."
  },
  {
    question: "Do you offer solutions for financial institutions?",
    answer:
      "Yes, we deliver secure and scalable solutions for financial institutions including digital transformation, cloud, data analytics, and cybersecurity."
  },
  {
    question: "Can you help with healthcare technology solutions?",
    answer:
      "Absolutely. We support healthcare organizations with health IT platforms, interoperability, compliance, and digital transformation."
  },
  {
    question: "Do you work with telecommunications companies?",
    answer:
      "Yes, we work with telecom providers on network optimization, cloud platforms, and analytics-driven solutions."
  },
  {
    question: "What technology enablement services do you provide?",
    answer:
      "Our services include cloud computing, AI & automation, DevOps, cybersecurity, data engineering, and enterprise application development."
  },
  {
    question: "Do you offer transportation and travel technology solutions?",
    answer:
      "Yes, we deliver digital platforms, analytics, and operational optimization solutions for travel and transportation companies."
  }
];

const About = () => {
  const navigate = useNavigate();

  const [clickedCard, setClickedCard] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const handleCardClick = (index) => {
    setClickedCard(index);
    setTimeout(() => setClickedCard(null), 300);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  /* ============ SCROLL REVEAL ============ */
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

  return (
    <div className="page">
      {/* ================= HERO ================= */}
      <section className="page-hero about-hero">
        <div className="container">
          <h1
            className="page-title reveal"
            style={{ textAlign: "center", color: "#254A8A" }}
          >
            About ABSN IT
          </h1>

          <p
            className="page-subtitle reveal"
            style={{
              fontSize: "20px",
              lineHeight: "1.2",
              textAlign: "center",
            }}
          >
            Fueling innovation for future-ready businesses, we help organizations harness
            <br />
            technology to stay ahead in a fast-changing digital world.
          </p>
        </div>
      </section>

      {/* ================= ABOUT CARDS ================= */}
      <section className="about-content">
        <div className="container">
          <div className="services-grid">

            {/* OUR STORY */}
            <motion.div
              className="service-card reveal"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              animate={
                clickedCard === 0
                  ? { scale: 1.05, y: -8 }
                  : { scale: 1, y: 0 }
              }
              onClick={() => handleCardClick(0)}
            >
              <h2 className="about-card-title">
                Our Story of Innovation and Digital Growth
              </h2>
              <p>
                ABSNIT Solutions was founded with a simple belief: technology should solve real problems
                and create real value. What began as a small idea driven by innovation and curiosity has
                grown into a solutions-focused team delivering reliable, scalable, and modern digital services.
              </p>
            </motion.div>

            {/* OUR VALUES */}
            <motion.div
              className="service-card reveal"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              animate={clickedCard === 1 ? { scale: 1.05 } : { scale: 1 }}
              onClick={() => handleCardClick(1)}
            >
              <h2 className="about-card-title">
                Our Core Values Driving Business Excellence
              </h2>
              <p>➤ <strong>Integrity:</strong> Honesty and transparency</p>
              <p>➤ <strong>Innovation:</strong> Embracing new ideas</p>
              <p>➤ <strong>Excellence:</strong> Quality in every project</p>
              <p>➤ <strong>Collaboration:</strong> Strong partnerships</p>
            </motion.div>

            {/* OUR MISSION */}
            <motion.div
              className="service-card reveal"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              animate={clickedCard === 2 ? { scale: 1.05 } : { scale: 1 }}
              onClick={() => handleCardClick(2)}
            >
              <h2 className="about-card-title">
                Our Mission to Deliver Scalable IT Solutions
              </h2>
              <p>
                To deliver innovative and reliable IT solutions that empower businesses to
                achieve their full potential.
              </p>
            </motion.div>

            {/* OUR MISSION TO YOU */}
            <motion.div
              className="service-card reveal"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              animate={clickedCard === 3 ? { scale: 1.05 } : { scale: 1 }}
              onClick={() => handleCardClick(3)}
            >
              <h2 className="about-card-title">Our Mission to You</h2>
              <p>
                We’re committed to being your trusted technology partner, helping you
                achieve business goals through innovative digital solutions.
              </p>
              <p>➤ Tailored solutions for your challenges</p>
              <p>➤ Expert guidance throughout transformation</p>
              <p>➤ Scalable technologies that grow with you</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="faq-section">
        <div className="container">
          <div className="faq-header">
            <h2>FAQ's</h2>
            <div className="faq-header-right">
              <p>
                We're here to help you and solve objections. Find answers to the most
                common questions below.
              </p>
              <button
  className="faq-contact-btn"
  onClick={() => navigate("/contact")}
>
  Contact Now
</button>

            </div>
          </div>

          <div className="faq-grid">
            {faqData.map((item, index) => (
              <div
  key={index}
  className={`faq-card reveal ${openFaq === index ? "active" : ""}`}
  onClick={() => toggleFaq(index)}
>

                <div className="faq-question">
                  <span>{item.question}</span>
                  <span className="faq-icon">
                    {openFaq === index ? "×" : "+"}
                  </span>
                </div>

                {openFaq === index && (
                  <div className="faq-answer">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
