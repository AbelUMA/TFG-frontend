import { React } from 'react'
import { motion } from 'framer-motion'
import { VscChromeClose } from 'react-icons/vsc'

function Popup({ setIsOpenPopup }) {
  const hidePopup = () => {
    setIsOpenPopup(false)
  }

  const dropIn = {
    hidden: {
      y: '-100vh',
      opacity: 0,
    },
    visible: {
      y: '0',
      opacity: 1,
      transition: {
        duration: 0.2,
        type: 'spring',
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: '100vh',
      opacity: 0,
    },
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex">
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="bg-white p-4 rounded w-full relative mx-[32rem] my-[12rem]">
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="left-0 top-0 text-2xl"
          onClick={hidePopup}>
          <VscChromeClose />
        </motion.button>
        <div className="text-center justify-center h-16 py-16 items-center">
          <span className="font-black text-5xl bg-principiaOrange px-8 py-4 rounded-2xl inline-block">
            ¡ENHORABUENA!
          </span>
        </div>
        <div className="text-center mt-20 text-3xl font-black">
          Has conseguido <span className="text-principiaOrange">GANAR</span>{' '}
        </div>
        <div className="text-center mt-10 text-2xl">
          Ahora sabes diferenciar los principales elementos
        </div>
        <div className="text-center text-2xl">
          de la programacion y sus usos
        </div>
      </motion.div>
    </div>
  )
}

export default Popup
