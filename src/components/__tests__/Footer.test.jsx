import { render, screen } from '@testing-library/react'
import Footer from '../Footer'

describe('Footer', () => {
  it('renders the SBR TETCI Bohol wordmark', () => {
    render(<Footer />)
    expect(screen.getByText('SBR TETCI Bohol')).toBeInTheDocument()
  })

  it('renders copyright line', () => {
    render(<Footer />)
    expect(screen.getByText(new RegExp(`© ${new Date().getFullYear()} SBR TETCI Bohol`, 'i'))).toBeInTheDocument()
  })

  it('renders nav links', () => {
    render(<Footer />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Programs')).toBeInTheDocument()
    expect(screen.getByText('Why Us')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders the tagline', () => {
    render(<Footer />)
    expect(screen.getByText(/Building careers through technical excellence/i)).toBeInTheDocument()
  })
})
