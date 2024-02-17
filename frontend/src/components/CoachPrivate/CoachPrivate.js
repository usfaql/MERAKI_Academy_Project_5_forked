import React,{useEffect,useState} from 'react'
import "./CoachPrivate.css"

const CoachPrivate = () => {
let users=["ahmed","mohammed","ali","abed","ahmed","mohammed","ali","abed","ahmed","mohammed","ali","abed",]
let messages=["test","test","test","test"]
  return (
    <div className='Coach-Private-Page'>
        <div className='Left-Side'>
            <div className='User-List'>
            {users.map((user,i)=>
                <div className='User-Name'># {user}</div>
            )}
            </div>
            <div className='My-Private'>
                <div className='Private-img'>

                </div>
                <div className='Private-Title'>
                    My Private
                </div>
                <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
</svg>
            </div>
        </div>
        <div className='Right_Side'>
        </div>
    </div>
   
  )
}

export default CoachPrivate