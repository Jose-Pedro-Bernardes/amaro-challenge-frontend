import "@/styles/global/reset.css";
import "@/styles/global/globals.css";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/carrinho-de-compras") {
      document.body.classList.add("cart-page");
    } else {
      document.body.classList.remove("cart-page");
    }
  }, [router.pathname]);

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

export default App;
