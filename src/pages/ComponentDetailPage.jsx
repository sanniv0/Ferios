import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getComponentById } from '../data/components'
import ComponentPreview from '../components/ComponentPreview'
import './ComponentDetailPage.css'

const ComponentDetailPage = () => {
  const { componentId } = useParams()
  const component = getComponentById(componentId)
  const [activeTab, setActiveTab] = useState('jsx')
  const [copied, setCopied] = useState(null)

  if (!component) {
    return (
      <div className="component-detail-page">
        <div className="not-found">
          <h1>Component Not Found</h1>
          <p>The component you're looking for doesn't exist.</p>
          <Link to="/components" className="back-link">
            Back to Components
          </Link>
        </div>
      </div>
    )
  }

  const handleCopy = async (code, type) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(type)
      setTimeout(() => setCopied(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="component-detail-page">
      {/* Header */}
      <header className="detail-header">
        <Link to="/components" className="back-button">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          <span>Back to Components</span>
        </Link>
      </header>

      <div className="detail-content">
        {/* Left Panel - Preview */}
        <div className="preview-panel">
          <div className="preview-header">
            <span className="preview-category">{component.category}</span>
            <h1 className="preview-title">{component.name}</h1>
            <p className="preview-description">{component.description}</p>
          </div>
          
          <div className="preview-container">
            <div className="preview-window">
              <div className="preview-dots">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
              </div>
              <div className="preview-content">
                <ComponentPreview componentId={componentId} large />
              </div>
            </div>
          </div>

          <div className="preview-actions">
            <button 
              className="action-btn primary"
              onClick={() => handleCopy(component.jsCode + '\n\n/* CSS */\n' + component.cssCode, 'all')}
            >
              {copied === 'all' ? (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2"/>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                  </svg>
                  <span>Copy All Code</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Panel - Code */}
        <div className="code-panel">
          <div className="code-header">
            <div className="code-tabs">
              <button 
                className={`code-tab ${activeTab === 'jsx' ? 'active' : ''}`}
                onClick={() => setActiveTab('jsx')}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a14.98 14.98 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26"/>
                </svg>
                JSX
              </button>
              <button 
                className={`code-tab ${activeTab === 'css' ? 'active' : ''}`}
                onClick={() => setActiveTab('css')}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5 3l-.65 3.34h13.59L17.5 8.5H3.92l-.66 3.33h13.59l-.76 3.81-5.48 1.81-4.75-1.81.33-1.64H2.85l-.79 4 7.85 3 9.05-3 1.2-6.03.24-1.21L21.94 3H5z"/>
                </svg>
                CSS
              </button>
            </div>
            <button 
              className="copy-btn"
              onClick={() => handleCopy(
                activeTab === 'jsx' ? component.jsCode : component.cssCode,
                activeTab
              )}
            >
              {copied === activeTab ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2"/>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                  </svg>
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          <div className="code-content">
            <pre>
              <code>{activeTab === 'jsx' ? component.jsCode : component.cssCode}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComponentDetailPage
