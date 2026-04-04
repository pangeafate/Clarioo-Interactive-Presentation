import React from 'react'

export default function Slide6Simulations() {
  return (
    <div className="pdf-slide" style={{ padding: '4rem 6rem', overflowY: 'auto' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--pdf-navy)' }}>
          The Long-Term Unlock: Simulate Before You Deploy
        </h2>
      </div>

      <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem' }}>
        
        {/* The Problem Box */}
        <div style={{ flex: 1, border: '1px solid #fecaca', borderRadius: '12px', overflow: 'hidden' }}>
          <div style={{ background: '#fee2e2', padding: '1rem', fontWeight: 700, color: '#991b1b' }}>The Problem</div>
          <ul style={{ padding: '1.5rem', paddingLeft: '2.5rem', fontSize: '1rem', color: 'var(--text-dark)', margin: 0 }}>
            <li>3rd party agents are non-deterministic</li>
            <li>You must sandbox / pilot / test</li>
            <li>That makes adoption slow</li>
          </ul>
        </div>

        {/* Infrastructure Box */}
        <div style={{ flex: 1.5, border: '1px solid #fde68a', borderRadius: '12px', overflow: 'hidden' }}>
          <div style={{ background: '#fef3c7', padding: '1rem', fontWeight: 700, color: '#92400e' }}>
            Decision Infrastructure <span style={{ fontWeight: 'normal', fontStyle: 'italic', marginLeft: '0.5rem' }}>(Wisdom of crowds)</span>
          </div>
          <ol style={{ padding: '1.5rem', paddingLeft: '2.5rem', fontSize: '1rem', color: 'var(--text-dark)', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><span style={{ fontWeight: 600 }}>Ingest</span> — Company-wide intent and need-for-decision capture</li>
            <li><span style={{ fontWeight: 600 }}>Process</span> — Map business processes, capture explicit + implicit decision logic</li>
            <li><span style={{ fontWeight: 600 }}>Expose & Store</span> — Structured, searchable decision memory</li>
            <li><span style={{ fontWeight: 600 }}>Simulate</span> — Run what-if scenarios against your org model</li>
          </ol>
        </div>
      </div>
      
      <div style={{ textAlign: 'center', marginBottom: '1.5rem', fontWeight: 800, fontSize: '1.5rem', color: 'var(--pdf-blue)' }}>
        What if you could simulate?
      </div>

      {/* Impact Simulation Box */}
      <div style={{ display: 'flex', gap: '2rem' }}>
        <div style={{ flex: 1, border: '1px solid #bfdbfe', borderRadius: '12px', overflow: 'hidden' }}>
          <div style={{ background: '#dbeafe', padding: '1rem', fontWeight: 700, color: '#1e40af' }}>Impact Simulation</div>
          <div style={{ padding: '1.5rem', fontSize: '1rem', color: 'var(--text-dark)', lineHeight: '1.6' }}>
            <p>I consider introducing a new PMO-agent to Acme Inc.</p>
            <p style={{ marginTop: '0.5rem' }}>Spin Clarioo agents (mock-ups of Marketing / Finance / other departments) that represent current state of Acme Inc. decision flow.</p>
            <p style={{ marginTop: '0.5rem' }}>Give me the risk-benefit analysis.</p>
            <p style={{ marginTop: '0.5rem', fontWeight: 600 }}>Here is the PMO-agent API.</p>
          </div>
        </div>

        <div style={{ flex: 1, border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden', background: '#f8fafc' }}>
          <div style={{ background: '#e2e8f0', padding: '1rem', fontWeight: 700, color: '#475569' }}>What happens:</div>
          <ul style={{ padding: '1.5rem', paddingLeft: '2.5rem', fontSize: '1rem', color: 'var(--text-dark)', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>Thousands of interactions simulated</li>
            <li>Against your internal population, departments, processes</li>
            <li>Risk-benefit analysis before production</li>
            <li>No surprises, no black boxes</li>
          </ul>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem', fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-muted-dark)', fontStyle: 'italic' }}>
        Infrastructure for company-wide ingesting intent, processing decisions, storing organizational wisdom, and running simulations — before anything touches production
      </div>

    </div>
  )
}
