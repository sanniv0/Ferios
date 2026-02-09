import { useState } from 'react'
import './CodePreview.css'

const codeExamples = [
  {
    id: 'button',
    name: 'Button',
    code: `import { Button } from 'ferios'

export default function App() {
  return (
    <Button 
      variant="gradient"
      size="lg"
      onClick={() => console.log('clicked')}
    >
      Click me
    </Button>
  )
}`
  },
  {
    id: 'card',
    name: 'Card',
    code: `import { Card } from 'ferios'

export default function App() {
  return (
    <Card 
      glow 
      hoverable
      className="my-card"
    >
      <Card.Header>
        <h3>Premium Feature</h3>
      </Card.Header>
      <Card.Body>
        <p>Beautiful glow effects</p>
      </Card.Body>
    </Card>
  )
}`
  },
  {
    id: 'modal',
    name: 'Modal',
    code: `import { Modal, Button } from 'ferios'
import { useState } from 'react'

export default function App() {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Modal.Title>Welcome</Modal.Title>
        <Modal.Description>
          This is a beautiful modal!
        </Modal.Description>
      </Modal>
    </>
  )
}`
  }
]

const CodePreview = () => {
  const [activeExample, setActiveExample] = useState('button')
  const [copied, setCopied] = useState(false)

  const currentExample = codeExamples.find(e => e.id === activeExample)

  const handleCopy = () => {
    navigator.clipboard.writeText(currentExample.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="code-preview-section" id="docs">
      <div className="container">
        <div className="code-preview-layout">
          <div className="code-preview-content">
            <span className="section-label">Simple API</span>
            <h2 className="section-title">
              Intuitive and
              <br />
              <span className="text-gradient">developer-friendly</span>
            </h2>
            <p className="section-description">
              Copy, paste, and customize. Our components are designed with 
              simplicity in mind, making it easy to integrate into any project.
            </p>

            <div className="example-tabs">
              {codeExamples.map((example) => (
                <button
                  key={example.id}
                  className={`example-tab ${activeExample === example.id ? 'active' : ''}`}
                  onClick={() => setActiveExample(example.id)}
                >
                  {example.name}
                </button>
              ))}
            </div>

            <ul className="feature-list">
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span>TypeScript support out of the box</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span>Fully tree-shakeable</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span>SSR compatible</span>
              </li>
            </ul>
          </div>

          <div className="code-preview-window">
            <div className="code-window">
              <div className="code-window-header">
                <div className="window-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <span className="window-title">{currentExample.name}.jsx</span>
                <button className="copy-code-btn" onClick={handleCopy}>
                  {copied ? (
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
              <div className="code-window-content">
                <pre>
                  <code>{currentExample.code}</code>
                </pre>
              </div>
              <div className="code-window-glow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CodePreview
