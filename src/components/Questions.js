import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom'
import { GrClose } from 'react-icons/gr'
import Swal from 'sweetalert2'
import { handleChange } from '../helpers/hooks'
import { url } from '../helpers/urls'
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
    correct: '',
    selected: '',
    numberQuestion: 0,
    lives: 5
  })

  const { question, a, b, c, img, correct, numberQuestion, lives, selected } = questionObj

  useEffect(() => {
    getData()
  }, [numberQuestion])

  const getData = () => {
    axios.get(url)
      .then(resp => {
        let data = resp.data

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
  
  const handleChange = e => {
    setQuestions({
      ...questionObj,
      selected: e.currentTarget.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    e.target.reset()

    if (selected == correct) {
      Swal.fire({
        position: 'bottom',
        icon: 'success',
        title: 'Buen Trabajo',
        showConfirmButton: false,
        timer: 1700
      })

    } else {
      Swal.fire({
        position: 'bottom',
        icon: 'error',
        title: `La respuesta correcta era: ${correct}`,
        showConfirmButton: true
      })

      setQuestions({
        ...questionObj,
        lives: lives - 1
      })
    }

    setQuestions({
      ...questionObj,
      numberQuestion: numberQuestion + 1
    })

  }

  const navigate = useNavigate()

  const handleReturn = ()=>{
    navigate(-1)
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