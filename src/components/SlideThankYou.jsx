import React from 'react'

export default function SlideThankYou() {
  return (
    <div className="pdf-slide" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      height: '100%',
      position: 'relative',
      overflow: 'hidden'
    }}>

      {/* Background video — same as title slide */}
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
          opacity: 0.35,
          pointerEvents: 'none'
        }}
      >
        <source src={`${import.meta.env.BASE_URL}video/bg_optimized.mp4`} type="video/mp4" />
      </video>

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem' }}>

        <h1 style={{
          fontSize: '5rem',
          fontWeight: 800,
          background: 'linear-gradient(to right, var(--accent-cyan), var(--accent-purple))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          margin: 0
        }}>
          Thank you
        </h1>

        <p style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          color: 'var(--text-secondary)',
          maxWidth: '40rem',
          lineHeight: 1.5
        }}>
          The decision layer between your people, AI agents, and systems of record.
        </p>


      </div>

    </div>
  )
}
