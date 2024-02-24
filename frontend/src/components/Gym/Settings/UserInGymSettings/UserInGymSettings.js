import React from 'react'
import './UserInGymSettings.css'
function UserInGymSettings() {

   const viewUserInList = ()=>{
    const userArray = [];

    for(let i = 0; i < 50; i++){

      userArray.push(
        <>
        <div style={{display:"flex", justifyContent:"space-between", placeItems:"center", width:"100%",padding:"10px"}}>
          <div style={{display:"flex", placeItems:"center", gap:"5px"}}>
            <img style={{width:"52px", height:"52px", borderRadius:"32px"}} src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'/>
              <h5>Name User (Lite)</h5>
          </div>
          <div>
            <button className='btn-user'>Upgrade To Coach</button>
            <button className='btn-user kick'>Kick</button>
          </div>
        </div>

        <div style={{padding:"0 10px 0 10px", width:"100%",borderBottom:"1px solid #404040"}}></div>
        </>
      )
    }
    return userArray;
   }
  return (
      <div style={{display:"flex", justifyContent:"center", flexDirection:"column", width:"100%",placeItems:"center",padding:"10px"}}>

        
        {viewUserInList()}

        



      </div>
  )
}

export default UserInGymSettings
