import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helpers'
import 'jest-styled-components'
import Footer from '.'

describe('<Footer />', () => {
  it('should render when screen is less than 768px', () => {
    renderWithTheme(<Footer />)
    const footer = screen.getByText(/contact/i).parentElement?.parentElement
      ?.parentElement
    expect(footer).toHaveStyleRule('grid-gap', '2.4rem', {
      media: 'screen and (max-width: 768px)',
      modifier: 'section'
    })
  })
})
