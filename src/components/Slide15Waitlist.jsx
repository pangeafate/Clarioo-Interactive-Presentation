import React, { useState } from 'react'

const waitlistCompanies = [
  { name: 'ALSHAYA GROUP', domain: 'alshaya.com' },
  { name: 'BBC STUDIOS', domain: 'bbcstudios.com' },
  { name: 'asics', domain: 'asics.com' },
  { name: 'Angi', domain: 'angi.com' },
  { name: 'Clarks', domain: 'clarks.com' },
  { name: 'dwelly', domain: 'dwelly.co' },
  { name: 'TOUS', domain: 'tous.com' },
  { name: 'Avolta', domain: 'avoltaworld.com' },
  { name: 'AERONES', domain: 'aerones.com' },
  { name: 'Lululemon', domain: 'lululemon.com' },
  { name: 'CHALHOUB GROUP', domain: 'chalhoubgroup.com' },
  { name: 'MAERSK', domain: 'maersk.com' },
  { name: 'SWAROVSKI', domain: 'swarovski.com' },
  { name: 'Holland&Barrett', domain: 'hollandandbarrett.com' },
  { name: 'TIMES PROPERTY', domain: 'timesproperty.ca' },
  { name: 'bluerock', domain: 'bluerock.com' },
  { name: 'dojo', domain: 'dojo.tech' },
  { name: 'BREITLING', domain: 'breitling.com' },
  { name: 'Orium', domain: 'orium.com' },
  { name: 'Velasca', domain: 'velasca.com' },
  { name: 'BCG', domain: 'bcg.com' },
  { name: 'SANDOZ', domain: 'sandoz.com' }
];

const CompanyLogo = ({ company }) => {
  const [hasError, setHasError] = useState(false);
  
  if (hasError) {
    return (
      <div className="glass-card" style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
        {company.name}
      </div>
    );
  }

  return (
    <div style={{ 
      width: '100px', 
      height: '40px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '0.25rem'
    }}>
      <img 
        src={`https://img.logo.dev/${company.domain}?token=pk_Fvbs8Zl6SWiC5WEoP8Qzbg`} 
        alt={company.name}
        title={company.name}
        style={{ 
          maxWidth: '100%', 
          maxHeight: '100%', 
          objectFit: 'contain'
        }}
        onError={() => setHasError(true)}
      />
    </div>
  );
};

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
        <div style={{ flex: 1.2, display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>
          {waitlistCompanies.map(company => (
            <CompanyLogo key={company.name} company={company} />
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
            <div style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '1rem', color: 'var(--text-muted)' }}>Quote from "Alexander" (Angi):</div>
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
