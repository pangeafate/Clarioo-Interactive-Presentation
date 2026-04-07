import React from 'react'
import { Brain, Plug, Users, Rocket, Cpu } from 'lucide-react'

export default function Slide8StatusAsk() {
  return (
    <div className="pdf-slide" style={{ padding: '4rem 6rem' }}>

      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="text-cyan" style={{ fontSize: '2.5rem', fontWeight: 800 }}>
          Current Status & Ask
        </h2>
      </div>

      <div className="status-ask-columns" style={{ display: 'flex', gap: '4rem', height: '100%' }}>

        {/* Current Status Box */}
        <div className="glass-card" style={{ flex: 1, padding: '2.5rem', borderLeft: '4px solid var(--accent-cyan) !important' }}>
          <h3 className="text-white" style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem', borderBottom: '2px solid var(--accent-cyan)', paddingBottom: '1rem', display: 'inline-block' }}>
            Current Status
          </h3>

          {/* 1. Discovery-to-Decision Agent */}
          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <Rocket size={18} color="var(--accent-cyan)" />
              <h4 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                Software Discovery-to-Decision Agent
              </h4>
              <span style={{ fontSize: '1.15rem', color: 'var(--accent-cyan)', fontWeight: 700 }}>Live</span>
            </div>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5, paddingLeft: '1.65rem' }}>
              <span className="text-white">Criteria formulation, vendor research, evidence-based comparison, and process orchestration</span> — all working. Consulting partners already using it as deal-prep infrastructure. <span className="text-white">Bootstrapped to this point</span> — no prior funding. <span style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>Proves the decision-as-a-lifecycle model works.</span>
            </p>
          </div>

          {/* 2. Intent Engine & Decision Graph */}
          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <Cpu size={18} color="var(--accent-cyan)" />
              <h4 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                Intent Engine & Decision Graph
              </h4>
              <span style={{ fontSize: '1.15rem', color: 'var(--accent-cyan)', fontWeight: 700 }}>Prototype</span>
            </div>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5, paddingLeft: '1.65rem' }}>
              Intent capture & classification agent operational. Basic <span className="text-white">evidence-driven DAG construction</span> running. Successful first tests on <span className="text-white">historical meeting transcripts</span> — validates that real enterprise conversations contain extractable decision intent. <span style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>Hardest part to prove — already producing results on real data.</span>
            </p>
          </div>

          {/* 3. Phase 2 — Proactive Agent */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <Plug size={18} color="var(--accent-cyan)" />
              <h4 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                Proactive Agent & Integrations
              </h4>
              <span style={{ fontSize: '1.15rem', color: 'var(--accent-amber)', fontWeight: 700 }}>In Progress</span>
            </div>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5, paddingLeft: '1.65rem' }}>
              Proactive Slack/email agent in development — will <span className="text-white">surface emerging intents</span> and nudge stakeholders without manual triggers. <span style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>Moves Clarioo from a tool you use to a system that works for you.</span>
            </p>
          </div>
        </div>

        {/* Ask Box */}
        <div className="glass-card" style={{ flex: 1, padding: '2.5rem', position: 'relative', overflow: 'hidden', borderLeft: '4px solid var(--accent-emerald) !important' }}>
          <div className="text-emerald" style={{ position: 'absolute', right: '-1rem', top: '-1rem', fontSize: '8rem', opacity: 0.1, fontWeight: 900 }}>$3M</div>

          <h3 className="text-emerald" style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            Ask: $3M
          </h3>

          {/* 1. Core Engine */}
          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <Brain size={18} color="var(--accent-emerald)" />
              <h4 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                Core Engine & Agent Development
              </h4>
              <span style={{ fontSize: '1.15rem', color: 'var(--accent-emerald)', fontWeight: 700 }}>~50% / ~$1.5M</span>
            </div>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5, paddingLeft: '1.65rem' }}>
              Decision DAG execution engine, specialist sub-agents, <span className="text-white">Intent Knowledge Graph</span> infrastructure, provenance & audit layer. <span style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>This is the moat investment.</span>
            </p>
          </div>

          {/* 2. Enterprise Integration */}
          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <Plug size={18} color="var(--accent-emerald)" />
              <h4 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                Enterprise Integration & Pilots
              </h4>
              <span style={{ fontSize: '1.15rem', color: 'var(--accent-emerald)', fontWeight: 700 }}>~30% / ~$900K</span>
            </div>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5, paddingLeft: '1.65rem' }}>
              MCP/API connectors (Slack, Confluence, Jira, CRM), agentic search, <span className="text-white">3–5 anchor client pilots</span>, feedback pipeline feeding the decision memory flywheel. <span style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>This is where the flywheel starts spinning.</span>
            </p>
          </div>

          {/* 3. Team */}
          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <Users size={18} color="var(--accent-emerald)" />
              <h4 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                Team
              </h4>
              <span style={{ fontSize: '1.15rem', color: 'var(--accent-emerald)', fontWeight: 700 }}>~20% / ~$600K</span>
            </div>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5, paddingLeft: '1.65rem' }}>
              2–3 senior engineers (graph/backend, LLM/agent, frontend), 1 enterprise pilot lead. <span className="text-white">Lean team — sub-agents do the scaling, not headcount.</span>
            </p>
          </div>

          {/* Narrative line */}
          <div style={{
            borderTop: '1px solid var(--border-light)',
            paddingTop: '1rem',
            marginTop: 'auto'
          }}>
            <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
              "$3M buys 18 months to build the core decision engine, prove it with 3–5 enterprise pilots, and <span className="text-white">start the data flywheel that makes us impossible to catch</span>."
            </p>
          </div>
        </div>

      </div>

    </div>
  )
}
