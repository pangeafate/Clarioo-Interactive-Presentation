import React from 'react'
import { Brain, Plug, Users, Rocket, Cpu, Code, FlaskConical, Server, Shield, Megaphone } from 'lucide-react'

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

          <h3 className="text-emerald" style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem', borderBottom: '2px solid var(--accent-emerald)', paddingBottom: '1rem', display: 'inline-block' }}>
            Ask: $3M
          </h3>

          {/* Breakdown items */}
          {[
            { icon: <Users size={18} color="var(--accent-emerald)" />, label: 'Engineering & Team', amount: '$900K' },
            { icon: <Code size={18} color="var(--accent-emerald)" />, label: 'Dev tokens + R&D benchmarking', amount: '$570K' },
            { icon: <FlaskConical size={18} color="var(--accent-emerald)" />, label: 'Client pilots (infra + LLM subsidy)', amount: '$720K' },
            { icon: <Server size={18} color="var(--accent-emerald)" />, label: 'Our infra / capex', amount: '$180K' },
            { icon: <Shield size={18} color="var(--accent-emerald)" />, label: 'Legal & compliance', amount: '$80K' },
            { icon: <Megaphone size={18} color="var(--accent-emerald)" />, label: 'GTM + optional hires', amount: '$550K' },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {item.icon}
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0, flex: 1 }}>
                  {item.label}
                </h4>
                <span style={{ fontSize: '1.15rem', color: 'var(--accent-emerald)', fontWeight: 700 }}>{item.amount}</span>
              </div>
            </div>
          ))}

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
