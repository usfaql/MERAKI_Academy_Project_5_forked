import React from 'react'
import './style.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function CreateGym() {
  return (
    <div className='create-gym'>
        <h4 style={{padding:"10px", textAlign:"center"}}>Create New Gym</h4>
        <>
        
            <Form.Label htmlFor="inputPassword5">Name Gym</Form.Label>
        <InputGroup className="mb-3">
            <Form.Control
                type="text"
                id="inputGymName"
            />
        </InputGroup>
        
            <Form.Label htmlFor="inputPassword5">Description Gym</Form.Label>
        <InputGroup className="mb-3">
            <Form.Control
            type="text"
            id="inputGymDescription"
            />
        </InputGroup>

        <Button variant="dark" style={{backgroundColor:"#A1E533", color:"#101010", fontWeight:"bold"}}>Create Gym</Button>
    </>
    </div>
  )
}

export default CreateGym
