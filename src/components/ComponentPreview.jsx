import './ComponentPreview.css'

// Preview components for each type
const AnimatedButtonPreview = ({ large }) => (
  <button className={`preview-animated-button ${large ? 'large' : ''}`}>
    <span className="btn-content">
      <span>Get Started</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </span>
    <span className="btn-glow" />
  </button>
)

const GlowCardPreview = ({ large }) => (
  <div className={`preview-glow-card ${large ? 'large' : ''}`}>
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
)

const ToggleSwitchPreview = () => (
  <label className="preview-toggle">
    <input type="checkbox" defaultChecked />
    <span className="toggle-track">
      <span className="toggle-thumb" />
    </span>
  </label>
)

const AvatarStackPreview = () => (
  <div className="preview-avatar-stack">
    <div className="avatar" style={{ background: 'linear-gradient(135deg, #8b5cf6, #ec4899)' }}>A</div>
    <div className="avatar" style={{ background: 'linear-gradient(135deg, #06b6d4, #3b82f6)' }}>B</div>
    <div className="avatar" style={{ background: 'linear-gradient(135deg, #10b981, #06b6d4)' }}>C</div>
    <div className="avatar more">+5</div>
  </div>
)

const ProgressBarPreview = ({ large }) => (
  <div className={`preview-progress ${large ? 'large' : ''}`}>
    <div className="progress-track">
      <div className="progress-fill" style={{ width: '75%' }} />
    </div>
    <span className="progress-label">75%</span>
  </div>
)

const NotificationBadgePreview = () => (
  <div className="preview-notification">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
    <span className="notification-badge">3</span>
  </div>
)

const SkeletonLoaderPreview = () => (
  <div className="preview-skeleton-card">
    <div className="skeleton skeleton-rect" />
    <div className="skeleton-content">
      <div className="skeleton skeleton-text" style={{ width: '60%' }} />
      <div className="skeleton skeleton-text" />
      <div className="skeleton skeleton-text" style={{ width: '80%' }} />
    </div>
  </div>
)

const TooltipPreview = () => (
  <div className="preview-tooltip-wrapper">
    <button className="preview-tooltip-trigger">Hover me</button>
    <div className="preview-tooltip">
      Hello! I'm a tooltip
      <div className="tooltip-arrow" />
    </div>
  </div>
)

const ModalPreview = () => (
  <div className="preview-modal">
    <div className="preview-modal-content">
      <div className="preview-modal-header">
        <h4>Sample Modal</h4>
      </div>
      <div className="preview-modal-body">
        <p>This is a modal preview</p>
      </div>
    </div>
  </div>
)

const TabsPreview = () => (
  <div className="preview-tabs">
    <div className="preview-tab-list">
      <button className="preview-tab active">Tab 1</button>
      <button className="preview-tab">Tab 2</button>
      <button className="preview-tab">Tab 3</button>
    </div>
    <div className="preview-tab-content">
      <p>Active tab content</p>
    </div>
  </div>
)

const InputFieldPreview = () => (
  <div className="preview-input-field">
    <input
      type="text"
      placeholder=" "
      className="preview-input-control"
    />
    <label className="preview-input-label">Email Address</label>
  </div>
)

const DropdownPreview = () => (
  <div className="preview-dropdown">
    <button className="preview-dropdown-trigger">
      <span className="preview-dropdown-value">Select Option</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 9l6 6 6-6" />
      </svg>
    </button>
  </div>
)

const AccordionPreview = () => (
  <div className="preview-accordion">
    <div className="preview-accordion-item active">
      <div className="preview-accordion-trigger">
        <span>Item 1</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ transform: 'rotate(180deg)' }}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
      <div className="preview-accordion-content">Content is visible</div>
    </div>
    <div className="preview-accordion-item">
      <div className="preview-accordion-trigger">
        <span>Item 2</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </div>
  </div>
)

const ShimmerCardPreview = () => (
  <div className="preview-shimmer-card">
    <div className="shimmer-beam" />
    <div className="preview-card-content">
      <div className="preview-card-badge">New</div>
      <h4>Bright Card</h4>
      <p>Moving shimmer effect</p>
    </div>
  </div>
)

const ComponentPreview = ({ componentId, large = false }) => {
  const previews = {
    'animated-button': <AnimatedButtonPreview large={large} />,
    'glow-card': <GlowCardPreview large={large} />,
    'toggle-switch': <ToggleSwitchPreview />,
    'avatar-stack': <AvatarStackPreview />,
    'progress-bar': <ProgressBarPreview large={large} />,
    'notification-badge': <NotificationBadgePreview />,
    'skeleton-loader': <SkeletonLoaderPreview />,
    'tooltip': <TooltipPreview />,
    'modal': <ModalPreview />,
    'tabs': <TabsPreview />,
    'input-field': <InputFieldPreview />,
    'dropdown': <DropdownPreview />,
    'accordion': <AccordionPreview />,
    'shimmer-card': <ShimmerCardPreview />
  }

  return (
    <div className="component-preview-wrapper">
      {previews[componentId] || <div className="preview-placeholder">Preview</div>}
    </div>
  )
}

export default ComponentPreview
