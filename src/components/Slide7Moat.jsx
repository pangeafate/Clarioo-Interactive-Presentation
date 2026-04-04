import React from 'react'

export default function Slide7Moat() {
  return (
    <div className="pdf-slide" style={{ padding: '4rem 6rem' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="text-white" style={{ fontSize: '2.5rem', fontWeight: 800 }}>
          The Moat Stack
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '900px', margin: '0 auto' }}>
        
        <div className="glass-card" style={{ padding: '2rem', borderLeft: '4px solid var(--accent-amber) !important' }}>
          <h3 className="text-amber" style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>● Phase 1a:</h3>
          <p className="text-white" style={{ fontSize: '1.125rem' }}>
            Data enrichment from continuous interactions of buyers & vendors (we continuously clarify intent and specs on both sides)
          </p>
        </div>

        <div className="glass-card" style={{ padding: '2rem', borderLeft: '4px solid #fcd34d !important' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fcd34d', marginBottom: '0.5rem' }}>● Phase 1b:</h3>
          <p className="text-white" style={{ fontSize: '1.125rem' }}>
            Best practice workflows (discovery-to-decision; business need-to-tech specs) that are embedded into the agent behavior
          </p>
        </div>

        <div className="glass-card" style={{ padding: '2rem', borderLeft: '4px solid var(--accent-emerald) !important' }}>
          <h3 className="text-emerald" style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>● Phase 2:</h3>
          <p className="text-white" style={{ fontSize: '1.125rem' }}>
            Build for purpose harness for proactive "path to resolution" agents that talk to people (light touch) and discover networks of power and relations, implicit decision processes and logic that we surface in our work
          </p>
        </div>

        <div className="glass-card" style={{ padding: '2rem', borderLeft: '4px solid var(--accent-cyan) !important' }}>
          <h3 className="text-cyan" style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>● Phase 3:</h3>
          <p className="text-white" style={{ fontSize: '1.125rem' }}>
            Infrastructure for company-wide ingesting intent / need for decision, processing, exposing & storing it. Driving such things as "wisdom of crowds" and capability to run simulations.
          </p>
        </div>

      </div>

    </div>
  )
}
