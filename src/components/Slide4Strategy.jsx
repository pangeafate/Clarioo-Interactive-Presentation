import React from 'react'

export default function Slide4Strategy() {
  return (
    <div className="pdf-slide" style={{ padding: '4rem 6rem' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--pdf-navy)' }}>
          March '26: Clarioo is running software discovery-to-decision process with corporate partners and consultants
        </h2>
      </div>

      <div style={{ display: 'flex', gap: '3rem', height: '100%' }}>
        
        {/* Phase 1 Card */}
        <div style={{ flex: 1, borderRadius: '24px', border: '1px solid #fee1cc', padding: '3rem', background: '#fff9f5', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '2rem', right: '2rem', color: 'var(--pdf-green)', fontSize: '1.5rem' }}>✓</div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--pdf-orange)', marginBottom: '2rem' }}>Phase 1: Decisions to buy</h3>
          
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.125rem', color: 'var(--text-dark)' }}>
            <li>
              <span style={{ fontWeight: 700 }}>Phase 1a: Data enrichment</span> from continuous interactions of buyers & vendors (we continuously clarify intent and specs on both sides)
            </li>
            <li>
              <span style={{ fontWeight: 700 }}>Phase 1b: Best practice workflows</span> (discovery-to-decision; business need-to-tech specs) that are embedded into the agent behavior
            </li>
          </ul>
        </div>

        {/* Phase 2 Card */}
        <div style={{ flex: 1, borderRadius: '24px', border: '1px solid #e5e7eb', padding: '3rem', background: 'var(--pdf-gray)' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '1.25rem' }}>⚙️</span> Phase 2: Decisions to build (in Progress)
          </h3>
          
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.125rem', color: 'var(--text-dark)' }}>
            <li>
              <span style={{ fontWeight: 700 }}>Proactive "path to resolution" harness.</span>
            </li>
            <li>
              Agents that talk to people (light touch) and discover networks of power and relations.
            </li>
            <li>
              Surfacing implicit decision processes and logic in our work.
            </li>
          </ul>
        </div>

      </div>

    </div>
  )
}
