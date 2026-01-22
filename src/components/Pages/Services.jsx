import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Services = () => {
  const services = [
    {
      id: "custom-software-development",
      title: "Custom Software Development",
      description:
        "We specialize in developing custom software solutions that streamline operations and enhance productivity. Our team works closely with clients to understand their needs and deliver software that aligns with their business objectives.",
      bgImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7BHYQlLV4N5saMAvHOsdfepqotH4dU_HeUQ&s",
    },
    {
      id: "mobile-app-development",
      title: "Mobile App Development",
      description:
        "Building high-performance mobile apps with great UX for Android and iOS.",
      bgImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_2uBM038BvdkRc9wumCPfA5hed6uqpSchnQ&s",
    },
    {
      id: "cloud-solutions",
      title: "Cloud Solutions",
      description:
        "Scalable cloud architecture, migrations, and DevOps for reliable delivery.",
      bgImage: "https://media.istockphoto.com/id/2219130406/photo/cloud-computing-symbol-connects-to-server-datacenter-network.jpg?s=612x612&w=0&k=20&c=XBbhS7J1B8hQxujIuL9vHREn_h3VzFLEXhEyzRX2T_U=",
    },
    {
      id: "it-consulting",
  title: "IT Consulting",
  description: `
IT Consulting at ABSN IT Solutions offers professional advisory services that help organizations:

Analyze their current technology setup  
Identify opportunities to improve efficiency and performance  
Select and implement the right technologies  
Align IT decisions with business goals and growth strategies
  `,
  bgImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfBjAvm8tyw9_Xg1JntAygJYYxiX_7kqBfCg&s",
    },
    {
      id: "cybersecurity-services",
      title: "Cybersecurity Services",
      description:
        "Security-first engineering, audits, and best practices to protect your systems.",
      bgImage: "https://media.istockphoto.com/id/1402450534/photo/padlock-with-keyhole-in-data-security-on-circuit-modern-safety-digital-concept.jpg?s=612x612&w=0&k=20&c=vBzRPNY53FvkckEBjRxZBm-3QTQd3bttgglFRPgYOqc=",
    },
  ];

  const [hoverTitle, setHoverTitle] = useState(null); // for hover bg
  const [activeTitle, setActiveTitle] = useState(null);

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
                  onClick={() => setActiveTitle(item.title)}
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

      {/* MODAL */}
      {activeTitle && (
        <div
          className="modal-backdrop"
          onClick={() => setActiveTitle(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setActiveTitle(null)}
            >
              ×
            </button>

            {industries
              .filter((i) => i.title === activeTitle)
              .map((i) => (
                <div key={i.title}>
                  <div className="modal-icon">
                    {i.image && (
                      <img
                        src={i.image}
                        alt={i.title}
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "contain",
                        }}
                      />
                    )}
                  </div>
                  <h2>{i.title}</h2>
                  <p>{i.description}</p>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
