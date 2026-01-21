const About = () => {
    return (
        <div className="page">
            <section className="page-hero">
                <div className="container">
                    <h1 className="page-title">About Us</h1>
                    <p className="page-subtitle">Learn more about our mission and values</p>
                </div>
            </section>

            <section className="about-content">
                <div className="container">
                    <div className="about-section">
                        <h2>Our Story</h2>
                        <p>
                            Absnit was founded with a simple mission: to create exceptional digital experiences
                            that drive innovation and growth. We believe in the power of technology to transform
                            businesses and improve lives.
                        </p>
                        <p>
                            Our team of experienced developers, designers, and strategists work together to
                            deliver solutions that are not just functional, but beautiful, intuitive, and
                            impactful.
                        </p>
                    </div>

                    <div className="about-section">
                        <h2>Our Values</h2>
                        <div className="values-grid">
                            <div className="value-item">
                                <h3>Innovation</h3>
                                <p>We embrace new technologies and creative solutions to solve complex problems.</p>
                            </div>
                            <div className="value-item">
                                <h3>Quality</h3>
                                <p>We never compromise on quality, ensuring every project meets the highest standards.</p>
                            </div>
                            <div className="value-item">
                                <h3>Collaboration</h3>
                                <p>We work closely with our clients to understand their needs and deliver solutions that exceed expectations.</p>
                            </div>
                            <div className="value-item">
                                <h3>Integrity</h3>
                                <p>We conduct business with honesty, transparency, and respect for all stakeholders.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;