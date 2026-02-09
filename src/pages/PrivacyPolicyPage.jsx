import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './LegalPage.css';

const PrivacyPolicyPage = () => {
  return (
    <div className="legal-page privacy-policy-page">
      <Navbar />

      <main className="legal-main">
        <section className="legal-hero animate-fade-in-up">
          <div className="container">
            <div className="hero-content">
              <span className="section-label">LEGAL</span>
              <h1 className="hero-title text-gradient">Privacy Policy</h1>
              <p className="hero-description text-gradient-subtle">
                Last updated: January 30, 2026
              </p>
            </div>
          </div>
        </section>

        <section className="legal-content">
          <div className="container">
            <div className="legal-section glass animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <h2 className="section-title text-gradient-subtle">Introduction</h2>
              <p className="section-content">
                We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and protect your information when you use our services.
              </p>
            </div>

            <div className="legal-section glass animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h2 className="section-title text-gradient-subtle">Information We Collect</h2>
              <div className="section-content">
                <h3 className="subsection-title">Personal Data</h3>
                <p>
                  We may collect personal identification information when you register on our website, subscribe to our newsletter, or fill out a form. This may include your name, email address, company information, and other relevant details.
                </p>

                <h3 className="subsection-title">Usage Data</h3>
                <p>
                  We collect information about how you interact with our website, including IP addresses, browser type, pages visited, time spent on pages, and other analytical data.
                </p>

                <h3 className="subsection-title">Cookies</h3>
                <p>
                  We use cookies and similar tracking technologies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
              </div>
            </div>

            <div className="legal-section glass animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <h2 className="section-title text-gradient-subtle">How We Use Your Information</h2>
              <div className="section-content">
                <h3 className="subsection-title">Service Provision</h3>
                <p>
                  To provide and maintain our service, including monitoring the usage of our service.
                </p>

                <h3 className="subsection-title">Communication</h3>
                <p>
                  To send you emails and updates about our services, newsletters, marketing materials, and other information that may be of interest to you.
                </p>

                <h3 className="subsection-title">Improvement</h3>
                <p>
                  To improve our service, including data analysis and identifying usage trends.
                </p>

                <h3 className="subsection-title">Security</h3>
                <p>
                  To monitor and prevent security breaches and other fraudulent activities.
                </p>
              </div>
            </div>

            <div className="legal-section glass animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <h2 className="section-title text-gradient-subtle">Data Protection Rights</h2>
              <div className="section-content">
                <p>
                  Depending on your location, you may have the following rights regarding your personal data:
                </p>
                <ul className="legal-list">
                  <li>The right to access – You have the right to request copies of your personal data.</li>
                  <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate.</li>
                  <li>The right to erasure – You have the right to request that we erase your personal data.</li>
                  <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data.</li>
                  <li>The right to object to processing – You have the right to object to our processing of your personal data.</li>
                  <li>The right to data portability – You have the right to request that we transfer the data we have collected to another organization.</li>
                </ul>
              </div>
            </div>

            <div className="legal-section glass animate-fade-in-up" style={{ animationDelay: '500ms' }}>
              <h2 className="section-title text-gradient-subtle">Third-Party Services</h2>
              <div className="section-content">
                <p>
                  We may employ third-party companies and individuals to facilitate our service, provide the service on our behalf, perform service-related services, or assist us in analyzing how our service is used.
                </p>
                <p>
                  These third parties have access to your personal data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                </p>
              </div>
            </div>

            <div className="legal-section glass animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <h2 className="section-title text-gradient-subtle">Security</h2>
              <div className="section-content">
                <p>
                  We value your trust in providing us with your personal information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
                </p>
              </div>
            </div>

            <div className="legal-section glass animate-fade-in-up" style={{ animationDelay: '700ms' }}>
              <h2 className="section-title text-gradient-subtle">Changes to This Privacy Policy</h2>
              <div className="section-content">
                <p>
                  We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date.
                </p>
                <p>
                  You are advised to review this privacy policy periodically for any changes. Changes to this privacy policy are effective when they are posted on this page.
                </p>
              </div>
            </div>

            <div className="legal-section glass animate-fade-in-up" style={{ animationDelay: '800ms' }}>
              <h2 className="section-title text-gradient-subtle">Contact Us</h2>
              <div className="section-content">
                <p>
                  If you have any questions about this privacy policy, please contact us:
                </p>
                <div className="contact-info">
                  <p>Email: privacy@ferio.com</p>
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

export default PrivacyPolicyPage;