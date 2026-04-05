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
 *   TOP STRIP    — Trigger: a new VP's question that demands an answer from a
 *                  decision made 2 years ago.
 *   MAIN CORE    — Two panels tracing the SAME decision (Snowflake over
 *                  BigQuery, 2023) through three layers (Decisions / Actions /
 *                  Data): left panel Today (broken, lossy); right panel With
 *                  Decision Infrastructure (hero — structured, queryable).
 *   BOTTOM STRIP — Delivery: the answer the VP gets in each world.
 *   FEEDBACK     — Dotted purple loop: every decision becomes context for the
 *                  next one.
 */

// ---------------------------------------------------------------------------
// SVG flow arrows — inline with <marker> arrowheads per slide-building guide.
// variant="broken": dashed amber, single downward arrow (lossy)
// variant="bidirectional": solid cyan, arrows on both ends (orchestrated)
// ---------------------------------------------------------------------------
function FlowArrow({ variant = 'broken' }) {
  if (variant === 'bidirectional') {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '0.2rem 0',
        }}
      >
        <svg
          viewBox="0 0 40 28"
          style={{ width: '1.75rem', height: '1.3rem' }}
        >
          <defs>
            <marker
              id="cyanHeadUp"
              markerWidth="7"
              markerHeight="7"
              refX="3.5"
              refY="0.5"
              orient="auto"
            >
              <path d="M0,6 L3.5,0 L7,6 z" fill="var(--accent-cyan)" />
            </marker>
            <marker
              id="cyanHeadDown"
              markerWidth="7"
              markerHeight="7"
              refX="3.5"
              refY="6"
              orient="auto"
            >
              <path d="M0,0 L3.5,6 L7,0 z" fill="var(--accent-cyan)" />
            </marker>
          </defs>
          <line
            x1="20"
            y1="4"
            x2="20"
            y2="24"
            stroke="var(--accent-cyan)"
            strokeWidth="2.4"
            markerStart="url(#cyanHeadUp)"
            markerEnd="url(#cyanHeadDown)"
          />
        </svg>
      </div>
    )
  }
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '0.2rem 0',
      }}
    >
      <svg viewBox="0 0 40 26" style={{ width: '1.75rem', height: '1.2rem' }}>
        <defs>
          <marker
            id="amberHeadDown"
            markerWidth="7"
            markerHeight="7"
            refX="3.5"
            refY="6"
            orient="auto"
          >
            <path
              d="M0,0 L3.5,6 L7,0 z"
              fill="var(--accent-amber)"
              opacity="0.7"
            />
          </marker>
        </defs>
        <line
          x1="20"
          y1="2"
          x2="20"
          y2="22"
          stroke="var(--accent-amber)"
          strokeWidth="1.6"
          strokeDasharray="2.2 2.8"
          opacity="0.7"
          markerEnd="url(#amberHeadDown)"
        />
      </svg>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Label: Value field row — used inside the hero Decision Layer.
