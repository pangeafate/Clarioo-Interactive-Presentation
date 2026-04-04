import { useState, useEffect } from 'react'

// Import all slides
import Slide1Title from './components/Slide1Title'
import Slide2Team from './components/Slide2Team'
import Slide3Legacy from './components/Slide3Legacy'
import Slide4Strategy from './components/Slide4Strategy'
import Slide11Product from './components/Slide11Product'
import Slide5Phase3 from './components/Slide5Phase3'
import Slide6Simulations from './components/Slide6Simulations'
import Slide12WhyNow from './components/Slide12WhyNow'
import Slide13GTM from './components/Slide13GTM'
import Slide14Model from './components/Slide14Model'
import Slide7Moat from './components/Slide7Moat'
import Slide8StatusAsk from './components/Slide8StatusAsk'
import Slide15Waitlist from './components/Slide15Waitlist'
import Slide9AppendixReactive from './components/Slide9AppendixReactive'
import Slide10AppendixProactive from './components/Slide10AppendixProactive'

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Sequenced exactly as they appear in the PDF pages
  const slides = [
    <Slide1Title />,             // Page 1
    <Slide2Team />,              // Page 2
    <Slide3Legacy />,            // Page 3
    <Slide4Strategy />,          // Page 4
    <Slide11Product />,          // Page 5
    <Slide5Phase3 />,            // Page 6
    <Slide6Simulations />,       // Page 7
    <Slide12WhyNow />,           // Page 8
    <Slide13GTM />,              // Page 9
    <Slide14Model />,            // Page 10
    <Slide7Moat />,              // Page 11
    <Slide8StatusAsk />,         // Page 12
    <Slide15Waitlist />,         // Page 13
    <Slide9AppendixReactive />,  // Page 15
    <Slide10AppendixProactive /> // Page 16
  ]

  const nextSlide = () => setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1))
  const prevSlide = () => setCurrentSlide(prev => Math.max(prev - 1, 0))

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
      {slides.map((SlideComponent, index) => (
        <div key={index} className={`slide-wrapper ${index === currentSlide ? 'active' : ''}`}>
          {SlideComponent}
        </div>
      ))}

      <div className="slide-indicator">
        {currentSlide + 1} / {slides.length}
      </div>

      <div className="nav-controls">
        <button className="nav-btn" onClick={prevSlide} disabled={currentSlide === 0}>
          <span>←</span>
        </button>
        <button className="nav-btn" onClick={nextSlide} disabled={currentSlide === slides.length - 1}>
          <span>→</span>
        </button>
      </div>
    </div>
  )
}

export default App
