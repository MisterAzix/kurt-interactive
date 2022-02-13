import Head from "next/head";
import { globalStyles } from "../shared/styles";

const App = ({ Component, pageProps }) => (
    <>
        <Head>
            <title>Kurt</title>
        </Head>
        {globalStyles}
        <Component {...pageProps} />
    </>
);

export default App;
