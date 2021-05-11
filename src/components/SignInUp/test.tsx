import { render, screen } from '@testing-library/react'

import SignInUp from '.'

describe('<SignInUp />', () => {
  it('should render the heading', () => {
    const { container } = render(<SignInUp />)

    expect(screen.getByRole('heading', { name: /SignInUp/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
