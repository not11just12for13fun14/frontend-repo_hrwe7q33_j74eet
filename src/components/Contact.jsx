import React from 'react'

function Contact() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Contact & Reservations 📩</h2>
            <p className="mt-3 text-slate-600">
              Reach out for reservations, availability, guided tours, or any special requests. We’ll make your stay unforgettable and help you experience Tangier like a true local.
            </p>
            <div className="mt-6 space-y-3 text-slate-700">
              <p><span className="font-semibold">Email:</span> contact@lyabaiana.com</p>
              <p><span className="font-semibold">Phone/WhatsApp:</span> +212 6 12 34 56 78</p>
              <p><span className="font-semibold">Instagram:</span> @lyabaiana</p>
            </div>
          </div>
          <form className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500" placeholder="you@example.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea rows={4} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Tell us about your stay, dates, or requests" />
              </div>
            </div>
            <button type="button" className="mt-4 inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 font-semibold text-white hover:bg-emerald-700">Send Request</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
