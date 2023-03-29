import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../../context/Useauth'

export default function PrivateRoute({children}) {
    const {user} = useAuth()
    const location = useLocation()
    if(user && user?.uid){
        return children
    }
  return (
    <Navigate to='/login' state={{from:location}}></Navigate>

  )
}
