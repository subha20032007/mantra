import React from 'react'
import { Routes } from "react-router-dom"
import { Route } from 'react-router-dom'
import { Admin } from '../admin/Admin'
import { Login } from './Login'
import { Home } from './Home'
import { Home as AdminHome } from '../admin/Home/Home.jsx'
import { PrivateRoutes } from '../../componets/user/PrivateRoutes'
export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PrivateRoutes><Home /></PrivateRoutes>} />
        <Route path="/login" element={<Login />} />
        <Route path="/Admin" element={<PrivateRoutes><Admin /></PrivateRoutes>} />
        <Route path="/Admin/home/*" element={<PrivateRoutes><AdminHome /></PrivateRoutes>} />
        <Route path="*" element={<h1>Page Not Found ...</h1>} />
      </Routes>
    </div>
  )
}
