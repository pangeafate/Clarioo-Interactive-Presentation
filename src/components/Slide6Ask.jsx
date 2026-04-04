import React from 'react'

export default function Slide6Ask() {
  return (
    <div className="slide">
      <div className="slide-header">
        <span className="uppercase-label">Current Status & Ask</span>
        <h1><span className="text-emerald">Current Status</span></h1>
      </div>

      <div className="grid-2">
        <div className="card" style={{ background: 'var(--bg-deep-navy)' }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Current Status
          </h2>
          <ul style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
            <li>● Bootstrapped, product live and being tested with clients including large enterprises</li>
            <li>● Software selection workflow operational: criteria formulation, vendor research, evidence-based comparison, process orchestration</li>
            <li>● Working with consulting partners who use the tool as prep infrastructure</li>
            <li>● In process of building the proactive Slack/email agent for Phase 2</li>
          </ul>
        </div>

        <div className="card" style={{ borderColor: 'var(--accent-amber)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, right: 0, padding: '2rem', fontSize: '3rem', fontWeight: 800, color: 'var(--accent-amber)', opacity: 0.1 }}>$3M</div>
          
          <h2 className="text-amber">Ask</h2>
          <p style={{ marginTop: '1.5rem', fontWeight: 'bold' }}>$3M to:</p>
          <ul style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
            <li>- accelerate agent development, meet corporate infrastructure requirements and create a "wow effect."</li>
            <li>- Run more parallel pilots with a variety of enterprises (we have a waitlist)</li>
            <li>- The team can continue bootstrapping on paid contracts with the Phase 1 tool alone, but the full vision - the decision bridge & pro-active agent - requires investment to build at the speed the market window demands.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
