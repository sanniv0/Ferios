import './Testimonials.css'

const testimonials = [
  {
    content: "Ferios has completely transformed how we build UIs. The animations are buttery smooth and the API is incredibly intuitive.",
    author: "Sarah Chen",
    role: "Senior Frontend Developer",
    company: "Vercel",
    avatar: "SC"
  },
  {
    content: "The best component library I've ever used. It saved us weeks of development time and our users love the polished feel.",
    author: "Marcus Rodriguez",
    role: "Engineering Lead",
    company: "Linear",
    avatar: "MR"
  },
  {
    content: "Finally, a component library that doesn't compromise on design. Ferios components look stunning right out of the box.",
    author: "Emily Watson",
    role: "Product Designer",
    company: "Figma",
    avatar: "EW"
  }
]

const Testimonials = () => {
  return (
    <section className="testimonials" id="showcase">
      <div className="container">
        <div className="testimonials-header">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">
            Loved by developers
            <br />
            <span className="text-gradient">around the world</span>
          </h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.author} 
              className="testimonial-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="testimonial-glow" />
              <div className="testimonial-content">
                <svg className="quote-icon" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.004zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.768-.695-1.327-.825-.55-.13-1.07-.14-1.54-.03-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.165 1.4.615 2.52 1.35 3.35.732.833 1.646 1.25 2.742 1.25.967 0 1.768-.29 2.402-.876.627-.576.942-1.365.942-2.368v.012z"/>
                </svg>
                <p className="testimonial-text">{testimonial.content}</p>
              </div>
              <div className="testimonial-author">
                <div 
                  className="author-avatar"
                  style={{ 
                    background: `linear-gradient(135deg, ${
                      index === 0 ? '#8b5cf6, #ec4899' : 
                      index === 1 ? '#06b6d4, #3b82f6' : 
                      '#10b981, #06b6d4'
                    })`
                  }}
                >
                  {testimonial.avatar}
                </div>
                <div className="author-info">
                  <span className="author-name">{testimonial.author}</span>
                  <span className="author-role">{testimonial.role} at {testimonial.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="companies">
          <p className="companies-label">Trusted by teams at</p>
          <div className="companies-logos">
            <div className="company-logo">Vercel</div>
            <div className="company-logo">Linear</div>
            <div className="company-logo">Figma</div>
            <div className="company-logo">Stripe</div>
            <div className="company-logo">Notion</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
