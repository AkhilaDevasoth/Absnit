import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const IndustriesWeServe = () => {
  const navigate = useNavigate();

  const [hoverTitle, setHoverTitle] = useState(null);
  const [activeCard, setActiveCard] = useState(null); // ✅ SAME AS TECHNOLOGIES

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

  const industries = [
    {
      id: "healthcare",
      title: "Healthcare",
      description:
        "We deliver secure and scalable digital solutions for the healthcare industry. Our platforms help hospitals, clinics, and healthcare startups streamline patient management, electronic health records, telemedicine, and data analytics while ensuring compliance and data security.",
      sideImage:
        "https://thumbs.dreamstime.com/b/medical-coverage-insurance-concept-hands-doctor-covering-symbols-icons-blue-background-copy-space-web-banner-template-152592412.jpg",
      bgImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpv1sh6O25-FKAb7L5Qci0zMqKJCq2kQ3KdA&s",
      route: "/industries/healthcare",
    },
    {
      id: "education",
      title: "Education",
      description:
        "We empower educational institutions with smart digital solutions including LMS platforms, student information systems, online examinations, and custom EdTech software.",
      sideImage:
        "https://img.freepik.com/free-photo/front-view-colored-pencils-kept-glass-jar-stacked-spiral-notebooks-right-side-blue-color_140725-138995.jpg",
      bgImage:
        "https://img.freepik.com/free-vector/disruptive-education-globe-background-vector-geography-digital-remix_53876-140586.jpg?semt=ais_hybrid&w=740&q=80",
      route: "/industries/education",
    },
    {
      id: "manufacturing",
      title: "Manufacturing",
      description:
        "We support manufacturers with digital transformation solutions that optimize production, inventory, supply chain, and quality control through automation and analytics.",
      sideImage:
        "https://thumbs.dreamstime.com/b/blue-cogs-gears-background-montage-connected-industrial-tone-31302616.jpg",
      bgImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm3bt-PB_PdAVZDr9iZdfEg8X6-EmH7a0uIg&s",
      route: "/industries/manufacturing",
    },
    {
      id: "finance",
      title: "Finance",
      description:
        "We build secure and scalable fintech, banking, and financial platforms including payment systems, analytics dashboards, and risk management tools.",
      sideImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxojJ1KqqRnDLMbIJr833WLUPJfVF9-hz2dQ&s",
      bgImage:
        "https://www.shutterstock.com/image-illustration/blue-money-business-graph-finance-260nw-2166540277.jpg",
      route: "/industries/finance",
    },
    {
      id: "retail",
      title: "Retail",
      description:
        "Our retail technology solutions help brands enhance customer experience, streamline operations, and grow through omnichannel platforms and data-driven insights.",
      sideImage:
        "https://img.freepik.com/free-photo/black-friday-sales-sign-neon-light_23-2151833076.jpg",
      bgImage:
        "https://png.pngtree.com/thumb_back/fh260/background/20241227/pngtree-blue-background-with-shopping-bags-a-display-ideal-for-retail-and-image_16870320.jpg",
      route: "/industries/retail",
    },
  ];

  return (
    <div className="page services-page">
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <h1
            className="page-title"
            style={{ textAlign: "center", color: "#254A8A" }}
          >
            Industries We Serve
          </h1>
          <p
            className="page-subtitle"
            style={{ textAlign: "center", fontSize: "22px" }}
          >
            Solutions tailored to the needs of your industry
          </p>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="services-content">
        <div className="container">
          {industries.map((item, index) => {
            const isRight = index % 2 !== 0;
            const showBg = hoverTitle === item.title;

            return (
              <div
                key={item.id}
                className={`service-row ${isRight ? "right" : "left"}`}
              >
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
                  <h3>{item.title}</h3>

                  {/* ✅ INLINE STYLE = GUARANTEED COLOR CHANGE */}
                  <p
                    style={{
                      color:
                        hoverTitle === item.title ||
                        activeCard === item.id
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

export default IndustriesWeServe;
