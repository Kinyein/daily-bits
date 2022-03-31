import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { ButtonLoginGoogle, ChangeSession, DivLine, FormContainer, FormSession, Input, InputContainer, SessionButton, SessionContainer, SessionLogo, SessionTitle } from '../styles/styledComp/session'
import logo from '../img/purpleLogo.png'
import { BsGoogle } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import '../styles/CSS/session.css'
import { urlUsers } from '../helpers/urls'

const Register = () => {

  const [newUser, setNewUser] = useState({
    email: '',
    password: '',
    name: ''
  })

  const { email, password, name } = newUser

  const handleSubmit = e => {
    e.preventDefault()

    axios.post(urlUsers, newUser)
      .then(resp => {
        let timerInterval
        Swal.fire({
          title: 'Guardando datos...',
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft()
            }, 100)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
          }
        })
      })
      .catch(error => console.log(error))
  }

  const handleChange = ({ target }) => {
    setNewUser({
      ...newUser,
      [target.name]: target.value
    })
  }

  return (
    <div>
      <SessionContainer>
        <SessionLogo src={logo} alt="logo" />
        <SessionTitle>Registrarse</SessionTitle>
        <ButtonLoginGoogle><BsGoogle />Continuar con Google</ButtonLoginGoogle>

        <DivLine />

        <FormContainer>
          <FormSession onSubmit={handleSubmit} >
            <InputContainer>
              <label>Nombre</label>
              <Input
                type="text"
                placeholder='Ingrese nombre'
                name="name"
                onChange={handleChange}
                value={name}
              />
            </InputContainer>

            <InputContainer>
              <label>Correo electrónico</label>
              <Input
                type="email"
                placeholder='Ingrese su correo electrónico'
                name="email"
                onChange={handleChange}
                value={email}
              />
            </InputContainer>

            <InputContainer>
              <label>Contraseña</label>
              <Input
                type="password"
                placeholder='Ingrese su contraseña'
                name="password"
                onChange={handleChange}
                value={password}
              />
            </InputContainer>

            <SessionButton className='sessionButton'>Regitrarse</SessionButton>

          </FormSession>

          <ChangeSession>¿Ya tienes una cuenta? <Link to="/">Inicia Sesión</Link></ChangeSession>

        </FormContainer>
      </SessionContainer>
    </div>
  )
}

export default Register