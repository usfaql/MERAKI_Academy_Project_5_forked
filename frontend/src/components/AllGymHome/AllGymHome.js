import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import logoGym from '../assets/image-gym.jpg';
import PageItem from 'react-bootstrap/PageItem'

function AllGymHome() {

    const generateGymBox = () => {
        const gymBoxes = [];
      
        for (let i = 0; i < 10; i++) {
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
              <button style={{width:"60%", border:"0", backgroundColor:"#101010",color: "white", borderRadius:"4px"}}>Join</button>
            </Card.Body>
          </Card>
        </Col>
        );
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
