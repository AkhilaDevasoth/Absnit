import { useEffect } from "react";

const About = () => {
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
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page">
      {/* HERO */}
      <section className="page-hero about-hero ">
        <div className="container ">
          <h1
            className="page-title reveal"
            style={{ textAlign: "center", color: "#1e40af" }}
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

      {/* CONTENT AS CARDS */}
      <section className="about-content">
        <div className="container">
          <div className="services-grid">

            {/* OUR STORY */}
            <div className="service-card reveal">
              <h2 className="about-card-title">
                Our Story of Innovation and Digital Growth
              </h2>
              <p>
                ABSNIT Solutions was founded with a simple belief: technology should solve real problems
                and create real value. What began as a small idea driven by innovation and curiosity has
                grown into a solutions-focused team committed to delivering reliable, scalable, and
                modern digital services. At ABSNIT Solutions, we combine technical expertise with a
                deep understanding of client needs to build software, IT, and digital solutions that
                empower businesses to grow. Our journey is shaped by continuous learning, adaptability,
                and a passion for excellence. Every project we take on reflects our commitment to quality,
                transparency, and long-term partnerships with our clients.
              </p>
            </div>

            {/* OUR VALUES */}
            <div className="service-card reveal">
              <h2 className="about-card-title">
                Our Core Values Driving Business Excellence
              </h2>

              <p>
                ➤ <strong>Integrity : </strong> Upholding the highest standards of honesty and transparency
              </p>

              <p>
                ➤ <strong>Innovation : </strong> Continuously embracing new ideas and technologies
              </p>

              <p>
                ➤ <strong>Excellence : </strong> Striving for superior quality in every project
              </p>

              <p>
                ➤ <strong>Collaboration : </strong> Fostering strong partnerships with clients and stakeholders
              </p>
            </div>

            {/* OUR MISSION */}
            <div className="service-card reveal">
              <h2 className="about-card-title">
                Our Mission to Deliver Scalable IT Solutions
              </h2>
              <p>
                To deliver innovative and reliable IT solutions that empower businesses to
                achieve their full potential.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
