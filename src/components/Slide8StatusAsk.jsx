import React from 'react'

export default function Slide8StatusAsk() {
  return (
    <div className="pdf-slide" style={{ padding: '4rem 6rem' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="text-cyan" style={{ fontSize: '2.5rem', fontWeight: 800 }}>
          Current Status & Ask
        </h2>
      </div>

      <div style={{ display: 'flex', gap: '4rem', height: '100%' }}>
        
        {/* Current Status Box */}
        <div className="glass-card" style={{ flex: 1, padding: '3rem', borderLeft: '4px solid var(--accent-cyan) !important' }}>
          <h3 className="text-white" style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '2rem', borderBottom: '2px solid var(--accent-cyan)', paddingBottom: '1rem', display: 'inline-block' }}>
            Current Status
          </h3>
          
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.125rem' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <span className="text-cyan">●</span>
              <span className="text-secondary">Bootstrapped, product live and being tested with clients including large enterprises</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <span className="text-cyan">●</span>
              <span className="text-secondary">Software selection workflow operational: criteria formulation, vendor research, evidence-based comparison, process orchestration</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <span className="text-cyan">●</span>
              <span className="text-secondary">Working with consulting partners who use the tool as prep infrastructure</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <span className="text-cyan">●</span>
              <span className="text-secondary">In process of building the proactive Slack/email agent for Phase 2</span>
            </li>
          </ul>
        </div>

        {/* Ask Box */}
        <div className="glass-card" style={{ flex: 1, padding: '3rem', position: 'relative', overflow: 'hidden', borderLeft: '4px solid var(--accent-emerald) !important' }}>
          <div className="text-emerald" style={{ position: 'absolute', right: '-1rem', top: '-1rem', fontSize: '8rem', opacity: 0.1, fontWeight: 900 }}>$3M</div>
          
          <h3 className="text-emerald" style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            Ask: $3M
          </h3>
          
          <p className="text-white" style={{ fontSize: '1.125rem', marginBottom: '1.5rem', fontWeight: 600 }}>$3M to:</p>

          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.125rem' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <span className="text-emerald">-</span>
              <span className="text-secondary">accelerate agent development, meet corporate infrastructure requirements and create a "wow effect."</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <span className="text-emerald">-</span>
              <span className="text-secondary">Run more parallel pilots with a variety of enterprises (we have a waitlist)</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <span className="text-emerald">-</span>
              <span className="text-secondary">The team can continue bootstrapping on paid contracts with the Phase 1 tool alone, but the full vision - the decision bridge & pro-active agent - requires investment to build at the speed the market window demands.</span>
            </li>
          </ul>
        </div>

      </div>

    </div>
  )
}
