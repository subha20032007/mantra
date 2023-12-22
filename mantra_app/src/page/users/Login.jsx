import React, { useState } from 'react'
import styled from 'styled-components'
<<<<<<< HEAD
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {auth, signInWithEmailAndPassword} from '../../firebase/FirebaseConfig'
import {signOut, onAuthStateChanged } from 'firebase/auth'
import Cookies from 'universal-cookie';
=======

import { useDispatch } from 'react-redux'
import { loginAction } from '../../redux/authReducer/action'
>>>>>>> main
export const Login = () => {
  const navigate=useNavigate()

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
const dispatch=useDispatch()
  const handelSubmit=(e)=>{

e.preventDefault()
const userData={
  email,
  password
}
dispatch(loginAction(userData))
setEmail("")
setPassword("")
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      Cookies.set('auth-token', user.refreshToken);
      navigate('/');
    } catch (error) {
      console.error(error.message);
    }
  };
  
  return(
    <>
    <DIV>
      <h1>Login Your Account</h1>
      <input onChange={(e)=>{setEmail(e.target.value)}} value={email} placeholder="Enter Your Email" type="email" />
      <input onChange={(e)=>{setPassword(e.target.value)}} value={password} placeholder="Enter Your Password" type="password" />
      <button onClick={handleLogin}>Login</button>

      <h3 style={{margin:"auto"}}> "email": "eve.holt@reqres.in" <br/>
    "password": "cityslicka"</h3>
    </DIV>
   
    </>
  )
}

const DIV=styled.div`
display: flex;
gap:20px;
width:23%;
padding: 3%;
border:1px solid black;
margin:auto;
flex-direction: column;
margin-top:40px;
input{
  height:20px;
}
button{

width:90%;
background-color:black ;
color:white;
margin:auto;
padding: 2%;
}
h1{
  margin:auto;
}
h3{
  margin:auto;
}
`
