import { i, image } from "framer-motion/client";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      id: "custom-software-development",
      title: "Custom Software Development",
      description:
        "We specialize in developing custom software solutions that streamline operations and enhance productivity. Our team works closely with clients to understand their needs and deliver software that aligns with their business objectives.",
      image:"https://static.vecteezy.com/system/resources/thumbnails/044/110/237/small/software-development-line-blue-two-color-icon-vector.jpg",
        bgImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7BHYQlLV4N5saMAvHOsdfepqotH4dU_HeUQ&s",
      route: "/services/custom-software-development",
    },
    {
      id: "mobile-app-development",
      title: "Mobile App Development",
      description:
        "Building high-performance mobile apps with great UX for Android and iOS.",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXq9xJQcrbVbVEiaNTIDTRWoI75iOjB2js4A&s",
        bgImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_2uBM038BvdkRc9wumCPfA5hed6uqpSchnQ&s",
      route: "/services/mobile-app-development",
    },
    {
      id: "cloud-solutions",
      title: "Cloud Solutions",
      description:
        "Scalable cloud architecture, migrations, and DevOps for reliable delivery.",
      image:"https://www.shutterstock.com/image-vector/cloud-computing-blue-color-icon-260nw-2641076961.jpg",
        bgImage: "https://media.istockphoto.com/id/2219130406/photo/cloud-computing-symbol-connects-to-server-datacenter-network.jpg?s=612x612&w=0&k=20&c=XBbhS7J1B8hQxujIuL9vHREn_h3VzFLEXhEyzRX2T_U=",
      route: "/services/cloud-solutions",
    },
    {
      id: "it-consulting",
      title: "IT Consulting",
      description: `IT Consulting at ABSN IT Solutions offers professional advisory services that help organizations:

Analyze their current technology setup
Identify opportunities to improve efficiency and performance
Select and implement the right technologies
Align IT decisions with business goals and growth strategies`,
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE9mB68HiXQ2A4X81whe_oGIWjmagVZRrqxw&s",
      bgImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfBjAvm8tyw9_Xg1JntAygJYYxiX_7kqBfCg&s",
      route: "/services/it-consulting",
    },
    {
      id: "cybersecurity-services",
      title: "Cybersecurity Services",
      description:
        "Security-first engineering, audits, and best practices to protect your systems.",
        image:"https://static.vecteezy.com/system/resources/thumbnails/062/013/260/small_2x/minimalist-logo-design-for-cybersecurity-services-company-highlighting-security-themes-through-simple-shapes-and-color-palette-free-vector.jpg",
      bgImage: "https://media.istockphoto.com/id/1402450534/photo/padlock-with-keyhole-in-data-security-on-circuit-modern-safety-digital-concept.jpg?s=612x612&w=0&k=20&c=vBzRPNY53FvkckEBjRxZBm-3QTQd3bttgglFRPgYOqc=",
      route: "/services/cybersecurity-services",
    },
    {
      id: "healthcare-solutions",
      title: "Healthcare Solutions",
      description:
        "Secure and scalable digital solutions for the healthcare industry, including patient management, EHR, telemedicine, and data analytics.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTigiSIwWjnxjYPmmxDJwzO_gVS-14kH0jFPg&",
      bgImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTigiSIwWjnxjYPmmxDJwzO_gVS-14kH0jFPg&",
      route: "/industries/healthcare",
    },
  ];

  const [hoverTitle, setHoverTitle] = useState(null); // for hover bg

  return (
    <div className="page">
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <h1
            className="page-title"
            style={{ textAlign: "center", color: "#1e40af" }}
          >
            Our Services
          </h1>
          <p
            className="page-subtitle"
            style={{
              fontSize: "22px",
              lineHeight: "1.4",
              textAlign: "center",
            }}
          >
            Comprehensive solutions for your digital needs
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      {/* GRID */}
      <section className="services-content">
        <div className="container">
          <div className="inner-services-grid">
            {services.map((item) => {
              const showBg = hoverTitle === item.title && item.bgImage;

              return (
                <div
                  key={item.title}
                  className={`service-card ${showBg ? "service-card-with-bg" : ""
                    }`}
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
                  onClick={() => navigate(item.route)}
                >
                  {/* ICON */}
                  <div className="service-icon">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          width: "90px",
                          height: "90px",
                          objectFit: "contain",
                          position: "relative",
                          zIndex: 2,
                        }}
                      />
                    )}
                  </div>

                  {/* TITLE */}
                  <h3
                    style={{
                      fontSize: "25px",
                      fontWeight: "600",
                      marginBottom: "10px",
                      position: "relative",
                      zIndex: 2,
                      color: showBg ? "#f4f2f2ff" : "#171ca4ff",
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    style={{
                      position: "relative",
                      zIndex: 2,
                      color: showBg ? "#e5e7eb" : "#374151",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
