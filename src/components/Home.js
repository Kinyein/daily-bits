import React from 'react'
import '../styles/CSS/home.css'
import { Link } from 'react-router-dom'
import { Title, BorderImg, Category, CicleContainer, RowContainer, Container } from '../styles/styledComp/home'
import html from '../img/html.png'
import css from '../img/css.png'
import js from '../img/js.png'
import figma from '../img/figma.png'
import ux from '../img/ux.png'

const Home = () => {
  return (
    <div>
      <Title>Practica tus conocimientos en la categoría que prefieras.</Title>

      <Container>

        <CicleContainer>
          <Link className='link' to="/questions">
            <BorderImg src={html} alt="HTML5" />
            <Category>HTML</Category>
          </Link>
        </CicleContainer>

        <RowContainer>
          <CicleContainer>
            <Link className='link' to="/">
              <BorderImg src={css} alt="CSS" />
              <Category>CSS</Category>
            </Link>
          </CicleContainer>

          <CicleContainer>
            <Link className='link' to="/">
              <BorderImg src={js} alt="JS" />
              <Category>JS</Category>
            </Link>
          </CicleContainer>

          <CicleContainer>
            <Link className='link' to="/">
              <BorderImg src={figma} alt="FIGMA" />
              <Category>FIGMA</Category>
            </Link>
          </CicleContainer>

          <CicleContainer>
            <Link className='link' to="/">
              <BorderImg src={ux} alt="UX" />
              <Category>UX</Category>
            </Link>
          </CicleContainer>
        </RowContainer>

      </Container>
    </div>
  )
}

export default Home