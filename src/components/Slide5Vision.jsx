import React from 'react'

export default function Slide5Vision() {
  return (
    <div className="slide">
      <div className="slide-header">
        <span className="uppercase-label">Moat</span>
        <h1>Phase 2 & <span className="text-purple">Phase 3</span></h1>
      </div>

      <div className="grid-2">
        <div className="card" style={{ borderTop: '4px solid var(--accent-purple)' }}>
          <h2 style={{ fontSize: '1.5rem' }}>Phase 2:</h2>
          <p className="text-secondary" style={{ marginTop: '1.5rem', lineHeight: '1.8' }}>
            Build for purpose harness for proactive "path to resolution" agents that talk to people (light touch) and discover networks of power and relations, implicit decision processes and logic that we surface in our work
          </p>
        </div>

        <div className="card" style={{ borderTop: '4px solid var(--accent-amber)' }}>
          <h2 style={{ fontSize: '1.5rem' }}>Phase 3:</h2>
          <p className="text-secondary" style={{ marginTop: '1.5rem', lineHeight: '1.8' }}>
            Infrastructure for company-wide ingesting intent / need for decision, processing, exposing & storing it. Driving such things as "wisdom of crowds" and capability to run simulations 
          </p>
          <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.5)', marginTop: '1.5rem', borderRadius: '8px', fontStyle: 'italic', fontSize: '0.875rem', color: 'var(--accent-amber)', lineHeight: '1.6' }}>
            ("I consider introducing a new PMO-agent to Acme Inc, spin Clarion agents (mock-ups of Marketing/Fin/other) that represent current state of Acme Inc. decision flow, and give me the risk-benefit analysis. Here is the PMO-agent API")
          </div>
        </div>
      </div>
    </div>
  )
}
