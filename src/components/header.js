import React from 'react'
import NavBar from './navBar'
import SignIn from './signIn'

const Header = () => {
    return (
        <>
            <header className='header'>
                <div className='container'>
                    <div className='itemBox algnflexArea disflexArea' >
                        <div className='logo'>
                            <img src='/images/logo.png' />
                        </div>    
                        <NavBar/>    
                        <SignIn/>                
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header