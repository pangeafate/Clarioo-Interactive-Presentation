import React from 'react'

export default function Slide6Ask() {
  return (
    <div className="slide">
      <div className="slide-header">
        <span className="uppercase-label">Traction & Funding</span>
        <h1><span className="text-emerald">Current Status</span> & The Ask</h1>
        <p>We are fully bootstrapped, have a live product testing with large enterprises, and are ready to scale the agentic layer.</p>
      </div>

      <div className="grid-2">
        <div className="card" style={{ background: 'var(--bg-deep-navy)' }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Current Traction <span className="pill emerald">Live Pilot</span>
          </h2>
          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem' }}>
              <strong>Operational Workflows</strong>
              <p className="text-secondary" style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>Phase 1 software selection workflow is live. Criteria formulation, vendor research, and evidence comparisons are actively running.</p>
            </div>
            <div style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem' }}>
              <strong>Consultancy Adopters</strong>
              <p className="text-secondary" style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>Working alongside leading consulting partners using the tool as their prep orchestration infrastructure.</p>
            </div>
            <div>
              <strong>Logo Pipeline (20+)</strong>
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                <span className="pill emerald">Paying Customers</span>
                <span className="pill cyan">Active Pilots</span>
                <span className="pill purple">Vetted Waitlist</span>
              </div>
              <p className="text-secondary" style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>*Specific distribution details provided in data room.</p>
            </div>
          </div>
        </div>

        <div className="card" style={{ borderColor: 'var(--accent-amber)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, right: 0, padding: '2rem', fontSize: '3rem', fontWeight: 800, color: 'var(--accent-amber)', opacity: 0.1 }}>$3M</div>
          
          <h2 className="text-amber">The Ask: $3,000,000</h2>
          <p className="text-secondary" style={{ marginBottom: '1.5rem' }}>To accelerate agent development, hit corporate security baseline, and create the "wow effect" UI.</p>
          
          <div>
            <h4 style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Use of Funds Breakdown</h4>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Runway Provided:</span>
                <strong>18 - 24 Months</strong>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Target Team Size (M12):</span>
                <strong>12 - 15 FTEs</strong>
              </li>
            </ul>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h4 style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>De-risking the Next Round (Milestones)</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
              <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.02)', borderRadius: '6px', fontSize: '0.875rem' }}>
                1. <strong>10+ Active Enterprise Deployments</strong> on Phase 1 buying workflow.
              </div>
              <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.02)', borderRadius: '6px', fontSize: '0.875rem' }}>
                2. <strong>Phase 2 Harness Launch:</strong> Proactive slack/email agents live in beta.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
