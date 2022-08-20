import { React, useState } from 'react'
import { DragDropContainer, DropTarget } from 'react-drag-drop-container'
import { motion, useAnimation } from 'framer-motion'
import {
  BsFillDoorClosedFill,
  BsFillDoorOpenFill,
  BsFillKeyFill,
} from 'react-icons/bs'
import ScaleLoader from 'react-spinners/ScaleLoader'
import Exercise1 from '../../components/Exercises/Exercise1.jsx'

function AlgorithmYourself() {
  const controls = useAnimation()

  const [loading, setLoading] = useState(false)
  const [isOpenDoor, setIsOpenDoor] = useState(false)
  const [isStartGame, setIsStartGame] = useState(false)

  const handleDrop = (e) => {
    controls.start('open')
    setTimeout(() => {
      setIsOpenDoor(true)
    }, 1000)
  }

  const handleDropKey = (e) => {
    e.srcElement.classList.add('invisible')
    setTimeout(() => {
      setIsStartGame(true)
    }, 2000)
  }

  const variants = {
    open: {
      x: -280,
    },
  }

  return !isStartGame ? (
    <>
      <div className="border-2 border-black rounded-lg mt-12 h-[300px] flex flex-col items-center justify-center mx-32 bg-gradient-to-r from-principiaBlue to-principiaGreen">
        <h1 className="font-bold text-5xl">¿Preparado para Programar?</h1>
        <h3 className="font-bold text-3xl mt-10">
          ¿Quieres saber programar y tomar las decisiones que completaran el
          código?
        </h3>
      </div>
      <div className="flex justify-center items-center mt-32 space-x-[500px]">
        <DragDropContainer
          targetKey="key"
          dragData="key"
          onDrop={handleDropKey}>
          <div className="text-5xl font-bold flex justify-center items-center text-center h-12 w-32">
            <BsFillKeyFill />
          </div>
        </DragDropContainer>

        <DropTarget onHit={handleDrop} targetKey="key" dropData="key">
          <motion.div
            animate={controls}
            variants={variants}
            className="text-4xl font-bold mx-auto box-content flex justify-center items-center text-center h-12 w-32 p-4">
            {isOpenDoor ? <BsFillDoorOpenFill /> : <BsFillDoorClosedFill />}
          </motion.div>
        </DropTarget>
      </div>
    </>
  ) : loading ? (
    <ScaleLoader />
  ) : (
    <Exercise1 />
  )
}

export default AlgorithmYourself
