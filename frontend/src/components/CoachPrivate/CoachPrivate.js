import React,{useEffect,useState} from 'react'
import "./CoachPrivate.css"

const CoachPrivate = () => {
let users=["ahmed","mohammed","ali","abed"]
let messages=["test","test","test","test"]
  return (
    <div className='Coach-Private-Page'>
        <div className='Left-Side'>
            <div className='User-List'>
            {users.map((user,i)=>
                <div className='User-Name'>{user}</div>
            )}
            </div>
            <div className='My-Private'>
                <div className='Private-img'>

                </div>
                <div className='Private-Title'>
                    My Private
                </div>
            </div>
        </div>
        <div className='Right_Side'>
        </div>
    </div>
   
  )
}

export default CoachPrivate