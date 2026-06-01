import { render, screen } from '@testing-library/react'
import Gallery from '../Gallery'

describe('Gallery', () => {
  it('renders the section heading', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Campus & Training')
  })

  it('renders 8 gallery placeholder items', () => {
    render(<Gallery />)
    expect(screen.getAllByTestId('gallery-item')).toHaveLength(8)
  })
})
