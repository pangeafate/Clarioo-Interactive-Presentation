import React from 'react'

export default function Slide15Waitlist() {
  return (
    <div className="pdf-slide" style={{ padding: '4rem 6rem' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="text-white" style={{ fontSize: '2rem', fontWeight: 800, maxWidth: '800px', margin: '0 auto', lineHeight: '1.4' }}>
          <span className="text-cyan">20+ companies</span> are already in waitlist to be design partners and use Clarioo for real decisions
        </h2>
      </div>

      <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start' }}>
        
        {/* Left: Logo collage image */}
        <div style={{ 
          flex: 1, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          <div style={{ 
            backgroundColor: '#FFFFFF', 
            borderRadius: '24px', 
            padding: '1.5rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            maxWidth: '420px'
          }}>
            <img 
              src={`${import.meta.env.BASE_URL}logos/waitlist-logos.jpg`}
              alt="Waitlist company logos including Alshaya Group, BBC Studios, Asics, Angi, Clarks, Dwelly, TOUS, Avolta, Aerones, Lululemon, Chalhoub Group, Maersk, Swarovski, Holland & Barrett, Times Property Management, Bluerock, Dojo, Breitling, Orium, Velasca, BCG, and Sandoz"
              style={{ 
                width: '100%', 
                height: 'auto', 
                display: 'block',
                borderRadius: '12px'
              }}
            />
          </div>
        </div>

        {/* Right: Quotes */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div className="glass-card" style={{ borderLeft: '4px solid var(--accent-emerald) !important' }}>
            <p className="text-white" style={{ fontStyle: 'italic', fontSize: '1.05rem', marginBottom: '0.75rem' }}>"I haven't yet seen anyone tackling this problem so elegantly. I'll use and my team function will"</p>
            <div className="text-emerald" style={{ fontSize: '0.85rem', fontWeight: 700 }}>CTO, $bn+ company (Responded in less than 12h)</div>
          </div>

          <div className="glass-card" style={{ borderLeft: '4px solid var(--accent-cyan) !important' }}>
            <p className="text-white" style={{ fontStyle: 'italic', fontSize: '1.05rem', marginBottom: '0.75rem' }}>"Sometimes we spend weeks and months just to agree on which features are needed and understand how the vendors are different"</p>
            <div className="text-cyan" style={{ fontSize: '0.85rem', fontWeight: 700 }}>Product Head, $bn+ company</div>
          </div>

          {/* Email mockup */}
          <div className="glass-card" style={{ marginTop: '0.5rem' }}>
            <div style={{ fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.75rem', color: 'var(--text-muted)' }}>Quote from "Alexander" (Angi):</div>
            <p className="text-secondary" style={{ fontSize: '0.8rem', lineHeight: '1.5', fontFamily: 'monospace' }}>
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
