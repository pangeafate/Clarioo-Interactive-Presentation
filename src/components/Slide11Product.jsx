import React from 'react'

export default function Slide11Product() {
  return (
    <div className="pdf-slide" style={{ padding: '6rem', overflowY: 'auto' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--pdf-navy)' }}>
          March ‘26: Clarioo is running software discovery-to-decision process with corporate partners and consultants
        </h2>
      </div>

      <div style={{ display: 'flex', gap: '2rem' }}>
        
        {/* Panel 1: Criteria Building */}
        <div style={{ flex: 1, backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '2rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>Criteria Building</h3>
          <p style={{ color: 'var(--pdf-blue)', fontSize: '0.875rem', marginBottom: '1.5rem', fontWeight: 600 }}>✨ AI helps build evaluation criteria</p>
          
          <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
            <div style={{ fontWeight: 600, fontSize: '0.875rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>Evaluation Criteria (20)</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted-dark)' }}>Feature 9-6 High, 3 Medium, 0 Low</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ background: 'white', padding: '1rem', borderRadius: '8px', fontSize: '0.875rem', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
              <div style={{ fontWeight: 600, color: 'var(--pdf-blue)', marginBottom: '0.25rem' }}>✨ AI-Powered Bid Optimization</div>
              <div style={{ color: 'var(--text-muted-dark)', fontSize: '0.75rem' }}>Algorithmic bidding engines that automatically adjust bids 24/7 based on conversion probability...</div>
            </div>
            
            <div style={{ background: 'white', padding: '1rem', borderRadius: '8px', fontSize: '0.875rem', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
              <div style={{ fontWeight: 600, color: 'var(--pdf-blue)', marginBottom: '0.25rem' }}>✨ Creative Performance Intelligence</div>
              <div style={{ color: 'var(--text-muted-dark)', fontSize: '0.75rem' }}>AI analysis of creative assets to identify high-performing visual elements...</div>
            </div>

            <div style={{ background: 'white', padding: '1rem', borderRadius: '8px', fontSize: '0.875rem', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
              <div style={{ fontWeight: 600, color: 'var(--pdf-blue)', marginBottom: '0.25rem' }}>✨ Cross-Channel Budget Optimization</div>
              <div style={{ color: 'var(--text-muted-dark)', fontSize: '0.75rem' }}>Automated reallocation of budgets between channels based on real-time performance data.</div>
            </div>
          </div>
        </div>

        {/* Panel 2: Vendor Comparison */}
        <div style={{ flex: 1, backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '2rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>Vendor Comparison</h3>
          <p style={{ color: 'var(--text-muted-dark)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>Compare vendors in detail</p>
          
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ flex: 1, background: 'white', borderRadius: '8px', padding: '1rem', textAlign: 'center', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
              <div style={{ fontWeight: 700 }}>Vilai</div>
              <div style={{ color: 'var(--pdf-green)', fontWeight: 800, fontSize: '1.25rem' }}>89%</div>
            </div>
            <div style={{ flex: 1, background: 'white', borderRadius: '8px', padding: '1rem', textAlign: 'center', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
              <div style={{ fontWeight: 700 }}>Smartly</div>
              <div style={{ color: 'var(--pdf-orange)', fontWeight: 800, fontSize: '1.25rem' }}>82%</div>
            </div>
          </div>

          <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem' }}>
             <div style={{ fontWeight: 600, fontSize: '0.875rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
               Evaluation Criteria (20) <span style={{ marginLeft: '0.5rem', color: '#ef4444' }}>12 High Priority</span>
             </div>
             <div style={{ height: '150px', background: '#f1f5f9', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af', fontSize: '0.875rem' }}>
               [Comparison Matrix Grid]
             </div>
          </div>
        </div>

        {/* Panel 3: Timeline & Decision */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Make Decision */}
          <div style={{ backgroundColor: 'var(--pdf-navy)', color: 'white', borderRadius: '12px', padding: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--pdf-salmon)' }}>Make Your Decision</h3>
            <p style={{ fontSize: '0.875rem', lineHeight: '1.5', opacity: 0.8 }}>Review findings from vendor meetings, discuss with your team, and choose the best vendor.</p>
          </div>

          {/* Timeline */}
          <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '2rem', flex: 1 }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem' }}>Timeline</h3>
            
            <ul style={{ listStyleType: 'none', margin: 0, padding: 0, fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-dark)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--pdf-green)' }}>✓</span> Invite Sent</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--pdf-green)' }}>✓</span> Invite Accepted</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--pdf-green)' }}>✓</span> Document Sent to Vendor</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--pdf-green)' }}>✓</span> Document Received</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--pdf-green)' }}>✓</span> Criteria Verified</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--pdf-orange)' }}>○</span> Meeting Scheduled</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: '#cbd5e1' }}>○</span> Meeting Held</li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  )
}
