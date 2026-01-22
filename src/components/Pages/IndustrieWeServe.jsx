import { useState } from "react";
import { useNavigate } from "react-router-dom";

const IndustriesWeServe = () => {
  const industries = [
    {
      title: "Healthcare",
      description: "we deliver secure and scalable digital solutions for the healthcare industry. Our platforms help hospitals, clinics, and healthcare startups streamline patient management, electronic health records, telemedicine, and data analytics. By leveraging modern technologies, we enhance operational efficiency, ensure data security, and improve patient care outcomes while meeting regulatory and compliance standards.",
      bgImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTigiSIwWjnxjYPmmxDJwzO_gVS-14kH0jFPg&",
      route: "/industries/healthcare",
    },
    {
      title: "Education",
      description: "We empower educational institutions with smart digital solutions that transform learning and administration. Our education-focused services include learning management systems, student information platforms, online examination tools, and custom software for schools, colleges, and EdTech companies. AbsNIT Solutions enables seamless collaboration, improved engagement, and data-driven decision-making in today’s digital education ecosystem.",
      bgImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtuh_xYWw9k0w6dDcXPemYHT27bEIf3PWCJQ&s",      route: "/industries/education",    },
    {
      title: "Manufacturing",
      description: "AbsNIT Solutions supports manufacturing businesses in their journey toward digital transformation. Our solutions optimize production processes, inventory management, supply chain operations, and quality control through automation and real-time insights. By integrating intelligent systems and analytics, we help manufacturers increase productivity, reduce downtime, and maintain operational excellence.",
      bgImage: "https://thumbs.dreamstime.com/b/blue-cogs-gears-background-montage-connected-industrial-tone-31302616.jpg",
      route: "/industries/manufacturing",
    },
    {
      title: "Finance",
      description: "We provide reliable and secure technology solutions for the finance sector, including banks, fintech startups, and financial service providers. Our expertise covers digital payment systems, financial analytics, risk management tools, and secure data platforms. AbsNIT Solutions focuses on compliance, scalability, and performance to help financial organizations deliver trusted and efficient services.",
      bgImage: "https://media.istockphoto.com/id/1409217098/vector/business-investment-forex-trading-chart-on-blue-dark-background-trading-stock-technology-and.jpg?s=612x612&w=0&k=20&c=VFUMzx9F_d-BME0o-4nOAF_D4SuzxFbfo6Ki0D_c7Pc=",
      route: "/industries/finance",
    },
    {
      title: "Retail",
      description:
        "Our retail technology solutions help businesses enhance customer experience and drive growth across online and offline channels. From inventory and order management to customer analytics and omnichannel platforms, AbsNIT Solutions enables retailers to operate efficiently and respond quickly to market demands. We help brands leverage data and technology to improve engagement, sales, and loyalty.",
      bgImage: "https://img.freepik.com/free-photo/black-friday-sales-sign-neon-light_23-2151833076.jpg?semt=ais_hybrid&w=740&q=80",
      route: "/industries/retail",
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
            Industries We Serve
          </h1>
          <p
            className="page-subtitle"
            style={{
              fontSize: "22px",
              lineHeight: "1.4",
              textAlign: "center",
            }}
          >
            Solutions tailored to the needs of your industry
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="services-content ">
        <div className="container">
          <div className="inner-services-grid">
            {industries.map((item) => {
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
                      color: showBg ? "#0c0b0bff" : "#171ca4ff",
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

export default IndustriesWeServe;