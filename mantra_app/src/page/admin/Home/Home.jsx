/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react'
import Navbar from './Navbar'
import Dashboard from './Components/Dashboard'
import { Routes } from "react-router-dom"
import { Route } from 'react-router-dom'
import Order from './Components/Order'
import Users from './Components/Users'
import Bills from './Components/Bills'
import Add_Product from './Components/Add_Product'
import Products from './Components/Products'
import Add_Message from './Components/Add_Message'
import {  HamburgerMenuIcon } from './Svg/Svg'

export const Home = () => {
    const [ShowSidebar, setShowSidebar] = useState(false);
    return (
        <div className=' flex w-full'>
            <div className={`md:block fixed md:relative z-50  ${ShowSidebar ? 'block' : 'hidden'} `}>
                <Navbar {...{ ShowSidebar, setShowSidebar }} />
            </div>
            <div className=' w-full overflow-scroll'>
                <h1 className=' md:hidden p-3 fixed' onClick={() => setShowSidebar(!ShowSidebar)}>
                    {HamburgerMenuIcon}
                </h1>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path="/order" element={<Order />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/bills" element={<Bills />} />
                    <Route path="/addProduct" element={<Add_Product />} />
                    <Route path="/message" element={<Add_Message />} />
                    <Route path="/products" element={<Products />} />
                </Routes>
            </div>
        </div>
    )
}
