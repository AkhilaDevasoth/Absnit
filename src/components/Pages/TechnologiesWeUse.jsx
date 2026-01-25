import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TechnologiesWeUse = () => {
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

  const technologies = [
    {
      id: "programming-languages",
      title: "Programming Languages",
      description: "Java, Python, JavaScript, C# and more.",
      image: "https://cdn-icons-png.freepik.com/512/11557/11557320.png",
      sideImage:
        "https://media.istockphoto.com/id/1411610158/photo/multi-colored-programming-language-source-code-design-example-front-view-composition-on-a.jpg?s=612x612&w=0&k=20&c=8f8J6Rw8HTRbWbSjeLBt33IT0o3T9Hpt07c4SnUwkbU=",
      bgImage:
        "https://media.istockphoto.com/id/1411610158/photo/multi-colored-programming-language-source-code-design-example-front-view-composition-on-a.jpg",
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
        "https://cbx-prod.b-cdn.net/COLOURBOX42701936.jpg?width=800&height=800&quality=70",
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
        "https://www.shutterstock.com/image-vector/sql-database-icon-black-white-600nw-2616303455.jpg",
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
        "https://www.orientsoftware.com/Themes/Content/Images/blog/2025-11-21/cloud-computing-programming-languages-csharp.webp",
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
        "https://thumbs.dreamstime.com/b/devops-infinity-symbol-isolated-white-background-image-features-person-icon-gear-representing-continuous-428604285.jpg",
      route: "/technology/devops-tools",
    },
  ];

  return (
    <div className="page services-page technologies-page">
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <h1
            className="page-title"
            style={{ textAlign: "center", color: "#254A8A" }}
          >
            Technologies We Use
          </h1>
          <p
            className="page-subtitle"
            style={{ textAlign: "center", fontSize: "22px" }}
          >
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
                  <img
                    src={item.image}
                    alt={item.title}
                    className="service-icon-img"
                  />
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

export default TechnologiesWeUse;
