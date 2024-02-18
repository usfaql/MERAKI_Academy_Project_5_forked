import React, { useState } from 'react'
import './style.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
function CreateGym() {
    const navigate = useNavigate();
    const state = useSelector((state)=>{
        return{
        userId : state.auth.userId,
        token : state.auth.token
        }
    })
    console.log(state.token); 
    const [nameGym, setNameGym] = useState('');
    const [descriptionGym , setDiscriptionGym] = useState('');
  return (
    <div className='create-gym'>
        <h4 style={{padding:"10px", textAlign:"center"}}>Create New Gym</h4>
        <>
        
        <Form.Label htmlFor="inputPassword5">Name Gym</Form.Label>
        <InputGroup className="mb-3">
            <Form.Control
                type="text"
                id="inputGymName"
                onChange={(e)=>{
                    setNameGym(e.target.value);
                }}
            />
        </InputGroup>
        
        <Form.Label htmlFor="inputPassword5">Description Gym</Form.Label>
        <InputGroup className="mb-3">
            <Form.Control
            type="text"
            id="inputGymDescription"
            onChange={(e)=>{
                setDiscriptionGym(e.target.value);
            }}
            />
        </InputGroup>

        <Button variant="dark" style={{backgroundColor:"#A1E533", color:"#101010", fontWeight:"bold"}} onClick={()=>{
            if(nameGym && descriptionGym){
                axios.post("http://localhost:5000/gyms/", {name : nameGym, description : descriptionGym}, {
                    headers: { Authorization: `Bearer ${state.token}` }
                }).then((result) => {
                    console.log(result);
                    navigate(-1);
                }).catch((err) => {
                    console.log(err);
                });
            }
        }}>Create Gym</Button>
    </>
    </div>
  )
}

export default CreateGym
