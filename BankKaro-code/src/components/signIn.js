import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <>
      <div className="sign-in">
        <Link className="custom-btn"><span>Sign In</span></Link>
        <img src="images/user.png" alt="user" className="user" />
      </div>
    </>
  )
}

export default SignIn