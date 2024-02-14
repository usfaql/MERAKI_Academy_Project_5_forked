import React ,{useState,useEffect} from 'react'
import './Register.css'
import axios from 'axios'
const Register = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [gender, setGender] = useState("")
  const [age, setAge] = useState(null)
  const [typeOfAccount, setTypeOfAccount] = useState("")
  return (
    <div>Register</div>
  )
}

export default Register