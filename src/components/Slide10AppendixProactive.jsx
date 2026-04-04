import React from 'react'

export default function Slide10AppendixProactive() {
  return (
    <div className="pdf-slide" style={{ padding: '4rem 6rem', background: '#0a0a1a', color: 'var(--pdf-white)', overflowY: 'auto' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          APPENDIX
        </h2>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--pdf-white)', marginTop: '0.5rem' }}>
          Phase 1 only: Clarioo current buying decision flow (PROACTIVE):
        </h3>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', maxWidth: '900px', margin: '0 auto' }}>
        
        {/* Step 1 */}
        <div style={{ width: '100%', padding: '1.5rem 2rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(74, 144, 226, 0.3)', borderRadius: '8px' }}>
          <h4 style={{ color: 'var(--pdf-blue)', fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem' }}>1. Signals / Triggers</h4>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', margin: 0 }}>(contract renewal dates, vendor news, market shifts, M&A activity, pricing changes, new entrants, internal: org restructure, budget cycle, complaints).</p>
        </div>

        <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1.25rem' }}>↓</div>

        {/* Step 2 */}
        <div style={{ width: '90%', padding: '1.5rem 2rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(74, 144, 226, 0.3)', borderRadius: '8px' }}>
          <h4 style={{ color: 'var(--pdf-blue)', fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem' }}>2. Intelligence Correlation + Enrichment</h4>
          <ul style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', paddingLeft: '1.5rem', margin: 0 }}>
            <li>dedupe + correlate + map to org’s current stack.</li>
            <li>RAG over org intelligence + market intelligence.</li>
          </ul>
        </div>

        <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1.25rem' }}>↓</div>

        {/* Step 3 */}
        <div style={{ width: '80%', padding: '1.5rem 2rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(74, 144, 226, 0.3)', borderRadius: '8px' }}>
          <h4 style={{ color: 'var(--pdf-blue)', fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem' }}>3. Stack Map / Decision Graph</h4>
          <ul style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', paddingLeft: '1.5rem', margin: 0 }}>
            <li>identify impacted decisions + owners + stakeholders.</li>
            <li>surface affected vendors, contracts, and functions.</li>
          </ul>
        </div>

        <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1.25rem' }}>↓</div>

        {/* Step 4 */}
        <div style={{ width: '70%', padding: '1.5rem 2rem', background: 'rgba(251, 191, 36, 0.1)', border: '2px solid #fbbf24', borderRadius: '8px', boxShadow: '0 0 20px rgba(251, 191, 36, 0.2)' }}>
          <h4 style={{ color: '#fbbf24', fontWeight: 800, fontSize: '1.125rem', marginBottom: '0.5rem' }}>4. Re-evaluation Triggered</h4>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', margin: 0 }}>assignment + priority based on impact/urgency (e.g., contract expiring in 60 days = high priority)</p>
        </div>

        <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1.25rem' }}>↓</div>

        {/* Step 5 */}
        <div style={{ width: '85%', padding: '1.5rem 2rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(74, 144, 226, 0.3)', borderRadius: '8px' }}>
          <h4 style={{ color: 'var(--pdf-blue)', fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem' }}>5. Resolution Path (Multiple options)</h4>
          <ul style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', paddingLeft: '1.5rem', margin: 0, gap: '0.5rem', display: 'flex', flexDirection: 'column' }}>
            <li><span style={{ fontWeight: 600, color: 'var(--pdf-white)' }}>if renew as-is:</span> Renewal confirmation -&gt; update contracts + Decision Graph. Notify stakeholders / Slack / Teams / Email.</li>
            <li><span style={{ fontWeight: 600, color: 'var(--pdf-white)' }}>if renegotiate:</span> Vendor Engagement -&gt; validation + new evidence -&gt; approvals + budget review + stakeholder sign-off -&gt; Updated terms -&gt; Decision Graph updated.</li>
            <li><span style={{ fontWeight: 600, color: 'var(--pdf-white)' }}>if replace:</span> New Discovery Flow (Data Flow 1) triggered with pre-loaded context from Decision Graph.</li>
            <li><span style={{ fontWeight: 600, color: 'var(--pdf-white)' }}>if retire:</span> Decommission workflow -&gt; migration plan + stakeholder comms + timeline -&gt; Stack updated + Savings captured.</li>
          </ul>
        </div>

        <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1.25rem' }}>↓</div>

        {/* Step 6 */}
        <div style={{ width: '100%', padding: '1.5rem 2rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(74, 144, 226, 0.3)', borderRadius: '8px' }}>
          <h4 style={{ color: 'var(--pdf-green)', fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem' }}>6. Org Intelligence Updated</h4>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', margin: 0 }}>
            Decision Memory enriched (what changed, why, outcome), Stack health dashboard refreshed, Spend optimization KPIs updated, Future recommendations refined (compounding intelligence).
          </p>
        </div>

      </div>

    </div>
  )
}
