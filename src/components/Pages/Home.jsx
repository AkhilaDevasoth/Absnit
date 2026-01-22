import { useEffect, useState } from "react";
import { Link } from "react-router-dom";






const Home = () => {

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            // 👇 REMOVE when out of view (important)
            entry.target.classList.remove("active");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    document.querySelectorAll(".reveal").forEach((el) =>
      observer.observe(el)
    );

    return () => observer.disconnect();
  }, []);




  return (
    <div className="page home-page">

      <section className="hero hero-slideshow">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="https://absnit.com/wp-content/uploads/2025/05/team-img.png"
        >
          <source
            src="https://cdn.pixabay.com/video/2023/10/12/184734-873923034_large.mp4"
            type="video/mp4"
          />
        </video>

        <div className="hero-overlay"></div>

        <div className="hero-content hero-content-left">

          <div className="hero-badge">
            <span className="hero-badge-dot" aria-hidden="true"></span>
            <span className="hero-badge-text">Introducing ABSN IT Solutions</span>
          </div>

          <h1 className="hero-title reveal gradient-text">
            Empowering Your Business with
            Innovative IT Solution
          </h1>
          <p className="hero-subtitle reveal">
            Delivering tailored technology services to drive growth and efficiency
          </p>
          <div className="hero-buttons">
            <a href="/services" className="btn btn-primary">Our Services</a>
            <a href="/contact" className="btn btn-secondary">Get Started</a>
          </div>
        </div>
      </section>

      {/* WHY ABSN IT */}
      <section className="features">
        <div className="container">
          <h2
            className="section-title"
            style={{ textAlign: "center", color: "#1e40af" }}
          >
            Why ABSN IT Solutions
          </h2>

          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.2",
              textAlign: "center",
            }}
          >
            We don’t just code—we collaborate. From discovery workshops to post-launch
            support, we’re your strategic partners in every stage of the software lifecycle
          </p>

          <br /><br />

          <div className="features-grid">
            <div className="feature-card reveal">
              <div className="feature-icon">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShkSNuCUiEa5IPCE_5oCOl-BvXLLbEHrMXpA&s"
                  alt="Expert Team"
                />
              </div>
              <h3 style={{ fontSize: "25px", color: "#1e40af" }}>Expert Team</h3>
              <p>Certified professionals with extensive industry experience.</p>
            </div>

            <div className="feature-card reveal">
              <div className="feature-icon">
                <img
                  src="https://www.shutterstock.com/image-vector/vector-illustration-man-arrows-inside-600nw-2139973695.jpg"
                  alt="Client-Centric Approach"
                />
              </div>
              <h3 style={{ fontSize: "25px", color: "#1e40af" }}>
                Client-Centric Approach
              </h3>
              <p>Solutions tailored to meet unique client requirements.</p>
            </div>

            <div className="feature-card reveal">
              <div className="feature-icon">
                <img
                  src="https://img.freepik.com/free-vector/light-bulb-gears-cogs_1284-42609.jpg"
                  alt="Innovative Solutions"
                />
              </div>
              <h3 style={{ fontSize: "25px", color: "#1e40af" }}>
                Innovative Solutions
              </h3>
              <p>Leveraging the latest technologies to drive innovation.</p>
            </div>

            <div className="feature-card reveal">
              <div className="feature-icon">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/10041/10041849.png"
                  alt="Reliable Support"
                />
              </div>
              <h3 style={{ fontSize: "25px", color: "#1e40af" }}>
                Reliable Support
              </h3>
              <p>Dedicated support team ensuring seamless operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 SERVICES (IMAGE + HEADING ONLY) */}
      <section className="home-services">
        <div className="container">
          <h2
            className="section-title"
            style={{ textAlign: "center", color: "#1e40af" }}
          >
            Our Services
          </h2>

          <div className="home-services-grid">
            <Link to="/services" className="home-service-card reveal">
              <img
                src="https://cdn-icons-png.freepik.com/512/11557/11557320.png"
                alt="Custom Software"
              />
              <h3>Custom Software</h3>
            </Link>

            <Link to="/services" className="home-service-card reveal">
              <img
                src="https://cdn-icons-png.freepik.com/512/888/888879.png"
                alt="Mobile Apps"
              />
              <h3>Mobile Applications</h3>
            </Link>

            <Link to="/services" className="home-service-card reveal">
              <img
                src="https://cdn-icons-png.freepik.com/512/4144/4144892.png"
                alt="Cloud Solutions"
              />
              <h3>Cloud Solutions</h3>
            </Link>

            <Link to="/services" className="home-service-card reveal">
              <img
                src="https://cdn-icons-png.freepik.com/512/4320/4320337.png"
                alt="IT Consulting"
              />
              <h3>IT Consulting</h3>
            </Link>

            <Link to="/services" className="home-service-card reveal">
              <img
                src="https://cdn-icons-png.freepik.com/512/3064/3064197.png"
                alt="Cybersecurity"
              />
              <h3>Cybersecurity</h3>
            </Link>
          </div>
        </div>
      </section>
      <section className="about-modern">
        <div className="about-container">

          {/* LEFT CONTENT */}
          <div className="about-left reveal">
            <span className="about-badge">About Company</span>

            <p className="about-text">
              ABSN IT Solutions Pvt Ltd is a leading IT consulting and technology
              services company focused on empowering businesses through innovative
              digital solutions. We deliver fast, scalable, and reliable systems
              that help organizations achieve digital excellence without wasting
              time or budget.
            </p>

            <div className="about-stats">
              <div>
                <h3>150+</h3>
                <p>Enterprise Clients</p>
              </div>
              <div>
                <h3>130+</h3>
                <p>IT Projects Delivered</p>
              </div>
              <div>
                <h3>4+</h3>
                <p>Cloud Platforms</p>
              </div>
            </div>
          </div>

          {/* RIGHT FLOATING TAGS */}
          <div className="about-right reveal">
            <span className="pill green">Programming Languages</span>
            <span className="pill orange">Frameworks</span>
            <span className="pill orange">Databases</span>
            <span className="pill green">Cloud Platforms</span>
            <span className="pill red">DevOps Tools</span>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;
