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
                    content="Kurt Interactive est une expérience narrative et interactive dans laquelle vous incarnez Kurt, un enfant de 6 ans qui veut créer et devenir un artiste, mais sa mère ne voit pas les choses comme ça et lui dit que cela demande beaucoup de connaissances et d'être une bonne personne."
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
                    content="Kurt Interactive est une expérience narrative et interactive dans laquelle vous incarnez Kurt, un enfant de 6 ans qui veut créer et devenir un artiste, mais sa mère ne voit pas les choses comme ça et lui dit que cela demande beaucoup de connaissances et d'être une bonne personne."
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
