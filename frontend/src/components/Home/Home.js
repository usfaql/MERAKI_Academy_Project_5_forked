import React, { useState } from 'react';
import './style.css';
import Pagination from 'react-bootstrap/Pagination';
import GymHome from './GymHome/GymHome';

import PrivateHome from './PrivateHome/PrivateHome';


import AllGymHome from './AllGymHome/AllGymHome';
function Home() {
  const [selected , setSelected] = useState('allgym');
  const items = [];
  const [PageNumber, setPageNumber] = useState(1); 
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} linkStyle={PageNumber === number ? {backgroundColor:"#A1E533", border:"0", color:"#101010"} : {backgroundColor:"#404040",border:"0", color:"white"}}  active={number === PageNumber} onClick={()=>{
        setPageNumber(number);
      }}>
        {number}
      </Pagination.Item>
    );
  }

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
        {selected == 'gym' && <GymHome/>}
        {selected == 'private' && <PrivateHome/>}
        {selected == 'allgym' && <AllGymHome/>}
      </div>
      <div style={{display:"flex" , margin : "0 100px 0 100px", justifyContent:"center" ,gap:"20px", alignItems:"center", textAlign:"center"}}>

        <Pagination>{items}</Pagination>

      </div>
    </div>
  )
}

export default Home
