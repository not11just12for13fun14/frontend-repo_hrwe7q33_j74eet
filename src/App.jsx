import React from 'react'
import AboutHero from './components/AboutHero'
import Story from './components/Story'
import Philosophy from './components/Philosophy'
import Services from './components/Services'
import Discover from './components/Discover'
import Mission from './components/Mission'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <AboutHero />

      {/* Story */}
      <Story />

      {/* Philosophy */}
      <Philosophy />

      {/* Services */}
      <Services />

      {/* Discover */}
      <Discover />

      {/* Mission & Why */}
      <Mission />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Lyabaïana — Crafted with love in Tangier.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
