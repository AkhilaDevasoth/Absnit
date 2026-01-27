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
          // 🔥 enables reveal when scrolling UP again
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
    <div className="page home-page">

      <section className="hero hero-slideshow">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
         
        >
          <source
  src="/hero-video.mp4"
  type="video/mp4"
/>

        </video>

        <div className="hero-overlay "></div>

        <div className="hero-content hero-content-left">

          <div className="hero-badge reveal">
            <span className="hero-badge-dot" aria-hidden="true"></span>
            <span className="hero-badge-text">Introducing ABSN IT Solutions</span>
          </div>
          <h1 className="reveal" style={{ color: "#4d68e2", fontSize: "45px", fontWeight: "bold", zIndex: 9999 }}>
            Empowering Your Business with Innovative IT Solution
          </h1>

          <p className="reveal" style={{ color: "#8796da", fontSize: "18px", zIndex: 9999 }}>
            Delivering tailored technology services to drive growth and efficiency
          </p>

<br></br>
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvSCeRy0fQOfBrkEgwAVQx8nhJ4HEtkgvgSg&s"
                alt="Mobile Apps"
              />
              <h3>Mobile Applications</h3>
            </Link>

            <Link to="/services" className="home-service-card reveal">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoQ9H8Pn3VZDh5E6viugeKvf9t_-H-3ghfwg&s"
                alt="Cloud Solutions"
              />
              <h3>Cloud Solutions</h3>
            </Link>

            <Link to="/services" className="home-service-card reveal">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ47ChWWRqTJ3tlPVEGG8WiKDCoOThiAUBT_w&s"
                alt="IT Consulting"
              />
              <h3>IT Consulting</h3>
            </Link>

            <Link to="/services" className="home-service-card reveal">
              <img
                src="https://static.vecteezy.com/system/resources/previews/044/189/079/non_2x/cyber-security-line-blue-two-color-icon-vector.jpg"
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
      <section className="services-section">
   <div className="container">
   <h2 className="services-overview-title">
  Services Overview
</h2>

<p className="services-overview-subtitle">
  Industry-focused technology solutions and consulting services tailored to your business needs.
</p>



{/* ✅ GRID WRAPPER */}
<div className="home-services-grid">

  <Link to="/services" className="service-card reveal">
    <img
      src="https://cdn-icons-png.freepik.com/512/11557/11557320.png"
      alt="Custom Software Development"
    />
    <h3>Custom Software Development</h3>
    <p>
      We build custom software solutions that streamline operations and enhance productivity.
    </p>
  </Link>

  <Link to="/services" className="service-card reveal">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvSCeRy0fQOfBrkEgwAVQx8nhJ4HEtkgvgSg&s"
      alt="Mobile App Development"
    />
    <h3>Mobile App Development</h3>
    <p>
      High-performance mobile applications with intuitive UX for Android and iOS.
    </p>
  </Link>

  <Link to="/services" className="service-card reveal">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoQ9H8Pn3VZDh5E6viugeKvf9t_-H-3ghfwg&s"
      alt="Cloud Solutions"
    />
    <h3>Cloud Solutions</h3>
    <p>
      Scalable cloud architecture, migrations, and DevOps services.
    </p>
  </Link>

  <Link to="/services" className="service-card reveal">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ47ChWWRqTJ3tlPVEGG8WiKDCoOThiAUBT_w&s"
      alt="IT Consulting"
    />
    <h3>IT Consulting</h3>
    <p>
      Strategic IT advisory services to align technology with business goals.
    </p>
  </Link>

  <Link to="/services" className="service-card reveal">
    <img
      src="https://static.vecteezy.com/system/resources/previews/044/189/079/non_2x/cyber-security-line-blue-two-color-icon-vector.jpg"
      alt="Cybersecurity Services"
    />
    <h3>Cybersecurity Services</h3>
    <p>
      Security-first engineering and audits to protect systems and data.
    </p>
  </Link>

  <Link to="/services" className="service-card reveal">
    <img
      src="https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
      alt="Healthcare Solutions"
    />
    <h3>Healthcare Solutions</h3>
    <p>
      Secure digital healthcare solutions including EHR and telemedicine.
    </p>
  </Link>

</div>
<section className="home-why reveal">
  <div className="container">
<section className="home-why-section">
  <div className="container">

    {/* Section Heading */}
    <h2 className="home-why-heading">
      Why Choose ABSN IT Solutions
    </h2>

    <div className="home-why-grid">

      {/* LEFT CONTENT */}
      <div className="home-why-left">
        <h3 className="home-why-title">Expertise</h3>

        <p className="home-why-text">
          Proven track record with cutting-edge technology solutions and
          industry best practices that drive digital transformation.
        </p>

        <ul className="home-why-list">
          <li>Certified professionals in AI, Cloud Computing, and Data Science</li>
          <li>Deep industry knowledge across Finance, Healthcare, and Technology</li>
          <li>Proven methodologies for successful project delivery</li>
        </ul>

        {/* STATS */}
        <div className="home-why-stats">
          <div>
            <h4>10+</h4>
            <span>Years</span>
          </div>
          <div>
            <h4>100+</h4>
            <span>Experts</span>
          </div>
          <div>
            <h4>500+</h4>
            <span>Projects</span>
          </div>
        </div>
      </div>
{/* RIGHT DECORATIVE AREA */}
<div className="home-why-visual reveal">
  <img
    src="https://t3.ftcdn.net/jpg/09/45/79/70/360_F_945797040_6QtYog1DkHRYvJy3BKBwOG6giWYkCq0T.jpg"
    alt="Decorative technology illustration"
    className="home-why-image"
  />
</div>

   

    </div>
  </div>
</section>
  </div>
</section>
   </div>
</section>

    </div>
  );
};

export default Home;