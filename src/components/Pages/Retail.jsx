import React from 'react';

const Retail = () => {
  return (
    <div className="page">
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <h1
            className="page-title"
            style={{ textAlign: "center", color: "#1e40af" }}
          >
            Retail
          </h1>
          <p
            className="page-subtitle"
            style={{
              fontSize: "22px",
              lineHeight: "1.4",
              textAlign: "center",
            }}
          >
            Enhancing customer experience and driving growth in retail
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="services-content">
        <div className="container">
          <div className="inner-services-content">
            <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#374151" }}>
              Our retail technology solutions help businesses enhance customer experience and drive growth across online and offline channels. From inventory and order management to customer analytics and omnichannel platforms, AbsNIT Solutions enables retailers to operate efficiently and respond quickly to market demands. We help brands leverage data and technology to improve engagement, sales, and loyalty.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Retail;