import { globalStyles } from "../shared/styles";
import Head from "next/head";

import InventoryWrapper from "../lib/context";

const App = ({ Component, pageProps }) => (
    <>
        <Head>
            <title>Kurt</title>
            <meta
                name="description"
                content="Kurt Interactive is a narrative and interactive experience where you play as Kurt, a 6 year old child who wants to create."
            />
        </Head>
        {globalStyles}
        <InventoryWrapper>
            <Component {...pageProps} />
        </InventoryWrapper>
    </>
);

export default App;
