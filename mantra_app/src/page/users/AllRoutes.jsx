<<<<<<< HEAD
import {React, useState,useEffect} from 'react'
import {Routes} from "react-router-dom"
=======
import React from 'react'
import { Routes } from "react-router-dom"
>>>>>>> main
import { Route } from 'react-router-dom'
import { Admin } from '../admin/Admin'
import { Login } from './Login'
import { Home } from './Home'
<<<<<<< HEAD
import {auth} from '../../firebase/FirebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'
import Register from './Register'
=======
import { Home as AdminHome } from '../admin/Home/Home.jsx'
import { PrivateRoutes } from '../../componets/user/PrivateRoutes'
>>>>>>> main
export const AllRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
<<<<<<< HEAD
        <Routes>
            <Route path="/" element={isAuthenticated? <Home /> : <Login />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/Admin" element={<Admin/>}/>
            <Route path='/register' element={<Register />} />
           <Route path="*" element={<h1>Page Not Found ...</h1>}/>
        </Routes>
=======
      <Routes>
        <Route path="/" element={<PrivateRoutes><Home /></PrivateRoutes>} />
        <Route path="/login" element={<Login />} />
        <Route path="/Admin" element={<PrivateRoutes><Admin /></PrivateRoutes>} />
        <Route path="/Admin/home/*" element={<PrivateRoutes><AdminHome /></PrivateRoutes>} />
        <Route path="*" element={<h1>Page Not Found ...</h1>} />
      </Routes>
>>>>>>> main
    </div>
  )
}
