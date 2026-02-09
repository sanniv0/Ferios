import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './LegalPage.css';

const TermsOfServicePage = () => {
  return (
    <div className="legal-page terms-page">
      <Navbar />

      <main className="legal-main">
        <section className="legal-hero animate-fade-in-up">
          <div className="container">
            <div className="hero-content">
              <span className="section-label">LEGAL</span>
              <h1 className="hero-title text-gradient">Terms of Service</h1>
              <p className="hero-description text-gradient-subtle">
                Last updated: January 30, 2026
              </p>
            </div>
          </div>
        </section>

        <section className="legal-content">
          <div className="container">
            <div className="legal-section glass animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <h2 className="section-title text-gradient-subtle">Agreement to Terms</h2>
              <div className="section-content">
                <p>
                  These Terms of Service constitute a legally binding agreement governing your use of our services. By accessing or using our website and services, you agree to be bound by these terms and all applicable laws and regulations.
                </p>
                <p>
                  If you do not agree with any part of these terms, you may not access our services.
                </p>
              </div>
            </div>

            <div className="legal-section glass animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h2 className="section-title text-gradient-subtle">Use License</h2>
              <div className="section-content">
                <p>
                  Unless otherwise stated, Ferios and/or its licensors own the intellectual property rights for all material on Ferios. All intellectual property rights are reserved. You may access this from Ferios for your own personal use subjected to restrictions set in these terms and conditions.
                </p>
                <p>You must not:</p>
                <ul className="legal-list">
                  <li>Republish material from Ferios</li>
                  <li>Sell, rent, or sub-license material from Ferios</li>
                  <li>Reproduce, duplicate or copy material from Ferios</li>
                  <li>Redistribute content from Ferios</li>
                </ul>
              </div>
            </div>

            <div className="legal-section glass animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <h2 className="section-title text-gradient-subtle">User Accounts</h2>
              <div className="section-content">
                <p>
                  When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining the security of your account and for all activities that occur under your account.
                </p>
                <p>
                  You agree to notify us immediately of any unauthorized access to or use of your account or any other breach of security. We reserve the right to disable your account at any time for any reason, including if you fail to comply with any provision of these terms.
                </p>
              </div>
            </div>

            <div className="legal-section glass animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <h2 className="section-title text-gradient-subtle">Prohibited Activities</h2>
              <div className="section-content">
                <p>You may not:</p>
                <ul className="legal-list">
                  <li>Use our services for any illegal or unauthorized purpose</li>
                  <li>Violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                  <li>Infringe upon or violate our intellectual property rights or those of third parties</li>
                  <li>Hack into or make unauthorized access to our services</li>
                  <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of our services</li>
                  <li>Use our services in any manner that could disable, overburden, damage, or impair our services</li>
                  <li>Attempt to gain unauthorized access to our services, user accounts, or computer systems</li>
                </ul>
              </div>
            </div>

            <div className="legal-section glass animate-fade-in-up" style={{ animationDelay: '500ms' }}>
              <h2 className="section-title text-gradient-subtle">Intellectual Property</h2>
              <div className="section-content">
                <p>
                  The materials displayed on our website are protected by copyright and other intellectual property laws. You may not use, reproduce, distribute, or create derivative works from any content on our website without our express written permission.
                </p>
                <p>
                  Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
                </p>
              </div>
            </div>

            <div className="legal-section glass animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <h2 className="section-title text-gradient-subtle">Limitation of Liability</h2>
              <div className="section-content">
                <p>
                  In no event shall Ferios, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use our services.
                </p>
                <p>
                  We do not make any warranty that the services will meet your requirements, achieve any intended results, be compatible with any particular system, or operate without interruption, loss of data, or other damages.
                </p>
              </div>
            </div>

            <div className="legal-section glass animate-fade-in-up" style={{ animationDelay: '700ms' }}>
              <h2 className="section-title text-gradient-subtle">Disclaimer</h2>
              <div className="section-content">
                <p>
                  Your use of our services is at your sole risk. The service is provided on an "AS IS" and "AS AVAILABLE" basis. The service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
                </p>
                <p>
                  Ferios its subsidiaries, affiliates, and its licensors do not warrant that: a) the service will function uninterrupted, secure, or available at any particular time or location; b) any errors or defects will be corrected; c) the service is free of viruses or other harmful components; or d) the results of using the service will meet your requirements.
                </p>
              </div>
            </div>

            <div className="legal-section glass animate-fade-in-up" style={{ animationDelay: '800ms' }}>
              <h2 className="section-title text-gradient-subtle">Governing Law</h2>
              <div className="section-content">
                <p>
                  These terms shall be governed and construed in accordance with the laws of California, United States, without regard to its conflict of law provisions.
                </p>
                <p>
                  Our failure to enforce any right or provision of these terms will not be considered a waiver of those rights. If any provision of these terms is held to be invalid or unenforceable by a court, the remaining provisions of these terms will remain in effect. These terms constitute the entire agreement between us regarding our service, and supersede and replace any prior agreements we might have had between us regarding the service.
                </p>
              </div>
            </div>

            <div className="legal-section glass animate-fade-in-up" style={{ animationDelay: '900ms' }}>
              <h2 className="section-title text-gradient-subtle">Changes to Terms</h2>
              <div className="section-content">
                <p>
                  We reserve the right to modify or replace these terms at any time. If a revision is material, we will provide at least 30 days' notice before any new terms take effect. What constitutes a material change will be determined at our sole discretion.
                </p>
                <p>
                  By continuing to access or use our services after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use our services.
                </p>
              </div>
            </div>

            <div className="legal-section glass animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
              <h2 className="section-title text-gradient-subtle">Contact Us</h2>
              <div className="section-content">
                <p>
                  If you have any questions about these terms of service, please contact us:
                </p>
                <div className="contact-info">
                  <p>Email: legal@ferio.com</p>
                  <p>Address: San Francisco, CA, USA</p>
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

export default TermsOfServicePage;