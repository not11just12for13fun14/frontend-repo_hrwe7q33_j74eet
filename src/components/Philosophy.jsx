import React from 'react'

const items = [
  {
    title: 'House Lyabaïana – The Pop House',
    desc: 'Vibrant, colorful, and artistic, ideal for sharing joyful moments.',
    color: 'from-fuchsia-500/10 to-rose-500/10 text-fuchsia-900'
  },
  {
    title: 'Dar Lyabaïana – The Private House',
    desc: 'Intimate, minimalistic, with private hammam and sunlit terraces.',
    color: 'from-emerald-500/10 to-teal-500/10 text-emerald-900'
  },
  {
    title: 'Kasbah Lyabaïana – History on High',
    desc: 'Perched above the old city with breathtaking views and a timeless blend of design.',
    color: 'from-sky-500/10 to-cyan-500/10 text-sky-900'
  },
  {
    title: 'Riad Lyabaïana – The Soul of the Medina',
    desc: 'Serene and elegant, perfect to reconnect with the Moroccan way of life.',
    color: 'from-indigo-500/10 to-violet-500/10 text-indigo-900'
  },
  {
    title: 'Villa Amandine – The Intimate Hotel',
    desc: 'Refined, heartfelt hospitality in a cozy Mediterranean-style home.',
    color: 'from-amber-500/10 to-orange-500/10 text-amber-900'
  }
]

function Philosophy() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Our Philosophy & Spirit 🌿
        </h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Our values: authenticity, elegance, and a respectful celebration of Moroccan heritage, paired with modern comfort.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className={`rounded-2xl bg-gradient-to-br ${item.color} p-6 ring-1 ring-black/5`}>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-slate-700/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Philosophy
