import { globalStyles } from "../shared/styles";
import Head from "next/head";
import { useRouter } from "next/router";

import InventoryWrapper from "../lib/context";

const App = ({ Component, pageProps }) => {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url) => {
            window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
                page_path: url,
            });
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
            {globalStyles}
            <InventoryWrapper>
                <Component {...pageProps} />
            </InventoryWrapper>
        </>
    );
};

export default App;
