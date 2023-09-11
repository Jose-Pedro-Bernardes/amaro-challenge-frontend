import "@/styles/globals.css";
import "@/styles/reset.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Amaro</title>
        <link rel="shortcut icon" href="amaro.png" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
