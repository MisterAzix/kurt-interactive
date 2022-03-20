import { globalStyles } from "../shared/styles";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "../lib/gtag";

import InventoryWrapper from "../lib/context";
import Script from "next/script";

const App = ({ Component, pageProps }) => {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url);
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);

    return (
        <>
            <Head>
                <title>Kurt</title>
                <meta
                    name="description"
                    content="Kurt Interactive est une expérience narrative et interactive dans laquelle vous incarnez Kurt, un enfant de 6 ans qui veut créer et devenir un artiste, mais sa mère ne voit pas les choses comme ça et lui dit que cela demande beaucoup de connaissances et d'être une bonne personne."
                />
                <meta name="theme-color" content="#fefef2" />

                {Component.name !== "Credits" && Component.name !== "Galery" && (
                    <>
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
                    </>
                )}
            </Head>
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GOOGLE_ANALYTICS_ID}`}
            />
            <Script
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${gtag.GOOGLE_ANALYTICS_ID}', {
                            page_path: window.location.pathname,
                            });
                        `,
                }}
            />

            {globalStyles}
            <InventoryWrapper>
                <Component {...pageProps} />
            </InventoryWrapper>
        </>
    );
};

export default App;
