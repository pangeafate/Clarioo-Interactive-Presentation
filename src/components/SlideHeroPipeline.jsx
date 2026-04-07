import React, { useEffect, useState, useCallback, useRef } from 'react'

/* ───────────────────────── CSS ───────────────────────── */
const PIPELINE_CSS = `
/* ── Base visibility ── */
.pl-hidden { opacity: 0; pointer-events: none; transition: opacity 0.8s ease-in-out; }
.pl-visible { opacity: 1; transition: opacity 0.8s ease-in-out; }
.pl-visible-emerging { opacity: 0.7; transition: opacity 0.8s ease-in-out; }
.pl-visible-ghost { opacity: 0.2; transition: opacity 0.8s ease-in-out; }
.pl-visible-invalidated { opacity: 0.3; transition: opacity 0.8s ease; }

/* ── Glass cards ── */
.pl-card {
  width: 17rem; min-height: 7rem; border-radius: 0.75rem;
  background: rgba(255,255,255,0.05); border: 1.5px solid rgba(255,255,255,0.1);
  backdrop-filter: blur(10px); padding: 0.75rem 0.85rem;
  transition: border-color 0.8s ease-in-out, box-shadow 0.8s ease-in-out, opacity 0.8s ease-in-out, filter 0.8s ease-in-out;
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

/* Evidence flow lines — dashes move upward */
@keyframes pl-ev-up { to { stroke-dashoffset: -16; } }
.pl-ev-flow { animation: pl-ev-up 1.2s linear infinite; }

/* Intent signal dots flying into Intent Node */
@keyframes pl-fly-in {
  0%   { opacity: 0; transform: translate(0, 0); }
  15%  { opacity: 0.7; }
  85%  { opacity: 0.5; }
  100% { opacity: 0; transform: translate(155px, 0px); }
}
.pl-intent-fly { animation: pl-fly-in 2.8s ease-in-out infinite; }

/* ── Card inactive (gray) state ── */
.pl-card-inactive { opacity: 0.5; filter: saturate(0); transition: opacity 0.8s ease-in-out, filter 0.8s ease-in-out, border-color 0.8s ease-in-out, box-shadow 0.8s ease-in-out; }

/* ── Gate inactive (gray) state ── */
.pl-gate-inactive { opacity: 0.35; filter: saturate(0); transition: opacity 0.8s ease-in-out, filter 0.8s ease-in-out; }
.pl-gate-active { opacity: 1; filter: saturate(1); transition: opacity 0.8s ease-in-out, filter 0.8s ease-in-out; }

/* ── Frame counter UI ── */
.pl-frame-bar {
  position: absolute; bottom: 0.5rem; left: 50%; transform: translateX(-50%);
  display: flex; align-items: center; gap: 0.8rem; z-index: 10;
  background: rgba(11,18,33,0.85); border: 1px solid rgba(255,255,255,0.1);
  border-radius: 0.6rem; padding: 0.4rem 1rem; backdrop-filter: blur(8px);
}
.pl-frame-btn {
  background: none; border: 1px solid rgba(255,255,255,0.2); color: #94A3B8;
  border-radius: 5px; padding: 0.3rem 0.75rem; cursor: pointer; font-size: 1rem;
  font-family: Inter, system-ui, sans-serif;
}
.pl-frame-btn:hover { background: rgba(255,255,255,0.08); color: #F8FAFC; }
.pl-frame-label { color: #94A3B8; font-size: 0.9rem; font-family: Inter, system-ui, sans-serif; min-width: 8rem; text-align: center; }
.pl-frame-play { color: #10B981; }
`;


/* ── Animation frames: each frame is a list of element IDs to reveal ── */
const FRAMES = [
  { name: 'Cards (inactive)', ids: [], cardsGray: true },
  { name: 'Signal scatter', ids: ['pl-intent-scatter', 'pl-intro-text'], hideIds: { 'pl-intro-text': 4 } },
  { name: 'Intent Node', ids: ['pl-intent-node', 'pl-intent-label'] },
  { name: 'Evidence labels', ids: ['pl-ev-label-top', 'pl-src-sys', 'pl-src-docs', 'pl-ev-label-bot'] },
  { name: 'Evidence arrows', ids: ['pl-return-sys', 'pl-return-docs'] },
  { name: 'Card: Agentic Evidence', ids: ['pl-card-2'], cardClass: 'pl-card-active-emerald' },
  { name: 'DAG container + label', ids: ['pl-dag-bg', 'pl-dag-title', 'pl-path-label'] },
  { name: 'Fan-out connectors (L1+L2)', ids: ['pl-split-1', 'pl-split-2'] },
  { name: 'Card: Execution Engine', ids: ['pl-card-1'], cardClass: 'pl-card-active-cyan' },
  { name: 'Convergence + Gate (inactive)', ids: ['pl-conv-1', 'pl-conv-2', 'pl-gate', 'pl-gate-check', 'pl-gate-badges'], gateGray: true },
  { name: 'Lane containers (L1+L2)', ids: ['pl-lane-bg-1', 'pl-lane-bg-2', 'pl-lane-lbl-1', 'pl-lane-lbl-2'] },
  { name: 'L1: Claim Extraction', ids: ['pl-l1b1', 'pl-l1e12'] },
  { name: 'L1: Policy Mapping', ids: ['pl-l1b2', 'pl-l1e2g'] },
  { name: 'L1: Human Approval Gate', ids: ['pl-l1-gate'] },
  { name: 'L2: Contradiction Detection', ids: ['pl-l2b1', 'pl-l2e12'] },
  { name: 'L2: Scope Assessment (invalidated)', ids: ['pl-l2b2', 'pl-l2-newev'] },
  { name: 'L2: Owner Derivation', ids: ['pl-l2b3'] },
  { name: 'Cross: Policy→Owner', ids: ['pl-cross-l1-l2'] },
  { name: 'Ops Assessment lane', ids: ['pl-split-3', 'pl-lane-bg-3', 'pl-lane-lbl-3', 'pl-conv-3'] },
  { name: 'Cross: Owner→Impact', ids: ['pl-cross-l2-l3'] },
  { name: 'L3: Impact Analysis', ids: ['pl-l3b1', 'pl-l3e12'] },
  { name: 'L3: Decision Delta', ids: ['pl-l3b2'] },
  { name: 'Gate activates', ids: [], gateActivate: true },
  { name: 'Gate → Decision Record', ids: ['pl-gate-to-dr', 'pl-decision-record'] },
  { name: 'Card: Governance', ids: ['pl-card-3'], cardClass: 'pl-card-active-amber' },
  { name: 'Provenance timeline', ids: ['pl-timeline', 'pl-timeline-label', 'pl-timeline-lock'] },
  { name: 'Flywheel arc', ids: ['pl-flywheel', 'pl-flywheel-label'] },
  { name: 'Memory Graph', ids: ['pl-mem-node', 'pl-particles', 'pl-mem-to-intent'] },
  { name: 'Card: Decision Memory', ids: ['pl-card-4'], cardClass: 'pl-card-active-purple' },
]

