import React from 'react'
import{useState,useEffect} from 'react'
import './Login.css'
import axios from 'axios'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = () => {

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
        type="email"
        placeholder='email'
        onChange={()=>{

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
        onChange={()=>{

        }}
      />
      </div>
      <div className='login_button'>

         <div className="d-grid gap-2">
      <Button variant="primary" size="lg" >
      Login
      </Button>
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