// ---------------------------------------------------------------------------
function Field({ label, value, valueColor }) {
  return (
    <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.72rem', lineHeight: 1.5 }}>
      <span
        style={{
          color: 'var(--text-muted)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          fontSize: '0.62rem',
          minWidth: '5.5rem',
          paddingTop: '0.1rem',
          fontWeight: 600,
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
// Supporting layer box (Actions / Data). Used on both sides with a `tone`
// switch. `personaTag` renders a tiny People-or-Agent outcome tag inside the
// box — this is where we fold the human/agent captions from the old design.
// ---------------------------------------------------------------------------
function SupportBox({ icon: Icon, title, data, tone, personaTag }) {
  const isCyan = tone === 'cyan'
  return (
    <div
      style={{
        border: `1px solid ${
          isCyan ? 'var(--border-cyan)' : 'var(--border-light)'
        }`,
        background: isCyan
          ? 'rgba(14,165,233,0.05)'
          : 'rgba(255,255,255,0.025)',
        borderRadius: '0.75rem',
        padding: '0.7rem 0.9rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
      }}
    >
      <Icon
        style={{
          width: '1.15rem',
          height: '1.15rem',
          color: isCyan ? 'var(--accent-cyan)' : 'var(--text-secondary)',
          flexShrink: 0,
        }}
      />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          className="text-white"
          style={{
            fontWeight: 700,
            fontSize: '0.78rem',
            letterSpacing: '0.06em',
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: '0.7rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.35,
          }}
        >
          {data}
        </div>
      </div>
      {personaTag && (
        <div
          style={{
            fontSize: '0.6rem',
            color: isCyan ? 'var(--accent-emerald)' : 'var(--accent-amber)',
            fontWeight: 600,
            textAlign: 'right',
            lineHeight: 1.25,
            maxWidth: '8rem',
            fontStyle: 'italic',
            opacity: 0.9,
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
        padding: '1.75rem 3.25rem 1.25rem',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
      }}
    >
      {/* ====================================================================
            HEADER — one-idea title
         ==================================================================== */}
      <div style={{ textAlign: 'center', flexShrink: 0 }}>
        <h2
          style={{
            fontSize: '1.75rem',
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

      {/* ====================================================================
            TOP STRIP — Trigger: a real question from a real person
         ==================================================================== */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexShrink: 0,
          marginTop: '0.85rem',
        }}
      >
        <div
          className="glass-card"
          style={{
            padding: '0.7rem 1.1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem',
            maxWidth: '52rem',
          }}
        >
          <div
            style={{
              width: '2.1rem',
              height: '2.1rem',
              borderRadius: '50%',
              background:
                'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.72rem',
              fontWeight: 800,
              color: 'var(--text-primary)',
              flexShrink: 0,
            }}
          >
            VP
          </div>
          <div
            style={{
              fontSize: '0.82rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.4,
            }}
          >
            <span
              style={{ color: 'var(--text-primary)', fontWeight: 700 }}
            >
              New VP Data, week 2:
            </span>{' '}
            "Why did we pick{' '}
            <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>
              Snowflake
            </span>{' '}
            over{' '}
            <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>
              BigQuery
            </span>{' '}
            in 2023? The board wants to re-evaluate next quarter."
          </div>
          <HelpCircle
            style={{
              width: '1.2rem',
              height: '1.2rem',
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
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1.5rem',
          flex: 1,
          minHeight: 0,
          marginTop: '0.85rem',
        }}
      >
        {/* ================ LEFT PANEL — TODAY ================ */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '1rem 1rem 0.85rem',
            borderRadius: '0.85rem',
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
              marginBottom: '0.65rem',
            }}
          >
            <span
              style={{
                fontSize: '0.68rem',
                fontWeight: 800,
                letterSpacing: '0.22em',
                color: 'var(--text-muted)',
              }}
            >
              TODAY
            </span>
            <span
              style={{
                fontSize: '0.65rem',
                color: 'var(--text-muted)',
                fontStyle: 'italic',
              }}
            >
              scattered · lossy
            </span>
          </div>

          {/* DECISIONS — broken/dashed, sparse (ghosted) */}
          <div
            style={{
              border: '1.5px dashed var(--accent-amber)',
              background: 'rgba(245,158,11,0.05)',
              borderRadius: '0.75rem',
              padding: '0.8rem 0.9rem',
              opacity: 0.85,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.35rem',
              }}
            >
              <MessageSquareWarning
                style={{
                  width: '1.1rem',
                  height: '1.1rem',
                  color: 'var(--accent-amber)',
                  flexShrink: 0,
                }}
              />
              <span
                className="text-white"
                style={{
                  fontWeight: 800,
                  fontSize: '0.82rem',
                  letterSpacing: '0.06em',
                }}
              >
                DECISIONS
              </span>
              <span
                style={{
                  fontSize: '0.6rem',
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
                fontSize: '0.68rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.45,
              }}
            >
              Snowflake-over-BigQuery call lives across
              <br />
              <span style={{ color: 'var(--text-primary)' }}>
                14 Slack threads
              </span>
              {' · '}
              <span style={{ color: 'var(--text-primary)' }}>
                3 email chains
              </span>
              {' · '}
              <span style={{ color: 'var(--text-primary)' }}>
                1 orphaned Notion doc
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                gap: '0.85rem',
                fontSize: '0.62rem',
                color: 'var(--accent-amber)',
                fontWeight: 600,
                marginTop: '0.4rem',
                flexWrap: 'wrap',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                <XCircle
                  style={{ width: '0.75rem', height: '0.75rem' }}
                />
                No structure
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                <XCircle
                  style={{ width: '0.75rem', height: '0.75rem' }}
                />
                No memory
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                <XCircle
                  style={{ width: '0.75rem', height: '0.75rem' }}
                />
                No audit trail
              </span>
            </div>
          </div>

          <FlowArrow variant="broken" />

          <SupportBox
            icon={Workflow}
            title="ACTIONS & PROCESSES"
            data="Stale RFP doc · closed Jira epic · vendor reviews lost with team"
            personaTag="People re-litigate. Agents recommend in a vacuum."
          />

          <FlowArrow variant="broken" />

          <SupportBox
            icon={Database}
            title="DATA"
            data="Cost models in Sheets · contracts in Drive · usage buried in Snowflake itself"
          />

          <div
            style={{
              marginTop: 'auto',
              paddingTop: '0.6rem',
              fontSize: '0.65rem',
              color: 'var(--text-muted)',
              fontStyle: 'italic',
              textAlign: 'center',
              borderTop: '1px solid var(--border-light)',
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
            padding: '1rem 1rem 0.85rem',
            borderRadius: '0.85rem',
            border: '2px solid var(--border-cyan)',
            background:
              'linear-gradient(135deg, rgba(14,165,233,0.08) 0%, rgba(139,92,246,0.05) 100%)',
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
              marginBottom: '0.65rem',
            }}
          >
            <span
              style={{
                fontSize: '0.68rem',
                fontWeight: 800,
                letterSpacing: '0.22em',
                color: 'var(--accent-cyan)',
              }}
            >
              WITH DECISION INFRASTRUCTURE
            </span>
            <span
              style={{
                fontSize: '0.65rem',
                color: 'var(--accent-cyan)',
                fontStyle: 'italic',
                opacity: 0.85,
              }}
            >
              orchestrated · learning
            </span>
          </div>

          {/* DECISION LAYER — HERO box: solid cyan, structured fields */}
          <div
            style={{
              border: '1.5px solid var(--accent-cyan)',
              background:
                'linear-gradient(135deg, rgba(14,165,233,0.22) 0%, rgba(14,165,233,0.06) 100%)',
              borderRadius: '0.75rem',
              padding: '0.85rem 0.95rem',
              boxShadow: '0 0 1.25rem rgba(14,165,233,0.3)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.5rem',
              }}
            >
              <Layers
                style={{
                  width: '1.1rem',
                  height: '1.1rem',
                  color: 'var(--accent-cyan)',
                  flexShrink: 0,
                }}
              />
              <span
                className="text-white"
                style={{
                  fontWeight: 800,
                  fontSize: '0.82rem',
                  letterSpacing: '0.06em',
                }}
              >
                DECISION LAYER
              </span>
              <span
                style={{
                  fontSize: '0.6rem',
                  color: 'var(--accent-cyan)',
                  marginLeft: 'auto',
                  fontStyle: 'italic',
                  fontWeight: 700,
                }}
              >
                Clarioo
              </span>
            </div>

            {/* Structured fields for the same decision */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.22rem',
              }}
            >
              <Field label="Intent" value="Data warehouse replatform" />
              <Field
                label="Stakeholders"
                value="CTO · VP Data · CFO · Eng lead"
              />
              <Field
                label="Evidence"
                value="4 vendors · cost, perf, ecosystem"
              />
              <Field
                label="Rationale"
                value="Snowflake won on multi-cloud + semi-structured"
                valueColor="var(--accent-cyan)"
              />
              <Field label="Captured" value="2023-08-14 · queryable now" />
            </div>

            <div
              style={{
                display: 'flex',
                gap: '0.85rem',
                fontSize: '0.62rem',
                color: 'var(--accent-emerald)',
                fontWeight: 700,
                marginTop: '0.5rem',
                flexWrap: 'wrap',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                <CheckCircle2
                  style={{ width: '0.75rem', height: '0.75rem' }}
                />
                Structured
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                <CheckCircle2
                  style={{ width: '0.75rem', height: '0.75rem' }}
                />
                Remembered
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                <CheckCircle2
                  style={{ width: '0.75rem', height: '0.75rem' }}
                />
                Auditable
              </span>
            </div>
          </div>

          <FlowArrow variant="bidirectional" />

          <SupportBox
            icon={Workflow}
            title="ACTIONS & PROCESSES"
            data="RFP & Jira epic linked back · owner, status, re-eval triggers live"
            tone="cyan"
            personaTag="People build on precedent. Agents grounded in reasoning."
          />

          <FlowArrow variant="bidirectional" />

          <SupportBox
            icon={Database}
            title="DATA"
            data="Contracts · usage · cost models enriched with the decision context that produced them"
            tone="cyan"
          />

          <div
            style={{
              marginTop: 'auto',
              paddingTop: '0.6rem',
              fontSize: '0.65rem',
              color: 'var(--accent-cyan)',
              fontStyle: 'italic',
              textAlign: 'center',
              borderTop: '1px solid var(--border-cyan)',
              fontWeight: 600,
            }}
          >
            Every decision compounds into organizational memory.
          </div>
        </div>
      </div>

      {/* ====================================================================
            BOTTOM STRIP — Delivery: the answer the VP gets
         ==================================================================== */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1.5rem',
          marginTop: '0.85rem',
          flexShrink: 0,
        }}
      >
        <div
          style={{
            padding: '0.6rem 0.9rem',
            borderRadius: '0.6rem',
            border: '1px solid var(--border-light)',
            background: 'rgba(245,158,11,0.04)',
            fontSize: '0.72rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.4,
          }}
        >
          <span
            style={{ color: 'var(--accent-amber)', fontWeight: 800 }}
          >
            Today →{' '}
          </span>
          "Nobody remembers. Re-do the evaluation from scratch."
        </div>
        <div
          style={{
            padding: '0.6rem 0.9rem',
            borderRadius: '0.6rem',
            border: '1px solid var(--border-cyan)',
            background: 'rgba(14,165,233,0.06)',
            fontSize: '0.72rem',
            color: 'var(--text-primary)',
            lineHeight: 1.4,
          }}
        >
          <span style={{ color: 'var(--accent-cyan)', fontWeight: 800 }}>
            With Clarioo →{' '}
          </span>
          Answered in 10 seconds, with sources, stakeholders, and rationale.
        </div>
      </div>

      {/* ====================================================================
            FEEDBACK LOOP — whisper-quiet long-term-value annotation
         ==================================================================== */}
      <svg
        viewBox="0 0 1000 36"
        preserveAspectRatio="none"
        style={{
          width: '100%',
          height: '1.6rem',
          marginTop: '0.5rem',
          opacity: 0.55,
          flexShrink: 0,
        }}
      >
        <path
          d="M 950 14 Q 500 42 50 14"
          fill="none"
          stroke="var(--accent-purple)"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
        <text x="770" y="10" fill="var(--text-muted)" fontSize="9">
          Decision captured
        </text>
        <text x="445" y="10" fill="var(--text-muted)" fontSize="9">
          Context graph enriched
        </text>
        <text x="90" y="10" fill="var(--text-muted)" fontSize="9">
          Next decision starts smarter
        </text>
      </svg>
    </div>
  )
}
