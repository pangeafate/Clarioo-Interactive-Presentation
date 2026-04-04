import React from 'react'
import { Sparkles } from 'lucide-react'

export default function Slide11Product() {
  return (
    <div className="pdf-slide" style={{ padding: '6rem', overflowY: 'auto' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="text-white" style={{ fontSize: '2.5rem', fontWeight: 800 }}>
          March ‘26: Clarioo is running software discovery-to-decision process with corporate partners and consultants
        </h2>
      </div>

      <div style={{ display: 'flex', gap: '2rem' }}>
        
        {/* Panel 1: Criteria Building */}
        <div className="glass-card" style={{ flex: 1, padding: '2rem' }}>
          <h3 className="text-white" style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>Criteria Building</h3>
          <p className="text-cyan" style={{ fontSize: '0.875rem', marginBottom: '1.5rem', fontWeight: 600 }}><Sparkles size={16} className="text-cyan" style={{ display: 'inline-block', verticalAlign: 'text-bottom', marginRight: '4px' }} /> AI helps build evaluation criteria</p>
          
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <div className="text-white" style={{ fontWeight: 600, fontSize: '0.875rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>Evaluation Criteria (20)</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Feature 9-6 High, 3 Medium, 0 Low</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', padding: '1rem', borderRadius: '8px', fontSize: '0.875rem', transition: 'all 0.2s ease', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-cyan)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-light)'}>
              <div className="text-cyan" style={{ fontWeight: 600, marginBottom: '0.25rem' }}><Sparkles size={16} className="text-cyan" style={{ display: 'inline-block', verticalAlign: 'text-bottom', marginRight: '4px' }} /> AI-Powered Bid Optimization</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>Algorithmic bidding engines that automatically adjust bids 24/7 based on conversion probability...</div>
            </div>
            
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', padding: '1rem', borderRadius: '8px', fontSize: '0.875rem', transition: 'all 0.2s ease', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-cyan)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-light)'}>
              <div className="text-cyan" style={{ fontWeight: 600, marginBottom: '0.25rem' }}>✨ Creative Performance Intelligence</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>AI analysis of creative assets to identify high-performing visual elements...</div>
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', padding: '1rem', borderRadius: '8px', fontSize: '0.875rem', transition: 'all 0.2s ease', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-cyan)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-light)'}>
              <div className="text-cyan" style={{ fontWeight: 600, marginBottom: '0.25rem' }}>✨ Cross-Channel Budget Optimization</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>Automated reallocation of budgets between channels based on real-time performance data.</div>
            </div>
          </div>
        </div>

        {/* Panel 2: Vendor Comparison */}
        <div className="glass-card" style={{ flex: 1, padding: '2rem' }}>
          <h3 className="text-white" style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>Vendor Comparison</h3>
          <p className="text-secondary" style={{ fontSize: '0.875rem', marginBottom: '1.5rem' }}>Compare vendors in detail</p>
          
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ flex: 1, background: 'var(--bg-card)', border: '1px solid var(--accent-emerald)', borderRadius: '8px', padding: '1rem', textAlign: 'center', boxShadow: '0 0 15px rgba(16, 185, 129, 0.1)' }}>
              <div className="text-white" style={{ fontWeight: 700 }}>Vilai</div>
              <div className="text-emerald" style={{ fontWeight: 800, fontSize: '1.25rem' }}>89%</div>
            </div>
            <div style={{ flex: 1, background: 'var(--bg-card)', border: '1px solid var(--accent-amber)', borderRadius: '8px', padding: '1rem', textAlign: 'center' }}>
              <div className="text-white" style={{ fontWeight: 700 }}>Smartly</div>
              <div className="text-amber" style={{ fontWeight: 800, fontSize: '1.25rem' }}>82%</div>
            </div>
          </div>

          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '1rem' }}>
             <div className="text-white" style={{ fontWeight: 600, fontSize: '0.875rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
               Evaluation Criteria (20) <span style={{ marginLeft: '0.5rem', color: '#ef4444' }}>12 High Priority</span>
             </div>
             <div style={{ height: '150px', background: 'rgba(0,0,0,0.2)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
               [Comparison Matrix Grid]
             </div>
          </div>
        </div>

        {/* Panel 3: Timeline & Decision */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Make Decision */}
          <div className="glass-card" style={{ padding: '2rem', border: '1px solid var(--accent-cyan) !important', boxShadow: 'var(--glow-cyan)' }}>
            <h3 className="text-cyan" style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>Make Your Decision</h3>
            <p className="text-white" style={{ fontSize: '0.875rem', lineHeight: '1.5' }}>Review findings from vendor meetings, discuss with your team, and choose the best vendor.</p>
          </div>

          {/* Timeline */}
          <div className="glass-card" style={{ padding: '2rem', flex: 1 }}>
            <h3 className="text-white" style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem' }}>Timeline</h3>
            
            <ul style={{ listStyleType: 'none', margin: 0, padding: 0, fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-secondary)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span className="text-emerald">✓</span> <span className="text-white">Invite Sent</span></li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span className="text-emerald">✓</span> <span className="text-white">Invite Accepted</span></li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span className="text-emerald">✓</span> <span className="text-white">Document Sent to Vendor</span></li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span className="text-emerald">✓</span> <span className="text-white">Document Received</span></li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span className="text-emerald">✓</span> <span className="text-white">Criteria Verified</span></li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span className="text-amber">○</span> <span className="text-white">Meeting Scheduled</span></li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--border-light)' }}>○</span> Meeting Held</li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  )
}
