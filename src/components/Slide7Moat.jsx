import React from 'react'
import { Database, GitBranch, Compass, Shield, Brain } from 'lucide-react'

const moats = [
  {
    icon: Database,
    color: 'var(--accent-amber)',
    title: 'Decision as a First-Class Data Object',
    body: <>Decisions are modeled as <span className="text-white">stateful lifecycle records</span> in a structured <span className="text-white">Intent Knowledge Graph</span> — not as one-time events or byproducts of tasks and communication. Each intent node carries structured metadata, rich artefacts, and evolving relationships, creating a <span className="text-white">queryable decision layer</span> that no existing tool replicates.</>,
  },
  {
    icon: GitBranch,
    color: 'var(--accent-emerald)',
    title: 'DAG as Unified Data Structure and Execution Engine',
    body: <>The typed decision DAG isn't just a representation of how a decision was made — it's also the <span className="text-white">runtime that drives it forward</span>. Blocks have typed I/O and validation, <span className="text-white">gate transitions enforce human approvals</span>, and the orchestration layer manages parallel workstreams, escalations, and side-effect control. Most tools separate "the plan" from "the engine that runs it"; in Clarioo they are the same object.</>,
  },
  {
    icon: Compass,
    color: 'var(--accent-cyan)',
    title: 'Progressive Path Composition from Evidence',
    body: <>The DAG is <span className="text-white">never pre-designed; it's discovered</span>. LLM agents propose and revise the best-next-step structure as new evidence arrives — claims are extracted, contradictions detected, policies mapped, owners derived. The <span className="text-white">path evolves with the analysis</span>, not before it.</>,
  },
  {
    icon: Shield,
    color: 'var(--accent-purple)',
    title: 'Append-Only Provenance & Replayability',
    body: <>Every state transition, artefact update, and approval event is <span className="text-white">recorded immutably</span>. Combined with dual-reference snapshots (state-at-decision-time + live link), this creates a <span className="text-white">fully auditable, replayable decision history</span> — critical for enterprise compliance and <span className="text-white">impossible to retrofit</span>.</>,
  },
  {
    icon: Brain,
    color: 'var(--accent-cyan)',
    title: 'Decision Memory Flywheel',
    body: <>Every resolved intent, its rationale, and pilot feedback feed into a <span className="text-white">continuously improving benchmark</span> for specialist sub-agents. The more decisions processed, the better the system gets — a <span className="text-white">compounding data advantage</span> that's impossible to replicate without the same decision history.</>,
  },
]

export default function Slide7Moat() {
  return (
    <div className="pdf-slide" style={{ padding: '4rem 6rem' }}>

      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h2 className="text-white" style={{ fontSize: '2.5rem', fontWeight: 800 }}>
          The Moat Stack
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', maxWidth: '900px', margin: '0 auto' }}>
        {moats.map(({ icon: Icon, color, title, body }) => (
          <div
            key={title}
            className="glass-card"
            style={{
              padding: '1.4rem 1.75rem',
              borderLeft: `4px solid ${color}`,
              display: 'flex',
              gap: '1.1rem',
              alignItems: 'flex-start',
            }}
          >
            <Icon size={24} color={color} style={{ flexShrink: 0, marginTop: '0.1rem' }} />
            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color, marginBottom: '0.3rem' }}>
                {title}
              </h3>
              <p style={{ fontSize: '0.85rem', lineHeight: 1.5, color: 'var(--text-secondary)', margin: 0 }}>
                {body}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
