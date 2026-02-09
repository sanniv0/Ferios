import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ResourcesPage.css';

const SupportPage = () => {
  // Support channels
  const supportChannels = [
    {
      id: 'community',
      title: 'Community Forum',
      description: 'Connect with other developers and get help from the community',
      icon: '👥',
      responseTime: 'Within 24 hours',
      link: '/community',
      color: '#8b5cf6'
    },
    {
      id: 'discord',
      title: 'Discord Chat',
      description: 'Join our Discord server for real-time support and discussions',
      icon: '💬',
      responseTime: 'Instant',
      link: '/discord',
      color: '#7289da'
    },
    {
      id: 'email',
      title: 'Email Support',
      description: 'Get personalized assistance from our support team',
      icon: '📧',
      responseTime: 'Within 4 hours',
      link: '/contact',
      color: '#3b82f6'
    },
    {
      id: 'github',
      title: 'GitHub Issues',
      description: 'Report bugs or request features directly on GitHub',
      icon: '🐙',
      responseTime: 'Within 48 hours',
      link: '/github',
      color: '#6b7280'
    }
  ];

  // Knowledge base categories
  const kbCategories = [
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      description: 'Common issues and solutions',
      count: 24,
      icon: '🔧',
      color: '#f59e0b'
    },
    {
      id: 'installation',
      title: 'Installation',
      description: 'Setup and configuration guides',
      count: 18,
      icon: '⚙️',
      color: '#10b981'
    },
    {
      id: 'components',
      title: 'Component Issues',
      description: 'Specific component problems',
      count: 32,
      icon: '🧩',
      color: '#8b5cf6'
    },
    {
      id: 'api',
      title: 'API Reference',
      description: 'Detailed API documentation',
      count: 15,
      icon: '📚',
      color: '#ec4899'
    }
  ];

  // FAQ section
  const faqs = [
    {
      question: 'How do I get started with the component library?',
      answer: 'Check out our Getting Started guide in the Documentation section. It covers installation, basic usage, and common patterns.'
    },
    {
      question: 'What browsers are supported?',
      answer: 'Our components support all modern browsers including Chrome, Firefox, Safari, and Edge. For legacy browser support, refer to our compatibility guide.'
    },
    {
      question: 'How can I contribute to the project?',
      answer: 'We welcome contributions! Check our Contribution Guidelines in the Documentation section for detailed instructions on how to get started.'
    },
    {
      question: 'Do you offer commercial support?',
      answer: 'Yes, we offer commercial support plans with priority response times, dedicated support, and custom development services. Contact us for more information.'
    },
    {
      question: 'How often do you release updates?',
      answer: 'We typically release updates weekly, with major versions quarterly. You can track our progress on our Changelog page.'
    }
  ];

  // Contact form
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! Our support team will contact you shortly.');
  };

  return (
    <div className="resources-page support-page">
      <Navbar />

      <main className="resources-main">
        <section className="support-hero animate-fade-in-up">
          <div className="container">
            <div className="hero-content">
              <span className="section-label">SUPPORT</span>
              <h1 className="hero-title text-gradient">How can we help?</h1>
              <p className="hero-description text-gradient-subtle">
                We're here to help you succeed. Choose a support channel or browse our documentation.
              </p>
            </div>
          </div>
        </section>

        <section className="support-content">
          <div className="container">
            <div className="support-channels animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="channels-grid">
                {supportChannels.map((channel, index) => (
                  <div
                    key={channel.id}
                    className="channel-card glass animate-fade-in-up"
                    style={{ animationDelay: `${(index + 1) * 100}ms` }}
                  >
                    <div className="channel-icon" style={{ backgroundColor: `${channel.color}20`, color: channel.color }}>
                      <span className="icon">{channel.icon}</span>
                    </div>
                    <div className="channel-info">
                      <h3 className="channel-title">{channel.title}</h3>
                      <p className="channel-description">{channel.description}</p>
                      <div className="channel-response">
                        <span className="response-label">Response:</span>
                        <span className="response-time">{channel.responseTime}</span>
                      </div>
                    </div>
                    <a href={channel.link} className="btn btn-secondary channel-link">
                      Contact
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="ms-2">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="kb-section animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="kb-header">
                <h2 className="kb-title text-gradient-subtle">Knowledge Base</h2>
                <p className="kb-description">Quick answers to common questions</p>
              </div>
              <div className="kb-grid">
                {kbCategories.map((category, index) => (
                  <a
                    key={category.id}
                    href="#"
                    className="kb-category glass"
                  >
                    <div className="category-icon" style={{ backgroundColor: `${category.color}20` }}>
                      <span className="icon">{category.icon}</span>
                    </div>
                    <div className="category-info">
                      <h3 className="category-title">{category.title}</h3>
                      <p className="category-description">{category.description}</p>
                      <span className="category-count">{category.count} articles</span>
                    </div>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div className="faq-section animate-fade-in-up" style={{ animationDelay: '500ms' }}>
              <h2 className="faq-title text-center text-gradient mb-5">Frequently Asked Questions</h2>
              <div className="faq-grid" style={{ maxWidth: '800px', margin: '0 auto' }}>
                {faqs.map((faq, index) => (
                  <div key={index} className="faq-item glass mb-4">
                    <h3 className="faq-question">{faq.question}</h3>
                    <p className="faq-answer">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="contact-section mt-5 glass animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <h2 className="contact-title text-gradient">Still need help?</h2>
              <div className="contact-content">
                <div className="contact-form">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group mb-4">
                      <label className="text-secondary mb-2 d-block">Full Name</label>
                      <input type="text" className="form-control" placeholder="John Doe" required />
                    </div>
                    <div className="form-group mb-4">
                      <label className="text-secondary mb-2 d-block">Email Address</label>
                      <input type="email" className="form-control" placeholder="john@example.com" required />
                    </div>
                    <div className="form-group mb-4">
                      <label className="text-secondary mb-2 d-block">Message</label>
                      <textarea className="form-control" rows="5" placeholder="Describe your issue..." required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg w-100">
                      Send Message
                    </button>
                  </form>
                </div>
                <div className="contact-info">
                  <h3 className="info-title text-gradient-subtle mb-4">Contact Information</h3>
                  <div className="info-item mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="me-3">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="info-item mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="me-3">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                    </svg>
                    <span>support@ferio.com</span>
                  </div>
                  <div className="info-item mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="me-3">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>123 Design Street, Creative City</span>
                  </div>
                  <div className="support-hours glass p-4 mt-4">
                    <h4 className="hours-title text-primary fw-bold mb-2">Support Hours</h4>
                    <p className="hours-info text-secondary mb-0">Monday-Friday: 9AM - 6PM PST<br />Saturday-Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SupportPage;