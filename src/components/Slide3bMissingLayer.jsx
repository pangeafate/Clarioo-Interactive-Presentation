import React from 'react'
import { MessageSquareWarning, Workflow, Database, User, Bot, Layers } from 'lucide-react'

/**
 * Slide 3b — "The Missing Layer"
 *
 * Two-panel comparison: Today (decisions are a broken, dashed layer floating
 * above actions & data) vs. With Decision Infrastructure (a solid Clarioo
 * decision layer with bidirectional flow into actions and data).
 */

// Small inline arrow used between layers inside each panel. `variant="broken"`
// draws a thin dashed downward arrow in red; `variant="bidirectional"` draws a
// solid cyan up-and-down arrow.
function LayerArrow({ variant = 'broken' }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '0.15rem 0' }}>
      <svg viewBox="0 0 40 24" style={{ width: '1.7rem', height: '1.15rem' }}>
        {variant === 'bidirectional' ? (
          <g
            stroke="var(--accent-cyan)"
            strokeWidth="2.4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="20" y1="3" x2="20" y2="21" />
            <polyline points="13,9 20,2 27,9" />
            <polyline points="13,15 20,22 27,15" />
          </g>
        ) : (
          <g
            stroke="#ef4444"
            strokeWidth="1.6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.7"
          >
            <line x1="20" y1="2" x2="20" y2="18" strokeDasharray="2.2 2.6" />
            <polyline points="14,14 20,21 26,14" />
          </g>
        )}
      </svg>
    </div>
  )
}

// Shared layer box used for ACTIONS and DATA in both panels.
function LayerBox({ icon: Icon, title, subtitle, tone = 'neutral' }) {
  const palette =
    tone === 'cyan'
      ? {
          border: 'var(--border-cyan)',
          background: 'rgba(14,165,233,0.05)',
          iconColor: 'var(--accent-cyan)',
        }
      : {
          border: 'var(--border-light)',
          background: 'rgba(255,255,255,0.03)',
          iconColor: 'var(--text-secondary)',
        }

  return (
    <div
      style={{
        border: `1px solid ${palette.border}`,
        background: palette.background,
        borderRadius: '0.85rem',
        padding: '0.8rem 1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
      }}
    >
      <Icon
        style={{
          width: '1.25rem',
          height: '1.25rem',
          color: palette.iconColor,
          flexShrink: 0,
        }}
      />
      <div style={{ minWidth: 0 }}>
        <div
          className="text-white"
          style={{
            fontWeight: 700,
            fontSize: '0.88rem',
            letterSpacing: '0.06em',
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: '0.78rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.4,
          }}
        >
          {subtitle}
        </div>
      </div>
    </div>
  )
}

// Bottom caption row (People / Agents). Color tone differs per panel.
function CaptionRow({ tone }) {
  const color = tone === 'cyan' ? 'var(--accent-emerald)' : '#ef4444'
  const leftText =
    tone === 'cyan' ? (
      <>
        <strong className="text-white">People</strong> build on precedent — clear
        owners, evidence, rationale.
      </>
    ) : (
      <>
        <strong className="text-white">People</strong> re-litigate past decisions.
        Context walks out the door.
      </>
    )
  const rightText =
    tone === 'cyan' ? (
      <>
        <strong className="text-white">Agents</strong> grounded in org reasoning.
        Follow the process and learn from outcomes.
      </>
    ) : (
      <>
        <strong className="text-white">Agents</strong> have no reasoning to learn
        from. Recommend in a vacuum.
      </>
    )

  return (
    <div
      style={{
        marginTop: 'auto',
        paddingTop: '0.85rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '0.9rem',
        borderTop: `1px solid ${
          tone === 'cyan' ? 'var(--border-cyan)' : 'var(--border-light)'
        }`,
      }}
    >
      <div style={{ display: 'flex', gap: '0.55rem' }}>
        <User
          style={{
            width: '1rem',
            height: '1rem',
            color,
            flexShrink: 0,
            marginTop: '0.15rem',
          }}
        />
        <div
          style={{
            fontSize: '0.75rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.45,
          }}
        >
          {leftText}
        </div>
      </div>
      <div style={{ display: 'flex', gap: '0.55rem' }}>
        <Bot
          style={{
            width: '1rem',
            height: '1rem',
            color,
            flexShrink: 0,
            marginTop: '0.15rem',
          }}
        />
        <div
          style={{
            fontSize: '0.75rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.45,
          }}
        >
          {rightText}
        </div>
      </div>
    </div>
  )
}

