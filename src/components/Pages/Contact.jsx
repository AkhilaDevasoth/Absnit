import { useState, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="page">

      {/* FIX REVEAL */}
      <style>
        {`
          .reveal {
            opacity: 0;
            transform: translateY(40px);
            transition: all 0.8s ease;
          }
          .reveal.active {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
        `}
      </style>

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
            'url("https://www.shutterstock.com/image-vector/contact-us-background-eps-vector-600nw-2491405611.jpg")',
        }}
      >
        <div className="contact-hero-overlay">
          <div className="contact-hero-text reveal">
            <h1>GET IN TOUCH</h1>
            <p>
              We’d love to hear from you. Let’s build something great together.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-wrapper">

            {/* CONTACT INFO */}
            <div className="contact-info reveal">
              <strong>Let's Talk</strong>
              <p>
                Have a project in mind? We'd love to hear from you.
                Send us a message and we'll respond as soon as possible.
              </p>

              <div className="contact-details">
                <div className="contact-item reveal">
                  <strong>Email:</strong>
                  <p>
                    <a href="mailto:info@absnit.com">info@absnit.com</a>
                  </p>
                </div>

                <div className="contact-item reveal">
                  <strong>Phone:</strong>
                  <p>
                    <a href="tel:+919948550646">+91 9948550646</a>
                  </p>
                </div>

                <div className="contact-item reveal">
                  <strong>Address:</strong>
                  <p>
                    1-111 Madhannapet, Narsampet,<br />
                    Warangal, Telangana 506132
                  </p>
                </div>
              </div>
            </div>

            {/* CONTACT FORM */}
            <form className="contact-form reveal" onSubmit={handleSubmit}>
              <div className="form-group reveal">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group reveal">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group reveal">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary reveal">
                Send Message
              </button>
            </form>

          </div>
        </div>
      </section>

      {/* OUR LOCATION */}
      <section className="contact-location-section reveal">
        <div className="container">
          <h2 className="location-heading reveal">Headquarters Location</h2>

          <div className="location-card reveal">
            <div className="location-left">
              <h3>Warangal, Telangana</h3>
              <p>
                <strong>Address:</strong><br />
                H No 1-111, Madannapet,<br />
                Narsampet Mandal,<br />
                Warangal, Telangana – 506132
              </p>
              <br />
              <p><strong>Phone:</strong> +91 9948550646</p>
              <p><strong>Email:</strong> info@absnit.com</p>
            </div>

            <div className="location-right reveal">
              <iframe
                title="Warangal Location"
                src="https://www.google.com/maps?q=Madannapet,Narsampet,Warangal,Telangana&output=embed"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
