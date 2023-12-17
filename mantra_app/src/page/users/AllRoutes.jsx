import {React, useState,useEffect} from 'react'
import {Routes} from "react-router-dom"
import { Route } from 'react-router-dom'
import { Admin } from '../admin/Admin'
import { Login } from './Login'
import { Home } from './Home'
import {auth} from '../../firebase/FirebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'
import Register from './Register'
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
        <Routes>
            <Route path="/" element={isAuthenticated? <Home /> : <Login />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/Admin" element={<Admin/>}/>
            <Route path='/register' element={<Register />} />
           <Route path="*" element={<h1>Page Not Found ...</h1>}/>
        </Routes>
    </div>
  )
}
