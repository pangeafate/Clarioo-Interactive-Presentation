import React from 'react'

export default function Slide9AppendixReactive() {
  return (
    <div className="pdf-slide" style={{ padding: '6rem' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-muted-dark)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          APPENDIX
        </h2>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--pdf-navy)', marginTop: '0.5rem' }}>
          Phase 1 only: Clarioo current buying decision flow (REACTIVE):
        </h3>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', marginTop: '6rem', position: 'relative' }}>
        
        {/* Step 1 */}
        <div style={{ padding: '2rem', background: '#eff6ff', border: '2px solid var(--pdf-blue)', borderRadius: '12px', zIndex: 10 }}>
          <h4 style={{ color: 'var(--pdf-blue)', fontWeight: 800, marginBottom: '0.5rem' }}>Functional Leader</h4>
          <span style={{ fontSize: '1.5rem' }}>👤 💬</span>
        </div>

        <div style={{ color: 'var(--pdf-blue)', fontWeight: 800, fontSize: '1.5rem' }}>→</div>

        {/* Step 2 */}
        <div style={{ padding: '2rem', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '12px', zIndex: 10 }}>
          <h4 style={{ color: '#475569', fontWeight: 700 }}>Criteria Generation</h4>
        </div>

        <div style={{ color: 'var(--pdf-blue)', fontWeight: 800, fontSize: '1.5rem' }}>→</div>

        {/* Step 3 */}
        <div style={{ padding: '2rem', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '12px', zIndex: 10 }}>
          <h4 style={{ color: '#475569', fontWeight: 700 }}>Market Intel DB</h4>
        </div>

        <div style={{ color: 'var(--pdf-blue)', fontWeight: 800, fontSize: '1.5rem' }}>→</div>

        {/* Step 4 */}
        <div style={{ padding: '2rem', background: '#fff7ed', border: '2px solid var(--pdf-orange)', borderRadius: '12px', zIndex: 10 }}>
          <h4 style={{ color: 'var(--pdf-orange)', fontWeight: 800 }}>Vendor RFI / Evaluation</h4>
        </div>

        {/* Loop Arrow (simulated with border) */}
        <div style={{ 
          position: 'absolute', 
          top: '-4rem', 
          left: '20%', 
          right: '20%', 
          height: '4rem', 
          borderTop: '3px dashed var(--pdf-orange)', 
          borderLeft: '3px dashed var(--pdf-orange)', 
          borderRight: '3px dashed var(--pdf-orange)', 
          borderRadius: '24px 24px 0 0',
          zIndex: 0
        }}>
          <div style={{ position: 'absolute', top: '-1.5rem', left: '50%', transform: 'translateX(-50%)', background: 'var(--pdf-white)', padding: '0.25rem 1rem', color: 'var(--pdf-orange)', fontWeight: 800, fontSize: '0.875rem' }}>
            Iterative Clarification Loop
          </div>
        </div>

      </div>

    </div>
  )
}
