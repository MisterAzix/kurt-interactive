import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="fr">
            <Head>
                <meta
                    name="description"
                    content="Kurt Interactive is a narrative and interactive experience where you play as Kurt, a 6 year old child who wants to create."
                />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://metatags.io/" />
                <meta property="og:title" content="Kurt" />
                <meta
                    property="og:description"
                    content="Kurt Interactive is a narrative and interactive experience where you play as Kurt, a 6 year old child who wants to create."
                />
                <meta
                    property="og:image"
                    content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
                />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://metatags.io/" />
                <meta property="twitter:title" content="Kurt" />
                <meta
                    property="twitter:description"
                    content="Kurt Interactive is a narrative and interactive experience where you play as Kurt, a 6 year old child who wants to create."
                />
                <meta
                    property="twitter:image"
                    content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
                />

                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://use.typekit.net/axx7xmq.css" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
