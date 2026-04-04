import React from 'react'

export default function Slide6Simulations() {
  return (
    <div className="pdf-slide" style={{ padding: '4rem 6rem', overflowY: 'auto' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="text-cyan" style={{ fontSize: '2.5rem', fontWeight: 800 }}>
          The Long-Term Unlock: Simulate Before You Deploy
        </h2>
      </div>

      <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem' }}>
        
        {/* The Problem Box */}
        <div className="glass-card" style={{ flex: 1, padding: '0', overflow: 'hidden', borderLeft: '4px solid #ef4444 !important' }}>
          <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '1rem', fontWeight: 700, color: '#f87171' }}>The Problem</div>
          <ul style={{ padding: '1.5rem', paddingLeft: '2.5rem', fontSize: '1rem', margin: 0 }}>
            <li>3rd party agents are non-deterministic</li>
            <li>You must sandbox / pilot / test</li>
            <li>That makes adoption slow</li>
          </ul>
        </div>

        {/* Infrastructure Box */}
        <div className="glass-card" style={{ flex: 1.5, padding: '0', overflow: 'hidden', borderLeft: '4px solid var(--accent-amber) !important' }}>
          <div style={{ background: 'rgba(245, 158, 11, 0.1)', padding: '1rem', fontWeight: 700, color: 'var(--accent-amber)' }}>
            Decision Infrastructure <span style={{ fontWeight: 'normal', fontStyle: 'italic', marginLeft: '0.5rem', color: 'var(--text-secondary)' }}>(Wisdom of crowds)</span>
          </div>
          <ol style={{ padding: '1.5rem', paddingLeft: '2.5rem', fontSize: '1rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><span className="text-white" style={{ fontWeight: 600 }}>Ingest</span> — Company-wide intent and need-for-decision capture</li>
            <li><span className="text-white" style={{ fontWeight: 600 }}>Process</span> — Map business processes, capture explicit + implicit decision logic</li>
            <li><span className="text-white" style={{ fontWeight: 600 }}>Expose & Store</span> — Structured, searchable decision memory</li>
            <li><span className="text-white" style={{ fontWeight: 600 }}>Simulate</span> — Run what-if scenarios against your org model</li>
          </ol>
        </div>
      </div>
      
      <div className="text-cyan" style={{ textAlign: 'center', marginBottom: '1.5rem', fontWeight: 800, fontSize: '1.5rem' }}>
        What if you could simulate?
      </div>

      {/* Impact Simulation Box */}
      <div style={{ display: 'flex', gap: '2rem' }}>
        <div className="glass-card" style={{ flex: 1, padding: '0', overflow: 'hidden', borderLeft: '4px solid var(--accent-purple) !important' }}>
          <div style={{ background: 'rgba(139, 92, 246, 0.1)', padding: '1rem', fontWeight: 700, color: '#a78bfa' }}>Impact Simulation</div>
          <div style={{ padding: '1.5rem', fontSize: '1rem', lineHeight: '1.6' }}>
            <p>I consider introducing a new PMO-agent to Acme Inc.</p>
            <p style={{ marginTop: '0.5rem' }}>Spin Clarioo agents (mock-ups of Marketing / Finance / other departments) that represent current state of Acme Inc. decision flow.</p>
            <p style={{ marginTop: '0.5rem' }}>Give me the risk-benefit analysis.</p>
            <p className="text-cyan" style={{ marginTop: '0.5rem', fontWeight: 600 }}>Here is the PMO-agent API.</p>
          </div>
        </div>

        <div className="glass-card" style={{ flex: 1, padding: '0', overflow: 'hidden', borderLeft: '4px solid var(--accent-emerald) !important' }}>
          <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '1rem', fontWeight: 700, color: '#34d399' }}>What happens:</div>
          <ul style={{ padding: '1.5rem', paddingLeft: '2.5rem', fontSize: '1rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>Thousands of interactions simulated</li>
            <li>Against your internal population, departments, processes</li>
            <li>Risk-benefit analysis before production</li>
            <li>No surprises, no black boxes</li>
          </ul>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem', fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-muted)', fontStyle: 'italic' }}>
        Infrastructure for company-wide ingesting intent, processing decisions, storing organizational wisdom, and running simulations — before anything touches production
      </div>

    </div>
  )
}