/* ────────────────────────── Component ────────────────────────── */
export default function SlideHeroPipeline() {
  const [frame, setFrame] = useState(0)
  const [playing, setPlaying] = useState(false)
  const playRef = useRef(null)
  const startedRef = useRef(false)
  const debounceRef = useRef(null)
  const slideRef = useRef(null)
  const keyHandlerRef = useRef(null)

  const totalFrames = FRAMES.length

  /* Show all elements up to and including the target frame */
  const applyFrame = useCallback((targetFrame) => {
    const cardIds = ['pl-card-1', 'pl-card-2', 'pl-card-3', 'pl-card-4']
    const cardClasses = ['pl-card-active-cyan', 'pl-card-active-emerald', 'pl-card-active-amber', 'pl-card-active-purple']

    /* First hide all SVG animated elements */
    document.querySelectorAll('.pl-hidden, .pl-visible, .pl-visible-emerging, .pl-visible-ghost').forEach(el => {
      el.classList.add('pl-hidden')
      el.classList.remove('pl-visible', 'pl-visible-emerging', 'pl-visible-ghost')
    })

    /* Reset all cards to hidden state */
    cardIds.forEach(id => {
      const el = document.getElementById(id)
      if (el) {
        el.classList.remove('pl-card-inactive', ...cardClasses)
        el.style.opacity = ''
      }
    })

    /* Check if any frame up to targetFrame has cardsGray */
    let showCardsGray = false
    const activatedCards = new Set()
    for (let i = 0; i <= targetFrame; i++) {
      const f = FRAMES[i]
      if (!f) continue
      if (f.cardsGray) showCardsGray = true
      if (f.cardClass) f.ids.forEach(id => activatedCards.add(id))
    }

    /* Show cards gray if triggered, then activate specific ones */
    if (showCardsGray) {
      cardIds.forEach(id => {
        const el = document.getElementById(id)
        if (!el) return
        if (activatedCards.has(id)) {
          el.classList.remove('pl-card-inactive')
        } else {
          el.classList.add('pl-card-inactive')
        }
      })
    }

    /* Reveal all SVG frames from 0 to targetFrame */
    for (let i = 0; i <= targetFrame; i++) {
      const f = FRAMES[i]
      if (!f) continue
      const isCurrentFrame = (i === targetFrame)
      f.ids.forEach((id, idx) => {
        const el = document.getElementById(id)
        if (!el) return
        el.classList.remove('pl-hidden')
        el.classList.add('pl-visible')
        /* Stagger only the current frame's elements */
        if (isCurrentFrame && f.ids.length > 1) {
          el.style.transitionDelay = `${idx * 0.12}s`
        } else {
          el.style.transitionDelay = '0s'
        }
      })
      if (f.cardClass) {
        f.ids.forEach(id => {
          const el = document.getElementById(id)
          if (el) el.classList.add(f.cardClass)
        })
      }
    }

    /* Handle gate gray/active state */
    const gateEl = document.getElementById('pl-gate')
    if (gateEl) {
      let gateShown = false
      let gateActivated = false
      for (let i = 0; i <= targetFrame; i++) {
        if (FRAMES[i]?.gateGray) gateShown = true
        if (FRAMES[i]?.gateActivate) gateActivated = true
      }
      gateEl.classList.remove('pl-gate-inactive', 'pl-gate-active')
      if (gateShown && !gateActivated) {
        gateEl.classList.add('pl-gate-inactive')
      } else if (gateShown && gateActivated) {
        gateEl.classList.add('pl-gate-active')
      }
    }

    /* Hide elements that have a hideIds threshold */
    for (let i = 0; i <= targetFrame; i++) {
      const f = FRAMES[i]
      if (!f || !f.hideIds) continue
      Object.entries(f.hideIds).forEach(([id, hideAtFrame]) => {
        if (targetFrame >= hideAtFrame) {
          const el = document.getElementById(id)
          if (el) { el.classList.add('pl-hidden'); el.classList.remove('pl-visible') }
        }
      })
    }
  }, [])

  /* When frame changes, apply it */
  useEffect(() => {
    applyFrame(frame)
  }, [frame, applyFrame])

  /* Auto-start playback when slide becomes visible */
  useEffect(() => {
    const el = slideRef.current
    if (!el) return
    const wrapper = el.closest('.slide-wrapper')
    if (!wrapper) return

    const checkActive = () => {
      const isActive = wrapper.classList.contains('active')
      if (isActive && !startedRef.current) {
        startedRef.current = true
        setFrame(0)
        setPlaying(true)
      } else if (!isActive && startedRef.current) {
        startedRef.current = false
        setPlaying(false)
        setFrame(0)
      }
    }

    const observer = new MutationObserver(() => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
      debounceRef.current = setTimeout(checkActive, 150)
    })
    observer.observe(wrapper, { attributes: true, attributeFilter: ['class'] })
    checkActive()

    return () => {
      observer.disconnect()
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
  }, [])

  /* Auto-play: dynamic interval — faster between frames 10-22 */
  useEffect(() => {
    if (!playing) return
    const delay = (frame >= 9 && frame < 22) ? 700 : 1400
    playRef.current = setTimeout(() => {
      setFrame(prev => {
        if (prev >= totalFrames - 1) {
          setPlaying(false)
          return prev
        }
        return prev + 1
      })
    }, delay)
    return () => { if (playRef.current) clearTimeout(playRef.current) }
  }, [playing, frame, totalFrames])

  const goNext = () => setFrame(prev => Math.min(prev + 1, totalFrames - 1))
  const goPrev = () => setFrame(prev => Math.max(prev - 1, -1))
  const rewind = () => { setPlaying(false); setFrame(-1) }
  const togglePlay = () => {
    if (frame >= totalFrames - 1) setFrame(-1)
    setPlaying(p => !p)
  }

  /* Keep a stable ref pointing to the latest action callbacks so the
     capture-phase listener below never needs to be re-registered. */
  keyHandlerRef.current = { goNext, goPrev, togglePlay }

  /* Keyboard: left/right arrows, space to play/pause.
     Registered once (empty dep array); reads latest callbacks via ref
     so there is never a stale-closure window or duplicate listener storm. */
  useEffect(() => {
    function handleKey(e) {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return
      const { goNext, goPrev, togglePlay } = keyHandlerRef.current
      if (e.key === 'ArrowRight') { e.preventDefault(); e.stopPropagation(); goNext() }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); e.stopPropagation(); goPrev() }
      else if (e.key === ' ') { e.preventDefault(); e.stopPropagation(); togglePlay() }
    }
    window.addEventListener('keydown', handleKey, true)
    return () => window.removeEventListener('keydown', handleKey, true)
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
  const GX = 865, DRX = 960

  return (
    <div ref={slideRef} className="pdf-slide" style={{
      padding: 0, display: 'flex', flexDirection: 'column',
      height: '100%', overflow: 'hidden', background: 'var(--bg-deep-navy)'
    }}>
      <style>{PIPELINE_CSS}</style>

      {/* ═══ HEADER ═══ */}
      <div style={{ textAlign: 'center', padding: '1.2rem 2rem 0.4rem', flex: '0 0 auto' }}>
        <h1 style={{ color: 'var(--text-primary)', fontSize: '2.4rem', fontWeight: 700, margin: 0, lineHeight: 1.2 }}>
          Technology: From Signals to Executable Decisions
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontStyle: 'italic', margin: '0.3rem 0 0', lineHeight: 1.4 }}>
          A self-composing, evidence-driven decision architecture — not a workflow tool, not a knowledge base.
        </p>
      </div>

      {/* ═══ PILLAR CARDS ═══ */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', padding: '0.3rem 1rem 0.4rem', flex: '0 0 auto' }}>
        <div id="pl-card-2" className="pl-card">
          <p style={{ fontSize: '0.92rem', lineHeight: 1.45, margin: 0 }}>
            <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>Agentic Evidence: </span>
            <span style={{ color: 'var(--text-secondary)' }}>Each answer sharpens the next question — evidence quality compounds automatically</span>
          </p>
        </div>
        <div id="pl-card-1" className="pl-card pl-card-hero">
          <p style={{ fontSize: '0.92rem', lineHeight: 1.45, margin: 0 }}>
            <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>Graph as Execution Engine: </span>
            <span style={{ color: 'var(--text-secondary)' }}>
              The graph is both the <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>data structure</span> and
              the <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>execution engine</span> — LLMs compose the DAG, not just query it
            </span>
          </p>
        </div>
        <div id="pl-card-3" className="pl-card">
          <p style={{ fontSize: '0.92rem', lineHeight: 1.45, margin: 0 }}>
            <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>Governance: </span>
            <span style={{ color: 'var(--text-secondary)' }}>Isolation at the graph engine, not application code. Every decision append-only.</span>
          </p>
        </div>
        <div id="pl-card-4" className="pl-card">
          <p style={{ fontSize: '0.92rem', lineHeight: 1.45, margin: 0 }}>
            <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>Decision Memory: </span>
            <span style={{ color: 'var(--text-secondary)' }}>Past decisions shape future paths — the moat deepens with every use</span>
          </p>
        </div>
      </div>

      {/* ═══ SVG PIPELINE ═══ */}
      <div style={{ flex: 1, minHeight: 0, padding: '0 0.5rem 0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg viewBox="-38 0 1200 650" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', height: '100%' }}>
          <defs>
            <marker id="pl-arr-c" markerWidth="6" markerHeight="5" refX="6" refY="2.5" orient="auto">
              <polygon points="0,0 6,2.5 0,5" fill="#0EA5E9" />
            </marker>
            <marker id="pl-arr-e" markerWidth="6" markerHeight="5" refX="6" refY="2.5" orient="auto">
              <polygon points="0,0 6,2.5 0,5" fill="#10B981" />
            </marker>
            <marker id="pl-arr-p" markerWidth="6" markerHeight="5" refX="6" refY="2.5" orient="auto">
              <polygon points="0,0 6,2.5 0,5" fill="#8B5CF6" />
            </marker>
            <marker id="pl-arr-a" markerWidth="6" markerHeight="5" refX="6" refY="2.5" orient="auto">
              <polygon points="0,0 6,2.5 0,5" fill="#F59E0B" />
            </marker>
            <marker id="pl-arr-g" markerWidth="6" markerHeight="5" refX="6" refY="2.5" orient="auto">
              <polygon points="0,0 6,2.5 0,5" fill="#64748B" />
            </marker>
            <linearGradient id="pl-grad-fly" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
            <filter id="pl-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* ════════ ZONE 5: Flywheel — elbow from DR up → left → down to Memory ════════ */}
          {/* Flywheel: DR up → left at y=62 → into Memory Node right side */}
          <path id="pl-flywheel" className="pl-hidden"
            d="M 1025,282 V 74 Q 1025,62 1013,62 H 146"
            fill="none" stroke="url(#pl-grad-fly)" strokeWidth="2"
            markerEnd="url(#pl-arr-p)" />
          <text id="pl-flywheel-label" className="pl-hidden" x="520" y="54"
            textAnchor="middle" fill="#94A3B8" fontSize="11" fontStyle="italic" fontFamily={F}>
            Each decision trains the next
          </text>

          {/* ════════ ZONE 1: Memory Node + Intent Node + Evidence ════════ */}

          {/* Memory Node — non-oriented graph cluster */}
          <g id="pl-mem-node" className="pl-hidden">
            {/* Graph edges (undirected, no arrows) */}
            <line x1="110" y1="52" x2="130" y2="48" stroke="#8B5CF6" strokeWidth="1" opacity="0.5" />
            <line x1="130" y1="48" x2="136" y2="66" stroke="#8B5CF6" strokeWidth="1" opacity="0.5" />
            <line x1="136" y1="66" x2="118" y2="74" stroke="#8B5CF6" strokeWidth="1" opacity="0.5" />
            <line x1="118" y1="74" x2="104" y2="66" stroke="#8B5CF6" strokeWidth="1" opacity="0.5" />
            <line x1="104" y1="66" x2="110" y2="52" stroke="#8B5CF6" strokeWidth="1" opacity="0.5" />
            <line x1="110" y1="52" x2="120" y2="60" stroke="#8B5CF6" strokeWidth="1" opacity="0.4" />
            <line x1="130" y1="48" x2="120" y2="60" stroke="#8B5CF6" strokeWidth="1" opacity="0.4" />
            <line x1="136" y1="66" x2="120" y2="60" stroke="#8B5CF6" strokeWidth="1" opacity="0.4" />
            {/* Graph nodes */}
            <circle cx="110" cy="52" r="3.5" fill="#8B5CF6" opacity="0.8" />
            <circle cx="130" cy="48" r="3" fill="#8B5CF6" opacity="0.7" />
            <circle cx="136" cy="66" r="3.5" fill="#8B5CF6" opacity="0.8" />
            <circle cx="118" cy="74" r="3" fill="#8B5CF6" opacity="0.7" />
            <circle cx="104" cy="66" r="2.5" fill="#8B5CF6" opacity="0.6" />
            <circle cx="120" cy="60" r="4" fill="#A78BFA" opacity="0.9" />
            {/* Label */}
            <text x="120" y="96" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily={F}>Decision &amp; Intent</text>
            <text x="120" y="108" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily={F}>Memory Graph</text>
          </g>

          {/* Decorative particle scatter to the left of Memory Node */}
          <g id="pl-particles" className="pl-hidden">
            {[
              { cx: 72, cy: 46, r: 2.5 }, { cx: 80, cy: 62, r: 2 },
              { cx: 66, cy: 56, r: 1.5 }, { cx: 78, cy: 74, r: 1.8 },
              { cx: 60, cy: 48, r: 1.2 }, { cx: 68, cy: 68, r: 1 },
              { cx: 55, cy: 58, r: 1.5 }, { cx: 74, cy: 42, r: 1 },
              { cx: 62, cy: 72, r: 1.3 }, { cx: 85, cy: 50, r: 1.8 },
              { cx: 50, cy: 52, r: 1 }, { cx: 76, cy: 80, r: 1.5 },
            ].map((p, i) => (
              <circle key={i} cx={p.cx} cy={p.cy} r={p.r}
                fill={i % 3 === 0 ? '#0EA5E9' : '#8B5CF6'} opacity={0.2 + Math.random() * 0.35} />
            ))}
          </g>

          {/* Arrow: Memory Node → Intent Node */}
          <line id="pl-mem-to-intent" className="pl-hidden"
            x1="120" y1="112" x2="120" y2="265"
            stroke="#8B5CF6" strokeWidth="2" markerEnd="url(#pl-arr-p)" />

          {/* Intro text — visible frames 2-4, hidden from frame 5 */}
          <g id="pl-intro-text" className="pl-hidden">
            <text x="600" y="318" textAnchor="middle" fill="#F8FAFC" fontSize="23" fontWeight="600" fontFamily={F}>
              Today, Intent and Decisions are chaotic and wasteful
            </text>
            <text x="600" y="355" textAnchor="middle" fill="#0EA5E9" fontSize="30" fontWeight="600" fontFamily={F}>
              We are about to change it for the better
            </text>
          </g>

          {/* Intent signal scatter — static dots forming a cone to the left */}
          <g id="pl-intent-scatter" className="pl-hidden">
            {[
              { cx: -30, cy: 280, r: 3, c: '#0EA5E9' },
              { cx: -20, cy: 300, r: 2.5, c: '#8B5CF6' },
              { cx: -35, cy: 320, r: 2, c: '#0EA5E9' },
              { cx: -15, cy: 340, r: 3, c: '#0EA5E9' },
              { cx: -45, cy: 290, r: 1.8, c: '#8B5CF6' },
              { cx: -50, cy: 310, r: 2.5, c: '#0EA5E9' },
              { cx: -40, cy: 335, r: 1.5, c: '#8B5CF6' },
              { cx: -55, cy: 300, r: 2, c: '#0EA5E9' },
              { cx: -60, cy: 320, r: 1.5, c: '#8B5CF6' },
              { cx: -25, cy: 260, r: 1.8, c: '#0EA5E9' },
              { cx: -48, cy: 345, r: 1.2, c: '#0EA5E9' },
              { cx: -10, cy: 310, r: 2, c: '#8B5CF6' },
            ].map((p, i) => (
              <circle key={i} cx={p.cx} cy={p.cy} r={p.r} fill={p.c}
                opacity={0.2 + (i % 4) * 0.12} />
            ))}
            {/* Animated dots that fly into Intent Node */}
            {[0, 1, 2, 3, 4].map(i => (
              <circle key={`fly-${i}`} cx={-40 + i * 8} cy={285 + i * 12} r={2 + (i % 2)}
                fill={i % 2 === 0 ? '#0EA5E9' : '#8B5CF6'}
                className="pl-intent-fly"
                style={{ animationDelay: `${i * 1.4}s` }} />
            ))}
          </g>

          {/* Intent Node */}
          <g id="pl-intent-node" className="pl-hidden">
            {/* Outer glow */}
            <rect x="30" y="260" width="180" height="100" rx="12" ry="12"
              fill="none" stroke="#0EA5E9" strokeWidth="2" opacity="0.15" filter="url(#pl-glow)" />
            {/* Main box */}
            <rect id="pl-intent-rect" x="35" y="265" width="170" height="90" rx="8" ry="8"
              fill="rgba(18,28,48,0.92)" stroke="#0EA5E9" strokeWidth="2.5" />
            <text x="120" y="306" textAnchor="middle" fill="#F8FAFC" fontSize="16" fontWeight="700" fontFamily={F}>Intent Node</text>
            <text x="120" y="322" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily={F}>Ingestion &amp; Triage</text>
          </g>
          <text id="pl-intent-label" className="pl-hidden" x="120" y="375"
            textAnchor="middle" fill="#94A3B8" fontSize="9.5" fontFamily={F}>Intent Capture</text>

          {/* Evidence Sources group */}
          <text id="pl-ev-label-top" className="pl-hidden" x="120" y="395"
            textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily={F}>Evidence Sources</text>

          <g id="pl-src-sys" className="pl-hidden">
            <rect x="28" y="408" width="88" height="50" rx="6" ry="6"
              fill="rgba(18,28,48,0.85)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <text x="72" y="437" textAnchor="middle" fill="#94A3B8" fontSize="11" fontFamily={F}>Systems</text>
          </g>
          <g id="pl-src-docs" className="pl-hidden">
            <rect x="124" y="408" width="88" height="50" rx="6" ry="6"
              fill="rgba(18,28,48,0.85)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <text x="168" y="437" textAnchor="middle" fill="#94A3B8" fontSize="11" fontFamily={F}>Docs</text>
          </g>

          <text id="pl-ev-label-bot" className="pl-hidden" x="120" y="478"
            textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily={F}>Agentic Evidence</text>

          {/* Return lines: Evidence → Intent (vertical, emerald with arrow, animated) */}
          <line id="pl-return-sys" className="pl-hidden pl-ev-flow"
            x1="72" y1="408" x2="72" y2="355"
            stroke="#10B981" strokeWidth="1.5" strokeDasharray="5,3"
            markerEnd="url(#pl-arr-e)" />
          <line id="pl-return-docs" className="pl-hidden pl-ev-flow"
            x1="168" y1="408" x2="168" y2="355"
            stroke="#10B981" strokeWidth="1.5" strokeDasharray="5,3"
            markerEnd="url(#pl-arr-e)" style={{ animationDelay: '0.5s' }} />

          {/* ════════ Fan-out elbows from Intent Node to lane containers ════════ */}
          {/* Lane 1: right from Intent → turn up → right to container */}
          <path id="pl-split-1" className="pl-hidden"
            d={`M 205,310 H 238 Q 250,310 250,298 V ${L1Y + 12} Q 250,${L1Y} 262,${L1Y} H 270`}
            fill="none" stroke="#0EA5E9" strokeWidth="2" markerEnd="url(#pl-arr-c)" />
          {/* Lane 2: straight from Intent to container */}
          <path id="pl-split-2" className="pl-hidden"
            d="M 205,310 H 270"
            fill="none" stroke="#8B5CF6" strokeWidth="2" markerEnd="url(#pl-arr-p)" />
          {/* Lane 3: right from Intent → turn down → right to container */}
          <path id="pl-split-3" className="pl-hidden"
            d={`M 205,310 H 238 Q 250,310 250,322 V ${L3Y - 12} Q 250,${L3Y} 262,${L3Y} H 270`}
            fill="none" stroke="#F59E0B" strokeWidth="2" markerEnd="url(#pl-arr-a)" />

          {/* ════════ ZONE 3: DAG Lanes ════════ */}

          {/* "The path is discovered" label */}
          <text id="pl-path-label" className="pl-hidden" x="520" y="140"
            textAnchor="middle" fill="#94A3B8" fontSize="11" fontStyle="italic" fontFamily={F}>
            The path is discovered, not designed
          </text>

          {/* ════════ Outer DAG Engine container — dotted white ════════ */}
          <rect id="pl-dag-bg" className="pl-hidden" x="240" y={L1Y - 72} width="560" height={L3Y - L1Y + 144} rx="14" ry="14"
            fill="rgba(255,255,255,0.025)" stroke="none" />
          <text id="pl-dag-title" className="pl-hidden" x="520" y={L1Y - 80}
            textAnchor="middle" fill="#F8FAFC" fontSize="14" fontWeight="700" fontFamily={F}>
            Clarioo Decision Path Composition Engine (DAG)
          </text>

          {/* Lane container boxes — opaque navy fill, not transparent */}
          <rect id="pl-lane-bg-1" className="pl-hidden" x="270" y={L1Y - 42} width="500" height="84" rx="8" ry="8"
            fill="#0F1A2E" stroke="rgba(14,165,233,0.25)" strokeWidth="1.5" />
          <rect id="pl-lane-bg-2" className="pl-hidden" x="270" y={L2Y - 42} width="500" height="84" rx="8" ry="8"
            fill="#0F1A2E" stroke="rgba(139,92,246,0.25)" strokeWidth="1.5" />
          <rect id="pl-lane-bg-3" className="pl-hidden" x="270" y={L3Y - 42} width="500" height="84" rx="8" ry="8"
            fill="#0F1A2E" stroke="rgba(245,158,11,0.25)" strokeWidth="1.5" />

          {/* Lane labels — inside containers, left side */}
          <g id="pl-lane-lbl-1" className="pl-hidden">
            <text x="285" y={L1Y - 4} fill="#0EA5E9" fontSize="12" fontWeight="700" fontFamily={F}>Legal</text>
            <text x="285" y={L1Y + 10} fill="#0EA5E9" fontSize="12" fontWeight="700" fontFamily={F}>Review</text>
          </g>
          <g id="pl-lane-lbl-2" className="pl-hidden">
            <text x="280" y={L2Y - 4} fill="#8B5CF6" fontSize="12" fontWeight="700" fontFamily={F}>Product</text>
            <text x="280" y={L2Y + 10} fill="#8B5CF6" fontSize="12" fontWeight="700" fontFamily={F}>Analysis</text>
          </g>
          <g id="pl-lane-lbl-3" className="pl-hidden">
            <text x="285" y={L3Y - 4} fill="#F59E0B" fontSize="12" fontWeight="700" fontFamily={F}>Ops</text>
            <text x="285" y={L3Y + 10} fill="#F59E0B" fontSize="12" fontWeight="700" fontFamily={F}>Assessment</text>
          </g>

          {/* ── LANE 1: Legal Review (cyan) ── */}
          <line id="pl-l1e12" className="pl-hidden"
            x1={BX1 + BW} y1={L1Y} x2={BX2} y2={L1Y}
            stroke="#64748B" strokeWidth="2" markerEnd="url(#pl-arr-g)" />
          <line id="pl-l1e2g" className="pl-hidden"
            x1={BX2 + BW} y1={L1Y} x2={BX3} y2={L1Y}
            stroke="#64748B" strokeWidth="1" strokeDasharray="3,4" markerEnd="url(#pl-arr-g)" />

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
          {/* Lane 1 mini-gate (hexagonal, same height as blocks) */}
          <g id="pl-l1-gate" className="pl-hidden">
            <polygon
              points={`${BX3},${L1Y} ${BX3 + 18},${L1Y - BH / 2} ${BX3 + BW - 18},${L1Y - BH / 2} ${BX3 + BW},${L1Y} ${BX3 + BW - 18},${L1Y + BH / 2} ${BX3 + 18},${L1Y + BH / 2}`}
              fill="rgba(14,165,233,0.06)" stroke="#0EA5E9" strokeWidth="1.5" />
            <text x={BX3 + BW / 2} y={L1Y - 10} textAnchor="middle" fill="#F8FAFC" fontSize="10" fontWeight="600" fontFamily={F}>Human</text>
            <text x={BX3 + BW / 2} y={L1Y + 2} textAnchor="middle" fill="#F8FAFC" fontSize="10" fontWeight="600" fontFamily={F}>Approval Gate</text>
            <text x={BX3 + BW / 2} y={L1Y + 15} textAnchor="middle" fill="#F59E0B" fontSize="8.5" fontWeight="700" fontFamily={F}>Pending</text>
          </g>

          {/* Ambient edge dot */}
          <circle id="pl-edot-l1" className="pl-hidden" cx={BX1 + BW} cy={L1Y} r="2" fill="#0EA5E9" opacity="0.6" />

          {/* ── LANE 2: Product Analysis (purple, disruption) ── */}
          <line id="pl-l2e12" className="pl-hidden"
            x1={BX1 + BW} y1={L2Y} x2={BX2} y2={L2Y}
            stroke="#64748B" strokeWidth="2" markerEnd="url(#pl-arr-g)" />

          <g id="pl-l2b1" className="pl-hidden">
            <rect x={BX1} y={L2Y - BH / 2} width={BW} height={BH} rx={BR} ry={BR}
              fill="rgba(255,255,255,0.05)" stroke="#8B5CF6" strokeWidth="1.5" />
            <text x={BX1 + BW / 2} y={L2Y - 5} textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily={F}>Contradiction</text>
            <text x={BX1 + BW / 2} y={L2Y + 9} textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily={F}>Detection</text>
          </g>
          <g id="pl-l2b2" className="pl-hidden">
            {/* Block border */}
            <rect x={BX2} y={L2Y - BH / 2} width={BW} height={BH} rx={BR} ry={BR}
              fill="rgba(255,255,255,0.05)" stroke="#8B5CF6" strokeWidth="1.5" />
            {/* Dark overlay wash */}
            <rect x={BX2} y={L2Y - BH / 2} width={BW} height={BH} rx={BR} ry={BR}
              fill="rgba(11,18,33,0.65)" stroke="none" />
            {/* Faded text */}
            <text x={BX2 + BW / 2} y={L2Y - 5} textAnchor="middle" fill="#F8FAFC" fontSize="11" opacity="0.4" fontFamily={F}>Scope</text>
            <text x={BX2 + BW / 2} y={L2Y + 9} textAnchor="middle" fill="#F8FAFC" fontSize="11" opacity="0.4" fontFamily={F}>Assessment</text>
            {/* Red strikethrough — corner to corner */}
            <line x1={BX2 + 2} y1={L2Y - BH / 2 + 2} x2={BX2 + BW - 2} y2={L2Y + BH / 2 - 2}
              stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
          </g>

          {/* "New evidence" label */}
          <text id="pl-l2-newev" className="pl-hidden" x={BX2 + BW / 2} y={L2Y - BH / 2 - 6}
            textAnchor="middle" fill="#F59E0B" fontSize="8.5" fontWeight="600" fontFamily={F}>⚡ New evidence</text>

          {/* Edge B2→B3 (solid gray, with arrow) */}
          <line className="pl-hidden"
            x1={BX2 + BW} y1={L2Y} x2={BX3} y2={L2Y}
            stroke="#64748B" strokeWidth="2" markerEnd="url(#pl-arr-g)" />

          {/* Disruption dot removed */}

          {/* Bypass edge removed — direct B2→B3 edge handles this */}

          <g id="pl-l2b3" className="pl-hidden" opacity="0.7">
            <rect x={BX3} y={L2Y - BH / 2} width={BW} height={BH} rx={BR} ry={BR}
              fill="rgba(255,255,255,0.03)" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="4,3" />
            <text x={BX3 + BW / 2} y={L2Y - 5} textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily={F}>Owner</text>
            <text x={BX3 + BW / 2} y={L2Y + 9} textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily={F}>Derivation</text>
          </g>

          {/* ── LANE 3: Ops Assessment (amber) ── */}
          {/* Cross-lane elbow: Policy Mapping (L1 B2 bottom) → Owner Derivation (L2 B3 top), dotted */}
          <path id="pl-cross-l1-l2" className="pl-hidden"
            d={`M ${BX2 + BW / 2},${L1Y + BH / 2} V ${(L1Y + L2Y) / 2 - 12} Q ${BX2 + BW / 2},${(L1Y + L2Y) / 2} ${BX2 + BW / 2 + 12},${(L1Y + L2Y) / 2} H ${BX3 + BW / 2 - 12} Q ${BX3 + BW / 2},${(L1Y + L2Y) / 2} ${BX3 + BW / 2},${(L1Y + L2Y) / 2 + 12} V ${L2Y - BH / 2}`}
            fill="none" stroke="#64748B" strokeWidth="1.5" strokeDasharray="5,4"
            markerEnd="url(#pl-arr-g)" />

          {/* Cross-lane elbow: Owner Derivation (L2 B3 bottom) → Impact Analysis (L3 B1 top) */}
          <path id="pl-cross-l2-l3" className="pl-hidden"
            d={`M ${BX3 + BW / 2},${L2Y + BH / 2} V ${L2Y + BH / 2 + 25} Q ${BX3 + BW / 2},${L2Y + BH / 2 + 37} ${BX3 + BW / 2 - 12},${L2Y + BH / 2 + 37} H ${BX2 + BW / 2 + 12} Q ${BX2 + BW / 2},${L2Y + BH / 2 + 37} ${BX2 + BW / 2},${L2Y + BH / 2 + 49} V ${L3Y - BH / 2}`}
            fill="none" stroke="#64748B" strokeWidth="1.5" markerEnd="url(#pl-arr-g)" />

          {/* Edge: Impact Analysis → Decision Delta (position 2 → position 3) */}
          <line id="pl-l3e12" className="pl-hidden"
            x1={BX2 + BW} y1={L3Y} x2={BX3} y2={L3Y}
            stroke="#64748B" strokeWidth="2" markerEnd="url(#pl-arr-g)" />

          {/* Impact Analysis at position 2 (BX2) */}
          <g id="pl-l3b1" className="pl-hidden">
            <rect x={BX2} y={L3Y - BH / 2} width={BW} height={BH} rx={BR} ry={BR}
              fill="rgba(255,255,255,0.05)" stroke="#F59E0B" strokeWidth="1.5" />
            <text x={BX2 + BW / 2} y={L3Y - 5} textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily={F}>Impact</text>
            <text x={BX2 + BW / 2} y={L3Y + 9} textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily={F}>Analysis</text>
          </g>
          {/* Decision Delta at position 3 (BX3) */}
          <g id="pl-l3b2" className="pl-hidden" opacity="0.7">
            <rect x={BX3} y={L3Y - BH / 2} width={BW} height={BH} rx={BR} ry={BR}
              fill="rgba(255,255,255,0.03)" stroke="#F59E0B" strokeWidth="1" strokeDasharray="4,3" />
            <text x={BX3 + BW / 2} y={L3Y - 5} textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily={F}>Decision</text>
            <text x={BX3 + BW / 2} y={L3Y + 9} textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily={F}>Delta</text>
          </g>

          {/* ════════ Convergence lines → Gate — from container right edges ════════ */}
          {/* Lane 1 → Gate: from container right (770) → turn down → into gate */}
          <path id="pl-conv-1" className="pl-hidden"
            d={`M 770,${L1Y} H 783 Q 795,${L1Y} 795,${L1Y + 12} V ${L2Y - 12} Q 795,${L2Y} 807,${L2Y} H ${GX - 45}`}
            fill="none" stroke="#0EA5E9" strokeWidth="1.5" />
          {/* Lane 2 → Gate: horizontal from container right */}
          <path id="pl-conv-2" className="pl-hidden"
            d={`M 770,${L2Y} H ${GX - 45}`}
            fill="none" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="6,4" />
          {/* Lane 3 → Gate: from container right (770) → turn up → into gate */}
          <path id="pl-conv-3" className="pl-hidden"
            d={`M 770,${L3Y} H 783 Q 795,${L3Y} 795,${L3Y - 12} V ${L2Y + 12} Q 795,${L2Y} 807,${L2Y} H ${GX - 45}`}
            fill="none" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="6,4" />

          {/* ════════ GATE (hexagon) — shown in approved state ════════ */}
          <g id="pl-gate" className="pl-hidden">
            <polygon id="pl-gate-poly"
              points={`${GX - 45},${L2Y} ${GX - 22},${L2Y - 35} ${GX + 22},${L2Y - 35} ${GX + 45},${L2Y} ${GX + 22},${L2Y + 35} ${GX - 22},${L2Y + 35}`}
              fill="rgba(16,185,129,0.08)" stroke="#10B981" strokeWidth="1.5" />
            <text x={GX} y={L2Y - 8} textAnchor="middle" fill="#F8FAFC" fontSize="10" fontWeight="600" fontFamily={F}>Human</text>
            <text x={GX} y={L2Y + 5} textAnchor="middle" fill="#F8FAFC" fontSize="10" fontWeight="600" fontFamily={F}>Approval Gate</text>
            <text id="pl-gate-status" x={GX} y={L2Y + 20} textAnchor="middle"
              fill="#10B981" fontSize="8.5" fontWeight="700" fontFamily={F}>Approved</text>
          </g>

          {/* gate pulse circle removed */}
          <text id="pl-gate-check" className="pl-hidden" x={GX} y={L2Y - 40}
            textAnchor="middle" fill="#10B981" fontSize="14">✓</text>

          <g id="pl-gate-badges" className="pl-hidden">
            <text x={GX} y={L2Y + 56} textAnchor="middle" fill="#F59E0B" fontSize="8" fontWeight="700" fontFamily={F}>No bypass mode</text>
          </g>

          {/* Gate → Decision Record */}
          <line id="pl-gate-to-dr" className="pl-hidden"
            x1={GX + 45} y1={L2Y} x2={DRX} y2={L2Y}
            stroke="#10B981" strokeWidth="2.5"
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

          {/* Provenance timeline with tick marks — centered under flow */}
          <g id="pl-timeline" className="pl-hidden">
            {/* Main horizontal line — centered at x=520 */}
            <line x1="30" y1="570" x2="1010" y2="570"
              stroke="rgba(14,165,233,0.35)" strokeWidth="1.5" />
            {/* Tick marks — endcaps taller, inner ticks shorter */}
            {[30, 128, 226, 324, 422, 520, 618, 716, 814, 912, 1010].map((tx, i) => {
              const isEnd = i === 0 || i === 10
              return <line key={tx} x1={tx} y1={isEnd ? 562 : 564} x2={tx} y2={isEnd ? 578 : 576}
                stroke="rgba(14,165,233,0.35)" strokeWidth="1.5" />
            })}
          </g>
          <text id="pl-timeline-label" className="pl-hidden" x="520" y="594"
            textAnchor="middle" fill="#94A3B8" fontSize="11" fontFamily={F}>End-to-End Decision Provenance</text>
          <text id="pl-timeline-lock" className="pl-hidden" x="1025" y="575"
            fill="#475569" fontSize="13">🔒</text>

        </svg>
      </div>

      {/* ═══ FRAME COUNTER ═══ */}
      <div className="pl-frame-bar">
        <button className="pl-frame-btn" onClick={rewind} title="Rewind">⏮</button>
        <button className="pl-frame-btn" onClick={goPrev} title="Previous">◀</button>
        <button className="pl-frame-btn" onClick={togglePlay} title="Play / Pause (Space)">
          {playing ? '⏸' : '▶'}
        </button>
        <button className="pl-frame-btn" onClick={goNext} title="Next">▶</button>
        <span className="pl-frame-label">
          {frame < 0 ? '— / ' + totalFrames : (frame + 1) + ' / ' + totalFrames}
          {frame >= 0 && FRAMES[frame] ? ` — ${FRAMES[frame].name}` : ''}
        </span>
      </div>
    </div>
  )
}
