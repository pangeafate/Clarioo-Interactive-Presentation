import React from 'react'

export default function Slide2CoreLoop() {
  return (
    <div className="slide">
      <div className="slide-header">
        <span className="uppercase-label">The Process</span>
        <h1>The <span className="text-purple">Clarioo Core Loop</span></h1>
        <p>A unified infrastructure that intercepts change intent and orchestrates AI and humans in parallel to reach an evidence-based decision.</p>
      </div>

      <div className="card" style={{ display: 'flex', justifyContent: 'center', padding: '4rem 2rem', background: 'radial-gradient(ellipse at center, rgba(129, 140, 248, 0.1) 0%, transparent 70%)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', width: '100%', position: 'relative' }}>
          
          {/* Vertical Connecting Line */}
          <div style={{ position: 'absolute', left: '50%', top: '2rem', bottom: '2rem', width: '2px', background: 'linear-gradient(to bottom, var(--accent-purple), var(--accent-cyan))', transform: 'translateX(-50%)', zIndex: 0 }}></div>

          {/* Step 1 */}
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <span className="pill purple" style={{ position: 'absolute', top: '-12px' }}>1. Capture Intent</span>
            <h3 style={{ marginTop: '0.5rem' }}>Ingest Bottom-Up Signals</h3>
            <p className="text-secondary" style={{ fontSize: '0.875rem' }}>Listen across Slack, Email, and Meeting Transcripts. Automatically cluster related requests regardless of the channel.</p>
          </div>

          {/* Step 2 */}
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <span className="pill cyan" style={{ position: 'absolute', top: '-12px' }}>2. Data Enrichment</span>
            <h3 style={{ marginTop: '0.5rem' }}>Continuous Alignment</h3>
            <p className="text-secondary" style={{ fontSize: '0.875rem' }}>Agents interact with internal buyers and external vendors. Asking clarifying questions, converting business needs into precise tech specs.</p>
          </div>

          {/* Step 3 */}
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <span className="pill amber" style={{ position: 'absolute', top: '-12px' }}>3. Agentic Evaluation</span>
            <h3 style={{ marginTop: '0.5rem' }}>Parallel Decision Tracks</h3>
            <p className="text-secondary" style={{ fontSize: '0.875rem' }}>Deploy multiple agents (TCO Modeler, API Assessor, Risk Assessor) to build the evidence package silently in the background.</p>
          </div>

          {/* Step 4 */}
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <span className="pill emerald" style={{ position: 'absolute', top: '-12px' }}>4. Decision Memory</span>
            <h3 style={{ marginTop: '0.5rem' }}>Immutable Record</h3>
            <p className="text-secondary" style={{ fontSize: '0.875rem' }}>Record the final decision, rationale, and dissenting views into the enterprise decision memory for future AI contexts.</p>
          </div>

        </div>
      </div>
    </div>
  )
}
