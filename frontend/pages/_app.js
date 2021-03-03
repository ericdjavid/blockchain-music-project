import App from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
import { getCategories } from "../utils/api";
import "../styles/index.css";
import AudioPlayer from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css';
import lolcat from "../components/ProductsList";

//this is the endpoint for updating the pages you want, that enables things like :
// - Persisting layout between page changes
// - Keeping state when navigating pages
// - Custom error handling using componentDidCatch
// - Inject additional data into pages
// - Add global CSS

const MyApp = ({ Component, pageProps }) => { //components and props passed to the component
  return (
      <div>

    <Layout categories={pageProps.categories}>
      <Head>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.css"
        />
        <script src="https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.js" />
      </Head>
      <div> {lolcat}</div>
      <Component {...pageProps} /> {/* destructuring the pages propos */}
    </Layout>
          <AudioPlayer
              src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
              // Try other props!
          />
      </div>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So [[...slug]] pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const categories = await getCategories();
  // Pass the data to our page via props
  return { ...appProps, pageProps: { categories, path: ctx.pathname } };
};

export default MyApp;
