import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ContactPage.css';

const ContactPage = ({ onGetStarted }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactMethods = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      title: 'Email Us',
      description: 'hello@example.com',
      action: 'Send us an email'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      title: 'Call Us',
      description: '+1 (555) 123-4567',
      action: 'Mon-Fri from 9AM to 5PM'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      title: 'Visit Us',
      description: '123 Innovation Street, Tech City, TC 12345',
      action: 'Come say hello'
    }
  ];

  return (
    <>
      <Navbar onGetStarted={onGetStarted} />
      <div className="contact-page">
        <section className="hero-section animate-fade-in-up">
          <div className="container">
            <h1 className="text-gradient">Get In Touch</h1>
            <p className="subtitle text-gradient-subtle">Have questions or want to learn more? We'd love to hear from you.</p>
          </div>
        </section>

        <section className="contact-info-section animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <div className="container">
            <div className="contact-grid">
              <div className="contact-form-section glass">
                <h2 className="text-gradient-subtle">Send us a message</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
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
                      placeholder="your@email.com"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      placeholder="How can we help?"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Tell us more about your inquiry..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg" style={{ alignSelf: 'flex-start' }}>
                    Send Message
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                  </button>

                  {submitted && (
                    <div className="success-message animate-scale-in">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      Thank you for your message! We'll get back to you soon.
                    </div>
                  )}
                </form>
              </div>

              <div className="contact-methods-section">
                <h2 className="text-gradient-subtle">Contact Information</h2>
                <div className="contact-methods">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="contact-method glass animate-fade-in-up" style={{ animationDelay: `${300 + (index * 100)}ms` }}>
                      <div className="contact-icon">
                        {method.icon}
                      </div>
                      <div className="contact-details">
                        <h3 className="text-gradient-subtle">{method.title}</h3>
                        <p>{method.description}</p>
                        <p className="contact-action">{method.action}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="office-location glass animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                  <h3 className="text-gradient-subtle">Office Location</h3>
                  <div className="map-placeholder">
                    <div className="map-icon animate-pulse-glow">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <p>Our office is located in the heart of Tech City, easily accessible by public transportation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section animate-fade-in-up" style={{ animationDelay: '700ms' }}>
          <div className="container">
            <h2 className="text-gradient">Frequently Asked Questions</h2>
            <div className="faq-grid">
              <div className="faq-item glass">
                <h3>How quickly do you respond to inquiries?</h3>
                <p>We typically respond to all inquiries within 24 hours during business days.</p>
              </div>
              <div className="faq-item glass">
                <h3>Do you offer support for your components?</h3>
                <p>Yes, we provide comprehensive documentation and support for all our components.</p>
              </div>
              <div className="faq-item glass">
                <h3>Can I schedule a demo?</h3>
                <p>Absolutely! Contact us to schedule a personalized demo of our component library.</p>
              </div>
              <div className="faq-item glass">
                <h3>Do you offer custom component development?</h3>
                <p>Yes, we offer custom component development services for enterprise clients.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;