import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('renders the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders all section headings', () => {
    render(<App />)
    expect(screen.getByText(/Build Your Future with SBR TETCI Bohol/i)).toBeInTheDocument()
    expect(screen.getByText('Who We Are')).toBeInTheDocument()
    expect(screen.getByText('TESDA-Accredited Training')).toBeInTheDocument()
    expect(screen.getByText('Why Students Choose Us')).toBeInTheDocument()
    expect(screen.getByText('What Our Students Say')).toBeInTheDocument()
    expect(screen.getByText('Campus & Training')).toBeInTheDocument()
    expect(screen.getByText('Enroll or Inquire Today')).toBeInTheDocument()
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument()
  })
})
