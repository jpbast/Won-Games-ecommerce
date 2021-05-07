import styled, { css } from 'styled-components'
import { LogoProps } from '.'

const wrapperModifier = {
  normal: () => css`
    width: 11rem;
    height: 3.3rem;
  `,
  large: () => css`
    width: 20rem;
    height: 5.9rem;
  `,
  hideOnMobile: () => css`
    @media screen and (max-width: 500px) {
      width: 5.8rem;
      height: 4.5rem;

      svg {
        pointer-events: none;
        height: 4.5rem;
      }

      .text {
        display: none;
      }
    }
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size, hideOnMobile }) => css`
    color: ${theme.colors[color!]};
    ${wrapperModifier[size!]}
    ${hideOnMobile && wrapperModifier.hideOnMobile}
  `}
`
