import React from 'react'

export default function Slide7Moat() {
  return (
    <div className="pdf-slide" style={{ padding: '4rem 6rem' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--pdf-navy)' }}>
          The Moat Stack
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '900px', margin: '0 auto' }}>
        
        <div style={{ padding: '2rem', background: '#fff7ed', borderLeft: '8px solid var(--pdf-orange)', borderRadius: '0 12px 12px 0' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#c2410c', marginBottom: '0.5rem' }}>● Phase 1a:</h3>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-dark)' }}>
            Data enrichment from continuous interactions of buyers & vendors (we continuously clarify intent and specs on both sides)
          </p>
        </div>

        <div style={{ padding: '2rem', background: '#fffbeb', borderLeft: '8px solid #fbbf24', borderRadius: '0 12px 12px 0' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#b45309', marginBottom: '0.5rem' }}>● Phase 1b:</h3>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-dark)' }}>
            Best practice workflows (discovery-to-decision; business need-to-tech specs) that are embedded into the agent behavior
          </p>
        </div>

        <div style={{ padding: '2rem', background: '#ecfdf5', borderLeft: '8px solid var(--pdf-green)', borderRadius: '0 12px 12px 0' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#047857', marginBottom: '0.5rem' }}>● Phase 2:</h3>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-dark)' }}>
            Build for purpose harness for proactive "path to resolution" agents that talk to people (light touch) and discover networks of power and relations, implicit decision processes and logic that we surface in our work
          </p>
        </div>

        <div style={{ padding: '2rem', background: '#eff6ff', borderLeft: '8px solid var(--pdf-blue)', borderRadius: '0 12px 12px 0' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1d4ed8', marginBottom: '0.5rem' }}>● Phase 3:</h3>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-dark)' }}>
            Infrastructure for company-wide ingesting intent / need for decision, processing, exposing & storing it. Driving such things as "wisdom of crowds" and capability to run simulations.
          </p>
        </div>

      </div>

    </div>
  )
}
