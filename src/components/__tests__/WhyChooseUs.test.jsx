import { render, screen } from '@testing-library/react'
import WhyChooseUs from '../WhyChooseUs'

describe('WhyChooseUs', () => {
  it('renders the section heading', () => {
    render(<WhyChooseUs />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Why Students Choose Us')
  })

  it('renders the eyebrow label', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText(/Why SBR TETCI/i)).toBeInTheDocument()
  })

  it('renders all 6 feature titles', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText('TESDA-Aligned Training')).toBeInTheDocument()
    expect(screen.getByText('Experienced Instructors')).toBeInTheDocument()
    expect(screen.getByText('Hands-On Learning')).toBeInTheDocument()
    expect(screen.getByText('Industry-Ready Skills')).toBeInTheDocument()
    expect(screen.getByText('Affordable Education')).toBeInTheDocument()
    expect(screen.getByText('Career Opportunities')).toBeInTheDocument()
  })
})
