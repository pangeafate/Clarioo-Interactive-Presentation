import React from 'react'
import { Lightbulb, Scissors, Shield } from 'lucide-react'

const WHY_NOW_CSS = `
@media (max-width: 768px) {
  .wn-root { padding: 2rem 1.25rem !important; overflow-y: auto !important; }
  .wn-title { font-size: 2rem !important; margin-bottom: 1.5rem !important; }
  .wn-title-wrap { margin-bottom: 1.5rem !important; }
  .wn-pillars { flex-direction: column !important; gap: 1.25rem !important; }
  .wn-container { gap: 1.25rem !important; }
  .wn-summary { flex-direction: column !important; gap: 0.75rem !important; text-align: center; }
}
`

export default function Slide12WhyNow() {
  return (
    <div className="pdf-slide wn-root" style={{ padding: '6rem' }}>
      <style>{WHY_NOW_CSS}</style>

      <div className="wn-title-wrap" style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h2 className="text-white wn-title" style={{ fontSize: '3rem', fontWeight: 800 }}>
          Why Now
        </h2>
      </div>

      {/* Single parent container — both sections fill its width */}
      <div className="wn-container" style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>

        {/* Top: three pillars */}
        <div className="wn-pillars" style={{ display: 'flex', gap: '3rem' }}>

          {/* Pillar 1 */}
          <div className="glass-card" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ marginBottom: '1.5rem', filter: 'drop-shadow(0 0 10px rgba(14,165,233,0.5))' }}><Lightbulb size={48} className="text-cyan" /></div>
            <h3 className="text-cyan" style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1.5rem' }}>
              Dark Processes Become Visible
            </h3>
            <ul className="text-secondary" style={{ listStyleType: 'disc', padding: 0, paddingLeft: '1.5rem', margin: 0, textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li>Copilots provide data (transcripts, relations, etc.)</li>
              <li>"Dark processes" that Celonis and the likes tried to capture via log analysis are now observable through natural human-AI interaction</li>
            </ul>
          </div>

          {/* Pillar 2 */}
          <div className="glass-card" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ marginBottom: '1.5rem', filter: 'drop-shadow(0 0 10px rgba(16,185,129,0.5))' }}><Scissors size={48} className="text-emerald" /></div>
            <h3 className="text-emerald" style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1.5rem' }}>
              Build vs Buy is Shifting
            </h3>
             <ul className="text-secondary" style={{ listStyleType: 'disc', padding: 0, paddingLeft: '1.5rem', margin: 0, textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li>AI-assisted dev changes the cost equation</li>
              <li>Real cost = engineering + production-readiness + maintenance + change management</li>
              <li>Companies need a rational decision framework & decision memory</li>
            </ul>
          </div>

          {/* Pillar 3 */}
          <div className="glass-card" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1.5rem', filter: 'drop-shadow(0 0 10px rgba(139,92,246,0.5))' }}><Shield size={48} className="text-purple" /></div>
            <h3 className="text-purple" style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1.5rem' }}>
              New Systems of Record & Agentic Harness
            </h3>
             <ul className="text-secondary" style={{ listStyleType: 'disc', padding: 0, paddingLeft: '1.5rem', margin: 0, textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li>Graph DB + Vector DB = structured relationships + semantic context</li>
              <li>Clarioo can compete on harness & data without tuning models</li>
              <li>Proactive role of the Agent (like human participant) can excavate x100 more relevant decision insights and missing links vs regular data processing</li>
            </ul>
          </div>

        </div>

        {/* Bottom: summary box — fills same parent width */}
        <div className="glass-card wn-summary" style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, alignItems: 'center', fontSize: '1rem', gap: '2rem' }}>
          <div className="text-white">Copilots reveal processes <span className="text-cyan">→ observable decision flows</span></div>
          <div className="text-white">AI changes build economics <span className="text-emerald">→ need for rational frameworks</span></div>
          <div className="text-white">Graph + Vector DB <span className="text-purple">→ most defensible AI layer</span></div>
        </div>

      </div>

    </div>
  )
}
