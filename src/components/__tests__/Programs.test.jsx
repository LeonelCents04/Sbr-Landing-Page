import { render, screen } from '@testing-library/react'
import Programs from '../Programs'

describe('Programs', () => {
  it('renders the section heading', () => {
    render(<Programs />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('TESDA-Accredited Training')
  })

  it('renders the Our Programs eyebrow', () => {
    render(<Programs />)
    expect(screen.getByText(/Our Programs/i)).toBeInTheDocument()
  })

  it('renders Contact Center Services card', () => {
    render(<Programs />)
    expect(screen.getByText('Contact Center Services NC2')).toBeInTheDocument()
  })

  it('renders Driving NC2 card', () => {
    render(<Programs />)
    expect(screen.getByText('Driving NC2')).toBeInTheDocument()
  })

  it('renders SMAW card', () => {
    render(<Programs />)
    expect(screen.getByText(/Shielded Metal Arc Welding/i)).toBeInTheDocument()
  })

  it('renders CSS NC2 card', () => {
    render(<Programs />)
    expect(screen.getByText(/Computer Systems Servicing/i)).toBeInTheDocument()
  })

  it('renders EIM NC2 card', () => {
    render(<Programs />)
    expect(screen.getByText(/Electrical Installation/i)).toBeInTheDocument()
  })

  it('renders 6 Learn More links', () => {
    render(<Programs />)
    expect(screen.getAllByRole('link', { name: 'Learn More' })).toHaveLength(6)
  })
})
