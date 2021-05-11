import Link from 'next/link'

import SignInUp from 'components/SignInUp'
import Button from 'components/Button'

export default function SignIn() {
  return (
    <SignInUp>
      <strong>Sign in</strong>
      <form>
        <label htmlFor="email">
          <input id="email" type="text" placeholder="Email" />
          <img src="/img/email-icon.svg" alt="Ícone de email" />
        </label>
        <label htmlFor="password">
          <input id="password" type="password" placeholder="Password" />
          <img
            style={{ top: '30%' }}
            src="/img/password-icon.svg"
            alt="Ícone de senha"
          />
          <Link href="/forgot-password">Forgot your password?</Link>
        </label>
        <Button>Sign in now</Button>
      </form>
      <span>
        Don&apos;t have an account? <Link href="/sign-up">Sign up</Link>
      </span>
    </SignInUp>
  )
}
