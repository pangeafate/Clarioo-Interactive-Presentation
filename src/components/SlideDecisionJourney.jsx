import React, { useState } from 'react'
import { MessageSquareText, Route, Workflow, Bot, Users, Brain, ArrowUp, ExternalLink } from 'lucide-react'

const ICONS = {
  capture: MessageSquareText,
  compose: Route,
  orchestrate: Workflow,
  analyze: Bot,
  collaborate: Users,
  memory: Brain,
}

const journeySteps = [
  {
    id: 'capture',
    iconKey: 'capture',
    label: 'Capture',
    subtitle: 'Intent → Record',
    color: '#00d2ff',
    description: 'A decision-maker describes a decision in natural language via Slack or Telegram.',
    example: '"We need to select a cloud vendor for our new platform"',
    bullets: [
      'Natural language parsed into structured fields',
      'Decision record created: title, scope, priority, stakeholders',
      'Auto-classified: vendor selection, tech choice, policy, etc.',
      'Status set to "proposed" — ready for path composition',
    ],
  },
  {
    id: 'compose',
    iconKey: 'compose',
    label: 'Compose Path',
    subtitle: 'Template → Graph',
    color: '#8b5cf6',
    description: 'A decision path is generated from the matched template with phases, blocks, edges, and gates.',
    example: 'Vendor Selection template → 4 phases, 12 blocks, 15 edges',
    bullets: [
      'Template selected based on decision type',
      'Phases: Discovery → Analysis → Evaluation → Decision',
      'Blocks define individual analysis tasks',
      'Edges define execution flow (sequential, parallel, conditional)',
      'Gates define phase completion criteria',
      'Path can be modified live: add/remove/reorder blocks',
    ],
    link: {
      url: 'https://clarioo.decisionbot.lakestrom.com/d/24',
      label: 'See it Live — Decision Path Interface',
    },
  },
  {
    id: 'orchestrate',
    iconKey: 'orchestrate',
    label: 'Orchestrate',
    subtitle: 'DAG Execution',
    color: '#f59e0b',
    description: 'The decision graph executes as a DAG — parallel tracks run concurrently, sequential phases wait for predecessors.',
    example: 'Phase 2 (Analysis) activates only after Phase 1 gate passes',
    bullets: [
      'DAG-aware phase activation with dependency edges',
      'Convergence blocks wait for all parallel tracks',
      'Multi-mode execution: AI-first, Human-first, Meeting, Automatic',
      'Overdue detection triggers chase ladder: reminder → chase → escalation',
    ],
  },
  {
    id: 'analyze',
    iconKey: 'analyze',
    label: 'Specialist Agents',
    subtitle: '7 AI Experts',
    color: '#ec4899',
    description: '7 specialist AI agents analyze specific aspects of the decision, each with domain expertise.',
    example: 'Financial Analyst assessing TCO across 3 vendor options',
    bullets: [
      'Financial Analyst — cost modeling & ROI projections',
      'Legal Reviewer — compliance & contract analysis',
      'Technical Assessor — architecture fit evaluation',
      'Risk Analyst — risk identification & mitigation',
      'Vendor Specialist — market comparison',
      'Security Auditor — security posture assessment',
      'Market Analyst — competitive landscape analysis',
    ],
  },
  {
    id: 'collaborate',
    iconKey: 'collaborate',
    label: 'Stakeholders',
    subtitle: 'Review & Decide',
    color: '#10b981',
    description: 'Stakeholders participate via Telegram inline buttons — approve, revise, or escalate without leaving their chat.',
    example: 'CTO approves technical assessment via inline button ✅',
    bullets: [
      'Responses classified: completed, partial, question, objection, delegation',
      'Inline Telegram buttons for zero-friction participation',
      'Real-time notifications for all decision events',
      'Chase ladder ensures no stalled decisions',
    ],
  },
  {
    id: 'memory',
    iconKey: 'memory',
    label: 'Decision Memory',
    subtitle: 'Learn & Reuse',
    color: '#6366f1',
    description: 'Learnings are automatically extracted and stored — future decisions are enriched by institutional memory.',
    example: '8 learnings extracted: "vendor evaluation took 2× expected time"',
    bullets: [
      '8 memory types: process, stakeholder, timing, cost, risk, communication, template, general',
      'Up to 20 memories per completed decision',
      'Future agents query memory before composing new paths',
      'Cross-decision relationship graph shows organizational landscape',
      'CEO Dashboard surfaces bottlenecks & velocity metrics',
    ],
  },
]

