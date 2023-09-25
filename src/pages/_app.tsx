import "@/styles/global/reset.css";
import "@/styles/global/globals.css";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--main-font",
});

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
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default App;
