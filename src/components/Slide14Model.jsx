import React from 'react'

export default function Slide14Model() {
  return (
    <div className="pdf-slide" style={{ padding: '6rem' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--pdf-navy)' }}>
          (Preliminary) Business Model
        </h2>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted-dark)' }}>Two revenue streams, scaling with trust and depth of integration</p>
      </div>

      <div style={{ display: 'flex', gap: '3rem', marginBottom: '4rem' }}>
        
        {/* Flow 1 */}
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden', padding: '3rem', background: '#fff7ed', borderRadius: '16px', border: '1px solid #ffedd5' }}>
          <div style={{ position: 'absolute', top: '-2rem', right: '-1rem', fontSize: '10rem', fontWeight: 900, color: 'var(--pdf-orange)', opacity: 0.1 }}>1</div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--pdf-orange)', marginBottom: '0.5rem' }}>1 Phase</h3>
          <h4 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Vendor Side: Performance Revenue</h4>
          <ul style={{ paddingLeft: '1.5rem', margin: 0, color: 'var(--text-dark)', lineHeight: '1.6', fontSize: '1.125rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li>3-5% of contract value on successful vendor matches</li>
            <li>Clarioo delivers high-intent, criteria-qualified leads to vendors</li>
            <li>Contract range: $50K to $300K+</li>
            <li>This is lead generation with decision context</li>
          </ul>
        </div>

        {/* Flow 2 */}
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden', padding: '3rem', background: '#eff6ff', borderRadius: '16px', border: '1px solid #dbeafe' }}>
          <div style={{ position: 'absolute', top: '-2rem', right: '-1rem', fontSize: '10rem', fontWeight: 900, color: 'var(--pdf-blue)', opacity: 0.1 }}>2+</div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--pdf-blue)', marginBottom: '0.5rem' }}>2+ Phase</h3>
          <h4 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Client Side: Subscription Revenue</h4>
          <ul style={{ paddingLeft: '1.5rem', margin: 0, color: 'var(--text-dark)', lineHeight: '1.6', fontSize: '1.125rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li>Subscription for the decision layer</li>
            <li>Priced by process complexity, not per-seat</li>
            <li>The system maintains institutional memory that no individual inside the company will sustain</li>
            <li>Value grows with depth of integration</li>
          </ul>
        </div>

      </div>

      <div style={{ background: 'var(--pdf-navy)', color: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
        <h3 style={{ color: 'var(--pdf-salmon)', fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 700 }}>Addressable Market</h3>
        <p style={{ fontSize: '1.125rem' }}>We thought about addressable market, but even if we are successful only in the Buy vs Build decision capture, it is huge.</p>
      </div>

    </div>
  )
}
