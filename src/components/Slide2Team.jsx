import React from 'react'

export default function Slide2Team() {
  return (
    <div className="pdf-slide dark" style={{ padding: '6rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h2 style={{ color: 'var(--pdf-salmon)', fontSize: '2.5rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Who we are
        </h2>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around', gap: '2rem' }}>
        
        {/* Profile 1 */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ width: '180px', height: '180px', borderRadius: '12px', background: 'rgba(255,255,255,0.1)', marginBottom: '1.5rem' }}></div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Olga</h3>
          <p style={{ color: 'var(--text-muted-light)', lineHeight: '1.5' }}>
            Mercaux / BCG<br />
            Strategy & Scaling
          </p>
        </div>

        {/* Profile 2 */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ width: '180px', height: '180px', borderRadius: '12px', background: 'rgba(255,255,255,0.1)', marginBottom: '1.5rem' }}></div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Andrey</h3>
          <p style={{ color: 'var(--text-muted-light)', lineHeight: '1.5' }}>
            AI / ML Lead<br />
            Technical Architecture
          </p>
        </div>

        {/* Profile 3 */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ width: '180px', height: '180px', borderRadius: '12px', background: 'rgba(255,255,255,0.1)', marginBottom: '1.5rem' }}></div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Serj</h3>
          <p style={{ color: 'var(--text-muted-light)', lineHeight: '1.5' }}>
            BCG / Maersk<br />
            Product & Vision
          </p>
        </div>

      </div>
    </div>
  )
}
