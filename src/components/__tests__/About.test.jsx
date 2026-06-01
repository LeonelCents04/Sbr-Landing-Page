import { render, screen } from '@testing-library/react'
import About from '../About'

describe('About', () => {
  it('renders the About Us eyebrow', () => {
    render(<About />)
    expect(screen.getByText(/About Us/i)).toBeInTheDocument()
  })

  it('renders the section heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Who We Are')
  })

  it('renders the image placeholder', () => {
    render(<About />)
    expect(screen.getByText(/Image placeholder/i)).toBeInTheDocument()
  })

  it('renders all three highlight bullet points', () => {
    render(<About />)
    expect(screen.getByText(/TESDA-accredited programs recognized nationwide/i)).toBeInTheDocument()
    expect(screen.getByText(/hands-on training/i)).toBeInTheDocument()
    expect(screen.getByText(/industry experience/i)).toBeInTheDocument()
  })
})
