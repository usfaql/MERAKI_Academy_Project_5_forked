import React, { useEffect, useState } from 'react'
import './UserInGymSettings.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function UserInGymSettings() {
  const {gymid} = useParams();
  const [userInGym, setUserInGym] = useState(null);
  const state = useSelector((state)=>{
    return{
    userId : state.auth.userId,
    token : state.auth.token
    }
  })

  const config = {
    headers: { Authorization: `Bearer ${state.token}` }
  }
  useEffect(()=>{
    axios.get(`http://localhost:5000/gyms/${gymid}/user`, config).then((result) => {
      setUserInGym(result.data.users);
      console.log(result.data.users);
    }).catch((err) => {
      console.log(err);
    });
  },[]);
   const viewUserInList = ()=>{
    const userArray = [];
    for(let i = 0; i < userInGym?.length; i++){
      const endDate = new Date(userInGym[i].endsub);
      const now = new Date();
      const difference = endDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      userArray.push(
        <>
        <div style={{display:"flex", justifyContent:"space-between", placeItems:"center", width:"100%",padding:"10px"}}>
          <div style={{display:"flex", placeItems:"center", gap:"5px"}}>
            <h6 style={{paddingRight:"10px"}}>{i+1}</h6>
            <img style={{width:"52px", height:"52px", borderRadius:"32px"}} src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'/>
              
              <h5>{userInGym[i].firstname} ({userInGym[i].name_plan})</h5>
          </div>
          <div>
            <span style={{color:"rgb(130,130,130,0.8)"}}>End After {days} Days</span>
          </div>
          <div>
            <button className='btn-user' onClick={()=>{
              axios.post(`http://localhost:5000/gyms/gym/coach`, {gymId : gymid, coachId : userInGym[i].id}, config).then((result) => {
                console.log(i," ===", result);
              }).catch((err) => {
                
              });
            }}>Up to Coach</button>
          </div>
        </div>
        {i+1 < 50 ? <div style={{padding:"0 10px 0 10px", width:"100%",borderBottom:"1px solid #404040"}}></div> : <></>}
        
        </>
      )
    }
    return userArray;
   }

  return (
    
      <div style={{display:"flex", justifyContent:"center", flexDirection:"column", width:"100%",placeItems:"center",padding:"10px"}}>
         <div className='member-in-gym-settings'>
                <p>{viewUserInList().length}/50 User</p>
          </div>
          <input style={{width:"50%", padding:"5px", borderRadius:"4px", border:"0", color:"white", backgroundColor:"#404040"}} placeholder='Search...'/>
        <div style={{width:"100%", height:"80vh", overflowY:"scroll"}}>
          {viewUserInList()}
        </div>
        

      </div>
  )
}

export default UserInGymSettings
