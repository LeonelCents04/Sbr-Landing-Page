import { render, screen } from '@testing-library/react'
import Hero from '../Hero'

describe('Hero', () => {
  it('renders the headline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Build Your Future with SBR TETCI Bohol/i)
  })

  it('renders the TESDA eyebrow text', () => {
    render(<Hero />)
    expect(screen.getByText(/TESDA-Accredited/i)).toBeInTheDocument()
  })

  it('renders the Enroll Now CTA linking to #contact', () => {
    render(<Hero />)
    const link = screen.getByRole('link', { name: 'Enroll Now' })
    expect(link).toHaveAttribute('href', '#contact')
  })

  it('renders the Explore Programs CTA linking to #programs', () => {
    render(<Hero />)
    const link = screen.getByRole('link', { name: 'Explore Programs' })
    expect(link).toHaveAttribute('href', '#programs')
  })

  it('renders the image placeholder', () => {
    render(<Hero />)
    expect(screen.getByText('Campus Image')).toBeInTheDocument()
  })
})
