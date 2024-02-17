import React from 'react'
import{useState,useEffect} from 'react'
import './Login.css'
import axios from 'axios'
import { UseDispatch,useDispatch,useSelector } from 'react-redux'
import { setLogin,setUserId } from '../Redux/Reducers/Auth/index';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logo from '../assets/pngwing.com.png'
const Login = () => {
    const dispatch = useDispatch()

    const [email ,setEmail] = useState("")
     
    const [password,setPassword]=useState("")

    const [message, setMessage] = useState("");



    const login = ()=>{

          if(!email || !password){
            console.log("Conn't Send Empty Data");
          }else{
            axios.post("http://localhost:5000/users/login", {
              email,
              password,
            }).then((result)=>{
              console.log("result.data",result.data);
              dispatch(setLogin(result.data.token));
              dispatch(setUserId(result.data.userId));
              setMessage("");
              localStorage.setItem("token",result.data.token);
              localStorage.setItem("userId",result.data.userId);
    
            }).catch((error)=>{
              //setMessage(error.response.data.message);
              console.log(error);
            })
          }
        
       
        }
    

  return (
    <div className='login-Page'>
       <div className="Left-Image">
        <img className="image" src={logo} />
      </div>

      <div className="Right-Inputs">
#        <h1>Login</h1>
            <div className="Email">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" onChange={(e)=>{
            setEmail(e.target.value)
          }} />
        </div>
        <div className="Password">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" onChange={(e)=>{
            setPassword(e.target.value)
          }} />
        </div>
      <br/>
        <Button variant="success"onClick={()=>{
        login()
      }} >Login</Button>

      <small>
      If you don't have an account   <a>signup</a>
        </small>
        

      </div>

      
     

    </div>
    





      



        

      
    
    

  )
}

export default Login