import { React, useState, useEffect } from 'react'
import { DragDropContainer, DropTarget } from 'react-drag-drop-container'
import { motion, useAnimation } from 'framer-motion'
import {
  BsFillDoorClosedFill,
  BsFillDoorOpenFill,
  BsFillKeyFill,
} from 'react-icons/bs'
import { algorithmYourself } from '../../data/algorithmYourself.js'
import Exercise1 from '../../components/Exercise1.jsx'

function AlgorithmYourself() {
  const controls = useAnimation()

  const getRandomDelay = () => -(Math.random() * 0.7 + 0.05)
  const randomDuration = () => Math.random() * 0.07 + 0.23

  const variantsCard = {
    wrong: {
      rotate: [-1, 1.3, 0],
      transition: {
        delay: getRandomDelay(),
        repeat: 1,
        duration: randomDuration(),
      },
    },
    notWrong: {
      rotate: 0,
    },
  }

  const [fetchData, setFetchData] = useState([{}])
  const [currentExercise, setCurrentExercise] = useState(0)
  const [isOpenDoor, setIsOpenDoor] = useState(false)
  const [isStartGame, setIsStartGame] = useState(false)

  useEffect(() => {
    setFetchData(algorithmYourself)
  }, [])

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

  const handleDropExercise = (e) => {
    console.log(e)
    if (e.dragData === e.dropData) {
      const elem = e.dropElem.children[0]
      elem.classList.add('bg-principiaGreen')
      elem.classList.remove('border-dashed')
      elem.innerHTML = e.dragData
      controls.stop()
      controls.start('notWrong')
      e.srcElement.classList.add('invisible')
    } else {
      controls.start('wrong')
    }
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
  ) : (
    <div className="container mx-auto select-none overflow-hidden">
      <div className="mt-5 h-screen flex items-stretch select-none">
        <div className="relative h-4/5 lg:w-1/2 border-2 border-black rounded-md text-center w-full bg-gray-400 mx-2">
          <div className="mt-14 py-6 px-9 text-xl font-medium text-left w-full">
            {
              {
                0: <Exercise1 />,
              }[currentExercise]
            }
          </div>
        </div>
        <div className="lg:w-1/2 ">
          <div className="h-1/3 mx-2"></div>
          <div className="h-2/5 text-justify justify-center items-center mx-2 mt-16 bg-gray-900 p-4 border-2 border-black rounded-md">
            <ul className="grid grid-cols-3 gap-4 mx-10 content-center h-full">
              {fetchData[currentExercise].options.map((option) => (
                <DragDropContainer
                  key={option.id}
                  dragData={option.text}
                  onDrop={handleDropExercise}>
                  <motion.li
                    animate={controls}
                    variants={variantsCard}
                    key={option.id}
                    className={`text-lg font-bold mt-auto mx-auto box-content flex justify-center items-center text-center h-8 w-28 p-4 border-4 rounded-md bg-${option.color}`}>
                    {option.text}
                  </motion.li>
                </DragDropContainer>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlgorithmYourself
