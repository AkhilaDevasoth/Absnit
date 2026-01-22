import { useState } from "react";

const TechologiesWeUse = () => {
  const technologies = [
    {
      title: "Programming Languages",
      description: "Java, Python, JavaScript, C# and more.",
      image: "https://cdn-icons-png.freepik.com/512/11557/11557320.png",
      bgImage:
        "https://media.istockphoto.com/id/1411610158/photo/multi-colored-programming-language-source-code-design-example-front-view-composition-on-a.jpg?s=612x612&w=0&k=20&c=8f8J6Rw8HTRbWbSjeLBt33IT0o3T9Hpt07c4SnUwkbU=",
    },
    {
      title: "Frameworks",
      description: "React, Angular, .NET, Django and other modern frameworks.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ciKDFB-MGoBbTXGPEVPGS1PePLboFgyv8A&s",
      bgImage:
        "https://www.imensosoftware.com/wp-content/uploads/2019/06/best-framwork-3.png",
    },
    {
      title: "Database",
      description: "MySQL, PostgreSQL, MongoDB and more.",
      image: "https://miro.medium.com/1*lbZJd2zWpLnKXzcsiMpmLw.jpeg",
      bgImage:
        "https://i0.wp.com/technoexcel.in/blogs/wp-content/uploads/2022/06/Blog-5-Introduction-to-SQL.png?fit=1024%2C512&ssl=1",
    },
    {
      title: "Cloud Platforms",
      description: "AWS, Azure, Google Cloud for scalable infrastructure.",
      image: "https://contentstatic.techgig.com/photo/83145834.cms",
      bgImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcfgkfO9gvrxNMDdxTxMAfr4Pj4KVqAycFYw&s",
    },
    {
      title: "DevOps Tools",
      description: "Docker, Kubernetes, Jenkins for efficient delivery.",
      image:
        "https://images.shiksha.com/mediadata/images/articles/1758693165phpmZOM7o.jpeg",
      bgImage:
        "https://media.geeksforgeeks.org/wp-content/uploads/20240305112848/DevOps-Programming-Languages-You-Must-Know.png",
    },
  ];

  const [hoverTitle, setHoverTitle] = useState(null); // for hover bg
  const [activeTitle, setActiveTitle] = useState(null); // for modal


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
                  onClick={() => setActiveTitle(item.title)}       // ✅ click only
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
                      fontSize: "30px",
                      fontWeight: "600",
                      marginBottom: "10px",
                      color: "#111",
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      position: "relative",
                      zIndex: 2,
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
            {technologies
              .filter((t) => t.title === activeTitle)
              .map((t) => (
                <div key={t.title}>
                  <div className="modal-icon">
                    {t.image && (
                      <img
                        src={t.image}
                        alt={t.title}
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "contain",
                        }}
                      />
                    )}
                  </div>
                  <h2>{t.title}</h2>
                  <p>{t.description}</p>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TechologiesWeUse;