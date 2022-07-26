import { React } from 'react'
import { motion } from 'framer-motion'
import { VscChromeClose } from 'react-icons/vsc'

function Modal({ setIsOpenModal }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex">
      <div className="bg-white p-4 rounded w-full relative mx-80 my-40">
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="left-0 top-0 text-2xl"
          onClick={() => setIsOpenModal(false)}>
          <VscChromeClose />
        </motion.button>
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
              Entonces tu objetivo es conseguir llevar todas las tarjetas a las
              correspondientes cajas.
            </li>
            <li className="mb-3">
              Como consejo, deberías visitar antes el apartado{' '}
              <span className="font-bold">"Conceptos básicos".</span>
            </li>
            <li className="mb-3">Ánimo, ¡seguro que lo consigues!</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Modal
