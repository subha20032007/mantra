import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const PrivateRoutes = ({children}) => {
    const auth=useSelector((store)=>store.authReducer.isAuth)
    console.log(auth)
  return !auth?children:<Navigate to="/login"/>
}
