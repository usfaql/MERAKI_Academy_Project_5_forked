import React from 'react'
import { useParams } from 'react-router-dom'
import './style.css'
function GymGroup() {
    const {gymid} = useParams();
  return (
    <div className='body-group'>
        <div className='group-contener'>
            <div className='contener-room'>
            <div>
            <h6>Room</h6>
            <ul>
                <li>Lite</li>
                <li>Gold</li>
                <li>Premuim</li>
            </ul>
            </div>
            
            <div className='control-gym'>
                <h6>Gym Name</h6>
                <div style={{display:"flex"}}>
                    <h6>S</h6>
                    <h6>L</h6>
                </div>
                
            </div>
            </div>
            <div className='contener-chat'>
                <div>
                    chat
                </div>
            </div>
            <div className='contener-member'>
                <div>
                    <h6>Coach</h6>
                    <ul>
                        <li>Hamzeh Odeh</li>
                        <li>Mohammad Odat</li>
                        <li>Khaled Anas</li>
                    </ul>
                
                </div>
                <div>
                    <h6>User</h6>
                    <ul>
                        <li>Omar Ameer</li>
                        <li>Bashar Nehad</li>
                        <li>Adam Adnan</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GymGroup