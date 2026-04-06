import React from 'react'
import { FileText, MessageSquare } from 'lucide-react'

export default function Slide5Phase3() {
  return (
    <div className="pdf-slide" style={{ padding: '4rem 14rem', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="text-cyan" style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>
          Phase 3: The Full Decision Layer
        </h2>
        <p className="text-white" style={{ fontSize: '1.25rem', fontWeight: 600 }}>Integrating all organizational information into a unified decision and risk system</p>
      </div>

      <div style={{ display: 'flex', flex: 1, gap: '2rem' }}>
        
        {/* Left Split */}
        <div className="glass-card" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <h3 className="text-white" style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            Information Sources
          </h3>
          <p style={{ fontWeight: 600, color: 'var(--text-muted)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem' }}>Draws from all sources of data</p>
          <ul className="text-secondary" style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1.125rem' }}>
            <li>AI Copilots</li>
            <li>Call transcriptions</li>
            <li>Documents</li>
            <li>Agent interactions</li>
            <li>Email & channels (Teams / Slack)</li>
          </ul>
          <div style={{ marginTop: 'auto', paddingTop: '2rem', fontStyle: 'italic', fontSize: '1rem', color: 'var(--text-muted)' }}>
            Captures both explicit decisions (documented) and implicit ones (the reasoning that never made it into a doc)
          </div>
        </div>

        {/* Right Split */}
        <div className="glass-card" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <h3 className="text-emerald" style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            Proactive Decision Secretary
          </h3>
          <p style={{ fontWeight: 600, color: 'var(--text-muted)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem' }}>Lives in your channels and email</p>
          
          <ul className="text-secondary" style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1.125rem' }}>
            <li>Navigates the org chart to find the right people</li>
            <li>Pings the right stakeholders at the right time</li>
            <li>Surfaces hidden context from past decisions</li>
            <li>Asks the questions that reveal tacit knowledge</li>
            <li>Automates the “path to resolution”</li>
          </ul>
        </div>

      </div>

      <div className="glass-card" style={{ marginTop: '3rem', padding: '2rem' }}>
        <h3 className="text-white" style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem', textAlign: 'center' }}>Unified decision & risk system</h3>
        <p style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>Every decision — who made it, why, what alternatives were considered — becomes structured, searchable, reusable organizational memory</p>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', textAlign: 'center', fontSize: '0.875rem' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <FileText size={32} className="text-white" style={{ marginBottom: '0.5rem' }} />
            <div className="text-white" style={{ fontWeight: 700 }}>Explicit decisions</div>
            <div style={{ color: 'var(--text-muted)' }}>Documented choices, approvals, trade-offs</div>
          </div>
          <div className="text-cyan" style={{ fontWeight: 800, fontSize: '1.5rem' }}>+</div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <MessageSquare size={32} className="text-white" style={{ marginBottom: '0.5rem' }} />
            <div className="text-white" style={{ fontWeight: 700 }}>Implicit decisions</div>
            <div style={{ color: 'var(--text-muted)' }}>Reasoning, context, tacit knowledge that never made it into a doc</div>
          </div>
          <div className="text-cyan" style={{ fontWeight: 800, fontSize: '1.5rem' }}>=</div>
          <div style={{ flex: 1 }}>
            <div className="text-cyan" style={{ fontWeight: 800 }}>Complete organizational decision memory</div>
          </div>
        </div>
      </div>

    </div>
  )
}
