import Layout from "../components/Layout";
import "../styles/globals.css";
import {menu,line, line1, line2, line3,} from "../styles/Hamburger.modules.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
