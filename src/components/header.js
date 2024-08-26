import React from 'react'
import NavBar from './navBar'
import SignIn from './signIn'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className="headerWrapper">
                <div className="container">
                    <div className="logo-main">
                        <Link to="/">
                            <img src="images/BANKKARO-log.svg" alt="Site Logo"/>
                        </Link>
                    </div>                  
                   <NavBar/>              
                   <SignIn/>
                </div>
            </div>
        </>
    )
}

export default Header