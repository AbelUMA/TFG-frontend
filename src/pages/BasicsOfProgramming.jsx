import { React, useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { basicsOfProgramming } from '../data/basicsOfProgramming'

function BasicsOfProgramming() {
  const [content, setContent] = useState({})

  return (
    <div className="mt-5 flex items-stretch select-none">
      <div className="md:w-1/2 lg:w-1/2 mx-5">
        <h2 className="font-black text-3xl text-center">
          Conceptos básicos sobre la programación
        </h2>
        <p className="text-lg mt-5 text-center mb-10">
          Pulsa sobre una{' '}
          <span className="text-indigo-600 font-bold">Pestaña</span> para elegir
          un {''}
          <span className="text-indigo-600 font-bold">Tema</span>
        </p>
        <div className="container mt-16 mx-auto flex-col justify-center items-center w-2/3">
          {basicsOfProgramming.map((elem) => (
            <motion.div
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setContent(elem)
              }}
              key={elem.id}
              className={`mb-10 flex flex-wrap break-all rounded-lg border-2 px-8 text-xl py-2 ${
                elem.title === content.title ? 'text-indigo-600' : ''
              } font-semibold cursor-pointer`}>
              <span className="w-11/12">{elem.title}</span>
              <p className="w-1/12 flex items-center justify-end">
                <BsArrowRight />
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="md:w-1/2 lg:w-1/2 md:h-screen">
        <h2 className="font-black text-3xl text-center">
          Te contamos un poco sobre...
        </h2>
        <p className="text-lg mt-5 text-center mb-10 font-bold text-indigo-600">
          {content.title}
        </p>
        <div
          className="container mt-16 mx-auto font-semibold text-xl flex-col text-center justify-center items-center w-2/3 leading-10"
          dangerouslySetInnerHTML={{ __html: content.text }}></div>
      </div>
    </div>
  )
}

export default BasicsOfProgramming
