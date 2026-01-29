import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const [hoverTitle, setHoverTitle] = useState(null);
  const [activeCard, setActiveCard] = useState(null); // ✅ ADD

  /* 🔹 Reveal on scroll */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("active", entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".reveal").forEach((el) =>
      observer.observe(el)
    );

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: "custom-software-development",
      title: "Custom Software Development",
      description:
        "We specialize in developing custom software solutions that streamline operations and enhance productivity. Our team works closely with clients to understand business needs and deliver scalable, secure, and future-ready applications.",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/044/110/237/small/software-development-line-blue-two-color-icon-vector.jpg",
      sideImage:
        "https://cyberspark.uk/wp-content/uploads/2024/02/software-developer-6521720_1280.jpg",
      bgImage:
        "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg",
      route: "/services/custom-software-development",
    },
    {
      id: "mobile-app-development",
      title: "Mobile App Development",
      description:
        "Building high-performance mobile apps with great UX for Android and iOS.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXq9xJQcrbVbVEiaNTIDTRWoI75iOjB2js4A&s",
      sideImage:
        "https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169864.jpg",
      bgImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_2uBM038BvdkRc9wumCPfA5hed6uqpSchnQ&s",
      route: "/services/mobile-app-development",
    },
    {
      id: "cloud-solutions",
      title: "Cloud Solutions",
      description:
        "Scalable cloud architecture, migrations, and DevOps for reliable delivery.",
      image:
        "https://www.shutterstock.com/image-vector/cloud-computing-blue-color-icon-260nw-2641076961.jpg",
      sideImage:
        "https://www.lmtsolutions.ca/wp-content/uploads/2025/01/cloud.jpg",
      bgImage:
        "https://media.istockphoto.com/id/1484912807/photo/cloud-computing-concept-digital-cloud-solutions-on-pcb-futuristic-background.jpg?s=612x612&w=0&k=20&c=gN2siKMuE9cBHJxnCSeI2GOyUsqlmPPFaRcidkEF35A=",
      route: "/services/cloud-solutions",
    },
    {
      id: "it-consulting",
      title: "IT Consulting",
      description:
        "IT Consulting at ABSN IT Solutions offers professional advisory services that help organizations analyze current systems, improve efficiency, implement the right technologies, and align IT with business growth.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE9mB68HiXQ2A4X81whe_oGIWjmagVZRrqxw&s",
      sideImage:
        "https://www.shutterstock.com/image-photo/consulting-businessman-using-digital-screen-600nw-2446194971.jpg",
      bgImage:
        "https://img.freepik.com/premium-photo/it-consulting-services-business-technology-internet-concept_771745-548.jpg",
      route: "/services/it-consulting",
    },
    {
      id: "cybersecurity-services",
      title: "Cybersecurity Services",
      description:
        "Security-first engineering, audits, and best practices to protect your systems.",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/062/013/260/small_2x/minimalist-logo-design-for-cybersecurity-services-company-highlighting-security-themes-through-simple-shapes-and-color-palette-free-vector.jpg",
      sideImage:
        "https://img.freepik.com/free-photo/cyber-security-concept_23-2148532223.jpg",
      bgImage:
        "https://www.shutterstock.com/image-vector/girl-hacker-hoodie-using-laptop-600nw-2434664869.jpg",
      route: "/services/cybersecurity-services",
    },
    {
      id: "healthcare-solutions",
      title: "Healthcare Solutions",
      description:
        "Secure and scalable digital solutions for healthcare including EHR, telemedicine, and analytics.",
      image:
        "https://cdn-icons-png.flaticon.com/512/10620/10620311.png",
      sideImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx_ncMw6rYOgIZ91XReZsGKGdsSDQ2DPfedQ&s",
      bgImage:
        "https://media.licdn.com/dms/image/v2/D4D12AQGT0RmZ-M9zIA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1701865064788?e=2147483647&v=beta&t=M6gMvVaIYIXld14X1dy8FZBtSGb5CGtmBmdiPqhsy1c",
      route: "/industries/healthcare",
    },
  ];

  return (
    <div className="page services-page">
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title" style={{ textAlign: "center", color: "#254A8A" }}>
            Our Services
          </h1>
          <p className="page-subtitle" style={{ textAlign: "center", fontSize: "22px" }}>
            Comprehensive solutions for your digital needs
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-content">
        <div className="container">
          {services.map((item, index) => {
            const isRight = index % 2 !== 0;
            const showBg = hoverTitle === item.title;

            return (
              <div key={item.id} className={`service-row ${isRight ? "right" : "left"}`}>
                
                {/* SIDE IMAGE */}
                <div className="service-side-image reveal">
                  <img src={item.sideImage} alt={item.title} />
                </div>

                {/* CARD */}
                <div
                  className={`service-card service-fixed reveal
                    ${showBg ? "service-card-with-bg" : ""}
                    ${activeCard === item.id ? "card-active" : ""}
                  `}
                  style={
                    showBg
                      ? {
                          backgroundImage: `url(${item.bgImage})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }
                      : undefined
                  }
                  onMouseEnter={() => setHoverTitle(item.title)}
                  onMouseLeave={() => setHoverTitle(null)}
                  onClick={() => {
                    setActiveCard(item.id);
                    setTimeout(() => {
                      navigate(item.route);
                    }, 120);
                  }}
                >
                  <img src={item.image} alt={item.title} className="service-icon-img" />
                  <h3>{item.title}</h3>

                  {/* ✅ GUARANTEED COLOR CHANGE */}
                  <p
                    style={{
                      color:
                        hoverTitle === item.title || activeCard === item.id
                          ? "#ffffff"
                          : "#6b6969",
                      transition: "color 0.5s ease",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Services;
