import React, {useRef, useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'
import './style.css';
import axios from 'axios';
import { useSelector } from 'react-redux';
// import { IoSettingsOutline } from "react-icons/io5";
function GymGroup() {
    const {gymid} = useParams();
    const reversChat = useRef(null);
    const [allCoachs, setAllCoachs] = useState(null);
    const [allUsers, setAllUsers] = useState(null);
    const [infoGym, setInfoGym] = useState(null);
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
        if(reversChat.current){
            reversChat.current.scrollTop = reversChat.current.scrollHeight;
        };

        axios.get(`http://localhost:5000/gyms/${gymid}/coach`,config).then((result) => {
            setAllCoachs(result.data.coachs)
        }).catch((err) => {
            console.log(err);
        });
        axios.get(`http://localhost:5000/gyms/${gymid}/user`, config).then((result) => {
            setAllUsers(result.data.users)
        }).catch((err) => {
            console.log(err);
        });
        axios.get(`http://localhost:5000/gyms/${gymid}`, config).then((result) => {
            setInfoGym(result.data.oneGym)
        }).catch((err) => {
            
        });
        axios.get(`http://localhost:5000/gyms/plan/${gymid}`,config).then((result) => {
            
        }).catch((err) => {
            
        });
    },[])

    const generateChatGym = ()=>{
        const chatLite = [];
        for (let i = 0; i < 20; i++) {
            chatLite.push(
                <div style={{display:"flex", width:"100%" , marginBottom:"10px", marginTop:"10px"}}>
                    <img src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png' style={{width:"52px", height:"52px"}}/>
                    <div style={{backgroundColor:"gray", width:"90%", borderRadius:"4px", textAlign:"start", padding:"5px 10px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus tincidunt auctor. Nulla maximus velit sit amet est sagittis efficitur. Nam tellus nisl, sollicitudin vitae turpis a, auctor suscipit nisl. Nam id lacus in ex ultrices laoreet a vitae purus. Proin tristique velit odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent rutrum aliquam lectus eget porta. Quisque viverra efficitur molestie. Duis a efficitur tortor, nec tincidunt purus. Nunc mattis arcu sit amet tincidunt porttitor. Suspendisse congue semper lorem, eu consectetur ex tempor at. {i}</div>
                </div>
            )
        }

        return chatLite;
        
    }

    const listCoachs = ()=>{
        const coachArr = [];
        for(let i = 0; i < allCoachs?.length; i++){
            coachArr.push(
                        <>
                        <li style={{padding:"5px 15px 0px"}}>{allCoachs[i].firstname + " " + allCoachs[i].lastname}</li>
                        <div style={{borderBottom:"1px solid #373737", margin:"5px 20px"}}></div>
                        </>
            )
        }
        return coachArr;
    }

    const listUsers = ()=>{
        const coachArr = [];
        for(let i = 0; i < allUsers?.length; i++){
            coachArr.push(
                        <>
                        <li style={{padding:"5px 15px 0px"}}>{allUsers[i].firstname + " " + allUsers[i].lastname}</li>
                        <div style={{borderBottom:"1px solid #373737", margin:"5px 20px"}}></div>
                        </>
            )
        }
        return coachArr;
    }

  return (
    <div className='body-group'>
        <div className='group-contener'>
            <div className='contener-room'>
            <div>
            <h6 className='head'>Room</h6>
            <ul >
                <li style={{fontWeight:"bold", marginBottom:"5px", marginTop:"5px", cursor:"pointer"}}>#Lite Room</li>
                <div style={{borderBottom:"1px solid #373737",margin:"5px 20px"}}></div>
                <li style={{fontWeight:"bold", marginBottom:"5px", marginTop:"5px" , cursor:"pointer"}}>#Gold Room</li>
                <div style={{borderBottom:"1px solid #373737",margin:"5px 20px"}}></div>
                <li style={{fontWeight:"bold", marginTop:"5px" , cursor:"pointer"}}>#Premium Room</li>
            </ul>
            </div>
            
            <div className='control-gym'>
                <div style={{display:"flex", alignItems:"center", gap:"10px"}}> 
                    <img style={{width:"48px", height:"48px", borderRadius:"24px"}} src="https://img.freepik.com/free-vector/cute-man-lifting-barbell-gym-cartoon-vector-icon-illustration-people-sport-icon-concept-isolated_138676-6223.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708041600&semt=ais"/>
                    <h6>{infoGym?.name}</h6>
                </div>
                
                <div style={{display:"flex", gap:"10px",paddingRight:"10px"}}>
                    <div onClick={()=>{
                            console.log("Settings");
                        }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
                        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
                        </svg>
                    </div>
                    
                    <div onClick={()=>{
                            console.log("Exit");
                        }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
                        <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                        </svg>
                    </div>
                   
                </div>
                
            </div>
            </div>
            <div className='contener-chat'>
                    <div style={{ backgroundColor:"#373737",height:"7%", alignItems:"center", display:"flex"}}>
                        <h6 style={{textAlign:"start", paddingLeft:"5px"}}>#Name Room</h6>
                    </div>
                    <div ref={reversChat} style={{ backgroundColor:"#202020",height:"73%", alignItems:"center", display:"flex", flexDirection:"column", overflowY:"scroll", padding:"5px"}}>
                    {generateChatGym()}
                    </div>
                    <div style={{ backgroundColor:"#373737",height:"20%", alignItems:"center", display:"flex", justifyContent:"center", flexDirection:"column", padding:"10px"}}>
                        <textarea style={{width:"95%", height:"50%", borderRadius:"4px"}}/>
                        <div style={{height:"45%", display:'flex',justifyContent:"space-between", width:"95%", alignItems:"center"}}>
                            <div style={{display:"flex", gap:"5px"}}>
                                <button className='btn-gym-chat'>Image</button>
                                <button className='btn-gym-chat'>Video</button>
                                <button className='btn-gym-chat'>File</button>
                            </div>
                            <button className='btn-gym-chat'>Send</button>
                        </div>
                    </div>
            </div>
            <div className='contener-member'>
                <div>
                    <h6 className='head'>Coach</h6>
                    <ul>
                        {listCoachs()}
                        
                    </ul>
                
                </div>
                <div>
                    <h6 className='head'>User</h6>
                    <ul>
                       {listUsers()}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GymGroup