export default function SlideDecisionJourney() {
  const [activeStep, setActiveStep] = useState(null)

  const handleStepClick = (stepId) => {
    setActiveStep(prev => prev === stepId ? null : stepId)
  }

  const activeData = journeySteps.find(s => s.id === activeStep)

  return (
    <div className="pdf-slide" style={{ padding: '3rem 4rem', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      
      {/* Title */}
      <div style={{ textAlign: 'center', marginBottom: '2rem', flexShrink: 0 }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff', margin: 0 }}>
          Decision Journey: <span style={{ color: '#00d2ff' }}>From Intent to Institutional Memory</span>
        </h2>
        <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', marginTop: '6px' }}>
          Click any stage to explore the details
        </p>
      </div>

      {/* Horizontal Journey Pipeline */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        gap: '0',
        flexShrink: 0,
        marginBottom: activeData ? '1.5rem' : '0',
      }}>
        {journeySteps.map((step, i) => {
          const isActive = activeStep === step.id
          return (
            <React.Fragment key={step.id}>
              {/* Step Card */}
              <button
                onClick={() => handleStepClick(step.id)}
                style={{
                  background: isActive 
                    ? `${step.color}22` 
                    : 'rgba(255,255,255,0.04)',
                  border: `2px solid ${isActive ? step.color : 'rgba(255,255,255,0.08)'}`,
                  borderRadius: '16px',
                  padding: '16px 14px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '6px',
                  minWidth: '120px',
                  maxWidth: '150px',
                  boxShadow: isActive ? `0 0 24px ${step.color}33` : 'none',
                  transform: isActive ? 'translateY(-4px) scale(1.05)' : 'scale(1)',
                  position: 'relative',
                  outline: 'none',
                }}
              >
                <div style={{ lineHeight: 1 }}>{React.createElement(ICONS[step.iconKey], { size: 28, color: isActive ? step.color : 'rgba(255,255,255,0.6)', strokeWidth: 1.5, style: { transition: 'color 0.3s ease' } })}</div>
                <div style={{ 
                  fontSize: '0.85rem', 
                  fontWeight: 700, 
                  color: isActive ? step.color : '#fff',
                  transition: 'color 0.3s ease',
                }}>{step.label}</div>
                <div style={{ 
                  fontSize: '0.65rem', 
                  color: 'rgba(255,255,255,0.4)', 
                  fontWeight: 500 
                }}>{step.subtitle}</div>

                {/* Active indicator */}
                {isActive && (
                  <div style={{
                    position: 'absolute',
                    bottom: '-18px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 0,
                    height: 0,
                    borderLeft: '10px solid transparent',
                    borderRight: '10px solid transparent',
                    borderTop: `10px solid ${step.color}`,
                  }} />
                )}
              </button>

              {/* Arrow connector */}
              {i < journeySteps.length - 1 && (
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  padding: '0 2px',
                  flexShrink: 0,
                }}>
                  <div style={{ 
                    width: '24px', 
                    height: '2px', 
                    background: 'rgba(255,255,255,0.15)',
                    position: 'relative',
                  }}>
                    <div style={{
                      position: 'absolute',
                      right: '-4px',
                      top: '-4px',
                      width: 0,
                      height: 0,
                      borderTop: '5px solid transparent',
                      borderBottom: '5px solid transparent',
                      borderLeft: '6px solid rgba(255,255,255,0.15)',
                    }} />
                  </div>
                </div>
              )}
            </React.Fragment>
          )
        })}
      </div>

      {/* Expanded Detail Panel */}
      {activeData && (
        <div 
          key={activeData.id}
          style={{
            flex: 1,
            background: `linear-gradient(135deg, ${activeData.color}08, ${activeData.color}04)`,
            border: `1px solid ${activeData.color}33`,
            borderRadius: '20px',
            padding: '2rem 2.5rem',
            animation: 'fadeUp 0.35s ease',
            display: 'flex',
            gap: '3rem',
            overflow: 'hidden',
          }}
        >
          {/* Left: Description */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px', 
              marginBottom: '1rem' 
            }}>
              <span>{React.createElement(ICONS[activeData.iconKey], { size: 36, color: activeData.color, strokeWidth: 1.5 })}</span>
              <div>
                <h3 style={{ 
                  fontSize: '1.4rem', 
                  fontWeight: 800, 
                  color: activeData.color, 
                  margin: 0 
                }}>{activeData.label}</h3>
                <span style={{ 
                  fontSize: '0.8rem', 
                  color: 'rgba(255,255,255,0.4)' 
                }}>{activeData.subtitle}</span>
              </div>
            </div>

            <p style={{ 
              color: 'rgba(255,255,255,0.8)', 
              fontSize: '1rem', 
              lineHeight: 1.7, 
              marginBottom: '1.25rem' 
            }}>
              {activeData.description}
            </p>

            {/* Example callout */}
            <div style={{
              background: `${activeData.color}12`,
              border: `1px solid ${activeData.color}30`,
              borderRadius: '12px',
              padding: '12px 16px',
              fontSize: '0.9rem',
              fontStyle: 'italic',
              color: activeData.color,
              lineHeight: 1.5,
            }}>
              {activeData.example}
            </div>

            {/* CTA Link Button */}
            {activeData.link && (
              <a
                href={activeData.link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginTop: '1.25rem',
                  padding: '12px 24px',
                  background: `linear-gradient(135deg, ${activeData.color}, ${activeData.color}cc)`,
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: `0 4px 20px ${activeData.color}44`,
                  letterSpacing: '0.02em',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 8px 30px ${activeData.color}66`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 4px 20px ${activeData.color}44`; }}
              >
                <ExternalLink size={18} strokeWidth={2} />
                {activeData.link.label}
              </a>
            )}
          </div>

          {/* Right: Bullet details */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ 
              fontSize: '0.7rem', 
              fontWeight: 700, 
              color: 'rgba(255,255,255,0.3)', 
              letterSpacing: '0.12em', 
              textTransform: 'uppercase', 
              marginBottom: '12px' 
            }}>
              How it works
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {activeData.bullets.map((b, i) => (
                <li 
                  key={i} 
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    padding: '8px 0',
                    borderBottom: i < activeData.bullets.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                    animation: `fadeUp 0.3s ease ${i * 0.06}s both`,
                  }}
                >
                  <span style={{ 
                    color: activeData.color, 
                    fontSize: '0.85rem', 
                    fontWeight: 700, 
                    lineHeight: '1.6',
                    flexShrink: 0,
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{ 
                    color: 'rgba(255,255,255,0.7)', 
                    fontSize: '0.9rem', 
                    lineHeight: 1.6 
                  }}>
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Empty state when nothing is selected */}
      {!activeData && (
        <div style={{ 
          flex: 1, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          opacity: 0.3,
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '1rem' }}><ArrowUp size={48} color="rgba(255,255,255,0.4)" strokeWidth={1.5} /></div>
            <p style={{ fontSize: '1.1rem', color: '#fff', fontWeight: 600 }}>Select a stage above to explore</p>
          </div>
        </div>
      )}

      {/* Feedback loop indicator */}
      <div style={{ 
        textAlign: 'center', 
        flexShrink: 0, 
        marginTop: '1rem',
        padding: '8px 0',
      }}>
        <span style={{ 
          fontSize: '0.75rem', 
          color: 'rgba(255,255,255,0.25)', 
          fontWeight: 500,
          letterSpacing: '0.05em',
        }}>
          ↻ Decision Memory feeds back into future decisions — creating a continuous learning loop
        </span>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
