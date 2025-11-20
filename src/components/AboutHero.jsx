import React from 'react'

function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-900 text-white">
      <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="absolute -bottom-32 -right-24 h-72 w-72 rounded-full bg-teal-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-emerald-200 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          About Us – Lyabaïana
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Where the soul of Tangier meets contemporary elegance
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-emerald-100/90">
          A family story, a friendship, and a shared dream—crafted into intimate spaces that feel like home.
        </p>
      </div>
    </section>
  )
}

export default AboutHero
