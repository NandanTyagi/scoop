import React from 'react'

const LoginDropdown = () => {
    return (
        <div className="login-dropdown-container">
          <span id="metamask-btn" className="nav-link" onClick={(e)=>console.log(e.target.id)}> Metamask</span>
          <br /> <span id="hardware-btn" className="nav-link" onClick={(e)=>console.log(e.target.id)}> Hardware</span>
        </div>
    )
}

export default LoginDropdown
