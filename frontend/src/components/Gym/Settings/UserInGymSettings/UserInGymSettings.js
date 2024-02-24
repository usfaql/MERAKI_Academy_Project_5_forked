import React from 'react'

function UserInGymSettings() {
  return (
    <div>
      <div>

        <div style={{display:"flex", justifyContent:"space-between", placeItems:"center"}}>
          <div style={{display:"flex"}}>
            <img style={{width:"64px", height:"64px", borderRadius:"32px"}} src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'/>

              <h4>Name User (Lite)</h4>
            
          </div>
          <div>
            <button>Upgrade To Coach</button>
            <button>Kick</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default UserInGymSettings
