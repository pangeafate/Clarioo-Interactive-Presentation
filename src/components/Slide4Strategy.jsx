import React from 'react'
import { CheckCircle2, Clock } from 'lucide-react'

export default function Slide4Strategy() {
  return (
    <div className="pdf-slide" style={{ padding: '4rem 6rem' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <p className="text-white" style={{ fontSize: '1.25rem', fontWeight: 600, maxWidth: '900px', margin: '0 auto', lineHeight: '1.5' }}>
          Our goal is to build the bridge: an end-to-end decision system that sits between people and AI agents inside enterprises.<br/><br/>
          We realize that the task is huge. So we are eating this elephant one bite at a time, across three phases. The initial focus is on what is hot now - buy & build decisions in Tech.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '3rem', height: '100%' }}>
        
        {/* Phase 1 Card */}
        <div className="glass-card" style={{ flex: 1, borderLeft: '4px solid var(--accent-emerald) !important', padding: '2.5rem' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <h3 className="text-white" style={{ fontSize: '1.5rem', fontWeight: 800 }}>Phase 1: Decisions to buy</h3>
            <div className="text-emerald" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: 700, padding: '0.25rem 0.75rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '9999px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
              <CheckCircle2 size={16} /> running w/ design partners
            </div>
          </div>
          
          <p className="text-emerald" style={{ fontWeight: 600, fontSize: '1.125rem', marginBottom: '1.5rem' }}>
            From unstructured evaluation to a managed, evidence-based decision process
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid var(--border-light)', marginBottom: '1.5rem' }} />
          
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1rem', lineHeight: '1.5', color: 'var(--text-secondary)' }}>
            <li><span className="text-white">Starts from business problem</span> -&gt; defines tailored evaluation criteria</li>
            <li><span className="text-white">Automates vendor research</span> and builds side-by-side comparisons</li>
            <li><span className="text-white">Aligns stakeholders</span> and orchestrates the decision process</li>
            <li><span className="text-white">Vendors enrich data about themself</span>, follow client-defined criteria (pre-demo)</li>
            <li><span className="text-white">Captures all decisions</span> as structured, reusable decision memory</li>
          </ul>
        </div>

        {/* Phase 2 Card */}
        <div className="glass-card" style={{ flex: 1, borderLeft: '4px solid var(--accent-amber) !important', padding: '2.5rem' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <h3 className="text-white" style={{ fontSize: '1.5rem', fontWeight: 800 }}>Phase 2: Decisions to build</h3>
            <div className="text-amber" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: 700, padding: '0.25rem 0.75rem', background: 'rgba(245, 158, 11, 0.1)', borderRadius: '9999px', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
              <Clock size={16} /> in Progress
            </div>
          </div>

          <p className="text-amber" style={{ fontWeight: 600, fontSize: '1.125rem', marginBottom: '1.5rem' }}>
            Applies the same system to turn unstructured requests into actionable, prioritized engineering work
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid var(--border-light)', marginBottom: '1.5rem' }} />
          
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1rem', lineHeight: '1.5', color: 'var(--text-secondary)' }}>
            <li><span className="text-white">Ingests unstructured requests</span> from across the organization</li>
            <li><span className="text-white">Translates business needs</span> into clear technical requirements</li>
            <li><span className="text-white">Filters, triages, and prioritizes</span> incoming initiatives</li>
            <li><span className="text-white">Routes validated work</span> to the right engineering teams</li>
            <li><span className="text-white">Reduces overload</span> on engineering while maintaining responsiveness</li>
            <li><span className="text-white">Captures all intent</span> - request - build decisions</li>
          </ul>
        </div>

      </div>

    </div>
  )
}
