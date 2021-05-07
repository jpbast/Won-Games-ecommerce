import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 29.4rem;
  height: 21.7rem;
  display: flex;
  flex-direction: column;

  section {
    width: 100%;
    justify-content: space-between;
    display: flex;
    padding: 1rem 1.6rem;
  }

  ${({ theme }) => css`
    background-color: ${theme.colors.white};

    strong {
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.black};
    }

    span {
      font-weight: ${theme.font.normal};
      font-size: ${theme.font.sizes.xsmall};
      color: #bbbbbb;
    }
  `}
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
`

export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1.2rem;

  img {
    width: 2rem;
    height: 1.835rem;
  }
  ${({ theme }) => css`
    span {
      background-color: ${theme.colors.secondary};
      border-radius: 2px;
      color: white;
      display: inline-block;
      width: 7.8rem;
      line-height: 2.2rem;
      text-align: center;
    }
  `}
`
