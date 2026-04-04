import { useState } from 'react'
import './App.css'
import Slide1Chaos from './components/Slide1Chaos'
import Slide2CoreLoop from './components/Slide2CoreLoop'
import Slide3Wedge from './components/Slide3Wedge'
import Slide4Landscape from './components/Slide4Landscape'
import Slide5Vision from './components/Slide5Vision'
import Slide6Ask from './components/Slide6Ask'

function App() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    { id: 0, label: '1. The Chaos' },
    { id: 1, label: '2. Core Loop' },
    { id: 2, label: '3. The Wedge' },
    { id: 3, label: '4. Landscape' },
    { id: 4, label: '5. The Vision' },
    { id: 5, label: '6. Ask & Traction' }
  ]

  const renderSlide = () => {
    switch (activeTab) {
      case 0: return <Slide1Chaos />
      case 1: return <Slide2CoreLoop />
      case 2: return <Slide3Wedge />
      case 3: return <Slide4Landscape />
      case 4: return <Slide5Vision />
      case 5: return <Slide6Ask />
      default: return <Slide1Chaos />
    }
  }

  return (
    <div className="app-container">
      <header>
        <div className="logo">Clarioo <span>— From Chaos to Clarity</span></div>
        <nav className="nav-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`nav-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </header>
      
      <main className="slide-container">
        {renderSlide()}
      </main>
    </div>
  )
}

export default App
