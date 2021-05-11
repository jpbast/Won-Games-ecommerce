import * as Styles from './styles'

import Logo from '../Logo'
import { ReactNode } from 'react'

export type SignInUpProps = {
  children?: ReactNode
}

export default function SignInUp({ children }: SignInUpProps) {
  return (
    <Styles.Wrapper>
      <Logo color="black" size="large" />
      {children}
    </Styles.Wrapper>
  )
}
