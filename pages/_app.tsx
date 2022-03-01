import GlobalStyles from '../src/styles/global'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  GlobalStyles();

  return (
    <Component {...pageProps} />
  )
}

export default MyApp
