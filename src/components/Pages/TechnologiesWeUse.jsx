import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TechnologiesWeUse = () => {
  const navigate = useNavigate();

  const [hoverTitle, setHoverTitle] = useState(null);
  const [activeCard, setActiveCard] = useState(null); // ✅ ADD THIS

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

  const technologies = [
    {
      id: "programming-languages",
      title: "Programming Languages",
      description: "Java, Python, JavaScript, C# and more.",
      image: "https://cdn-icons-png.freepik.com/512/11557/11557320.png",
      sideImage:
        "https://st4.depositphotos.com/14735134/29560/v/450/depositphotos_295605928-stock-illustration-python-coding-language-sign-on.jpg",
      bgImage:
        "https://img.freepik.com/premium-photo/abstract-tech-binary-code-background-color-blue-matrix-backdrop-with-number-1-0-digital-binary-data-secure-data-concept-perspective_494516-936.jpg",
      route: "/technology/programming-languages",
    },
    {
      id: "frameworks",
      title: "Frameworks",
      description: "React, Angular, .NET, Django and other modern frameworks.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ciKDFB-MGoBbTXGPEVPGS1PePLboFgyv8A&s",
      sideImage:
        "https://www.imensosoftware.com/wp-content/uploads/2019/06/best-framwork-3.png",
      bgImage:
        "https://zd-brightspot.s3.us-east-1.amazonaws.com/wp-content/uploads/2023/10/27121239/Framework.jpg",
      route: "/technology/frameworks",
    },
    {
      id: "database",
      title: "Database",
      description: "MySQL, PostgreSQL, MongoDB and more.",
      image: "https://miro.medium.com/1*lbZJd2zWpLnKXzcsiMpmLw.jpeg",
      sideImage:
        "https://i0.wp.com/technoexcel.in/blogs/wp-content/uploads/2022/06/Blog-5-Introduction-to-SQL.png",
      bgImage:
        "https://www.shutterstock.com/image-illustration/multiple-databases-relational-database-tables-600nw-2491887133.jpg",
      route: "/technology/database",
    },
    {
      id: "cloud-platforms",
      title: "Cloud Platforms",
      description: "AWS, Azure, Google Cloud for scalable infrastructure.",
      image: "https://contentstatic.techgig.com/photo/83145834.cms",
      sideImage:
        "https://www.mygreatlearning.com/blog/wp-content/uploads/2020/07/Blog-Feature-Cloud-Computing-1000X700-A-1.jpg",
      bgImage:
        "https://www.shutterstock.com/image-vector/abstract-cloud-technology-circuit-board-600nw-2669250763.jpg",
      route: "/technology/cloud-platforms",
    },
    {
      id: "devops-tools",
      title: "DevOps Tools",
      description: "Docker, Kubernetes, Jenkins for efficient delivery.",
      image:
        "https://images.shiksha.com/mediadata/images/articles/1758693165phpmZOM7o.jpeg",
      sideImage:
        "https://media.geeksforgeeks.org/wp-content/uploads/20240305112848/DevOps-Programming-Languages-You-Must-Know.png",
      bgImage:
        "https://www.buzzybrains.com/blog/wp-content/uploads/2025/08/top-azure-devops-tools-banner.jpg",
      route: "/technology/devops-tools",
    },
  ];

  return (
    <div className="page services-page technologies-page">
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title" style={{ textAlign: "center", color: "#254A8A" }}>
            Technologies We Use
          </h1>
          <p className="page-subtitle" style={{ textAlign: "center", fontSize: "22px" }}>
            Tools & Frameworks
          </p>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="services-content">
        <div className="container">
          {technologies.map((item, index) => {
            const isRight = index % 2 !== 0;
            const showBg = hoverTitle === item.title;

            return (
              <div
                key={item.id}
                className={`service-row ${isRight ? "right" : ""}`}
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
  setActiveCard(item.id);          // set active first
  setTimeout(() => {
    navigate(item.route);          // navigate after color change
  }, 120);                         // small delay (smooth UX)
}}

                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="service-icon-img"
                  />
                  <h3>{item.title}</h3>
                 <p
  style={{
    color:
      hoverTitle === item.title ? "#ffffff" : "#6b6969",
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

export default TechnologiesWeUse;
