import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './AboutPage.css';

const AboutPage = ({ onGetStarted }) => {
  return (
    <>
      <Navbar onGetStarted={onGetStarted} />
      <div className="about-page">
        <section className="hero-section animate-fade-in-up">
          <div className="container">
            <h1 className="text-gradient">About Our Company</h1>
            <p className="subtitle text-gradient-subtle">We're building the future of component libraries with elegant, animated React components</p>
          </div>
        </section>

        <section className="mission-section animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <div className="container">
            <div className="mission-content glass">
              <h2 className="text-gradient-subtle">Our Mission</h2>
              <p>We believe that beautiful, functional UI components should be accessible to everyone. Our mission is to provide developers with high-quality, animated components that make their applications stand out.</p>
            </div>
          </div>
        </section>

        <section className="values-section animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <div className="container">
            <h2 className="text-gradient">Our Values</h2>
            <div className="values-grid">
              <div className="value-card glass">
                <div className="value-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3>Craftsmanship</h3>
                <p>We pay attention to every detail, creating components with pixel-perfect design and smooth animations.</p>
              </div>
              <div className="value-card glass">
                <div className="value-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3>Community</h3>
                <p>We're committed to building a strong community of developers who share knowledge and collaborate.</p>
              </div>
              <div className="value-card glass">
                <div className="value-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
                    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                    <path d="M12 2v2" />
                    <path d="M12 22v-2" />
                    <path d="m17 20.66-1-1.73" />
                    <path d="M11 10.27 7 3.34" />
                    <path d="m20.66 17-1.73-1" />
                    <path d="m3.34 7 1.73 1" />
                    <path d="M14 12h8" />
                    <path d="M2 12h2" />
                    <path d="m20.66 7-1.73 1" />
                    <path d="m3.34 17 1.73-1" />
                    <path d="m17 3.34-1 1.73" />
                    <path d="m11 13.73-4 6.93" />
                  </svg>
                </div>
                <h3>Innovation</h3>
                <p>We continuously explore new techniques and technologies to push the boundaries of what's possible.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="team-section animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <div className="container">
            <h2 className="text-gradient">Meet Our Team</h2>
            <div className="team-grid">
              <div className="team-member glass">
                <div className="member-image">
                  <div className="avatar-placeholder animate-pulse-glow">JD</div>
                </div>
                <h3>John Doe</h3>
                <p className="role">Founder & CEO</p>
                <p>Visionary leader with over 10 years of experience in UI/UX design and development.</p>
              </div>
              <div className="team-member glass">
                <div className="member-image">
                  <div className="avatar-placeholder animate-pulse-glow">JS</div>
                </div>
                <h3>Jane Smith</h3>
                <p className="role">CTO</p>
                <p>Tech expert specializing in React and modern frontend architectures.</p>
              </div>
              <div className="team-member glass">
                <div className="member-image">
                  <div className="avatar-placeholder animate-pulse-glow">MR</div>
                </div>
                <h3>Mike Roberts</h3>
                <p className="role">Lead Designer</p>
                <p>Design enthusiast focused on creating beautiful, intuitive user experiences.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;