import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        
        <meta charSet="utf-8" />
        {/* HTML Meta Tags */}
        <meta
          name="description"
          content="HackMol 5.0 is fifth-edition of community-focused 30-hour hackathon organized by DSC NIT Jalandhar. Tailored to cater to both beginners and experts, this event provides an excellent opportunity to showcase your skills and be part of a competitive yet inclusive developer community. "
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="HackMOL 5.0" />
        <meta
          property="og:description"
          content="HackMol 5.0 is fifth-edition of community-focused 30-hour hackathon organized by DSC NIT Jalandhar. Tailored to cater to both beginners and experts, this event provides an excellent opportunity to showcase your skills and be part of a competitive yet inclusive developer community. "
        />
        <meta property="og:url" content="https://hackmol.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="HackMOL 5.0" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:title" content="HackMOL 5.0" />
        <meta
          name="twitter:description"
          content="HackMol 5.0 is fifth-edition of community-focused 30-hour hackathon organized by DSC NIT Jalandhar. Tailored to cater to both beginners and experts, this event provides an excellent opportunity to showcase your skills and be part of a competitive yet inclusive developer community. "
        />
        <meta name="twitter:site" content="@hackmol" />
        <meta name="twitter:url" content="https://hackmol.com" />
        <meta name="twitter:domain" content="https://hackmol.com" />
        <meta name="twitter:app:name:iphone" content="HackMOL 5.0" />
        <meta name="twitter:app:name:ipad" content="HackMOL 5.0" />

        <link rel="icon" href="/GDSCLogo.svg" alt="GDSC Logo" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}