import React from 'react'

const lanes = [
  {
    label: 'Process Automation',
    accentColor: 'var(--accent-amber)',
    chipBorder: 'rgba(245, 158, 11, 0.3)',
    oneLiner: 'Run pre-defined workflows faster. Automate the known path.',
    competitors: ['ServiceNow', 'UiPath', 'Beam', 'Kore.ai'],
    gap: "Can't discover the path. Can't handle decisions where no process exists.",
  },
  {
    label: 'Knowledge & Retrieval',
    accentColor: 'var(--accent-purple)',
    chipBorder: 'rgba(139, 92, 246, 0.3)',
    oneLiner: 'Surface information. Answer questions. Improve search.',
    competitors: ['Glean', 'Microsoft Copilot', 'Google Gemini', 'GraphRAG'],
    gap: "Can't structure the decision process. Can't compose an executable path.",
  },
  {
    label: 'Decision Tracking',
    accentColor: 'var(--text-muted)',
    chipBorder: 'rgba(71, 85, 105, 0.3)',
    oneLiner: 'Log outcomes. Track tasks. Sequential playbooks.',
    competitors: ['Cloverpop', 'Confluence', 'JIRA', 'Asana'],
    gap: 'No typed DAG. No cross-decision graph. No progressive composition.',
  },
]

const differentiators = [
  { bold: 'Progressive path composition', rest: ' — the DAG is discovered from evidence, not designed' },
  { bold: 'Typed blocks with structured I/O', rest: ' — not tasks, not documents, not search results' },
  { bold: 'Human-gated execution', rest: ' — governance is the execution model, not a layer on top' },
  { bold: 'Cross-decision memory', rest: ' — each resolved decision makes the next one smarter' },
]

export default function SlidePositioning() {
  return (
    <div className="pdf-slide" style={{
      padding: '4rem 6rem',
    }}>
      {/* Title */}
      <h1 style={{
        color: 'var(--text-primary)',
        fontSize: '2.5rem',
        fontWeight: 800,
        marginBottom: '3rem',
        textAlign: 'center',
        lineHeight: 1.2,
      }}>
        Positioning and Competition
      </h1>

      {/* Main visualization */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
      }}>
        {/* Clarioo Hero Container */}
        <div style={{
          width: '70%',
          background: 'var(--bg-card)',
          border: '2px solid var(--border-cyan)',
          borderRadius: '1rem',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          boxShadow: 'var(--glow-cyan)',
          padding: '1.75rem 2.5rem',
        }}>
          <h2 style={{
            color: 'var(--accent-cyan)',
            fontSize: '1.5rem',
            fontWeight: 700,
            marginBottom: '1rem',
          }}>
            Decision Composition
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.6rem 2rem',
          }}>
            {differentiators.map((d, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.625rem',
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.5,
              }}>
                <span style={{
                  color: 'var(--accent-cyan)',
                  flexShrink: 0,
                  fontSize: '0.875rem',
                  marginTop: '0.2rem',
                }}>&#10022;</span>
                <span>
                  <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{d.bold}</strong>
                  {d.rest}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Connection Lines */}
        <svg
          style={{ width: '85%', height: '3rem', display: 'block', flexShrink: 0 }}
          viewBox="0 0 1000 50"
          preserveAspectRatio="xMidYMid meet"
        >
          <line x1="500" y1="0" x2="180" y2="50" stroke="var(--border-cyan)" strokeWidth="1" strokeDasharray="6 4" opacity="0.4" />
          <line x1="500" y1="0" x2="500" y2="50" stroke="var(--border-cyan)" strokeWidth="1" strokeDasharray="6 4" opacity="0.4" />
          <line x1="500" y1="0" x2="820" y2="50" stroke="var(--border-cyan)" strokeWidth="1" strokeDasharray="6 4" opacity="0.4" />
        </svg>

        {/* Lanes */}
        {lanes.map((lane, i) => (
          <div key={i} style={{
            width: '90%',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-light)',
            borderLeft: `3px solid ${lane.accentColor}`,
            borderRadius: '0.75rem',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            padding: '1.125rem 2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            opacity: 0.6,
          }}>
            {/* Lane info */}
            <div style={{ flex: '0 0 28%' }}>
              <div style={{
                color: 'var(--text-primary)',
                fontSize: '1.125rem',
                fontWeight: 700,
                marginBottom: '0.25rem',
              }}>{lane.label}</div>
              <div style={{
                color: 'var(--text-secondary)',
                fontSize: '0.9rem',
                lineHeight: 1.4,
              }}>{lane.oneLiner}</div>
            </div>

            {/* Chips */}
            <div style={{
              flex: '1 1 44%',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.625rem',
              justifyContent: 'center',
            }}>
              {lane.competitors.map((c, j) => (
                <span key={j} style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: `1px solid ${lane.chipBorder}`,
                  borderRadius: '0.375rem',
                  padding: '0.375rem 0.875rem',
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                  opacity: 0.5,
                  whiteSpace: 'nowrap',
                }}>{c}</span>
              ))}
            </div>

            {/* Gap statement */}
            <div style={{
              flex: '0 0 28%',
              color: 'var(--text-secondary)',
              fontSize: '0.875rem',
              fontStyle: 'italic',
              textAlign: 'right',
              lineHeight: 1.4,
            }}>{lane.gap}</div>
          </div>
        ))}
      </div>

      {/* Bottom positioning line */}
      <div style={{
        textAlign: 'center',
        marginTop: '3rem',
        color: 'var(--text-secondary)',
        fontSize: '1.125rem',
        lineHeight: 1.5,
      }}>
        Process tools, search tools, tracking tools — and{' '}
        <strong style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>
          no decision architecture between them
        </strong>.
      </div>
    </div>
  )
}
