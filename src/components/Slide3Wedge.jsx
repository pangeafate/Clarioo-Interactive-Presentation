import React from 'react'

export default function Slide3Wedge() {
  return (
    <div className="slide">
      <div className="slide-header">
        <span className="uppercase-label">Phase 1 (The Wedge)</span>
        <h1>Software <span className="text-emerald">Buying Workflow</span></h1>
        <p>A high-value, immediate pain point. We orchestrate the discovery-to-decision software buying process.</p>
      </div>

      <div className="grid-2">
        <div className="card">
          <h2>The Status Quo</h2>
          <p className="text-secondary" style={{ marginBottom: '1.5rem' }}>Manual, highly fragmented procurement processes that rely entirely on back-and-forth emails and stale spreadsheets.</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ padding: '1rem', borderLeft: '2px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)' }}>
              <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Endless Vendor Calls</strong>
              <span className="text-secondary" style={{ fontSize: '0.875rem' }}>Engineers spend hours on repetitive RFI calls answering the same discovery questions.</span>
            </div>
            <div style={{ padding: '1rem', borderLeft: '2px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)' }}>
              <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Static Spreadsheets</strong>
              <span className="text-secondary" style={{ fontSize: '0.875rem' }}>"Feature comparison" matrices that go out of date the day they are created.</span>
            </div>
            <div style={{ padding: '1rem', borderLeft: '2px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)' }}>
              <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Lost Context</strong>
              <span className="text-secondary" style={{ fontSize: '0.875rem' }}>Why did we pick X over Y two years ago? The person who made the decision left the company.</span>
            </div>
          </div>
        </div>

        <div className="card" style={{ borderTop: '4px solid var(--accent-emerald)' }}>
          <h2>The Clarioo Approach</h2>
          <p className="text-secondary" style={{ marginBottom: '1.5rem' }}>Clarioo currently runs the software selection workflow for active corporate partners and consultants.</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 'bold' }}>1</div>
              <div>
                <strong>Criteria Formulation</strong>
                <p className="text-secondary" style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>Agents clarify intent and specs on both sides (buyers/vendors) interactively.</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 'bold' }}>2</div>
              <div>
                <strong>Best Practice Embedded</strong>
                <p className="text-secondary" style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>Discovery-to-decision and business-need-to-tech-specs workflows are directly baked into agent behaviors.</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 'bold' }}>3</div>
              <div>
                <strong>Evidence-Based Comparison</strong>
                <p className="text-secondary" style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>Auto-generates side-by-side matrices mapped against your company's highly specific use-cases.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
