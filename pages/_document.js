import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <title>Kurt</title>
                <meta name="description" content="Kurt Interactive is a narrative and interactive experience where you play as Kurt, a 6 year old child who wants to create." />

                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
