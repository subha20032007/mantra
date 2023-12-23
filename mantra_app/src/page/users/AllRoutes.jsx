import {React, useState,useEffect} from 'react'
import {Routes,Route} from "react-router-dom"
import { Admin } from '../admin/Admin'
import {auth} from '../../firebase/FirebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'
import Register from './Register'
import { Home as AdminHome } from '../admin/Home/Home.jsx'
import Login  from './Login'
import Home  from './Home'


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
            <Route path="/" element={<PrivateRoutes><Home/></PrivateRoutes>}/>
            <Route path="/login" element={<Login/>} />
               <Route path="/Admin/home/*" element={<PrivateRoutes><AdminHome /></PrivateRoutes>} />
            <Route path='/register' element={<Register />} />
           <Route path="*" element={<h1>Page Not Found ...</h1>}/>
        </Routes>
</div>
  )
}
