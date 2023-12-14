import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
export const Navbar = () => {
  return (
    <DIV>
      <Link className='nav-text' to="/">Home</Link>
      <Link className='nav-text' to="login">Login</Link>
      <Link className='nav-text' to="/admin">Admin</Link>
    </DIV>
  )
}

const DIV=styled.div`
display:flex;
justify-content: space-around;
height:60px;
border:1px solid gray;
align-items: center;
box-shadow: 1px solid gray;
.nav-text{
  color:black;
  font-family:sans-serif;
  text-decoration: none;
}

`