import React from 'react'

export default function Slide1Title() {
  return (
    <div className="pdf-slide" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden' }}>
      
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          opacity: 0.15,
          pointerEvents: 'none'
        }}
      >
        <source src={`${import.meta.env.BASE_URL}video/bg_optimized.mp4`} type="video/mp4" />
      </video>

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', maxWidth: '800px', width: '100%' }}>
        
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

        <h2 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 700, 
          color: 'var(--text-primary)', 
          marginTop: '0',
          marginBottom: '1.5rem',
          lineHeight: '1.2'
        }}>
          The Decision Infrastructure for the Agentic Era
        </h2>

        <p style={{ 
          fontSize: '1.25rem', 
          lineHeight: '1.6', 
          color: 'var(--text-secondary)',
          margin: '0 0 2rem 0',
          maxWidth: '96%'
        }}>
          Clarioo captures intent for change across your organization and turns it into structured, evidence-based decisions with clear owners, timelines, and audit trails.
        </p>

        <div style={{
          padding: '0.75rem 1.75rem',
          borderRadius: '2rem',
          background: 'rgba(56, 189, 248, 0.1)',
          border: '1px solid rgba(56, 189, 248, 0.2)',
          display: 'inline-block'
        }}>
          <p style={{ 
            fontSize: '1.1rem', 
            fontWeight: '600',
            color: 'var(--accent-cyan)',
            margin: 0,
            letterSpacing: '0.02em'
          }}>
            The decision layer between your people, AI agents, and systems of record.
          </p>
        </div>

      </div>
    </div>
  )
}
