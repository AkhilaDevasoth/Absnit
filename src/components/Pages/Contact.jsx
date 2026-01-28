import { useState, useEffect } from "react";

/* 🔹 Animated Letters Component */
const AnimatedLetters = ({ text, delay = 0 }) => {
  return (
    <span className="animated-text" aria-label={text}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="char"
          style={{ animationDelay: `${delay + i * 0.05}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
  });

  /* 🔹 Reveal animation */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("active", entry.isIntersecting);
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".reveal").forEach((el) =>
      observer.observe(el)
    );

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      topic: "",
      message: "",
    });
  };

  return (
    <div className="page">

      {/* HERO */}
      <section className="page-hero reveal">
        <div className="container">
          <h1 className="page-title" style={{ color: "#254A8A" }}>
            Contact Us
          </h1>
          <p className="page-subtitle">Get in touch with us today</p>
        </div>
      </section>

      {/* CONTACT HERO BANNER */}
      <section
        className="contact-hero-banner reveal"
        style={{
          backgroundImage:
            'url("https://t3.ftcdn.net/jpg/05/30/96/04/360_F_530960431_c8fPd3HansYvrSJ4fJxZqp9OhjQmYoll.jpg")',
        }}
      >
        <div className="contact-hero-overlay">
          <div className="contact-hero-text reveal">
            <h1>
              <AnimatedLetters text="GET IN TOUCH" />
            </h1>

            <p>
              <AnimatedLetters
                text="We’d love to hear from you. Let’s build something great together."
                delay={0.4}
              />
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="contact-content">
        <div className="contact-wrapper">

          {/* LEFT IMAGE */}
          <div className="contact-info reveal">
            <img
              src="https://st3.depositphotos.com/1001877/32125/i/450/depositphotos_321258156-stock-photo-contact-us-website-page-on.jpg"
              alt="Contact us"
              className="contact-info-image"
            />
          </div>

          {/* RIGHT FORM */}
          <form className="contact-form reveal" onSubmit={handleSubmit}>

            {/* ROW 1 */}
            <div className="form-row">
              <div className="form-group reveal">
                <label>Full name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group reveal">
                <label>Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* ROW 2 */}
            <div className="form-row">
              <div className="form-group reveal">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group reveal">
                <label>Mobile number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* TOPIC */}
            <div className="form-group reveal">
              <label>Topic</label>
              <select
                name="topic"
                value={formData.topic}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="software">Software Development</option>
                <option value="consulting">IT Consulting</option>
                <option value="cloud">Cloud Solutions</option>
                <option value="security">Cybersecurity</option>
              </select>
            </div>

            {/* MESSAGE */}
            <div className="form-group reveal">
              <label>How can we help?</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            {/* FILE UPLOAD */}
            <div className="form-group reveal">
              <label>Supporting file (PDF, DOCX, ZIP, PPTX)</label>
              <input type="file" />
            </div>

            <button type="submit" className="btn btn-primary reveal">
              Send Message
            </button>
          </form>

        </div>
      </section>

      {/* LOCATION */}
      <section className="contact-location-section reveal">
        <div className="container">
          <h2 className="location-heading reveal">
            Headquarters Location
          </h2>

          <div className="location-card reveal">
            <div className="location-left">
              <h3>Warangal, Telangana</h3>
              <p>
                <strong>Address:</strong><br />
                H No 1-111, Madannapet,<br />
                Narsampet Mandal,<br />
                Warangal, Telangana – 506132
              </p>
              <p><strong>Phone:</strong> +91 9948550646</p>
              <p><strong>Email:</strong> info@absnit.com</p>
            </div>

            <div className="location-right reveal">
              <iframe
                title="Warangal Location"
                src="https://www.google.com/maps?q=Madannapet,Narsampet,Warangal,Telangana&output=embed"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
