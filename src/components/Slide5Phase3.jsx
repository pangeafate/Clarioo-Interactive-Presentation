import React from 'react'

export default function Slide5Phase3() {
  return (
    <div className="pdf-slide" style={{ padding: '4rem 6rem', display: 'flex', flexDirection: 'column' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--pdf-navy)', marginBottom: '1rem' }}>
          Phase 3: The Full Decision Layer
        </h2>
        <p style={{ fontSize: '1.25rem', fontWeight: 600 }}>Integrating all organizational information into a unified decision and risk system</p>
      </div>

      <div style={{ display: 'flex', flex: 1, gap: '2rem' }}>
        
        {/* Left Split */}
        <div style={{ flex: 1, backgroundColor: '#374151', borderRadius: '16px', padding: '3rem', color: 'var(--text-light)', display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem', borderBottom: '1px solid #4b5563', paddingBottom: '1rem' }}>
            Information Sources
          </h3>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1.125rem' }}>
            <li>Copilots</li>
            <li>Call transcriptions</li>
            <li>Documents</li>
            <li>Agent interactions</li>
            <li>Email & channels (Teams / Slack)</li>
          </ul>
          <div style={{ marginTop: 'auto', paddingTop: '2rem', fontStyle: 'italic', fontSize: '1rem', color: '#9ca3af', lineHeight: '1.5' }}>
            Captures both explicit decisions (documented) and implicit ones (the reasoning that never made it into a doc)
          </div>
        </div>

        {/* Right Split */}
        <div style={{ flex: 1, backgroundColor: 'var(--pdf-white)', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '3rem', color: 'var(--text-dark)', display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--pdf-blue)' }}>
            Proactive Decision Secretary
          </h3>
          <p style={{ fontWeight: 600, color: 'var(--text-muted-dark)', marginBottom: '1.5rem', borderBottom: '1px solid #e5e7eb', paddingBottom: '1rem' }}>Lives in your channels and email</p>
          
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1.125rem' }}>
            <li>Navigates the org chart to find the right people</li>
            <li>Pings the right stakeholders at the right time</li>
            <li>Surfaces hidden context from past decisions</li>
            <li>Asks the questions that reveal tacit knowledge</li>
            <li>Automates the “path to resolution”</li>
          </ul>
        </div>

      </div>

      <div style={{ marginTop: '3rem', padding: '2rem', background: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem', textAlign: 'center' }}>Unified decision & risk system</h3>
        <p style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--text-muted-dark)' }}>Every decision — who made it, why, what alternatives were considered — becomes structured, searchable, reusable organizational memory</p>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', textAlign: 'center', fontSize: '0.875rem' }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700 }}>Explicit decisions</div>
            <div style={{ color: 'var(--text-muted-dark)' }}>Documented choices, approvals, trade-offs</div>
          </div>
          <div style={{ fontWeight: 800, fontSize: '1.5rem' }}>+</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700 }}>Implicit decisions</div>
            <div style={{ color: 'var(--text-muted-dark)' }}>Reasoning, context, tacit knowledge that never made it into a doc</div>
          </div>
          <div style={{ fontWeight: 800, fontSize: '1.5rem' }}>=</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 800, color: 'var(--pdf-blue)' }}>Complete organizational decision memory</div>
          </div>
        </div>
      </div>

    </div>
  )
}
