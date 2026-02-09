import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ChangelogPage.css';

const ChangelogPage = () => {

  // Changelog data
  const changelogEntries = [
    {
      version: 'v2.1.0',
      date: 'January 28, 2026',
      type: 'feature',
      title: 'New Template System',
      description: 'Introducing a comprehensive template system with drag-and-drop builder.',
      changes: [
        'Added 10 new premium templates',
        'Implemented drag-and-drop template builder',
        'Added template customization options',
        'Improved template export functionality'
      ]
    },
    {
      version: 'v2.0.5',
      date: 'January 20, 2026',
      type: 'enhancement',
      title: 'Performance Improvements',
      description: 'Major performance optimizations across all components.',
      changes: [
        'Reduced initial bundle size by 25%',
        'Improved rendering performance',
        'Optimized animations and transitions',
        'Enhanced accessibility compliance'
      ]
    },
    {
      version: 'v2.0.4',
      date: 'January 15, 2026',
      type: 'bugfix',
      title: 'Critical Bug Fixes',
      description: 'Addressed several critical issues reported by users.',
      changes: [
        'Fixed memory leak in modal components',
        'Resolved issue with responsive layouts',
        'Fixed accessibility issues in navigation',
        'Improved keyboard navigation support'
      ]
    },
    {
      version: 'v2.0.3',
      date: 'January 10, 2026',
      type: 'feature',
      title: 'Dark Mode Enhancement',
      description: 'Enhanced dark mode with additional customization options.',
      changes: [
        'Added 5 new dark mode themes',
        'Improved contrast ratios',
        'Added automatic theme switching',
        'Enhanced color palette options'
      ]
    },
    {
      version: 'v2.0.2',
      date: 'January 5, 2026',
      type: 'enhancement',
      title: 'Component Library Updates',
      description: 'Added new components and improved existing ones.',
      changes: [
        'Added 15 new UI components',
        'Improved documentation for all components',
        'Added TypeScript definitions',
        'Enhanced component customization'
      ]
    },
    {
      version: 'v2.0.1',
      date: 'December 28, 2025',
      type: 'bugfix',
      title: 'Stability Improvements',
      description: 'General stability improvements and bug fixes.',
      changes: [
        'Fixed compatibility issues with older browsers',
        'Resolved issue with form validation',
        'Improved error handling',
        'Enhanced security measures'
      ]
    },
    {
      version: 'v2.0.0',
      date: 'December 20, 2025',
      type: 'major',
      title: 'Major Release',
      description: 'Complete rewrite with new architecture and features.',
      changes: [
        'Completely rewritten component library',
        'New design system implementation',
        'Improved developer experience',
        'Enhanced performance and accessibility'
      ]
    },
    {
      version: 'v1.5.2',
      date: 'November 15, 2025',
      type: 'bugfix',
      title: 'Minor Bug Fixes',
      description: 'Addressed minor issues reported by users.',
      changes: [
        'Fixed tooltip positioning issue',
        'Resolved dropdown menu problems',
        'Fixed animation flickering',
        'Improved mobile responsiveness'
      ]
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'major': return '#ec4899'; // Pink
      case 'feature': return '#8b5cf6'; // Purple
      case 'enhancement': return '#06b6d4'; // Cyan
      case 'bugfix': return '#10b981'; // Green
      default: return '#6b7280'; // Gray
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'major': return 'Major Release';
      case 'feature': return 'Feature';
      case 'enhancement': return 'Enhancement';
      case 'bugfix': return 'Bug Fix';
      default: return type;
    }
  };

  return (
    <div className="changelog-page">
      <Navbar />

      <main className="changelog-main">
        <section className="changelog-hero animate-fade-in-up">
          <div className="container">
            <div className="hero-content">
              <span className="section-label">CHANGELOG</span>
              <h1 className="hero-title text-gradient">Latest Updates & Improvements</h1>
              <p className="hero-description text-gradient-subtle">
                Stay up-to-date with the latest features, improvements, and fixes to our platform.
              </p>
            </div>
          </div>
        </section>

        <section className="changelog-timeline">
          <div className="container">
            <div className="timeline">
              {changelogEntries.map((entry, index) => (
                <div
                  key={index}
                  className="timeline-entry animate-fade-in-up"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="entry-header">
                    <div className="entry-version animate-pulse-glow" style={{ backgroundColor: getTypeColor(entry.type) }}>
                      {entry.version}
                    </div>
                    <div className="entry-meta">
                      <span className="entry-date">{entry.date}</span>
                      <span
                        className="entry-type"
                        style={{ color: getTypeColor(entry.type), borderColor: getTypeColor(entry.type) }}
                      >
                        {getTypeLabel(entry.type)}
                      </span>
                    </div>
                  </div>
                  <div className="entry-content glass">
                    <h3 className="entry-title text-gradient-subtle">{entry.title}</h3>
                    <p className="entry-description">{entry.description}</p>
                    <ul className="entry-changes">
                      {entry.changes.map((change, idx) => (
                        <li key={idx} className="change-item">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          {change}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ChangelogPage;