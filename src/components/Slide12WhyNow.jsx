import React from 'react'

export default function Slide12WhyNow() {
  return (
    <div className="pdf-slide" style={{ padding: '6rem' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--pdf-navy)' }}>
          Why Now
        </h2>
      </div>

      <div style={{ display: 'flex', gap: '3rem', margin: '0 auto', maxWidth: '1100px' }}>
        
        {/* Pillar 1 */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>💡</div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--text-dark)' }}>
            Dark Processes Become Visible
          </h3>
          <ul style={{ listStyleType: 'disc', padding: 0, paddingLeft: '1.5rem', margin: 0, textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-muted-dark)' }}>
            <li>Copilots provide data (transcripts, relations, etc.)</li>
            <li>“Dark processes” that Celonis and the likes tried to capture via log analysis are now observable through natural human-AI interaction</li>
          </ul>
        </div>

        {/* Pillar 2 */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>✂️</div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--text-dark)' }}>
            Build vs Buy is Shifting
          </h3>
           <ul style={{ listStyleType: 'disc', padding: 0, paddingLeft: '1.5rem', margin: 0, textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-muted-dark)' }}>
            <li>AI-assisted dev changes the cost equation</li>
            <li>Real cost = engineering + production-readiness + maintenance + change management</li>
            <li>Companies need a rational decision framework & decision memory</li>
          </ul>
        </div>

        {/* Pillar 3 */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🛡️</div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--text-dark)' }}>
            New Systems of Record & Agentic Harness
          </h3>
           <ul style={{ listStyleType: 'disc', padding: 0, paddingLeft: '1.5rem', margin: 0, textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-muted-dark)' }}>
            <li>Graph DB + Vector DB = structured relationships + semantic context</li>
            <li>Clarioo can compete on harness & data without tuning models</li>
            <li>Proactive role of the Agent (like human participant) can excavate x100 more relevant decision insights and missing links vs regular data processing</li>
          </ul>
        </div>

      </div>

      <div style={{ marginTop: '5rem', display: 'flex', background: '#f8fafc', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0', justifyContent: 'space-between', fontWeight: 700, color: 'var(--pdf-blue)' }}>
        <div>Copilots reveal processes <span style={{ color: 'var(--text-muted-light)'}}>→ observable decision flows</span></div>
        <div>AI changes build economics <span style={{ color: 'var(--text-muted-light)'}}>→ need for rational frameworks</span></div>
        <div>Graph + Vector DB <span style={{ color: 'var(--text-muted-light)'}}>→ most defensible AI layer</span></div>
      </div>

    </div>
  )
}
