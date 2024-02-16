import React from 'react'
import './style.css'
function NavBar() {
  return (
    <div className='nav-bar'>
        <div>
            <h2 ><a href='/' style={{textDecoration:"none", color:"white"}}>NUTRI <a style={{color:"#A1E533"}}>FIT</a></a></h2>
        </div>
        <div>
            <lu >
                <lo className='nav-map'>Home</lo>
                <lo className='nav-map'>Service</lo>
                <lo className='nav-map'>About</lo>
                <lo className='nav-map'>Contact</lo>
            </lu>
        </div>

        <div>
        <a href='login' className='link-in-button'><button className='button' >Login</button></a>
        </div>
    </div>
  )
}

export default NavBar