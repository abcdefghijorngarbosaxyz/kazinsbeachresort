import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MainDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className="min-h-screen w-full font-raleway text-xs text-gray-800">
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
