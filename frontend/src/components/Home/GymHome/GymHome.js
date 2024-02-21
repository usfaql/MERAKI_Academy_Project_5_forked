import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import logoGym from '../../assets/image-gym.jpg';
import './style.css'
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
function GymHome() {
    const navigate = useNavigate();
    const [myGym, setMyGym] = useState([]);

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
      axios.get(`http://localhost:5000/gyms/user/${state.userId}`, config).then((result) => {
        setMyGym(result.data.gyms);
        console.log(result.data);
      }).catch((err) => {
        console.log("Error", err);
      });
    },[])
    

    const generateGymBox = () => {
      const gymBoxes = [];
      {myGym.length !== 0 && myGym.map((e,i)=>{
        gymBoxes.push(
        <Col key={1}>
        <Card>
          <Card.Img variant="top" className='image-gym-in-card' src={e.image} />
          <Card.Body>
            <Card.Title style={{fontWeight:"bold"}}>{e.name}</Card.Title>
            <Card.Text className='text-card'>
              {e.description}
            </Card.Text>
            <button style={{width:"60%", border:"0", backgroundColor:"#101010",color: "white", borderRadius:"4px"}} onClick={()=>{
              navigate(`/gym/${e.gym_id}`);
            }}>Open</button>
          </Card.Body>
        </Card>
      </Col>
      );
      })
      }
      return <Row xs={1} md={5} className="g-2">{gymBoxes}</Row>
    };


  return (
    <div className='contenier-gyms'>
      {generateGymBox()}
    </div>
  )
}

export default GymHome
