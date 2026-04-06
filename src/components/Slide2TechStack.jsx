import React from 'react'

export default function Slide2TechStack() {
  const legendCard = (color, icon, title, subtitle) => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.6rem',
      padding: '0.5rem 0.8rem',
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.06)',
      borderLeft: `3px solid ${color}`,
      borderRadius: '0.5rem',
      flex: '1 1 0',
      maxWidth: '15rem',
    }}>
      <div style={{
        width: '2rem',
        height: '2rem',
        borderRadius: '50%',
        background: `${color}15`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}>
        {icon}
      </div>
      <div>
        <div style={{ fontWeight: 700, fontSize: '0.78rem', color: '#F8FAFC' }}>{title}</div>
        <div style={{ fontSize: '0.65rem', color: '#94A3B8' }}>{subtitle}</div>
      </div>
    </div>
  )

  return (
    <div className="pdf-slide" style={{
      padding: '1.2rem 2rem 0.8rem',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      overflow: 'hidden',
    }}>
      {/* ── TITLE ── */}
      <div style={{ textAlign: 'center', marginBottom: '0.35rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.2rem' }}>
          From Signals to Executable Decisions
        </h1>
        <p style={{ fontSize: '0.8rem', fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '0.1rem' }}>
          A self-composing, evidence-driven decision architecture — not a workflow tool, not a knowledge base.
        </p>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
          Others use graphs to improve search. We use graphs to model decisions — where the LLM proposes and humans approve.
        </p>
      </div>

      {/* ── MAIN DIAGRAM ── */}
      <div style={{ flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg viewBox="0 0 1000 470" style={{ width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid meet">
          <defs>
            <marker id="ts-arr-cyan" viewBox="0 0 10 7" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0,0 10,3.5 0,7" fill="#0EA5E9" />
            </marker>
            <marker id="ts-arr-gray" viewBox="0 0 10 7" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0,0 10,3.5 0,7" fill="#64748B" />
            </marker>
            <marker id="ts-arr-amber" viewBox="0 0 10 7" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0,0 10,3.5 0,7" fill="#F59E0B" />
            </marker>
            <marker id="ts-arr-emerald" viewBox="0 0 10 7" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0,0 10,3.5 0,7" fill="#10B981" />
            </marker>
          </defs>

          {/* ════════ FEEDBACK LOOP ARC ════════ */}
          <path
            d="M 918,178 C 905,10 175,-10 158,36"
            fill="none" stroke="#0EA5E9" strokeWidth="2" opacity="0.55"
            markerEnd="url(#ts-arr-cyan)"
          />
          <text x="530" y="18" textAnchor="middle" fontStyle="italic" fill="#94A3B8" fontSize="11" fontFamily="Inter,sans-serif">
            Each decision trains the next
          </text>

          {/* ════════ MEMORY NODE ════════ */}
          <text x="88" y="43" fill="#94A3B8" fontSize="10" fontFamily="Inter,sans-serif">Memory</text>
          <text x="88" y="56" fill="#94A3B8" fontSize="10" fontFamily="Inter,sans-serif">Node</text>
          <circle cx="158" cy="55" r="20" fill="rgba(14,165,233,0.1)" stroke="#0EA5E9" strokeWidth="1.5" />
          {/* Infinity / loop icon */}
          <path
            d="M146,55 C146,48 153,48 158,53 C163,48 170,48 170,55 C170,62 163,62 158,57 C153,62 146,62 146,55Z"
            fill="none" stroke="#0EA5E9" strokeWidth="1.5"
          />

          {/* Memory → Intent connector (dashed) */}
          <path d="M158,75 C158,115 120,135 118,178" fill="none" stroke="#0EA5E9" strokeWidth="1.5" strokeDasharray="5,4" opacity="0.45" />

          {/* ════════ INTENT NODE ════════ */}
          <rect x="50" y="178" width="138" height="56" rx="12"
            fill="rgba(14,165,233,0.08)" stroke="#0EA5E9" strokeWidth="2.5" />
          {/* DNA / wave icon */}
          <path d="M68,198 Q78,192 88,198 Q98,204 108,198" fill="none" stroke="#0EA5E9" strokeWidth="1.5" opacity="0.6" />
          <path d="M68,210 Q78,204 88,210 Q98,216 108,210" fill="none" stroke="#0EA5E9" strokeWidth="1.5" opacity="0.6" />
          <text x="119" y="212" textAnchor="middle" fill="#0EA5E9" fontSize="14" fontWeight="700" fontFamily="Inter,sans-serif">
            Intent Node
          </text>

          {/* ════════ EVIDENCE SOURCES ════════ */}
          <text x="55" y="340" fill="#94A3B8" fontSize="10" fontFamily="Inter,sans-serif">Evidence Sources</text>
          <rect x="42" y="356" width="58" height="26" rx="5"
            fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <text x="71" y="374" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="Inter,sans-serif">Systems</text>
          <rect x="110" y="356" width="50" height="26" rx="5"
            fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <text x="135" y="374" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="Inter,sans-serif">Docs</text>
          <text x="90" y="408" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="Inter,sans-serif">Agentic Evidence</text>

          {/* Evidence → Intent connector (dashed) */}
          <path d="M95,352 C95,310 110,270 115,234" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" strokeDasharray="5,4" />

          {/* ════════ LANE BACKGROUNDS ════════ */}
          <rect x="238" y="72" width="410" height="58" rx="10"
            fill="rgba(14,165,233,0.04)" stroke="rgba(14,165,233,0.1)" strokeWidth="1" />
          <rect x="238" y="183" width="478" height="54" rx="10"
            fill="rgba(148,163,184,0.04)" stroke="rgba(148,163,184,0.06)" strokeWidth="1" />
          <rect x="238" y="293" width="410" height="54" rx="10"
            fill="rgba(245,158,11,0.04)" stroke="rgba(245,158,11,0.1)" strokeWidth="1" />

          {/* ════════ BRANCH LINES FROM INTENT ════════ */}
          <path d="M188,193 C218,193 230,100 250,100" fill="none" stroke="#0EA5E9" strokeWidth="2" markerEnd="url(#ts-arr-cyan)" />
          <path d="M188,206 L250,206" fill="none" stroke="#64748B" strokeWidth="2" markerEnd="url(#ts-arr-gray)" />
          <path d="M188,222 C218,222 230,320 250,320" fill="none" stroke="#F59E0B" strokeWidth="2" markerEnd="url(#ts-arr-amber)" />

          {/* ════════ TOP LANE — CYAN ════════ */}
          {/* Legal Review */}
          <rect x="258" y="78" width="88" height="44" rx="7"
            fill="rgba(14,165,233,0.08)" stroke="#0EA5E9" strokeWidth="1.5" />
          <text x="302" y="97" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily="Inter,sans-serif">Legal</text>
          <text x="302" y="112" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily="Inter,sans-serif">Review</text>

          <line x1="346" y1="100" x2="370" y2="100" stroke="#0EA5E9" strokeWidth="1.5" markerEnd="url(#ts-arr-cyan)" />

          {/* Claim Extraction */}
          <rect x="375" y="78" width="98" height="44" rx="7"
            fill="rgba(14,165,233,0.08)" stroke="#0EA5E9" strokeWidth="1.5" />
          <text x="424" y="97" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily="Inter,sans-serif">Claim</text>
          <text x="424" y="112" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily="Inter,sans-serif">Extraction</text>

          <line x1="473" y1="100" x2="493" y2="100" stroke="#0EA5E9" strokeWidth="1.5" markerEnd="url(#ts-arr-cyan)" />

          {/* Policy Mapping */}
          <rect x="498" y="78" width="90" height="44" rx="7"
            fill="rgba(14,165,233,0.08)" stroke="#0EA5E9" strokeWidth="1.5" />
          <text x="543" y="97" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily="Inter,sans-serif">Policy</text>
          <text x="543" y="112" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily="Inter,sans-serif">Mapping</text>

          <line x1="588" y1="100" x2="605" y2="100" stroke="#0EA5E9" strokeWidth="1.5" />

          {/* Plus circle */}
          <circle cx="620" cy="100" r="13" fill="rgba(14,165,233,0.08)" stroke="#0EA5E9" strokeWidth="1.5" />
          <line x1="614" y1="100" x2="626" y2="100" stroke="#0EA5E9" strokeWidth="2" />
          <line x1="620" y1="94" x2="620" y2="106" stroke="#0EA5E9" strokeWidth="2" />

          {/* "The path is discovered, not designed" label */}
          <text x="440" y="68" textAnchor="middle" fontStyle="italic" fill="#94A3B8" fontSize="11" fontFamily="Inter,sans-serif">
            The path is discovered, not designed
          </text>

          {/* ════════ MIDDLE LANE — GRAY / DASHED-AMBER ════════ */}
          {/* Product Analysis */}
          <rect x="258" y="188" width="98" height="44" rx="7"
            fill="rgba(148,163,184,0.06)" stroke="#64748B" strokeWidth="1.5" />
          <text x="307" y="207" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily="Inter,sans-serif">Product</text>
          <text x="307" y="222" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily="Inter,sans-serif">Analysis</text>

          <line x1="356" y1="210" x2="378" y2="210" stroke="#64748B" strokeWidth="1.5" markerEnd="url(#ts-arr-gray)" />

          {/* Contradiction Detection */}
          <rect x="383" y="188" width="108" height="44" rx="7"
            fill="rgba(148,163,184,0.06)" stroke="#64748B" strokeWidth="1.5" />
          <text x="437" y="207" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily="Inter,sans-serif">Contradiction</text>
          <text x="437" y="222" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily="Inter,sans-serif">Detection</text>

          <line x1="491" y1="210" x2="512" y2="210" stroke="#64748B" strokeWidth="1.5" markerEnd="url(#ts-arr-gray)" />

          {/* Scope Assessment (dashed amber border) */}
          <rect x="517" y="188" width="88" height="44" rx="7"
            fill="rgba(245,158,11,0.04)" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="6,3" />
          <text x="561" y="207" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily="Inter,sans-serif">Scope</text>
          <text x="561" y="222" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily="Inter,sans-serif">Assessment</text>

          <line x1="605" y1="210" x2="623" y2="210" stroke="#64748B" strokeWidth="1.5" markerEnd="url(#ts-arr-gray)" />

          {/* Owner Derivation (dashed amber border) */}
          <rect x="628" y="188" width="85" height="44" rx="7"
            fill="rgba(245,158,11,0.04)" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="6,3" />
          <text x="670" y="207" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily="Inter,sans-serif">Owner</text>
          <text x="670" y="222" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily="Inter,sans-serif">Derivation</text>

          {/* ════════ NEW EVIDENCE ARROW ════════ */}
          <line x1="543" y1="128" x2="543" y2="184" stroke="#10B981" strokeWidth="1.5" markerEnd="url(#ts-arr-emerald)" />
          <text x="558" y="157" fill="#10B981" fontSize="10" fontFamily="Inter,sans-serif">↓ New evidence</text>

          {/* ════════ BOTTOM LANE — AMBER ════════ */}
          {/* Ops Assessment */}
          <rect x="258" y="298" width="100" height="44" rx="7"
            fill="rgba(245,158,11,0.06)" stroke="#F59E0B" strokeWidth="1.5" />
          <text x="308" y="317" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily="Inter,sans-serif">Ops</text>
          <text x="308" y="332" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily="Inter,sans-serif">Assessment</text>

          <line x1="358" y1="320" x2="403" y2="320" stroke="#F59E0B" strokeWidth="1.5" markerEnd="url(#ts-arr-amber)" />

          {/* Impact Analysis */}
          <rect x="408" y="298" width="100" height="44" rx="7"
            fill="rgba(245,158,11,0.06)" stroke="#F59E0B" strokeWidth="1.5" />
          <text x="458" y="317" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily="Inter,sans-serif">Impact</text>
          <text x="458" y="332" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily="Inter,sans-serif">Analysis</text>

          <line x1="508" y1="320" x2="548" y2="320" stroke="#F59E0B" strokeWidth="1.5" markerEnd="url(#ts-arr-amber)" />

          {/* Decision Delta */}
          <rect x="553" y="298" width="88" height="44" rx="7"
            fill="rgba(245,158,11,0.06)" stroke="#F59E0B" strokeWidth="1.5" />
          <text x="597" y="317" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily="Inter,sans-serif">Decision</text>
          <text x="597" y="332" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily="Inter,sans-serif">Delta</text>

          {/* ════════ CONVERGING LINES → APPROVAL GATE ════════ */}
          <path d="M633,100 C662,100 702,142 730,162" fill="none" stroke="#0EA5E9" strokeWidth="1.5" markerEnd="url(#ts-arr-cyan)" />
          <path d="M713,210 L730,210" fill="none" stroke="#64748B" strokeWidth="1.5" markerEnd="url(#ts-arr-gray)" />
          <path d="M641,320 C672,320 702,278 730,268" fill="none" stroke="#F59E0B" strokeWidth="1.5" markerEnd="url(#ts-arr-amber)" />

          {/* ════════ HUMAN APPROVAL GATE ════════ */}
          <rect x="735" y="108" width="88" height="210" rx="10"
            fill="rgba(14,165,233,0.04)" stroke="#0EA5E9" strokeWidth="2" strokeDasharray="8,4" />
          <text x="779" y="200" textAnchor="middle" fill="#F8FAFC" fontSize="13" fontWeight="700" fontFamily="Inter,sans-serif">Human</text>
          <text x="779" y="218" textAnchor="middle" fill="#F8FAFC" fontSize="13" fontWeight="700" fontFamily="Inter,sans-serif">Approval</text>
          <text x="779" y="236" textAnchor="middle" fill="#F8FAFC" fontSize="13" fontWeight="700" fontFamily="Inter,sans-serif">Gate</text>

          {/* Gate → Decision Record */}
          <line x1="823" y1="210" x2="856" y2="210" stroke="#0EA5E9" strokeWidth="2" markerEnd="url(#ts-arr-cyan)" />

          {/* ════════ DECISION RECORD ════════ */}
          <rect x="860" y="182" width="110" height="56" rx="8"
            fill="rgba(14,165,233,0.08)" stroke="#0EA5E9" strokeWidth="2" />
          {/* Corner accent marks (emerald) */}
          <path d="M860,192 L860,182 L870,182" fill="none" stroke="#10B981" strokeWidth="2.5" />
          <path d="M970,192 L970,182 L960,182" fill="none" stroke="#10B981" strokeWidth="2.5" />
          <path d="M860,228 L860,238 L870,238" fill="none" stroke="#10B981" strokeWidth="2.5" />
          <path d="M970,228 L970,238 L960,238" fill="none" stroke="#10B981" strokeWidth="2.5" />
          <text x="910" y="206" textAnchor="middle" fill="#F8FAFC" fontSize="13" fontWeight="600" fontFamily="Inter,sans-serif">Decision</text>
          <text x="910" y="224" textAnchor="middle" fill="#F8FAFC" fontSize="13" fontWeight="600" fontFamily="Inter,sans-serif">Record</text>
          {/* Lock icon */}
          <rect x="945" y="195" width="12" height="10" rx="2" fill="none" stroke="#94A3B8" strokeWidth="1.2" />
          <path d="M947,195 V191 C947,187 955,187 955,191 V195" fill="none" stroke="#94A3B8" strokeWidth="1.2" />

          {/* Approved ✓ / No bypass mode */}
          <text x="778" y="342" fill="#10B981" fontSize="11" fontFamily="Inter,sans-serif">Approved ✓</text>
          <text x="773" y="360" fill="#F59E0B" fontSize="10" fontStyle="italic" fontFamily="Inter,sans-serif">No bypass mode</text>

          {/* ════════ PROVENANCE TIMELINE ════════ */}
          <line x1="260" y1="400" x2="260" y2="412" stroke="#94A3B8" strokeWidth="1" />
          <line x1="260" y1="412" x2="650" y2="412" stroke="#94A3B8" strokeWidth="1" />
          <line x1="650" y1="400" x2="650" y2="412" stroke="#94A3B8" strokeWidth="1" />
          <text x="455" y="435" textAnchor="middle" fill="#94A3B8" fontSize="11" fontStyle="italic" fontFamily="Inter,sans-serif">
            Provenance timeline
          </text>
        </svg>
      </div>

      {/* ── BOTTOM LEGEND ── */}
      <div style={{
        display: 'flex',
        gap: '0.6rem',
        justifyContent: 'center',
        marginTop: '0.3rem',
      }}>
        {legendCard('#8B5CF6',
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M7,4 Q12,8 7,12 Q12,16 7,20" stroke="#8B5CF6" strokeWidth="2" />
            <path d="M17,4 Q12,8 17,12 Q12,16 17,20" stroke="#8B5CF6" strokeWidth="2" />
            <line x1="9" y1="6" x2="15" y2="6" stroke="#8B5CF6" strokeWidth="1" opacity="0.5" />
            <line x1="9" y1="12" x2="15" y2="12" stroke="#8B5CF6" strokeWidth="1" opacity="0.5" />
            <line x1="9" y1="18" x2="15" y2="18" stroke="#8B5CF6" strokeWidth="1" opacity="0.5" />
          </svg>,
          'Intent Ontology',
          'How signals enter the DAG'
        )}
        {legendCard('#0EA5E9',
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="6" stroke="#0EA5E9" strokeWidth="2" />
            <line x1="15.5" y1="15.5" x2="20" y2="20" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" />
          </svg>,
          'Agentic Evidence',
          'How the DAG gets fed'
        )}
        {legendCard('#F59E0B',
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <rect x="7" y="11" width="10" height="8" rx="2" stroke="#F59E0B" strokeWidth="2" />
            <path d="M9,11 V8 C9,5 15,5 15,8 V11" stroke="#F59E0B" strokeWidth="2" />
          </svg>,
          'Governance',
          'How the DAG enforces control'
        )}
        {legendCard('#8B5CF6',
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12,3 L14,9 L20,9 L15,13 L17,19 L12,15 L7,19 L9,13 L4,9 L10,9 Z"
              stroke="#8B5CF6" strokeWidth="1.5" fill="rgba(139,92,246,0.15)" />
          </svg>,
          'Decision Memory',
          'Why it gets better over time'
        )}
      </div>
    </div>
  )
}
