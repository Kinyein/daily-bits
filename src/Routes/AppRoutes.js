import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from '../components/Login'
import Register from '../components/Register'
import DashboardRoutes from './DashboardRoutes'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'

const AppRoutes = () => {

  const [checking, setChecking] = useState(true)
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    const loggeLocalStorage = localStorage.getItem('ActualSession')

    if (loggeLocalStorage) {
      setIsLogged(true)
    } else {
      setIsLogged(false)
    }
    setChecking(false)
    
  }, [setChecking, setIsLogged])

  console.log(isLogged)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={
            <PublicRoutes isAuth={isLogged}>
              <Login />
            </PublicRoutes>
          } />

          <Route path="/register" element={
            <PublicRoutes isAuth={isLogged}>
              <Register />
            </PublicRoutes>
          } />

          <Route path="/*" element={
            <PrivateRoutes isAuth={isLogged}>
              <DashboardRoutes />
            </PrivateRoutes>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRoutes