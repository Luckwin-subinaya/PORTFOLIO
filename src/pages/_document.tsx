import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head>
        <link rel="icon" href="/static/logo.png" />
        <link rel="apple-touch-icon" href="/static/logo.png" />
      </Head>
      <body className="bg-background text-white antialiased selection:bg-accent selection:text-background">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
