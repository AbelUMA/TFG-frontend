import { React, useState } from 'react'
import { initialCards } from '../data/cards'
import { initialBoxes } from '../data/boxes'
import Card from '../components/Card'
import Box from '../components/Box'
import Modal from '../components/Modal'
import { motion } from 'framer-motion'
import { AiOutlineQuestionCircle, AiOutlineReload } from 'react-icons/ai'
import Popup from './Popup'

function DragAndDrop() {
  const shuffleCards = initialCards.sort(() => Math.random() - 0.5)
  const shuffleBoxes = initialBoxes.sort(() => Math.random() - 0.5)

  const [cards, setCards] = useState(shuffleCards)
  const [boxes, setBoxes] = useState(shuffleBoxes)

  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isOpenPopup, setIsOpenPopup] = useState(false)

  return (
    <>
      <div className="top-0 right-0 text-3xl">
        <motion.button
          onClick={() => window.location.reload()}
          whileTap={{ scale: 0.9 }}>
          <AiOutlineReload />
        </motion.button>
      </div>
      <div className="absolute top-10 right-10 text-4xl">
        <motion.button
          onClick={() => setIsOpenModal(true)}
          whileTap={{ scale: 0.9 }}>
          <AiOutlineQuestionCircle />
        </motion.button>
      </div>
      <>
        <div className="container mx-auto mt-20 select-none overflow-hidden">
          <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto mb-10">
            <span className="text-principiaOrange">Arrastra y suelta</span> las
            tarjetas en los correspondientes{' '}
            <span className="text-principiaOrange">huecos</span>{' '}
          </h1>
        </div>

        <div className="mt-20 flex items-stretch select-none">
          <Card targetKey="card" cards={cards}></Card>
          <Box
            targetKey="card"
            boxes={boxes}
            setIsOpenPopup={setIsOpenPopup}></Box>
        </div>
      </>

      {isOpenModal && <Modal setIsOpenModal={setIsOpenModal} />}
      {isOpenPopup && <Popup setIsOpenPopup={setIsOpenPopup} />}
    </>
  )
}

export default DragAndDrop
