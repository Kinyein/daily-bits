import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/CSS/perfil.css'
import { Title } from '../styles/styledComp/estadisticas'
import { CloseSession, DataContainer, ImgPerfil, Name, PerfilContainer, TextContent } from '../styles/styledComp/perfil'

const Perfil = () => {

  const [perfil, setPerfil] = useState({
    name: '',
    email: '',
    imgUser: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYu9wFEOviVSzqkohBw2G3ZIVqMeow52YgqVhtuS7hOeNMl2D2zItDRZ2VCpAjwdhj2Ds&usqp=CAU'
  })

  const { name, email, imgUser } = perfil

  let textButton = 'Cerrar sesión'

  const actualSession = JSON.parse(localStorage.getItem('ActualSession'))

  useEffect(() => {
    setActualPerfil()
  }, [])
  
  const setActualPerfil = () => {

    console.log(actualSession)

    if (actualSession !== null) {
      setPerfil({
        name: actualSession.name,
        email: actualSession.email,
        imgUser: actualSession.img
      })
    } else {
      textButton = 'Iniciar sesión'
    }

  }


  const navigate = useNavigate()

  const closeActualSession = () => {
    localStorage.removeItem('ActualSession')
    navigate("/login")
  }

  return (
    <PerfilContainer>
      <Title>Perfil</Title>

      <DataContainer>
        <ImgPerfil src={imgUser} alt="user image" />
        <TextContent>
          <Name>{name}</Name>
          <p>{email}</p>
        </TextContent>
        <CloseSession className='closeSession' onClick={() => closeActualSession()}>{textButton}</CloseSession>
      </DataContainer>

    </PerfilContainer>
  )
}

export default Perfil