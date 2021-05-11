import { ReactNode } from 'react'
import * as Styles from './styles'

type ButtonProps = {
  children: ReactNode
}

export default function Button({ children }: ButtonProps) {
  return <Styles.Wrapper>{children}</Styles.Wrapper>
}
