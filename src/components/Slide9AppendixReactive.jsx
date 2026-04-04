import React from 'react'

export default function Slide9AppendixReactive() {
  return (
    <div className="pdf-slide" style={{ padding: '4rem 6rem', overflowY: 'auto' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="text-secondary" style={{ fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          APPENDIX
        </h2>
        <h3 className="text-white" style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '0.5rem' }}>
          Phase 1 only: Clarioo current buying decision flow (REACTIVE):
        </h3>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 1fr) auto minmax(200px, 1fr) auto minmax(200px, 1fr)', gap: '1rem', alignItems: 'start' }}>
        
        {/* Step 1 */}
        <div className="glass-card" style={{ padding: '1.5rem', border: '1px solid var(--accent-cyan) !important' }}>
          <h4 className="text-cyan" style={{ fontWeight: 800, marginBottom: '0.5rem' }}>1. Functional Leader / CIO</h4>
          <ul style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', paddingLeft: '1rem', margin: 0 }}>
            <li>Inputs: Portal, Slack, Teams, Email</li>
          </ul>
        </div>

        <div className="text-cyan" style={{ fontWeight: 800, fontSize: '1.5rem', marginTop: '1.5rem' }}>→</div>

        {/* Step 2 */}
        <div className="glass-card" style={{ padding: '1.5rem' }}>
          <h4 className="text-white" style={{ fontWeight: 700, marginBottom: '0.5rem' }}>2. Project Created (need + context)</h4>
           <ul style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', paddingLeft: '1rem', margin: 0 }}>
            <li>company context + solution requirements</li>
          </ul>
        </div>

        <div className="text-cyan" style={{ fontWeight: 800, fontSize: '1.5rem', marginTop: '1.5rem' }}>→</div>

        {/* Step 3 */}
        <div className="glass-card" style={{ padding: '1.5rem' }}>
          <h4 className="text-white" style={{ fontWeight: 700, marginBottom: '0.5rem' }}>3. Criteria Generation + Prioritization</h4>
           <ul style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', paddingLeft: '1rem', margin: 0 }}>
            <li style={{ marginBottom: '0.25rem' }}>AI generates 15-20 criteria (feature, technical, business, compliance)</li>
            <li>User reviews, adjusts importance (high/medium/low)</li>
          </ul>
        </div>

        {/* New Row / Wraparound */}
        {/* Step 4 */}
        <div className="glass-card" style={{ padding: '1.5rem', gridColumn: '1 / 2' }}>
          <h4 className="text-white" style={{ fontWeight: 700, marginBottom: '0.5rem' }}>4. Stakeholders invited</h4>
           <ul style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', paddingLeft: '1rem', margin: 0 }}>
            <li>align decision-makers + end-users</li>
          </ul>
        </div>

        <div className="text-cyan" style={{ fontWeight: 800, fontSize: '1.5rem', marginTop: '1.5rem' }}>→</div>

        {/* Step 5 */}
        <div className="glass-card" style={{ padding: '1.5rem', border: '1px solid var(--accent-amber) !important', gridColumn: '3 / 4' }}>
          <h4 className="text-amber" style={{ fontWeight: 800, marginBottom: '0.5rem' }}>5. Demo Booking + Execution</h4>
           <ul style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', paddingLeft: '1rem', margin: 0 }}>
            <li style={{ marginBottom: '0.25rem' }}>prep packets generated per vendor</li>
            <li style={{ marginBottom: '0.25rem' }}>Email / Vendor Portal (outbound requests)</li>
            <li style={{ marginBottom: '0.25rem' }}>Track responses (status: pending / confirmed / denied)</li>
            <li>Backfill comparison matrix with vendor-provided data</li>
          </ul>
        </div>

        <div className="text-cyan" style={{ fontWeight: 800, fontSize: '1.5rem', marginTop: '1.5rem' }}>→</div>

        {/* Step 6 */}
        <div className="glass-card" style={{ padding: '1.5rem', border: '1px solid var(--accent-emerald) !important', gridColumn: '5 / 6' }}>
          <h4 className="text-emerald" style={{ fontWeight: 800, marginBottom: '0.5rem' }}>6. Stakeholder Alignment + Decision</h4>
           <ul style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', paddingLeft: '1rem', margin: 0 }}>
            <li style={{ marginBottom: '0.25rem' }}>evidence-based comparison shared with stakeholders</li>
            <li style={{ marginBottom: '0.25rem' }}>Approvals (decision rights, budget, compliance)</li>
            <li style={{ marginBottom: '0.25rem' }}>Scoring / Recommendation (weighted criteria matrix)</li>
            <li>Decision recorded -&gt; Decision Graph updated</li>
          </ul>
        </div>

      </div>

    </div>
  )
}
