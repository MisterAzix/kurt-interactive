import { globalStyles } from "../shared/styles";
import Head from "next/head";

import InventoryWrapper from "../lib/context";

const App = ({ Component, pageProps }) => (
    <>
        <Head>
            <title>Kurt</title>
            <meta
                name="description"
                content="Kurt Interactive est une expérience narrative et interactive dans laquelle vous incarnez Kurt, un enfant de 6 ans qui veut créer et devenir un artiste, mais sa mère ne voit pas les choses comme ça et lui dit que cela demande beaucoup de connaissances et d'être une bonne personne."
            />
        </Head>
        {globalStyles}
        <InventoryWrapper>
            <Component {...pageProps} />
        </InventoryWrapper>
    </>
);

export default App;
