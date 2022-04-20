import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Estadisticas from '../components/Estadisticas'
import Home from '../components/Home'
import Perfil from '../components/Perfil'
import Navbar from '../components/Navbar'
import Questions from '../components/Questions'

const DashboardRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/estadisticas' element={<Estadisticas />} />
                <Route path='/perfil' element={<Perfil />} />
                <Route path='/questions' element={<Questions />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
            <Navbar />
        </>
    )
}

export default DashboardRoutes