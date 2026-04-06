import React from 'react'

export default function Slide2Team() {
  return (
    <div
      className="pdf-slide"
      style={{
        padding: '2rem 5rem',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden'
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center' }}>
        <h3 className="text-cyan" style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
          Who we are
        </h3>
        <h2 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '0.6rem' }}>
          Who we are
        </h2>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '760px', margin: '0 auto', lineHeight: '1.5' }}>
          Serial b2b founders with <span className="text-white">10+ years</span> building, selling and buying software, and <span className="text-white">10+ years</span> in AI, ML, and Search. London-based.
        </p>
      </div>

      {/* Profile cards */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '1.25rem' }}>

        {/* Profile 1 - Olga */}
        <div className="glass-card" style={{ width: '18rem', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1.5rem' }}>
          <img src={`${import.meta.env.BASE_URL}team/photo1.png`} alt="Olga" style={{ width: '8.75rem', height: '8.75rem', borderRadius: '12px', objectFit: 'cover', objectPosition: 'center top', marginBottom: '1rem', border: '2px solid var(--accent-cyan)' }} />
          <h3 className="text-cyan" style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.75rem', alignSelf: 'flex-start' }}>Olga</h3>
          <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.45', fontSize: '0.9rem', paddingLeft: '1.1rem', margin: 0, alignSelf: 'flex-start' }}>
            <li style={{ marginBottom: '0.4rem' }}>Mercaux founder: mid-market and enterprise vertical b2b, $100K-$1M+ ACVs, $25M raised, strategic exit in progress</li>
            <li style={{ marginBottom: '0.4rem' }}>Ex-BCG, Lehman, Disney</li>
            <li>Harvard MBA, MSc Physics</li>
          </ul>
        </div>

        {/* Profile 2 - Andrey */}
        <div className="glass-card" style={{ width: '18rem', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1.5rem' }}>
          <img src={`${import.meta.env.BASE_URL}team/photo2.png`} alt="Andrey" style={{ width: '8.75rem', height: '8.75rem', borderRadius: '12px', objectFit: 'cover', objectPosition: 'center top', marginBottom: '1rem', border: '2px solid var(--accent-cyan)' }} />
          <h3 className="text-cyan" style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.75rem', alignSelf: 'flex-start' }}>Andrey</h3>
          <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.45', fontSize: '0.9rem', paddingLeft: '1.1rem', margin: 0, alignSelf: 'flex-start' }}>
            <li style={{ marginBottom: '0.4rem' }}>10+ years in AI/ML</li>
            <li style={{ marginBottom: '0.4rem' }}>Ex Meta and Mail.ru</li>
            <li style={{ marginBottom: '0.4rem' }}>Led teams of 50+ AI / ML engineers</li>
            <li>Co-founder of Fintech AI, tier-1 VC backed</li>
          </ul>
        </div>

        {/* Profile 3 - Sergey */}
        <div className="glass-card" style={{ width: '18rem', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1.5rem' }}>
          <img src={`${import.meta.env.BASE_URL}team/photo3.png`} alt="Sergey" style={{ width: '8.75rem', height: '8.75rem', borderRadius: '12px', objectFit: 'cover', objectPosition: 'center top', marginBottom: '1rem', border: '2px solid var(--accent-cyan)' }} />
          <h3 className="text-cyan" style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.75rem', alignSelf: 'flex-start' }}>Sergey</h3>
          <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.45', fontSize: '0.9rem', paddingLeft: '1.1rem', margin: 0, alignSelf: 'flex-start' }}>
            <li style={{ marginBottom: '0.4rem' }}>AI/ML agency founder since '23 (enterprise clients)</li>
            <li style={{ marginBottom: '0.4rem' }}>Ex-BCG and Maersk Technology Transformation Lead</li>
            <li>Commercial leader at 2 scaleups</li>
          </ul>
        </div>

      </div>

      {/* Punchy status line */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.25rem' }}>
        <div style={{
          padding: '0.75rem 2rem',
          borderRadius: '2rem',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-cyan)',
          boxShadow: 'var(--glow-cyan)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.75rem'
        }}>
          <span style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '0.01em' }}>
            Bootstrapped
          </span>
          <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>→</span>
          <span style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '0.01em' }}>
            product live
          </span>
          <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>→</span>
          <span style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '0.01em' }}>
            running enterprise pilots
          </span>
        </div>
      </div>

    </div>
  )
}
