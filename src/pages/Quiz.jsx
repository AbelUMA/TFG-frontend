import { React, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import axiosAPI from '../config/axiosAPI'
import Loading from '../components/Loading'

function Quiz() {
  const [showFinalResults, setShowFinalResults] = useState(false)
  const [score, setScore] = useState(0)
  const [questions, setQuestions] = useState([{}])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getQuiz = async () => {
      try {
        setLoading(true)
        const url = '/quiz'
        const { data } = await axiosAPI(url)
        data.sort(() => 0.5 - Math.random())
        setQuestions(data)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    getQuiz()
  }, [])

  const optionClicked = (e, isCorrect) => {
    const options = document.querySelectorAll('.options')

    options.forEach((option) => {
      option.classList.add('opacity-50')
      option.classList.add('pointer-events-none')
    })

    if (isCorrect) {
      e.target.style.backgroundColor = '#30ce00'
      setScore(score + 1)
    } else {
      e.target.style.backgroundColor = '#dd1010'
    }

    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        e.target.style.backgroundColor = ''
        setCurrentQuestion(currentQuestion + 1)
      } else {
        setShowFinalResults(true)
      }
      options.forEach((option) => {
        option.classList.remove('opacity-50')
        option.classList.remove('pointer-events-none')
      })
    }, 2000)
  }

  const restartGame = () => {
    window.location.reload()
  }

  return loading ? (
    <Loading />
  ) : (
    <>
      <div className="flex flex-col text-center justify-center">
        <h1 className="font-bold text-5xl">Quiz de Programación</h1>
        <h2 className="font-bold text-3xl mt-10">Puntuación: {score}</h2>
      </div>

      {!showFinalResults ? (
        <>
          <div className="flex flex-col mt-16 mb-5 mx-auto bg-gray-600 rounded-xl shadow-xl text-center p-10 w-4/5 h-auto ">
            <h2 className="font-semibold text-2xl text-white">
              Pregunta {currentQuestion + 1} de 10
            </h2>
            <h3
              className="font-bold text-xl mt-10 text-principiaOrange"
              dangerouslySetInnerHTML={{
                __html: questions[currentQuestion].text,
              }}></h3>
            <ul className="p-10 space-y-5 font-semibold">
              {questions[currentQuestion].options ? (
                questions[currentQuestion].options.map((option) => (
                  <motion.li
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => optionClicked(e, option.isCorrect)}
                    key={option.id}
                    className="w-1/2 border-4 mx-auto rounded-2xl p-4 text-xl bg-gray-400 cursor-pointer options">
                    {option.text}
                  </motion.li>
                ))
              ) : (
                <Loading />
              )}
            </ul>
          </div>
        </>
      ) : (
        <>
          <div className="text-center"></div>
          <div className="mt-20 mb-5 flex flex-col mx-auto bg-gray-600 rounded-xl shadow-xl text-center p-10 w-1/2 h-1/2">
            <div className="bg-gray-400 p-7 w-3/4 h-3/4 items-center justify-center m-auto rounded-xl flex flex-col">
              <div className="font-bold text-3xl">Resultado final</div>
              <div
                className={`mt-5 font-bold text-2xl ${
                  score >= 5 ? 'text-[#289c28]' : 'text-[#dd1010]'
                }`}>
                {score} de {questions.length} - (
                {(score / questions.length) * 100} %)
              </div>
            </div>
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => restartGame()}
            className="flex mx-auto py-4 px-8 mt-20 bg-principiaOrange rounded-full font-semibold text-xl">
            Reiniciar
          </motion.button>
        </>
      )}
    </>
  )
}

export default Quiz
