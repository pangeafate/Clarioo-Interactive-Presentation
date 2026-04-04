import React from 'react'

export default function Slide1Chaos() {
  return (
    <div className="slide">
      <div className="slide-header">
        <span className="uppercase-label">The Problem Space</span>
        <h1>From chaotic requests to <span className="text-cyan">structured decision tracks</span></h1>
        <p>No system captures change intent. No one triages them. The few that get acted on depend on who shouted loudest — not what matters most.</p>
      </div>

      <div className="grid-2">
        <div className="card">
          <span className="pill amber">RAW REQUEST</span>
          <h3 style={{ marginTop: '1rem', color: 'var(--accent-amber)' }}>The Chaos</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
            <li style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', borderLeft: '3px solid #ef4444' }}>
              <span className="text-secondary" style={{ fontSize: '0.875rem' }}>Via Slack @ 10:14 AM</span>
              <p style={{ marginTop: '0.25rem' }}>"The OMS keeps duplicating orders, engineering says rebuild, but we have 5 vendor RFIs from last year..."</p>
            </li>
            <li style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', borderLeft: '3px solid #ef4444' }}>
              <span className="text-secondary" style={{ fontSize: '0.875rem' }}>Via Email @ 2:30 PM</span>
              <p style={{ marginTop: '0.25rem' }}>"We are losing $2M a year due to failed orders. We need to buy Vendr yesterday. Who is driving this?"</p>
            </li>
            <li style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', borderLeft: '3px solid #ef4444' }}>
              <span className="text-secondary" style={{ fontSize: '0.875rem' }}>Meeting Note @ 4:00 PM</span>
              <p style={{ marginTop: '0.25rem' }}>"Engineering proposed a rebuild 6 months ago. It stalled. What happened?"</p>
            </li>
          </ul>
        </div>

        <div className="card" style={{ borderColor: 'var(--accent-cyan)' }}>
          <span className="pill cyan">STRUCTURED DECISION CARD</span>
          <h3 style={{ marginTop: '1rem', color: 'var(--accent-cyan)' }}>The Clarity</h3>
          <div style={{ marginTop: '1.5rem' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>01 — The Real Problem</h4>
              <ul style={{ paddingLeft: '1rem', marginTop: '0.5rem', color: '#E2E8F0', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <li>Legacy OMS built in-house 8 years ago</li>
                <li>12% order error rate ($2.1M/yr lost revenue)</li>
                <li>3 engineers spend 60% of time on maintenance</li>
              </ul>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>02 — Current State</h4>
              <ul style={{ paddingLeft: '1rem', marginTop: '0.5rem', color: '#E2E8F0', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <li>Custom monolith, manual CSV warehouse sync</li>
                <li>$750K budget earmarked for FY26 systems</li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>03 — Success Looks Like</h4>
              <ul style={{ paddingLeft: '1rem', marginTop: '0.5rem', color: '#E2E8F0', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <li>Order error rate &lt;1%</li>
                <li>API-first, scale to 10x order volume</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
