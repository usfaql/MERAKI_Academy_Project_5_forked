import React ,{useState,useEffect} from 'react'
import './Register.css'
import axios from 'axios'
import Form from 'react-bootstrap/Form';
const Register = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [gender, setGender] = useState("")
  const [age, setAge] = useState(null)
  const [typeOfAccount, setTypeOfAccount] = useState("")
  return (
    <div>Register


<Form.Label htmlFor="inputPassword5">Password</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
    </div>

  )
}

export default Register