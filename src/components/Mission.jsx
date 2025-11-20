import React from 'react'

function Mission() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Our Mission & Vision 💡</h2>
            <div className="mt-6 space-y-6 text-slate-700">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Mission</h3>
                <p className="mt-2">
                  To redefine the riad and luxury experience in Tangier. We create spaces where modern comfort meets the poetry of ancient Moroccan homes, inspiring and delighting every guest.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Vision</h3>
                <p className="mt-2">
                  To become a benchmark of Mediterranean luxury, where Moroccan tradition and contemporary design coexist beautifully. Lyabaïana is dedicated to offering an authentic, emotional, and lasting experience in Tangier, where every stay is a memory, a discovery, and an inspiration.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 p-8 ring-1 ring-emerald-200/60">
            <h3 className="text-lg font-semibold text-emerald-900">Why Choose Lyabaïana? 🌟</h3>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-emerald-900/90">
              <li>A unique story behind every space, inspired by family and the soul of Tangier</li>
              <li>Intimate, private riads and villas designed for comfort and elegance</li>
              <li>Exceptional hospitality rooted in Moroccan tradition</li>
              <li>Seamless services from private chef experiences to guided tours</li>
              <li>Central locations in Tangier with breathtaking views and local charm</li>
            </ul>
            <p className="mt-4 font-medium text-emerald-900">Lyabaïana is not just a stay — it’s a Tangier experience.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission
