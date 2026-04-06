import React from 'react'
import {
  MessageSquareWarning,
  Workflow,
  Database,
  Layers,
  HelpCircle,
  CheckCircle2,
  XCircle,
} from 'lucide-react'

/**
 * Slide 3b — "The Missing Layer"
 *
 * Sandwich composition:
 *   HEADER       — One-idea title
 *   TOP STRIP    — Trigger: a new VP's question that demands an answer from a
 *                  decision made 2 years ago.
 *   MAIN CORE    — Two panels tracing the SAME decision (Snowflake over
 *                  BigQuery, 2023) through three layers. Left = Today, broken;
 *                  right = With Decision Infrastructure, hero.
 *   BOTTOM STRIP — Delivery: the answer the VP gets in each world.
 *   FEEDBACK     — Dotted purple flywheel loop underneath.
 */

// ---------------------------------------------------------------------------
// FlowArrow — simple inline SVG, no markers. Variants:
//   broken         → dashed amber line, single V arrowhead pointing down
//   bidirectional  → solid cyan line, V arrowhead at both ends
// ---------------------------------------------------------------------------
function FlowArrow({ variant = 'broken' }) {
  const isBidirectional = variant === 'bidirectional'
  const stroke = isBidirectional
    ? 'var(--accent-cyan)'
    : 'var(--accent-amber)'

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '0.35rem 0',
      }}
    >
      <svg viewBox="0 0 24 36" style={{ width: '1.8rem', height: '2.1rem' }}>
        {isBidirectional ? (
          <g
            stroke={stroke}
            strokeWidth="2.4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Top arrowhead */}
            <polyline points="6,9 12,3 18,9" />
            {/* Shaft */}
            <line x1="12" y1="3" x2="12" y2="33" />
            {/* Bottom arrowhead */}
            <polyline points="6,27 12,33 18,27" />
          </g>
        ) : (
          <g
            stroke={stroke}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.85"
          >
            {/* Dashed shaft */}
            <line
              x1="12"
              y1="3"
              x2="12"
              y2="27"
              strokeDasharray="3 3"
            />
            {/* Solid arrowhead at bottom */}
            <polyline points="6,27 12,33 18,27" />
          </g>
        )}
      </svg>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Label: Value field row — used inside the hero Decision Layer.
