import React from 'react'

export default function Slide8StatusAsk() {
  return (
    <div className="pdf-slide" style={{ padding: '4rem 6rem' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--pdf-navy)' }}>
          Current Status & Ask
        </h2>
      </div>

      <div style={{ display: 'flex', gap: '4rem', height: '100%' }}>
        
        {/* Current Status Box */}
        <div style={{ flex: 1, padding: '3rem', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '2rem', borderBottom: '2px solid var(--pdf-blue)', paddingBottom: '1rem', display: 'inline-block' }}>
            Current Status
          </h3>
          
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.125rem', color: 'var(--text-dark)' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <span style={{ color: 'var(--pdf-blue)' }}>●</span>
              Bootstrapped, product live and being tested with clients including large enterprises
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <span style={{ color: 'var(--pdf-blue)' }}>●</span>
              Software selection workflow operational: criteria formulation, vendor research, evidence-based comparison, process orchestration
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <span style={{ color: 'var(--pdf-blue)' }}>●</span>
              Working with consulting partners who use the tool as prep infrastructure
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <span style={{ color: 'var(--pdf-blue)' }}>●</span>
              In process of building the proactive Slack/email agent for Phase 2
            </li>
          </ul>
        </div>

        {/* Ask Box */}
        <div style={{ flex: 1, padding: '3rem', background: 'var(--pdf-navy)', color: 'var(--pdf-white)', borderRadius: '16px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: '-1rem', top: '-1rem', fontSize: '8rem', color: 'var(--pdf-salmon)', opacity: 0.1, fontWeight: 900 }}>$3M</div>
          
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--pdf-salmon)', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            Ask: $3M
          </h3>
          
          <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', fontWeight: 600 }}>$3M to:</p>

          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.125rem', color: 'var(--text-light)' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <span style={{ color: 'var(--pdf-salmon)' }}>-</span>
              accelerate agent development, meet corporate infrastructure requirements and create a "wow effect."
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <span style={{ color: 'var(--pdf-salmon)' }}>-</span>
              Run more parallel pilots with a variety of enterprises (we have a waitlist)
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <span style={{ color: 'var(--pdf-salmon)' }}>-</span>
              The team can continue bootstrapping on paid contracts with the Phase 1 tool alone, but the full vision - the decision bridge & pro-active agent - requires investment to build at the speed the market window demands.
            </li>
          </ul>
        </div>

      </div>

    </div>
  )
}
