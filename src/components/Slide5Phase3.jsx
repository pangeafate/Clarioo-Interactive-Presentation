import React from 'react'

export default function Slide5Phase3() {
  return (
    <div className="pdf-slide" style={{ padding: '4rem 6rem', display: 'flex', flexDirection: 'column' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--pdf-navy)' }}>
          Phase 3: The Full Decision Layer
        </h2>
      </div>

      <div style={{ display: 'flex', flex: 1, gap: '2rem' }}>
        
        {/* Left Split: Information Sources (Dark) */}
        <div style={{ flex: 1, backgroundColor: '#374151', borderRadius: '16px', padding: '3rem', color: 'var(--text-light)', display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem', borderBottom: '1px solid #4b5563', paddingBottom: '1rem' }}>
            Information Sources
          </h3>
          
          <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.125rem' }}>
              <span style={{ fontSize: '1.5rem' }}>📄</span> Documents & Wikis
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.125rem' }}>
              <span style={{ fontSize: '1.5rem' }}>📧</span> Email Threads
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.125rem' }}>
              <span style={{ fontSize: '1.5rem' }}>💬</span> Slack / Teams Channels
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.125rem' }}>
              <span style={{ fontSize: '1.5rem' }}>🎙️</span> Meeting Transcripts
            </li>
          </ul>

          <div style={{ marginTop: 'auto', paddingTop: '2rem', fontStyle: 'italic', fontSize: '0.875rem', color: '#9ca3af' }}>
            Infrastructure for company-wide ingesting intent / need for decision, processing, exposing & storing it.
          </div>
        </div>

        {/* Right Split: Proactive Decision Secretary (Light) */}
        <div style={{ flex: 1, backgroundColor: 'var(--pdf-white)', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '3rem', color: 'var(--text-dark)', display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem', color: 'var(--pdf-blue)', borderBottom: '1px solid #e5e7eb', paddingBottom: '1rem' }}>
            Proactive Decision Secretary
          </h3>
          
          <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.125rem', fontWeight: 600 }}>
              <span style={{ fontSize: '1.5rem' }}>🗺️</span> Navigate org chart
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.125rem', fontWeight: 600 }}>
              <span style={{ fontSize: '1.5rem' }}>🎯</span> Plot stakeholders
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.125rem', fontWeight: 600 }}>
              <span style={{ fontSize: '1.5rem' }}>🔍</span> Surface implicit logic
            </li>
          </ul>

          <div style={{ marginTop: 'auto', paddingTop: '2rem', fontStyle: 'italic', fontSize: '0.875rem', color: 'var(--text-muted-dark)' }}>
            Driving such things as "wisdom of crowds"
          </div>
        </div>

      </div>

    </div>
  )
}