// ---------------------------------------------------------------------------
function Field({ label, value, valueColor }) {
  return (
    <div style={{ display: 'flex', gap: '0.75rem', fontSize: '1rem', lineHeight: 1.5 }}>
      <span
        style={{
          color: 'var(--text-muted)',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          fontSize: '0.78rem',
          minWidth: '7rem',
          paddingTop: '0.18rem',
          fontWeight: 700,
          flexShrink: 0,
        }}
      >
        {label}
      </span>
      <span style={{ color: valueColor || 'var(--text-primary)', flex: 1 }}>
        {value}
      </span>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Supporting layer box (Actions / Data). `personaTag` renders a tiny outcome
// tag on the right side to fold the People/Agent captions into the row.
// ---------------------------------------------------------------------------
function SupportBox({ icon: Icon, title, lines, tone, personaTag }) {
  const isCyan = tone === 'cyan'
  return (
    <div
      style={{
        border: `1px solid ${isCyan ? 'var(--border-cyan)' : 'var(--border-light)'}`,
        background: isCyan ? 'rgba(14,165,233,0.06)' : 'rgba(255,255,255,0.03)',
        borderRadius: '0.85rem',
        padding: '1rem 1.15rem',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.9rem',
      }}
    >
      <Icon
        style={{
          width: '1.5rem',
          height: '1.5rem',
          color: isCyan ? 'var(--accent-cyan)' : 'var(--text-secondary)',
          flexShrink: 0,
          marginTop: '0.1rem',
        }}
      />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          className="text-white"
          style={{
            fontWeight: 800,
            fontSize: '1.05rem',
            letterSpacing: '0.06em',
            marginBottom: '0.25rem',
          }}
        >
          {title}
        </div>
        {lines.map((line, i) => (
          <div
            key={i}
            style={{
              fontSize: '0.92rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.45,
            }}
          >
            {line}
          </div>
        ))}
      </div>
      {personaTag && (
        <div
          style={{
            fontSize: '0.8rem',
            color: isCyan ? 'var(--accent-emerald)' : 'var(--accent-amber)',
            fontWeight: 700,
            textAlign: 'right',
            lineHeight: 1.35,
            maxWidth: '11rem',
            fontStyle: 'italic',
            flexShrink: 0,
            paddingTop: '0.1rem',
          }}
        >
          {personaTag}
        </div>
      )}
    </div>
  )
}

export default function Slide3bMissingLayer() {
  return (
    <div
      className="pdf-slide"
      style={{
        padding: '1.6rem 3rem 2.5rem',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {/* ====================================================================
            HEADER — one-idea title
         ==================================================================== */}
      <div style={{ textAlign: 'center', flexShrink: 0 }}>
        <h2
          style={{
            fontSize: '2.35rem',
            fontWeight: 800,
            lineHeight: 1.22,
            margin: 0,
          }}
        >
          <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>
            Every company is a set of{' '}
          </span>
          <span style={{ color: 'var(--text-primary)' }}>decisions</span>
          <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>
            . We want to expose the{' '}
          </span>
          <span style={{ color: 'var(--text-primary)' }}>reasoning</span>
          <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>
            {' '}behind them.
          </span>
        </h2>
      </div>

      {/* ====================================================================
            TOP STRIP — Trigger: a real question from a real person
         ==================================================================== */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexShrink: 0,
          marginTop: '2.25rem',
        }}
      >
        <div
          className="glass-card"
          style={{
            padding: '0.95rem 1.4rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1.1rem',
            maxWidth: '62rem',
          }}
        >
          <div
            style={{
              width: '2.8rem',
              height: '2.8rem',
              borderRadius: '50%',
              background:
                'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.95rem',
              fontWeight: 800,
              color: 'var(--text-primary)',
              flexShrink: 0,
            }}
          >
            VP
          </div>
          <div
            style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.4,
            }}
          >
            <span style={{ color: 'var(--text-primary)', fontWeight: 800 }}>
              New VP Data, week 2:
            </span>{' '}
            "Why did we pick{' '}
            <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>
              Snowflake
            </span>{' '}
            over{' '}
            <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>
              BigQuery
            </span>{' '}
            in 2023? The board wants to re-evaluate next quarter."
          </div>
          <HelpCircle
            style={{
              width: '1.75rem',
              height: '1.75rem',
              color: 'var(--accent-amber)',
              flexShrink: 0,
            }}
          />
        </div>
      </div>

      {/* ====================================================================
            MAIN CORE — two panels tracing THE SAME decision
         ==================================================================== */}
      <div
        className="missing-layer-panels"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1.75rem',
          flex: 1,
          minHeight: 0,
          marginTop: '1rem',
        }}
      >
        {/* ================ LEFT PANEL — TODAY ================ */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '1.1rem 1.25rem 1rem',
            borderRadius: '0.95rem',
            border: '1px solid var(--border-light)',
            background: 'rgba(255,255,255,0.015)',
            minHeight: 0,
          }}
        >
          {/* Panel label */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              marginBottom: '0.85rem',
            }}
          >
            <span
              style={{
                fontSize: '0.95rem',
                fontWeight: 800,
                letterSpacing: '0.24em',
                color: 'var(--text-primary)',
              }}
            >
              TODAY
            </span>
            <span
              style={{
                fontSize: '0.82rem',
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
              border: '2px dashed var(--accent-amber)',
              background: 'rgba(245,158,11,0.06)',
              borderRadius: '0.85rem',
              padding: '1rem 1.15rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.7rem',
                marginBottom: '0.55rem',
              }}
            >
              <MessageSquareWarning
                style={{
                  width: '1.55rem',
                  height: '1.55rem',
                  color: 'var(--accent-amber)',
                  flexShrink: 0,
                }}
              />
              <span
                className="text-white"
                style={{
                  fontWeight: 800,
                  fontSize: '1.15rem',
                  letterSpacing: '0.06em',
                }}
              >
                DECISIONS
              </span>
              <span
                style={{
                  fontSize: '0.78rem',
                  color: 'var(--text-muted)',
                  marginLeft: 'auto',
                  fontStyle: 'italic',
                }}
              >
                no infrastructure
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.35rem',
                fontSize: '0.95rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.5,
              }}
            >
              <div>
                Lives across{' '}
                <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                  14 Slack threads
                </span>
                {' · '}
                <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                  3 email chains
                </span>
                {' · '}
                <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                  1 orphaned Notion doc
                </span>
              </div>
              <div>
                Original owner:{' '}
                <span style={{ color: 'var(--text-primary)' }}>Jamie L.</span> (left
                company Q1 '24) — rationale: unknown
              </div>
              <div>
                Exec summary doc:{' '}
                <span style={{ color: 'var(--accent-amber)', fontStyle: 'italic' }}>
                  never written
                </span>
                {' · '}vendor meetings:{' '}
                <span style={{ color: 'var(--accent-amber)', fontStyle: 'italic' }}>
                  recordings auto-deleted
                </span>
              </div>
              <div>
                Latest{' '}
                <span style={{ color: 'var(--text-primary)', fontFamily: 'ui-monospace, Menlo, monospace' }}>
                  #ops-data
                </span>
                {' '}question: "anyone remember why we went Snowflake?" —{' '}
                <span style={{ color: 'var(--accent-amber)', fontWeight: 600 }}>
                  12 days ago, 0 replies
                </span>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                gap: '1.1rem',
                fontSize: '0.85rem',
                color: 'var(--accent-amber)',
                fontWeight: 700,
                marginTop: '0.65rem',
                flexWrap: 'wrap',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <XCircle style={{ width: '1rem', height: '1rem' }} />
                No structure
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <XCircle style={{ width: '1rem', height: '1rem' }} />
                No memory
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <XCircle style={{ width: '1rem', height: '1rem' }} />
                No audit trail
              </span>
            </div>
          </div>

          <FlowArrow variant="broken" />

          <SupportBox
            icon={Workflow}
            title="ACTIONS & PROCESSES"
            lines={[
              'RFP-2023-06.docx · last edited Aug 2023 · closed Jira epic EPIC-412',
              'Vendor reviews lived in reviewers\' heads — reviewers gone',
            ]}
            personaTag={'People re-litigate. Agents recommend in a vacuum.'}
          />

          <FlowArrow variant="broken" />

          <SupportBox
            icon={Database}
            title="DATA"
            lines={[
              'Cost models in Sheets (which version?) · contracts in shared Drive',
              '$487k/yr contract renews Sep \'25 · usage buried in Snowflake itself',
            ]}
          />

          <div
            style={{
              marginTop: '0.95rem',
              fontSize: '0.92rem',
              color: 'var(--accent-amber)',
              fontStyle: 'italic',
              textAlign: 'center',
              fontWeight: 600,
            }}
          >
            Context walks out the door with the people who built it.
          </div>
        </div>

        {/* ============ RIGHT PANEL — WITH DECISION INFRASTRUCTURE (HERO) ============ */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '1.1rem 1.25rem 1rem',
            borderRadius: '0.95rem',
            border: '2px solid var(--border-cyan)',
            background:
              'linear-gradient(135deg, rgba(14,165,233,0.09) 0%, rgba(139,92,246,0.05) 100%)',
            boxShadow: 'var(--glow-cyan)',
            minHeight: 0,
          }}
        >
          {/* Panel label */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              marginBottom: '0.85rem',
            }}
          >
            <span
              style={{
                fontSize: '0.95rem',
                fontWeight: 800,
                letterSpacing: '0.22em',
                color: 'var(--accent-cyan)',
              }}
            >
              WITH DECISION INFRASTRUCTURE
            </span>
            <span
              style={{
                fontSize: '0.82rem',
                color: 'var(--accent-cyan)',
                fontStyle: 'italic',
                opacity: 0.9,
              }}
            >
              orchestrated · learning
            </span>
          </div>

          {/* DECISION LAYER — HERO */}
          <div
            style={{
              border: '1.5px solid var(--accent-cyan)',
              background:
                'linear-gradient(135deg, rgba(14,165,233,0.24) 0%, rgba(14,165,233,0.08) 100%)',
              borderRadius: '0.85rem',
              padding: '1.1rem 1.25rem',
              boxShadow: '0 0 1.5rem rgba(14,165,233,0.32)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.7rem',
                marginBottom: '0.8rem',
              }}
            >
              <Layers
                style={{
                  width: '1.55rem',
                  height: '1.55rem',
                  color: 'var(--accent-cyan)',
                  flexShrink: 0,
                }}
              />
              <span
                className="text-white"
                style={{
                  fontWeight: 800,
                  fontSize: '1.15rem',
                  letterSpacing: '0.06em',
                }}
              >
                DECISION LAYER
              </span>
              <span
                style={{
                  fontSize: '0.82rem',
                  color: 'var(--accent-cyan)',
                  marginLeft: 'auto',
                  fontStyle: 'italic',
                  fontWeight: 700,
                }}
              >
                Clarioo
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.35rem',
              }}
            >
              <Field label="Intent" value="Data warehouse replatform" />
              <Field
                label="Stakeholders"
                value="CTO · VP Data · CFO · Eng lead"
              />
              <Field
                label="Alternatives"
                value="BigQuery (72) · Databricks (68) · Redshift (61)"
              />
              <Field
                label="Rationale"
                value="Snowflake won on multi-cloud + semi-structured"
                valueColor="var(--accent-cyan)"
              />
              <Field
                label="Re-eval"
                value="Contract +15% cost OR renewal 2025-09"
              />
              <Field label="Captured" value="2023-08-14 · queryable in 10s" />
            </div>

            <div
              style={{
                display: 'flex',
                gap: '0.75rem 1.1rem',
                fontSize: '0.85rem',
                color: 'var(--accent-emerald)',
                fontWeight: 700,
                marginTop: '0.7rem',
                flexWrap: 'wrap',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <CheckCircle2 style={{ width: '1rem', height: '1rem' }} />
                Structured
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <CheckCircle2 style={{ width: '1rem', height: '1rem' }} />
                Remembered
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <CheckCircle2 style={{ width: '1rem', height: '1rem' }} />
                Auditable
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <CheckCircle2 style={{ width: '1rem', height: '1rem' }} />
                End-to-end provenance
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <CheckCircle2 style={{ width: '1rem', height: '1rem' }} />
                Governance by data-structure design
              </span>
            </div>
          </div>

          <FlowArrow variant="bidirectional" />

          <SupportBox
            icon={Workflow}
            title="ACTIONS & PROCESSES"
            lines={[
              'RFP-2023-06 linked · owner Alex R. · EPIC-412 archived with status',
              'Re-eval triggers live: contract +15% · renewal 2025-09',
            ]}
            tone="cyan"
            personaTag="People build on precedent. Agents grounded in reasoning."
          />

          <FlowArrow variant="bidirectional" />

          <SupportBox
            icon={Database}
            title="DATA"
            lines={[
              '$487k/yr contract · 34% YoY usage growth · pinned to decision',
              'Cost models, usage, contracts enriched with the rationale that produced them',
            ]}
            tone="cyan"
          />

          <div
            style={{
              marginTop: '0.95rem',
              fontSize: '0.92rem',
              color: 'var(--accent-cyan)',
              fontStyle: 'italic',
              textAlign: 'center',
              fontWeight: 700,
            }}
          >
            Every decision compounds into organizational memory.
          </div>
        </div>
      </div>

    </div>
  )
}
