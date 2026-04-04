import React from 'react'

export default function Slide3Legacy() {
  return (
    <div className="pdf-slide" style={{ padding: '4rem 6rem' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>
          In near future Agents will need <span style={{ fontWeight: 800 }}>Decision Layer</span> to work in "legacy" organisations
        </h2>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', marginBottom: '5rem' }}>
        
        {/* Left Box */}
        <div style={{ flex: 1, background: 'var(--pdf-gray)', padding: '3rem 2rem', borderRadius: '16px', textAlign: 'center', border: '1px solid #e5e7eb' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏢</div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Human-only organisations</h3>
        </div>

        {/* Center Bridge */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-muted-dark)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Structured Context</span>
          <div style={{ width: '120px', height: '4px', background: 'var(--pdf-blue)', position: 'relative' }}>
            <div style={{ borderTop: '8px solid transparent', borderBottom: '8px solid transparent', borderLeft: '12px solid var(--pdf-blue)', position: 'absolute', right: '-8px', top: '-6px' }}></div>
            <div style={{ borderTop: '8px solid transparent', borderBottom: '8px solid transparent', borderRight: '12px solid var(--pdf-blue)', position: 'absolute', left: '-8px', top: '-6px' }}></div>
          </div>
        </div>

        {/* Right Box */}
        <div style={{ flex: 1, background: 'var(--pdf-gray)', padding: '3rem 2rem', borderRadius: '16px', textAlign: 'center', border: '1px solid #e5e7eb' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤖</div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Hybrid: Human x Agentic organisations</h3>
        </div>

      </div>

      <div style={{ borderTop: '2px dashed #cccccc', position: 'relative', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: 'var(--pdf-white)', padding: '0 1rem', fontWeight: 800, color: 'var(--text-muted-dark)', letterSpacing: '0.1em' }}>TODAY</div>
        
        <div style={{ flex: 1, paddingRight: '2rem' }}>
          <p style={{ fontWeight: 600 }}>Evolution of decisions...</p>
        </div>
        
        <div style={{ flex: 1, paddingLeft: '2rem', borderLeft: '1px solid #eee' }}>
          <p style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Agents only see... 
            <span style={{ color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', borderRadius: '50%', border: '2px solid #ef4444', fontWeight: 'bold', fontSize: '0.75rem' }}>✕</span>
          </p>
        </div>
      </div>

    </div>
  )
}
