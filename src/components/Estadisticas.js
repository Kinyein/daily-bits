import React from 'react'
import { BiTimeFive } from 'react-icons/bi'
import { FiMessageCircle } from 'react-icons/fi'
import { Option, Select, Title, ContainerEstd, Stats, CorrectAnswers, IncorrectAnswers, Paragraph } from '../styles/styledComp/estadisticas'

const Estadisticas = () => {
  return (
    <ContainerEstd>
      <Title>Estadísticas</Title>
      <Select>
        <Option value="7dias">Los últimos 7 días</Option>
        <Option value="7dias">Último mes</Option>
      </Select>
      <div>
        <Stats>
          <BiTimeFive />
          <p>Tiempo de estudio (horas)</p>
          <Paragraph>0</Paragraph>
        </Stats>
        <Stats>
          <FiMessageCircle />
          <p>Respuestas contestadas</p>
          <Paragraph>0</Paragraph>
        </Stats>
        <Stats>
          <FiMessageCircle />
          <p>Respuestas correctas</p>
          <CorrectAnswers>0</CorrectAnswers>
        </Stats>
        <Stats>
          <FiMessageCircle />
          <p>Respuestas incorrectas</p>
          <IncorrectAnswers>0</IncorrectAnswers>
        </Stats>
      </div>
    </ContainerEstd>
  )
}

export default Estadisticas