import React, { useState, useCallback, useMemo } from 'react'
import {
  ReactFlow,
  Controls,
  Background,
  Handle,
  Position,
  useNodesState,
  useEdgesState,
  MarkerType,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'

/* ─── Detail content for each node ───────────────────────── */
const nodeDetails = {
  intent: {
    title: '💬 Decision Intent Captured',
    description: 'A decision-maker describes a decision in natural language via Telegram or Slack.',
    example: '"We need to select a cloud vendor for our new platform"',
    details: [
      'Raw text parsed into structured fields',
      'Decision record created with title, description, priority, scope',
      'Stakeholder list extracted and linked',
      'Status set to "proposed"',
    ],
  },
  classify: {
    title: '🏷️ Decision Type Classification',
    description: 'The agent reasons about the decision type from the intake context.',
    example: 'Classified as: Vendor Selection',
    details: [
      'Types: vendor selection, technology choice, policy, build-vs-buy',
      'Classification influences template selection',
      'Stored as enum in decisions table',
    ],
  },
  path: {
    title: '🗺️ Decision Path Composition',
    description: 'A complete decision path is generated from the selected template.',
    example: 'Template: Vendor Selection → 4 phases, 12 blocks',
    details: [
      'Phases: Discovery → Analysis → Evaluation → Decision',
      'Blocks, edges, and gates created atomically',
      'Sequential & parallel execution flows defined',
      'Path can be modified: add/remove/reorder blocks',
    ],
  },
  orchestrate: {
    title: '⚙️ DAG-Aware Orchestration',
    description: 'Phases activate respecting dependency edges. Parallel tracks run concurrently.',
    example: 'Phase 2 (Analysis) activates after Phase 1 gate passes',
    details: [
      'Phase gating: prerequisites must complete first',
      'Convergence blocks wait for all parallel tracks',
      'Progress monitored in real-time',
      'Overdue blocks trigger chase ladder',
    ],
  },
  specialists: {
    title: '🤖 Specialist Agent Analysis',
    description: '7 specialist AI agents analyze specific aspects of the decision.',
    example: 'Financial Analyst assessing TCO across 3 vendors',
    details: [
      'Financial Analyst — cost modeling & ROI',
      'Legal Reviewer — compliance & contracts',
      'Technical Assessor — architecture fit',
      'Risk Analyst — risk identification',
      'Vendor Specialist — market comparison',
      'Security Auditor — security posture',
      'Market Analyst — competitive landscape',
    ],
  },
  stakeholders: {
    title: '👥 Stakeholder Interaction',
    description: 'Stakeholders approve, revise, or escalate directly from Telegram.',
    example: 'CTO approves technical assessment via inline button',
    details: [
      'Responses classified: completed, partial, question, objection',
      'Actions: mark_completed, request_clarification, escalate',
      'Inline Telegram buttons for zero-friction participation',
      'Chase ladder: reminder → chase → escalation',
    ],
  },
  execution: {
    title: '🔄 Multi-Mode Block Execution',
    description: 'Each block executes in the appropriate mode based on its type.',
    example: 'Vendor shortlist block runs in "ai_first" mode',
    details: [
      'AI-first: AI generates analysis, human reviews',
      'Human-first: Human provides input, AI enriches',
      'Meeting: Structured protocol with AI facilitation',
      'Automatic: Deterministic rule-based execution',
    ],
  },
  memory: {
    title: '🧠 Decision Memory Extraction',
    description: 'Learnings are automatically extracted from completed decisions.',
    example: '8 memories extracted: "vendor evaluation took 2x expected time"',
    details: [
      'Process improvement insights',
      'Stakeholder behavior patterns',
      'Timing & cost learnings',
      'Risk patterns for future decisions',
      'Up to 20 memories per decision',
    ],
  },
  agents_consume: {
    title: '🔮 Agents Use Decision Memory',
    description: 'Future decisions are enriched by institutional memory from past decisions.',
    example: 'New vendor selection auto-applies learnings from 3 prior decisions',
    details: [
      'Agents query memory before composing paths',
      'Template feedback improves future templates',
      'Cross-decision relationship discovery',
      'Decision graph shows organizational decision landscape',
      'CEO Dashboard surfaces bottlenecks & velocity metrics',
    ],
  },
}

/* ─── Custom Node Component ──────────────────────────────── */
const colors = {
  intake:      { bg: 'rgba(0, 210, 255, 0.12)', border: '#00d2ff', glow: '0 0 20px rgba(0,210,255,0.3)', icon: '💬' },
  classify:    { bg: 'rgba(139, 92, 246, 0.12)', border: '#8b5cf6', glow: '0 0 20px rgba(139,92,246,0.3)', icon: '🏷️' },
  path:        { bg: 'rgba(16, 185, 129, 0.12)', border: '#10b981', glow: '0 0 20px rgba(16,185,129,0.3)', icon: '🗺️' },
  orchestrate: { bg: 'rgba(245, 158, 11, 0.12)', border: '#f59e0b', glow: '0 0 20px rgba(245,158,11,0.3)', icon: '⚙️' },
  execute:     { bg: 'rgba(236, 72, 153, 0.12)', border: '#ec4899', glow: '0 0 20px rgba(236,72,153,0.3)', icon: '🔄' },
  memory:      { bg: 'rgba(99, 102, 241, 0.12)', border: '#6366f1', glow: '0 0 20px rgba(99,102,241,0.3)', icon: '🧠' },
  agents:      { bg: 'rgba(14, 165, 233, 0.12)', border: '#0ea5e9', glow: '0 0 20px rgba(14,165,233,0.3)', icon: '🔮' },
}

function FlowNode({ data }) {
  const { label, subtitle, colorKey, nodeId, onNodeClick, isExpanded } = data
  const c = colors[colorKey] || colors.intake

  return (
    <div
      onClick={() => onNodeClick(nodeId)}
      style={{
        background: isExpanded ? c.bg.replace('0.12', '0.25') : c.bg,
        border: `2px solid ${c.border}`,
        borderRadius: '16px',
        padding: '16px 20px',
        minWidth: '200px',
        maxWidth: '240px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: isExpanded ? c.glow : 'none',
        transform: isExpanded ? 'scale(1.05)' : 'scale(1)',
      }}
    >
      <Handle type="target" position={Position.Top} style={{ background: c.border, width: 8, height: 8, border: 'none' }} />
      <Handle type="source" position={Position.Bottom} style={{ background: c.border, width: 8, height: 8, border: 'none' }} />
      <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>{label}</div>
      {subtitle && <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.3 }}>{subtitle}</div>}
      <div style={{ fontSize: '0.65rem', color: c.border, marginTop: '6px', fontWeight: 600, letterSpacing: '0.05em' }}>
        {isExpanded ? '▾ CLICK TO COLLAPSE' : '▸ CLICK TO EXPAND'}
      </div>
    </div>
  )
}

