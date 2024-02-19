import React, { useState, useEffect } from "react";
import "./Register.css";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Button from "react-bootstrap/Button";
import logo from "../assets/pngwing.com.png";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState(null);
  const [roleId, setRoleId] = useState(null);
  const [success, setSuccess] = useState(null)
  const [message, setMessage] = useState("")
  const createNewAccount=()=>{
    if(firstName&& lastName&& age&& gender&& email&&password&&roleId){
        axios.post("http://localhost:5000/users/register",{ firstName, lastName, age, gender, email, password,role_id:roleId }).then((result)=>{
      if(result.data.success){
        setSuccess(true)
        setMessage(result.data.message)
      }else throw Error;
    }).catch((error)=>{
      setSuccess(false)
      if (error.response && error.response.data) {
        return setMessage(error.response.data.message);
      }
      setMessage("Error happened while register, please try again");
    }
      
    )}else{
      setSuccess(false)
      setMessage("Please Fill All Field")
    }
    }
  
  
  return (
    <div className="Register-Page">
      <div className="Left-Image">
        <img className="image" src={logo} />
      </div>
      <div className="right-input-contener">
      <div className="Right-Inputs">
        <h1 className="Title">Register</h1>
        <div className="FirstName-LastName">
          <div className="FirstName">
            <Form.Label>First Name:</Form.Label>
            <Form.Control onChange={(e)=>{
              setFirstName(e.target.value)
            }}
            
              type="text"
              style={{
                backgroundColor: "#1e1e1e",
                border: "0",
                color: "white",
              }}
            />
          </div>
          <div className="LastName">
            <Form.Label>Last Name:</Form.Label>
            <Form.Control onChange={(e)=>{
setLastName(e.target.value)
            }}
              type="text"
              style={{
                backgroundColor: "#1e1e1e",
                border: "0",
                color: "white",
              }}
            />
          </div>
        </div>
        <div className="Email">
          <Form.Label>Email:</Form.Label>
          <Form.Control onChange={(e)=>{
setEmail(e.target.value)
          }}
            type="email"
            style={{ backgroundColor: "#1e1e1e", border: "0", color: "white" }}
          />
        </div>
        <div className="Password">
          <Form.Label>Password:</Form.Label>
          <Form.Control onChange={(e)=>{
setPassword(e.target.value)
          }}
            type="password"
            style={{ backgroundColor: "#1e1e1e", border: "0", color: "white" }}
          />
        </div>
        <div className="Age-Gender">
          <div className="Age">
            <Form.Label>Age:</Form.Label>
            <Form.Control onChange={(e)=>{
setAge(e.target.value)
            }}
              type="number"
              style={{
                backgroundColor: "#1e1e1e",
                border: "0",
                color: "white",
              }}
            />
          </div>

          <div className="Gender-label">
            <Form.Label>Gender:</Form.Label>
            <div
              className="Gender"
              style={{
                backgroundColor: "#1e1e1e",
                border: "0",
                color: "white",
              }}
            >
              <div className="Male">
                <label style={{ color: "white" }}>
                  <input
                    type="radio"
                    value="Male"
                    checked={gender === "male"}
                    onChange={() => {
                      setGender("male");
                    }}
                  />
                  Male
                </label>
              </div>
              <div className="Female">
                <label style={{ color: "white" }}>
                  <input
                    type="radio"
                    value="Female"
                    checked={gender === "female"}
                    onChange={() => {
                      setGender("female");
                    }}
                  />
                  Female
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="Account">
          <div className="Account-Label"></div>
          <Form.Label>Account:</Form.Label>
          <div
            className="User-Coach"
            style={{ backgroundColor: "#1e1e1e", border: "0", color: "white" }}
          >
            <div className="User">
              {" "}
              <label style={{ color: "white" }}>
                <input
                  type="radio"
                  value="user"
                  checked={roleId === 2}
                  onChange={() => {
                    setRoleId(2);
                  }}
                />
                User
              </label>
            </div>
            <div className="Coach">
              <label style={{ color: "white" }}>
                <input
                  type="radio"
                  value="coach"
                  checked={roleId === 3}
                  onChange={() => {
                    setRoleId(3);
                  }}
                />
                Coach
              </label>
            </div>
          </div>
        </div>
        {/* <div className="Check-Forget">
          <div className="Check">
            <small>check</small>
          </div>
          <div className="Forget">
            <small>Forget Password?</small>
          </div>
        </div> */}
        <div className="Register-Btn">
          <Button onClick={()=>{
            createNewAccount()
          }} >Register</Button>
        </div>
        <div className="doYou">
          <span style={{cursor:"default"}}>
            Do you have account?
            <soan style={{ color: "#A1E533" ,cursor:"pointer"}} onClick={()=>{
              navigate(-1);
            }}>Login Now</soan>
          </span>
        </div>
        {success?message&&<div className="SuccessMessage">{message}</div>:message&&<div className="ErrorMessage">{message}</div>}
      </div>
      </div>
      
    </div>
  );
};

export default Register;
