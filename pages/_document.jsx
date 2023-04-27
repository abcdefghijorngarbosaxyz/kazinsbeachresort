import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MainDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="title" content="Kazin's Beach Resort" />
          <meta
            name="description"
            content="The best getaway you can dream of. Offering an escape from the urban fray and a boutique travel experience that's unlike any other. Feel the sea, sun, and sand. Enjoy your vacation with your family or partner."
          />

          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en-PH" />
          <meta
            property="og:url"
            content="https://www.kazinsbeachresort.com/"
          />
          <meta property="og:title" content="Kazin's Beach Resort" />
          <meta property="og:site_name" content="Kazin's Beach Resort" />
          <meta
            property="og:description"
            content="The best getaway you can dream of. Offering an escape from the urban fray and a boutique travel experience that's unlike any other. Feel the sea, sun, and sand. Enjoy your vacation with your family or partner."
          />
          <meta
            property="og:image"
            content="https://www.kazinsbeachresort.com/assets/images/featured/hero-0.jpg"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://www.kazinsbeachresort.com/"
          />
          <meta property="twitter:title" content="Kazin's Beach Resort" />
          <meta
            property="twitter:description"
            content="The best getaway you can dream of. Offering an escape from the urban fray and a boutique travel experience that's unlike any other. Feel the sea, sun, and sand. Enjoy your vacation with your family or partner."
          />
        </Head>
        <body className="min-h-screen w-full font-raleway text-xs text-gray-800">
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
