import React from 'react'

export default function Slide5Vision() {
  return (
    <div className="slide">
      <div className="slide-header">
        <span className="uppercase-label">Phase 2 & 3 (The Vision)</span>
        <h1>Where <span className="text-purple">Clarioo Gets Next</span></h1>
        <p>The software buying workflow is just the wedge. As Agents become the workforce, they will need a Decision Layer to navigate "legacy" organizations.</p>
      </div>

      <div className="grid-2">
        <div className="card" style={{ borderTop: '4px solid var(--accent-purple)' }}>
          <h2 style={{ fontSize: '1.5rem' }}>Phase 2: Proactive Agents</h2>
          <p className="text-secondary" style={{ marginBottom: '1.5rem' }}>Moving from reactive capture to proactive intervention across Slack and Email.</p>
          
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px' }}>
              <strong style={{ color: 'var(--text-primary)' }}>"Path to Resolution" Harness</strong>
              <p className="text-secondary" style={{ marginTop: '0.25rem', fontSize: '0.875rem' }}>Agents that talk to people (with a light touch) to organically discover networks of power, relations, and implicit decision processes.</p>
            </li>
            <li style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px' }}>
              <strong style={{ color: 'var(--text-primary)' }}>Clarifying Hidden Logic</strong>
              <p className="text-secondary" style={{ marginTop: '0.25rem', fontSize: '0.875rem' }}>Surfacing undocumented "how we do things here" context that normally blocks AI automation.</p>
            </li>
          </ul>
        </div>

        <div className="card" style={{ borderTop: '4px solid var(--accent-amber)' }}>
          <h2 style={{ fontSize: '1.5rem' }}>Phase 3: The Enterprise Brain</h2>
          <p className="text-secondary" style={{ marginBottom: '1.5rem' }}>Infrastructure for company-wide intent ingestion, processing, and exposure.</p>
          
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px' }}>
              <strong style={{ color: 'var(--text-primary)' }}>Wisdom of the Crowds</strong>
              <p className="text-secondary" style={{ marginTop: '0.25rem', fontSize: '0.875rem' }}>Aggregating ground-floor intent data to inform executive strategy.</p>
            </li>
            <li style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px' }}>
              <strong style={{ color: 'var(--text-primary)' }}>Risk-Benefit Simulations</strong>
              <div style={{ padding: '0.5rem', background: 'rgba(0,0,0,0.5)', marginTop: '0.5rem', borderRadius: '4px', fontFamily: 'monospace', fontSize: '0.75rem', color: 'var(--accent-amber)' }}>
                &gt; "I'm introducing a new PMO-agent."<br />
                &gt; Running simulation against mockups of Marketing/Finance agents representing current state.<br />
                &gt; Result: 15% adoption risk due to API conflict.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
