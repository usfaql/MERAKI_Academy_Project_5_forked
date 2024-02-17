import React, { useState } from 'react';
import './style.css';
function Home() {
  const [selected , setSelected] = useState('allgym');

  const generateGymBox = () => {
    const gymBoxes = [];
  
    for (let i = 0; i < 15; i++) {
      let randomMember = Math.floor(Math.random() * 50);
      console.log(randomMember);
      gymBoxes.push(
        <div className='gym-viewer' key={i}>
          <p className='name-gym'>Gym {i+1}</p>
          <p className='desc-gym'>test Paragraph Desc</p>
          <p className='member-in-gym'>{randomMember}/50 Member</p>
          <button className='button-join'>Join</button>
        </div>
      );
    }
  
    return gymBoxes;
  };

  return (
    <div className='contener-home'>
      <div>
        <ul className='contener-navbar-home'>
            <li className={selected === "gym" ? "nav-home gyms-selected": "nav-home gyms"} onClick={()=>{
              setSelected("gym")
            }}>Gyms</li>
            <li className={selected === "private" ? "nav-home private-selected" : "nav-home private"} onClick={()=>{
              setSelected("private")
            }}>Private</li>
            <li className={selected === "allgym" ? "nav-home all-gyms-selected" : "nav-home all-gyms"} onClick={()=>{
              setSelected("allgym")
            }}>All Gyms</li>
        </ul>
      </div>

      <div className='contener-gym-viewer'>
        
        {generateGymBox()}

      </div>
      <div style={{display:"flex" , margin : "0 100px 0 100px", justifyContent:"center" ,gap:"20px", alignItems:"center", textAlign:"center"}}>
        <button style={{backgroundColor:"#A1E533", border:"0",borderRadius:"4px"}}>back</button>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>5</div>
        <button style={{backgroundColor:"#A1E533", border:"0",borderRadius:"4px"}}>Next</button>

      </div>
    </div>
  )
}

export default Home
