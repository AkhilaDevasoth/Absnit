import { useEffect, useState, useRef, useMemo } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  /* ================= REVEAL ANIMATION ================= */
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

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  /* ================= STATS COUNT-UP - ABOUT SECTION ================= */
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [platforms, setPlatforms] = useState(0);

  const statsRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          animateCount(150, setClients);
          animateCount(130, setProjects);
          animateCount(4, setPlatforms);
        }
      },
      { threshold: 0.4 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  /* ================= STATS COUNT-UP - WHY SECTION ================= */
  const [years, setYears] = useState(0);
  const [experts, setExperts] = useState(0);
  const [projectsHome, setProjectsHome] = useState(0);

  const homeWhyStatsRef = useRef(null);
  const homeWhyAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !homeWhyAnimated.current) {
          homeWhyAnimated.current = true;

          animateCount(10, setYears);
          animateCount(100, setExperts);
          animateCount(500, setProjectsHome);
        }
      },
      { threshold: 0.4 }
    );

    if (homeWhyStatsRef.current) observer.observe(homeWhyStatsRef.current);
    return () => observer.disconnect();
  }, []);

  const animateCount = (target, setter) => {
    let current = 0;
    const duration = 1200;
    const step = Math.max(1, Math.floor(target / (duration / 16)));

    const update = () => {
      current += step;
      if (current >= target) {
        setter(target);
      } else {
        setter(current);
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  };

  const AnimatedText = ({ text, className, delay = 0 }) => {
    return (
      <span className={className} aria-label={text}>
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="char"
            style={{ animationDelay: `${delay + index * 0.04}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    );
  };

  /* ================= SERVICES LIST (FOR NEXUS SECTION) ================= */
  const services = [
    {
      id: "custom-software",
      title: "Custom Software",
      description:
        "We build custom software solutions that streamline operations and boost productivity.",
      image: "https://cdn-icons-png.freepik.com/512/11557/11557320.png",
      route: "/services/custom-software-development",
    },
    {
      id: "mobile-apps",
      title: "Mobile Applications",
      description:
        "High-performance mobile apps with intuitive UX for Android and iOS platforms.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvSCeRy0fQOfBrkEgwAVQx8nhJ4HEtkgvgSg&s",
      route: "/services/mobile-app-development",
    },
    {
      id: "cloud",
      title: "Cloud Solutions",
      description:
        "Scalable cloud architecture, migrations, DevOps and cloud security services.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoQ9H8Pn3VZDh5E6viugeKvf9t_-H-3ghfwg&s",
      route: "/services/cloud-solutions",
    },
    {
      id: "consulting",
      title: "IT Consulting",
      description:
        "Strategic IT consulting to align technology with business goals and growth.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ47ChWWRqTJ3tlPVEGG8WiKDCoOThiAUBT_w&s",
      route: "/services/it-consulting",
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      description:
        "Security-first engineering, audits, and protection for your systems and data.",
      image:
        "https://static.vecteezy.com/system/resources/previews/044/189/079/non_2x/cyber-security-line-blue-two-color-icon-vector.jpg",
      route: "/services/cybersecurity-services",
    },
  ];

  /* ================= SNOW DOTS (ONLY SERVICES OVERVIEW) ================= */
  const snowDots = useMemo(() => {
    return Array.from({ length: 70 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 2 + Math.random() * 4,
      duration: 6 + Math.random() * 7,
      delay: Math.random() * 7,
      opacity: 0.15 + Math.random() * 0.6,
    }));
  }, []);

  return (
    <div className="page home-page">
      {/* HERO */}
      <section className="hero hero-slideshow">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay"></div>

        <div className="hero-content hero-content-left">
          <div className="hero-badge reveal">
            <span className="hero-badge-dot" aria-hidden="true"></span>
            <span className="hero-badge-text">
              Introducing ABSN IT Solutions
            </span>
          </div>

          <h1
            className="reveal hero-animate"
            style={{
              color: "#4d68e2",
              fontSize: "45px",
              fontWeight: "bold",
              zIndex: 9999,
            }}
          >
            <AnimatedText
              text="Empowering Your Business with Innovative IT Solution"
              delay={0.2}
            />
          </h1>

          <p
            className="reveal hero-animate"
            style={{ color: "#8796da", fontSize: "18px", zIndex: 9999 }}
          >
            <AnimatedText
              text="Delivering tailored technology services to drive growth and efficiency"
              delay={0.4}
            />
          </p>

          <br />

          <div className="hero-buttons">
            <a href="/services" className="btn btn-primary">
              Our Services
            </a>
            <a href="/contact" className="btn btn-secondary">
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* WHY ABSN IT */}
      <section className="features features-bg">
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
            We don’t just code—we collaborate. From discovery workshops to
            post-launch support, we’re your strategic partners in every stage of
            the software lifecycle
          </p>

          <br />
          <br />

          <div className="features-grid">
            <div className="feature-card reveal">
              <div className="feature-icon">
                <img
                  src="https://img.freepik.com/premium-photo/group-people-are-working-computer-lab_1109006-91990.jpg"
                  alt="Expert Team"
                />
              </div>
              <h3 style={{ fontSize: "25px", color: "#1e40af" }}>
                Expert Team
              </h3>
              <p>Certified professionals with extensive industry experience.</p>
            </div>

            <div className="feature-card reveal">
              <div className="feature-icon">
                <img
                  src="https://www.shutterstock.com/image-photo/businessman-holding-virtual-target-customer-600nw-2416653199.jpg"
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
                  src="https://thumbs.dreamstime.com/b/hand-holding-light-bulb-business-digital-marketing-innovation-technology-icons-network-hand-holding-light-bulb-business-138534565.jpg"
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
                  src="https://media.istockphoto.com/id/1364946137/photo/businessman-holding-and-showing-the-best-quality-assurance-with-golden-five-stars-for.jpg?s=612x612&w=0&k=20&c=ewqI36IOI0FE9fQGEjhVrdR_4sAg77ICJJ2gZgZxH-0="
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
{/* ABOUT COMPANY */}
<section className="about-modern">
  <div className="about-shapes" aria-hidden="true">
    <span className="shape circle s1"></span>
    <span className="shape circle s2"></span>
    <span className="shape oval s3"></span>
    <span className="shape oval s4"></span>
    <span className="shape square s5"></span>
    <span className="shape square s6"></span>
    <span className="shape rect s7"></span>
    <span className="shape rect s8"></span>
    <span className="shape triangle s9"></span>
    <span className="shape triangle s10"></span>
  </div>
  {/* background shapes */}
  <div className="about-shape-square"></div>

  <div className="about-container">
    <div className="about-left reveal">
      <span className="about-badge">About Company</span>

      <p className="about-text">
        ABSN IT Solutions Pvt Ltd is a leading IT consulting and technology
        services company focused on empowering businesses through innovative
        digital solutions. We deliver fast, scalable, and reliable systems that
        help organizations achieve digital excellence without wasting time or
        budget.
      </p>

      <div className="about-stats" ref={statsRef}>
        <div>
          <h3>{clients}+</h3>
          <p>Enterprise Clients</p>
        </div>

        <div>
          <h3>{projects}+</h3>
          <p>IT Projects Delivered</p>
        </div>

        <div>
          <h3>{platforms}+</h3>
          <p>Cloud Platforms</p>
        </div>
      </div>
    </div>

    <div className="about-right reveal">
      <span className="pill green">Programming Languages</span>
      <span className="pill orange">Frameworks</span>
      <span className="pill orange">Databases</span>
      <span className="pill green">Cloud Platforms</span>
      <span className="pill red">DevOps Tools</span>
    </div>
  </div>
</section>



      {/* OUR SERVICES – NEXUS STYLE */}
     {/* SERVICES OVERVIEW (BLUE BACKGROUND + SNOW) */}
<section className="services-section">
  <div className="services-snow">
    {snowDots.map((dot) => (
      <span
        key={dot.id}
        style={{
          left: `${dot.left}%`,
          width: `${dot.size}px`,
          height: `${dot.size}px`,
          animationDuration: `${dot.duration}s`,
          animationDelay: `${dot.delay}s`,
          opacity: dot.opacity,
        }}
      />
    ))}
  </div>

  <div className="container">
    <h2 className="services-overview-title">Services Overview</h2>

    <p className="services-overview-subtitle">
      Industry-focused technology solutions and consulting services tailored to
      your business needs.
    </p>

    <div className="home-services-grid">
      <Link to="/services" className="service-card reveal">
        <img
          src="https://cdn-icons-png.freepik.com/512/11557/11557320.png"
          alt="Custom Software Development"
        />
        <h3>Custom Software Development</h3>
        <p>
          We build custom software solutions that streamline operations and
          enhance productivity.
        </p>
      </Link>

      <Link to="/services" className="service-card reveal">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvSCeRy0fQOfBrkEgwAVQx8nhJ4HEtkgvgSg&s"
          alt="Mobile App Development"
        />
        <h3>Mobile App Development</h3>
        <p>
          High-performance mobile applications with intuitive UX for Android and
          iOS.
        </p>
      </Link>

      <Link to="/services" className="service-card reveal">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoQ9H8Pn3VZDh5E6viugeKvf9t_-H-3ghfwg&s"
          alt="Cloud Solutions"
        />
        <h3>Cloud Solutions</h3>
        <p>Scalable cloud architecture, migrations, and DevOps services.</p>
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
  </div>
</section>

{/* ✅ WHY CHOOSE - FULL WIDTH SEPARATE SECTION */}
<section className="home-why-section-bg reveal">
  <div className="container">
    <h2 className="home-why-heading">Why Choose ABSN IT Solutions</h2>

    <div className="home-why-grid">
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

        <div className="home-why-stats" ref={homeWhyStatsRef}>
          <div>
            <h4>{years}+</h4>
            <span>Years</span>
          </div>
          <div>
            <h4>{experts}+</h4>
            <span>Experts</span>
          </div>
          <div>
            <h4>{projectsHome}+</h4>
            <span>Projects</span>
          </div>
        </div>
      </div>

      <div className="home-why-visual reveal">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQBxB-EcJr5JYy7BvBSwGNAvQi6-W4XnXnrQ&s"
          alt="Decorative technology illustration"
          className="home-why-image"
        />
      </div>
    </div>
 
        
        </div>
      </section>
    </div>
  );
};

export default Home;
