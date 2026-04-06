import React, { useEffect } from 'react'

/* ───────────────────────── CSS ───────────────────────── */
const PIPELINE_CSS = `
/* ── Base visibility ── */
.pl-hidden { opacity: 0; pointer-events: none; }
.pl-visible { opacity: 1; transition: opacity 0.4s ease; }
.pl-visible-emerging { opacity: 0.7; transition: opacity 0.4s ease; }
.pl-visible-ghost { opacity: 0.2; transition: opacity 0.4s ease; }
.pl-visible-invalidated { opacity: 0.3; transition: opacity 0.8s ease; }

/* ── Glass cards ── */
.pl-card {
  width: 15rem; min-height: 7rem; border-radius: 0.75rem;
  background: rgba(255,255,255,0.05); border: 1.5px solid rgba(255,255,255,0.1);
  backdrop-filter: blur(10px); padding: 0.75rem 0.85rem;
  transition: border-color 0.4s ease, box-shadow 0.4s ease;
  display: flex; align-items: center;
}
.pl-card-hero { border-width: 2px; }
.pl-card-active-cyan    { border-color: #0EA5E9; box-shadow: 0 0 24px rgba(14,165,233,0.18); }
.pl-card-active-emerald { border-color: #10B981; box-shadow: 0 0 24px rgba(16,185,129,0.18); }
.pl-card-active-amber   { border-color: #F59E0B; box-shadow: 0 0 24px rgba(245,158,11,0.18); }
.pl-card-active-purple  { border-color: #8B5CF6; box-shadow: 0 0 24px rgba(139,92,246,0.18); }

/* ── Line draw ── */
.pl-draw       { animation: pl-draw 0.8s ease forwards; }
.pl-draw-slow  { animation: pl-draw 1.6s ease forwards; }
.pl-draw-vslow { animation: pl-draw 2.4s ease forwards; }
@keyframes pl-draw { to { stroke-dashoffset: 0; } }

/* ── Signal fly ── */
@keyframes pl-sig1 { 0%{transform:translate(-100px,-30px);opacity:0}25%{opacity:.9}75%{opacity:.7}100%{transform:translate(0,0);opacity:0} }
@keyframes pl-sig2 { 0%{transform:translate(-120px,25px);opacity:0}25%{opacity:.9}75%{opacity:.7}100%{transform:translate(0,0);opacity:0} }
@keyframes pl-sig3 { 0%{transform:translate(-80px,-50px);opacity:0}25%{opacity:.8}75%{opacity:.6}100%{transform:translate(0,0);opacity:0} }
@keyframes pl-sig4 { 0%{transform:translate(-130px,40px);opacity:0}25%{opacity:.9}75%{opacity:.7}100%{transform:translate(0,0);opacity:0} }
#pl-sig1.pl-sig-fly { animation: pl-sig1 1.4s ease-out forwards; }
#pl-sig2.pl-sig-fly { animation: pl-sig2 1.4s ease-out forwards; }
#pl-sig3.pl-sig-fly { animation: pl-sig3 1.4s ease-out forwards; }
#pl-sig4.pl-sig-fly { animation: pl-sig4 1.4s ease-out forwards; }

/* ── Ambient pulses ── */
@keyframes pl-pulse { 0%,100%{stroke-opacity:.5}50%{stroke-opacity:1} }
.pl-ambient-pulse { animation: pl-pulse 2s ease-in-out infinite; }

@keyframes pl-dash { to { stroke-dashoffset: -20; } }
.pl-flowing { animation: pl-dash 1s linear infinite; }

@keyframes pl-trickle { 0%{transform:translateX(-70px);opacity:0}15%{opacity:.5}85%{opacity:.3}100%{transform:translateX(30px);opacity:0} }
.pl-trickle-active { animation: pl-trickle 3.5s ease-in-out infinite; }
#pl-trickle-2.pl-trickle-active { animation-delay: 1.2s; }
#pl-trickle-3.pl-trickle-active { animation-delay: 2.4s; }

@keyframes pl-gate-glow { 0%,100%{filter:drop-shadow(0 0 6px rgba(16,185,129,.15))}50%{filter:drop-shadow(0 0 14px rgba(16,185,129,.35))} }
.pl-gate-glow { animation: pl-gate-glow 1.6s ease-in-out infinite; }

@keyframes pl-mem-pulse { 0%,100%{transform:scale(1)}50%{transform:scale(1.06)} }
.pl-mem-pulse { animation: pl-mem-pulse 2.2s ease-in-out infinite; transform-origin: 120px 58px; }

@keyframes pl-shimmer { to { stroke-dashoffset: -50; } }
.pl-arc-shimmer { animation: pl-shimmer 3s linear infinite; }

@keyframes pl-edot { 0%{transform:translateX(0);opacity:0}15%{opacity:.7}85%{opacity:.5}100%{transform:translateX(20px);opacity:0} }
.pl-edot-active { animation: pl-edot 1.8s linear infinite; }

@keyframes pl-disrupt-fly { 0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(270px,-100px);opacity:1} }
.pl-disrupt-animate { animation: pl-disrupt-fly 0.55s ease-in forwards; }

.pl-strike-draw { animation: pl-draw 0.4s ease forwards; }

@keyframes pl-radial { 0%{r:20;opacity:.5;stroke-opacity:.5}100%{r:55;opacity:0;stroke-opacity:0} }
.pl-radial-pulse { animation: pl-radial 0.8s ease-out forwards; }

@keyframes pl-particle { 0%,100%{opacity:.15;transform:translate(0,0)}50%{opacity:.4;transform:translate(var(--dx),var(--dy))} }
.pl-particle { animation: pl-particle var(--dur) ease-in-out infinite; animation-delay: var(--del); }
`;

