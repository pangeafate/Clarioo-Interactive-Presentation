import React from 'react'

export default function Slide3Legacy() {
  return (
    <div className="pdf-slide" style={{ padding: '4rem 6rem' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>
          In near future Agents will need <span className="text-cyan" style={{ fontWeight: 800 }}>Decision Layer</span> to work in "legacy" organisations
        </h2>
      </div>

      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: '2rem', marginBottom: '4rem' }}>
        
        {/* Left Box */}
        <div className="glass-card" style={{ flex: 1, height: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏢</div>
            <h3 className="text-cyan" style={{ fontSize: '1.25rem', fontWeight: 700 }}>Human-only organisations</h3>
          </div>
          <p className="text-white" style={{ fontWeight: 600, marginBottom: '1rem' }}>Any organisation = set of explicit & implicit decisions</p>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.6' }}>
            <li>Tech stack</li>
            <li>Operating model</li>
            <li>Org Design</li>
            <li>...</li>
          </ul>
        </div>

        {/* Center Bridge */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '4rem', maxWidth: '250px' }}>
          <span className="text-cyan" style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Structured Context</span>
          <div style={{ width: '120px', height: '4px', background: 'var(--accent-cyan)', position: 'relative', marginBottom: '1rem', boxShadow: 'var(--glow-cyan)' }}>
            <div style={{ borderTop: '8px solid transparent', borderBottom: '8px solid transparent', borderLeft: '12px solid var(--accent-cyan)', position: 'absolute', right: '-8px', top: '-6px' }}></div>
            <div style={{ borderTop: '8px solid transparent', borderBottom: '8px solid transparent', borderRight: '12px solid var(--accent-cyan)', position: 'absolute', left: '-8px', top: '-6px' }}></div>
          </div>
          <p style={{ fontSize: '0.875rem', textAlign: 'center', lineHeight: '1.4' }}>
            Decisions are fluid and continuously shape the org. With a decision layer, both humans and agents operate from the same structured context.
          </p>
        </div>

        {/* Right Box */}
        <div className="glass-card" style={{ flex: 1, height: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤖</div>
            <h3 className="text-cyan" style={{ fontSize: '1.25rem', fontWeight: 700 }}>Hybrid: Human x Agentic organisations</h3>
          </div>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.6' }}>
            <li style={{ marginBottom: '0.5rem' }}>SaaS replaced by built-for_purpose agents</li>
            <li style={{ marginBottom: '0.5rem' }}>Many agent providers — not just Google & Microsoft</li>
            <li>Agents differentiate by tasks, models, data, skills</li>
          </ul>
        </div>

      </div>

      <div style={{ borderTop: '2px dashed var(--border-light)', position: 'relative', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="glass-card" style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', padding: '0.25rem 1rem', fontWeight: 800, color: 'var(--accent-cyan)', letterSpacing: '0.1em' }}>TODAY</div>
        
        <div style={{ flex: 1, paddingRight: '2rem' }}>
          <p style={{ fontWeight: 600, fontSize: '1.125rem' }}>Evolution of decisions surpass the evolution of company by 1-5 years</p>
        </div>
        
        <div style={{ flex: 1, paddingLeft: '2rem', borderLeft: '1px solid var(--border-light)' }}>
          <p style={{ fontWeight: 600, fontSize: '1.125rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: '#ef4444', fontWeight: 'bold' }}>X</span>
            Agents only see what is already there - and it's already outdated
          </p>
        </div>
      </div>

    </div>
  )
}
