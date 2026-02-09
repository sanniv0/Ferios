import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './LegalPage.css';

const LicensePage = () => {
  return (
    <div className="legal-page license-page">
      <Navbar />
      
      <main className="legal-main">
        <section className="legal-hero">
          <div className="container">
            <div className="hero-content">
              <span className="section-label">LEGAL</span>
              <h1 className="hero-title">License Agreement</h1>
              <p className="hero-description">
                Open Source License Information
              </p>
            </div>
          </div>
        </section>

        <section className="legal-content">
          <div className="container">
            <div className="license-intro">
              <p className="intro-text">
                Ferios is an open-source component library distributed under the MIT License. This page outlines the terms under which you may use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software.
              </p>
            </div>

            <div className="license-section">
              <h2 className="section-title">MIT License</h2>
              <div className="license-text">
                <pre className="license-code">
{`MIT License

Copyright (c) 2026 Ferio

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}
                </pre>
              </div>
            </div>

            <div className="legal-section">
              <h2 className="section-title">Copyright Notice</h2>
              <div className="section-content">
                <p>
                  The Ferios component library is copyrighted by its respective authors. The copyright notice must be included in all copies or substantial portions of the software as required by the MIT License.
                </p>
              </div>
            </div>

            <div className="legal-section">
              <h2 className="section-title">Usage Rights</h2>
              <div className="section-content">
                <p>
                  Under the MIT License, you are granted the following rights:
                </p>
                <ul className="legal-list">
                  <li><strong>Commercial Use:</strong> You may use the software for commercial purposes.</li>
                  <li><strong>Modification:</strong> You may modify the source code for your own purposes.</li>
                  <li><strong>Distribution:</strong> You may distribute the original or modified versions of the software.</li>
                  <li><strong>Private Use:</strong> You may use the software privately without distribution.</li>
                </ul>
              </div>
            </div>

            <div className="legal-section">
              <h2 className="section-title">Attribution Requirements</h2>
              <div className="section-content">
                <p>
                  When using, distributing, or modifying the Ferios component library, you must include the following attribution in your project:
                </p>
                <div className="attribution-box">
                  <code>
                    Ferios - Modern React Component Library<br/>
                    Copyright (c) 2026 Ferios contributors<br/>
                    Licensed under the MIT License
                  </code>
                </div>
                <p>
                  This attribution should be visible in your project's documentation, about page, or credits section.
                </p>
              </div>
            </div>

            <div className="legal-section">
              <h2 className="section-title">Component Usage</h2>
              <div className="section-content">
                <p>
                  Individual components from the Ferios library may be used freely in your projects under the terms of the MIT License. You may:
                </p>
                <ul className="legal-list">
                  <li>Use components in personal and commercial projects</li>
                  <li>Modify components to suit your needs</li>
                  <li>Include components in open-source projects</li>
                  <li>Create derivative works based on our components</li>
                </ul>
                <p>
                  No additional fees or royalties are required for using our components in your projects.
                </p>
              </div>
            </div>

            <div className="legal-section">
              <h2 className="section-title">Warranty Disclaimer</h2>
              <div className="section-content">
                <p>
                  The software is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.
                </p>
              </div>
            </div>

            <div className="legal-section">
              <h2 className="section-title">Contribution License</h2>
              <div className="section-content">
                <p>
                  By contributing to the Ferios project, you agree that your contributions will be licensed under the MIT License. This means that any code, documentation, or other materials you submit to the project will be available under the same permissive terms as the rest of the project.
                </p>
                <p>
                  Contributors retain copyright ownership of their contributions but grant the same usage rights as outlined in the MIT License to the project maintainers and users.
                </p>
              </div>
            </div>

            <div className="legal-section">
              <h2 className="section-title">Open Source Dependencies</h2>
              <div className="section-content">
                <p>
                  Ferios relies on several open-source libraries and dependencies, each of which is governed by its own license terms:
                </p>
                <ul className="legal-list">
                  <li><strong>React:</strong> MIT License</li>
                  <li><strong>React Router:</strong> MIT License</li>
                  <li><strong>Prop-types:</strong> MIT License</li>
                  <li><strong>Classnames:</strong> MIT License</li>
                </ul>
                <p>
                  Please ensure compliance with all dependency licenses when using the Ferios component library.
                </p>
              </div>
            </div>

            <div className="legal-section">
              <h2 className="section-title">Contact Information</h2>
              <div className="section-content">
                <p>
                  For questions about licensing or to report license violations, please contact us:
                </p>
                <div className="contact-info">
                  <p>Email: license@ferio.com</p>
                  <p>Project Repository: github.com/ferio-project</p>
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

export default LicensePage;