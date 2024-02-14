import React from 'react'
import './style.css'
function NavBar() {
  return (
    <div className='nav-bar'>
        <div>
            <h2 >NUTRI <a style={{color:"#A1E533"}}>FIT</a></h2>
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
            <button className='button'>Login</button>
        </div>
    </div>
  )
}

export default NavBar