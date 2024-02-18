import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import logoGym from '../../assets/image-gym.jpg';
import './style.css'
function GymHome() {

    const generateGymBox = (gymUser) => {

        gymUser = ["k"];

        
        const createGym = [];
        if(!gymUser.length){
            createGym.push(
                <Col key={1}>
                <Card linkStyle={{backgroundColor:"#A1E533"}}>
                  <Card.Body>
                    <Card.Title style={{fontWeight:"bold"}}>Create Gym</Card.Title>
                    <Card.Text className='text-card'>
                    You can create a gym, add coaches and players, and follow them
                    </Card.Text>
                    <button style={{width:"60%", border:"0", backgroundColor:"#101010",color: "white", borderRadius:"4px"}}>Create New Gym</button>
                  </Card.Body>
                </Card>
              </Col>
              );
              return <Row xs={1} md={5} className="g-2">{createGym}</Row>
        }else{
            const gymBoxes = [];
            for (let i = 0; i < 3; i++) {
              let randomMember = Math.floor(Math.random() * 50);
              console.log(randomMember);
              gymBoxes.push(
              <Col key={1}>
              <Card linkStyle={{backgroundColor:"#A1E533"}}>
                <Card.Img variant="top" className='image-gym-in-card' src={logoGym} />
                <Card.Body>
                  <Card.Title style={{fontWeight:"bold"}}>Gym {i+1}</Card.Title>
                  <Card.Text className='text-card'>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <button style={{width:"60%", border:"0", backgroundColor:"#101010",color: "white", borderRadius:"4px"}}>Open</button>
                </Card.Body>
              </Card>
            </Col>
            );
            }
            return <Row xs={1} md={5} className="g-2">{gymBoxes}</Row>
        }


      };


  return (
    <div className='contenier-gyms'>
      {generateGymBox()}
    </div>
  )
}

export default GymHome
