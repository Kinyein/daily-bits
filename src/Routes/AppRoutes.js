import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Estadisticas from '../components/Estadisticas'
import Home from '../components/Home'
import Perfil from '../components/Perfil'
import Navbar from '../components/Navbar'
import Questions from '../components/Questions'
import Login from '../components/Login'
import Register from '../components/Register'

const AppRoutes = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/estadisticas' element={<Estadisticas />} />
          <Route path='/perfil' element={<Perfil />} />
          <Route path='/questions' element={<Questions />} />
          <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </div>
  )
}

export default AppRoutes