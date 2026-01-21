import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const heroImages = [
  "https://absnit.com/wp-content/uploads/2025/05/team-img.png",
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlcoKiE2vZKTPGIMcIohqt1YgWTCQ5MniW9Q&s",
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU-FNVKOJP_E7QQLfjbCUC2kQ7cmdXx6PPpw&s",
];


const Home = () => {
const [currentImage, setCurrentImage] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  }, 4000);

  return () => clearInterval(interval);
  }, []);

  return (
    <div className="page">
      <section className="hero hero-slideshow">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`hero-slide ${
              index === currentImage ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" aria-hidden="true"></span>
            <span className="hero-badge-text">Introducing ABSN IT Solutions</span>
          </div>

          <h1 className="hero-title">
          Empowering Your Business with
          Innovative IT Solution
          </h1>
          <p className="hero-subtitle">
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
            <div className="feature-card">
              <div className="feature-icon">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShkSNuCUiEa5IPCE_5oCOl-BvXLLbEHrMXpA&s"
                  alt="Expert Team"
                />
              </div>
              <h3 style={{ fontSize: "25px", color: "#1e40af" }}>Expert Team</h3>
              <p>Certified professionals with extensive industry experience.</p>
            </div>

            <div className="feature-card">
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

            <div className="feature-card">
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

            <div className="feature-card">
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
            <Link to="/services" className="home-service-card">
              <img
                src="https://cdn-icons-png.freepik.com/512/11557/11557320.png"
                alt="Custom Software"
              />
              <h3>Custom Software</h3>
            </Link>

            <Link to="/services" className="home-service-card">
              <img
                src="https://cdn-icons-png.freepik.com/512/888/888879.png"
                alt="Mobile Apps"
              />
              <h3>Mobile Applications</h3>
            </Link>

            <Link to="/services" className="home-service-card">
              <img
                src="https://cdn-icons-png.freepik.com/512/4144/4144892.png"
                alt="Cloud Solutions"
              />
              <h3>Cloud Solutions</h3>
            </Link>

            <Link to="/services" className="home-service-card">
              <img
                src="https://cdn-icons-png.freepik.com/512/4320/4320337.png"
                alt="IT Consulting"
              />
              <h3>IT Consulting</h3>
            </Link>

            <Link to="/services" className="home-service-card">
              <img
                src="https://cdn-icons-png.freepik.com/512/3064/3064197.png"
                alt="Cybersecurity"
              />
              <h3>Cybersecurity</h3>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
