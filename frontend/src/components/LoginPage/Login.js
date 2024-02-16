import React from 'react'
import{useState,useEffect} from 'react'
import './Login.css'
import axios from 'axios'
import { UseDispatch,useDispatch,useSelector } from 'react-redux'
import { setLogin,setUserId } from '../Redux/Reducers/Auth/index';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = () => {
    const dispatch = useDispatch()

    const [email ,setEmail] = useState("")
     
    const [password,setPassword]=useState("")

    const [message, setMessage] = useState("");

    const login = (e)=>{

      e.preventDefault();
         axios.post("http://localhost:5000/users/login", {
          email,
          password,
        }).then((result)=>{
          console.log("result.data",result.data);
          dispatch(setLogin(result.data.token));
          dispatch(setUserId(result.data.userId));
          setMessage("");
          localStorage.setItem("token", result.data.token);
          localStorage.setItem("userId", result.data.userId);

        }).catch((error)=>{
          setMessage(error.response.data.message);
        })
       
        }
    

  return (
    <div className='loginPage'>


      <div className='login_border'>
<div className='login_header'>
        <h1>Login</h1>
        </div>
        <div className='login_email'>
            <div className='email_label'>
        <Form.Label >Email :</Form.Label>
        </div>
        <div className='email_input'>
      <Form.Control
        type="text"
        placeholder='email'
        onChange={(e)=>{
          setEmail(e.target.value)
        }}
      />
      </div>

      <div className='password_title'>
        <Form.Label >Password :</Form.Label>
        </div>
        <div className='password_input'>
      <Form.Control
        type="password"
        placeholder='password'
        onChange={(e)=>{
          setPassword(e.target.value)
        }}
      />
      </div>
      <div className='login_button'>

         <div className="d-grid gap-2">
         <Button variant="success"onClick={(e)=>{
        login(e)
      }} >Login</Button>

      


    </div>
    
<div className='dont_have_account'>
    <p>Dont have account ? <a href='*'>create accout now </a></p>
</div>

<div className='login_img'>
        <img src='https://i.ibb.co/fD6g26X/pngwing-com.png' alt='logimg'/>
    </div>



      </div>



        </div>

      </div>
    </div>
    

  )
}

export default Login
