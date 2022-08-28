/* eslint-disable array-callback-return */
import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CgChevronDoubleDown, CgChevronDoubleUp } from 'react-icons/cg'
import PersonalPhoto from '../media/img/presentation/home-me.jpg'
import UmaLogo from '../media/img/presentation/UMA-logo.jpg'
import PrincipiaLogo from '../media/img/presentation/principia-logo.png'
import { sidebarMenu } from '../data/menu'

function Presentation() {
  const [footerMenu] = useState(sidebarMenu)

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
        <div id="welcome" className="flex">
          <div className="max-w-xl mx-auto mt-20 text-2xl text-center">
            <p className="mb-8">
              <span className="font-semibold text-4xl">¡BIENVENIDO/A!</span>
            </p>
            <p className="mb-4">
              <span className="font-semibold">
                ¿TE GUSTA LA INFORMÁTICA Y QUIERES ENTRAR EN EL MUNDO DE LA
                PROGRAMACIÓN?
              </span>
            </p>
            <p className="mb-4">¡Este es tu sitio!</p>
            <p className="mb-12">
              Mi nombre es <span className="font-semibold">Abel Galván</span> y
              te presento mi{' '}
              <span className="font-semibold">
                Trabajo Fin de Grado de Ingeniería Informática
              </span>{' '}
              en la UMA.
            </p>
            <p className="mb-12">
              ¿Qué significa esto? Que he terminado la carrera y por fin puedo
              decir que <span className="font-semibold">¡soy ingeniero!</span>
            </p>
            <p className="mb-12">
              Siempre me ha gustado enseñar mis conocimientos a los demás que
              estan interesados en aprender sobre la informática y la
              programación y qué mejor forma de hacerlo que creando una
              aplicación interactiva con juegos y nociones básicas.
            </p>

            <p className="m-20">
              <img
                className="rounded-full border-2 border-black  "
                src={PersonalPhoto}
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
        <footer className="p-4 bg-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={UmaLogo} className="mr-8 h-32" alt="UMA Logo" />
              <img src={PrincipiaLogo} className="mr-3 h-10" alt="UMA Logo" />
            </div>
            {footerMenu && (
              <ul className="flex flex-wrap items-center mt-auto mb-auto text-lg text-gray-900">
                {footerMenu.map((menu) => {
                  if (menu.submenu.length === 0 && menu.title !== 'Conóceme') {
                    return (
                      <li key={menu.id}>
                        <Link to={menu.url}>
                          <div className="hover:underline hover:cursor-pointer mr-14">
                            {menu.title}
                          </div>
                        </Link>
                      </li>
                    )
                  } else if (menu.title !== 'Conóceme') {
                    return menu.submenu.map((submenu) => (
                      <li key={submenu.id}>
                        <Link to={submenu.url}>
                          <div className="hover:underline hover:cursor-pointer mr-14">
                            {submenu.title}
                          </div>
                        </Link>
                      </li>
                    ))
                  }
                })}
              </ul>
            )}
          </div>
          <hr className="border-gray-200 text-gray-900 my-8" />
          <span className="flex text-center justify-center text-gray-900">
            © 2022 Universidad de Málaga™ . All Rights Reserved.
          </span>
        </footer>
      </div>
    </>
  )
}

export default Presentation
