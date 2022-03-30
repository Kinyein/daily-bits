import React from 'react'
import '../styles/CSS/perfil.css'
import { Title } from '../styles/styledComp/estadisticas'
import { CloseSession, DataContainer, ImgPerfil, Name, PerfilContainer, TextContent } from '../styles/styledComp/perfil'

const Perfil = () => {



  return (
    <PerfilContainer>
      <Title>Perfil</Title>

      <DataContainer>
        <ImgPerfil src='https://icon-library.com/images/user-image-icon/user-image-icon-19.jpg' alt="user image"/>
        <TextContent>
          <Name>Nombre</Name>
          <p>Correo</p>
        </TextContent>
        <CloseSession className='closeSession'>Cerrar sesión</CloseSession>
      </DataContainer>

    </PerfilContainer>
  )
}

export default Perfil