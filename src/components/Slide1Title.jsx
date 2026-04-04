import React from 'react'

export default function Slide1Title() {
  return (
    <div className="pdf-slide gradient" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', maxWidth: '800px', width: '100%' }}>
        
        {/* Glassmorphism Logo Box */}
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.6)', 
          backdropFilter: 'blur(10px)', 
          borderRadius: '24px', 
          padding: '4rem 6rem', 
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          marginBottom: '4rem'
        }}>
          <h1 style={{ 
            fontSize: '5rem', 
            fontWeight: 800, 
            background: 'linear-gradient(to right, var(--pdf-blue), #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0
          }}>
            Clarioo
          </h1>
        </div>

        {/* Core Text */}
        <p style={{ fontSize: '1.5rem', lineHeight: '1.6', color: 'var(--text-dark)' }}>
          Helping companies make faster, evidence-based decisions by <span style={{ fontWeight: 'bold' }}>capturing change intent from across the organization</span> (bottom-up, central, and agent-driven) and turning it into a structured, observable decision data <span style={{ fontWeight: 'bold' }}>usable for people and AI agents alike.</span>
        </p>

      </div>
    </div>
  )
}
