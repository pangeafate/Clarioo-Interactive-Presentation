import React from 'react'

export default function Slide15Waitlist() {
  return (
    <div className="pdf-slide" style={{ padding: '4rem 6rem' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="text-white" style={{ fontSize: '2rem', fontWeight: 800, maxWidth: '800px', margin: '0 auto', lineHeight: '1.4' }}>
          <span className="text-cyan">20+ companies</span> are already in waitlist to be design partners and use Clarioo for real decisions
        </h2>
      </div>

      <div style={{ display: 'flex', gap: '4rem' }}>
        
        {/* Left: Logos */}
        <div style={{ flex: 1, display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>
          {[
            'ALSHAYA GROUP', 'BBC STUDIOS', 'asics', 'Angi', 'Clarks', 'dwelly', 'TOUS', 
            'Avolta', 'AERONES', 'Lululemon', 'CHALHOUB GROUP', 'MAERSK', 'SWAROVSKI', 
            'Holland&Barrett', 'TIMES PROPERTY MGT', 'bluerock', 'dojo', 'BREITLING 1884', 
            'Orium', 'Velasca', 'BCG', 'SANDOZ'
          ].map(logo => (
            <div className="glass-card" key={logo} style={{ padding: '0.5rem 1rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
              {logo}
            </div>
          ))}
        </div>

        {/* Right: Quotes */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div className="glass-card" style={{ borderLeft: '4px solid var(--accent-emerald) !important' }}>
            <p className="text-white" style={{ fontStyle: 'italic', fontSize: '1.125rem', marginBottom: '1rem' }}>“I haven’t yet seen anyone tackling this problem so elegantly. I’ll use and my team function will”</p>
            <div className="text-emerald" style={{ fontSize: '0.875rem', fontWeight: 700 }}>CTO, $bn+ company (Responded in less than 12h)</div>
          </div>

          <div className="glass-card" style={{ borderLeft: '4px solid var(--accent-cyan) !important' }}>
            <p className="text-white" style={{ fontStyle: 'italic', fontSize: '1.125rem', marginBottom: '1rem' }}>”Sometimes we spend weeks and months just to agree on which features are needed and understand how the vendors are different”</p>
            <div className="text-cyan" style={{ fontSize: '0.875rem', fontWeight: 700 }}>Product Head, $bn+ company</div>
          </div>

          {/* Email mockup */}
          <div className="glass-card" style={{ marginTop: '1rem' }}>
            <div style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '1rem', color: 'var(--text-muted)' }}>Quote from "Alexander" (Maersk):</div>
            <p className="text-secondary" style={{ fontSize: '0.875rem', lineHeight: '1.5', fontFamily: 'monospace' }}>
              "Hi Olga,<br/><br/>
              Yes that sounds interesting, hopefully we can replace all the RFI/RFP Excel files and endless PDF files someday! :)<br/><br/>
              Would you mind inviting Michael and Florian — they are also heavily involved in selecting vendors...<br/><br/>
              Please let us know a time and we will let you know if we can join!<br/><br/>
              <span className="text-white">Cheers, Alex"</span>
            </p>
          </div>

        </div>

      </div>

    </div>
  )
}
