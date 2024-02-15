import React from 'react'
import{useState,useEffect} from 'react'
import './Login.css'
import axios from 'axios'

import Form from 'react-bootstrap/Form';

const Login = () => {

  return (
    <div className='loginPage'>


      <div className='login_title'>

        <h1>Login</h1>
        <h6>welcome Back</h6>
        <div className='login_email'>
            <div className='email_title'>
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


        </div>

      </div>
    </div>
  )
}

export default Login
