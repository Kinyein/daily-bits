import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Estadisticas from '../components/Estadisticas'
import Home from '../components/Home'
import Perfil from '../components/Perfil'
import Navbar from '../components/Navbar'
import Questions from '../components/Questions'
import { url } from '../helpers/urls'
import axios from 'axios'

const AppRoutes = () => {


  

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/estadisticas' element={<Estadisticas />} />
          <Route path='/perfil' element={<Perfil />} />
          <Route path='/questions' element={<Questions />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </div>
  )
}

export default AppRoutes