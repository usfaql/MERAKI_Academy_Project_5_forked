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
            <h6 style={{paddingRight:"10px"}}>{i+1}</h6>
            <img style={{width:"52px", height:"52px", borderRadius:"32px"}} src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'/>
              
              <h5>Name User (Lite)</h5>
          </div>
          <div>
            <button className='btn-user'>Up to Coach</button>
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
        {viewUserInList()}

      </div>
  )
}

export default UserInGymSettings
