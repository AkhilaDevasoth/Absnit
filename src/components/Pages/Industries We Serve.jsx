import { useState } from "react";

const IndustriesWeServe = () => {
  const industries = [
    {
      title: "Healthcare",
      description: "Implementing secure and efficient healthcare IT systems.",
      icon: "🏥",
    },
    {
      title: "Education",
      description: "Developing e-learning platforms and educational tools.",
      icon: "🎓",
    },
    {
      title: "Manufacturing",
      description: "Streamlining manufacturing processes through automation.",
      icon: "🏭",
    },
    {
      title: "Finance",
      description: "Providing robust financial software solutions.",
      icon: "🏦",
    },
    {
      title: "Retail",
      description:
        "Enhancing retail operations with innovative technology solutions.",
      icon: "🛍️",
    },
  ];

  const [selectedIndustry, setSelectedIndustry] = useState(null);

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title" style={{ textAlign: "center" }}>
            Industries We Serve
          </h1>
          <p
            className="page-subtitle"
            style={{ fontSize: "22px", lineHeight: "1.4", textAlign: "center" }}
          >
            Solutions tailored to the needs of your industry
          </p>
        </div>
      </section>

      <section className="services-content">
        <div className="container">
          <div className="services-grid">
            {industries.map((item) => (
              <div
                key={item.title}
                className="service-card"
                onClick={() => setSelectedIndustry(item)}
                style={{ cursor: "pointer" }}
              >
                <div className="service-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedIndustry && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedIndustry(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedIndustry(null)}
            >
              ×
            </button>
            <div className="modal-icon">{selectedIndustry.icon}</div>
            <h2>{selectedIndustry.title}</h2>
            <p>{selectedIndustry.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default IndustriesWeServe;