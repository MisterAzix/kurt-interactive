import { globalStyles } from "../shared/styles";
import Head from "next/head";

import InventoryWrapper from "../lib/context";

const App = ({ Component, pageProps }) => (
    <>
        <Head>
            <title>Kurt</title>
        </Head>
        {globalStyles}
        <InventoryWrapper>
            <Component {...pageProps} />
        </InventoryWrapper>
    </>
);

export default App;
