import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TechologiesWeUse = () => {
  const navigate = useNavigate();
  const technologies = [
    {
      title: "Programming Languages",
      description: "Java, Python, JavaScript, C# and more.",
      image: "https://cdn-icons-png.freepik.com/512/11557/11557320.png",
      bgImage:
        "https://media.istockphoto.com/id/1411610158/photo/multi-colored-programming-language-source-code-design-example-front-view-composition-on-a.jpg?s=612x612&w=0&k=20&c=8f8J6Rw8HTRbWbSjeLBt33IT0o3T9Hpt07c4SnUwkbU=",
      route: "/technology/programming-languages",
    },
    {
      title: "Frameworks",
      description: "React, Angular, .NET, Django and other modern frameworks.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ciKDFB-MGoBbTXGPEVPGS1PePLboFgyv8A&s",
      bgImage:
        "https://www.imensosoftware.com/wp-content/uploads/2019/06/best-framwork-3.png",
      route: "/technology/frameworks",
    },
    {
      title: "Database",
      description: "MySQL, PostgreSQL, MongoDB and more.",
      image: "https://miro.medium.com/1*lbZJd2zWpLnKXzcsiMpmLw.jpeg",
      bgImage:
        "https://i0.wp.com/technoexcel.in/blogs/wp-content/uploads/2022/06/Blog-5-Introduction-to-SQL.png?fit=1024%2C512&ssl=1",
      route: "/technology/database",
    },
    {
      title: "Cloud Platforms",
      description: "AWS, Azure, Google Cloud for scalable infrastructure.",
      image: "https://contentstatic.techgig.com/photo/83145834.cms",
      bgImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcfgkfO9gvrxNMDdxTxMAfr4Pj4KVqAycFYw&s",
      route: "/technology/cloud-platforms",
    },
    {
      title: "DevOps Tools",
      description: "Docker, Kubernetes, Jenkins for efficient delivery.",
      image:
        "https://images.shiksha.com/mediadata/images/articles/1758693165phpmZOM7o.jpeg",
      bgImage:
        "https://media.geeksforgeeks.org/wp-content/uploads/20240305112848/DevOps-Programming-Languages-You-Must-Know.png",
      route: "/technology/devops-tools",
    },
  ];

  const [hoverTitle, setHoverTitle] = useState(null); // for hover bg


  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1
            className="page-title"
            style={{ textAlign: "center", color: "#1e40af" }}
          >
            Technologies We Use
          </h1>
          <p
            className="page-subtitle"
            style={{ fontSize: "22px", lineHeight: "1.3", textAlign: "center" }}
          >
            Tools &amp; Frameworks
          </p>
        </div>
      </section>

      <section className="services-content">
        <div className="container">
          <div className="inner-services-grid">
            {technologies.map((item) => {
              const showBg = hoverTitle === item.title && item.bgImage;

              return (
                <div
                  key={item.title}
                  className={`service-card ${showBg ? "service-card-with-bg" : ""}`}
                  style={
                    showBg
                      ? {
                        backgroundImage: `url(${item.bgImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }
                      : undefined
                  }
                  onMouseEnter={() => setHoverTitle(item.title)}   // ✅ hover only
                  onMouseLeave={() => setHoverTitle(null)}         // ✅ hover only
                  onClick={() => navigate(item.route)}
                >
                  <div className="service-icon">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          width: "90px",
                          height: "90px",
                          objectFit: "contain",
                          backgroundColor: "transparent",
                          position: "relative",
                          zIndex: 2,
                        }}
                      />
                    )}
                  </div>

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

export default TechologiesWeUse;