/* ─── Detail Panel ───────────────────────────────────────── */
function DetailPanel({ nodeId, onClose }) {
  const info = nodeDetails[nodeId]
  if (!info) return null

  return (
    <div style={{
      position: 'absolute',
      right: '24px',
      top: '80px',
      width: '380px',
      maxHeight: 'calc(100% - 120px)',
      overflowY: 'auto',
      background: 'rgba(15, 23, 42, 0.95)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: '20px',
      padding: '28px',
      backdropFilter: 'blur(20px)',
      boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
      zIndex: 10,
      animation: 'slideIn 0.3s ease',
    }}>
      <button
        onClick={onClose}
        style={{
          position: 'absolute', top: '12px', right: '16px',
          background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)',
          fontSize: '1.25rem', cursor: 'pointer', padding: '4px',
        }}
      >✕</button>

      <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', marginBottom: '12px', lineHeight: 1.3 }}>
        {info.title}
      </div>

      <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '16px' }}>
        {info.description}
      </p>

      {info.example && (
        <div style={{
          background: 'rgba(0, 210, 255, 0.08)',
          border: '1px solid rgba(0, 210, 255, 0.2)',
          borderRadius: '10px',
          padding: '10px 14px',
          marginBottom: '16px',
          fontSize: '0.8rem',
          fontStyle: 'italic',
          color: 'rgba(0, 210, 255, 0.9)',
        }}>
          {info.example}
        </div>
      )}

      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', marginBottom: '10px', textTransform: 'uppercase' }}>
        Details
      </div>
      <ul style={{ margin: 0, paddingLeft: '16px', listStyle: 'none' }}>
        {info.details.map((d, i) => (
          <li key={i} style={{
            color: 'rgba(255,255,255,0.65)',
            fontSize: '0.82rem',
            lineHeight: 1.6,
            marginBottom: '4px',
            position: 'relative',
            paddingLeft: '14px',
          }}>
            <span style={{ position: 'absolute', left: 0, color: 'rgba(0,210,255,0.6)' }}>›</span>
            {d}
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ─── Main Component ─────────────────────────────────────── */
export default function SlideDecisionJourney() {
  const [expandedNode, setExpandedNode] = useState(null)

  const handleNodeClick = useCallback((nodeId) => {
    setExpandedNode(prev => prev === nodeId ? null : nodeId)
  }, [])

  const initialNodes = useMemo(() => [
    // Row 1: Intent
    { id: 'intent', type: 'flowNode', position: { x: 350, y: 0 }, data: { label: '💬 Decision Intent', subtitle: 'Natural language input via Slack / Telegram', colorKey: 'intake', nodeId: 'intent', onNodeClick: handleNodeClick, isExpanded: expandedNode === 'intent' } },
    // Row 2: Classify
    { id: 'classify', type: 'flowNode', position: { x: 350, y: 120 }, data: { label: '🏷️ Type Classification', subtitle: 'Vendor selection, tech choice, policy…', colorKey: 'classify', nodeId: 'classify', onNodeClick: handleNodeClick, isExpanded: expandedNode === 'classify' } },
    // Row 3: Path
    { id: 'path', type: 'flowNode', position: { x: 350, y: 240 }, data: { label: '🗺️ Path Composition', subtitle: 'Template → phases → blocks → edges → gates', colorKey: 'path', nodeId: 'path', onNodeClick: handleNodeClick, isExpanded: expandedNode === 'path' } },
    // Row 4: Orchestration (center), Specialists (left), Stakeholders (right)
    { id: 'orchestrate', type: 'flowNode', position: { x: 350, y: 380 }, data: { label: '⚙️ DAG Orchestration', subtitle: 'Phase activation, gating, convergence', colorKey: 'orchestrate', nodeId: 'orchestrate', onNodeClick: handleNodeClick, isExpanded: expandedNode === 'orchestrate' } },
    { id: 'specialists', type: 'flowNode', position: { x: 60, y: 420 }, data: { label: '🤖 7 Specialist Agents', subtitle: 'Financial, Legal, Tech, Risk, Vendor, Security, Market', colorKey: 'execute', nodeId: 'specialists', onNodeClick: handleNodeClick, isExpanded: expandedNode === 'specialists' } },
    { id: 'stakeholders', type: 'flowNode', position: { x: 640, y: 420 }, data: { label: '👥 Stakeholder Loop', subtitle: 'Approve / Revise / Escalate via Telegram', colorKey: 'execute', nodeId: 'stakeholders', onNodeClick: handleNodeClick, isExpanded: expandedNode === 'stakeholders' } },
    // Row 5: Execution
    { id: 'execution', type: 'flowNode', position: { x: 350, y: 540 }, data: { label: '🔄 Block Execution', subtitle: 'AI-first, Human-first, Meeting, Automatic', colorKey: 'execute', nodeId: 'execution', onNodeClick: handleNodeClick, isExpanded: expandedNode === 'execution' } },
    // Row 6: Memory
    { id: 'memory', type: 'flowNode', position: { x: 350, y: 660 }, data: { label: '🧠 Decision Memory', subtitle: '8 memory types × up to 20 learnings extracted', colorKey: 'memory', nodeId: 'memory', onNodeClick: handleNodeClick, isExpanded: expandedNode === 'memory' } },
    // Row 7: Agents consume
    { id: 'agents_consume', type: 'flowNode', position: { x: 350, y: 780 }, data: { label: '🔮 Future Decisions', subtitle: 'Agents query memory to enrich new paths', colorKey: 'agents', nodeId: 'agents_consume', onNodeClick: handleNodeClick, isExpanded: expandedNode === 'agents_consume' } },
  ], [expandedNode, handleNodeClick])

  const initialEdges = useMemo(() => [
    { id: 'e-intent-classify', source: 'intent', target: 'classify', animated: true, style: { stroke: '#8b5cf6', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#8b5cf6' } },
    { id: 'e-classify-path', source: 'classify', target: 'path', animated: true, style: { stroke: '#10b981', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#10b981' } },
    { id: 'e-path-orchestrate', source: 'path', target: 'orchestrate', animated: true, style: { stroke: '#f59e0b', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#f59e0b' } },
    { id: 'e-orchestrate-specialists', source: 'orchestrate', target: 'specialists', animated: true, style: { stroke: '#ec4899', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#ec4899' } },
    { id: 'e-orchestrate-stakeholders', source: 'orchestrate', target: 'stakeholders', animated: true, style: { stroke: '#ec4899', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#ec4899' } },
    { id: 'e-specialists-execution', source: 'specialists', target: 'execution', animated: true, style: { stroke: '#ec4899', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#ec4899' } },
    { id: 'e-stakeholders-execution', source: 'stakeholders', target: 'execution', animated: true, style: { stroke: '#ec4899', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#ec4899' } },
    { id: 'e-execution-memory', source: 'execution', target: 'memory', animated: true, style: { stroke: '#6366f1', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#6366f1' } },
    { id: 'e-memory-agents', source: 'memory', target: 'agents_consume', animated: true, style: { stroke: '#0ea5e9', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#0ea5e9' } },
    // Feedback loop: agents back to intent
    { id: 'e-agents-intent', source: 'agents_consume', target: 'intent', animated: true, type: 'smoothstep', style: { stroke: '#0ea5e9', strokeWidth: 1.5, strokeDasharray: '8 4' }, markerEnd: { type: MarkerType.ArrowClosed, color: '#0ea5e9' }, label: 'enriches future decisions', labelStyle: { fill: 'rgba(14,165,233,0.7)', fontSize: 10, fontWeight: 600 }, labelBgStyle: { fill: 'rgba(15,23,42,0.8)', rx: 4 }, labelBgPadding: [4, 8] },
  ], [])

  const nodeTypes = useMemo(() => ({ flowNode: FlowNode }), [])

  return (
    <div className="pdf-slide" style={{ padding: 0, position: 'relative', overflow: 'hidden' }}>
      {/* Title overlay */}
      <div style={{
        position: 'absolute',
        top: '16px',
        left: '24px',
        zIndex: 5,
        pointerEvents: 'none',
      }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', margin: 0, textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
          Decision Journey: <span style={{ color: '#00d2ff' }}>Intent → Memory → Agents</span>
        </h2>
        <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', marginTop: '4px', fontWeight: 500 }}>
          Click any node to explore the detail
        </p>
      </div>

      {/* ReactFlow canvas */}
      <div style={{ width: '100%', height: '100%', minHeight: '700px' }}>
        <ReactFlow
          nodes={initialNodes}
          edges={initialEdges}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.2, maxZoom: 1 }}
          proOptions={{ hideAttribution: true }}
          minZoom={0.4}
          maxZoom={1.5}
          defaultViewport={{ x: 0, y: 0, zoom: 0.85 }}
          style={{ background: 'transparent' }}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          panOnDrag={true}
          zoomOnScroll={false}
        >
          <Background color="rgba(255,255,255,0.03)" gap={24} size={1} />
          <Controls 
            showInteractive={false}
            position="bottom-left"
            style={{ 
              background: 'rgba(15,23,42,0.8)', 
              border: '1px solid rgba(255,255,255,0.1)', 
              borderRadius: '12px',
              overflow: 'hidden'
            }}
          />
        </ReactFlow>
      </div>

      {/* Detail Panel */}
      {expandedNode && (
        <DetailPanel nodeId={expandedNode} onClose={() => setExpandedNode(null)} />
      )}

      {/* Slide-in animation */}
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}
