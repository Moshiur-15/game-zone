import React, { useContext } from 'react'
import Loading from './Loding';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from "../Provider/AuthProvider";
export default function PrivateRoute({children}) {
  const {user, loading} = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loading/>
  }
  if(user){
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
}
