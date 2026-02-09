import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './PricingPage.css';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'yearly'

  // Pricing plans data
  const plans = [
    {
      id: 'free',
      name: 'Starter',
      price: billingCycle === 'monthly' ? '$0' : '$0',
      period: billingCycle === 'monthly' ? '/month' : '/year',
      description: 'Perfect for individuals and small projects',
      features: [
        '50+ Components',
        'Basic Documentation',
        'Community Support',
        '1 Project',
        '1GB Storage'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      id: 'pro',
      name: 'Professional',
      price: billingCycle === 'monthly' ? '$19' : '$190',
      period: billingCycle === 'monthly' ? '/month' : '/year',
      description: 'For growing teams and businesses',
      features: [
        'All Starter features',
        'Premium Templates',
        'Advanced Components',
        'Priority Support',
        'Unlimited Projects',
        '10GB Storage',
        'API Access',
        'Custom Branding'
      ],
      cta: 'Get Pro',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with custom needs',
      features: [
        'All Pro features',
        'White-label Solution',
        'Dedicated Account Manager',
        'Custom Integrations',
        'SLA Guarantee',
        'On-premise Deployment',
        'Training & Onboarding',
        'Custom Development'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: 'Can I change plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated based on your billing cycle.'
    },
    {
      question: 'Do you offer discounts for non-profits?',
      answer: 'Yes, we offer special pricing for non-profit organizations and educational institutions. Contact us for more information.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards including Visa, Mastercard, American Express, and Discover. We also support bank transfers for enterprise customers.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, all paid plans come with a 14-day free trial. No credit card required to start your trial.'
    },
    {
      question: 'How often are new components released?',
      answer: 'We release new components and templates weekly. Pro and Enterprise customers get early access to new features.'
    }
  ];

  return (
    <div className="pricing-page">
      <Navbar />

      <main className="pricing-main">
        <section className="pricing-hero animate-fade-in-up">
          <div className="container">
            <div className="hero-content">
              <span className="section-label">PRICING</span>
              <h1 className="hero-title text-gradient">Simple, Transparent Pricing</h1>
              <p className="hero-description text-gradient-subtle">
                Choose the perfect plan for your needs. All plans include our core components and features.
              </p>

              <div className="billing-toggle">
                <span className={`${billingCycle === 'monthly' ? 'active' : ''}`}>Monthly</span>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={billingCycle === 'yearly'}
                    onChange={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                  />
                  <span className="slider"></span>
                </label>
                <span className={`${billingCycle === 'yearly' ? 'active' : ''}`}>
                  Yearly <span className="save-badge">Save 20%</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing-plans">
          <div className="container">
            <div className="plans-grid">
              {plans.map((plan, index) => (
                <div
                  key={plan.id}
                  className={`plan-card glass ${plan.popular ? 'popular' : ''} animate-fade-in-up`}
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  {plan.popular && <span className="popular-badge">MOST POPULAR</span>}

                  <div className="plan-header">
                    <h3 className="plan-name">{plan.name}</h3>
                    <div className="plan-price">
                      <span className="price text-gradient">{plan.price}</span>
                      <span className="period">{plan.period}</span>
                    </div>
                    <p className="plan-description">{plan.description}</p>
                  </div>

                  <ul className="plan-features">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="feature-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} btn-lg plan-cta`}>
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pricing-faq">
          <div className="container">
            <h2 className="faq-title text-gradient">Frequently Asked Questions</h2>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="faq-item glass animate-fade-in-up"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <h3 className="faq-question">{faq.question}</h3>
                  <p className="faq-answer">{faq.answer}</p>
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

export default PricingPage;