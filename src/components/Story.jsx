import React from 'react'

function Story() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-5">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Our Story: The Origin of Lyabaïana ✨
          </h2>
          <p className="mt-4 text-slate-600">
            Lyabaïana is more than just a name — it is the heart of our family, a story of friendship, and a dream brought to life. The name was inspired by our daughters, Liyah and Hanna. By blending their names, Lyabaïana was born — a name full of love, warmth, and hope for the future.
          </p>
          <p className="mt-4 text-slate-600">
            “Baya” (بايا) in Arabic means “bay,” echoing the beautiful Bay of Tangier, a place that captured our hearts from the first moment. Lyabaïana is a tribute to this magical city, where sea meets light, Andalusian history blends with a cosmopolitan present, and every corner tells a story.
          </p>
          <p className="mt-4 text-slate-600">
            We are a French-Moroccan couple who moved to Tangier seeking a freer, more authentic life. Over time, a dear friend joined our journey, sharing our vision to create exceptional private spaces in the heart of the Medina.
          </p>
        </div>
        <div className="md:col-span-3">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-emerald-50 p-6 ring-1 ring-emerald-200/60">
              <h3 className="text-lg font-semibold text-emerald-900">Tribute to Tangier</h3>
              <p className="mt-2 text-emerald-900/80">
                Where sea meets light — a city of contrast and harmony that inspires everything we do.
              </p>
            </div>
            <div className="rounded-2xl bg-sky-50 p-6 ring-1 ring-sky-200/60">
              <h3 className="text-lg font-semibold text-sky-900">Family & Friendship</h3>
              <p className="mt-2 text-sky-900/80">
                Rooted in love and trust, Lyabaïana is a story written together.
              </p>
            </div>
            <div className="rounded-2xl bg-rose-50 p-6 ring-1 ring-rose-200/60">
              <h3 className="text-lg font-semibold text-rose-900">Craft & Culture</h3>
              <p className="mt-2 text-rose-900/80">
                Inspired by Moroccan craftsmanship and elegant family-style living.
              </p>
            </div>
            <div className="rounded-2xl bg-amber-50 p-6 ring-1 ring-amber-200/60">
              <h3 className="text-lg font-semibold text-amber-900">A Dream Made Real</h3>
              <p className="mt-2 text-amber-900/80">
                A collection of private riads designed for intimacy, comfort, and beauty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story
