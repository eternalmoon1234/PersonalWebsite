import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <meta
          name="description"
          content="Hey! I'm Gautam, a high school student, passionate about startups, software, and open source."
        />
        <meta
          name="keywords"
          content="gautam,paranjape,portfolio,software,developer"
        />
        <meta name="og:title" content="Gautam Paranjape" />
        <meta
          name="og:description"
          content="Hey! I'm Gautam, a high school student, passionate about startups, software, and open source."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gautam Paranjape" />
        <meta
          name="twitter:description"
          content="I'm Gautam, a high school student, passionate about startups, software, and open source."
        />
        <meta name="twitter:image" content="/meta-img.png" />
        <meta name="theme-color" content="#5FA8FF" />
        <link rel="shortcut icon" href="/logo.png" />
        <meta name="og:image" content="/meta-img.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
