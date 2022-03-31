import React, { useMemo, useState } from 'react'
import { BiTimeFive } from 'react-icons/bi'
import { FiMessageCircle } from 'react-icons/fi'
import Swal from 'sweetalert2'
import { Option, Select, Title, ContainerEstd, Stats, CorrectAnswers, IncorrectAnswers, Paragraph } from '../styles/styledComp/estadisticas'

const Estadisticas = () => {

  const actualSession = JSON.parse(localStorage.getItem('ActualSession'))

  const [stats, setStats] = useState({
    studyTime: 0,
    questionsAnswered: 0,
    correctAnswers: 0,
    wrongAnswers: 0
  })

  const {studyTime, questionsAnswered, correctAnswers, wrongAnswers} = stats
  
  const verifySession = useMemo(() => {
    if (actualSession === null) {
      Swal.fire({
        position: 'top',
        icon: 'warning',
        text: 'Tus estadisticas se mostraran cuando inicies sesión',
        showConfirmButton: true
      })
    } else {

      const {numberQuestion, correctAnswers, wrongAnswers} = actualSession

      setStats({
        ...stats,
        questionsAnswered:  numberQuestion,
        correctAnswers: correctAnswers,
        wrongAnswers: wrongAnswers
      })
    }
  }, [])

  return (
    <ContainerEstd>
      <Title>Estadísticas</Title>
      <Select>
        <Option value="7dias">Los últimos 7 días</Option>
        <Option value="mes">Último mes</Option>
      </Select>
      <div>
        <Stats>
          <BiTimeFive />
          <p>Tiempo de estudio (horas) </p>
          <Paragraph>{studyTime}</Paragraph>
        </Stats>
        <Stats>
          <FiMessageCircle />
          <p>Respuestas contestadas</p>
          <Paragraph>{questionsAnswered}</Paragraph>
        </Stats>
        <Stats>
          <FiMessageCircle />
          <p>Respuestas correctas</p>
          <CorrectAnswers>{correctAnswers}</CorrectAnswers>
        </Stats>
        <Stats>
          <FiMessageCircle />
          <p>Respuestas incorrectas</p>
          <IncorrectAnswers>{wrongAnswers}</IncorrectAnswers>
        </Stats>
      </div>
    </ContainerEstd>
  )
}

export default Estadisticas