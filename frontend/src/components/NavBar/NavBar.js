import React from 'react'
import './style.css'
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
function NavBar() {
  const navigate = useNavigate();
  const userInfo = localStorage.getItem("userInfo");
  const covertUserInfoToJson = JSON.parse(userInfo);
  const state = useSelector((state)=>{
    return{
      isLoggedIn : state.auth.isLoggedIn,
      role:state.auth.role
    }
  })
  return (
    <div className='nav-bar'>
        <div>
            <h2 style={{fontWeight:"bold",margin:"0"}}><a href='/' style={{textDecoration:"none", color:"white"}}>NUTRI <span style={{color:"#A1E533"}}>FIT</span></a></h2>
        </div>
        <div style={{ display:"flex", justifyContent:"center"}}>
          {state.isLoggedIn ?
            <ul className="navbar-lu">
                <li className='nav-map'>Recipes</li>
                <li className='nav-map' onClick={()=>{
                  navigate("/home")
                }}>Dashboard</li>
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

        <div style={{textAlign:"end"}}>
          {state.isLoggedIn? <ul style={{listStyle: "none", margin :"0", display:"flex", justifyContent:"center", alignItems:"center", gap:"5px", padding:"0"}}>
            <img style={{width:"48px"}} src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'/>
            <li>{covertUserInfoToJson.nameUser}</li></ul>
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
