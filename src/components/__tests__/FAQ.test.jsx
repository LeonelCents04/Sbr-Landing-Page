import { render, screen, fireEvent } from '@testing-library/react'
import FAQ from '../FAQ'

describe('FAQ', () => {
  it('renders the section heading', () => {
    render(<FAQ />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Frequently Asked Questions')
  })

  it('renders all 6 questions', () => {
    render(<FAQ />)
    expect(screen.getByText('What is SBR TETCI Bohol?')).toBeInTheDocument()
    expect(screen.getByText('Are your programs TESDA-accredited?')).toBeInTheDocument()
    expect(screen.getByText('How do I enroll?')).toBeInTheDocument()
    expect(screen.getByText('What are the requirements for enrollment?')).toBeInTheDocument()
    expect(screen.getByText('Do you offer scholarship or financial assistance?')).toBeInTheDocument()
    expect(screen.getByText('Where is the school located?')).toBeInTheDocument()
  })

  it('first answer is visible by default', () => {
    render(<FAQ />)
    expect(screen.getByText(/TESDA-accredited technical education/i)).toBeInTheDocument()
  })

  it('clicking the second question shows its answer and closes the first', () => {
    render(<FAQ />)
    // First item is open by default
    expect(screen.getByText(/TESDA-accredited technical education/i)).toBeInTheDocument()
    // Click second question
    fireEvent.click(screen.getByText('Are your programs TESDA-accredited?'))
    // Second answer now visible
    expect(screen.getByText(/all our programs are accredited/i)).toBeInTheDocument()
    // First answer now hidden
    expect(screen.queryByText(/TESDA-accredited technical education/i)).not.toBeInTheDocument()
  })
})
