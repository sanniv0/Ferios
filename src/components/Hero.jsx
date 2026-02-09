import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './Hero.css'

const Hero = ({ onGetStarted }) => {
  const heroRef = useRef(null)
  const navigate = useNavigate()

  const handleBrowseComponents = () => {
    navigate('/components')
  }

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      hero.style.setProperty('--mouse-x', `${x}%`)
      hero.style.setProperty('--mouse-y', `${y}%`)
    }

    hero.addEventListener('mousemove', handleMouseMove)
    return () => hero.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-glow" />
      <div className="hero-grid" />

      <div className="container hero-container">
        <div className="hero-badge animate-fade-in-up">
          <span className="badge-dot" />
          <span>Introducing Ferios v1.0</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>

        <h1 className="hero-title animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Build stunning UIs with
          <br />
          <span className="text-gradient">animated components</span>
        </h1>

        <p className="hero-description animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          An open source collection of high quality, animated, interactive & fully
          customizable React components for building stunning, memorable user interfaces.
        </p>

        <div className="hero-actions animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <button className="btn btn-primary btn-lg hero-btn" onClick={onGetStarted}>
            <span>Get Started</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <button className="btn btn-secondary btn-lg" onClick={handleBrowseComponents}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
            <span>Browse Components</span>
          </button>
        </div>

        <div className="hero-stats animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="stat">
            <span className="stat-value">50+</span>
            <span className="stat-label">Components</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-value">10k+</span>
            <span className="stat-label">GitHub Stars</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-value">100%</span>
            <span className="stat-label">Free & Open</span>
          </div>
        </div>


      </div>

      <div className="hero-gradient-bottom" />
    </section>
  )
}

export default Hero
