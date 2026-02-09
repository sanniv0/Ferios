import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Components.css'

const componentsList = [
  {
    name: 'Animated Button',
    category: 'Buttons',
    preview: (
      <div className="demo-button-wrapper">
        <button className="demo-button gradient">
          <span className="btn-content">
            <span>Get Started</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
          <span className="btn-glow" />
        </button>
      </div>
    ),
    jsCode: `import './AnimatedButton.css'

export const AnimatedButton = ({ children, onClick }) => {
  return (
    <button className="animated-button" onClick={onClick}>
      <span className="btn-content">
        {children}
      </span>
      <span className="btn-glow" />
    </button>
  )
}`,
    cssCode: `.animated-button {
  position: relative;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  border: none;
  border-radius: 0.75rem;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
}

.animated-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 30px rgba(139, 92, 246, 0.4);
}

.btn-content {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  z-index: 1;
}

.btn-glow {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(200%); }
}`
  },
  {
    name: 'Glow Card',
    category: 'Cards',
    preview: (
      <div className="demo-glow-card">
        <div className="glow-card-border" />
        <div className="glow-card-content">
          <div className="glow-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <h4>Premium Card</h4>
          <p>Beautiful hover effects</p>
        </div>
      </div>
    ),
    jsCode: `import './GlowCard.css'

export const GlowCard = ({ icon, title, description }) => {
  return (
    <div className="glow-card">
      <div className="glow-card-border" />
      <div className="glow-card-content">
        {icon && <div className="glow-icon">{icon}</div>}
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}`,
    cssCode: `.glow-card {
  position: relative;
  padding: 1px;
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.08);
  transition: all 0.3s ease;
}

.glow-card:hover {
  background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #06b6d4 100%);
}

.glow-card-border {
  position: absolute;
  inset: 0;
  border-radius: 0.75rem;
  background: linear-gradient(135deg, #8b5cf6, #ec4899, #06b6d4);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.glow-card:hover .glow-card-border {
  opacity: 1;
}

.glow-card-content {
  position: relative;
  padding: 1.5rem;
  background: #0a0a0f;
  border-radius: calc(0.75rem - 1px);
  text-align: center;
}

.glow-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(139, 92, 246, 0.15);
  color: #8b5cf6;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
}

.glow-card-content h4 {
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.25rem;
}

.glow-card-content p {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
}`
  },
  {
    name: 'Toggle Switch',
    category: 'Inputs',
    preview: (
      <div className="demo-toggle-wrapper">
        <label className="demo-toggle">
          <input type="checkbox" defaultChecked />
          <span className="toggle-track">
            <span className="toggle-thumb" />
          </span>
        </label>
      </div>
    ),
    jsCode: `import { useState } from 'react'
import './ToggleSwitch.css'

export const ToggleSwitch = ({ defaultChecked, onChange }) => {
  const [checked, setChecked] = useState(defaultChecked)
  
  const handleChange = (e) => {
    setChecked(e.target.checked)
    onChange?.(e.target.checked)
  }
  
  return (
    <label className="toggle-switch">
      <input 
        type="checkbox" 
        checked={checked}
        onChange={handleChange}
      />
      <span className="toggle-track">
        <span className="toggle-thumb" />
      </span>
    </label>
  )
}`,
    cssCode: `.toggle-switch {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.toggle-switch input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-track {
  display: block;
  width: 52px;
  height: 28px;
  background: #1a1a25;
  border-radius: 9999px;
  transition: all 0.3s ease;
}

.toggle-switch input:checked + .toggle-track {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
}

.toggle-thumb {
  position: absolute;
  top: 4px;
  left: 4px;
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.toggle-switch input:checked + .toggle-track .toggle-thumb {
  transform: translateX(24px);
}`
  },
  {
    name: 'Avatar Stack',
    category: 'Display',
    preview: (
      <div className="demo-avatar-stack">
        <div className="avatar" style={{ background: 'linear-gradient(135deg, #8b5cf6, #ec4899)' }}>A</div>
        <div className="avatar" style={{ background: 'linear-gradient(135deg, #06b6d4, #3b82f6)' }}>B</div>
        <div className="avatar" style={{ background: 'linear-gradient(135deg, #10b981, #06b6d4)' }}>C</div>
        <div className="avatar more">+5</div>
      </div>
    ),
    jsCode: `import './AvatarStack.css'

export const AvatarStack = ({ avatars, max = 3 }) => {
  const visible = avatars.slice(0, max)
  const remaining = avatars.length - max
  
  return (
    <div className="avatar-stack">
      {visible.map((avatar, i) => (
        <div 
          key={i} 
          className="avatar"
          style={{ background: avatar.gradient }}
        >
          {avatar.initials}
        </div>
      ))}
      {remaining > 0 && (
        <div className="avatar more">+{remaining}</div>
      )}
    </div>
  )
}`,
    cssCode: `.avatar-stack {
  display: flex;
}

.avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  border: 2px solid #0a0a0f;
  margin-left: -10px;
  transition: all 0.15s ease;
}

.avatar:first-child {
  margin-left: 0;
}

.avatar:hover {
  transform: translateY(-4px);
  z-index: 1;
}

.avatar.more {
  background: #1a1a25;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.75rem;
}`
  },
  {
    name: 'Progress Bar',
    category: 'Feedback',
    preview: (
      <div className="demo-progress-wrapper">
        <div className="demo-progress">
          <div className="progress-track">
            <div className="progress-fill" style={{ width: '75%' }} />
          </div>
        </div>
        <span className="progress-label">75%</span>
      </div>
    ),
    jsCode: `import './ProgressBar.css'

export const ProgressBar = ({ value, showLabel = true }) => {
  return (
    <div className="progress-wrapper">
      <div className="progress-bar">
        <div className="progress-track">
          <div 
            className="progress-fill" 
            style={{ width: \`\${value}%\` }} 
          />
        </div>
      </div>
      {showLabel && (
        <span className="progress-label">{value}%</span>
      )}
    </div>
  )
}`,
    cssCode: `.progress-wrapper {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
}

.progress-bar {
  flex: 1;
}

.progress-track {
  height: 8px;
  background: #1a1a25;
  border-radius: 9999px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #06b6d4 100%);
  border-radius: 9999px;
  transition: width 0.5s ease;
  position: relative;
}

.progress-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  animation: shimmer 2s infinite;
}

.progress-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  min-width: 40px;
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(200%); }
}`
  },
  {
    name: 'Notification Badge',
    category: 'Display',
    preview: (
      <div className="demo-badge-wrapper">
        <div className="demo-notification">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <span className="notification-badge">3</span>
        </div>
      </div>
    ),
    jsCode: `import './NotificationBadge.css'

export const NotificationBadge = ({ icon, count, onClick }) => {
  return (
    <button className="notification-button" onClick={onClick}>
      {icon}
      {count > 0 && (
        <span className="notification-badge">
          {count > 99 ? '99+' : count}
        </span>
      )}
    </button>
  )
}`,
    cssCode: `.notification-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: #1a1a25;
  border: none;
  border-radius: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transition: all 0.15s ease;
}

.notification-button:hover {
  color: white;
  background: rgba(255, 255, 255, 0.06);
}

.notification-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  padding: 0 6px;
  background: #ec4899;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 9999px;
  animation: pulse-glow 2s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
}`
  }
]

const categories = ['All', 'Buttons', 'Cards', 'Inputs', 'Display', 'Feedback']

const Components = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [expandedComponent, setExpandedComponent] = useState(null)
  const [activeCodeTab, setActiveCodeTab] = useState('jsx')
  const [copiedCode, setCopiedCode] = useState(null)

  const filteredComponents = activeCategory === 'All'
    ? componentsList
    : componentsList.filter(c => c.category === activeCategory)

  const handleExpandComponent = (componentName) => {
    if (expandedComponent === componentName) {
      setExpandedComponent(null)
    } else {
      setExpandedComponent(componentName)
      setActiveCodeTab('jsx')
    }
  }

  const handleCopyCode = async (code, type) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedCode(type)
      setTimeout(() => setCopiedCode(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <section className="components-section" id="components">
      <div className="container">
        <div className="components-header">
          <span className="section-label">Components</span>
          <h2 className="section-title">
            Beautiful components, ready to
            <br />
            <span className="text-gradient">copy and paste</span>
          </h2>
          <p className="section-description">
            A collection of beautifully designed, accessible, and customizable
            components that you can copy and paste into your apps.
          </p>
        </div>

        <div className="category-tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-tab ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="components-grid">
          {filteredComponents.map((component, index) => (
            <div
              key={component.name}
              className={`component-card ${expandedComponent === component.name ? 'expanded' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="component-preview">
                {component.preview}
              </div>
              <div className="component-info">
                <span className="component-category">{component.category}</span>
                <h3 className="component-name">{component.name}</h3>
              </div>
              <button
                className="view-code-btn"
                onClick={() => handleExpandComponent(component.name)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
                <span>{expandedComponent === component.name ? 'Hide Code' : 'View Code'}</span>
              </button>

              {expandedComponent === component.name && (
                <div className="code-panel">
                  <div className="code-panel-header">
                    <div className="code-tabs">
                      <button
                        className={`code-tab ${activeCodeTab === 'jsx' ? 'active' : ''}`}
                        onClick={() => setActiveCodeTab('jsx')}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9-.82-.08-1.63-.2-2.4-.36-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-9.82-.26c.27.06.57.11.88.16l-.3-.51-.29-.51c-.11.29-.22.58-.29.86m9.53-4.52c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51.3-.51m-9.24.26c-.27-.06-.57-.11-.88-.16l.3.51.29.51c.11-.29.22-.58.29-.86m6.24-4.04c.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36-.51-2.14-.32-3.61.32-3.96.62-.38 2 .2 3.59 1.7" />
                        </svg>
                        JSX
                      </button>
                      <button
                        className={`code-tab ${activeCodeTab === 'css' ? 'active' : ''}`}
                        onClick={() => setActiveCodeTab('css')}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M5 3l-.65 3.34h13.59L17.5 8.5H3.92l-.66 3.33h13.59l-.76 3.81-5.48 1.81-4.75-1.81.33-1.64H2.85l-.79 4 7.85 3 9.05-3 1.2-6.03.24-1.21L21.94 3H5z" />
                        </svg>
                        CSS
                      </button>
                    </div>
                    <button
                      className="copy-code-btn"
                      onClick={() => handleCopyCode(
                        activeCodeTab === 'jsx' ? component.jsCode : component.cssCode,
                        `${component.name}-${activeCodeTab}`
                      )}
                    >
                      {copiedCode === `${component.name}-${activeCodeTab}` ? (
                        <>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="9" y="9" width="13" height="13" rx="2" />
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                          </svg>
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="code-content">
                    <pre>
                      <code>
                        {activeCodeTab === 'jsx' ? component.jsCode : component.cssCode}
                      </code>
                    </pre>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="components-cta">
          <Link to="/components" className="btn btn-secondary btn-lg">
            <span>View All Components</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Components
