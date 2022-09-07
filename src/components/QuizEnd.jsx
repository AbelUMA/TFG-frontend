import { React } from 'react'
import { motion } from 'framer-motion'

const restartGame = () => {
  window.location.reload()
}

function QuizEnd({ score, questionsLength }) {
  return (
    <>
      <div className="text-center"></div>
      <div className="mt-20 mb-5 flex flex-col mx-auto bg-gray-600 rounded-xl shadow-xl text-center p-10 w-1/2 h-1/2">
        <div className="bg-gray-400 p-7 w-3/4 h-3/4 items-center justify-center m-auto rounded-xl flex flex-col">
          <div className="font-bold text-3xl">Resultado final</div>
          <div
            className={`mt-5 font-bold text-2xl ${
              score >= 5 ? 'text-[#289c28]' : 'text-[#dd1010]'
            }`}>
            {score} de {questionsLength} - ({(score / questionsLength) * 100} %)
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
  )
}

export default QuizEnd
