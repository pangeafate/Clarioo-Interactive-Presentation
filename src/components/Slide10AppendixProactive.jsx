import React from 'react'
import { Bell, Trash2, Trophy } from 'lucide-react'

export default function Slide10AppendixProactive() {
  return (
    <div className="pdf-slide" style={{ padding: '4rem 6rem', overflowY: 'auto' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="text-secondary" style={{ fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          APPENDIX
        </h2>
        <h3 className="text-white" style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '0.5rem' }}>
          Phase 1 only: Clarioo current buying decision flow (PROACTIVE):
        </h3>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', maxWidth: '900px', margin: '0 auto' }}>
        
        {/* Step 1 */}
        <div className="glass-card" style={{ width: '100%', padding: '1.5rem 2rem' }}>
          <h4 className="text-cyan" style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem' }}>1. Signals / Triggers</h4>
          <p className="text-secondary" style={{ fontSize: '0.875rem', margin: 0 }}>(contract renewal dates, vendor news, market shifts, M&A activity, pricing changes, new entrants, internal: org restructure, budget cycle, complaints).</p>
        </div>

        <div style={{ color: 'var(--border-light)', fontSize: '1.25rem' }}>↓</div>

        {/* Step 2 */}
        <div className="glass-card" style={{ width: '90%', padding: '1.5rem 2rem' }}>
          <h4 className="text-cyan" style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem' }}>2. Intelligence Correlation + Enrichment</h4>
          <ul className="text-secondary" style={{ fontSize: '0.875rem', paddingLeft: '1.5rem', margin: 0 }}>
            <li>dedupe + correlate + map to org’s current stack.</li>
            <li>RAG over org intelligence + market intelligence.</li>
          </ul>
        </div>

        <div style={{ color: 'var(--border-light)', fontSize: '1.25rem' }}>↓</div>

        {/* Step 3 */}
        <div className="glass-card" style={{ width: '80%', padding: '1.5rem 2rem' }}>
          <h4 className="text-cyan" style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem' }}>3. Stack Map / Decision Graph</h4>
          <ul className="text-secondary" style={{ fontSize: '0.875rem', paddingLeft: '1.5rem', margin: 0 }}>
            <li>identify impacted decisions + owners + stakeholders.</li>
            <li>surface affected vendors, contracts, and functions.</li>
          </ul>
        </div>

        <div style={{ color: 'var(--border-light)', fontSize: '1.25rem' }}>↓</div>

        {/* Step 4 */}
        <div className="glass-card" style={{ width: '70%', padding: '1.5rem 2rem', border: '1px solid var(--accent-amber) !important', boxShadow: '0 0 20px rgba(245,158,11,0.2)' }}>
          <h4 className="text-amber" style={{ fontWeight: 800, fontSize: '1.125rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Bell size={20} /> 4. Re-evaluation Triggered</h4>
          <p className="text-white" style={{ fontSize: '0.875rem', margin: 0 }}>assignment + priority based on impact/urgency (e.g., contract expiring in 60 days = high priority)</p>
        </div>

        <div style={{ color: 'var(--border-light)', fontSize: '1.25rem' }}>↓</div>

        {/* Step 5 */}
        <div className="glass-card" style={{ width: '85%', padding: '1.5rem 2rem' }}>
          <h4 className="text-cyan" style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem' }}>5. Resolution Path (Multiple options)</h4>
          <ul className="text-secondary" style={{ fontSize: '0.875rem', paddingLeft: '1.5rem', margin: 0, gap: '0.5rem', display: 'flex', flexDirection: 'column' }}>
            <li><span className="text-white" style={{ fontWeight: 600 }}>if renew as-is:</span> Renewal confirmation -&gt; update contracts + Decision Graph. Notify stakeholders / Slack / Teams / Email.</li>
            <li><span className="text-white" style={{ fontWeight: 600 }}>if renegotiate:</span> Vendor Engagement -&gt; validation + new evidence -&gt; approvals + budget review + stakeholder sign-off -&gt; Updated terms -&gt; Decision Graph updated.</li>
            <li><span className="text-white" style={{ fontWeight: 600 }}>if replace:</span> New Discovery Flow (Data Flow 1) triggered with pre-loaded context from Decision Graph.</li>
            <li><span className="text-white" style={{ fontWeight: 600 }}>if retire:</span> Decommission workflow -&gt; migration plan + stakeholder comms + timeline -&gt; Stack updated + Savings captured <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', verticalAlign: 'middle', color: 'var(--accent-cyan)' }}><Trash2 size={16} /> <Trophy size={16} /></span></li>
          </ul>
        </div>

        <div style={{ color: 'var(--border-light)', fontSize: '1.25rem' }}>↓</div>

        {/* Step 6 */}
        <div className="glass-card" style={{ width: '100%', padding: '1.5rem 2rem', border: '1px solid var(--accent-emerald) !important' }}>
          <h4 className="text-emerald" style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem' }}>6. Org Intelligence Updated</h4>
          <p className="text-secondary" style={{ fontSize: '0.875rem', margin: 0 }}>
            Decision Memory enriched (what changed, why, outcome), Stack health dashboard refreshed, Spend optimization KPIs updated, Future recommendations refined (compounding intelligence).
          </p>
        </div>

      </div>

    </div>
  )
}
