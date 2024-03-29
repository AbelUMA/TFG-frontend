import { React, useState, useEffect } from 'react'

import Card from '../components/Card'
import Box from '../components/Box'
import Modal from '../components/Modal'
import { motion } from 'framer-motion'
import axiosAPI from '../config/axiosAPI'
import Loading from '../components/Loading'
import { AiOutlineQuestionCircle, AiOutlineReload } from 'react-icons/ai'
import Popup from '../components/Popup'

function DragAndDrop() {
  const [num, setNum] = useState(0)
  const [loading, setLoading] = useState(false)

  const [cards, setCards] = useState([{}])
  const [boxes, setBoxes] = useState([{}])

  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isOpenPopup, setIsOpenPopup] = useState(false)

  useEffect(() => {
    setNum(randomNumberInRange(1, 3))
  }, [])

  useEffect(() => {
    const getCards = async () => {
      try {
        setLoading(true)
        const url = '/cards?type=' + num
        const { data } = await axiosAPI(url)
        data.sort(() => 0.5 - Math.random())
        setCards(data)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    const getBoxes = async () => {
      try {
        setLoading(true)
        const url = '/boxes?type=' + num
        const { data } = await axiosAPI(url)
        data.sort(() => 0.5 - Math.random())
        setBoxes(data)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    getCards()
    getBoxes()
  }, [num])

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  return loading ? (
    <Loading />
  ) : (
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
        <div className="container mx-auto mt-20 overflow-hidden">
          <h1 className="font-black text-5xl text-center w-2/3 mx-auto mb-10">
            <span className="text-principiaOrange">Arrastra y suelta</span> las
            tarjetas en los correspondientes{' '}
            <span className="text-principiaOrange">huecos</span>{' '}
          </h1>
        </div>

        <div className="mt-20 flex items-stretch ">
          <Card targetKey="card" cards={cards}></Card>
          <Box
            targetKey="card"
            boxes={boxes}
            setIsOpenPopup={setIsOpenPopup}></Box>
        </div>
      </>

      {isOpenModal && <Modal setIsOpenModal={setIsOpenModal} dataType={num} />}
      {isOpenPopup && <Popup setIsOpenPopup={setIsOpenPopup} />}
    </>
  )
}

export default DragAndDrop
