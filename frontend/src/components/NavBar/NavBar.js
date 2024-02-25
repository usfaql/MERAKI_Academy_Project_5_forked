import React from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { setLogout } from '../Redux/Reducers/Auth';
function NavBar() {
  const navigate = useNavigate();
  const userInfo = localStorage.getItem("userInfo");
  const covertUserInfoToJson = JSON.parse(userInfo);
  const dispatch = useDispatch()
  const state = useSelector((state)=>{
  return{
      isLoggedIn : state.auth.isLoggedIn,
      role:state.auth.role
    }
  });

  return (
    <div className='nav-bar'>
        <div>
            <h2 style={{fontWeight:"bold",margin:"0"}}><a href='/' style={{textDecoration:"none", color:"white"}}>NUTRI <span style={{color:"#A1E533"}}>FIT</span></a></h2>
        </div>
        <div style={{ display:"flex", justifyContent:"center"}}>
          {state.isLoggedIn ?
            <ul className="navbar-lu">
                <li className='nav-map' onClick={()=>{
                  navigate("/recipe")
                }}>Recipes</li>
                <li className='nav-map' onClick={()=>{
                  navigate("/home")
                }}>Dashboard</li>
                <li className='nav-map end' onClick={()=>{
                  navigate('/profile')
                }}>Settings</li>
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
          {state.isLoggedIn? 
          <div style={{display:"flex" , gap:"10px"}}>
            <ul style={{listStyle: "none", margin :"0", display:"flex", justifyContent:"center", alignItems:"center", gap:"5px", padding:"0"}}>
            <img style={{width:"48px"}} src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'/>
            <div>
              <ul style={{textAlign:"start", listStyle: "none",padding:"0"}}>
                <li>{covertUserInfoToJson && covertUserInfoToJson.nameUser}</li>
                <li style={{fontSize:"10px"}}>{covertUserInfoToJson?.role === 3 && "<COACH>" || covertUserInfoToJson?.role === 2 && "<USER>"}</li>
              </ul>
            </div>
            </ul>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <button style={{border:"0", borderRadius:"4px", fontWeight:"bold", backgroundColor:"rgb(255,100,100)"}} onClick={()=>{
              localStorage.clear();
              dispatch(setLogout());
              navigate('/login');
            }}>Logout</button>
            </div>
            </div>
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
