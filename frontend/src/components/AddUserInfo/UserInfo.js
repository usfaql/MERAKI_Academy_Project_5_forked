import React from 'react'
import "./UserInfo.css"
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";



import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const UserInfo  = () => {
    const [image, setImage] = useState("");
    const [userinfo, setUserInfo] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [status, setStatus] = useState(false);
    const [goal, setGoal] = useState('');
    const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      userId: state.auth.userId,
      token: state.auth.token,
    };
  });
  useEffect(() => {
    createUserInfo();
  }, []);
  

const createUserInfo =async()=>{
    try {

        const result =await axios.put(`http://localhost:5000/users/info/create`, 
{
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



  return (
    <div className='user_info'>
        <div className='userinfo_form'>
        {userinfo && (
    <Stack gap={3}>
        
      
      <h1 className="Title" style={{fontFamily:'-moz-initial'}}>Extra information</h1>

      <div className="profile_img">
          <Col xs={6} md={4}>
          <Image src={userinfo.image} roundedCircle />
        </Col>
          <input type="file" onChange={(e)=>{
            setImage(e.target.value)
            console.log(e.target.files[0]);
          }} />
          </div>
        <div className="height-width">
          <div className="height">
            <Form.Label>Height:</Form.Label>
            <Form.Control onChange={(e)=>{
              setHeight(e.target.value)
            }}
            
              type="number"
              style={{
                backgroundColor: "#1e1e1e",
                border: "0",
                color: "white",
              }}
            />
          </div>
          <div className="weight">
            <Form.Label>weight:</Form.Label>
            <Form.Control onChange={(e)=>{
setWeight(e.target.value)
            }}
              type="number"
              style={{
                backgroundColor: "#1e1e1e",
                border: "0",
                color: "white",
              }}
            />
          </div>
        </div>
        <div className="goal">
          <Form.Label> your goal:</Form.Label>
          <Form.Control onChange={(e)=>{
            setGoal(e.target.value)
          }}
            type="text"
            style={{ backgroundColor: "#1e1e1e", border: "0", color: "white" }}
          />
        </div>
        <div className="submit-Btn">
          <Button onClick={()=>{
            createUserInfo()
          }} >next</Button>
        </div>
        
    </Stack>
        )}
        </div>
        
    </div>
  )
}

export default UserInfo 
