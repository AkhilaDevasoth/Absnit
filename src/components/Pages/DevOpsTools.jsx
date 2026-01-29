import React, { useState, useEffect } from "react";

const DevOpsTools = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeTab, setActiveTab] = useState("ci");
  const [animateKey, setAnimateKey] = useState(0);

  /* 🔹 Reveal animation (scroll) */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("active", entry.isIntersecting);
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".reveal").forEach((el) =>
      observer.observe(el)
    );

    return () => observer.disconnect();
  }, []);

  /* 🔹 Back to top */
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="page">

      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title reveal" style={{ textAlign: "center", color: "#1e40af" }}>
            DevOps Tools
          </h1>
          <p className="page-subtitle reveal" style={{ fontSize: "22px", textAlign: "center" }}>
            Streamlining development and operations
          </p>
        </div>
      </section>
      {/* ===============================
    DEVOPS TOOLS – FEATURE SECTION
================================ */}
<section className="services-content">
  <div className="container">
    <div className="feature-image-overlay reveal">

      <img
        src="https://media.licdn.com/dms/image/v2/C4D12AQGAVZ42ePdNwA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1625751116779?e=2147483647&v=beta&t=Jp428ZsvfnD78HaOJRk29ie2fL6ESspXYaekVLrhlsI"
        alt="DevOps Tools"
      />

      <div className="overlay"></div>

      <div className="overlay-content">
        <h2>DevOps Tools & Automation</h2>
        <p>
          We help organizations streamline development and operations by
          implementing modern DevOps tools and automation practices to
          accelerate delivery cycles, increase reliability, and improve
          operational efficiency.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* MAIN CONTENT (UNCHANGED) */}
      <section className="services-content">
        <div className="container">
          <div className="industry-detail-layout">

            <div className="industry-image-card reveal">
              <img
                src="https://media.istockphoto.com/id/1352203098/photo/devops-software-development-and-it-operations-engineer-working-in-agile-methodology.jpg?s=612x612&w=0&k=20&c=hcyR7V30yi70_GS9BAwDR9WWzHhG9VWwvdxwghmhOJw="
                alt="DevOps Tools"
              />
            </div>

            <div className="industry-text-content reveal">
              <h2 className="industry-title">DevOps Automation & Tooling</h2>
              <p className="industry-description"> ABSN IT Solutions leverages modern DevOps tools and practices to automate workflows, improve collaboration, and ensure fast, reliable software delivery. Our DevOps expertise helps teams build, test, and deploy applications efficiently. </p>
             <p className="industry-subtitle"> DevOps tools and practices we use: </p> 
             <ul className="industry-list"> <li>Docker for containerized application deployment</li>
              <li>Kubernetes for container orchestration and scaling</li> 
              <li>CI/CD pipelines using Jenkins and GitHub Actions</li>
               <li>Infrastructure as Code (IaC)</li> <li>Monitoring and logging solutions</li>
                <li>Cloud-native DevOps practices</li> 
                </ul>
                 <p className="industry-footer-text"> Our DevOps solutions enable faster releases, higher system reliability, and continuous improvement through automation and best-in-class tooling.
                   </p>
            </div>

          </div>
        </div>
      </section>

      {/* ===============================
          DEVOPS PRACTICES – TAB SECTION
      ================================ */}
      <section className="services-content">
        <div className="container">

          {/* TABS */}
       <div className="devops-tabs reveal">

  <button
    className={`industry-box ${activeTab === "ci" ? "active" : ""}`}
    onClick={() => {
      setActiveTab("ci");
      setAnimateKey(k => k + 1);
    }}
  >
    Continuous Integration
  </button>

  <button
    className={`industry-box ${activeTab === "cd" ? "active" : ""}`}
    onClick={() => {
      setActiveTab("cd");
      setAnimateKey(k => k + 1);
    }}
  >
    Continuous Delivery
  </button>

  <button
    className={`industry-box ${activeTab === "ms" ? "active" : ""}`}
    onClick={() => {
      setActiveTab("ms");
      setAnimateKey(k => k + 1);
    }}
  >
    Microservices
  </button>

  <button
    className={`industry-box ${activeTab === "iac" ? "active" : ""}`}
    onClick={() => {
      setActiveTab("iac");
      setAnimateKey(k => k + 1);
    }}
  >
    Infrastructure as Code
  </button>

