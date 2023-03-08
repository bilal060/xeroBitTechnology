
import 'component/styles/globals.css'
import 'component/styles/responsive.css'
import 'component/styles/style.css'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import { useEffect } from "react";
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.js");
  }, []);
  return <Component {...pageProps} />
}
