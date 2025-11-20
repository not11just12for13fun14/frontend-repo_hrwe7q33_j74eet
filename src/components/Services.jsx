import React from 'react'

const services = [
  'Private Hammam & Wellness Spaces',
  'Rooftop terraces & small pool for relaxation',
  'Fully equipped kitchens & optional private chef services',
  'Daily housekeeping, fresh linens, and towels',
  'High-speed Wi-Fi, dedicated workspace, and entertainment options',
  'Assistance with private tours, day trips, and airport transfers',
  'Welcome kit with toiletries, snacks, beverages, and coffee/tea'
]

function Services() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Our Services & Comforts 🛏
        </h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Every detail is designed to make you feel at home while experiencing the true magic of Tangier.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {services.map((s) => (
            <div key={s} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <span className="mt-1 inline-block h-2.5 w-2.5 flex-none rounded-full bg-emerald-500" />
              <p className="text-slate-700">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
