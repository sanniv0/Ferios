// Component data for the components library
export const componentsData = [
  {
    id: 'animated-button',
    name: 'Animated Button',
    description: 'A beautiful gradient button with shimmer animation effect',
    category: 'Buttons',
    preview: 'AnimatedButtonPreview',
    jsCode: `import './AnimatedButton.css'

export const AnimatedButton = ({ 
  children, 
  onClick,
  variant = 'gradient',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg'
  }

  return (
    <button 
      className={\`animated-button \${variant} \${sizeClasses[size]}\`}
      onClick={onClick}
    >
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

.animated-button.btn-sm { padding: 0.5rem 1rem; font-size: 0.75rem; }
.animated-button.btn-md { padding: 0.75rem 1.5rem; font-size: 0.875rem; }
.animated-button.btn-lg { padding: 1rem 2rem; font-size: 1rem; }

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
    id: 'glow-card',
    name: 'Glow Card',
    description: 'Card component with animated gradient border on hover',
    category: 'Cards',
    preview: 'GlowCardPreview',
    jsCode: `import './GlowCard.css'

export const GlowCard = ({ 
  children,
  icon, 
  title, 
  description,
  className = ''
}) => {
  return (
    <div className={\`glow-card \${className}\`}>
      <div className="glow-card-border" />
      <div className="glow-card-content">
        {icon && <div className="glow-icon">{icon}</div>}
        {title && <h4>{title}</h4>}
        {description && <p>{description}</p>}
        {children}
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
}

.glow-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: rgba(139, 92, 246, 0.15);
  color: #8b5cf6;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}

.glow-card-content h4 {
  font-size: 1rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
}

.glow-card-content p {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.5;
}`
  },
  {
    id: 'toggle-switch',
    name: 'Toggle Switch',
    description: 'Smooth animated toggle switch with gradient track',
    category: 'Inputs',
    preview: 'ToggleSwitchPreview',
    jsCode: `import { useState } from 'react'
import './ToggleSwitch.css'

export const ToggleSwitch = ({ 
  defaultChecked = false, 
  onChange,
  disabled = false,
  label
}) => {
  const [checked, setChecked] = useState(defaultChecked)
  
  const handleChange = (e) => {
    if (disabled) return
    setChecked(e.target.checked)
    onChange?.(e.target.checked)
  }
  
  return (
    <label className={\`toggle-switch \${disabled ? 'disabled' : ''}\`}>
      <input 
        type="checkbox" 
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      <span className="toggle-track">
        <span className="toggle-thumb" />
      </span>
      {label && <span className="toggle-label">{label}</span>}
    </label>
  )
}`,
    cssCode: `.toggle-switch {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
}

.toggle-switch.disabled {
  opacity: 0.5;
  cursor: not-allowed;
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
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.toggle-switch input:checked + .toggle-track .toggle-thumb {
  transform: translateX(24px);
}

.toggle-label {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
}`
  },
  {
    id: 'avatar-stack',
    name: 'Avatar Stack',
    description: 'Overlapping avatar group with hover animation',
    category: 'Display',
    preview: 'AvatarStackPreview',
    jsCode: `import './AvatarStack.css'

export const AvatarStack = ({ 
  avatars = [], 
  max = 3,
  size = 'md'
}) => {
  const visible = avatars.slice(0, max)
  const remaining = avatars.length - max
  
  const sizeClasses = {
    sm: 'avatar-sm',
    md: 'avatar-md',
    lg: 'avatar-lg'
  }
  
  return (
    <div className={\`avatar-stack \${sizeClasses[size]}\`}>
      {visible.map((avatar, i) => (
        <div 
          key={i} 
          className="avatar"
          style={{ background: avatar.gradient }}
          title={avatar.name}
        >
          {avatar.image ? (
            <img src={avatar.image} alt={avatar.name} />
          ) : (
            avatar.initials
          )}
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

.avatar-stack.avatar-sm .avatar { width: 32px; height: 32px; font-size: 0.75rem; }
.avatar-stack.avatar-md .avatar { width: 40px; height: 40px; font-size: 0.875rem; }
.avatar-stack.avatar-lg .avatar { width: 48px; height: 48px; font-size: 1rem; }

.avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: 600;
  color: white;
  border: 2px solid #0a0a0f;
  margin-left: -10px;
  transition: all 0.2s ease;
  overflow: hidden;
}

.avatar:first-child {
  margin-left: 0;
}

.avatar:hover {
  transform: translateY(-4px) scale(1.1);
  z-index: 10;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar.more {
  background: #1a1a25;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.75rem;
}`
  },
  {
    id: 'progress-bar',
    name: 'Progress Bar',
    description: 'Animated progress bar with gradient fill and shimmer',
    category: 'Feedback',
    preview: 'ProgressBarPreview',
    jsCode: `import './ProgressBar.css'

export const ProgressBar = ({ 
  value = 0, 
  showLabel = true,
  size = 'md',
  animated = true
}) => {
  const clampedValue = Math.min(100, Math.max(0, value))
  
  const sizeClasses = {
    sm: 'progress-sm',
    md: 'progress-md',
    lg: 'progress-lg'
  }
  
  return (
    <div className={\`progress-wrapper \${sizeClasses[size]}\`}>
      <div className="progress-bar">
        <div className="progress-track">
          <div 
            className={\`progress-fill \${animated ? 'animated' : ''}\`}
            style={{ width: \`\${clampedValue}%\` }} 
          />
        </div>
      </div>
      {showLabel && (
        <span className="progress-label">{clampedValue}%</span>
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

.progress-sm .progress-track { height: 4px; }
.progress-md .progress-track { height: 8px; }
.progress-lg .progress-track { height: 12px; }

.progress-track {
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

.progress-fill.animated::after {
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
  min-width: 45px;
  text-align: right;
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(200%); }
}`
  },
  {
    id: 'notification-badge',
    name: 'Notification Badge',
    description: 'Icon button with animated notification count badge',
    category: 'Display',
    preview: 'NotificationBadgePreview',
    jsCode: `import './NotificationBadge.css'

export const NotificationBadge = ({ 
  icon, 
  count = 0, 
  onClick,
  maxCount = 99,
  variant = 'default'
}) => {
  const displayCount = count > maxCount ? \`\${maxCount}+\` : count
  
  return (
    <button 
      className={\`notification-button \${variant}\`} 
      onClick={onClick}
    >
      {icon}
      {count > 0 && (
        <span className="notification-badge">
          {displayCount}
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
  transition: all 0.2s ease;
}

.notification-button:hover {
  color: white;
  background: rgba(255, 255, 255, 0.08);
  transform: scale(1.05);
}

.notification-button.primary { background: rgba(139, 92, 246, 0.15); }
.notification-button.primary:hover { background: rgba(139, 92, 246, 0.25); }

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
  animation: pulse-badge 2s ease-in-out infinite;
}

@keyframes pulse-badge {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}`
  },
  {
    id: 'skeleton-loader',
    name: 'Skeleton Loader',
    description: 'Animated placeholder for loading content states',
    category: 'Feedback',
    preview: 'SkeletonLoaderPreview',
    jsCode: `import './SkeletonLoader.css'

export const Skeleton = ({ 
  width = '100%',
  height = '1rem',
  variant = 'text',
  className = ''
}) => {
  const variantClasses = {
    text: 'skeleton-text',
    circular: 'skeleton-circular',
    rectangular: 'skeleton-rectangular'
  }
  
  return (
    <div 
      className={\`skeleton \${variantClasses[variant]} \${className}\`}
      style={{ width, height }}
    />
  )
}

export const SkeletonCard = () => (
  <div className="skeleton-card">
    <Skeleton variant="rectangular" height="120px" />
    <div className="skeleton-card-content">
      <Skeleton width="60%" height="1.25rem" />
      <Skeleton width="100%" />
      <Skeleton width="80%" />
    </div>
  </div>
)`,
    cssCode: `.skeleton {
  background: linear-gradient(
    90deg,
    #1a1a25 0%,
    #2a2a35 50%,
    #1a1a25 100%
  );
  background-size: 200% 100%;
  animation: skeleton-pulse 1.5s ease-in-out infinite;
  border-radius: 0.25rem;
}

.skeleton-text {
  border-radius: 0.25rem;
}

.skeleton-circular {
  border-radius: 50%;
}

.skeleton-rectangular {
  border-radius: 0.5rem;
}

.skeleton-card {
  background: #12121a;
  border-radius: 0.75rem;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.skeleton-card-content {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

@keyframes skeleton-pulse {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}`
  },
  {
    id: 'tooltip',
    name: 'Tooltip',
    description: 'Elegant tooltip with smooth fade and position animations',
    category: 'Overlay',
    preview: 'TooltipPreview',
    jsCode: `import { useState } from 'react'
import './Tooltip.css'

export const Tooltip = ({ 
  children, 
  content,
  position = 'top',
  delay = 200
}) => {
  const [visible, setVisible] = useState(false)
  const [timeoutId, setTimeoutId] = useState(null)
  
  const showTooltip = () => {
    const id = setTimeout(() => setVisible(true), delay)
    setTimeoutId(id)
  }
  
  const hideTooltip = () => {
    if (timeoutId) clearTimeout(timeoutId)
    setVisible(false)
  }
  
  return (
    <div 
      className="tooltip-wrapper"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {visible && (
        <div className={\`tooltip tooltip-\${position}\`}>
          {content}
          <div className="tooltip-arrow" />
        </div>
      )}
    </div>
  )
}`,
    cssCode: `.tooltip-wrapper {
  position: relative;
  display: inline-block;
}

.tooltip {
  position: absolute;
  padding: 0.5rem 0.75rem;
  background: #1a1a25;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  font-size: 0.75rem;
  color: white;
  white-space: nowrap;
  z-index: 1000;
  animation: tooltip-fade 0.2s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.tooltip-top {
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
}

.tooltip-bottom {
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
}

.tooltip-left {
  right: calc(100% + 8px);
  top: 50%;
  transform: translateY(-50%);
}

.tooltip-right {
  left: calc(100% + 8px);
  top: 50%;
  transform: translateY(-50%);
}

.tooltip-arrow {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #1a1a25;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transform: rotate(45deg);
}

.tooltip-top .tooltip-arrow {
  bottom: -5px;
  left: 50%;
  margin-left: -4px;
  border-top: none;
  border-left: none;
}

@keyframes tooltip-fade {
  from { opacity: 0; transform: translateX(-50%) translateY(4px); }
  to { opacity: 1; transform: translateX(-50%) translateY(0); }
}`
  },
  {
    id: 'modal',
    name: 'Modal',
    description: 'Elegant modal dialog with smooth entrance animation and overlay backdrop',
    category: 'Overlay',
    preview: 'ModalPreview',
    jsCode: `import { useState, useEffect } from 'react'
import './Modal.css'

export const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children,
  size = 'md',
  showClose = true
}) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="modal-overlay glass-strong" onClick={onClose}>
      <div 
        className={\`modal-container \${size}\`} 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div className="title-wrapper">
            {title && <h3 className="modal-title">{title}</h3>}
          </div>
          {showClose && (
            <button className="close-btn" onClick={onClose}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  )
}`,
    cssCode: `.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1.5rem;
  animation: overlay-fade 0.3s ease-out;
}

.modal-container {
  background: rgba(15, 15, 25, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  width: 100%;
  max-width: 520px;
  box-shadow: 0 32px 64px rgba(0, 0, 0, 0.5);
  animation: modal-bounce 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.modal-container.sm { max-width: 400px; }
.modal-container.lg { max-width: 800px; }

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.modal-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  margin: 0;
}

.close-btn {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
}

.close-btn:hover {
  background: rgba(239, 68, 68, 0.1);
  border-color: rgba(239, 68, 68, 0.2);
  color: #ef4444;
}

.modal-body {
  padding: 2rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

@keyframes overlay-fade {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes modal-bounce {
  from { opacity: 0; transform: scale(0.9) translateY(20px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}
`
  },
  {
    id: 'tabs',
    name: 'Tabs',
    description: 'Animated tab navigation with smooth indicator transitions',
    category: 'Display',
    preview: 'TabsPreview',
    jsCode: `import { useState, useRef, useEffect } from 'react'
import './Tabs.css'

export const Tabs = ({ 
  children, 
  defaultValue,
  variant = 'glass'
}) => {
  const [activeTab, setActiveTab] = useState(defaultValue || children[0]?.props?.value)
  const [indicatorStyle, setIndicatorStyle] = useState({})
  const tabsRef = useRef([])

  useEffect(() => {
    const activeIndex = children.findIndex(tab => tab.props.value === activeTab)
    const activeTabElement = tabsRef.current[activeIndex]
    
    if (activeTabElement) {
      setIndicatorStyle({
        width: activeTabElement.offsetWidth,
        left: activeTabElement.offsetLeft
      })
    }
  }, [activeTab, children])

  return (
    <div className={\`tabs-container \${variant}\`}>
      <div className="tabs-list glass">
        <div className="tabs-indicator" style={indicatorStyle} />
        {children.map((tab, index) => (
          <button
            key={tab.props.value}
            ref={el => tabsRef.current[index] = el}
            className={\`tab-trigger \${activeTab === tab.props.value ? 'active' : ''}\`}
            onClick={() => setActiveTab(tab.props.value)}
          >
            {tab.props.icon && <span className="tab-icon">{tab.props.icon}</span>}
            <span className="tab-label">{tab.props.label}</span>
          </button>
        ))}
      </div>
      <div className="tabs-content">
        {children.find(tab => tab.props.value === activeTab)}
      </div>
    </div>
  )
}

export const Tab = ({ value, label, children }) => {
  return <div className="tab-panel animate-fade-in">{children}</div>
}`,
    cssCode: `.tabs {
  display: flex;
  flex-direction: column;
}

.tabs.horizontal {
  flex-direction: column;
}

.tabs.vertical {
  flex-direction: row;
}

.tabs-list {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 0.5rem;
}

.tabs.vertical .tabs-list {
  flex-direction: column;
  border-bottom: none;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 0;
  padding-right: 0.5rem;
  margin-right: 1rem;
  margin-bottom: 0;
}

.tab {
  position: relative;
  background: none;
  border: none;
  padding: 0.75rem 1rem;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;
  z-index: 1;
}

.tab:hover {
  color: rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.05);
}

.tab.active {
  color: white;
}

.tab-indicator {
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(135deg, #8b5cf6, #ec4899);
  border-radius: 2px;
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  z-index: 0;
}

.tab.active .tab-indicator {
  opacity: 1;
}

.tabs.vertical .tab-indicator {
  bottom: 0;
  right: -0.5rem;
  left: auto;
  width: 2px;
  height: 100%;
}

.tab-panel {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
  line-height: 1.6;
}`
  },
  {
    id: 'input-field',
    name: 'Input Field',
    description: 'Modern input field with animated floating label and validation states',
    category: 'Inputs',
    preview: 'InputFieldPreview',
    jsCode: `import { useState } from 'react'
import './InputField.css'

export const InputField = ({ 
  label, 
  placeholder,
  type = 'text',
  value,
  onChange,
  error,
  success,
  disabled = false,
  required = false
}) => {
  const [isFocused, setIsFocused] = useState(false)
  
  const hasValue = value !== undefined && value !== ''
  const showFloatingLabel = isFocused || hasValue

  return (
    <div className={\`input-field \${error ? 'error' : ''} \${success ? 'success' : ''} \${disabled ? 'disabled' : ''}\`}>
      <input
        type={type}
        placeholder={placeholder}
        value={value || ''}
        onChange={onChange}
        disabled={disabled}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="input-control"
      />
      <label 
        className={\`input-label \${showFloatingLabel ? 'floating' : ''}\`}
      >
        {label}
        {required && <span className="required">*</span>}
      </label>
      {error && <div className="input-error">{error}</div>}
      {success && <div className="input-success">{success}</div>}
    </div>
  )
}`,
    cssCode: `.input-field {
  position: relative;
  width: 100%;
}

.input-control {
  width: 100%;
  padding: 0.75rem 1rem;
  padding-top: 1.5rem;
  background: #12121a;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  color: white;
  font-size: 0.875rem;
  transition: all 0.2s ease;
}

.input-control:focus {
  outline: none;
  border-color: #8b5cf6;
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.2);
}

.input-control::placeholder {
  color: transparent;
}

.input-field.error .input-control {
  border-color: #ef4444;
}

.input-field.success .input-control {
  border-color: #10b981;
}

.input-field.disabled .input-control {
  background: #1a1a25;
  opacity: 0.5;
  cursor: not-allowed;
}

.input-label {
  position: absolute;
  top: 0.75rem;
  left: 1rem;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.875rem;
  pointer-events: none;
  transition: all 0.2s ease;
}

.input-label.floating {
  top: 0.25rem;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
}

.required {
  color: #ef4444;
  margin-left: 0.25rem;
}

.input-error {
  color: #ef4444;
  font-size: 0.75rem;
  margin-top: 0.5rem;
  margin-left: 0.25rem;
}

.input-success {
  color: #10b981;
  font-size: 0.75rem;
  margin-top: 0.5rem;
  margin-left: 0.25rem;
}`
  },
  {
    id: 'dropdown',
    name: 'Dropdown',
    description: 'Customizable dropdown menu with smooth animations and multiple options',
    category: 'Inputs',
    preview: 'DropdownPreview',
    jsCode: `import { useState } from 'react'
import './Dropdown.css'

export const Dropdown = ({ 
  options, 
  placeholder = 'Select an option',
  onSelect,
  disabled = false,
  width = 'auto'
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const handleSelect = (option) => {
    setSelectedOption(option)
    onSelect?.(option)
    setIsOpen(false)
  }

  return (
    <div className={\`dropdown \${isOpen ? 'open' : ''} \${disabled ? 'disabled' : ''}\`} style={{ width }}>
      <button 
        className="dropdown-trigger"
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <span className="dropdown-value">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg 
          className={\`dropdown-arrow \${isOpen ? 'rotated' : ''}\`} 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="dropdown-menu">
          {options.map((option, index) => (
            <div
              key={index}
              className="dropdown-option"
              onClick={() => handleSelect(option)}
            >
              {option.icon && <span className="option-icon">{option.icon}</span>}
              <span className="option-label">{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}`,
    cssCode: `.dropdown {
  position: relative;
  width: 100%;
}

.dropdown-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.25rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  color: white;
  font-size: 0.9375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
}

.dropdown-trigger:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(139, 92, 246, 0.5);
  transform: translateY(-1px);
}

.dropdown-trigger:focus {
  outline: none;
  border-color: #8b5cf6;
  box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.2);
}

.dropdown.open .dropdown-trigger {
  border-color: #8b5cf6;
  background: rgba(139, 92, 246, 0.05);
}

.dropdown.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.selected-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.dropdown-value {
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.3s ease;
}

.dropdown.open .dropdown-value,
.selected-content {
  color: white;
}

.dropdown-arrow {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  color: rgba(255, 255, 255, 0.4);
}

.dropdown.open .dropdown-arrow {
  transform: rotate(180deg);
  color: #8b5cf6;
}

.dropdown-menu-wrapper {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  z-index: 1000;
  opacity: 0;
  transform: translateY(10px) scale(0.98);
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.dropdown-menu-wrapper.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
  pointer-events: auto;
}

.dropdown-menu {
  background: rgba(15, 15, 25, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.25rem;
  padding: 0.5rem;
  max-height: 280px;
  overflow-y: auto;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.dropdown-option {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.875rem 1rem;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  border-radius: 0.75rem;
  transition: all 0.2s ease;
}

.dropdown-option:hover {
  background: rgba(255, 255, 255, 0.05);
  color: white;
  padding-left: 1.25rem;
}

.dropdown-option.selected {
  background: rgba(139, 92, 246, 0.1);
  color: #c4b5fd;
}

.option-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  font-size: 1.25rem;
}

.option-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.option-label {
  font-weight: 500;
}

.option-desc {
  font-size: 0.75rem;
  opacity: 0.5;
  margin-top: 0.125rem;
}

.check-icon {
  color: #8b5cf6;
  animation: scale-in 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes scale-in {
  from { transform: scale(0); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.dropdown-menu::-webkit-scrollbar {
  width: 4px;
}

.dropdown-menu::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
}
`
  },
  {
    id: 'accordion',
    name: 'Accordion',
    description: 'Smooth-opening accordion with interactive icons and glassmorphism',
    category: 'Display',
    preview: 'AccordionPreview',
    jsCode: `import { useState } from 'react'
import './Accordion.css'

export const Accordion = ({ 
  items, 
  allowMultiple = false 
}) => {
  const [openIndexes, setOpenIndexes] = useState([0])

  const toggle = (index) => {
    if (allowMultiple) {
      setOpenIndexes(prev => 
        prev.includes(index) 
          ? prev.filter(i => i !== index) 
          : [...prev, index]
      )
    } else {
      setOpenIndexes(prev => prev.includes(index) ? [] : [index])
    }
  }

  return (
    <div className="accordion-wrapper">
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index)
        return (
          <div key={index} className={\`accordion-item glass \${isOpen ? 'active' : ''}\`}>
            <button 
              className="accordion-trigger" 
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              <div className="trigger-content">
                {item.icon && <span className="item-icon">{item.icon}</span>}
                <span className="item-label">{item.title}</span>
              </div>
              <svg 
                className={\`chevron-icon \${isOpen ? 'rotated' : ''}\`} 
                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <div className={\`accordion-content \${isOpen ? 'visible' : ''}\`}>
              <div className="content-inner">
                {item.content}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )`,
    cssCode: `.accordion-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
}

.accordion-item {
  border-radius: 1.25rem;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.accordion-item.active {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(139, 92, 246, 0.3);
}

.accordion-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  transition: all 0.3s;
}

.trigger-content {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.item-icon {
  font-size: 1.25rem;
  opacity: 0.7;
}

.item-label {
  font-size: 1rem;
  font-weight: 600;
}

.chevron-icon {
  color: rgba(255, 255, 255, 0.3);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.accordion-item.active .chevron-icon {
  transform: rotate(180deg);
  color: #8b5cf6;
}

.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
}

.accordion-content.visible {
  max-height: 400px;
  opacity: 1;
}

.content-inner {
  padding: 0 1.5rem 1.5rem 1.5rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9375rem;
  line-height: 1.6;
}
`
  },
  {
    id: 'shimmer-card',
    name: 'Shimmer Card',
    description: 'A premium card with an elegant moving light effect on hover',
    category: 'Cards',
    preview: 'ShimmerCardPreview',
    jsCode: `import './ShimmerCard.css'

export const ShimmerCard = ({ 
  children,
  badge,
  title,
  description
}) => {
  return (
    <div className="shimmer-card glass-strong">
      <div className="shimmer-beam" />
      <div className="card-content">
        {badge && <span className="card-badge">{badge}</span>}
        {title && <h3 className="card-title">{title}</h3>}
        {description && <p className="card-desc">{description}</p>}
        {children}
      </div>
    </div>
  )
}`,
    cssCode: `.shimmer-card {
  position: relative;
  border-radius: 1.5rem;
  padding: 2rem;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.shimmer-card:hover {
  transform: translateY(-4px) scale(1.02);
  border-color: rgba(139, 92, 246, 0.4);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.4);
}

.shimmer-beam {
  position: absolute;
  top: 0;
  left: -150%;
  width: 150%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(139, 92, 246, 0.1),
    rgba(255, 255, 255, 0.1),
    rgba(139, 92, 246, 0.1),
    transparent
  );
  transition: transform 0.8s ease-in-out;
  pointer-events: none;
}

.shimmer-card:hover .shimmer-beam {
  transform: translateX(200%);
}

.card-badge {
  display: inline-block;
  padding: 0.375rem 0.875rem;
  background: rgba(139, 92, 246, 0.15);
  color: #c4b5fd;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.25rem;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.75rem;
}

.card-desc {
  color: rgba(255, 255, 255, 0.6);
  font-size: 1rem;
  line-height: 1.6;
}
`
  }
]

export const categories = [
  { id: 'all', name: 'All Components', icon: 'grid' },
  { id: 'buttons', name: 'Buttons', icon: 'pointer' },
  { id: 'cards', name: 'Cards', icon: 'square' },
  { id: 'inputs', name: 'Inputs', icon: 'toggle' },
  { id: 'display', name: 'Display', icon: 'eye' },
  { id: 'feedback', name: 'Feedback', icon: 'loader' },
  { id: 'overlay', name: 'Overlay', icon: 'layers' }
]

export const getComponentsByCategory = (categoryId) => {
  if (categoryId === 'all') return componentsData
  return componentsData.filter(c => c.category.toLowerCase() === categoryId)
}

export const getComponentById = (id) => {
  return componentsData.find(c => c.id === id)
}
