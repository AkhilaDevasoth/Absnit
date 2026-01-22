import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="page">
            <section className="page-hero">
                <div className="container">
                    <h1 className="page-title"
                    style={{ color: "#1e40af" }}>Contact Us</h1>
                    <p className="page-subtitle">Get in touch with us today</p>
                </div>
            </section>

            <section className="contact-content">
                <div className="container">
                    <div className="contact-wrapper">
                        <div className="contact-info">
                            
                             <strong>Let's Talk</strong>
                            <p>
                                Have a project in mind? We'd love to hear from you.
                                Send us a message and we'll respond as soon as possible.
                            </p>

                            <div className="contact-details">
                                <div className="contact-item">
                                    <strong>Email:</strong>
                                   <p><a href="mailto:info@absnit.com">info@absnit.com</a></p>
                                </div>
                                <div className="contact-item">
                                    <strong>Phone:</strong>
                                   <p><a href="tel:+919948550646">+91 9948550646</a></p>
                                </div>
                                <div className="contact-item">
                                    <strong>Address:</strong>
                                    <p> 1-111 Madhannapet, Narsampet, <br></br>Warangal, Telangana 506132</p>
                                </div>
                            </div>
                        </div>

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="6"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;