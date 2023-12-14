import React from 'react'
import {Routes} from "react-router-dom"
import { Route } from 'react-router-dom'
import { Admin } from '../admin/Admin'
import { Login } from './Login'
import { Home } from './Home'
export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/Admin" element={<Admin/>}/>
           <Route path="*" element={<h1>Page Not Found ...</h1>}/>
        </Routes>
    </div>
  )
}
