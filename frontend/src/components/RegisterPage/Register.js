import React ,{useState,useEffect} from 'react'
import './Register.css'
import axios from 'axios'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Register = () => {
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
    axios.post("http://localhost:5000/users/register",{ firstName,lastName,email,password,age,gender,roleId}).then((result)=>{
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
      
    )}
  
  return (
    <div className="Register-Page">
      <div className="Left-Image">
        <img className="image" src={logo} />
      </div>
      <div className="Right-Inputs">
        <h1>Register</h1>
        <div className="FirstName-LastName">
          <div className="FirstName">
            {" "}
            <Form.Label>First Name:</Form.Label>
            <Form.Control type="text" />
          </div>
          <div className="LastName">
            <Form.Label>Last Name:</Form.Label>
            <Form.Control type="text" />
          </div>
        </div>
        <div className="Email">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" />
        </div>
        <div className="Password">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" />
        </div>
        <div className="Age-Gender">
          <div className="Age">
            <Form.Label>Age:</Form.Label>
            <Form.Control type="number" />
          </div>
          <div className="Gender">
            <label>
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
            <label>
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
        <div className="Account">
          <div className="Account-Label"></div>
          <Form.Label>Account:</Form.Label>
          <div className="User-Coach">
            <label>
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
            <label>
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
        <div className="Check-Forget">
          <div className="Check">
            <small>check</small>
          </div>
          <div className="Forget">
            <small>Forget Password?</small>
          </div>
        </div>
        <Button variant="success">Register</Button>
        <small>
          Do you have account?<a>create account now</a>
        </small>
      </div>
    </div>
  );
};

export default Register;
