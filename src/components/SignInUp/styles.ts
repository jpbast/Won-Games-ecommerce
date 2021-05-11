import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 38rem;
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.white};

    div {
      align-self: center;
    }

    a,
    span {
      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.small};
    }

    strong {
      font-size: ${theme.font.sizes.xxlarge};
      font-weight: ${theme.font.bold};
      border-left: 0.7rem solid ${theme.colors.secondary};
      padding-left: ${theme.spacings.xxsmall};
      margin-top: ${theme.spacings.large};
      margin-bottom: ${theme.spacings.small};
      text-align: left;
    }

    form {
      label {
        display: block;
        margin-bottom: ${theme.spacings.xxsmall};
        position: relative;

        input {
          width: 100%;
          background-color: ${theme.colors.lightGray};
          color: #969696;
          border-radius: 2px;
          font-size: ${theme.font.sizes.xsmall};
          padding: 1.4rem 1.4rem 1.4rem 52px;
        }

        img {
          position: absolute;
          width: 24px;
          left: 1.4rem;
          top: 50%;
          transform: translateY(-50%);
        }

        a {
          display: block;
          text-align: right;
          margin-top: ${theme.spacings.xxsmall};
          margin-bottom: ${theme.spacings.small};
          transition: 0.2s;

          &:hover {
            color: #000088;
          }
        }
      }
    }

    form + span {
      margin-top: ${theme.spacings.xsmall};
      text-align: center;

      a {
        border-bottom: 1px solid ${theme.colors.secondary};
        color: ${theme.colors.secondary};
        transition: 0.2s;
      }

      a:hover {
        border-bottom: 1px solid #00bb98;
        color: #00bb98;
      }
    }
  `}
`
