import React from 'react'

const spots = [
  'Local souks, artisan markets, and traditional Moroccan crafts',
  'Iconic restaurants, sea-view cafés, and brunch spots',
  'Private tours to Chefchaouen, Tetouan, Asilah, and Akchour',
  'Cultural excursions through Moroccan history, cuisine, and arts'
]

function Discover() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Discover Tangier 🧭
        </h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          From the heart of the Medina to the sweeping views of the Kasbah, Tangier is full of culture, colors, and hidden gems.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {spots.map((t) => (
            <div key={t} className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <p className="text-slate-700">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Discover
