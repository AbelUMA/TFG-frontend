import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai'

function Algorithm() {
  const animation = {
    scale: [1, 2, 1],
  }

  const transition = {
    duration: 2,
    ease: 'easeInOut',
    times: [0, 0.2, 0.5, 0.8, 1],
    loop: Infinity,
  }

  const MotionLink = motion(Link)

  return (
    <div className="container mx-auto   overflow-hidden">
      <h1 className="font-black text-5xl text-center w-2/3 mx-auto mb-10">
        Algoritmos y Programación
      </h1>
      <div className="mt-20 h-screen flex items-stretch  ">
        <MotionLink
          to={'/algorithm/yourself'}
          whileTap={{ scale: 0.9 }}
          className="relative h-3/4  w-1/2 border-2 border-black rounded-md text-center bg-gradient-to-r from-principiaBlue to-principiaGreen justify-center items-center mx-2">
          <h2 className="mt-10 text-5xl font-semibold">Prueba tú mismo</h2>
          <div className="mt-14 py-6 px-9 text-2xl font-medium">
            En esta sección podrás poner a prueba todos tus conocimientos acerca
            de programación ya que, estará a tu disposición diferentes ejemplos
            de programas. <br />
            Consistirá en múltiples y divertidos ejercicios que van aumentando
            en dificultad donde el principal objetivo es, como es de costumbre,
            aprender más y más sobre la informática y, en concreto, sobre la
            programación.
          </div>
          <motion.div
            animate={animation}
            transition={transition}
            className="absolute bottom-0 left-1/2 mb-10 text-center text-4xl">
            <AiOutlineDoubleLeft />
          </motion.div>
        </MotionLink>
        <MotionLink
          to={'/algorithm/examples'}
          whileTap={{ scale: 0.9 }}
          className="relative h-3/4  w-1/2 border-2 border-black rounded-md text-center bg-gradient-to-r from-principiaPurple to-principiaOrange justify-center items-center mx-2">
          <h2 className="mt-10 text-5xl font-semibold">Ver ejemplos</h2>
          <div className="mt-14 py-6 px-9 text-2xl font-medium">
            Si entras en este apartado encontrarás varios ejemplos sobre
            diferentes trozos de código que ejecutan diferentes funcionalidades.
            Aquí podrás ver cómo avanza el programa a la hora de guardar
            variables y sus datos, llamadas a sus funciones y ¡mucho más! <br />
            Está a tu alcance poder ejecutar y ver cuantas veces quieras el
            programa y así, estar al tanto de como funciona todo por "dentro"
          </div>
          <motion.div
            animate={animation}
            transition={transition}
            className="absolute bottom-0 left-1/2 mb-10 text-center text-4xl">
            <AiOutlineDoubleRight />
          </motion.div>
        </MotionLink>
      </div>
    </div>
  )
}

export default Algorithm
