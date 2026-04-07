import React from 'react'

export default function SlidePositioning() {
  const tileStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    padding: '0.5rem 1.125rem',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    color: 'var(--text-secondary)',
    textAlign: 'center',
    whiteSpace: 'nowrap',
  }

  const quadrantHeaderStyle = {
    fontSize: '0.95rem',
    color: 'var(--text-secondary)',
    marginBottom: '0.75rem',
    fontWeight: 600,
  }

  return (
    <div className="pdf-slide" style={{
      padding: '2.25rem 3.5rem 1.5rem',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      overflow: 'hidden',
    }}>

      {/* ── Title Block ── */}
      <div style={{ marginBottom: '1.25rem', textAlign: 'center' }}>
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
          The market is organized around execution<br />
          and assistance — not decision-making.
        </h1>
      </div>

      {/* ── Matrix Area ── */}
      <div style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 0,
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxWidth: '70rem',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'stretch',
          }}>

          {/* Y-Axis Label */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '2.5rem',
            flexShrink: 0,
          }}>
            <div style={{
              transform: 'rotate(-90deg)',
              whiteSpace: 'nowrap',
              fontSize: '0.8rem',
              color: 'var(--text-secondary)',
              letterSpacing: '0.03rem',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.625rem',
            }}>
              <span><strong style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.9rem' }}>Breadth</strong> (High-volume tasks)</span>
              <span><strong style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.9rem' }}>Depth</strong> (High-stakes decisions)</span>
            </div>
          </div>

          {/* Matrix Grid */}
          <div style={{
            flex: 1,
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr',
            gridTemplateRows: 'auto auto',
            position: 'relative',
            borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
          }}>

            {/* Crosshair – vertical */}
            <div style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '40%',
              width: '1px',
              background: 'rgba(255, 255, 255, 0.1)',
              pointerEvents: 'none',
            }} />
            {/* Crosshair – horizontal */}
            <div style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: '53.5%',
              height: '1px',
              background: 'rgba(255, 255, 255, 0.1)',
              pointerEvents: 'none',
            }} />

            {/* ─── Top-Left: Governed Execution ─── */}
            <div style={{ padding: '1.25rem 1.5rem', zIndex: 1 }}>
              <div style={quadrantHeaderStyle}>Governed Execution</div>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <div style={tileStyle}>ServiceNow</div>
                <div style={tileStyle}>Moveworks</div>
              </div>
            </div>

            {/* ─── Top-Right: Decision Intelligence Zone ─── */}
            <div style={{
              padding: '0 1.25rem 0.875rem',
              zIndex: 1,
              display: 'flex',
              flexDirection: 'column',
            }}>
              {/* Emerging Category label */}
              <div style={{
                fontSize: '0.8rem',
                color: 'var(--text-secondary)',
                marginBottom: '0.25rem',
                marginTop: '0.5rem',
                fontWeight: 400,
                fontStyle: 'italic',
              }}>
                Emerging Category: Decision Intelligence
              </div>

              {/* Container with accent border */}
              <div style={{
                border: '1px solid rgba(139, 92, 246, 0.3)',
                borderRadius: '0.75rem',
                padding: '0.75rem 1rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
                {/* EMERGING ZONE badge */}
                <div style={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.15rem',
                  color: 'var(--accent-cyan)',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem',
                }}>
                  Emerging Zone
                </div>

                {/* Content row: Cloverpop + CLARIOO + What Clarioo Brings */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}>
                  {/* Cloverpop */}
                  <div style={{ ...tileStyle, opacity: 0.5, flexShrink: 0 }}>
                    Cloverpop
                  </div>

                  {/* CLARIOO Hero Tile */}
                  <div style={{
                    background: 'linear-gradient(135deg, #1e3a8a, #6d28d9)',
                    padding: '0.875rem 1.75rem',
                    borderRadius: '0.75rem',
                    textAlign: 'center',
                    boxShadow: '0 0 1.75rem rgba(124, 58, 237, 0.4), 0 0 3.5rem rgba(14, 165, 233, 0.2)',
                    flexShrink: 0,
                  }}>
                    <div style={{
                      fontSize: '1.35rem',
                      fontWeight: 900,
                      color: '#fff',
                      letterSpacing: '0.15rem',
                      marginBottom: '0.125rem',
                    }}>CLARIOO</div>
                    <div style={{
                      fontSize: '0.7rem',
                      color: 'rgba(255, 255, 255, 0.85)',
                      fontWeight: 500,
                    }}>Decision Intelligence System</div>
                  </div>

                  {/* What Clarioo Brings callout */}
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.06)',
                    borderRadius: '0.5rem',
                    padding: '0.5rem 0.75rem',
                    fontSize: '0.65rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                    minWidth: 0,
                  }}>
                    <div style={{
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '0.2rem',
                      fontSize: '0.75rem',
                    }}>What Clarioo Brings</div>
                    <div style={{ fontWeight: 700 }}>No existing system provides:</div>
                    <div>• Cross-decision dependency graphs</div>
                    <div>• Progressive path composition</div>
                  </div>
                </div>
              </div>
            </div>

            {/* ─── Bottom-Left: Automation / Workflow ─── */}
            <div style={{ padding: '1.25rem 1.5rem', zIndex: 1 }}>
              <div style={quadrantHeaderStyle}>Automation / Workflow</div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.5rem',
                maxWidth: '14rem',
              }}>
                <div style={tileStyle}>UiPath</div>
                <div style={tileStyle}>Kore.ai</div>
                <div style={tileStyle}>Beam</div>
                <div style={tileStyle}>TrueFoundry</div>
              </div>
            </div>

            {/* ─── Bottom-Right: Copilots ─── */}
            <div style={{ padding: '1.25rem 1.25rem', zIndex: 1 }}>
              <div style={quadrantHeaderStyle}>Copilots</div>
              {/* Row 1 */}
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                alignItems: 'center',
                marginBottom: '0.5rem',
              }}>
                <div style={tileStyle}>ChatGPT</div>
                <div style={tileStyle}>Copilot</div>
                <div style={{
                  fontSize: '0.7rem',
                  color: 'var(--text-muted)',
                  fontStyle: 'italic',
                  lineHeight: 1.3,
                  padding: '0 0.25rem',
                }}>crowded<br />space</div>
              </div>
              {/* Row 2 */}
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                alignItems: 'center',
              }}>
                <div style={tileStyle}>Gemini</div>
                <div style={tileStyle}>Glean</div>
                <div style={tileStyle}>Sierra</div>
              </div>
            </div>
          </div>
          </div>

          {/* ── X-Axis ── directly under the matrix grid */}
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
            <div style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
            }}>
              <div style={{
                flex: 1,
                height: '1px',
                background: 'var(--text-muted)',
                opacity: 0.5,
              }} />
              <div style={{
                width: 0,
                height: 0,
                borderTop: '0.3rem solid transparent',
                borderBottom: '0.3rem solid transparent',
                borderLeft: '0.5rem solid var(--text-muted)',
                opacity: 0.5,
                flexShrink: 0,
              }} />
            </div>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 700 }}>
              Decision Deliberation
            </span>
          </div>

          {/* ── Bottom Insight ── */}
          <div style={{
            textAlign: 'center',
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.55,
            maxWidth: '50rem',
            alignSelf: 'center',
            marginTop: '1.25rem',
            marginLeft: '2.5rem',
          }}>
        All existing systems either execute predefined processes or assist fragmented decisions.
        <br />
        <strong style={{ color: 'var(--text-primary)', fontWeight: 700 }}>
          None structure how organizations deliberate complex decisions over time.
        </strong>
          </div>
        </div>
      </div>

      {/* Decorative 4-pointed sparkle – bottom right */}
      <svg
        style={{
          position: 'absolute',
          bottom: '1.5rem',
          right: '2rem',
          width: '2rem',
          height: '2rem',
          opacity: 0.25,
        }}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 0 C12 0, 13.5 10, 24 12 C13.5 14, 12 24, 12 24 C12 24, 10.5 14, 0 12 C10.5 10, 12 0, 12 0Z"
          fill="var(--text-secondary)"
        />
      </svg>
    </div>
  )
}
