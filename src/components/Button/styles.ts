import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    background: linear-gradient(
      178.59deg,
      #ff5f5f -14.51%,
      #f062c0 102.86%,
      #f23131 102.86%
    );
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    text-align: center;
    width: 100%;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xsmall};
    cursor: pointer;

    &:hover {
      background: linear-gradient(180deg, #e35565 0%, #d958a6 100%),
        linear-gradient(
          178.59deg,
          #ff5f5f -14.51%,
          #f062c0 102.86%,
          #f23131 102.86%
        );
    }
  `}
`
