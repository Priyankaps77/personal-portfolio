'use client';
import "../styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Head from "next/head";
import "react-datepicker/dist/react-datepicker.css";

function MyApp({ Component, pageProps }) {
  // const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/portal";

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"
        ></meta>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
