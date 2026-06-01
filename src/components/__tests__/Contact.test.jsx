import { render, screen } from '@testing-library/react'
import Contact from '../Contact'

describe('Contact', () => {
  it('renders the section heading', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Enroll or Inquire Today')
  })

  it('renders the eyebrow label', () => {
    render(<Contact />)
    expect(screen.getByText(/Get in Touch/i)).toBeInTheDocument()
  })

  it('renders the Full Name field', () => {
    render(<Contact />)
    expect(screen.getByLabelText('Full Name')).toBeInTheDocument()
  })

  it('renders the Email Address field', () => {
    render(<Contact />)
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
  })

  it('renders the Phone Number field', () => {
    render(<Contact />)
    expect(screen.getByLabelText('Phone Number')).toBeInTheDocument()
  })

  it('renders the Message field', () => {
    render(<Contact />)
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('renders the Send Message button', () => {
    render(<Contact />)
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('renders Bohol Philippines contact info', () => {
    render(<Contact />)
    expect(screen.getByText(/Bohol, Philippines/i)).toBeInTheDocument()
  })
})
