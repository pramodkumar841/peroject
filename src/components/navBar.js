import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
           <nav>
            <ul>
                <li>
                    <NavLink to="/">Our Products <img src='/images/down.png'/></NavLink>
                </li>
                <li>
                    <NavLink to="/">Tools <img src='/images/down.png'/></NavLink>
                </li>
                <li>
                    <NavLink to="/">Blogs</NavLink>
                </li>
                <li>
                    <NavLink to="/">About Us</NavLink>
                </li>
            </ul>
           </nav>
        </>
    )
}

export default NavBar