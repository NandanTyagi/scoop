import Head from "next/head";
import Header from "./Header";
import NavContainer from "./NavContainer";
import Main from "./Main";
import { useState } from "react";
import MenuContext from "../contexts/MenuContext";

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <MenuContext.Provider value={{menuOpen, setMenuOpen}}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Scoop</title>
        </Head>
        <Header />
        <NavContainer />
        <Main>{children}</Main>
      </MenuContext.Provider>
    </>
  );
};

export default Layout;
