import React from 'react'
import { Rocket, Megaphone, Briefcase, Globe, PieChart, DollarSign, FlaskConical } from 'lucide-react'

export default function Slide13GTM() {
  return (
    <div className="pdf-slide" style={{ padding: '6rem' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h2 className="text-white" style={{ fontSize: '3rem', fontWeight: 800 }}>
          Go-to-Market & Wedges
        </h2>
      </div>

      <div style={{ display: 'flex', gap: '4rem', maxWidth: '75rem', margin: '0 auto' }}>
        
        {/* Left Side: GTM Timeline */}
        <div style={{ flex: 1 }}>
          <h3 className="text-white" style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ display: 'flex', alignItems: 'center' }}><Rocket size={32} /></span> Go-to-Market
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            <div className="glass-card" style={{ paddingLeft: '2rem', borderLeft: '4px solid var(--accent-cyan) !important' }}>
              <div style={{ fontWeight: 800, color: 'var(--accent-cyan)', fontSize: '1.25rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span><Megaphone size={24} /></span> NOW
              </div>
              <p className="text-white" style={{ lineHeight: '1.6' }}>
                Promoting the software decisions tool to consultants and directly to companies.<br/>
                Consultants use Clarioo to do ground work — preparing high-quality, evidence-based discussions before engaging.
              </p>
            </div>

            <div className="glass-card" style={{ paddingLeft: '2rem', borderLeft: '4px solid var(--accent-amber) !important' }}>
              <div style={{ fontWeight: 800, color: 'var(--accent-amber)', fontSize: '1.25rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span><Briefcase size={24} /></span> NEXT
              </div>
              <p className="text-white" style={{ lineHeight: '1.6' }}>
                Sergey and Olga enter engagements as consultants with technology.<br/>
                Leveraging ex-BCG / corporate tech background to help companies navigate vendor selection, agent adoption, and build-vs-buy decisions.
              </p>
            </div>

            <div className="glass-card" style={{ paddingLeft: '2rem', borderLeft: '4px solid var(--accent-emerald) !important' }}>
              <div style={{ fontWeight: 800, color: 'var(--accent-emerald)', fontSize: '1.25rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span><Globe size={24} /></span> THEN
              </div>
              <p className="text-white" style={{ lineHeight: '1.6' }}>
                Expand to the holistic decision platform.<br/>
                Memory, context, and simulation capabilities across all company decisions.
              </p>
            </div>

          </div>
        </div>

        {/* Right Side: Wedges */}
        <div style={{ flex: 1 }}>
          <h3 className="text-white" style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ display: 'flex', alignItems: 'center' }}><PieChart size={32} /></span> Wedges
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Revenue */}
            <div className="glass-card">
              <div className="text-emerald" style={{ fontWeight: 800, fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span><DollarSign size={24} /></span> Revenue & Budget Capture
              </div>
              <ul className="text-secondary" style={{ paddingLeft: '1.5rem', margin: 0, lineHeight: '1.6' }}>
                <li><span className="text-white">Lead generation revenue</span> from vendors</li>
                <li>Tapping into existing technology transformation budgets</li>
                <li>Currently spent on both consultants and software</li>
              </ul>
            </div>

            {/* Pilots */}
            <div className="glass-card">
              <div className="text-cyan" style={{ fontWeight: 800, fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span><FlaskConical size={24} /></span> Current Pilots
              </div>
              <ul className="text-secondary" style={{ paddingLeft: '1.5rem', margin: 0, lineHeight: '1.6' }}>
                <li>Retail — <span className="text-white">“Discovery-to-decision”</span></li>
                <li>Startups — <span className="text-white">“Buy vs. build assessment”</span></li>
                <li>Transportation — <span className="text-white">“Tech stack analysis-to-discovery”</span></li>
              </ul>
              
              <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-light)', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                Stakeholders: CFO (startups), CEO (SMEs), CMO / Head of Procurement (2000+ employees)
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}
