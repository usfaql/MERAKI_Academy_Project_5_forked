import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserId } from "../Redux/Reducers/Auth/index";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./Profile.css";
import Image from 'react-bootstrap/Image';

import axios from "axios";

const Profile = () => {

  const [image, setImage] = useState("");
  const [userinfo, setUserInfo] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [status, setStatus] = useState(false);
  const [goal, setGoal] = useState('');

  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      userId: state.auth.userId,
      token: state.auth.token,
    };
  });
  useEffect(() => {
    console.log("test");
    getUserInfoByUserId();
  }, []);
  const getUserInfoByUserId = () => {
    axios
      .get(`http://localhost:5001/users/info/${state.userId}`, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      })
      .then((result) => {
        console.log(result.data.info[0]);
        setUserInfo(result.data.info[0]);
        setMessage(result.data.message);
      })
      .catch((error) => {
        setMessage(error.result.data);
      });
  };

  const updateUserInfo = async () => {
    try {
      const result =await axios.put(`http://localhost:5001/users/info/${state.userId}`, {
        
        image , 
        weight,
        height,
        goal

      },
      {headers: {
        Authorization: `Bearer ${state.token}`,
      }});

      setUserInfo({...userinfo,...result})//
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
console.log(userinfo.image);
  return (
    <div className="profile">
      <div className="prifile-title">
                <h1 style={{ border: "0" ,}}>profile Info</h1>
              </div>
      {userinfo && (
        <div className="profile_form">
              
          <div className="profile_img">
          <Col xs={6} md={4}>
          <Image src={userinfo.image} roundedCircle />
        </Col>
          <input type="file" onChange={(e)=>{
            setImage(e.target.value)
            console.log(e.target.files[0]);
          }} />
          </div>
           <Form style={{width:"50%"}}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail" style={{textAlign:"start"}}  >
          <Form.Label style={{color:"white",fontSize:"18px"}}>First Name:</Form.Label>
          
          <Form.Control type="text" placeholder="first name" value={userinfo.firstname}style={{  border: "0", color: "#272727"}} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword" style={{textAlign:"start"}}>
          <Form.Label style={{color:"white",fontSize:"18px"}}>Last Name:</Form.Label>
          <Form.Control type="text" placeholder="last name"  value={userinfo.lastname}   style={{ border: "0", color: "#272727"}} />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1" style={{textAlign:"start"}}>
        <Form.Label style={{color:"white",fontSize:"18px"}}>email:</Form.Label>
        <Form.Control placeholder="email"  value={userinfo.email}  style={{ border: "0",color: "#272727"}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2" style={{textAlign:"start"}}>
        <Form.Label style={{color:"white",fontSize:"18px"}}>your goals:</Form.Label>
        <Form.Control defaultValue={userinfo.goal}    onChange={(e)=>{
            setGoal(e.target.value)
            console.log(e.target.value);
          }}  style={{  border: "0", color: "#272727"}}/>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity" style={{textAlign:"start"}}>
          <Form.Label style={{color:"white",fontSize:"18px"}}>height:</Form.Label>
          <Form.Control  defaultValue={userinfo.height} type="number"   onChange={(e)=>{
            setHeight(e.target.value)
          }} style={{border: "0",color: "#272727"}}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip" style={{textAlign:"start"}}>
          <Form.Label style={{color:"white",fontSize:"18px"}}>weight:</Form.Label>
          <Form.Control  defaultValue={userinfo.weight} type="number"  onChange={(e)=>{
            setWeight(e.target.value)
          }}  style={{border: "0", color: "#272727"}}/>
        </Form.Group>
      </Row>

       

      <Button  style={{backgroundColor :"#A1E533",border:"0", color:"black"}} type="submit" onClick={(e)=>{
        e.preventDefault()
        updateUserInfo()
      }}>
        save change
      </Button>
    </Form>


        </div>
      )}

    
    </div>
  );
};

export default Profile;

