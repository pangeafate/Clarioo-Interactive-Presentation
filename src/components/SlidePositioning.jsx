import React from 'react'

export default function SlidePositioning() {
  const tileStyle = {
    background: 'rgba(255, 255, 255, 0.07)',
    padding: '0.5rem 1.125rem',
    borderRadius: '0.5rem',
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    textAlign: 'center',
    whiteSpace: 'nowrap',
  }

  const quadrantHeaderStyle = {
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
    marginBottom: '0.625rem',
    fontWeight: 500,
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
      <div style={{ marginBottom: '1.25rem' }}>
        <div style={{
          fontSize: '0.8rem',
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
          maxWidth: '52rem',
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
          alignItems: 'stretch',
          width: '100%',
          maxWidth: '70rem',
          height: '100%',
          maxHeight: '34rem',
        }}>

          {/* Y-Axis Label */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '1.75rem',
            flexShrink: 0,
          }}>
            <div style={{
              transform: 'rotate(-90deg)',
              whiteSpace: 'nowrap',
              fontSize: '0.65rem',
              color: 'var(--text-secondary)',
              letterSpacing: '0.02rem',
              opacity: 0.6,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              <span>Breadth (High-volume tasks)</span>
              <span style={{ fontSize: '0.8rem' }}>↑</span>
              <span>Depth (High-stakes decisions)</span>
            </div>
          </div>

          {/* Matrix Grid */}
          <div style={{
            flex: 1,
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr',
            gridTemplateRows: '1.15fr 1fr',
            position: 'relative',
            borderLeft: '1px solid rgba(255, 255, 255, 0.06)',
          }}>

            {/* Crosshair – vertical */}
            <div style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '40%',
              width: '1px',
              background: 'rgba(255, 255, 255, 0.06)',
              pointerEvents: 'none',
            }} />
            {/* Crosshair – horizontal */}
            <div style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: '53.5%',
              height: '1px',
              background: 'rgba(255, 255, 255, 0.06)',
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
              padding: '0 1.25rem 1.25rem',
              zIndex: 1,
              display: 'flex',
              flexDirection: 'column',
            }}>
              {/* Emerging Category label */}
              <div style={{
                fontSize: '0.65rem',
                color: 'var(--text-muted)',
                marginBottom: '0.375rem',
                marginTop: '0.5rem',
                fontWeight: 400,
                fontStyle: 'italic',
              }}>
                Emerging Category: Decision Intelligence
              </div>

              {/* Container with accent border */}
              <div style={{
                border: '1px solid rgba(139, 92, 246, 0.2)',
                borderRadius: '0.75rem',
                padding: '0.75rem 1rem',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
                {/* YOUR ZONE badge */}
                <div style={{
                  fontSize: '0.575rem',
                  fontWeight: 700,
                  letterSpacing: '0.15rem',
                  color: 'var(--accent-cyan)',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem',
                }}>
                  Your Zone
                </div>

                {/* Content row: Cloverpop + CLARIOO + What Doesn't Exist */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.875rem',
                }}>
                  {/* Cloverpop */}
                  <div style={{ ...tileStyle, opacity: 0.5, flexShrink: 0 }}>
                    Cloverpop
                  </div>

                  {/* CLARIOO Hero Tile */}
                  <div style={{
                    background: 'linear-gradient(135deg, #1e3a8a, #6d28d9)',
                    padding: '1.125rem 2rem',
                    borderRadius: '0.75rem',
                    textAlign: 'center',
                    boxShadow: '0 0 1.75rem rgba(124, 58, 237, 0.35), 0 0 3.5rem rgba(14, 165, 233, 0.15)',
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
                      fontSize: '0.625rem',
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontWeight: 500,
                    }}>Decision Intelligence System</div>
                  </div>

                  {/* What Doesn't Exist callout */}
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    borderRadius: '0.5rem',
                    padding: '0.5rem 0.75rem',
                    fontSize: '0.575rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.55,
                    flexShrink: 0,
                  }}>
                    <div style={{
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                      marginBottom: '0.2rem',
                      fontSize: '0.625rem',
                    }}>What Doesn&apos;t Exist</div>
                    <div>No existing system provides:</div>
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
                  fontSize: '0.5rem',
                  color: 'var(--text-muted)',
                  fontStyle: 'italic',
                  lineHeight: 1.3,
                  padding: '0 0.125rem',
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
      </div>

      {/* ── X-Axis ── */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
        marginLeft: '1.75rem',
        marginTop: '0.25rem',
        marginBottom: '0.625rem',
      }}>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          Process Execution
        </span>
        <svg
          style={{ width: '22rem', height: '0.75rem' }}
          viewBox="0 0 350 12"
          preserveAspectRatio="xMidYMid meet"
        >
          <line
            x1="0" y1="6" x2="330" y2="6"
            stroke="var(--text-muted)" strokeWidth="1"
            strokeDasharray="8 5" opacity="0.4"
          />
          <polygon
            points="340,6 330,2 330,10"
            fill="var(--text-muted)" opacity="0.4"
          />
        </svg>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          Decision Deliberation
        </span>
      </div>

      {/* ── Bottom Insight ── */}
      <div style={{
        textAlign: 'center',
        fontSize: '0.95rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.55,
        maxWidth: '50rem',
        alignSelf: 'center',
      }}>
        All existing systems either execute predefined processes or assist fragmented decisions.
        <br />
        <strong style={{ color: 'var(--text-primary)', fontWeight: 700 }}>
          None structure how organizations deliberate complex decisions over time.
        </strong>
      </div>

      {/* Decorative 4-pointed sparkle – bottom right */}
      <svg
        style={{
          position: 'absolute',
          bottom: '1.5rem',
          right: '2rem',
          width: '2rem',
          height: '2rem',
          opacity: 0.2,
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
