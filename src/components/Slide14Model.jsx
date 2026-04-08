import React from 'react'

export default function Slide14Model() {
  return (
    <div className="pdf-slide" style={{ padding: '6rem' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="text-white" style={{ fontSize: '3rem', fontWeight: 800 }}>
          (Preliminary) Business Model
        </h2>
        <p className="text-cyan" style={{ fontSize: '1.25rem' }}>Per-use revenue, scaling with decision complexity and depth of integration</p>
      </div>

      <div className="model-cards" style={{ display: 'flex', gap: '3rem', marginBottom: '4rem' }}>
        
        {/* Flow 1 */}
        <div className="glass-card" style={{ flex: 1, position: 'relative', overflow: 'hidden', border: '1px solid var(--accent-emerald) !important' }}>
          <div style={{ position: 'absolute', top: '-2rem', right: '-1rem', fontSize: '10rem', fontWeight: 900, color: 'var(--accent-emerald)', opacity: 0.1 }}>1</div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent-emerald)', marginBottom: '0.5rem' }}>1 Phase</h3>
          <h4 className="text-white" style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>SaaS Decisions Agent that drives decision layer adoption</h4>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', fontStyle: 'italic', margin: '0 0 1.5rem 0' }}>(This is hypothesis in testing)</p>
          <ul className="text-secondary" style={{ paddingLeft: '1.5rem', margin: 0, lineHeight: '1.6', fontSize: '1.125rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li>SaaS Discovery-to-Decision Agent (token-based fee) — captures intent, scores vendors, orchestrates stakeholder alignment</li>
            <li>The agent runs on Clarioo's decision infrastructure: structured paths, evidence assembly, decision memory</li>
            <li>Companies experience the value through the agent — adopt the decision layer infrastructure to develop their own agents</li>
          </ul>
        </div>

        {/* Flow 2 */}
        <div className="glass-card" style={{ flex: 1, position: 'relative', overflow: 'hidden', border: '1px solid #f97316 !important' }}>
          <div style={{ position: 'absolute', top: '-2rem', right: '-1rem', fontSize: '10rem', fontWeight: 900, color: '#f97316', opacity: 0.1 }}>2+</div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f97316', marginBottom: '0.5rem' }}>2+ Phase</h3>
          <h4 className="text-white" style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Client Side: pay-as-you-go revenue</h4>
          <ul className="text-secondary" style={{ paddingLeft: '1.5rem', margin: 0, lineHeight: '1.6', fontSize: '1.125rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li>Free decision memory infrastructure + token pricing for efficient plumbing / agentic scaffolding</li>
            <li>Priced by process complexity, not per-seat</li>
            <li>The system maintains institutional memory that no individual inside the company will sustain</li>
            <li>Value grows with depth of integration</li>
          </ul>
        </div>

      </div>

      <div className="glass-card" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '14rem' }}>
          <h3 className="text-emerald" style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 700 }}>Market size is large and layered</h3>
          <ul className="text-secondary" style={{ paddingLeft: '1.5rem', margin: 0, lineHeight: '1.6', fontSize: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><strong className="text-white">TAM: $1T+</strong> — enterprise decision management, consulting spend, governance, decision support, context graphs</li>
            <li><strong className="text-white">SAM: $40B+</strong> — decision intelligence platforms + change orchestration</li>
            <li><strong className="text-white">SOM: $500M+</strong> — near-term reachable segment</li>
          </ul>
        </div>
        <div style={{ flex: 1, minWidth: '14rem' }}>
          <h3 className="text-emerald" style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 700 }}>Current market signals</h3>
          <ul className="text-secondary" style={{ paddingLeft: '1.5rem', margin: 0, lineHeight: '1.6', fontSize: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>~$500B global consulting market exists largely because decision-making is inefficient</li>
            <li>~$20B+ already allocated to decision management / intelligence platforms</li>
          </ul>
          <h3 className="text-emerald" style={{ fontSize: '1.25rem', marginTop: '1rem', marginBottom: '0.75rem', fontWeight: 700 }}>Structural gap</h3>
          <ul className="text-secondary" style={{ paddingLeft: '1.5rem', margin: 0, lineHeight: '1.6', fontSize: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>~98% of enterprise decisions lack proper infrastructure today</li>
          </ul>
          <h3 className="text-emerald" style={{ fontSize: '1.25rem', marginTop: '1rem', marginBottom: '0.75rem', fontWeight: 700 }}>Direction of demand</h3>
          <ul className="text-secondary" style={{ paddingLeft: '1.5rem', margin: 0, lineHeight: '1.6', fontSize: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>Increasing need for decision structure, memory, governance, and auditability</li>
          </ul>
        </div>
      </div>

    </div>
  )
}
