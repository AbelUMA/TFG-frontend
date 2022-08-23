import React from 'react'
import { motion } from 'framer-motion'
import { CgChevronDoubleDown, CgChevronDoubleUp } from 'react-icons/cg'
import personalPhoto from '../media/img/presentation/home-me.jpg'

function Presentation() {
  const animation = {
    opacity: [0, 1, 0],
  }

  const transition = {
    duration: 2,
    ease: 'easeInOut',
    times: [0, 0.2, 0.5, 0.8, 1],
    loop: Infinity,
  }

  const goWelcome = () => {
    document.getElementById('welcome').scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <>
      <div className="-m-10">
        <header className="flex items-end justify-center h-screen bg-fixed bg-center bg-cover bg-[url('/src/media/img/presentation/code-gif.gif')]">
          <motion.div animate={animation} transition={transition}>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={goWelcome}
              className="mt-56 p-8 text-3xl mb-12 font-bold bg-gray-300 bg-opacity-50 rounded-full">
              <CgChevronDoubleDown />
            </motion.button>
          </motion.div>
        </header>
        <div id="welcome" className="flex text-center">
          <div className="max-w-xl mx-auto mt-10">
            <p className="mb-8">
              <span className="font-semibold text-3xl">¡BIENVENIDO/A!</span>
            </p>
            <p className="mb-4">
              <span className="font-semibold">
                ¿TE GUSTA LA INFORMÁTICA Y QUIERES ENTRAR EN EL MUNDO DE LA
                PROGRAMACIÓN?
              </span>
            </p>
            <p className="mb-4">¡Este es tu sitio!</p>
            <p className="mb-4">
              Mi nombre es <span className="font-semibold">Abel Galván</span> y
              te presento mi{' '}
              <span className="font-semibold">
                Trabajo Fin de Grado de Ingeniería Informática
              </span>{' '}
              en la UMA.
            </p>
            <p className="mb-12">
              ¿Qué significa esto? Que he terminado la carrera y por fin puedo
              decir que <span className="font-semibold">¡soy ingeniero!</span>{' '}
              <br /> Siempre me ha gustado enseñar mis conocimientos a los demás
              que estan interesados en aprender sobre la informática y la
              programación y qué mejor forma de hacerlo que creando una
              aplicación interactiva con juegos y nociones básicas.
            </p>
            <p className="m-20">
              <img
                className="rounded-full border-2 border-black select-none"
                src={personalPhoto}
                alt="Abel Galvan"
              />
            </p>
          </div>
        </div>
        <section className="flex items-end justify-center h-screen bg-fixed bg-center bg-cover bg-[url('/src/media/img/presentation/code-gif.gif')]">
          <motion.div animate={animation} transition={transition}>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={goWelcome}
              className="mt-56 p-8 text-3xl mb-12 font-bold bg-gray-300 bg-opacity-50 rounded-full">
              <CgChevronDoubleUp />
            </motion.button>
          </motion.div>
        </section>
      </div>
    </>
  )
}

export default Presentation
