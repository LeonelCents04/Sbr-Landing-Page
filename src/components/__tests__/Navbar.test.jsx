import { render, screen, fireEvent } from '@testing-library/react'
import Navbar from '../Navbar'

describe('Navbar', () => {
  it('renders the SBR TETCI Bohol wordmark', () => {
    render(<Navbar />)
    expect(screen.getByText('SBR TETCI Bohol')).toBeInTheDocument()
  })

  it('renders all desktop nav links', () => {
    render(<Navbar />)
    expect(screen.getAllByText('About').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Programs').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Why Us').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Contact').length).toBeGreaterThan(0)
  })

  it('renders Enroll Now button', () => {
    render(<Navbar />)
    expect(screen.getAllByText('Enroll Now').length).toBeGreaterThan(0)
  })

  it('toggles mobile menu on hamburger click', () => {
    render(<Navbar />)
    const hamburger = screen.getByLabelText('Toggle menu')
    expect(screen.getAllByText('About').length).toBe(1)
    fireEvent.click(hamburger)
    expect(screen.getAllByText('About').length).toBe(2)
    fireEvent.click(hamburger)
    expect(screen.getAllByText('About').length).toBe(1)
  })
})
