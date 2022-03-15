import { Html, Head, Main, NextScript } from "next/document";
/* import Script from "next/script"; */

export default function Document() {
    return (
        <Html lang="fr">
            <Head>
                <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer',${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});`,
                    }}
                    /* strategy="worker" */
                ></script>

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
