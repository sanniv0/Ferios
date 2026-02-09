import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './TemplatesPage.css';

const TemplatesPage = () => {
  // Sample templates data
  const templates = [
    {
      id: 1,
      name: 'Dashboard Template',
      category: 'Admin',
      description: 'Modern dashboard with analytics and data visualization',
      preview: 'https://placehold.co/400x250/1a1a25/8b5cf6?text=Dashboard',
      tags: ['Analytics', 'Charts', 'Data Tables'],
      featured: true
    },
    {
      id: 2,
      name: 'E-commerce Template',
      category: 'Shop',
      description: 'Complete online store with product listings and checkout',
      preview: 'https://placehold.co/400x250/1a1a25/ec4899?text=E-commerce',
      tags: ['Products', 'Cart', 'Checkout'],
      featured: true
    },
    {
      id: 4,
      name: 'Portfolio Template',
      category: 'Personal',
      description: 'Creative portfolio showcase for designers and developers',
      preview: 'https://placehold.co/400x250/1a1a25/10b981?text=Portfolio',
      tags: ['Gallery', 'Projects', 'About'],
      featured: false
    },
    {
      id: 5,
      name: 'Landing Page',
      category: 'Marketing',
      description: 'Conversion-focused landing page with call-to-actions',
      preview: 'https://placehold.co/400x250/1a1a25/f59e0b?text=Landing',
      tags: ['CTA', 'Forms', 'Testimonials'],
      featured: true
    },
    {
      id: 6,
      name: 'SaaS Template',
      category: 'Business',
      description: 'Software as a Service template with pricing and features',
      preview: 'https://placehold.co/400x250/1a1a25/8b5cf6?text=SaaS',
      tags: ['Pricing', 'Features', 'FAQ'],
      featured: false
    }
  ];

  const categories = ['All', 'Admin', 'Shop', 'Personal', 'Marketing', 'Business'];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTemplates = templates.filter(template => {
    const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory;
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="templates-page">
      <Navbar />

      <main className="templates-main">
        <section className="templates-hero">
          <div className="container">
            <div className="hero-content">
              <span className="section-label">TEMPLATES</span>
              <h1 className="hero-title">Beautifully Designed Templates</h1>
              <p className="hero-description">
                Ready-to-use templates to accelerate your development. Customize and deploy in minutes.
              </p>
            </div>
          </div>
        </section>

        <section className="templates-browser">
          <div className="container">
            <div className="templates-controls">
              <div className="search-bar">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
                <input
                  type="text"
                  placeholder="Search templates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="category-filter">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="templates-grid">
              {filteredTemplates.map(template => (
                <div key={template.id} className={`template-card ${template.featured ? 'featured' : ''}`}>
                  <div className="template-image">
                    <img src={template.preview} alt={template.name} />
                    {template.featured && (
                      <span className="featured-badge">Featured</span>
                    )}
                  </div>
                  <div className="template-info">
                    <div className="template-header">
                      <h3 className="template-title">{template.name}</h3>
                      <span className="template-category">{template.category}</span>
                    </div>
                    <p className="template-description">{template.description}</p>
                    <div className="template-tags">
                      {template.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                    <div className="template-actions">
                      <button className="btn btn-outline btn-sm">Preview</button>
                      <button className="btn btn-primary btn-sm">Use Template</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredTemplates.length === 0 && (
              <div className="no-results">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
                <h3>No templates found</h3>
                <p>Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TemplatesPage;