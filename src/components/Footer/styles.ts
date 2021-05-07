import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
  max-width: 100rem;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};

    section {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      justify-content: space-between;
      margin-top: ${theme.spacings.medium};

      ul {
        li:first-child {
          color: black;
          font-size: ${theme.font.sizes.medium};
          font-weight: ${theme.font.bold};
          position: relative;
          margin-bottom: 1.8rem;

          &::after {
            content: '';
            width: 2.2rem;
            height: 0.4rem;
            background-color: ${theme.colors.secondary};
            position: absolute;
            left: 0;
            top: 2rem;
          }
        }

        li {
          color: #666666;
          margin-bottom: 0.6rem;
        }

        &:not(:last-child) li:not(:first-child):hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }

    span {
      display: block;
      width: 100%;
      text-align: center;
      color: #666666;
      font-size: ${theme.font.sizes.xsmall};
      margin-top: ${theme.spacings.xlarge};
    }
  `}

  @media screen and (max-width: 768px) {
    section {
      grid-template: 1fr 1fr / 1fr 1fr;
      grid-gap: 2.4rem;
    }

    span {
      margin-top: 2rem;
    }
  }
`
