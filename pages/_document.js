import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="fr">
            <Head>
                <meta property="og:type" content="website" />
                <meta property="og:url" content="kurt-interactive.vercel.app/" />
                <meta property="og:title" content="Kurt" />
                <meta
                    property="og:description"
                    content="Kurt Interactive is a narrative and interactive experience where you play as Kurt, a 6 year old child who wants to create."
                />
                <meta
                    property="og:image"
                    content="https://res.cloudinary.com/hf10ee93o/image/upload/v1644720660/Meta_image_evc8hd.jpg"
                />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="kurt-interactive.vercel.app/" />
                <meta property="twitter:title" content="Kurt" />
                <meta
                    property="twitter:description"
                    content="Kurt Interactive is a narrative and interactive experience where you play as Kurt, a 6 year old child who wants to create."
                />
                <meta
                    property="twitter:image"
                    content="https://res.cloudinary.com/hf10ee93o/image/upload/v1644720660/Meta_image_evc8hd.jpg"
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
