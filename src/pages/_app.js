import "swiper/css";
import Head from "next/head";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <style>{`
          body {
            zoom: 75%;
          }
        `}</style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
