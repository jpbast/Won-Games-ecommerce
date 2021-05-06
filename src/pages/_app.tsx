import { GlobalStyles } from '../styles/globals'
import { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Won Games</title>
      </Head>
      <GlobalStyles>
        <Component {...pageProps} />
      </GlobalStyles>
    </>
  )
}

export default MyApp
