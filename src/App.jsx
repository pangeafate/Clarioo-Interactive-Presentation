import { useState, useEffect, useRef, Component } from 'react'

/* Error boundary: prevents React crashes from reloading the page */
class SlideErrorBoundary extends Component {
  state = { hasError: false }
  static getDerivedStateFromError() { return { hasError: true } }
  componentDidCatch(err) { console.warn('Slide error caught:', err) }
  render() { return this.state.hasError ? null : this.props.children }
}

// Import all slides
import SlideHeroPipeline from './components/SlideHeroPipeline'
import Slide1Title from './components/Slide1Title'
import Slide2Team from './components/Slide2Team'
import Slide3Legacy from './components/Slide3Legacy'
import Slide3bMissingLayer from './components/Slide3bMissingLayer'
import Slide4Strategy from './components/Slide4Strategy'
import Slide11Product from './components/Slide11Product'
import Slide5Phase3 from './components/Slide5Phase3'
import Slide6Simulations from './components/Slide6Simulations'
import Slide12WhyNow from './components/Slide12WhyNow'
import Slide13GTM from './components/Slide13GTM'
import Slide14Model from './components/Slide14Model'
import Slide7Moat from './components/Slide7Moat'
import Slide8StatusAsk from './components/Slide8StatusAsk'
import SlidePositioning from './components/SlidePositioning'
import Slide15Waitlist from './components/Slide15Waitlist'
import Slide9AppendixReactive from './components/Slide9AppendixReactive'
import Slide10AppendixProactive from './components/Slide10AppendixProactive'
import SlideDecisionJourney from './components/SlideDecisionJourney'

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Sequenced exactly as they appear in the PDF pages
  const slides = [
    { name: "Title", component: <Slide1Title /> },
    { name: "Team", component: <Slide2Team /> },
    { name: "Positioning", component: <SlidePositioning /> },
    // { name: "Legacy Orgs", component: <Slide3Legacy /> },
    { name: "Missing Layer", component: <Slide3bMissingLayer /> },
    { name: "Clarioo", component: <SlideHeroPipeline /> },
    { name: "The Journey", component: <Slide4Strategy /> },
    // { name: "Product Snapshot", component: <Slide11Product /> },
    { name: "Phase 3", component: <Slide5Phase3 /> },
    // { name: "Simulations", component: <Slide6Simulations /> },
    { name: "Why Now", component: <Slide12WhyNow /> },
    { name: "Go-To-Market", component: <Slide13GTM /> },
    { name: "Business Model", component: <Slide14Model /> },
    { name: "Moat Stack", component: <Slide7Moat /> },
    { name: "Status & Ask", component: <Slide8StatusAsk /> },
    { name: "Waitlist", component: <Slide15Waitlist /> },
    // { name: "Appx: Reactive", component: <Slide9AppendixReactive /> },
    // { name: "Appx: Proactive", component: <Slide10AppendixProactive /> },
    // { name: "Decision Journey", component: <SlideDecisionJourney /> },
  ]

  const nextSlide = () => setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1))
  const prevSlide = () => setCurrentSlide(prev => Math.max(prev - 1, 0))

  /* Track multi-touch gestures to ignore synthesized clicks after pinch zoom */
  const lastPinchRef = useRef(0)
  useEffect(() => {
    const onTouchStart = (e) => { if (e.touches.length > 1) lastPinchRef.current = Date.now() }
    const onTouchEnd = (e) => { if (e.changedTouches.length > 0 && lastPinchRef.current) lastPinchRef.current = Date.now() }
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => { window.removeEventListener('touchstart', onTouchStart); window.removeEventListener('touchend', onTouchEnd) }
  }, [])

  const safeSetSlide = (index) => {
    /* Ignore clicks within 600ms of a pinch gesture — they're synthesized by iOS */
    if (Date.now() - lastPinchRef.current < 600) return
    setCurrentSlide(index)
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide()
      if (e.key === 'ArrowLeft') prevSlide()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="presentation-container">
      
      {/* Top Navigation */}
      <div className="nav">
        <div className="nav-brand">CLARI<span>OO</span></div>
        <div className="nav-tabs">
          {slides.map((slide, index) => (
            <button 
              key={index} 
              className={`nav-tab ${index === currentSlide ? 'active' : ''}`}
              onClick={() => safeSetSlide(index)}
            >
              {index + 1}. {slide.name}
            </button>
          ))}
        </div>
      </div>

      <div className="slides-viewport">
        {slides.map((slide, index) => (
          <div key={index} className={`slide-wrapper ${index === currentSlide ? 'active' : ''}`}>
            <SlideErrorBoundary>{slide.component}</SlideErrorBoundary>
          </div>
        ))}
      </div>

    </div>
  )
}

export default App
