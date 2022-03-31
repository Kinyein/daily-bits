import React from 'react'
import { FiActivity, FiUser } from "react-icons/fi";
import { BiHomeAlt } from "react-icons/bi";
import { ButtonS, NavbarS } from '../styles/styledComp/navbar';
import { Link } from 'react-router-dom'
import '../styles/CSS/navbar.css'

const Navbar = () => {
  return (
    <div>
      <NavbarS>
        
        <Link className='link' to="/home"><BiHomeAlt className='icon' />Home</Link>
        
        <Link className='link' to="/estadisticas"><FiActivity className='icon' />Estadisticas</Link>
        
        <Link className='link' to="/perfil"><FiUser className='icon' />Perfil</Link>

      </NavbarS>
    </div>
  )
}

export default Navbar