import { render, screen } from '@testing-library/react'
import Hero from '../Hero'

describe('Hero', () => {
  it('renders the section', () => {
    render(<Hero />)
    expect(document.querySelector('section')).toBeInTheDocument()
  })

  it('renders the TESDA eyebrow text', () => {
    render(<Hero />)
    expect(screen.getByText(/TESDA-Accredited/i)).toBeInTheDocument()
  })

  it('renders the headline', () => {
    render(<Hero />)
    expect(screen.getByText(/Build Your Future with SBR TETCI Bohol/i)).toBeInTheDocument()
  })

  it('renders the Enroll Now CTA', () => {
    render(<Hero />)
    expect(screen.getAllByText('Enroll Now').length).toBeGreaterThan(0)
  })

  it('renders the Explore Programs CTA', () => {
    render(<Hero />)
    expect(screen.getByText('Explore Programs')).toBeInTheDocument()
  })
})
