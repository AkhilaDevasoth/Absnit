import { useState } from "react";

const Services = () => {
  const services = [
    {
      id: "custom-software-development",
      title: "Custom Software Development",
      description:
        "We specialize in developing custom software solutions that streamline operations and enhance productivity. Our team works closely with clients to understand their needs and deliver software that aligns with their business objectives.",
      icon: "🌐",
    },
    {
      id: "mobile-app-development",
      title: "Mobile App Development",
      description:
        "Building high-performance mobile apps with great UX for Android and iOS.",
      icon: "🎨",
    },
    {
      id: "cloud-solutions",
      title: "Cloud Solutions",
      description:
        "Scalable cloud architecture, migrations, and DevOps for reliable delivery.",
      icon: "📱",
    },
    {
      id: "it-consulting",
      title: "IT Consulting",
      description:
        "Expert advice on technology strategy and digital transformation.",
      icon: "💡",
    },
    {
      id: "cybersecurity-services",
      title: "Cybersecurity Services",
      description:
        "Security-first engineering, audits, and best practices to protect your systems.",
      icon: "🛡️",
    },
  ];

  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Our Services</h1>
          <p className="page-subtitle">
            Comprehensive solutions for your digital needs
          </p>
        </div>
      </section>

      <section className="services-content">
        <div className="container">
          <div className="services-grid">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="service-card"
                onClick={() => setSelectedService(service)}
                style={{ cursor: "pointer" }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedService && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedService(null)}
            >
              ×
            </button>
            <div className="modal-icon">{selectedService.icon}</div>
            <h2>{selectedService.title}</h2>
            <p>{selectedService.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;