export default function Slide3bMissingLayer() {
  return (
    <div
      className="pdf-slide"
      style={{
        padding: '2rem 3.5rem 1.75rem',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {/* ---------- Header ---------- */}
      <div style={{ textAlign: 'center', marginBottom: '1.5rem', flexShrink: 0 }}>
        <h2
          style={{
            fontSize: '1.95rem',
            fontWeight: 800,
            lineHeight: 1.25,
            margin: 0,
          }}
        >
          Every company is a set of{' '}
          <span className="text-cyan">decisions</span>.{' '}
          <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>
            Only the byproducts have infrastructure.
          </span>
        </h2>
      </div>

      {/* ---------- Two panels ---------- */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          flex: 1,
          minHeight: 0,
        }}
      >
        {/* ===================== LEFT PANEL — TODAY ===================== */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '1.25rem 1.25rem 1rem',
            borderRadius: '1rem',
            border: '1px solid var(--border-light)',
            background: 'rgba(255,255,255,0.015)',
          }}
        >
          {/* Panel label */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              marginBottom: '0.9rem',
            }}
          >
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 800,
                letterSpacing: '0.22em',
                color: 'var(--text-muted)',
              }}
            >
              TODAY
            </span>
            <span
              style={{
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                fontStyle: 'italic',
              }}
            >
              scattered · lossy
            </span>
          </div>

          {/* DECISIONS — broken/dashed */}
          <div
            style={{
              border: '2px dashed rgba(239,68,68,0.45)',
              background: 'rgba(239,68,68,0.05)',
              borderRadius: '0.85rem',
              padding: '0.9rem 1rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                marginBottom: '0.4rem',
              }}
            >
              <MessageSquareWarning
                style={{
                  width: '1.25rem',
                  height: '1.25rem',
                  color: '#ef4444',
                  flexShrink: 0,
                }}
              />
              <span
                className="text-white"
                style={{
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  letterSpacing: '0.06em',
                }}
              >
                DECISIONS
              </span>
              <span
                style={{
                  fontSize: '0.68rem',
                  color: 'var(--text-muted)',
                  marginLeft: 'auto',
                  fontStyle: 'italic',
                }}
              >
                no infrastructure
              </span>
            </div>
            <p
              style={{
                fontSize: '0.78rem',
                color: 'var(--text-secondary)',
                margin: '0 0 0.5rem',
                lineHeight: 1.4,
              }}
            >
              Slack · Email · Meetings · PowerPoints · Gut feeling
            </p>
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                fontSize: '0.72rem',
                color: '#ef4444',
                fontWeight: 500,
                flexWrap: 'wrap',
              }}
            >
              <span>✕ No structure</span>
              <span>✕ No memory</span>
              <span>✕ No audit trail</span>
            </div>
          </div>

          <LayerArrow variant="broken" />

          <LayerBox
            icon={Workflow}
            title="ACTIONS & PROCESSES"
            subtitle="Jira · ServiceNow · RPA"
          />

          <LayerArrow variant="broken" />

          <LayerBox
            icon={Database}
            title="DATA"
            subtitle="SAP · Snowflake · CRM · Sheets · Docs · Drives"
          />

          <CaptionRow tone="muted" />
        </div>

        {/* ============ RIGHT PANEL — WITH DECISION INFRASTRUCTURE ============ */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '1.25rem 1.25rem 1rem',
            borderRadius: '1rem',
            border: '1px solid var(--border-cyan)',
            background:
              'linear-gradient(135deg, rgba(14,165,233,0.07) 0%, rgba(139,92,246,0.04) 100%)',
            boxShadow: 'var(--glow-cyan)',
          }}
        >
          {/* Panel label */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              marginBottom: '0.9rem',
            }}
          >
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 800,
                letterSpacing: '0.22em',
                color: 'var(--accent-cyan)',
              }}
            >
              WITH DECISION INFRASTRUCTURE
            </span>
            <span
              style={{
                fontSize: '0.72rem',
                color: 'var(--accent-cyan)',
                fontStyle: 'italic',
                opacity: 0.85,
              }}
            >
              orchestrated · learning
            </span>
          </div>

          {/* DECISION LAYER — solid cyan */}
          <div
            style={{
              border: '1.5px solid var(--accent-cyan)',
              background:
                'linear-gradient(135deg, rgba(14,165,233,0.22) 0%, rgba(14,165,233,0.06) 100%)',
              borderRadius: '0.85rem',
              padding: '0.9rem 1rem',
              boxShadow: '0 0 1.5rem rgba(14,165,233,0.28)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                marginBottom: '0.4rem',
              }}
            >
              <Layers
                style={{
                  width: '1.25rem',
                  height: '1.25rem',
                  color: 'var(--accent-cyan)',
                  flexShrink: 0,
                }}
              />
              <span
                className="text-white"
                style={{
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  letterSpacing: '0.06em',
                }}
              >
                DECISION LAYER
              </span>
              <span
                style={{
                  fontSize: '0.68rem',
                  color: 'var(--accent-cyan)',
                  marginLeft: 'auto',
                  fontStyle: 'italic',
                  fontWeight: 600,
                }}
              >
                Clarioo
              </span>
            </div>
            <p
              style={{
                fontSize: '0.78rem',
                color: 'var(--text-primary)',
                margin: '0 0 0.5rem',
                lineHeight: 1.4,
                opacity: 0.92,
              }}
            >
              Intent · Evidence · Stakeholders · Rationale
            </p>
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                fontSize: '0.72rem',
                color: 'var(--accent-emerald)',
                fontWeight: 600,
                flexWrap: 'wrap',
              }}
            >
              <span>✓ Structured</span>
              <span>✓ Remembered</span>
              <span>✓ Auditable</span>
            </div>
          </div>

          <LayerArrow variant="bidirectional" />

          <LayerBox
            icon={Workflow}
            title="ACTIONS & PROCESSES"
            subtitle="Jira · ServiceNow · RPA"
            tone="cyan"
          />

          <LayerArrow variant="bidirectional" />

          <LayerBox
            icon={Database}
            title="DATA"
            subtitle="SAP · Snowflake · CRM · Sheets · Docs · Drives"
            tone="cyan"
          />

          <CaptionRow tone="cyan" />
        </div>
      </div>
    </div>
  )
}
