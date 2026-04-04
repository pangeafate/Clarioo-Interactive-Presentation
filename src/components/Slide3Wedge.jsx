import React from 'react'

export default function Slide3Wedge() {
  return (
    <div className="slide">
      <div className="slide-header">
        <span className="uppercase-label">March '26</span>
        <h1><span className="text-emerald">Moat: Phase 1</span></h1>
        <p>Clarioo is running software discovery-to-decision process with corporate partners and consultants</p>
      </div>

      <div className="grid-2" style={{ marginTop: '2rem' }}>
        <div className="card" style={{ borderLeft: '4px solid var(--accent-cyan)' }}>
          <h2>● Phase 1a:</h2>
          <p className="text-secondary" style={{ marginTop: '1rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Data enrichment from continuous interactions of buyers & vendors (we continuously clarify intent and specs on both sides)
          </p>
        </div>

        <div className="card" style={{ borderLeft: '4px solid var(--accent-emerald)' }}>
          <h2>● Phase 1b:</h2>
          <p className="text-secondary" style={{ marginTop: '1rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Best practice workflows (discovery-to-decision; business need-to-tech specs) that are embedded into the agent behavior
          </p>
        </div>
      </div>
    </div>
  )
}
