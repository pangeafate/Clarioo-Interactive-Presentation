import React from 'react'
import { CheckCircle2, Clock, ShoppingCart, Settings } from 'lucide-react'

export default function Slide4Strategy() {
  return (
    <div className="pdf-slide" style={{ padding: '4rem 6rem' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2.35rem', fontWeight: 800, lineHeight: 1.22, margin: 0 }}>
          <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>
            We realized the need for the{' '}
          </span>
          <span style={{ color: 'var(--text-primary)' }}>decision layer</span>
          <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>
            {' '}when we developed and started testing with our customers our first agent — the{' '}
          </span>
          <span style={{ color: 'var(--accent-cyan)' }}>
            Software Discovery-to-Decision Agent
          </span>
          <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>
            . That is when we understood that this is a part of a{' '}
          </span>
          <span style={{ color: 'var(--text-primary)' }}>much bigger problem</span>
          <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>.</span>
        </h2>
      </div>

      <div style={{ display: 'flex', gap: '3rem', height: '100%' }}>
        
        {/* Phase 1 Card — dimmed to let Phase 2 be the focal point */}
        <div className="glass-card" style={{ flex: 1, borderLeft: '4px solid var(--accent-emerald) !important', padding: '2.5rem', display: 'flex', flexDirection: 'column', opacity: 0.55 }}>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <h3 className="text-white" style={{ fontSize: '1.5rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <ShoppingCart size={28} className="text-emerald" /> Phase 1: Decisions to buy
            </h3>
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

          <div style={{ marginTop: 'auto', paddingTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            <p className="text-white" style={{ fontSize: '1.5rem', fontWeight: 800 }}>Check our first Decision Agent</p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="glow-btn"
                style={{ flex: 1, '--glow-color': 'var(--accent-emerald)' }}
              >
                Software Discovery-to-Decision Agent
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="glow-btn"
                style={{ flex: 1, '--glow-color': 'var(--accent-emerald)' }}
              >
                Understand how this Agent works
              </a>
            </div>
          </div>
        </div>

        {/* Phase 2 Card — hero: full border + glow + gradient tint */}
        <div className="glass-card" style={{
          flex: 1,
          border: '2px solid var(--accent-amber) !important',
          padding: '2.5rem',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, rgba(245,158,11,0.12) 0%, rgba(245,158,11,0.03) 100%)',
          boxShadow: '0 0 30px rgba(245,158,11,0.2), 0 0 60px rgba(245,158,11,0.08)',
        }}>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <h3 className="text-white" style={{ fontSize: '1.5rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Settings size={28} className="text-amber" /> Phase 2: Decision Layer (Buy vs Build and more!)
            </h3>
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

          <div style={{ marginTop: 'auto', paddingTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            <p className="text-white" style={{ fontSize: '1.5rem', fontWeight: 800 }}>See the decision layer prototype:</p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="glow-btn"
                style={{ flex: 1, '--glow-color': 'var(--accent-amber)' }}
              >
                Decision path
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="glow-btn"
                style={{ flex: 1, '--glow-color': 'var(--accent-amber)' }}
              >
                Watch how the functional prototype works
              </a>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}
