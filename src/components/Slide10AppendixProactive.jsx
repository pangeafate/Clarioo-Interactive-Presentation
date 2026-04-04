import React from 'react'

export default function Slide10AppendixProactive() {
  return (
    <div className="pdf-slide" style={{ padding: '6rem', background: '#0a0a1a', color: 'var(--pdf-white)' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          APPENDIX
        </h2>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--pdf-white)', marginTop: '0.5rem' }}>
          Phase 1 only: Clarioo current buying decision flow (PROACTIVE):
        </h3>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Waterfall Bar 1 */}
        <div style={{ width: '100%', padding: '1.5rem 2rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(74, 144, 226, 0.3)', borderRadius: '8px', boxShadow: '0 0 15px rgba(74, 144, 226, 0.1)', textAlign: 'center' }}>
          <h4 style={{ color: 'var(--pdf-blue)', fontWeight: 700, fontSize: '1.25rem' }}>Continuous Environment Scanning</h4>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '0.5rem', fontSize: '0.875rem' }}>(Slack channels, internal knowledge bases, email threads)</p>
        </div>

        <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1.5rem' }}>↓</div>

        {/* Waterfall Bar 2 */}
        <div style={{ width: '85%', padding: '1.5rem 2rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(74, 144, 226, 0.3)', borderRadius: '8px', boxShadow: '0 0 15px rgba(74, 144, 226, 0.1)', textAlign: 'center' }}>
          <h4 style={{ color: 'var(--pdf-blue)', fontWeight: 700, fontSize: '1.25rem' }}>Intent Detection & Entity Mapping</h4>
        </div>

        <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1.5rem' }}>↓</div>

        {/* Highlighted Yellow Bar */}
        <div style={{ width: '70%', padding: '1.5rem 2rem', background: 'rgba(251, 191, 36, 0.1)', border: '2px solid #fbbf24', borderRadius: '8px', boxShadow: '0 0 20px rgba(251, 191, 36, 0.2)', textAlign: 'center' }}>
          <h4 style={{ color: '#fbbf24', fontWeight: 800, fontSize: '1.25rem' }}>Re-evaluation Triggered</h4>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginTop: '0.5rem', fontSize: '0.875rem' }}>Agent automatically drafts new comparative analysis against legacy choices</p>
        </div>

        <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1.5rem' }}>↓</div>

        {/* Waterfall Bar 4 */}
        <div style={{ width: '55%', padding: '1.5rem 2rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(74, 144, 226, 0.3)', borderRadius: '8px', boxShadow: '0 0 15px rgba(74, 144, 226, 0.1)', textAlign: 'center' }}>
          <h4 style={{ color: 'var(--pdf-blue)', fontWeight: 700, fontSize: '1.25rem' }}>Human-in-the-Loop Validation</h4>
        </div>

      </div>

    </div>
  )
}
