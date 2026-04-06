import React from 'react'
import { Building2, Bot, BrickWall, XCircle, ArrowRight } from 'lucide-react'

export default function Slide3Legacy() {
  return (
    <div className="pdf-slide" style={{ padding: '4rem 6rem' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>
          In near future Agents will need <span className="text-cyan" style={{ fontWeight: 800 }}>Decision Layer</span> to work in "legacy" organisations
        </h2>
      </div>

      {/* Main 3-column layout */}
      <div className="legacy-top-row" style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'center', gap: '0', marginBottom: '3rem' }}>
        
        {/* Left Box - Human-only */}
        <div style={{ 
          flex: 1, 
          border: '1px solid var(--border-light)', 
          borderRadius: '16px', 
          padding: '2rem', 
          background: 'rgba(255,255,255,0.03)',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <Building2 size={28} className="text-cyan" />
            <h3 className="text-white" style={{ fontSize: '1.1rem', fontWeight: 700 }}>Human-only organisations</h3>
          </div>
          
          {/* Highlighted sub-box */}
          <div style={{ 
            background: 'rgba(0, 210, 255, 0.08)', 
            border: '1px solid rgba(0, 210, 255, 0.2)',
            borderRadius: '10px', 
            padding: '0.75rem 1rem', 
            marginBottom: '1.25rem' 
          }}>
            <p className="text-white" style={{ fontWeight: 600, fontSize: '0.95rem', margin: 0 }}>
              Any organisation = set of explicit & implicit decisions
            </p>
          </div>
          
          <ul style={{ paddingLeft: '1.25rem', lineHeight: '1.8', color: 'var(--text-secondary)', margin: 0 }}>
            <li>Tech stack</li>
            <li>Operating model</li>
            <li>Org Design</li>
            <li>...</li>
          </ul>
        </div>

        {/* Center Bridge */}
        <div className="legacy-bridge" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem 1.5rem',
          minWidth: '220px'
        }}>
          <p className="text-cyan" style={{ 
            fontSize: '0.8rem', 
            fontStyle: 'italic', 
            textAlign: 'center', 
            lineHeight: '1.5', 
            marginBottom: '1.25rem',
            maxWidth: '200px'
          }}>
            Decisions are fluid and continuously shape the org. With a decision layer, both humans and agents operate from the same structured context.
          </p>

          {/* Bridge SVG illustration */}
          <svg viewBox="0 0 200 80" width="180" height="72" style={{ opacity: 0.85 }}>
            {/* Road */}
            <rect x="0" y="50" width="200" height="8" rx="2" fill="var(--accent-cyan)" opacity="0.3" />
            <rect x="10" y="52" width="180" height="4" rx="1" fill="var(--accent-cyan)" opacity="0.6" />
            
            {/* Pillars */}
            <rect x="30" y="30" width="8" height="28" rx="2" fill="var(--accent-cyan)" />
            <rect x="80" y="20" width="8" height="38" rx="2" fill="var(--accent-cyan)" />
            <rect x="112" y="20" width="8" height="38" rx="2" fill="var(--accent-cyan)" />
            <rect x="162" y="30" width="8" height="28" rx="2" fill="var(--accent-cyan)" />
            
            {/* Arches */}
            <path d="M30,30 Q57,8 84,30" fill="none" stroke="var(--accent-cyan)" strokeWidth="3" />
            <path d="M84,20 Q100,0 116,20" fill="none" stroke="var(--accent-cyan)" strokeWidth="3" />
            <path d="M116,30 Q143,8 170,30" fill="none" stroke="var(--accent-cyan)" strokeWidth="3" />
            
            {/* Railings */}
            <line x1="30" y1="30" x2="170" y2="30" stroke="var(--accent-cyan)" strokeWidth="1.5" opacity="0.4" />
            
            {/* Small vertical supports */}
            <line x1="45" y1="30" x2="45" y2="50" stroke="var(--accent-cyan)" strokeWidth="1" opacity="0.3" />
            <line x1="60" y1="30" x2="60" y2="50" stroke="var(--accent-cyan)" strokeWidth="1" opacity="0.3" />
            <line x1="95" y1="30" x2="95" y2="50" stroke="var(--accent-cyan)" strokeWidth="1" opacity="0.3" />
            <line x1="105" y1="30" x2="105" y2="50" stroke="var(--accent-cyan)" strokeWidth="1" opacity="0.3" />
            <line x1="130" y1="30" x2="130" y2="50" stroke="var(--accent-cyan)" strokeWidth="1" opacity="0.3" />
            <line x1="145" y1="30" x2="145" y2="50" stroke="var(--accent-cyan)" strokeWidth="1" opacity="0.3" />
          </svg>
        </div>

        {/* Right Box - Hybrid */}
        <div style={{ 
          flex: 1, 
          border: '1px solid var(--border-light)', 
          borderRadius: '16px', 
          padding: '2rem', 
          background: 'rgba(255,255,255,0.03)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <Bot size={28} className="text-cyan" />
            <h3 className="text-white" style={{ fontSize: '1.1rem', fontWeight: 700 }}>Hybrid: Human x Agentic organisations</h3>
          </div>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: '1.8', color: 'var(--text-secondary)', margin: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>SaaS replaced by built-for-purpose agents</li>
            <li style={{ marginBottom: '0.5rem' }}>Many agent providers — not just Google & Microsoft</li>
            <li>Agents differentiate by tasks, models, data, skills</li>
          </ul>
        </div>

      </div>

      {/* TODAY divider */}
      <div style={{ position: 'relative', marginBottom: '2rem' }}>
        <div style={{ borderTop: '3px dashed var(--border-light)', width: '100%' }}></div>
        <div style={{ 
          position: 'absolute', 
          top: '-14px', 
          left: '50%', 
          transform: 'translateX(-50%)', 
          background: 'var(--bg-primary)', 
          padding: '0 1.5rem' 
        }}>
          <span style={{ 
            fontWeight: 800, 
            fontSize: '1.1rem', 
            color: 'var(--text-white)', 
            letterSpacing: '0.15em' 
          }}>TODAY</span>
        </div>
      </div>

      {/* Bottom flow: Two boxes with X in middle */}
      <div className="legacy-bottom-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0' }}>
        
        {/* Left bottom box */}
        <div style={{ 
          flex: 1, 
          border: '1px solid var(--border-light)', 
          borderRadius: '12px', 
          padding: '1.25rem 1.5rem', 
          background: 'rgba(255,255,255,0.03)' 
        }}>
          <p className="text-white" style={{ fontWeight: 600, fontSize: '1rem', margin: 0, lineHeight: '1.5' }}>
            Evolution of decisions surpass the evolution of company by 1-5 years
          </p>
        </div>

        {/* Arrow + X Circle + Arrow */}
        <div className="legacy-x-connector" style={{ display: 'flex', alignItems: 'center', padding: '0 0.75rem' }}>
          <ArrowRight size={20} style={{ color: 'var(--text-muted)', marginRight: '-4px' }} />
          <div style={{ 
            width: '48px', 
            height: '48px', 
            borderRadius: '50%', 
            background: 'rgba(239, 68, 68, 0.15)',
            border: '2px solid #ef4444',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <XCircle size={28} color="#ef4444" />
          </div>
          <ArrowRight size={20} style={{ color: 'var(--text-muted)', marginLeft: '-4px' }} />
        </div>

        {/* Right bottom box */}
        <div style={{ 
          flex: 1, 
          border: '1px solid var(--border-light)', 
          borderRadius: '12px', 
          padding: '1.25rem 1.5rem', 
          background: 'rgba(255,255,255,0.03)' 
        }}>
          <p className="text-white" style={{ fontWeight: 600, fontSize: '1rem', margin: 0, lineHeight: '1.5' }}>
            <span style={{ color: '#ef4444', fontWeight: 'bold' }}>✕</span>{' '}
            Agents only see what is already there - and it's <strong style={{ color: '#fff' }}>already outdated</strong>
          </p>
        </div>

      </div>

    </div>
  )
}
