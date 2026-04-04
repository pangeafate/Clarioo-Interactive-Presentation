import React from 'react'

export default function Slide1Title() {
  return (
    <div className="pdf-slide" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', maxWidth: '800px', width: '100%' }}>
        
        <div className="glass-card" style={{ padding: '4rem 6rem', marginBottom: '4rem', width: '100%' }}>
          <h1 style={{ 
            fontSize: '5rem', 
            fontWeight: 800, 
            background: 'linear-gradient(to right, var(--accent-cyan), var(--accent-purple))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0
          }}>
            Clarioo
          </h1>
        </div>

        <p style={{ fontSize: '1.5rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
          Helping companies make faster, evidence-based decisions by <span style={{ fontWeight: 'bold', color: 'var(--text-primary)' }}>capturing change intent from across the organization</span> (bottom-up, central, and agent-driven) and turning it into a structured, observable decision data <span style={{ fontWeight: 'bold', color: 'var(--text-primary)' }}>usable for people and AI agents alike.</span>
        </p>

      </div>
    </div>
  )
}
