import Head from "next/head";
import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
const Layout = ({ children }) => {
  return (
    <>
      <Head>
      <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        <title>Scoop</title>
      </Head>
      <Header />
      <Nav />
      <Main>
      {children}
      </Main>
    </>
  );
};

export default Layout;
