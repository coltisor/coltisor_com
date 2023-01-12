import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Jacques+Francois&display=optional"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Jost&display=optional"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Inconsolata&display=optional"
        />
      </Head>
      <body className="bg-[#131313] text-[#f2f2f2] scrollbar-hide">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
