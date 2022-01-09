import React, {useContext} from 'react'
import MenuContext from "../contexts/MenuContext";

const Main = ({children}) => {
    const {menuOpen,setMenuOpen} = useContext(MenuContext)
    return (
        <main className={menuOpen?"exp":"cont"}>
            {children}
        </main>
    )
}

export default Main
