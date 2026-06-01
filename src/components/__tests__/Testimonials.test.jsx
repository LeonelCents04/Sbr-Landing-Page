import { render, screen } from '@testing-library/react'
import Testimonials from '../Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('What Our Students Say')
  })

  it('renders all three student names', () => {
    render(<Testimonials />)
    expect(screen.getByText('Maria Santos')).toBeInTheDocument()
    expect(screen.getByText('Juan dela Cruz')).toBeInTheDocument()
    expect(screen.getByText('Ana Reyes')).toBeInTheDocument()
  })

  it('renders all three program labels', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Computer Systems Servicing/i)).toBeInTheDocument()
    expect(screen.getByText(/Electrical Installation/i)).toBeInTheDocument()
    expect(screen.getByText(/Contact Center/i)).toBeInTheDocument()
  })
})
