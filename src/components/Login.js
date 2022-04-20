import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import logo from '../img/purpleLogo.png'
import { BsGoogle } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/CSS/session.css'
import { urlUsers } from '../helpers/urls'
import { ButtonLoginGoogle, ChangeSession, DivLine, FormContainer, FormSession, Input, InputContainer, SessionButton, SessionContainer, SessionLogo, SessionTitle } from '../styles/styledComp/session'
import Swal from 'sweetalert2'

const Login = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const { email, password } = user

    const handleSubmit = e => {
        e.preventDefault()
        getData()
    }

    const handleChange = ({ target }) => {
        setUser({
            ...user,
            [target.name]: target.value
        })
    }

    const getData = () => {
        axios.get(urlUsers)
            .then(resp => {
                // console.log(resp.data);
                const data = resp.data
                validationAccount(data)
            })
            .catch(error => console.log(error))

    }

    let navigate = useNavigate()

    const validationAccount = (data) => {
        if (email !== '' && password !== '') {

            if (data.find(user => user.email === email && user.password === password)) {
                console.log('Existe usuario');

                localStorage.setItem('ActualSession', JSON.stringify(user))
                Swal.fire({
                    icon: 'success',
                    title: 'Sesion iniciada correctamente',
                    text: ''
                })

                console.log('Existe usuario');
                
                window.location.reload()
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'No coinciden los datos',
                    text: 'Por favor revisa que los datos sean correctos, o crea una cuenta si no tienes una'
                })
            }

        } else {
            Swal.fire({
                icon: 'error',
                title: '',
                text: 'Por favor llena todos los campos'
            })
        }

        // console.log(data)

    }



    return (
        <SessionContainer>
            <SessionLogo src={logo} alt="logo" />
            <SessionTitle>Iniciar Sesión</SessionTitle>
            <ButtonLoginGoogle><BsGoogle /> Continuar con Google</ButtonLoginGoogle>

            <DivLine />

            <FormContainer>
                <FormSession onSubmit={handleSubmit}>
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

                    <SessionButton className='sessionButton'>Login</SessionButton>

                </FormSession>

                <a href='#'>¿Se te olvidó tu contraseña?</a>

                <ChangeSession>¿Aún no tienes una cuenta? <Link to="/register">Inscribete</Link></ChangeSession>

            </FormContainer>
        </SessionContainer>
    )
}

export default Login