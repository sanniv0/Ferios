import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './CareersPage.css';

const CareersPage = ({ onGetStarted }) => {
  const positions = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Join our team to build cutting-edge React components and contribute to our growing library.',
      responsibilities: [
        'Develop and maintain high-quality React components',
        'Collaborate with designers to implement pixel-perfect UIs',
        'Optimize components for performance and accessibility',
        'Contribute to documentation and developer resources'
      ],
      requirements: [
        '5+ years of React development experience',
        'Strong knowledge of modern JavaScript and CSS',
        'Experience with TypeScript',
        'Understanding of component architecture and design systems'
      ]
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Create beautiful and functional designs for our component library and user interfaces.',
      responsibilities: [
        'Design intuitive and aesthetically pleasing UI components',
        'Create design systems and style guides',
        'Conduct user research and usability testing',
        'Collaborate with developers to ensure design implementation accuracy'
      ],
      requirements: [
        'Portfolio showcasing UI/UX design skills',
        'Proficiency in Figma, Sketch, or Adobe Creative Suite',
        'Understanding of responsive design principles',
        'Knowledge of user-centered design methodologies'
      ]
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Manage our infrastructure and deployment pipelines to ensure smooth operations.',
      responsibilities: [
        'Maintain CI/CD pipelines and deployment processes',
        'Monitor system performance and reliability',
        'Implement security best practices',
        'Collaborate with development teams on infrastructure needs'
      ],
      requirements: [
        'Experience with cloud platforms (AWS, GCP, or Azure)',
        'Knowledge of containerization technologies (Docker, Kubernetes)',
        'Experience with Infrastructure as Code tools',
        'Understanding of security and compliance requirements'
      ]
    }
  ];

  return (
    <>
      <Navbar onGetStarted={onGetStarted} />
      <div className="careers-page">
        <section className="hero-section animate-fade-in-up">
          <div className="container">
            <h1 className="text-gradient">Join Our Team</h1>
            <p className="subtitle text-gradient-subtle">Be part of a team that's revolutionizing how developers build beautiful interfaces</p>
          </div>
        </section>

        <section className="culture-section animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <div className="container">
            <div className="culture-content">
              <h2 className="text-gradient-subtle">Our Culture</h2>
              <p>At our company, we foster an inclusive, collaborative, and innovative environment where everyone can thrive. We believe in work-life balance, continuous learning, and supporting each other's growth.</p>

              <div className="culture-values">
                <div className="culture-card glass">
                  <h3 className="text-gradient-subtle">Flexible Work</h3>
                  <p>We offer flexible schedules and remote work options to support your lifestyle.</p>
                </div>
                <div className="culture-card glass">
                  <h3 className="text-gradient-subtle">Continuous Learning</h3>
                  <p>We provide learning stipends and time for personal development projects.</p>
                </div>
                <div className="culture-card glass">
                  <h3 className="text-gradient-subtle">Team Collaboration</h3>
                  <p>We work together to solve challenges and celebrate successes as a team.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="positions-section animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <div className="container">
            <h2 className="text-gradient">Open Positions</h2>
            <div className="positions-list">
              {positions.map((position, index) => (
                <div key={position.id} className="position-card glass animate-scale-in" style={{ animationDelay: `${500 + (index * 100)}ms` }}>
                  <div className="position-header">
                    <h3 className="text-gradient-subtle">{position.title}</h3>
                    <div className="position-meta">
                      <span className="department">{position.department}</span>
                      <span className="location">{position.location}</span>
                      <span className="type">{position.type}</span>
                    </div>
                  </div>

                  <p className="position-description">{position.description}</p>

                  <div className="position-details">
                    <div className="responsibilities">
                      <h4>Responsibilities</h4>
                      <ul>
                        {position.responsibilities.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="requirements">
                      <h4>Requirements</h4>
                      <ul>
                        {position.requirements.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button className="btn btn-primary btn-lg">
                    Apply Now
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="benefits-section animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <div className="container">
            <h2 className="text-gradient">Why Work With Us</h2>
            <div className="benefits-grid">
              <div className="benefit-card glass">
                <div className="benefit-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                  </svg>
                </div>
                <h3>Competitive Salary</h3>
                <p>Generous compensation packages that reflect your skills and contributions.</p>
              </div>
              <div className="benefit-card glass">
                <div className="benefit-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5" />
                    <path d="M12 12v6" />
                    <path d="M15 15l-3 3-3-3" />
                  </svg>
                </div>
                <h3>Health Benefits</h3>
                <p>Comprehensive health, dental, and vision insurance for you and your family.</p>
              </div>
              <div className="benefit-card glass">
                <div className="benefit-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="M16 13H8" />
                    <path d="M16 17H8" />
                    <path d="M10 9H8" />
                  </svg>
                </div>
                <h3>Professional Growth</h3>
                <p>Opportunities for advancement and professional development within the company.</p>
              </div>
              <div className="benefit-card glass">
                <div className="benefit-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3>Work-Life Balance</h3>
                <p>Flexible schedules and unlimited PTO to help you maintain a healthy balance.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CareersPage;