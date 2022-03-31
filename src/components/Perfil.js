import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/CSS/perfil.css'
import { Title } from '../styles/styledComp/estadisticas'
import { CloseSession, DataContainer, ImgPerfil, Name, PerfilContainer, TextContent } from '../styles/styledComp/perfil'

const Perfil = () => {

  const [perfil, setPerfil] = useState({
    name: '',
    email: '',
    imgUser: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYu9wFEOviVSzqkohBw2G3ZIVqMeow52YgqVhtuS7hOeNMl2D2zItDRZ2VCpAjwdhj2Ds&usqp=CAU',
    textButton: 'Cerrar sesión'
  })

  const { name, email, imgUser, textButton } = perfil

  const actualSession = JSON.parse(localStorage.getItem('ActualSession'))
  console.log(actualSession);

  useEffect(() => {
    setActualPerfil()
  }, [])

  const setActualPerfil = () => {

    if (actualSession) {

      setPerfil({
        ...perfil,
        name: actualSession.name,
        email: actualSession.email
      })

      console.log(actualSession.name);

      if (actualSession.img !== undefined) {
        setPerfil({
          ...perfil,
          name: actualSession.name,
          email: actualSession.email,
          imgUser: actualSession.img
        })
      }

    } else {
      setPerfil({
        ...perfil,
        textButton: "Iniciar sesión"
      })
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