import 'component/styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