/* ────────────────────────── Component ────────────────────────── */
export default function SlideHeroPipeline() {
  useEffect(() => {
    const timers = []
    let cancelled = false

    function at(ms, fn) { timers.push(setTimeout(() => { if (!cancelled) fn() }, ms)) }
    function el(id) { return document.getElementById(id) }
    function show(id, cls = 'pl-visible') { const e = el(id); if (!e) return; e.classList.remove('pl-hidden'); e.classList.add(cls) }
    function addClass(id, cls) { const e = el(id); if (e) e.classList.add(cls) }
    function drawLine(id) { const e = el(id); if (!e) return; e.classList.remove('pl-hidden'); e.classList.add('pl-visible', 'pl-draw') }
    function drawSlow(id) { const e = el(id); if (!e) return; e.classList.remove('pl-hidden'); e.classList.add('pl-visible', 'pl-draw-slow') }
    function drawVSlow(id) { const e = el(id); if (!e) return; e.classList.remove('pl-hidden'); e.classList.add('pl-visible', 'pl-draw-vslow') }

    /* ═══ PHASE 1: Signal Capture (0–6s) ═══ */
    at(400,  () => { show('pl-sig1'); addClass('pl-sig1', 'pl-sig-fly') })
    at(700,  () => { show('pl-sig2'); addClass('pl-sig2', 'pl-sig-fly') })
    at(1000, () => { show('pl-sig3'); addClass('pl-sig3', 'pl-sig-fly') })
    at(1300, () => { show('pl-sig4'); addClass('pl-sig4', 'pl-sig-fly') })
    at(2200, () => { show('pl-intent-node'); show('pl-intent-label') })
    at(2800, () => addClass('pl-intent-rect', 'pl-ambient-pulse'))
    at(3000, () => addClass('pl-card-1', 'pl-card-active-cyan'))
    at(3500, () => {
      show('pl-trickle-1'); addClass('pl-trickle-1', 'pl-trickle-active')
      show('pl-trickle-2'); addClass('pl-trickle-2', 'pl-trickle-active')
      show('pl-trickle-3'); addClass('pl-trickle-3', 'pl-trickle-active')
    })

    /* ═══ PHASE 2: Evidence Enrichment (6–12s) ═══ */
    at(6000,  () => { show('pl-ev-label-top'); show('pl-ev-group-box') })
    at(6500,  () => { show('pl-src-sys'); show('pl-src-docs') })
    at(7200,  () => { drawLine('pl-query-sys'); drawLine('pl-query-docs') })
    at(8200,  () => { drawLine('pl-return-sys'); drawLine('pl-return-docs') })
    at(8800,  () => show('pl-ev-label-bot'))
    at(9000,  () => addClass('pl-card-2', 'pl-card-active-emerald'))
    at(9500,  () => { addClass('pl-query-sys', 'pl-flowing'); addClass('pl-query-docs', 'pl-flowing') })

    /* ═══ PHASE 3: DAG Composition (12–22s) ═══ */
    at(12000, () => { drawLine('pl-intent-to-dag'); show('pl-path-label') })
    at(12400, () => drawLine('pl-split-1'))
    at(12600, () => drawLine('pl-split-2'))
    at(12800, () => drawLine('pl-split-3'))
    at(12800, () => { show('pl-lane-bg-1'); show('pl-lane-bg-2'); show('pl-lane-bg-3') })
    at(13000, () => { show('pl-lane-lbl-1'); show('pl-lane-lbl-2'); show('pl-lane-lbl-3') })

    /* Lane 1 (cyan) */
    at(14000, () => { show('pl-l1b1'); drawLine('pl-l1e12') })
    at(14500, () => { show('pl-l1b2'); drawLine('pl-l1e2g') })
    at(15000, () => show('pl-l1ghost', 'pl-visible-ghost'))

    /* Lane 2 (purple) */
    at(14200, () => { show('pl-l2b1'); drawLine('pl-l2e12') })
    at(14700, () => show('pl-l2b2'))

    /* Lane 3 (amber) */
    at(15000, () => { show('pl-l3b1'); drawLine('pl-l3e12') })
    at(15500, () => show('pl-l3b2', 'pl-visible-emerging'))

    /* Ambient edge dots */
    at(16000, () => { show('pl-edot-l1'); addClass('pl-edot-l1', 'pl-edot-active') })

    /* === DISRUPTION (17s) === */
    at(17000, () => { show('pl-disrupt-dot'); addClass('pl-disrupt-dot', 'pl-disrupt-animate') })
    at(17550, () => {
      const b = el('pl-l2b2'); if (b) { b.classList.remove('pl-visible'); b.classList.add('pl-visible-invalidated') }
      const e = el('pl-l2e12'); if (e) e.style.opacity = '0.3'
    })
    at(17600, () => { const s = el('pl-l2-strike'); if (s) { s.classList.remove('pl-hidden'); s.classList.add('pl-visible', 'pl-strike-draw') } })
    at(17900, () => show('pl-l2-newev'))
    at(18200, () => drawLine('pl-l2-bypass'))
    at(18800, () => show('pl-l2b3', 'pl-visible-emerging'))

    /* Gate convergence (20–22s) */
    at(20000, () => { show('pl-gate'); drawLine('pl-conv-1'); drawLine('pl-conv-2'); drawLine('pl-conv-3') })
    at(21000, () => {
      const poly = el('pl-gate-poly')
      if (poly) { poly.setAttribute('stroke', '#10B981'); poly.setAttribute('fill', 'rgba(16,185,129,0.08)') }
      const txt = el('pl-gate-status')
      if (txt) { txt.setAttribute('fill', '#10B981'); txt.textContent = 'Approved' }
      addClass('pl-gate', 'pl-gate-glow')
      show('pl-gate-pulse'); addClass('pl-gate-pulse', 'pl-radial-pulse')
    })
    at(21200, () => show('pl-gate-check'))
    at(21500, () => show('pl-gate-badges'))
    at(21800, () => { show('pl-decision-record'); drawLine('pl-gate-to-dr') })
    at(22000, () => addClass('pl-card-3', 'pl-card-active-amber'))

    /* ═══ PHASE 4: Provenance (22–26s) ═══ */
    at(22200, () => drawVSlow('pl-provenance'))
    at(24200, () => { drawSlow('pl-timeline'); show('pl-timeline-label') })
    at(24800, () => show('pl-timeline-lock'))

    /* ═══ PHASE 5: Flywheel (26–30s) ═══ */
    at(26000, () => drawVSlow('pl-flywheel'))
    at(28200, () => { show('pl-mem-node'); addClass('pl-mem-node', 'pl-mem-pulse'); show('pl-particles') })
    at(28500, () => drawSlow('pl-mem-to-intent'))
    at(28700, () => show('pl-flywheel-label'))
    at(29200, () => addClass('pl-card-4', 'pl-card-active-purple'))

    /* Keyboard: P to pause */
    function handleKey(e) {
      if ((e.key === 'p' || e.key === 'P') && e.target.tagName !== 'INPUT') {
        cancelled = true; timers.forEach(clearTimeout); timers.length = 0
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => { cancelled = true; timers.forEach(clearTimeout); timers.length = 0; window.removeEventListener('keydown', handleKey) }
  }, [])

  /* ═══════════════════════ CONSTANTS ═══════════════════════ */
  const F = 'Inter, system-ui, sans-serif'
  /* Block dimensions */
  const BW = 115, BH = 56, BR = 7
  /* Lane Y centers */
  const L1Y = 190, L2Y = 310, L3Y = 430
  /* Block X positions */
  const BX1 = 350, BX2 = 485, BX3 = 620
  /* Gate & DR */
  const GX = 820, DRX = 900

  return (
    <div className="pdf-slide" style={{
      padding: 0, display: 'flex', flexDirection: 'column',
      height: '100%', overflow: 'hidden', background: 'var(--bg-deep-navy)'
    }}>
      <style>{PIPELINE_CSS}</style>

      {/* ═══ HEADER ═══ */}
      <div style={{ textAlign: 'center', padding: '1.2rem 2rem 0.4rem', flex: '0 0 auto' }}>
        <h1 style={{ color: 'var(--text-primary)', fontSize: '2.4rem', fontWeight: 700, margin: 0, lineHeight: 1.2 }}>
          From Signals to Executable Decisions
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontStyle: 'italic', margin: '0.3rem 0 0', lineHeight: 1.4 }}>
          A self-composing, evidence-driven decision architecture — not a workflow tool, not a knowledge base.
        </p>
        <p style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem', margin: '0.25rem 0 0', lineHeight: 1.3, textShadow: '0 0 12px rgba(14,165,233,0.25)' }}>
          Others use graphs to improve search. We use graphs to model decisions — where the LLM proposes and humans approve.
        </p>
      </div>

      {/* ═══ PILLAR CARDS ═══ */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', padding: '0.3rem 1rem 0.4rem', flex: '0 0 auto' }}>
        <div id="pl-card-1" className="pl-card pl-card-hero">
          <p style={{ fontSize: '0.78rem', lineHeight: 1.45, margin: 0 }}>
            <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>Graph as Execution Engine: </span>
            <span style={{ color: 'var(--text-secondary)' }}>
              The graph is both the <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>data structure</span> and
              the <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>execution engine</span> — LLMs compose the DAG, not just query it
            </span>
          </p>
        </div>
        <div id="pl-card-2" className="pl-card">
          <p style={{ fontSize: '0.78rem', lineHeight: 1.45, margin: 0 }}>
            <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>Agentic Evidence: </span>
            <span style={{ color: 'var(--text-secondary)' }}>Each answer sharpens the next question — evidence quality compounds automatically</span>
          </p>
        </div>
        <div id="pl-card-3" className="pl-card">
          <p style={{ fontSize: '0.78rem', lineHeight: 1.45, margin: 0 }}>
            <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>Governance: </span>
            <span style={{ color: 'var(--text-secondary)' }}>Isolation at the graph engine, not application code. Every decision append-only.</span>
          </p>
        </div>
        <div id="pl-card-4" className="pl-card">
          <p style={{ fontSize: '0.78rem', lineHeight: 1.45, margin: 0 }}>
            <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>Decision Memory: </span>
            <span style={{ color: 'var(--text-secondary)' }}>Past decisions shape future paths — the moat deepens with every use</span>
          </p>
        </div>
      </div>

      {/* ═══ SVG PIPELINE ═══ */}
      <div style={{ flex: 1, minHeight: 0, padding: '0 0.5rem 0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg viewBox="0 0 1200 650" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', height: '100%' }}>
          <defs>
            <marker id="pl-arr-c" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
              <polygon points="0,0 7,2.5 0,5" fill="#0EA5E9" />
            </marker>
            <marker id="pl-arr-e" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
              <polygon points="0,0 7,2.5 0,5" fill="#10B981" />
            </marker>
            <marker id="pl-arr-p" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
              <polygon points="0,0 7,2.5 0,5" fill="#8B5CF6" />
            </marker>
            <marker id="pl-arr-a" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
              <polygon points="0,0 7,2.5 0,5" fill="#F59E0B" />
            </marker>
            <linearGradient id="pl-grad-fly" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>

          {/* ════════ ZONE 5: Flywheel arc (behind everything) ════════ */}
          <path id="pl-flywheel" className="pl-hidden"
            d="M 963,282 C 970,15 20,5 120,78"
            fill="none" stroke="url(#pl-grad-fly)" strokeWidth="2"
            strokeDasharray="1400" strokeDashoffset="1400" />
          <text id="pl-flywheel-label" className="pl-hidden" x="550" y="22"
            textAnchor="middle" fill="#94A3B8" fontSize="11" fontStyle="italic" fontFamily={F}>
            Each decision trains the next
          </text>

          {/* ════════ ZONE 1: Memory Node + Intent Node + Evidence ════════ */}

          {/* Memory Node */}
          <g id="pl-mem-node" className="pl-hidden">
            <circle cx="120" cy="58" r="22" fill="rgba(139,92,246,0.08)" stroke="#8B5CF6" strokeWidth="1.5" />
            <text x="120" y="64" textAnchor="middle" fill="#8B5CF6" fontSize="18" fontFamily={F}>∞</text>
            <text x="120" y="35" textAnchor="middle" fill="#94A3B8" fontSize="8.5" fontFamily={F}>Memory</text>
            <text x="120" y="44" textAnchor="middle" fill="#94A3B8" fontSize="8.5" fontFamily={F}>Node</text>
          </g>

          {/* Decorative particles around Memory Node */}
          <g id="pl-particles" className="pl-hidden">
            {[
              { cx: 88, cy: 42, r: 2, dx: '-3px', dy: '-2px', dur: '3s', del: '0s' },
              { cx: 148, cy: 50, r: 1.5, dx: '2px', dy: '-3px', dur: '2.8s', del: '0.4s' },
              { cx: 100, cy: 78, r: 1.8, dx: '-2px', dy: '2px', dur: '3.2s', del: '0.8s' },
              { cx: 142, cy: 35, r: 1.2, dx: '3px', dy: '1px', dur: '2.6s', del: '1.2s' },
              { cx: 96, cy: 38, r: 1.5, dx: '-1px', dy: '-3px', dur: '3.4s', del: '0.6s' },
              { cx: 150, cy: 72, r: 1.3, dx: '2px', dy: '2px', dur: '2.9s', del: '1s' },
              { cx: 108, cy: 85, r: 1, dx: '-2px', dy: '1px', dur: '3.1s', del: '1.4s' },
            ].map((p, i) => (
              <circle key={i} cx={p.cx} cy={p.cy} r={p.r} fill="#8B5CF6" className="pl-particle"
                style={{ '--dx': p.dx, '--dy': p.dy, '--dur': p.dur, '--del': p.del }} />
            ))}
          </g>

          {/* Arrow: Memory Node → Intent Node */}
          <line id="pl-mem-to-intent" className="pl-hidden"
            x1="120" y1="80" x2="120" y2="265"
            stroke="#8B5CF6" strokeWidth="1.2" strokeDasharray="185" strokeDashoffset="185"
            markerEnd="url(#pl-arr-p)" />

          {/* Signal dots */}
          <circle id="pl-sig1" className="pl-hidden" cx="100" cy="290" r="4" fill="#0EA5E9" />
          <circle id="pl-sig2" className="pl-hidden" cx="80" cy="330" r="4" fill="#0EA5E9" />
          <circle id="pl-sig3" className="pl-hidden" cx="120" cy="275" r="3.5" fill="#8B5CF6" />
          <circle id="pl-sig4" className="pl-hidden" cx="90" cy="340" r="3.5" fill="#0EA5E9" />

          {/* Trickle dots */}
          <circle id="pl-trickle-1" className="pl-hidden" cx="100" cy="300" r="2.5" fill="#0EA5E9" opacity="0.5" />
          <circle id="pl-trickle-2" className="pl-hidden" cx="115" cy="320" r="2" fill="#8B5CF6" opacity="0.5" />
          <circle id="pl-trickle-3" className="pl-hidden" cx="90" cy="310" r="2" fill="#0EA5E9" opacity="0.4" />

          {/* Intent Node */}
          <g id="pl-intent-node" className="pl-hidden">
            <rect id="pl-intent-rect" x="35" y="265" width="170" height="90" rx="8" ry="8"
              fill="rgba(255,255,255,0.06)" stroke="#0EA5E9" strokeWidth="2" />
            <text x="120" y="307" textAnchor="middle" fill="#F8FAFC" fontSize="14" fontWeight="700" fontFamily={F}>Intent Node</text>
          </g>
          <text id="pl-intent-label" className="pl-hidden" x="120" y="373"
            textAnchor="middle" fill="#94A3B8" fontSize="9" fontFamily={F}>Intent Capture</text>

          {/* Evidence Sources group */}
          <text id="pl-ev-label-top" className="pl-hidden" x="120" y="398"
            textAnchor="middle" fill="#94A3B8" fontSize="9" fontFamily={F}>Evidence Sources</text>

          {/* Group box around evidence */}
          <rect id="pl-ev-group-box" className="pl-hidden" x="22" y="405" width="196" height="58" rx="6" ry="6"
            fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

          <g id="pl-src-sys" className="pl-hidden">
            <rect x="28" y="411" width="88" height="46" rx="5" ry="5"
              fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <text x="72" y="438" textAnchor="middle" fill="#475569" fontSize="10" fontFamily={F}>Systems</text>
          </g>
          <g id="pl-src-docs" className="pl-hidden">
            <rect x="124" y="411" width="88" height="46" rx="5" ry="5"
              fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <text x="168" y="438" textAnchor="middle" fill="#475569" fontSize="10" fontFamily={F}>Docs</text>
          </g>

          <text id="pl-ev-label-bot" className="pl-hidden" x="120" y="478"
            textAnchor="middle" fill="#94A3B8" fontSize="9" fontStyle="italic" fontFamily={F}>Agentic Evidence</text>

          {/* Query lines: Intent → Evidence (dashed, cyan) */}
          <line id="pl-query-sys" className="pl-hidden"
            x1="85" y1="355" x2="72" y2="411"
            stroke="#0EA5E9" strokeWidth="1" strokeDasharray="4,3" />
          <line id="pl-query-docs" className="pl-hidden"
            x1="155" y1="355" x2="168" y2="411"
            stroke="#0EA5E9" strokeWidth="1" strokeDasharray="4,3" />

          {/* Return lines: Evidence → Intent (solid, emerald) */}
          <line id="pl-return-sys" className="pl-hidden"
            x1="72" y1="411" x2="95" y2="355"
            stroke="#10B981" strokeWidth="1.5" strokeDasharray="62" strokeDashoffset="62" />
          <line id="pl-return-docs" className="pl-hidden"
            x1="168" y1="411" x2="145" y2="355"
            stroke="#10B981" strokeWidth="1.5" strokeDasharray="62" strokeDashoffset="62" />

          {/* ════════ Connector: Intent Node → DAG zone ════════ */}
          <line id="pl-intent-to-dag" className="pl-hidden"
            x1="205" y1="310" x2="270" y2="310"
            stroke="#0EA5E9" strokeWidth="2" strokeDasharray="65" strokeDashoffset="65"
            markerEnd="url(#pl-arr-c)" />

          {/* Fan-out splits to 3 lanes */}
          <line id="pl-split-1" className="pl-hidden"
            x1="270" y1="310" x2="348" y2={L1Y}
            stroke="#0EA5E9" strokeWidth="1.2" strokeDasharray="150" strokeDashoffset="150" />
          <line id="pl-split-2" className="pl-hidden"
            x1="270" y1="310" x2="348" y2={L2Y}
            stroke="#8B5CF6" strokeWidth="1.2" strokeDasharray="78" strokeDashoffset="78" />
          <line id="pl-split-3" className="pl-hidden"
            x1="270" y1="310" x2="348" y2={L3Y}
            stroke="#F59E0B" strokeWidth="1.2" strokeDasharray="150" strokeDashoffset="150" />

          {/* ════════ ZONE 3: DAG Lanes ════════ */}

          {/* "The path is discovered" label */}
          <text id="pl-path-label" className="pl-hidden" x="540" y="140"
            textAnchor="middle" fill="#94A3B8" fontSize="11" fontStyle="italic" fontFamily={F}>
            The path is discovered, not designed
          </text>

          {/* Lane background bands */}
          <rect id="pl-lane-bg-1" className="pl-hidden" x="260" y={L1Y - 30} width="510" height={BH + 4} rx="4" ry="4"
            fill="rgba(14,165,233,0.03)" stroke="rgba(14,165,233,0.06)" strokeWidth="0.5" />
          <rect id="pl-lane-bg-2" className="pl-hidden" x="260" y={L2Y - 30} width="510" height={BH + 4} rx="4" ry="4"
            fill="rgba(139,92,246,0.03)" stroke="rgba(139,92,246,0.06)" strokeWidth="0.5" />
          <rect id="pl-lane-bg-3" className="pl-hidden" x="260" y={L3Y - 30} width="510" height={BH + 4} rx="4" ry="4"
            fill="rgba(245,158,11,0.03)" stroke="rgba(245,158,11,0.06)" strokeWidth="0.5" />

          {/* Lane labels */}
          <g id="pl-lane-lbl-1" className="pl-hidden">
            <text x="275" y={L1Y - 4} fill="#0EA5E9" fontSize="10" fontWeight="600" fontFamily={F}>Legal</text>
            <text x="275" y={L1Y + 8} fill="#0EA5E9" fontSize="10" fontWeight="600" fontFamily={F}>Review</text>
          </g>
          <g id="pl-lane-lbl-2" className="pl-hidden">
            <text x="270" y={L2Y - 4} fill="#8B5CF6" fontSize="10" fontWeight="600" fontFamily={F}>Product</text>
            <text x="270" y={L2Y + 8} fill="#8B5CF6" fontSize="10" fontWeight="600" fontFamily={F}>Analysis</text>
          </g>
          <g id="pl-lane-lbl-3" className="pl-hidden">
            <text x="275" y={L3Y - 4} fill="#F59E0B" fontSize="10" fontWeight="600" fontFamily={F}>Ops</text>
            <text x="275" y={L3Y + 8} fill="#F59E0B" fontSize="10" fontWeight="600" fontFamily={F}>Assessment</text>
          </g>

          {/* ── LANE 1: Legal Review (cyan) ── */}
          <line id="pl-l1e12" className="pl-hidden"
            x1={BX1 + BW} y1={L1Y} x2={BX2} y2={L1Y}
            stroke="#0EA5E9" strokeWidth="1.5" strokeDasharray="20" strokeDashoffset="20" />
          <line id="pl-l1e2g" className="pl-hidden"
            x1={BX2 + BW} y1={L1Y} x2={BX3} y2={L1Y}
            stroke="#0EA5E9" strokeWidth="0.5" strokeDasharray="2,4" />

          <g id="pl-l1b1" className="pl-hidden">
            <rect x={BX1} y={L1Y - BH / 2} width={BW} height={BH} rx={BR} ry={BR}
              fill="rgba(255,255,255,0.05)" stroke="#0EA5E9" strokeWidth="1.5" />
            <text x={BX1 + BW / 2} y={L1Y - 5} textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily={F}>Claim</text>
            <text x={BX1 + BW / 2} y={L1Y + 9} textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily={F}>Extraction</text>
          </g>
          <g id="pl-l1b2" className="pl-hidden">
            <rect x={BX2} y={L1Y - BH / 2} width={BW} height={BH} rx={BR} ry={BR}
              fill="rgba(255,255,255,0.05)" stroke="#0EA5E9" strokeWidth="1.5" />
            <text x={BX2 + BW / 2} y={L1Y - 5} textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily={F}>Policy</text>
            <text x={BX2 + BW / 2} y={L1Y + 9} textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily={F}>Mapping</text>
          </g>
          <g id="pl-l1ghost" className="pl-hidden">
            <rect x={BX3} y={L1Y - BH / 2} width={BW} height={BH} rx={BR} ry={BR}
              fill="none" stroke="#0EA5E9" strokeWidth="0.6" strokeDasharray="2,4" />
            <text x={BX3 + BW / 2} y={L1Y + 4} textAnchor="middle" fill="#0EA5E9" fontSize="18" opacity="0.35">+</text>
          </g>

          {/* Ambient edge dot */}
          <circle id="pl-edot-l1" className="pl-hidden" cx={BX1 + BW} cy={L1Y} r="2" fill="#0EA5E9" opacity="0.6" />

          {/* ── LANE 2: Product Analysis (purple, disruption) ── */}
          <line id="pl-l2e12" className="pl-hidden"
            x1={BX1 + BW} y1={L2Y} x2={BX2} y2={L2Y}
            stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="20" strokeDashoffset="20" />

          <g id="pl-l2b1" className="pl-hidden">
            <rect x={BX1} y={L2Y - BH / 2} width={BW} height={BH} rx={BR} ry={BR}
              fill="rgba(255,255,255,0.05)" stroke="#8B5CF6" strokeWidth="1.5" />
            <text x={BX1 + BW / 2} y={L2Y - 5} textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily={F}>Contradiction</text>
            <text x={BX1 + BW / 2} y={L2Y + 9} textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily={F}>Detection</text>
          </g>
          <g id="pl-l2b2" className="pl-hidden">
            <rect x={BX2} y={L2Y - BH / 2} width={BW} height={BH} rx={BR} ry={BR}
              fill="rgba(255,255,255,0.05)" stroke="#8B5CF6" strokeWidth="1.5" />
            <text x={BX2 + BW / 2} y={L2Y - 5} textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily={F}>Scope</text>
            <text x={BX2 + BW / 2} y={L2Y + 9} textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily={F}>Assessment</text>
          </g>

          {/* Strikethrough */}
          <line id="pl-l2-strike" className="pl-hidden"
            x1={BX2 + 5} y1={L2Y - BH / 2 + 5} x2={BX2 + BW - 5} y2={L2Y + BH / 2 - 5}
            stroke="#EF4444" strokeWidth="2.5" strokeDasharray="130" strokeDashoffset="130" />

          {/* "New evidence" label */}
          <text id="pl-l2-newev" className="pl-hidden" x={BX2 + BW / 2} y={L2Y - BH / 2 - 6}
            textAnchor="middle" fill="#F59E0B" fontSize="8.5" fontWeight="600" fontFamily={F}>⚡ New evidence</text>

          {/* Disruption dot */}
          <circle id="pl-disrupt-dot" className="pl-hidden" cx="270" cy={L2Y + 100} r="4" fill="#F59E0B" />

          {/* Bypass edge */}
          <path id="pl-l2-bypass" className="pl-hidden"
            d={`M ${BX1 + BW},${L2Y} Q ${BX2 + BW / 2},${L2Y + 55} ${BX3},${L2Y}`}
            fill="none" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="6,4"
            strokeDashoffset="220" />

          <g id="pl-l2b3" className="pl-hidden">
            <rect x={BX3} y={L2Y - BH / 2} width={BW} height={BH} rx={BR} ry={BR}
              fill="rgba(255,255,255,0.03)" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="4,3" />
            <text x={BX3 + BW / 2} y={L2Y - 5} textAnchor="middle" fill="#F8FAFC" fontSize="11" opacity="0.8" fontFamily={F}>Owner</text>
            <text x={BX3 + BW / 2} y={L2Y + 9} textAnchor="middle" fill="#F8FAFC" fontSize="11" opacity="0.8" fontFamily={F}>Derivation</text>
          </g>

          {/* ── LANE 3: Ops Assessment (amber) ── */}
          <line id="pl-l3e12" className="pl-hidden"
            x1={BX1 + BW} y1={L3Y} x2={BX2} y2={L3Y}
            stroke="#F59E0B" strokeWidth="1" strokeDasharray="6,4" />

          <g id="pl-l3b1" className="pl-hidden">
            <rect x={BX1} y={L3Y - BH / 2} width={BW} height={BH} rx={BR} ry={BR}
              fill="rgba(255,255,255,0.05)" stroke="#F59E0B" strokeWidth="1.5" />
            <text x={BX1 + BW / 2} y={L3Y - 5} textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily={F}>Impact</text>
            <text x={BX1 + BW / 2} y={L3Y + 9} textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily={F}>Analysis</text>
          </g>
          <g id="pl-l3b2" className="pl-hidden">
            <rect x={BX2} y={L3Y - BH / 2} width={BW} height={BH} rx={BR} ry={BR}
              fill="rgba(255,255,255,0.03)" stroke="#F59E0B" strokeWidth="1" strokeDasharray="4,3" />
            <text x={BX2 + BW / 2} y={L3Y - 5} textAnchor="middle" fill="#F8FAFC" fontSize="11" opacity="0.8" fontFamily={F}>Decision</text>
            <text x={BX2 + BW / 2} y={L3Y + 9} textAnchor="middle" fill="#F8FAFC" fontSize="11" opacity="0.8" fontFamily={F}>Delta</text>
          </g>

          {/* ════════ Convergence lines → Gate ════════ */}
          <line id="pl-conv-1" className="pl-hidden"
            x1={BX3 + BW} y1={L1Y} x2={GX - 45} y2={L2Y - 5}
            stroke="#0EA5E9" strokeWidth="1" strokeDasharray="155" strokeDashoffset="155" />
          <line id="pl-conv-2" className="pl-hidden"
            x1={BX3 + BW} y1={L2Y} x2={GX - 45} y2={L2Y}
            stroke="#8B5CF6" strokeWidth="1" strokeDasharray="6,4" />
          <line id="pl-conv-3" className="pl-hidden"
            x1={BX2 + BW} y1={L3Y} x2={GX - 45} y2={L2Y + 5}
            stroke="#F59E0B" strokeWidth="1" strokeDasharray="6,4" />

          {/* ════════ GATE (hexagon) ════════ */}
          <g id="pl-gate" className="pl-hidden">
            <polygon id="pl-gate-poly"
              points={`${GX - 45},${L2Y} ${GX - 22},${L2Y - 35} ${GX + 22},${L2Y - 35} ${GX + 45},${L2Y} ${GX + 22},${L2Y + 35} ${GX - 22},${L2Y + 35}`}
              fill="rgba(245,158,11,0.06)" stroke="#F59E0B" strokeWidth="1.5" />
            <text x={GX} y={L2Y - 8} textAnchor="middle" fill="#F8FAFC" fontSize="10" fontWeight="600" fontFamily={F}>Human</text>
            <text x={GX} y={L2Y + 5} textAnchor="middle" fill="#F8FAFC" fontSize="10" fontWeight="600" fontFamily={F}>Approval Gate</text>
            <text id="pl-gate-status" x={GX} y={L2Y + 20} textAnchor="middle"
              fill="#F59E0B" fontSize="8.5" fontWeight="700" fontFamily={F}>Pending</text>
          </g>

          <circle id="pl-gate-pulse" className="pl-hidden" cx={GX} cy={L2Y} r="20"
            fill="none" stroke="#10B981" strokeWidth="1.5" opacity="0" />
          <text id="pl-gate-check" className="pl-hidden" x={GX} y={L2Y - 40}
            textAnchor="middle" fill="#10B981" fontSize="14">✓</text>

          <g id="pl-gate-badges" className="pl-hidden">
            <text x={GX} y={L2Y + 52} textAnchor="middle" fill="#10B981" fontSize="9" fontWeight="600" fontFamily={F}>Approved ✓</text>
            <text x={GX} y={L2Y + 64} textAnchor="middle" fill="#F59E0B" fontSize="8" fontWeight="700" fontFamily={F}>No bypass mode</text>
          </g>

          {/* Gate → Decision Record */}
          <line id="pl-gate-to-dr" className="pl-hidden"
            x1={GX + 45} y1={L2Y} x2={DRX} y2={L2Y}
            stroke="#10B981" strokeWidth="1.5" strokeDasharray="35" strokeDashoffset="35"
            markerEnd="url(#pl-arr-e)" />

          {/* ════════ Decision Record ════════ */}
          <g id="pl-decision-record" className="pl-hidden">
            <rect x={DRX} y={L2Y - BH / 2} width="130" height={BH} rx="8" ry="8"
              fill="rgba(16,185,129,0.08)" stroke="#10B981" strokeWidth="2" />
            <text x={DRX + 65} y={L2Y - 6} textAnchor="middle" fill="#F8FAFC" fontSize="11.5" fontWeight="700" fontFamily={F}>Decision</text>
            <text x={DRX + 65} y={L2Y + 8} textAnchor="middle" fill="#F8FAFC" fontSize="11.5" fontWeight="700" fontFamily={F}>Record</text>
            <text x={DRX + 65} y={L2Y + 22} textAnchor="middle" fill="#10B981" fontSize="10">🔒</text>
          </g>

          {/* ════════ ZONE 4: Provenance ════════ */}
          <line id="pl-provenance" className="pl-hidden"
            x1={DRX + 65} y1={L2Y + 40} x2="120" y2={L2Y + 40}
            stroke="#0EA5E9" strokeWidth="0.8" opacity="0.35"
            strokeDasharray="920" strokeDashoffset="920" />

          <line id="pl-timeline" className="pl-hidden"
            x1="260" y1="560" x2="1050" y2="560"
            stroke="rgba(14,165,233,0.3)" strokeWidth="1"
            strokeDasharray="790" strokeDashoffset="790" />
          <text id="pl-timeline-label" className="pl-hidden" x="655" y="578"
            textAnchor="middle" fill="#475569" fontSize="9.5" fontFamily={F}>Provenance timeline</text>
          <text id="pl-timeline-lock" className="pl-hidden" x="1060" y="564"
            fill="#475569" fontSize="10">🔒</text>

        </svg>
      </div>
    </div>
  )
}
