import { render, screen } from '@testing-library/react'
import Statistics from '../Statistics'

describe('Statistics', () => {
  it('renders the 500+ graduates stat', () => {
    render(<Statistics />)
    expect(screen.getByText('500+')).toBeInTheDocument()
    expect(screen.getByText('Graduates')).toBeInTheDocument()
  })

  it('renders the programs stat', () => {
    render(<Statistics />)
    expect(screen.getByText('8+')).toBeInTheDocument()
    expect(screen.getByText('TESDA Programs')).toBeInTheDocument()
  })

  it('renders the years of service stat', () => {
    render(<Statistics />)
    expect(screen.getByText('10+')).toBeInTheDocument()
    expect(screen.getByText('Years of Service')).toBeInTheDocument()
  })

  it('renders the TESDA accredited stat', () => {
    render(<Statistics />)
    expect(screen.getByText('TESDA')).toBeInTheDocument()
    expect(screen.getByText('Accredited')).toBeInTheDocument()
  })
})