</div>


         {/* CONTENT CARD */} <div className="service-card reveal devops-card">{activeTab === "ci" && (
  <>
    <h2>Continuous Integration</h2>

    <p>
      Continuous Integration (CI) is a core DevOps practice that enables
      development teams to integrate code changes frequently and
      automatically. At ABSN IT Solutions, we implement CI pipelines that
      ensure every code commit is built, tested, and validated in real time,
      helping teams detect issues early and deliver high-quality software
      faster.
    </p>

    <p>
      Our CI approach reduces integration risks, improves collaboration
      between development teams, and maintains a stable codebase throughout
      the development lifecycle.
    </p>

    <ul>
      <li>Automated build and test pipelines for every code commit</li>
      <li>Static code analysis and quality checks to maintain coding standards</li>
      <li>Seamless Git and version control system integration</li>
      <li>Early bug detection through continuous testing</li>
      <li>Quality gates and approval workflows to prevent faulty deployments</li>
      <li>Detailed build reports and real-time notifications</li>
    </ul>

    <p>
      By adopting Continuous Integration, organizations can accelerate
      development cycles, minimize production defects, and ensure consistent
      delivery of reliable and scalable applications.
    </p>
  </>
)}
 {activeTab === "cd" && (
  <>
    <h2>Continuous Delivery</h2>

    <p>
      Continuous Delivery (CD) is a DevOps practice that ensures software is
      always in a deployable state. At ABSN IT Solutions, we design automated
      delivery pipelines that enable teams to release features, updates, and
      fixes quickly, safely, and reliably.
    </p>

    <p>
      Our CD processes reduce manual intervention, eliminate deployment risks,
      and ensure consistent releases across development, testing, and
      production environments.
    </p>

    <ul>
      <li>Automated deployment pipelines across multiple environments</li>
      <li>Environment-specific configurations and release strategies</li>
      <li>Automated validation and smoke testing before production releases</li>
      <li>Rollback and recovery mechanisms for failed deployments</li>
      <li>Release approvals and audit trails for compliance</li>
      <li>Faster time-to-market with reliable software releases</li>
    </ul>

    <p>
      With Continuous Delivery, organizations gain the agility to respond
      quickly to customer needs while maintaining stability, security, and
      confidence in every release.
    </p>
  </>
)}
{activeTab === "ms" && (
  <>
    <h2>Microservices</h2>

    <p>
      Microservices architecture enables applications to be built as a
      collection of small, independent services that can be developed,
      deployed, and scaled individually. ABSN IT Solutions helps organizations
      design and implement robust microservices-based systems for modern,
      cloud-native applications.
    </p>

    <p>
      By adopting microservices, businesses gain flexibility, scalability, and
      resilience while accelerating innovation and reducing system downtime.
    </p>

    <ul>
      <li>Service-oriented architecture with independent deployment units</li>
      <li>Containerized microservices using Docker and Kubernetes</li>
      <li>API-based communication between services</li>
      <li>Scalable and fault-tolerant system design</li>
      <li>Improved application performance and availability</li>
      <li>Easy integration with CI/CD pipelines</li>
    </ul>

    <p>
      Our microservices solutions enable organizations to scale efficiently,
      deploy faster, and adapt seamlessly to evolving business requirements.
    </p>
  </>
)}
 
                  {activeTab === "iac" && (
  <>
    <h2>Infrastructure as Code</h2>

    <p>
      Infrastructure as Code (IaC) is a modern DevOps practice that allows
      infrastructure to be provisioned, managed, and versioned using code.
      ABSN IT Solutions implements IaC solutions that ensure consistency,
      reliability, and automation across cloud and on-premise environments.
    </p>

    <p>
      Our IaC approach eliminates configuration drift, reduces manual errors,
      and enables rapid provisioning of infrastructure resources.
    </p>

    <ul>
      <li>Automated infrastructure provisioning using Terraform and CloudFormation</li>
      <li>Version-controlled infrastructure for traceability and auditing</li>
      <li>Scalable and repeatable environment creation</li>
      <li>Improved security and compliance through standardized configurations</li>
      <li>Faster disaster recovery and environment replication</li>
      <li>Seamless integration with CI/CD pipelines</li>
    </ul>

    <p>
      By leveraging Infrastructure as Code, organizations can achieve faster
      deployments, improved reliability, and better control over their
      infrastructure lifecycle.
    </p>
  </>
)}
 </div>
                     </div> </section> </div> ); };

export default DevOpsTools;
