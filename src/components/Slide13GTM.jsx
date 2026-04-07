import React from 'react'
import { Rocket, Megaphone, Briefcase, Globe, PieChart, DollarSign, FlaskConical } from 'lucide-react'

export default function Slide13GTM() {
  return (
    <div className="pdf-slide" style={{ padding: '4rem 6rem' }}>

      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="text-white" style={{ fontSize: '2.6rem', fontWeight: 800 }}>
          Go-to-Market & Wedges
        </h2>
      </div>

      <div className="gtm-columns" style={{ display: 'flex', gap: '3rem' }}>

        {/* Left Side: GTM Timeline */}
        <div style={{ flex: 1 }}>
          <h3 className="text-white" style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Rocket size={28} /> Go-to-Market
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

            {/* NOW */}
            <div className="glass-card" style={{ padding: '1.25rem 1.5rem', borderLeft: '4px solid var(--accent-cyan) !important' }}>
              <div style={{ fontWeight: 800, color: 'var(--accent-cyan)', fontSize: '1.2rem', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Megaphone size={20} /> NOW
              </div>
              <p style={{ lineHeight: 1.5, fontSize: '1rem', color: 'var(--text-secondary)', margin: 0 }}>
                Two parallel motions: (1) <span className="text-white">Founder-led sales</span> directly to enterprise CIOs, Heads of Strategy/Transformation, and VPs of Procurement. (2) Arming <span className="text-white">independent consultants and small firms</span> (2–20 people) with Clarioo as their engagement infrastructure — they deliver a living decision system instead of a slide deck, and the client keeps the platform post-engagement.
              </p>
            </div>

            {/* NEXT */}
            <div className="glass-card" style={{ padding: '1.25rem 1.5rem', borderLeft: '4px solid var(--accent-amber) !important' }}>
              <div style={{ fontWeight: 800, color: 'var(--accent-amber)', fontSize: '1.2rem', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Briefcase size={20} /> NEXT
              </div>
              <p style={{ lineHeight: 1.5, fontSize: '1rem', color: 'var(--text-secondary)', margin: 0 }}>
                <span className="text-white">3–5 paid enterprise pilots</span> + 2–3 consultant partnerships running joint client engagements. Each deal feeds both motions — a direct CIO deal pulls in the consultant; a consultant engagement lands Clarioo inside the client. <span className="text-white">Joint case studies</span> to recruit more partners.
              </p>
            </div>

            {/* THEN */}
            <div className="glass-card" style={{ padding: '1.25rem 1.5rem', borderLeft: '4px solid var(--accent-emerald) !important' }}>
              <div style={{ fontWeight: 800, color: 'var(--accent-emerald)', fontSize: '1.2rem', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Globe size={20} /> THEN
              </div>
              <p style={{ lineHeight: 1.5, fontSize: '1rem', color: 'var(--text-secondary)', margin: 0 }}>
                Full <span className="text-white">decision infrastructure layer</span> for the enterprise. Expand from tech/vendor decisions to all enterprise change decisions — operating model, AI agent governance, transformation portfolio. Decision memory compounds into an <span className="text-white">org-wide decision graph</span> (the data moat).
              </p>
            </div>

          </div>
        </div>

        {/* Right Side: Wedges */}
        <div style={{ flex: 1 }}>
          <h3 className="text-white" style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <PieChart size={28} /> Wedges
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

            {/* Revenue & Budget Capture */}
            <div className="glass-card" style={{ padding: '1.25rem 1.5rem' }}>
              <div className="text-emerald" style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <DollarSign size={20} /> Revenue & Budget Capture
              </div>
              <ul style={{ paddingLeft: '1.25rem', margin: 0, lineHeight: 1.6, fontSize: '1rem', color: 'var(--text-secondary)' }}>
                <li style={{ marginBottom: '0.35rem' }}><span className="text-white">Platform license</span> billed directly to the enterprise client</li>
                <li style={{ marginBottom: '0.35rem' }}>Tapping existing <span className="text-white">transformation, vendor rationalisation, and AI governance</span> budgets</li>
                <li style={{ marginBottom: '0.35rem' }}>Consultant partners get referral credit and co-marketing support</li>
                <li>Every engagement converts to a <span className="text-white">retained platform</span> (recurring revenue)</li>
              </ul>
            </div>

            {/* Current Pilots — unchanged */}
            <div className="glass-card" style={{ padding: '1.25rem 1.5rem' }}>
              <div className="text-cyan" style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FlaskConical size={20} /> Current Pilots
              </div>
              <ul style={{ paddingLeft: '1.25rem', margin: 0, lineHeight: 1.6, fontSize: '1rem', color: 'var(--text-secondary)' }}>
                <li style={{ marginBottom: '0.35rem' }}>Retail — <span className="text-white">"Discovery-to-decision"</span></li>
                <li style={{ marginBottom: '0.35rem' }}>Startups — <span className="text-white">"Buy vs. build assessment"</span></li>
                <li>Transportation — <span className="text-white">"Tech stack analysis-to-discovery"</span></li>
              </ul>

              <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-light)', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                Stakeholders: CIO / CTO, Head of Strategy / Transformation / PMO, VP Procurement
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}
