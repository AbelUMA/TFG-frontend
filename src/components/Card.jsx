import { React, memo } from 'react'
import { DragDropContainer } from 'react-drag-drop-container'
import { motion, useAnimation } from 'framer-motion'

const Card = memo(({ cards, targetKey }) => {
  const controls = useAnimation()

  const getRandomDelay = () => -(Math.random() * 0.7 + 0.05)
  const randomDuration = () => Math.random() * 0.07 + 0.23

  const variants = {
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

  const handleDrop = (e) => {
    if (e.dragData === e.dropData) {
      controls.stop()
      controls.start('notWrong')
      e.srcElement.classList.add('invisible')
    } else {
      controls.start('wrong')
    }
  }

  return (
    <div className="md:w-1/2 lg:w-1/2 mx-5">
      <div>
        <h2 className="font-black text-3xl text-center">
          Tarjetas para Arrastrar
        </h2>
        <p className="text-lg mt-5 text-center mb-10">
          Colocalas en los {''}
          <span className="text-[#e9943b] font-bold">Huecos</span>
        </p>
        <ul className="grid grid-cols-3 gap-4 mx-10">
          {cards.map((card) => (
            <DragDropContainer
              targetKey={targetKey}
              disappearDraggedElement={true}
              dragData={card.class}
              onDrop={handleDrop}>
              <motion.li
                animate={controls}
                variants={variants}
                key={card.id}
                id={card.text}
                className="text-lg font-bold mx-auto box-content flex justify-center items-center text-center h-12 w-32 p-4 border-4 rounded-md"
                style={{ backgroundColor: card.color }}>
                {card.text}
              </motion.li>
            </DragDropContainer>
          ))}
        </ul>
      </div>
    </div>
  )
})

export default Card
