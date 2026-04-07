import React from 'react'

export default function SlidePositioning() {
  return (
    <div className="pdf-slide" style={{
      padding: '2.25rem 3.5rem 1.5rem',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      overflow: 'hidden',
    }}>

      {/* ── Title Block ── */}
      <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
        <div style={{
          fontSize: '0.85rem',
          fontWeight: 600,
          letterSpacing: '0.35rem',
          color: 'var(--text-muted)',
          textTransform: 'uppercase',
          marginBottom: '0.375rem',
        }}>
          Market Landscape
        </div>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 800,
          color: 'var(--text-primary)',
          lineHeight: 1.15,
        }}>
          Clarioo is in the emerging category of <span className="text-cyan">decision intelligence</span>.<br />
          It is not one of execution or assistance tools that crowd the market.
        </h1>
      </div>

      {/* ── Matrix + Axes ── */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        minHeight: 0,
        alignItems: 'center',
      }}>
        {/* Shared 80% wrapper — grid + X-axis align to this */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          minHeight: 0,
          width: '60%',
        }}>
        {/* Row: Y-axis + 16:9 Grid */}
        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          minHeight: 0,
        }}>
          {/* Y-Axis Label */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '2.5rem',
            flexShrink: 0,
            alignSelf: 'stretch',
          }}>
            <div style={{
              transform: 'rotate(-90deg)',
              whiteSpace: 'nowrap',
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.625rem',
            }}>
              <span><strong style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.9rem' }}>Breadth</strong> (High-volume tasks)</span>
              <span><strong style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.9rem' }}>Depth</strong> (High-stakes decisions)</span>
            </div>
          </div>

          {/* 16:9 Grid — always maintains aspect ratio */}
          <div style={{
            aspectRatio: '16/9',
            width: '100%',
            maxHeight: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '1fr 1fr',
            position: 'relative',
          }}>
            {/* Left border */}
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '1px', background: 'rgba(255,255,255,0.1)', pointerEvents: 'none' }} />
            {/* Vertical center line */}
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', width: '1px', background: 'rgba(255,255,255,0.1)', pointerEvents: 'none' }} />
            {/* Horizontal center line */}
            <div style={{ position: 'absolute', left: 0, right: 0, top: '50%', height: '1px', background: 'rgba(255,255,255,0.1)', pointerEvents: 'none' }} />

            {/* ─── Q1 Top-Left: Governed Execution ─── */}
            <div className="pos-quadrant" style={{
              background: 'var(--bg-deep-navy)',
              overflow: 'hidden',
              padding: '2cqi',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <div style={{
                fontSize: '3cqi',
                color: 'var(--text-secondary)',
                marginBottom: '2.5cqi',
                fontWeight: 600,
              }}>Governed Execution</div>
              <div style={{ display: 'flex', gap: '2cqi', flexWrap: 'wrap' }}>
                <div style={{
                  background: 'rgba(255,255,255,0.1)',
                  padding: '1.5cqi 3cqi',
                  borderRadius: '1.5cqi',
                  fontSize: '3cqi',
                  color: 'var(--text-secondary)',
                  textAlign: 'center',
                  flex: 1,
                }}>ServiceNow</div>
                <div style={{
                  background: 'rgba(255,255,255,0.1)',
                  padding: '1.5cqi 3cqi',
                  borderRadius: '1.5cqi',
                  fontSize: '3cqi',
                  color: 'var(--text-secondary)',
                  textAlign: 'center',
                  flex: 1,
                }}>Moveworks</div>
              </div>
            </div>

            {/* ─── Q2 Top-Right: Decision Intelligence ─── */}
            <div className="pos-quadrant" style={{
              background: 'var(--bg-deep-navy)',
              overflow: 'hidden',
              padding: '1.5cqi 2cqi',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <div style={{
                fontSize: '2.2cqi',
                color: 'var(--text-secondary)',
                marginBottom: '1cqi',
                fontWeight: 400,
                fontStyle: 'italic',
              }}>
                Emerging Category: Decision Intelligence
              </div>

              {/* Container with accent border */}
              <div style={{
                border: '1px solid rgba(139, 92, 246, 0.3)',
                borderRadius: '2cqi',
                padding: '2cqi 2.5cqi',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
              }}>
                {/* EMERGING ZONE badge — top left */}
                <div style={{
                  fontSize: '1.8cqi',
                  fontWeight: 700,
                  letterSpacing: '0.4cqi',
                  color: 'var(--accent-cyan)',
                  textTransform: 'uppercase',
                  marginBottom: '1.5cqi',
                }}>
                  Emerging Zone
                </div>

                {/* Main content: left column (Clarioo + Cloverpop) + right column (What Clarioo Brings) */}
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '2cqi',
                  flex: 1,
                  justifyContent: 'center',
                  paddingTop: '2cqi',
                }}>
                  {/* Left: CLARIOO above Cloverpop, centered vertically */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.5cqi',
                  }}>
                    {/* CLARIOO Hero */}
                    <div style={{
                      background: 'linear-gradient(135deg, #1e3a8a, #6d28d9)',
                      padding: '2.5cqi 4cqi',
                      borderRadius: '2cqi',
                      textAlign: 'center',
                      boxShadow: '0 0 4cqi rgba(124,58,237,0.4), 0 0 8cqi rgba(14,165,233,0.2)',
                    }}>
                      <div style={{
                        fontSize: '4cqi',
                        fontWeight: 900,
                        color: '#fff',
                        letterSpacing: '0.4cqi',
                        marginBottom: '0.3cqi',
                      }}>CLARIOO</div>
                      <div style={{
                        fontSize: '2cqi',
                        color: 'rgba(255,255,255,0.85)',
                        fontWeight: 500,
                      }}>Decision Intelligence System</div>
                    </div>

                    {/* Cloverpop — same style as other chart tiles */}
                    <div style={{
                      background: 'rgba(255,255,255,0.1)',
                      padding: '1.5cqi 4cqi',
                      borderRadius: '1.5cqi',
                      fontSize: '2.5cqi',
                      color: 'var(--text-secondary)',
                      textAlign: 'center',
                      whiteSpace: 'nowrap',
                    }}>Cloverpop</div>
                  </div>

                  {/* Right: What Clarioo Brings — same width as CLARIOO, 1.5× height */}
                  <div style={{
                    background: 'rgba(255,255,255,0.06)',
                    borderRadius: '1.5cqi',
                    padding: '2.5cqi 2.5cqi',
                    fontSize: '1.8cqi',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                    alignSelf: 'stretch',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}>
                    <div style={{
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '0.5cqi',
                      fontSize: '2.2cqi',
                    }}>What Clarioo Brings</div>
                    <div style={{ fontWeight: 700 }}>No existing system provides:</div>
                    <div>• Cross-decision dependency graphs</div>
                    <div>• Progressive path composition</div>
                  </div>
                </div>
              </div>
            </div>

            {/* ─── Q3 Bottom-Left: Automation / Workflow ─── */}
            <div className="pos-quadrant" style={{
              background: 'var(--bg-deep-navy)',
              overflow: 'hidden',
              padding: '2cqi',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <div style={{
                fontSize: '3cqi',
                color: 'var(--text-secondary)',
                marginBottom: '2.5cqi',
                fontWeight: 600,
              }}>Automation / Workflow</div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '2cqi',
              }}>
                {['UiPath', 'Kore.ai', 'Beam', 'TrueFoundry'].map(name => (
                  <div key={name} style={{
                    background: 'rgba(255,255,255,0.1)',
                    padding: '1.5cqi 3cqi',
                    borderRadius: '1.5cqi',
                    fontSize: '3cqi',
                    color: 'var(--text-secondary)',
                    textAlign: 'center',
                  }}>{name}</div>
                ))}
              </div>
            </div>

            {/* ─── Q4 Bottom-Right: Copilots ─── */}
            <div className="pos-quadrant" style={{
              background: 'var(--bg-deep-navy)',
              overflow: 'hidden',
              padding: '2cqi',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <div style={{
                fontSize: '3cqi',
                color: 'var(--text-secondary)',
                marginBottom: '2.5cqi',
                fontWeight: 600,
              }}>Copilots</div>
              {/* Row 1 */}
              <div style={{ display: 'flex', gap: '2cqi', alignItems: 'center', marginBottom: '2cqi' }}>
                {['ChatGPT', 'Copilot'].map(name => (
                  <div key={name} style={{
                    background: 'rgba(255,255,255,0.1)',
                    padding: '1.5cqi 3cqi',
                    borderRadius: '1.5cqi',
                    fontSize: '3cqi',
                    color: 'var(--text-secondary)',
                    textAlign: 'center',
                    flex: 1,
                  }}>{name}</div>
                ))}
                <div style={{
                  fontSize: '1.8cqi',
                  color: 'var(--text-muted)',
                  fontStyle: 'italic',
                  lineHeight: 1.3,
                }}>crowded<br />space</div>
              </div>
              {/* Row 2 */}
              <div style={{ display: 'flex', gap: '2cqi' }}>
                {['Gemini', 'Glean', 'Sierra'].map(name => (
                  <div key={name} style={{
                    background: 'rgba(255,255,255,0.1)',
                    padding: '1.5cqi 3cqi',
                    borderRadius: '1.5cqi',
                    fontSize: '3cqi',
                    color: 'var(--text-secondary)',
                    textAlign: 'center',
                    flex: 1,
                  }}>{name}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── X-Axis — aligned under the grid, offset by Y-axis width ── */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.875rem',
          marginLeft: '2.5rem',
          marginTop: '0.5rem',
        }}>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 700 }}>
            Process Execution
          </span>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
            <div style={{ flex: 1, height: '1px', background: 'var(--text-muted)', opacity: 0.5 }} />
            <div style={{
              width: 0, height: 0,
              borderTop: '0.3rem solid transparent',
              borderBottom: '0.3rem solid transparent',
              borderLeft: '0.5rem solid var(--text-muted)',
              opacity: 0.5,
            }} />
          </div>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 700 }}>
            Decision Deliberation
          </span>
        </div>
        </div>{/* end shared 80% wrapper */}

        {/* ── Bottom Insight ── */}
        <div style={{
          textAlign: 'center',
          fontSize: '1.1rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.55,
          marginTop: '0.75rem',
        }}>
          All existing systems either execute predefined processes or assist fragmented decisions.
          <br />
          <strong style={{ color: 'var(--text-primary)', fontWeight: 700 }}>
            None structure how organizations deliberate complex decisions over time.
          </strong>
        </div>
      </div>

      {/* Decorative sparkle */}
      <svg style={{
        position: 'absolute', bottom: '1.5rem', right: '2rem',
        width: '2rem', height: '2rem', opacity: 0.25,
      }} viewBox="0 0 24 24" fill="none">
        <path d="M12 0 C12 0, 13.5 10, 24 12 C13.5 14, 12 24, 12 24 C12 24, 10.5 14, 0 12 C10.5 10, 12 0, 12 0Z" fill="var(--text-secondary)" />
      </svg>
    </div>
  )
}
