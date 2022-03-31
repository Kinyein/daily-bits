import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GrClose } from 'react-icons/gr'
import Swal from 'sweetalert2'
import { url, urlUsers } from '../helpers/urls'
import heart from '../img/heart.svg'
import '../styles/CSS/question.css'
import { Answer, AnswersForm, ButtonClose, ButtonComprobar, Health, ImgQuestion, ProgressContainer, Question } from '../styles/styledComp/questions'

const Questions = () => {

  const [questionObj, setQuestions] = useState({
    question: '',
    a: '',
    b: '',
    c: '',
    img: '',
    idActualSession: '',
    correct: '',
    selected: 'null',
    wrongAnswers: 0,
    correctAnswers: 0,
    numberQuestion: 0,
    lives: 5
  })

  const { question, a, b, c, img, correct, numberQuestion, lives, selected, wrongAnswers, correctAnswers, idActualSession } = questionObj

  const actualSession = JSON.parse(localStorage.getItem('ActualSession'))


  useEffect(() => {
    getData()
  }, [numberQuestion])



  const getData = () => {
    axios.get(url)
      .then(resp => {
        let data = resp.data


        if (data[numberQuestion] === undefined) {
          handleReturn()
        }

        setQuestions({
          ...questionObj,
          question: data[numberQuestion].question,
          a: data[numberQuestion].a,
          b: data[numberQuestion].b,
          c: data[numberQuestion].c,
          img: data[numberQuestion].img,
          correct: data[numberQuestion].correct

        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  const verifySession = useMemo(() => {
    if (actualSession === null) {
      Swal.fire({
        position: 'top',
        icon: 'warning',
        text: 'No has iniciado sesion, por lo cual tu progreso no sera guardado',
        showConfirmButton: true
      })
    } else {
      setQuestions({
        ...questionObj,
        idActualSession: actualSession.id
      })
    }
  }, [])


  const handleChange = e => {
    setQuestions({
      ...questionObj,
      selected: e.currentTarget.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    e.target.reset()

    if (selected === correct) {
      Swal.fire({
        position: 'bottom',
        icon: 'success',
        title: 'Buen Trabajo',
        showConfirmButton: false,
        timer: 1000
      })

      setQuestions({
        ...questionObj,
        selected: 'null',
        numberQuestion: numberQuestion + 1,
        correctAnswers: correctAnswers + 1
      })

    } else if (selected === "null") {

      setQuestions({
        ...questionObj,
        numberQuestion: numberQuestion
      })

      Swal.fire({
        position: 'bottom',
        title: 'Selecciona una respuesta',
        showConfirmButton: false,
        timer: 1400
      })
    } else {
      Swal.fire({
        position: 'bottom',
        icon: 'error',
        title: 'Incorrecto',
        text: `La respuesta correcta era: ${correct}`,
        showConfirmButton: true
      })

      setQuestions({
        ...questionObj,
        selected: 'null',
        numberQuestion: numberQuestion + 1,
        wrongAnswers: wrongAnswers + 1
      })

    }
  }

  const navigate = useNavigate()

  const handleReturn = () => {

    updateStats()

    navigate(-1)
  }

  const updateStats = () => {

    axios.put(urlUsers+idActualSession, {
      ...actualSession,
      correctAnswers,
      wrongAnswers,
      numberQuestion
    })
      .then(resp => {
        console.log('Actualizado Correctamente')
        let data = resp.data
        localStorage.setItem('ActualSession', JSON.stringify(data))
      })
      .catch(error => console.log(error))

    console.log('correctAnswers: ' + correctAnswers + '\n' + 'wrongAnswers: ' + wrongAnswers + '\n' + 'numberQuestions: ' + numberQuestion)
  }

  return (


    <div>
      <ProgressContainer>
        <ButtonClose className="closeButton" onClick={handleReturn}><GrClose /></ButtonClose>
        <progress className='progress' min="0" max="3" value={numberQuestion} id="health"></progress>
        <Health><img src={heart} width="30px" />{lives}</Health>
      </ProgressContainer>

      <div>
        <Question>
          <ImgQuestion src={img} />
          <h2>{question}</h2>
        </Question>

        <AnswersForm onSubmit={handleSubmit}>

          <Answer>
            {a}

            <input
              type="radio"
              name={`respuesta`}
              id={a}
              onChange={handleChange}
              value={a}
            />
          </Answer>

          <Answer>
            {b}

            <input
              type="radio"
              name={`respuesta`}
              id={b}
              onChange={handleChange}
              value={b}
            />
          </Answer>

          <Answer>
            {c}

            <input
              type="radio"
              name={`respuesta`}
              id={c}
              onChange={handleChange}
              value={c}
            />
          </Answer>

          <ButtonComprobar>COMPROBAR</ButtonComprobar>

        </AnswersForm>

      </div>

    </div >
  )
}

export default Questions