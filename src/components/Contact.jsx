import { useState, useEffect } from 'react'
import { useInView } from '../hooks/useInView'

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

const inputClass =
  'w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/15 focus:bg-white bg-beige text-gray-800 text-sm transition-all duration-200'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [shaking, setShaking] = useState(false)
  const [ref, inView] = useInView()

  const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)'

  useEffect(() => {
    if (status === 'error') {
      setShaking(true)
      const t = setTimeout(() => setShaking(false), 420)
      return () => clearTimeout(t)
    }
  }, [status])

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    const form = e.target
    const data = {
      access_key: WEB3FORMS_KEY,
      subject: 'New Inquiry — SBR TETCI Bohol Website',
      from_name: form.name.value,
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value,
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (json.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div
          className="text-center mb-10 md:mb-16 reveal"
          style={{ ...(inView && { opacity: 1, transform: 'none' }) }}
        >
          <p className="text-forest-light text-sm font-semibold uppercase tracking-widest mb-3">
            Get in Touch
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-forest">Enroll or Inquire Today</h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">

          {/* Form — slides up */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateY(32px)',
              transition: `opacity 650ms ${EASE}, transform 650ms ${EASE}`,
            }}
          >
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input id="name" name="name" type="text" placeholder="Your full name" className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input id="email" name="email" type="email" placeholder="your@email.com" className={inputClass} />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input id="phone" name="phone" type="tel" placeholder="+63 900 000 0000" className={inputClass} />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="How can we help you?"
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div className={shaking ? 'animate-shake' : ''}>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full px-6 py-3 rounded-lg bg-forest text-white font-medium hover:bg-forest-light active:scale-95 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending…
                    </span>
                  ) : 'Send Message'}
                </button>
                {status === 'success' && (
                  <p className="mt-3 text-forest-light text-sm font-medium">
                    Message sent! We&apos;ll be in touch soon.
                  </p>
                )}
                {status === 'error' && (
                  <p className="mt-3 text-red-500 text-sm font-medium">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}
              </div>
            </form>
          </div>

          {/* Contact info — enters with slight delay */}
          <div
            className="flex flex-col gap-8"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateY(32px)',
              transition: `opacity 650ms ${EASE}, transform 650ms ${EASE}`,
              transitionDelay: '150ms',
            }}
          >
            <div>
              <h3 className="text-lg font-semibold text-forest mb-4">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-forest-light mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-600 text-sm">(038) 412 7025 / 09179034052</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-forest-light mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-600 text-sm">sbrtetci.bohol@gmail.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-forest-light mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-600 text-sm">1397 Carlos P. Garcia Ave, Tagbilaran City, Bohol, Philippines</span>
                </li>
              </ul>
            </div>

            <div className="w-full h-64 rounded-2xl overflow-hidden">
              <iframe
                title="SBR TETCI Location"
                src="https://maps.google.com/maps?q=1397+Carlos+P.+Garcia+Ave,+Tagbilaran+City,+6300+Bohol&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div>
              <p className="text-sm font-medium text-gray-700 mb-3">Follow Us</p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/sbrtetcibohol" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-forest hover:text-forest-light hover:scale-110 hover:-rotate-6 transition-all duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/sbrtetci" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-forest hover:text-forest-light hover:scale-110 hover:-rotate-6 transition-all duration-200">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={2} />
                    <circle cx="12" cy="12" r="4" strokeWidth={2} />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                  </svg>
                </a>
                <a href="https://www.twitter.com/sbrtetci" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-forest hover:text-forest-light hover:scale-110 hover:-rotate-6 transition-all duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
