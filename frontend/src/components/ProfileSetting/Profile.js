import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import{setUserId} from "../Redux/Reducers/Auth/index"
import "./Profile.css"
import axios from "axios";



const Profile = () => {

  const dispatch =useDispatch()
  const state = useSelector((state)=>{
      return{
        auth:state.auth
      } 
  })



  return (
    <div className='profile'>
      <h1 className='header'>profile info</h1>
      <div className='profile_user'>
      <div className='profile_img'>
  <img src='' alt='profile-img'/>
  <button className='img-button'>change image</button>

</div>
      <div class="grid-container">

<div class="grid-item">
<input placeholder='first name' onChange={()=>{
  
}} />
</div>
<div class="grid-item">
  <input  placeholder='last name ' onChange={()=>{

  }}/>
</div>
<div class="grid-item">
  <input  placeholder='last name ' onChange={()=>{

  }}/>
</div>
<div class="grid-item">
  <input  placeholder='last name ' onChange={()=>{

  }}/>
</div>
<div class="grid-item">
  <input  placeholder='last name ' onChange={()=>{

  }}/>
</div>
<div class="grid-item">
  <input  placeholder='last name ' onChange={()=>{

  }}/>
</div>
<div class="grid-item">
  <input  placeholder='last name ' onChange={()=>{

  }}/>
</div>
<div class="grid-item">
  <input  placeholder='last name ' onChange={()=>{

  }}/>
</div>

</div>
      
      
    </div>
    </div>
  )
}

export default Profile
