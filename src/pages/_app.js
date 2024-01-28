import Head from "next/head";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>HackMOL 5.0</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;