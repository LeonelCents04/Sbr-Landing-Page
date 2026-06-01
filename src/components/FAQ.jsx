import { useState } from 'react'

const faqs = [
  {
    question: 'What is SBR TETCI Bohol?',
    answer:
      'SBR TETCI Bohol is a TESDA-accredited technical education and training center located in Bohol, Philippines. We offer a range of vocational and technical programs designed to prepare students for immediate employment.',
  },
  {
    question: 'Are your programs TESDA-accredited?',
    answer:
      'Yes. All our programs are accredited by the Technical Education and Skills Development Authority (TESDA), ensuring that your qualifications are recognized nationally.',
  },
  {
    question: 'How do I enroll?',
    answer:
      'You can enroll by visiting our campus, filling out the contact form on this page, or calling us directly. Our staff will guide you through the requirements and enrollment process.',
  },
  {
    question: 'What are the requirements for enrollment?',
    answer:
      'Requirements vary by program, but generally include a valid government-issued ID, birth certificate, and high school diploma or equivalent. Contact us for program-specific requirements.',
  },
  {
    question: 'Do you offer scholarship or financial assistance?',
    answer:
      'We work with government agencies and private organizations to offer scholarship opportunities. Ask our staff about currently available scholarships and financial aid options when you visit.',
  },
  {
    question: 'Where is the school located?',
    answer:
      'SBR TETCI Bohol is located in Bohol, Philippines. Use the map in the Contact section for directions, or reach out to us for the exact address.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-24 bg-beige">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-forest-light text-sm font-semibold uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="text-4xl font-bold text-forest">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3">
          {faqs.map(({ question, answer }, index) => {
            const isOpen = openIndex === index
            return (
              <div key={question} className="rounded-2xl bg-white overflow-hidden">
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="text-forest font-medium text-sm">{question}</span>
                  <svg
                    className={`w-5 h-5 text-forest shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
