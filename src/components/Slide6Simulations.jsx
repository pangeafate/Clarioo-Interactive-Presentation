import React from 'react'

export default function Slide6Simulations() {
  return (
    <div className="pdf-slide" style={{ padding: '6rem' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--pdf-navy)' }}>
          Long-Term Unlock: Capability to run simulations
        </h2>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        
        {/* Box 1 */}
        <div style={{ flex: 1, border: '1px solid #fecaca', borderRadius: '12px', overflow: 'hidden' }}>
          <div style={{ background: '#fee2e2', padding: '1rem', fontWeight: 700, textAlign: 'center', color: '#991b1b' }}>
            1. The Problem
          </div>
          <div style={{ padding: '2rem', textAlign: 'center', fontSize: '1.125rem', color: 'var(--text-dark)' }}>
            "I consider introducing a new PMO-agent to Acme Inc."
          </div>
        </div>

        {/* Arrow 1 */}
        <div style={{ padding: '0 1rem', color: '#9ca3af', fontWeight: 800, fontSize: '1.5rem' }}>
          →
        </div>

        {/* Box 2 */}
        <div style={{ flex: 1, border: '1px solid #fde68a', borderRadius: '12px', overflow: 'hidden' }}>
          <div style={{ background: '#fef3c7', padding: '1rem', fontWeight: 700, textAlign: 'center', color: '#92400e' }}>
            2. Decision Infrastructure
          </div>
          <div style={{ padding: '2rem', textAlign: 'center', fontSize: '1.125rem', color: 'var(--text-dark)' }}>
            Spin Clarion agents (mock-ups of Marketing/Fin/other) that represent current state of Acme Inc. decision flow
          </div>
        </div>

        {/* Arrow 2 */}
        <div style={{ padding: '0 1rem', color: '#9ca3af', fontWeight: 800, fontSize: '1.5rem' }}>
          →
        </div>

        {/* Box 3 */}
        <div style={{ flex: 1, border: '1px solid #bfdbfe', borderRadius: '12px', overflow: 'hidden' }}>
          <div style={{ background: '#dbeafe', padding: '1rem', fontWeight: 700, textAlign: 'center', color: '#1e40af' }}>
            3. Impact Simulation
          </div>
          <div style={{ padding: '2rem', textAlign: 'center', fontSize: '1.125rem', color: 'var(--text-dark)' }}>
            Give me the risk-benefit analysis.<br/><br/>
            <span style={{ fontWeight: 600 }}>Here is the PMO-agent API.</span>
          </div>
        </div>

      </div>

    </div>
  )
}
