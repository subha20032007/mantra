import React, { useState } from 'react'
import styled from 'styled-components'

import { useDispatch } from 'react-redux'
import { loginAction } from '../../redux/authReducer/action'
export const Login = () => {
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
  return(
    <>
    <DIV>
      <h1>Login Your Account</h1>
      <input onChange={(e)=>{setEmail(e.target.value)}} value={email} placeholder="Enter Your Email" type="email" />
      <input onChange={(e)=>{setPassword(e.target.value)}} value={password} placeholder="Enter Your Password" type="password" />
      <button onClick={handelSubmit}>Login</button>
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
