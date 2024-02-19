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
            <h2 style={{fontWeight:"bold",margin:"0"}}><a href='/' style={{textDecoration:"none", color:"white"}}>NUTRI <span style={{color:"#A1E533"}}>FIT</span></a></h2>
        </div>
        <div>
          {state.isLoggedIn ?
            <ul className="navbar-lu">
                <li className='nav-map'>Recipes</li>
                <li className='nav-map'>Dashboard</li>
                <li className='nav-map end'>Settings</li>
            </ul>
            :
            <ul className="navbar-lu">
                <li className='nav-map'>Home</li>
                <li className='nav-map'>Service</li>
                <li className='nav-map'>About</li>
                <li className='nav-map end'>Contact</li>
            </ul>
          }
        </div>

        <div>
          {state.isLoggedIn? <ul style={{listStyle: "none", margin :"0", width:"97px", whiteSpace:"nowrap", overflow:"hidden"}}>
            <li>Yousef A.</li></ul>
            : 
            <button className='button' onClick={()=>{
              navigate('login')
            }}>Login</button>
            }
        </div>
    </div>
  )
}

export default NavBar
