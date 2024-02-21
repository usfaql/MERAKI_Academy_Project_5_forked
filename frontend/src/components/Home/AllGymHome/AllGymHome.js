import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import logoGym from '../../assets/image-gym.jpg';
import axios, { all } from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function AllGymHome() {
    const navigate = useNavigate();
    const [allGym, setAllGym] = useState([]);
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
      axios.get('http://localhost:5000/gyms', config).then((result) => {
        setAllGym(result.data.gym);
      }).catch((err) => {
        
      });
    },[])
      const generateGymBox = () => {
        const gymBoxes = [];
        {allGym.length !== 0 && allGym.map((e,i)=>{
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
                console.log(e);
                 navigate(`/${e.id}/plan`);
              }}>Join</button>
            </Card.Body>
          </Card>
        </Col>
        );
        })
        }
        return <Row xs={1} md={5} className="g-2">{gymBoxes}</Row>
      };
  return (
    <div>
      {generateGymBox()}
    </div>
  )
}

export default AllGymHome
