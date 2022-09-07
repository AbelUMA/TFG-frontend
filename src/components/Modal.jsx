import { React } from 'react'
import { motion } from 'framer-motion'
import { VscChromeClose } from 'react-icons/vsc'

function Modal({ setIsOpenModal, type }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex">
      <div className="bg-white p-4 rounded w-full relative mx-80 my-40">
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="left-0 top-0 text-2xl"
          onClick={() => setIsOpenModal(false)}>
          <VscChromeClose />
        </motion.button>
        {type === 'dnd' ? (
          <div className="text-center justify-center items-center">
            <h1 className="font-black text-3xl text-gray-700 pb-28">
              Un poco de ayuda...
            </h1>
            <ul className="list-disc text-left pl-10 text-2xl">
              <li className="mb-3">
                Cada carta pertenece a una parte de la programación.
              </li>
              <li className="mb-3">
                Por ejemplo,{' '}
                <span className="bg-principiaPurple rounded px-1 font-semibold text-white">
                  VAR
                </span>{' '}
                pertenece al tipo{' '}
                <span className="bg-principiaPurple rounded px-1 font-semibold text-white">
                  GENERAL
                </span>
              </li>
              <li className="mb-3">
                Entonces tu objetivo es conseguir llevar todas las tarjetas a
                las correspondientes cajas.
              </li>
              <li className="mb-3">
                Como consejo, deberías visitar antes el apartado{' '}
                <span className="font-bold">"Conceptos básicos".</span>
              </li>
              <li className="mb-3">Ánimo, ¡seguro que lo consigues!</li>
            </ul>
          </div>
        ) : (
          <div className="text-center justify-center items-center">
            <h1 className="font-black text-3xl text-gray-700 pb-20">
              💻 Manual de Programación 📚
            </h1>
            <ul className="list-disc text-left pl-10 text-2xl">
              <li className="mb-3">
                Puedes crear variables y guardar datos dentro ➡{' '}
                <span className="text-principiaPurple font-bold">var</span>{' '}
                <span className="text-red-600 font-bold">edad = 22;</span>
              </li>
              <li className="mb-3">
                Esas{' '}
                <span className="text-principiaPurple font-bold">
                  variables
                </span>{' '}
                se pueden usar tanto en funciones, como en demas estructuras.
              </li>
              <li className="mb-3">
                Puedes ver su contenido escribiendo ➡{' '}
                <span className="text-principiaBlue font-bold">print(</span>
                <span className="text-red-600 font-bold">edad</span>
                <span className="text-principiaBlue font-bold">)</span>
                <span className="font-bold">;</span>
              </li>
              <li className="mb-3">
                Define{' '}
                <span className="text-principiaBlue font-bold">funciones</span>{' '}
                dándole un nombre con la palabra{' '}
                <span className="text-principiaBlue font-bold">function</span>{' '}
                delante, poniendo paréntesis despues del nombre (), añádele
                parámetros dentro si es necesario (
                <span className="text-principiaPurple font-bold">ejemplo</span>)
                y escribe el contenido de tu{' '}
                <span className="text-principiaBlue font-bold">función</span>{' '}
                entre corchetes &#123;&#125;.
              </li>
              <li className="mb-3">
                ¡También puedes escribir estructuras condicionales como las que
                se exponen en los ejemplos de la aplicación!
              </li>
              <li className="mb-3">
                Ahora solo queda que despliegues tu imaginación y crees tus
                propios programas 🚀
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Modal
