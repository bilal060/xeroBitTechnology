import "component/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import 'animate.css';
import 'animate.css/animate.min.css';
import type { AppProps } from "next/app";
import MainLayout from "component/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
