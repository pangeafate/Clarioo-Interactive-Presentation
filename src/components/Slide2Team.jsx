import React from 'react'

export default function Slide2Team() {
  return (
    <div className="pdf-slide dark" style={{ padding: '4rem 6rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h3 style={{ color: 'var(--pdf-salmon)', fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
          Who we are
        </h3>
        <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem' }}>
          Who we are
        </h2>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-light)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
          Serial b2b founders with 10+ years building, selling and buying software, and 10+ years in AI, ML, and Search. London-based.
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '2rem' }}>
        
        {/* Profile 1 - Olga */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ width: '180px', height: '180px', borderRadius: '12px', background: 'rgba(255,255,255,0.1)', marginBottom: '1.5rem' }}></div>
          <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', alignSelf: 'flex-start' }}>Olga</h3>
          <ul style={{ color: 'var(--text-muted-light)', lineHeight: '1.6', fontSize: '1rem', paddingLeft: '1.25rem', margin: 0, alignSelf: 'flex-start' }}>
            <li style={{ marginBottom: '0.75rem' }}>- Mercaux founder: mid-market and enterprise vertical b2b, $100K-$1M+ ACVs, $25M raised, strategic exit in progress</li>
            <li style={{ marginBottom: '0.75rem' }}>- Ex-BCG, Lehman, Disney</li>
            <li>- Harvard MBA, MSc Physics</li>
          </ul>
        </div>

        {/* Profile 2 - Andrey */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ width: '180px', height: '180px', borderRadius: '12px', background: 'rgba(255,255,255,0.1)', marginBottom: '1.5rem' }}></div>
          <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', alignSelf: 'flex-start' }}>Andrey</h3>
          <ul style={{ color: 'var(--text-muted-light)', lineHeight: '1.6', fontSize: '1rem', paddingLeft: '1.25rem', margin: 0, alignSelf: 'flex-start' }}>
            <li style={{ marginBottom: '0.75rem' }}>- 10+ years in AI/ML</li>
            <li style={{ marginBottom: '0.75rem' }}>- Ex Meta and Mail.ru</li>
            <li style={{ marginBottom: '0.75rem' }}>- Led teams of 50+ AI / ML engineers</li>
            <li>- Co-founder of Fintech AI, tier-1 VC backed</li>
          </ul>
        </div>

        {/* Profile 3 - Serj */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ width: '180px', height: '180px', borderRadius: '12px', background: 'rgba(255,255,255,0.1)', marginBottom: '1.5rem' }}></div>
          <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', alignSelf: 'flex-start' }}>Serj</h3>
          <ul style={{ color: 'var(--text-muted-light)', lineHeight: '1.6', fontSize: '1rem', paddingLeft: '1.25rem', margin: 0, alignSelf: 'flex-start' }}>
            <li style={{ marginBottom: '0.75rem' }}>- AI/ML agency founder since '23 (enterprise clients)</li>
            <li style={{ marginBottom: '0.75rem' }}>- Ex-BCG and Maersk Technology Transformation Lead</li>
            <li>- Commercial leader at 2 scaleups</li>
          </ul>
        </div>

      </div>
    </div>
  )
}
