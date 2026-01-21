
const Home = () => {
    return (
        <div className="page">
            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Welcome to <span className="gradient-text">Absnit</span>
                    </h1>
                    <p className="hero-subtitle">
                        We create exceptional digital experiences that drive innovation and growth
                    </p>
                    <div className="hero-buttons">
                        <a href="/services" className="btn btn-primary">Our Services</a>
                        <a href="/contact" className="btn btn-secondary">Get Started</a>
                    </div>
                </div>
            </section>

            <section className="features">
                <div className="container">
                    <h2 className="section-title">What We Offer</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">🚀</div>
                            <h3>Fast Development</h3>
                            <p>Lightning-fast development cycles with modern technologies and best practices.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">✨</div>
                            <h3>Beautiful Design</h3>
                            <p>Stunning, modern UI/UX designs that captivate and engage your audience.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🔒</div>
                            <h3>Secure & Reliable</h3>
                            <p>Enterprise-grade security and reliability for your peace of mind.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">📱</div>
                            <h3>Responsive Design</h3>
                            <p>Perfect experience across all devices - desktop, tablet, and mobile.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;