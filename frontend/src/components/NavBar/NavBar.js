import React from 'react'
import './style.css'
function NavBar() {
  return (
    <div className='nav-bar'>
        <div>
            <h2><a href='/' style={{textDecoration:"none", color:"white"}}>NUTRI <a style={{color:"#A1E533"}}>FIT</a></a></h2>
        </div>
        <div>
            <lu className="navbar-lu">
                <li className='nav-map'>Home</li>
                <li className='nav-map'>Service</li>
                <li className='nav-map'>About</li>
                <li className='nav-map'>Contact</li>
            </lu>
        </div>

        <div>
        <a href='login' className='link-in-button'><button className='button' >Login</button></a>
        </div>
    </div>
  )
}

export default NavBar
