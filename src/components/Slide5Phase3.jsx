import React from 'react'
import { FileText, MessageSquare, GitGraph } from 'lucide-react'

export default function Slide5Phase3() {
  return (
    <div className="pdf-slide" style={{ padding: '2.5rem 4rem 2rem', display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>

      <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
        <h2 className="text-cyan" style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
          Phase 3: The Full Decision Layer
        </h2>
        <p className="text-white" style={{ fontSize: '1.125rem', fontWeight: 600 }}>Integrating all organizational information into a unified decision and risk system</p>
      </div>

      {/* Top two cards */}
      <div style={{ display: 'flex', flex: 1, gap: '1.5rem', minHeight: 0, maxWidth: '56rem', width: '100%', alignSelf: 'center' }}>

        {/* Left Split */}
        <div className="glass-card" style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '1.25rem 1.5rem' }}>
          <h3 className="text-white" style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.375rem' }}>
            Information Sources
          </h3>
          <p style={{ fontWeight: 600, color: 'var(--text-muted)', marginBottom: '1rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem', fontSize: '0.9rem' }}>Draws from all sources of data</p>
          <ul className="text-secondary" style={{ listStyleType: 'disc', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.625rem', fontSize: '1rem' }}>
            <li>AI Copilots</li>
            <li>Call transcriptions</li>
            <li>Documents</li>
            <li>Agent interactions</li>
            <li>Email & channels (Teams / Slack)</li>
          </ul>
          <div style={{ marginTop: 'auto', paddingTop: '1rem', fontStyle: 'italic', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Captures both explicit decisions (documented) and implicit ones (the reasoning that never made it into a doc)
          </div>
        </div>

        {/* Right Split */}
        <div className="glass-card" style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '1.25rem 1.5rem' }}>
          <h3 className="text-emerald" style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.375rem' }}>
            Proactive Decision Secretary
          </h3>
          <p style={{ fontWeight: 600, color: 'var(--text-muted)', marginBottom: '1rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem', fontSize: '0.9rem' }}>Lives in your channels and email</p>

          <ul className="text-secondary" style={{ listStyleType: 'disc', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.625rem', fontSize: '1rem' }}>
            <li>Navigates the org chart to find the right people</li>
            <li>Pings the right stakeholders at the right time</li>
            <li>Surfaces hidden context from past decisions</li>
            <li>Asks the questions that reveal tacit knowledge</li>
            <li>Automates the "path to resolution"</li>
          </ul>
        </div>

      </div>

      {/* Bottom box */}
      <div style={{
        marginTop: '1.25rem',
        padding: '1.25rem 2rem',
        borderRadius: '1rem',
        border: '1.5px solid var(--border-cyan)',
        background: 'linear-gradient(135deg, rgba(14,165,233,0.08) 0%, rgba(139,92,246,0.05) 100%)',
        boxShadow: 'var(--glow-cyan)',
        backdropFilter: 'blur(12px)',
        maxWidth: '56rem',
        width: '100%',
        alignSelf: 'center',
        flexShrink: 0,
      }}>
        <h3 className="text-white" style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.375rem', textAlign: 'center' }}>Unified decision & risk system</h3>
        <p style={{ textAlign: 'center', marginBottom: '1rem', color: 'var(--text-primary)', fontSize: '0.95rem', opacity: 0.85 }}>Every decision — who made it, why, what alternatives were considered — becomes structured, searchable, reusable organizational memory</p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', textAlign: 'center', fontSize: '0.95rem' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <FileText size={28} style={{ color: 'var(--accent-cyan)', marginBottom: '0.5rem' }} />
            <div className="text-white" style={{ fontWeight: 700, fontSize: '0.95rem' }}>Explicit decisions</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: '0.2rem' }}>Documented choices, approvals, trade-offs</div>
          </div>
          <div className="text-cyan" style={{ fontWeight: 800, fontSize: '1.75rem' }}>+</div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <MessageSquare size={28} style={{ color: 'var(--accent-purple)', marginBottom: '0.5rem' }} />
            <div className="text-white" style={{ fontWeight: 700, fontSize: '0.95rem' }}>Implicit decisions</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: '0.2rem' }}>Reasoning, context, tacit knowledge that never made it into a doc</div>
          </div>
          <div className="text-cyan" style={{ fontWeight: 800, fontSize: '1.75rem' }}>=</div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <GitGraph size={28} className="text-white" style={{ marginBottom: '0.5rem' }} />
            <div className="text-white" style={{ fontWeight: 700, fontSize: '0.95rem' }}>Complete organizational decision memory</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: '0.2rem' }}>Structured, searchable, reusable across the company</div>
          </div>
        </div>
      </div>

    </div>
  )
}
