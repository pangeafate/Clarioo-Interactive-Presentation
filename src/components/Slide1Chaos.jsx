import React from 'react'

export default function Slide1Chaos() {
  return (
    <div className="slide">
      <div className="slide-header" style={{ maxWidth: '900px', margin: '0 auto 3rem auto' }}>
        <span className="uppercase-label">Decision Layer for Human and Agents alike</span>
        <h1 style={{ fontSize: '2.5rem', lineHeight: '1.4' }}>
          Clarioo helps companies make faster, evidence-based decisions
        </h1>
        <p style={{ fontSize: '1.25rem', marginTop: '1.5rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
          by capturing change intent from across the organization (bottom-up, central, and agent-driven) and turning it into a structured, observable decision data usable for people and AI agents alike.
        </p>
      </div>

      <div className="card" style={{ background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, var(--bg-card) 100%)', borderColor: 'var(--accent-cyan)', textAlign: 'center', padding: '3rem' }}>
        <h2 style={{ color: 'var(--accent-cyan)', fontSize: '1.75rem' }}>
          In near future Agents will need Decision Layer to work in "legacy" organisations
        </h2>
      </div>
    </div>
  )
}
