import React from 'react'
import './style.css'
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
function NavBar() {
const navigate=useNavigate()
  const state = useSelector((state)=>{
    return{
      isLoggedIn : state.auth.isLoggedIn,
      role:state.auth.role
    }
  })
console.log("role",state.role);
  return (
    <div className='nav-bar'>
        <div>
            <h2 style={{fontWeight:"bold",margin:"0"}}><a href='/' style={{textDecoration:"none", color:"white"}}>NUTRI <a style={{color:"#A1E533"}}>FIT</a></a></h2>
        </div>
        <div>
          {state.isLoggedIn ?
            <lu className="navbar-lu">
                <li className='nav-map'>Recipes</li>
                <li className='nav-map'>Dashboard</li>
                <li className='nav-map end'>Settings</li>
            </lu>
            :
            <lu className="navbar-lu">
                <li className='nav-map'>Home</li>
                <li className='nav-map'>Service</li>
                <li className='nav-map'>About</li>
                <li className='nav-map end'>Contact</li>
            </lu>
          }
        </div>

        <div>
          {state.isLoggedIn? <lu style={{listStyle: "none" , maxWidth: "12px"}}><li>Yousef A.</li></lu>: <button onClick={()=>{
            navigate('login')
          }}  className='button' >Login</button>}
        
        </div>
    </div>
  )
}

export default NavBar
