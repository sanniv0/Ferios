import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ResourcesPage.css';

const DocumentationPage = () => {
  // Documentation categories
  const categories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'Learn the basics of using our component library',
      icon: '📚',
      items: [
        { id: 'installation', title: 'Installation', path: '/docs/installation' },
        { id: 'quickstart', title: 'Quick Start Guide', path: '/docs/quickstart' },
        { id: 'configuration', title: 'Configuration', path: '/docs/configuration' },
        { id: 'theming', title: 'Theming', path: '/docs/theming' }
      ]
    },
    {
      id: 'components',
      title: 'Components',
      description: 'Detailed guides for each component',
      icon: '🧩',
      items: [
        { id: 'buttons', title: 'Buttons', path: '/docs/buttons' },
        { id: 'cards', title: 'Cards', path: '/docs/cards' },
        { id: 'modals', title: 'Modals', path: '/docs/modals' },
        { id: 'forms', title: 'Forms', path: '/docs/forms' },
        { id: 'navigation', title: 'Navigation', path: '/docs/navigation' }
      ]
    },
    {
      id: 'patterns',
      title: 'Design Patterns',
      description: 'Best practices and patterns',
      icon: '🎨',
      items: [
        { id: 'layout', title: 'Layout Patterns', path: '/docs/layout' },
        { id: 'accessibility', title: 'Accessibility', path: '/docs/accessibility' },
        { id: 'animations', title: 'Animations', path: '/docs/animations' },
        { id: 'responsive', title: 'Responsive Design', path: '/docs/responsive' }
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced Topics',
      description: 'Advanced usage and techniques',
      icon: '⚙️',
      items: [
        { id: 'customization', title: 'Customization', path: '/docs/customization' },
        { id: 'typescript', title: 'TypeScript Support', path: '/docs/typescript' },
        { id: 'testing', title: 'Testing', path: '/docs/testing' },
        { id: 'performance', title: 'Performance', path: '/docs/performance' }
      ]
    }
  ];

  // Recent updates
  const recentUpdates = [
    { title: 'New Component: Floating Panel', date: 'Jan 25, 2026', category: 'Components' },
    { title: 'Improved Accessibility Guidelines', date: 'Jan 20, 2026', category: 'Patterns' },
    { title: 'Theming System Overhaul', date: 'Jan 15, 2026', category: 'Advanced' },
    { title: 'Performance Optimization Guide', date: 'Jan 10, 2026', category: 'Advanced' }
  ];

  return (
    <div className="resources-page documentation-page">
      <Navbar />

      <main className="resources-main">
        <section className="resources-hero animate-fade-in-up">
          <div className="container">
            <div className="hero-content">
              <span className="section-label">DOCUMENTATION</span>
              <h1 className="hero-title text-gradient">Comprehensive Guides & Resources</h1>
              <p className="hero-description text-gradient-subtle">
                Learn how to effectively use our component library with detailed guides, examples, and best practices.
              </p>
            </div>
          </div>
        </section>

        <section className="resources-content">
          <div className="container">
            <div className="resources-intro animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="intro-stats">
                <div className="stat glass">
                  <span className="stat-number text-gradient">50+</span>
                  <span className="stat-label">Components</span>
                </div>
                <div className="stat glass">
                  <span className="stat-number text-gradient">12</span>
                  <span className="stat-label">Categories</span>
                </div>
                <div className="stat glass">
                  <span className="stat-number text-gradient">24/7</span>
                  <span className="stat-label">Support</span>
                </div>
              </div>
            </div>

            <div className="resources-grid">
              {categories.map((category, index) => (
                <div
                  key={category.id}
                  className="resource-category glass animate-fade-in-up"
                  style={{ animationDelay: `${(index + 2) * 100}ms` }}
                >
                  <div className="category-header">
                    <div className="category-icon">{category.icon}</div>
                    <div className="category-info">
                      <h3 className="category-title">{category.title}</h3>
                      <p className="category-description">{category.description}</p>
                    </div>
                  </div>
                  <div className="category-items">
                    {category.items.map(item => (
                      <a key={item.id} href={item.path} className="category-item">
                        <span className="item-title">{item.title}</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="recent-updates animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <h2 className="updates-title text-gradient">Recent Updates</h2>
              <div className="updates-list">
                {recentUpdates.map((update, index) => (
                  <div key={index} className="update-item glass">
                    <div className="update-content">
                      <h3 className="update-title">{update.title}</h3>
                      <span className="update-category">{update.category}</span>
                    </div>
                    <span className="update-date">{update.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DocumentationPage;