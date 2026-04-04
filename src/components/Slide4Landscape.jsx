import React from 'react'

export default function Slide4Landscape() {
  return (
    <div className="slide">
      <div className="slide-header">
        <span className="uppercase-label">The Landscape</span>
        <h1>Why Clarioo is <span className="text-cyan">Structurally Different</span></h1>
        <p>Investors ask: What about Vendr, Zylo, Productiv, or internal procurement teams using spreadsheets? Here is why they don't solve the core problem.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        {/* Competitors Row */}
        <div className="grid-3">
          <div className="card" style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.05)' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#f87171' }}>SaaS Management & Procurement</h3>
            <p className="text-secondary" style={{ fontSize: '0.875rem' }}>Vendr, Zylo, Productiv.</p>
            <p style={{ marginTop: '1rem', fontSize: '0.875rem' }}>They optimize what you already decided to buy. They manage shadow IT and renewals, but they don't solve the chaotic <em>discovery-to-decision</em> intelligence gap.</p>
          </div>
          
          <div className="card" style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.05)' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#f87171' }}>Research & Peer Reviews</h3>
            <p className="text-secondary" style={{ fontSize: '0.875rem' }}>Gartner, G2, PeerSpot.</p>
            <p style={{ marginTop: '1rem', fontSize: '0.875rem' }}>They provide generic, static "feature comparisons". They cannot contextualise their knowledge against your highly unique internal architecture, specs, and constraints.</p>
          </div>

          <div className="card" style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.05)' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#f87171' }}>Internal Operations</h3>
            <p className="text-secondary" style={{ fontSize: '0.875rem' }}>Internal teams + Excel.</p>
            <p style={{ marginTop: '1rem', fontSize: '0.875rem' }}>Slow, highly subjective, and completely loses decision context the moment the sheet is closed. Impossible to scale past a few decisions a quarter.</p>
          </div>
        </div>

        {/* The Differentiator */}
        <div className="card" style={{ background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(13, 22, 39, 0.9) 100%)', borderColor: 'var(--accent-cyan)' }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className="pill cyan">THE DIFFERENTIATOR</span>
            Decision-Memory + Agentic Layer
          </h2>
          <div className="grid-2" style={{ marginTop: '1.5rem', gap: '2rem' }}>
            <div>
              <strong className="text-cyan" style={{ display: 'block', marginBottom: '0.5rem' }}>Active Orchestration (The Agentic Layer)</strong>
              <p className="text-secondary" style={{ fontSize: '0.9rem' }}>We use active agents that proactively interact with users to clarify intent, gather missing data, run risk assessments, and model ROI. We do the work, not just manage the workflow.</p>
            </div>
            <div>
              <strong className="text-cyan" style={{ display: 'block', marginBottom: '0.5rem' }}>Persistent Context (Decision Memory)</strong>
              <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Every evaluated option, every stakeholder objection, every technical criteria is saved into a queryable memory. When the next decision happens, Clarioo brings context from every prior choice.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
