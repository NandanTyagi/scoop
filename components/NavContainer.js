import React from 'react'
import Nav from './Nav'
import UpperNav from './UpperNav'

const NavContainer = () => {
    return (
        <div className='nav-container'>
            <UpperNav/>
            <Nav/>
        </div>
    )
}

export default NavContainer
