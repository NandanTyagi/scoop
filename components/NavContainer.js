import React, { useContext, useEffect} from 'react'
import Nav from './Nav'
import UpperNav from './UpperNav'
import LogSignBtn from "./LogSignBtn";
import { MenuContext } from "../contexts/MenuContext";


const NavContainer = () => {

    
    const {menuOpen, setMenuOpen} = useContext(MenuContext);
    useEffect(() => {
        console.log('menuOpen',menuOpen)
    }, [menuOpen]);

    return (
        <div className={menuOpen?'nav-container exp':'nav-container cont'}>
            <UpperNav/>
            <LogSignBtn />
            <Nav/>
        </div>
    )
}

export default NavContainer
