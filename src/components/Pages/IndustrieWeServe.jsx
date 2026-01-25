import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const IndustriesWeServe = () => {
  const navigate = useNavigate();
  const [hoverTitle, setHoverTitle] = useState(null);

  /* 🔹 Reveal on scroll */
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
        "https://static.vecteezy.com/system/resources/thumbnails/070/211/753/small/medical-stethoscope-on-white-background-photo.jpeg",
      route: "/industries/healthcare",
    },
    {
      id: "education",
      title: "Education",
      description:
        "We empower educational institutions with smart digital solutions including LMS platforms, student information systems, online examinations, and custom EdTech software.",
      sideImage:
        "https://img.freepik.com/free-photo/front-view-colored-pencils-kept-glass-jar-stacked-spiral-notebooks-right-side-blue-color_140725-138995.jpg?semt=ais_hybrid&w=740&q=80",
      bgImage:
        "https://thumbs.dreamstime.com/b/education-doodle-art-text-banner-middle-black-white-color-vector-illustration-130238518.jpg",
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
        "https://st4.depositphotos.com/13324256/30228/i/450/depositphotos_302280866-stock-photo-cropped-view-woman-holding-letter.jpg",
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
        "https://png.pngtree.com/background/20230527/original/pngtree-white-storefront-on-a-white-background-picture-image_2769758.jpg",
      route: "/industries/retail",
    },
  ];

  return (
    <div className="page services-page">
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title" style={{ textAlign: "center", color: "#254A8A" }}>
            Industries We Serve
          </h1>
          <p className="page-subtitle" style={{ textAlign: "center", fontSize: "22px" }}>
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
                <div
                  className={`service-side-image reveal ${
                    isRight ? "reveal-right" : "reveal-left"
                  }`}
                >
                  <img src={item.sideImage} alt={item.title} />
                </div>

                {/* CARD */}
                <div
                  className={`service-card service-fixed reveal ${
                    showBg ? "service-card-with-bg" : ""
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
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
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
