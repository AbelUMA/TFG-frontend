import { React, useState, useEffect } from 'react'
import { DragDropContainer, DropTarget } from 'react-drag-drop-container'
import { motion, useAnimation } from 'framer-motion'
import ScaleLoader from 'react-spinners/ScaleLoader'
import { algorithmYourself } from '../../data/algorithmYourself.js'

function Exercise2({ fetchData }) {
  const controls = useAnimation()
  const buttonControls = useAnimation()

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

  const variantsButton = {
    start: {
      scale: [1, 1.25, 1],
      transition: {
        duration: 2,
        ease: 'easeInOut',
        times: [0, 0.2, 0.5, 0.8, 1],
        loop: Infinity,
      },
    },
    stop: {
      rotate: 0,
    },
  }

  const [score, setScore] = useState(0)

  const handleDropExercise = (e) => {
    if (e.dragData === e.dropData) {
      const elem = e.dropElem.children[0]
      elem.classList.add('bg-principiaGreen')
      elem.classList.remove('border-dashed')
      elem.innerHTML = e.dragData
      controls.stop()
      controls.start('notWrong')
      e.srcElement.classList.add('invisible')
      setScore(score + 1)
      if (score === 2) {
        const nextButton = document.getElementById('next-button')
        nextButton.classList.remove('opacity-50')
        nextButton.classList.remove('pointer-events-none')
        buttonControls.start('start')
      }
    } else {
      controls.start('wrong')
    }
  }

  return (
    <>
      <div className="container mx-auto select-none overflow-hidden">
        <div className="mt-5 h-screen flex items-stretch select-none">
          <div className="relative h-4/5 lg:w-1/2 border-2 border-black rounded-md text-center w-full bg-gray-400 mx-2">
            <div className="mt-14 py-6 px-9 text-xl font-medium text-left w-full">
              <div className="flex flex-row">
                <div className="mt-4">
                  <span className="text-[#ac38a3]">int</span>{' '}
                  <span className="text-[#bd3939]">num</span> = 5;
                </div>
              </div>
              <div className="flex flex-row mt-10">
                <DropTarget dropData="IF">
                  <div className="text-lg font-bold options justify-center items-center text-center inline-block box-content h-8 w-28 p-4 border-4 rounded-md border-dashed"></div>
                </DropTarget>
                <div className="indent-8 mt-4">
                  (<span className="text-[#bd3939]">num</span> &#61;&#61; 10)
                  &#123;
                </div>
              </div>
              <div className="mt-4">
                <div className="indent-8 mt-4">
                  <span className="text-[#bd3939]">num</span> = 0;
                </div>
              </div>
              <div className="flex flex-row mt-8">
                <div className="mt-5">&#125;</div>
                <DropTarget dropData="ELSE">
                  <div className="ml-6 text-lg font-bold options justify-center items-center text-center inline-block box-content h-8 w-28 p-4 border-4 rounded-md border-dashed"></div>
                </DropTarget>
                <div className="mt-5 ml-6">&#123;</div>
              </div>
              <div className="flex flex-row mt-4">
                <div className="indent-8">
                  <span className="text-[#bd3939]">num</span> = 10;
                </div>
              </div>
              <div className="mt-5">&#123;</div>
              <div className="flex flex-row mt-20">
                <div className="mt-4 mr-6 text-[#ac38a3]">return</div>
                <DropTarget dropData="COUNT">
                  <div className="text-lg font-bold options justify-center items-center text-center  inline-block box-content h-8 w-28 p-4 border-4 rounded-md border-dashed"></div>
                </DropTarget>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 ">
            <div className="h-1/3 flex text-center justify-center items-center mx-2">
              <motion.a
                id="next-button"
                href="http://localhost:3000/algorithm/yourself/3"
                variants={variantsButton}
                animate={buttonControls}
                whileTap={{ scale: 0.9 }}
                className="text-4xl border-black border-2 rounded-full py-2 px-4 opacity-50 pointer-events-none">
                <p>Next</p>
              </motion.a>
            </div>
            <div className="h-2/5 text-justify justify-center items-center mx-2 mt-16 bg-gray-900 p-4 border-2 border-black rounded-md">
              <ul className="grid grid-cols-3 gap-4 mx-10 content-center h-full">
                {fetchData ? (
                  fetchData[1].options.map((option) => (
                    <DragDropContainer
                      key={option.id}
                      dragData={option.text}
                      onDrop={handleDropExercise}>
                      <motion.li
                        animate={controls}
                        variants={variantsCard}
                        key={option.id}
                        className={`options text-lg font-bold mt-auto mx-auto box-content flex justify-center items-center text-center h-8 w-28 p-4 border-4 rounded-md bg-${option.color}`}>
                        {option.text}
                      </motion.li>
                    </DragDropContainer>
                  ))
                ) : (
                  <ScaleLoader />
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Exercise2
