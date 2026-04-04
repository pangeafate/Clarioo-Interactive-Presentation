import React from 'react'

export default function Slide4Strategy() {
  return (
    <div className="pdf-slide" style={{ padding: '4rem 6rem' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <p style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-dark)', maxWidth: '900px', margin: '0 auto', lineHeight: '1.5' }}>
          Our goal is to build the bridge: an end-to-end decision system that sits between people and AI agents inside enterprises.<br/><br/>
          We realize that the task is huge. So we are eating this elephant one bite at a time, across three phases. The initial focus is on what is hot now - buy & build decisions in Tech.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '3rem', height: '100%' }}>
        
        {/* Phase 1 Card */}
        <div style={{ flex: 1, borderRadius: '24px', border: '1px solid #fee1cc', padding: '3rem', background: '#fff9f5', position: 'relative' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--pdf-orange)', marginBottom: '0.5rem' }}>Phase 1: Decisions to buy (running w/ design partners)</h3>
          <p style={{ fontWeight: 700, marginBottom: '1.5rem' }}>From unstructured evaluation to a managed, evidence-based decision process</p>
          
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1rem', color: 'var(--text-dark)', lineHeight: '1.5' }}>
            <li>Starts from business problem -&gt; defines tailored evaluation criteria</li>
            <li>Automates vendor research and builds side-by-side comparisons</li>
            <li>Aligns stakeholders and orchestrates the decision process</li>
            <li>Vendors enrich data about themself, follow client-defined criteria (pre-demo)</li>
            <li>Captures all decisions as structured, reusable decision memory</li>
          </ul>
        </div>

        {/* Phase 2 Card */}
        <div style={{ flex: 1, borderRadius: '24px', border: '1px solid #e5e7eb', padding: '3rem', background: 'var(--pdf-gray)' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '0.5rem' }}>
            Phase 2: Decisions to build (in Progress)
          </h3>
          <p style={{ fontWeight: 700, marginBottom: '1.5rem' }}>Applies the same system to turn unstructured requests into actionable, prioritized engineering work</p>
          
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1rem', color: 'var(--text-dark)', lineHeight: '1.5' }}>
            <li>Ingests unstructured requests from across the organization</li>
            <li>Translates business needs into clear technical requirements</li>
            <li>Filters, triages, and prioritizes incoming initiatives</li>
            <li>Routes validated work to the right engineering teams</li>
            <li>Reduces overload on engineering while maintaining responsiveness</li>
            <li>Captures all intent - request - build decisions</li>
          </ul>
        </div>

      </div>

    </div>
  )
}
